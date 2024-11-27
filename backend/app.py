from flask import Flask
from flask_cors import CORS
from routes.download_route import download_bp

app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(download_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=1114, debug=True)
