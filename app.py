import os
from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

# Endpoint to trigger the Gesture_Controller.py script
@app.route('/start_camera', methods=['GET'])
def start_camera():
    try:
        script_path = os.path.abspath(r'C:\Users\Sitanshu\Virtual_Mouse\Virtual-Mouse\Gesture-Controlled-Virtual-Mouse\src\Gesture_Controller.py')

        # Check if the script exists
        if not os.path.exists(script_path):
            return jsonify({"message": "Script not found!"}), 404

        result = subprocess.run(['python', script_path], capture_output=True, text=True)
        
        print(f"stdout: {result.stdout}")
        print(f"stderr: {result.stderr}")

        if result.returncode == 0:
            return jsonify({"message": "Gesture control started successfully!"}), 200
        else:
            return jsonify({"message": f"Failed to start gesture control: {result.stderr}"}), 500

    except Exception as e:
        return jsonify({"message": f"Error: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(port=5000)
