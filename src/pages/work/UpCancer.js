import { Container, Row, Col } from "react-bootstrap";

import Footer from "../Footer";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import { Icon } from "@iconify/react";

import ucBanner from "../../images/upcancer-banner.png";
import ucWalkthrough from "../../images/uc-walkthrough.jpg";
import ucSurvey from "../../images/uc-survey.png";
import ucPoorVis from "../../images/uc-poorvisual.png";
import ucInconsis from "../../images/uc-inconsistant.png";
import ucwframe1 from "../../images/uc-wf1.png";
import ucwframe2 from "../../images/uc-wf2.png";
import ucwframe3 from "../../images/uc-wf3.png";
import ucwframe4 from "../../images/uc-wf4.png";
import ucwframe5 from "../../images/uc-wf5.png";

export default function UpCancer() {
  return (
    <Container className="myProject">
      <Row>
        <div className="hoverUnderline backDiv">
          <Nav.Link className="p" as={NavLink} to="/work">
            <Icon style={{ fontSize: "36px" }} icon="bx:left-arrow-alt" /> Back
          </Nav.Link>
        </div>
        <img src={ucBanner} alt="Up Cancer UX Research" />
        <h1 className="mb-3">/Up Cancer</h1>
        <h6 className="mb-3">UX Research</h6>
        <p>
          This project is to take a existing software, website, or anything with
          an user interface and learn how it can be improved. This is a 10 week
          long course. The website we chose to redesign is UpCancer.
        </p>
        <p>
          <b>Role</b> UX Research{" "}
        </p>
        <p>
          <b>Team Member </b> 3 UX Researcher{" "}
        </p>
        <p>
          <b>Duration</b> April 2019 – June 2019{" "}
        </p>
        <p>
          <b>Methods</b> Competitor Analysis | Market Research | heuristic
          Evaluation | Cognitive Walkthrough{" "}
        </p>
        <p>
          <b>Tools</b> Google Docs | Google Forms | Lucidchart
        </p>

        <h5>Discover</h5>
        <p>
          We started this research by performing competitive analysis. We
          explored the direct and indirect competitors for this website. We
          studied their stakeholders with interviews and surveys. We then
          identified its usability issues, redesigning the user interface.
          Lastly, we performing a heuristic evaluation on our final design.
        </p>
        <h5>Explore</h5>
        <Row className="galleryP">
          <Col lg={6}>
            <div class="projectMedia">
              <h4>Surveys</h4>
              <img src={ucSurvey} alt="likee-share" />
            </div>
          </Col>
          <Col lg={6}>
            <div class="projectMedia">
              <h4>Cognitive Walkthrough</h4>
              <img src={ucWalkthrough} alt="likee-share" />
            </div>
          </Col>
        </Row>
        <h5>Key Findings</h5>
        <h4>Unorganized Contents</h4>
        <p>
          After an intense analysis of data that are from the usability tests
          and cognitive walkthrough, our group agrees the{" "}
          <b>overall contents</b> of the website are <b>unorganized</b>, which
          cause some confusion to the users. There were too many links link to
          the same place, even irrelevant place. The Five Stages of a Cancer
          Survivor is everywhere on the website. No matter where the user
          clicks, it always links to the Five Stages of a Cancer Survivor page.
        </p>
        <p>
          There are also several <b>misplaced navigation elements</b>. For
          example, “Share Your Story” seems more intuitive in the “Get Involved”
          page, but it was included on the home page. Misplaced contents like
          these make the users think this website is not professional or
          credible enough. Hence, this website is more likely to fail retaining
          regular users.
        </p>
        <p>
          Not only the website contains misplaced contents, but there are also
          several <b>hidden contents</b> that were either out of the visual
          frame or hidden in random pages that are not normally visited by the
          users. Four out of five usability tests participants gave up to
          complete the last task because they had no clue where and how to find
          them. The participants felt frustrated and became impatient.
          Consequently, users have a hard time to find the information they need
          or want to see.
        </p>

        <h4>Inconsistency</h4>
        <Col>
          <div class="projectImg">
            <img src={ucInconsis} alt="likee-share" />
          </div>
        </Col>
        <Col>
          <p>
            There are many <b>inconsistent pages</b> within the website, which
            makes it difficult for the users to navigate it. When navigating
            through the nav bar, each item is not only both expandable and
            clickable but also direct the users to different places. For
            example, when hovering over the “Cancer Survivor” tab, the dropdown
            items are different than clicking into the “Cancer Survivor” page.
            The “Cancer Survivor” in fact, is the “Five Stages of Cancer.”
            Another example is when hovering over to the “Cancer Treatment”, the
            dropdown items are Cancer Treatment Side Effects, Cancer and
            Naturopathic Medicine, Caregivers during Treatment, Cancer Survivor
            Friendships, Palliative Care for Cancer Survivors, and more.
            However, when clicking the Cancer Treatment itself, it directs to
            the Cancer Treatment page with different options than the ones in
            the nav bar.
          </p>
        </Col>
        <h4>Poor Visual Design</h4>
        <Col>
          <div class="projectImg">
            <img src={ucPoorVis} alt="likee-share" />
          </div>
        </Col>
        <Col>
          <p>
            People perceive more aesthetic designs as easier to use them. Our
            qualitative data have shown that the website is{" "}
            <b>not visually pleasing</b> to the users' eyes. For instance, some
            words are cut off of the text box, as depicted in the below figures.
            In addition, many participants complain about the bright color
            scheme. These unsuccessful visual designs lead the users to think
            this website is hard to use. Over time, users will stop using it.
          </p>

          <p>
            Websites with consistent and pleasing aesthetics have higher
            probabilities of being used. In the case of Up Cancer, the
            aesthetics actually come in conflict with the user’s goals and
            expectations, which leads to poor user experiences.
          </p>
        </Col>
        <h5>Redesign Wireframes</h5>
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block projectCarousal" src={ucwframe1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block projectCarousal" src={ucwframe2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block projectCarousal" src={ucwframe3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block projectCarousal" src={ucwframe4} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block projectCarousal" src={ucwframe5} />
          </Carousel.Item>
        </Carousel>
        <h5>Final Thoughts</h5>

        <p>
          The original design was a mess where there are many nested dropdowns
          that lead to nowhere, or hide important information, and there is a
          lot of redundant information that we felt was not needed. We basically
          redesigned the entire website. The main changes we made was the
          overall structure, where we made it a one-page scrolling website.
          We’ve come across two major issues:
        </p>
        <div>
          <ul>
            <li>Too complicated structure</li>
            <li>Too much information</li>
          </ul>
        </div>
        <p>
          The biggest issue of this website is the structure. We redesigned the
          information architecture completely. We thought about fixing the
          dropdowns, but it turns out starting from scratch is way easier and
          more productive. We noticed that many of the information provided by
          the founder were not cited, so the information may not be reliable. We
          gave out surveys to ask users about how reliable the information
          provided and whether or not they will read the contents. We received
          mixed responses but the majority felt they would just go to a more
          reliable source for the information. So we decided to remove the
          copied articles and reduce it to only simple information about cancer.
        </p>

        <div>
          <Button
            href="https://docs.google.com/document/d/1XT6Os7P-ZAPj8kuaLxOPbeL2NUTpK-KyveWlfuHOngg/edit?usp=sharing"
            target="_blank"
            variant="outline"
            className="custom-btn"
          >
            Full Report
          </Button>
        </div>
        <Row>
          <div className="hoverUnderline backDiv">
            <Nav.Link as={NavLink} to="/work">
              <Icon style={{ fontSize: "36px" }} icon="bx:left-arrow-alt" />{" "}
              Back
            </Nav.Link>
          </div>
        </Row>
        <Footer />
      </Row>
    </Container>
  );
}
