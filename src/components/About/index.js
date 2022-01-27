  
import React from 'react';

// import selfImage from "../../assets/img/gtimage.jpg";

//description of Myself//
function About() {
  return (
    <section className="aboutme">
    <h1 id="about">About Me</h1>
    <img src={selfImage} className="my-1" style={{ width: "10%" }} alt="cover" />
    <div className= "aboutme_desc">
        <p>
        I am Oyindamola Peterson. I graduated with a Mechanical Engineering Degree from Georgia Southern University. I am currrently in the work force
         at Textron specialized as a production engineer. I am currently enrolled in the Georgia tech Full stack boot camp to gain knowledge on a variety 
          of coding languages to boost my skill set.
      </p>
      </div>

  </section>

  );
}

export default About;