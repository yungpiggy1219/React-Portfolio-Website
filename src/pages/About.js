import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    return (
        <Container className='align-middle'>
            <Row>
                <h1>/about</h1>
            </Row>

            <Row>
                <p>Hi, my name is Yung-Chu Chuang. I’m a UX engineer with design,
                    research, and software engineer skills. My background in Informatics
                    with specialization in Human-Computer Interaction and Art allows me
                    to understand problems from both a technology and creative perspective.
                    My mission is to end user’s misery by bringing the best experience to them.
                </p>
            </Row>

            <Row>
                <a>resume</a>
            </Row>

            <Row>
                <h1>/skill</h1>
            </Row>

            <Row>
                <p>
                    HTML & CSS / JavaScript / Java / Python / C++ / Data Analysis /
                    UX Design / Prototyping / Wireframing / Figma /
                    Human-Computer Interaction/ User Experience Research /
                </p>
            </Row>
        </Container>
    );
}