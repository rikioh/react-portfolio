import React from "react";
import workout from './Assets/workout.jpg'; // Tell Webpack this JS file uses this image
import headshot from './Assets/headshot.JPG'; // Tell Webpack this JS file uses this image
import books from './Assets/books.jpg'; // Tell Webpack this JS file uses this image
import nutrition from './Assets/nutrition.jpg'; // Tell Webpack this JS file uses this image
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
  return (
    <Container fluid>
    <div className="card" style={{width: '100%'}}>
      <Row>
    {/*creating the title */}
    <div className="card-body">
      <h1 className="card-title"> About Me:</h1>
      <hr className="my-4" /> 
      {/*My Projects */}
      <div class="row">
      <Col>
        <div class="column"><img src={headshot} alt="Logo" width="400" height="500" />;</div>
      </Col>
      <Col>
        <div class="column">
        <p>
        Recently a project manager in EHR implementation at Epic Systems. Graduated Magna Cum Laude in Management Information Systems from the University of Arizona, Eller College of Management.
        </p>
        <p>
        Relevant Skills: Application Project Management, Product Development, Process Improvement, Workflow Design, Customer Support, Software analysis and troubleshooting, Strategic Planning, Javascript, HTML, CSS, Mongo, Jquery, SQL.
        </p>
        </div>
        </Col>
      </div>
    </div>
    </Row>
    <Row>
    <div className="card-body">
      <h1 className="card-title"> My Projects:</h1>
      <hr className="my-4" /> 
      {/*My Projects */}
      <div style={{textAlign: 'center'}}>
        <br />
        <div className="projectDiv grey">
          <br />
          <h3 className="white"><strong>What's In my Bel.ly</strong><br /> Nutrition Tracker<br /></h3>
          <a className="link" href="https://morning-savannah-50964.herokuapp.com/">Deployed Application</a><br />
          <a className="link" href="https://github.com/Connerjm/whatsinmybel.ly">Group Project Github Repo</a><br />
          <img src={nutrition} alt="Logo" width="900" height="500" />;
          <br />
          <br />
        </div>
        <br />
        <hr className="my-4" />
        <br /> 
        <div className="projectDiv grey">
          <br />
          <h3 className="white"><strong>Google Books Search</strong><br />React Application<br /></h3>
          <a className="link" href="https://blooming-ravine-65328.herokuapp.com/">Deployed App</a><br />
          <a className="link" href="https://github.com/rikioh/Google-books">Github Repo</a><br />
          <img src={books} alt="Logo" width="900" height="500" />;
          <br />
          <br />
        </div>
        <br />
        <hr className="my-4" />
        <br /> 
        <div className="projectDiv grey">
          <br />
          <h3 className="white"><strong>Workout Tracker</strong><br />Made with Express and Mongo<br /></h3>
          <a className="link" href="https://morning-wave-23675.herokuapp.com/">Deployed App</a><br />
          <a className="link" href="https://github.com/rikioh/WorkoutTracker">Github Repo</a><br />
          <img src={workout} alt="Logo" width="900" height="500" />;
          <br />
          <br />
        </div>
      </div>
    </div>
  </Row>
  </div>
    </Container>
  );
}

export default Portfolio;