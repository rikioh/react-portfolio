import React from "react";


function Portfolio() {
  return (
    <div className="card" style={{width: '100%'}}>
    {/*creating the title */}
    <div className="card-body">
      <h1 className="card-title"> About Me:</h1>
      <hr className="my-4" /> 
      {/*My Projects */}
      <div class="aboutme">
        <p>
        Recently a project manager in EHR implementation at Epic Systems. Graduated Magna Cum Laude in Management Information Systems from the University of Arizona, Eller College of Management.
        </p>
        <p>
        Relevant Skills: Application Project Management, Product Development, Process Improvement, Workflow Design, Customer Support, Software analysis and troubleshooting, Strategic Planning, Javascript, HTML, CSS, Mongo, Jquery, SQL.
        </p>
      </div>
    </div>
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
          <img src="./Assets/nutrition.jpg" className="card-img app" alt="Nutrition App" />
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
          <img src="./Assets/books.jpg" className="card-img app" alt="Google Books" />
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
          <img src="./Assets/workout.jpg" className="card-img app" alt="Workout App" />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Portfolio;