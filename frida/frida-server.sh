#!/system/bin/sh

# Check if running as root
if [ $(id -u) -ne 0 ]; then
    echo "This script must be run as root"
    exit 1
fi

# Start Frida server

./data/local/tmp/frida-server 0.0.0.0: