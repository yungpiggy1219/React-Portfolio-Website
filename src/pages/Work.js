import { Container, Row, Col, Placeholder } from 'react-bootstrap';

import halfbyte from "../works/halfbyte.png";
import upcancer from "../works/upcancer.png";
import likeex from "../works/likeex.jpg";

export default function Other() {
    return (
        <Container class="wrapper">
            <Row className='galleryP'>
                <h1 className='mb-3'>/work</h1>
                <div class="wrapper">
                    <div class="media">
                        <div class="layer">
                            <p>+ UI/UX Design</p>
                        </div>
                        <img src={likeex} alt="Lkee XDownloader" />
                    </div>
                    <div class="media">
                        <div class="layer">
                            <p>+ UX Research</p>
                        </div>
                        <img src={upcancer} alt="Up Cancer Redesign" />
                    </div>
                    <div class="media">
                        <div class="layer">
                            <p>+ Board Game Development</p>
                        </div>
                        <img src={halfbyte} alt="Half Byte Board Game Development" />
                    </div>
                    <a  href="/work/half-byte">12312312321312</a>
                </div>
            </Row>
        </Container >
    )
}