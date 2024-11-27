import React, { useState } from 'react';
import axios from 'axios';
// CSS
import './YouTubeToWavDownloader.css';
// React
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// React Toast
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Container from 'react-bootstrap/esm/Container';



function YouTubeToWavDownloader() {
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [downloadPath, setDownloadPath] = useState('');
    // React Toast
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastVariant, setToastVariant] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/download', {
                youtube_url: youtubeUrl,
                download_path: downloadPath,
            });
            
            setToastMessage(response.data.message);
            setToastVariant('success');
            setShowToast(true);
        } catch (error) {
            console.error(error);
            const errorResponse = 'An error occurred while processing your request.'
            setToastMessage(errorResponse);
            setToastVariant('danger');
            setShowToast(true);
        }
    };

    return (
        <Container fluid className='youtube-to-wav-containter'>
            <Card className='youtube-to-wav-card'>
                <Card.Body>
                    <Card.Title className='youtube-to-wav-card-title'>Youtube to .wav Audio Downloader</Card.Title>
                    <Card.Subtitle className="youtube-to-wav-card-subtittle">Download a .wav audio file from any Youtube link. Anytime</Card.Subtitle>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                className='youtube-to-wav-input'
                                id="basic-addon3">
                                Audio URL
                            </InputGroup.Text>
                            <Form.Control 
                                id="basic-url"
                                value={youtubeUrl}
                                onChange={(e) => setYoutubeUrl(e.target.value)}
                                aria-describedby="basic-addon3"
                                className='youtube-to-wav-input'
                                required
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                className='youtube-to-wav-input'
                                id="basic-addon3">
                                Download Path
                            </InputGroup.Text>
                            <Form.Control 
                                id="basic-url"
                                value={downloadPath}
                                onChange={(e) => setDownloadPath(e.target.value)}
                                aria-describedby="basic-addon3"
                                className='youtube-to-wav-input'
                                required
                                />
                        </InputGroup>
                        <div className='youtube-to-wav-submit-container'>
                            <Button 
                                className='youtube-wav-submit-button'
                                variant="secondary"
                                type="submit"
                            >Download</Button>
                        </div>
                    </Form>
                </Card.Body>
                <ToastContainer position="top-start" className="p-3">
                    <Toast 
                        onClose={() => setShowToast(false)} 
                        show={showToast} 
                        delay={3000} 
                        autohide
                        bg={toastVariant}
                    >
                        <Toast.Header>
                            <strong className="me-auto">Download Audio</strong>
                            <small>Just now</small>
                        </Toast.Header>
                        <Toast.Body>{toastMessage}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Card>
        </Container>
    );
}

export default YouTubeToWavDownloader;