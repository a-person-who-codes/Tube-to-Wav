import React from "react";
import Container from "react-bootstrap/esm/Container";
// Components
import Navigation from '../Navigation/Navigation';
import YouTubeToWavDownloader from '../tools/YoutubeToWav/YouTubeToWavDownloader';
// css
import './Home.css';
// background gradient

const tools = [
    // id: 1, component:
    {  }
]

function Home() {
    return (
        <Container fluid className="home-container">
            <Container fluid className="navigation-container">
                <Navigation className="navbar"/>
            </Container>
            <div className="home-page content-container">
                <Container fluid className="downloader-container">
                    <YouTubeToWavDownloader/>
                </Container>
                <div className="home-results">
                    {tools.map((item) => {
                        return (
                            <div key={item.id} className="card-container">
                                {item.component}
                            </div>
                        )
                    })}
                </div>
                <div className="background-container-elements">
                    <div class="stars"></div>
                    <div class="twinkling"></div>
                    <div class="clouds"></div>
                </div>
            </div>
        </Container>
    );
}

export default Home;
