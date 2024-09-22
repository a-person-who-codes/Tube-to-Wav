import os
from pytube import YouTube
from pydub import AudioSegment
import yt_dlp as youtube_dl

def download_youtube_audio(youtube_url, download_path):
    if not os.path.exists(download_path):
        os.makedirs(download_path)

    # Setup yt-dlp options
    ydl_opts = {
        'format': 'bestaudio/best',
        'outtmpl': os.path.join(download_path, '%(title)s.%(ext)s'),
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'wav',
            'preferredquality': '192',
        }],
    }

    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        info_dict = ydl.extract_info(youtube_url, download=True)
        title = info_dict.get('title', None)
        if not title:
            raise Exception("Failed to retrieve video information.")
        
    wav_file_path = os.path.join(download_path, f"{title}.wav")

    # Validate the WAV file was created
    if not os.path.exists(wav_file_path):
        raise Exception("Failed to convert to WAV format.")
    
    return wav_file_path

