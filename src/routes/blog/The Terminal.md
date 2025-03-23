---
title: "The Terminal."
date: "2025-03-19"
lastModified: "2025-03-21"
description: "My thoughts on the terminal."
---
<script>
  import ubuntu_term from "$lib/assets/blog/The_Terminal/ubuntu_shell.png"
  import kali_term from "$lib/assets/blog/The_Terminal/kali_shell.png"
</script>


## Why use the terminal?
The terminal has been used to interact with computers long before GUI's were available to use. It is a way to directly and explicitly interact with the computer rather than relying on a GUI and can be very unfriendly to the unacquainted.

My first time using any kind of terminal was probably using the old windows 10 terminal to run and load python scripts in secondary school. I enjoyed this a lot as I figured out you can run other commands on the terminal such as netstat which looked very cool at the time as it would display ALL the computers on the school's network and their names.

After a while, I started getting more and more into open-source software through discovering platforms like GitHub, this then lead me to try out linux as an operating system. I didn't want to fully commit as I was still unsure about using linux so I went for what I assume most people use today - a Virtual Machine (VM). I went with Ubuntu as that is what most people said online is best for beginners. The installation process is very easy and very similar to Windows so it was pretty painless, and the OS was working well. After using the command line for a few things I realized just how powerful and useful it was - you can do pretty much anything with a computer just using the terminal (other than gui-only things like an excel spreadsheet), and I loved it - the feeling of typing in specific commands that you would only know from experience or knowledge from somewhere else was amazing to see, and a very different experience to using GUI's.

As I continued to use Linux, I eventually found out about hacking and wanting to be a super cool hackerman, I installed Kali Linux on a VM (very similar to Ubuntu's installation). However, when I opened the terminal, I found that it used a completely different shell that had much more comfort of life changes:
<img src="{ubuntu_term}" width=40% />
<img src="{kali_term}" width=45%/>

As you can see the layout is much nicer and (in my opinion) is easier to read. You may also notice that these two have different shells (Ubuntu (left) has bash & Kali has zsh (right)). the bash has been around for years with its initial release date in 1989 and is a very nice shell and programming language that I personally enjoy - the zsh or Z shell has also been around for years with it's initial release date in 1990 (very close to bash).

As soon as I experienced the features / plugins that zsh offered such as: autocompletion, autosuggestions and syntax-highlighting it instantly became a must-have for me working in the terminal, everything worked like how writing code in IDE's was - a wrong command would show its wrong before I executed it which has saved me a lot of headaches that I had before when not typing something in quite right and made developing a lot easier and enjoyable - tabbing through directories is much easier and faster as it's more interactive than bash.

(show gif of zsh with omz and plugins working)