import React from "react";
import styles from './styles.css';
import Projects from "../projects";

const Education = () =>{
    return(
   <>
   
   <div className="education">
           <h1 class="section-heading">
              <span>
                  <i class="fas fa-briefcase"></i>
              </span>
              <span> Education </span>
            </h1>

            <div className="timeline">
                <div class="timeline-box ">
                    <h3 class="box1-heading">Sant Longowal Institute of Engineering and Technology<br/><span class="heading-color">B.Tech-computer science and engieering</span><br/><span class="duration">Aug 2019 - Present</span></h3>
                </div>

                <div class="timeline-box ">
                  <h3 class="box1-heading">T.R.M.Public School<br/><span class="heading-color">Intermediate</span><br/><span class="duration">2016 - 2017</span></h3>
                </div>

                <div class="timeline-box ">
                  <h3 class="box1-heading">T.R.M.Public School<br/><span class="heading-color">Matriculate</span><br/><span class="duration">2014 - 2015</span></h3>
              </div>

              <div id="timeline-divider">
                  <div class="timeline-traveller">
                      <div>
                          <i class="fas fa-plane"></i>
                      </div>
                  </div>
              </div>
            </div>
       </div>
   </>
    );
}

export default Education;