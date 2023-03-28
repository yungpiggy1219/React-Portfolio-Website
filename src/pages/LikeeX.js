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
                    Likee XDownloader is an Android app designed to help users download videos from the social media platform Likee.
                </p>

                <p>As the UI/UX designer for this project, I was responsible for a range of tasks that included:
                </p>
                <div>
                    <ul>
                        <li>
                            <b>UX Design</b> -  Conducted desk research, including market research and competitive analysis, to identify opportunities for the app. Within a week, proposed a design to the director based on research findings and user needs.
                        </li>
                        <li>
                            <b>UI Design</b> - Designed the UI using Figma, including wireframes and user flows.

                        </li>

                        <li>
                            <b>Developer Assistance </b>- Collaborated with the Android engineer to ensure seamless integration of the UI with the back-end. Helped with layout, functions, animations, analytic code insertions, and debugging as needed.

                        </li>
                        <li>
                            <b>Marketing</b> - Conducted research on the current market and used app analytics tools, such as App Annie, to inform design decisions.

                        </li>
                        <li>
                            <b>Visual Content Creation</b> - Created engaging visual content, including graphic design and video editing, for the app and the Google App Store.
                        </li>
                    </ul>
                </div>

                <h5>
                    Research
                </h5>
                <p>To begin, I conducted extensive research to understand Likee's user base, their needs and preferences, and the competitive landscape. This research involved market research and competitive analysis. I used app analytic tools like App Annie to analyze user behavior and identify opportunities for growth. From this research, I gained valuable insights into user behavior and preferences, which informed the design of the app.</p>

                <h5>Ideation</h5>
<p>Using the insights gathered from my research, I began the ideation phase, which involved brainstorming ideas and creating initial wireframes and user flows. I used Figma to create wireframes, which allowed me to quickly iterate and refine my designs based on user feedback.</p>
                <h5>
                    Prototyping
                </h5>

<p>Once I had a solid understanding of the user needs and the app's functionality, I created prototypes that allowed me to test and refine the design. I worked closely with the Android engineer to ensure that the layout and functions were seamless, and I provided responsive testing to ensure that the app worked smoothly on a range of devices.</p>

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
                    Launch
                </h5>
Finally, I created visual content for the Google App Store, including graphic design and video content, to promote the app to potential users. After testing and refining the app, we launched it on the Google Play Store.

                <h5>
                    Lessons Learned
                </h5>

                <p>Throughout this project, I learned the importance of being adaptable and willing to take on a range of tasks. As someone with no previous experience in UI design, I quickly became proficient in Figma and was able to create a polished and professional UI for Likee XDownloader. I also developed my skills in developer assistance, marketing research, and visual content creation, making me a versatile and valuable member of any design team.
                </p>

 <p>I am passionate about UI/UX design and believe that my experience with Likee XDownloader demonstrates my ability to follow a design thought process and create innovative and user-friendly designs. I am excited to bring my skills and enthusiasm to a new role and to continue learning and growing as a designer.
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
                        © 2023 yung chu chuang
                    </h5>
                </div>
            </Row>
        </Container >
    )
}


