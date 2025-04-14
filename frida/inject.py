import frida
import sys
import signal
import time


def on_message(message, data):
    """Handler for messages from JavaScript"""
    if message["type"] == "send":
        print("[*] {0}".format(message["payload"]))
    elif message["type"] == "error":
        print("[!] {0}".format(message["stack"]))


def main():
    # Connect to the USB device
    device = frida.get_usb_device()

    # Get the frontmost application
    app = device.get_frontmost_application()
    print(f"[*] Connected to: {app.name} ({app.identifier})")

    # Attach Frida to the frontmost application using its pid
    session = device.attach(app.pid)

    # Load the JavaScript file
    with open("hook.js") as f:
        script = session.create_script(f.read())

    # Set up message handler
    script.on("message", on_message)

    # Load the script
    script.load()

    # Define signal handler for clean exit
    def signal_handler(signal, frame):
        print("\n[*] Cleaning up...")
        session.detach()
        sys.exit(0)

    # Register signal handler for Ctrl+C
    signal.signal(signal.SIGINT, signal_handler)

    # Keep the script running
    print("[*] Running Frida script. Press Ctrl+C to stop.")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        session.detach()
        sys.exit(0)


if __name__ == "__main__":
    main()
