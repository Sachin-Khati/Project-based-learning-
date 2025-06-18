import logging
from waitress import serve
from app import app

# Enable logging
logging.basicConfig(level=logging.INFO)
print("🔥 Starting Flask app using Waitress on http://localhost:5000")

# Serve the app
serve(app, host='0.0.0.0', port=5000)
