---
title: "Test"
date: 2026-01-01
lastmod: 2026-01-01
description: "bruh moment"
---

# GoNIS - Architecture & Program Flow

## Overview

GoNIS is a high-performance network intrusion detection system (NIDS) written in Go. It captures packets via AF_PACKET (TPacket v3), processes them through a signature rule engine and an AI pipeline (Random Forest + Autoencoder), and writes structured JSON alerts to disk.

---

### Flowchart is availible on https://app.diagrams.net/# -> File > open from > device 

---

## Key Design Decisions

| Decision | Rationale |
|---|---|
| **TPacket v3 (AF_PACKET)** | Block-mode capture avoids per-packet syscall overhead; ~20% faster than v2 |
| **ZeroCopyReadPacketData** | Avoids double-copy vs `gopacket.NewPacketSource`; reduces app-layer drops at high pps |
| **Worker pool (1 per CPU)** | Parallelises processing without goroutine-per-packet overhead |
| **packetChannel buffer = 100,000** | Absorbs bursts; `UserDropped` counter tracks when it fills |
| **Online flow statistics (Welford)** | Computes mean/std/min/max incrementally without storing all packets |
| **Minimum 10 packets before AI inference** | Prevents noisy inference on single-packet flows |
| **5s inference cooldown per flow** | Avoids redundant inference on long-lived flows |
| **Async alerter with 2048-element channel** | Decouples alert I/O from packet processing; drops are counted not blocking |
| **BPF filter (tcp/udp/icmp/arp)** | Kernel-level filtering before packets reach userspace |

---

## Package Summary

| Package | Responsibility |
|---|---|
| `main` | AF_PACKET setup, packet capture loop, goroutine wiring, shutdown/pprof |
| `processor` | `PacketHeaders` struct, `ProcessHeaders()`, IP stats, TCP flag tracking, rule engine evaluation |
| `state` | `ConnectionManager` - host discovery, flow state tracking, live metrics ticker |
| `ai` | Flow record accumulation, feature extraction, ONNX inference (RF + AE) |
| `alerting` | Async alert channel, JSON serialisation to `alerts.jsonl`, stats tracking |
| `monitoring` | Prometheus metrics registration, HTTP server (`:2112`) |
| `config` | Load/parse `config.json` and `signatures.json` (embedded defaults) |

