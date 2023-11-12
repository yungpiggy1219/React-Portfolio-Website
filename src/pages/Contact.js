import { Container, Row } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (
        <Container>
            <Row>
                <h1 className='sectionTitle mb-3'>/contact</h1>
            </Row>
            <Stack direction="row" gap={4}>
                <Row className='hoverUnderline'>
                    <a><Icon icon="akar-icons:linkedin-box-fill" /><Button href="https://www.linkedin.com/in/yung-chu-chuang/" target="_blank" variant="link" className='custom-btn'>Yung-Chu Chuang</Button></a>
                </Row>

                <Row className='hoverUnderline'>
                    <a><Icon icon="mdi:github" /><Button href="https://github.com/yungpiggy1219" target="_blank" variant="link" className='custom-btn'>yungpiggy1219</Button></a>
                </Row>

                <Row className='hoverUnderline'>
                    <a><Icon icon="ic:round-email" /><Button href="mailto:yungchu1219@gmail.com" target="_blank" variant="link" className='custom-btn'>yungchu1219@gmail.com</Button></a>
                </Row>

                <Row className='hoverUnderline'>
                    <a><Icon icon="ant-design:phone-filled" /><Button href="callto:+17732317217" target="_blank" variant="link" className='custom-btn'>(773) 231-7217</Button></a>
                </Row>
            </Stack>

        </Container>
    )
}