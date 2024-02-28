#!/bin/bash
#Onair installation script version 1.0.0 27/02/2024
# Author Nick Rutt

# Some useful functions

echoc () {
    RED="\033[1;31m"
    GREEN="\033[1;32m"  # <-- [0 means not bold
    YELLOW="\033[1;33m" # <-- [1 means bold
    CYAN="\033[1;36m"
    # ... Add more colors if you like

    NC="\033[0m" # No Color

    # printf "${(P)1}${2} ${NC}\n" # <-- zsh
    printf "${!1}${2} ${NC}\n" # <-- bash
}

ok () { 
	echoc "GREEN" "$1 completed OK"
}

fail () {
	echoc "RED" "$1 has failed $?"
	exit
}

runapt () {
		echoc "YELLOW" "apt $1"
		if ! (apt -y -q $1); then
			fail "apt $1"
		else
			ok "apt $1"
		fi
}

# Script starts here
echoc "YELLOW" "Onair installation script v1.0"

# Pre-flight checks

# Running as root?

if (( $EUID != 0)); then
	echoc "RED" "Pleasse run as root or use sudo"
	exit
fi
echoc "YELLOW" "Running as root :-)"

# WiFi Connected?
if !( ping -c 1 -q google.com >&/dev/null); then
	echoc "RED" "Network not connected please connect to the internet"
	exit
fi
ping -c 1 -q google.com >&/dev/null; 

# Check OS is up to date

runapt "update"
 
runapt "upgrade"


# Install Nginx Unit and software plugins
echoc "YELLOW" "get Nginx gpg"
curl --output /usr/share/keyrings/nginx-keyring.gpg \
https://unit.nginx.org/keys/nginx-keyring.gpg

runapt "install unit"

echoc "YELLOW" "install dependancies"
runapt "install unit-python3.11 python3-blinkt"

echoc "YELLOW" "Restart unit"
if ! (systemctl restart unit); then
		fail "restart unit $1"
	else
		ok "restart unit $1"
fi

#Copy files
echoc "YELLOW" "Copy required web and application files to /srv/www/"
if ! (rsync -v -a . --files-from=files.txt /srv/www); then
		fail "file copy $1"
	else
		ok "file copy $1"
fi

# Update Unit configuration
echoc "YELLOW" "Update Uniit configuration"
if ! (curl -X PUT --data-binary @unit.conf.json --unix-socket /var/run/control.unit.sock http://localhost/config/
); then
		fail "Unit config update$1"
	else
		ok "Unit config update$1"
fi

echoc "GREEN" "Onair install completed OK - please restart this server"
