from flask import Blueprint, request, jsonify
import logging
from services.youtube_service import download_youtube_audio

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

download_bp = Blueprint('download', __name__)

@download_bp.route("/download", methods=["POST"])
def download():
    data = request.json
    youtube_url = data.get("youtube_url")
    download_path = data.get('download_path')

    if not youtube_url or not download_path:
        return jsonify({"message": "Please provide both YouTube URL and download location."}), 400

    try:
        wav_file_path = download_youtube_audio(youtube_url, download_path)
        return jsonify({"message": "Audio downloaded and converted to WAV successfully.", "download_path": wav_file_path})
    except Exception as e:
        logger.error(f"Error downloading or converting audio: {e}")
        return jsonify({"message": "An error occurred while processing your request."}), 500
