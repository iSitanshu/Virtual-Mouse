from flask import Flask, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/start_camera', methods=['GET'])
def start_camera():
    try:
        # Run the Python script
        result = subprocess.run(['python', 'Gesture-Controller.py'], check=True, capture_output=True, text=True)
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

if __name__ == '__main__':
    app.run(debug=True) 