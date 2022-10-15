import { Container, Row} from 'react-bootstrap';

import halfbyte from "../works/halfbyte.png";
import upcancer from "../works/upcancer.png";
import likeex from "../works/likeex.jpg";

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function Other() {
    return (
        <Container class="wrapper">
            <Row className='galleryP'>
                <h1 className='mb-3'>/work</h1>
                <div class="wrapper">
                    <div class="media">
                        <div class="layer">
                            <Nav.Link as={NavLink} to="/work/likee-xdownloader">+ UI/UX Design</Nav.Link>
                        </div>
                        <img src={likeex} alt="Lkee XDownloader" />
                    </div>
                    <div class="media">
                        <div class="layer">
                            <Nav.Link as={NavLink} to="/work/up-cancer">+ UX Research</Nav.Link>
                        </div>
                        <img src={upcancer} alt="Up Cancer Redesign" />
                    </div>
                    <div class="media" >
                        <div class="layer">
                            <Nav.Link as={NavLink} to="/work/half-byte">+ Board Game Development</Nav.Link>
                        </div>
                        <img src={halfbyte} alt="Half Byte Board Game Development" />
                    </div>
                </div>
            </Row>
        </Container >
    )
}