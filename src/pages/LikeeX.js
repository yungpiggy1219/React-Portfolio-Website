import { Container, Row } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import { Icon } from '@iconify/react';

import likee from "../works/likee-banner.png";
import likee1 from "../works/likee1.webp";
import likee2 from "../works/likee2.webp";
import likee3 from "../works/likee3.webp";


export default function LikeeX() {
    return (
        <Container className="myProject">
            <Row >
                <div className='hoverUnderline backDiv'>
                    <Nav.Link className="p" as={NavLink} to="/work"><Icon style={{ fontSize: '36px' }} icon="bx:arrow-back" /> Back</Nav.Link>
                </div>
                <img src={likee} alt="Half Byte Board Game Development" />
                <h1 className='mb-3'>/Likee XDownloader</h1>
                <h6 className='mb-3'>UI/UX Design</h6>
                <p>
                    Likee XDownloader is a video downloader Android app for Likee.
                </p>

                <p>These are some of the things I was in charged of:
                </p>
                <div>
                    <ul>
                        <li>
                            <b>UX Design</b> - After the director gave instructions on what product to develop, I did a desk research from market research to competitive analysis. Within a week, I proposed the design to the director. With a little adjustment.

                        </li>
                        <li>
                            <b>UI Design</b> - After the proposal was set, I started designing the UI from wire frames and user flows with Figma.

                        </li>

                        <li>
                            <b>Developer Assistance </b>- I helped my colleague to layout the UI using Kotlin, and some responsive testing while the developer works on the back-end. Whenever the developer ran into issues, I helped in debugging and figuring out where the code went wrong.

                        </li>
                        <li>
                            <b>Marketing</b> - I researched and learned about the current market and using app analytic tools such as App Annie

                        </li>
                        <li>
                            <b>Visual Content Creation</b> - Besides the actual app, I also worked on the Graphic Design and Video Editing for the Google App Store content.

                        </li>
                    </ul>
                </div>

                <h5>
                    Discover
                </h5>
                <p>
                    Our only requirement was to develop a video downloader for a specific app. We did some market research to find the best application to make the downloader for. We chose Likee because there weren’t many competitors compared Facebook, Instagram, TikTok, and other apps. However, Likee was rising in users in many countries. We felt it would be a great opportunity to enter the competition with Likee.
                </p>
                <h5>
                    Design
                </h5>
                <Row className='galleryP'>
                    <div class="wrapper">
                        <div class="projectMedia">
                            <img src={likee1} alt="likee-app" />
                        </div>
                        <div class="projectMedia">
                            <img src={likee2} alt="likee-share" />
                        </div>
                        <div class="projectMedia" >
                            <img src={likee3} alt="likee-gallery" />
                        </div>
                    </div>
                </Row>
                <h5>
                    Lessons Learned
                </h5>

                <p>
                    I learned a lot in this project. In this project, I pretty much participated a little of everything. I started with no experience in Figma, or even any real UI design experiences. I created the UI mock-up and prototypes, assisted the Android engineer with some layout, functions, animations, analytic code insertions, and debugging, wrote the copy for the play store, communicated with multiple translators, created tutorial images, and lastly created the promo video using Adobe After Effects and iMovie.
                </p>


                <h5>
                    Google Play Video
                </h5>
                <div class="ratio ratio-16x9">

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dFrU06P7xPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className='myFooter'>
                    <div className='hoverUnderline backDiv'>
                        <Nav.Link as={NavLink} to="/work"><Icon style={{ fontSize: '36px' }} icon="bx:arrow-back" /> Back</Nav.Link>
                    </div>
                    <h5>
                        © 2022 yung chu chuang
                    </h5>
                </div>
            </Row>
        </Container >
    )
}


