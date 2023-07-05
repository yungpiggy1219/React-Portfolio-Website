import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Icon } from '@iconify/react';

export default function About() {
    return (
        <Container>
            <Row>
                <h1 className='sectionTitle mb-3'>/about</h1>
            </Row>

            <Row>
                <p>Hi, my name is Yung-Chu Chuang. I’m a UX engineer with design,
                    research, and software engineer skills. My background in Informatics
                    with specialization in Human-Computer Interaction and Art allows me
                    to understand problems from both a technology and creative perspective.
                    My mission is to end user’s misery by bringing the best experience to them.
                </p>

            </Row>

            <Row className='hoverUnderline'>
                    <a><Icon icon="akar-icons:file" /><Button href="https://docs.google.com/document/d/1zS5TzMBmI4uDuIvWG0UaaOOnet9qHfEln2pmdUpNA74/edit?usp=sharing" target="_blank" variant="link" className='custom-btn'>resume</Button></a>
            </Row>
            <Row className='mt-5'>
                <h1 className='sectionTitle mb-3'>/skill</h1>
            </Row>

            <Row>
                <p>
                    HTML & CSS / JavaScript / Java / Python / C++ / Data Analysis /
                    UX Design / Prototyping / Wireframing / Figma /
                    Human-Computer Interaction/ User Experience Research
                </p>
            </Row>
        </Container>
    );
}