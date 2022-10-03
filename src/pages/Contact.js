import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';

export default function Contact() {
    return (
        <Container className=''>
            <Row>
                <h1>/contact</h1>
            </Row>

            <Row>
                <p><Icon icon="akar-icons:linkedin-box-fill"/>Yung-Chu Chuang</p>
            </Row>

            <Row>
                <p><Icon icon="ic:round-email" />yungchu1219@gmail.com</p>

            </Row>

            <Row>
                <p><Icon icon="ant-design:phone-filled" />(773) 231-2717</p>
            </Row>

        </Container>
    )
}