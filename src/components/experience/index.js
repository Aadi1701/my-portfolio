import React from 'react';
import styles from './styles.css';

const Experience = () => {
    return(
            <div className="experience">

                <h1 class="section-heading mb75px">
                    <span>
                        <i class="fas fa-briefcase"></i>
                    </span>
                    <span> Work Experience </span>
                </h1>

                <div class="timeline">
                    <div class="timeline-box ">
                        <h3 class="box1-heading">React Js developer<br /><span class="heading-color">Omninos Solution</span></h3>
                        <p class="box1-paragraph">
                        During my React.js internship, I'll work on some projects and learn how to build interactive user interfaces using React. I'll learn how to create reusable components, manage state and props,use React hooks and libraries, and debug my code. I'll also collaborate with other developers,participate in code reviews, and use modern development tools and practices.I'll also have gained practical experience and a solid understanding of React.js development.
                        </p>
                    </div>


                    <div class="timeline-box ">
                    <h3 class="box1-heading">Ninja  Enterprenureship<br /><span class="heading-color">Coding Ninja</span></h3>
                    <p class="box1-paragraph">
                    As an intern as a Ninja Enterprenureship,I'll work on various projects related to education technology and campus management.I'll collaborate with a team of experienced professionals, learn how to develop and implement solutions for education institutions, and gain hands-on experience with cutting-edge technologies. I  also have the opportunity to work on research and development projects, participate in workshops and training sessions, and contribute to the growth and of the company. By the end of my internship, I'll have gained valuable skills and practical experience that will help me in my future career.
                    </p>
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
    );
}

export default Experience;