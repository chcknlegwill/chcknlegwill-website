---
title: ""
date: 2026-07-14
draft: false
# These flags help disable theme headers/footers if your theme supports custom layouts:
type: "page"
layout: "simple" 
---

<style>
    /* Gruvbox Dark Theme Variables */
    :root {
        --bg0: #282828;
        --bg1: #3c3836;
        --bg2: #32302f;
        --fg: #ebdbb2;
        --fg-bright: #fbf1c7;
        --orange: #d65d0e;
        --yellow: #fabd2f;
        --green: #b8bb26;
        --gray: #a89984;
    }

    .lp-container {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background-color: var(--bg0);
        color: var(--fg);
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        line-height: 1.6;
    }

    .lp-header {
        text-align: center;
        border-bottom: 2px solid var(--orange);
        padding-bottom: 20px;
        margin-bottom: 30px;
    }

    .lp-tagline {
        color: var(--yellow);
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1.5px;
        font-size: 1.1rem;
        margin-bottom: 5px;
    }

    .lp-title {
        color: var(--fg-bright);
        font-size: 2.5rem;
        margin: 0;
        font-weight: 800;
    }

    .lp-location {
        color: var(--green);
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 10px;
    }

    .lp-intro {
        background-color: var(--bg1);
        padding: 20px;
        border-radius: 6px;
        border-left: 5px solid var(--green);
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 40px;
        color: var(--fg-bright);
    }

    .lp-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 40px;
    }

    @media (min-width: 600px) {
        .lp-grid {
            grid-template-columns: 1fr 1fr;
        }
    }

    .lp-card {
        background-color: var(--bg2);
        padding: 20px;
        border-radius: 6px;
        border-top: 3px solid var(--orange);
        display: flex;
        flex-direction: column;
    }

    .lp-card h3 {
        color: var(--fg-bright);
        margin-top: 0;
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .lp-card h3 img {
        width: 24px;
        height: 24px;
    }

    .lp-card p {
        font-size: 0.95rem;
        color: #bdae93;
        margin: 0;
    }

    .lp-promises {
        background-color: var(--bg1);
        padding: 25px;
        border-radius: 6px;
        margin-bottom: 40px;
    }

    .lp-promises h4 {
        color: var(--yellow);
        margin: 0 0 15px 0;
        text-transform: uppercase;
        font-size: 1.1rem;
        letter-spacing: 1px;
    }

    .lp-promises ul {
        margin: 0;
        padding-left: 20px;
    }

    .lp-promises li {
        margin-bottom: 10px;
        font-size: 1rem;
    }

    .lp-promises strong {
        color: var(--fg-bright);
    }

    .lp-footer {
        text-align: center;
        background-color: var(--bg2);
        padding: 30px;
        border-radius: 6px;
        border: 1px solid #504945;
    }

    .lp-cta {
        font-size: 1.2rem;
        color: var(--fg-bright);
        margin-bottom: 15px;
        font-weight: 600;
    }

    .lp-contact {
        font-size: 1.8rem;
        color: var(--yellow);
        font-weight: bold;
        text-decoration: none;
        display: block;
        margin-bottom: 5px;
    }

    .lp-contact:hover {
        text-decoration: underline;
    }

    .lp-email {
        font-size: 1.2rem;
        color: var(--fg);
        text-decoration: none;
        display: block;
    }

    .lp-email:hover {
        text-decoration: underline;
    }

    .lp-subtext {
        font-size: 0.95rem;
        color: var(--gray);
        margin-top: 15px;
    }
</style>
<div class="lp-container">
    <header class="lp-header">
        <div class="lp-tagline">Friendly, Patient & Jargon-Free</div>
        <h1 class="lp-title">Local IT Help & Tech Support</h1>
        <div class="lp-location">Serving Westgate-on-Sea & Surrounding Areas</div>
    </header>
    <div class="lp-intro">
        Technology can be frustrating, but it doesn't have to be. Whether your laptop has ground to a halt, your Wi-Fi won't reach the spare room, or you just need a patient hand explaining a new device - I am here to help.
    </div>
    <h2 style="color: var(--yellow); font-size: 1.5rem; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">How I Can Help You:</h2>
    <div class="lp-grid">
        <div class="lp-card">
            <h3><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4bb/512.png" alt="💻"> Laptop & PC Speed-Up</h3>
            <p>Clearing hidden bloatware, removing malware/viruses, optimizing your settings, or adding additional RAM and storage to make an old machine feel brand new.</p>
        </div>
        <div class="lp-card">
            <h3><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f6/512.png" alt="📶"> Home Wi-Fi & Networks</h3>
            <p>Eliminating wireless dead zones, reliably connecting your smart TV, and sorting out frustrating printer connection issues once and for all.</p>
        </div>
        <div class="lp-card">
            <h3><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4f1/512.png" alt="📱"> Device Setup & Data</h3>
            <p>Safely transferring your photos, contacts, and emails onto a new phone, tablet, or PC. I can also recover lost, deleted, or corrupted data.</p>
        </div>
        <div class="lp-card">
            <h3><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f468_200d_1f4bb/512.png" alt="👨‍💻"> Support & Tutoring</h3>
            <p>Helping you get confident with using devices for everyday tasks (emails, video calls, managing accounts) or configuring smart home devices like CCTV cameras.</p>
        </div>
    </div>
    <div class="lp-promises">
        <h4>My Guarantees To You:</h4>
        <ul>
            <li><strong>No Fix, No Fee:</strong> If I inspect a device and it requires hardware work beyond my current setup, you don't pay a penny.</li>
            <li><strong>Clear, Fixed Pricing:</strong> No confusing or ticking hourly clocks. You will know exactly what the job costs before I start.</li>
            <li><strong>Absolute Privacy:</strong> Your personal data, photos, and logins are treated with strict confidentiality in cooperation with UK GDPR guidelines.</li>
        </ul>
    </div>
    <footer class="lp-footer">
        <div class="lp-cta">Ready to fix your tech frustrations? Let's have a chat.</div>
        <a href="tel:07512599473" class="lp-contact">📞 Phone: 07512 599473</a>
        <a href="mailto:westgatetechsupport@gmail.com" class="lp-email">✉️ westgatetechsupport@gmail.com</a>
        <div class="lp-subtext">Friendly, unhurried support right here in Westgate-on-Sea</div>
    </footer>
</div>

