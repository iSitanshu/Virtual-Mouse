from flask import Flask, jsonify
from flask_cors import CORS
import subprocess
import os
import signal

app = Flask(__name__)
CORS(app)

camera_process = None   

@app.route('/start_camera', methods=['GET'])
def start_camera():
    try:
        # Run the Python script
        result = subprocess.run(['python', 'Gesture-Controlled-Virtual-Mouse/src/Gesture_Controller.py'], check=True, capture_output=True, text=True)
        print("Script output:", result.stdout)  # Log script output
        return jsonify({"message": "Camera started successfully!"}), 200
    except subprocess.CalledProcessError as e:
        print("Script error:", e.stderr)  # Log script error
        return jsonify({"message": f"Failed to start camera: {str(e)}"}), 500
    except FileNotFoundError as e:
        print("File not found error:", str(e))  # Log file not found error
        return jsonify({"message": f"File not found: {str(e)}"}), 500
    except Exception as e:
        print("Unexpected error:", str(e))  # Log unexpected errors
        return jsonify({"message": f"An unexpected error occurred: {str(e)}"}), 500

@app.route('/stop_camera', methods=['GET'])
def stop_camera():
    global camera_process
    if camera_process:
        try:
            os.kill(camera_process.pid, signal.SIGTERM)  # Terminate the process
            camera_process = None  # Reset process reference
            return jsonify({"message": "Camera stopped successfully!"}), 200
        except Exception as e:
            return jsonify({"message": f"Failed to stop camera: {str(e)}"}), 500
    else:
        return jsonify({"message": "No camera process is running!"}), 400


if __name__ == '__main__':
    app.run(debug=True) 