<img src="media\Header.png" style="zoom:80%;" />

# Remote Livestream Cue Light

Let the presenter know when your livestream is beginning and they need to talk to camera.

Built on a Raspberry Pi Zero w, and Piromi Blinkt!, it\'s controlled by any browser.

# Preview

Screen shots of the web interface

<img src="media\offair.png" style="zoom:25%;" />  	<img src="media\Standby.png" style="zoom:25%;" />

Green Lights Showing	Yellow Lights Showing

<img src="media\Countdown.png" style="zoom: 25%;" />	<img src="media\onair.png" style="zoom: 25%;" />

Countdown Lights		Red Lights

There can be multiple units, each on a separate fixed i.p. address and operated over WiFi.

One is designated the master unit and the browser is pointed at it. The remainder are repeater units. This is controlled by onair.config

# Table of contents

[TOC]



# Hardware

This project is built on the following hardware, most of which is obtainable from [The Pi Hut](https://thepihut.com/) (I have no connection with this company).

![](media/pi zero.png){width="0.9166666666666666in" height="0.5780358705161854in"} A Raspberry Pi Zero W with pre-soldered header

![](media/SD Card.png){width="0.5625in" height="0.44684601924759404in"} A Micro SD card (and adaptor if you don't have one)

![](media/Blinkt.png){width="0.7291666666666666in" height="0.5774792213473315in"} Pironi Blinkt! LED strip -- plugs into the Pi header.

![](media/Case.png){width="1.1145800524934384in" height="0.8048611111111111in"} Case - this one was cheap!

![](media/Power Supply.png){width="1.2708333333333333in" height="0.9825535870516185in"} Power supply any will do with a micro usb lead, an on/off switch is also useful.

![](media/Battery.png){width="1.3020833333333333in" height="0.6647965879265092in"} Alternatively a rechargeable battery pack, and we have used a Power over Ethernet splitter.

![](media/Zero Essentials Kit.png){width="1.0104166666666667in" height="0.8938298337707786in"} If you haven't used a Pi Zero before you will need adaptor leads.

![](media/Complete kit.png){width="0.9530566491688539in" height="1.2604166666666667in"} There is also a full kit less power from Piromi

# Installation

[(Back to top)](#table-of-contents)

Assemble the hardware

Install the Raspberry pi OS for headless operation - see these instructions https://www.tomshardware.com/uk/reviews/raspberry-pi-headless-setup-how-to,6028.html

Also set up the WiFi as instructed and enable SSH

Set up a fixed ip address - https://www.studiopieters.nl/raspberry-pi-zero-w-static-ip-address/

Install the Blinkt! software - https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-blinkt

Download the software from this Git.

Transfer the software into the pi zero, to /home/pi/onair

I use Filezilla for this https://filezilla-project.org/download.php?platform=win64



# Usage

[(Back to top)](#table-of-contents)

# Security

[(Back to top)](#table-of-contents)

# Development -- TODO

[(Back to top)](#table-of-contents)

### TODO

[(Back to top)](#table-of-contents)

# License

[(Back to top)](#table-of-contents)

[MIT](https://opensource.org/licenses/GPL-3.0) License

MIT License

Copyright (c) \[2021\] \[Nicholas Rutt\]

Permission is hereby granted, free of charge, to any person obtaining a copy

of this software and associated documentation files (the \"Software\"), to deal

in the Software without restriction, including without limitation the rights

to use, copy, modify, merge, publish, distribute, sublicense, and/or sell

copies of the Software, and to permit persons to whom the Software is

furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all

copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR

IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

FITNESS FOR A PARTICULAR PURPOSE