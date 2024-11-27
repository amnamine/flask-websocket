from flask import Flask, render_template
from flask_socketio import SocketIO, send

# Create a Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'

# Initialize SocketIO
socketio = SocketIO(app)

# Route for the homepage
@app.route('/')
def index():
    return render_template('index.html')

# WebSocket handler
@socketio.on('message')
def handle_message(msg):
    print(f"Received: {msg}")
    send(f"Echo: {msg}")

# Run the app
if __name__ == '__main__':
    socketio.run(app, debug=True)
