import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from "../footer";
import '../contacts/styles.css'

const Contacts = () => {
  return (
    <>
       <section id="contact">
            <h1 class="section-heading mb50px">
                <span>
                    <i class="far fa-address-card"></i>
                </span>
                <span> Contact </span>
            </h1>
            <div id="contact-container">

                <div id="contact-form-container">
                    <h3> Get In touch </h3>
                    <form id="contact-form" action="https://formspree.io/f/mzbqwjpv"  method="POST">
                        <input id="input-name" name="name" type="text" placeholder="Your Name" />
                        <input id="input-email" name="email" type="text" required placeholder="Your Email" />
                        <textarea id="input-message" name="message" rows="2"  placeholder="Message"></textarea>
                        <button class="sub-btn" type="submit">SEND MESSAGE</button>
                    </form>
                </div>
                <div id="my-details-container">
                    <h3> My Address </h3>
                    <div class="my-details-info-container">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Modinagar, India</span>
                    </div>
                    <div class="my-details-info-container">
                        <i class="fas fa-mobile-alt"></i>
                        <span>+91-7055164164</span>
                    </div>
                    <div class="my-details-info-container">
                        <i class="far fa-envelope"></i>
                        <span>aditya17cse@gmail.com</span>
                    </div>
                </div>
                <div id="my-details-container">
                
                    <h4> social-Links </h4>
                    <ul class="horizontal-list-social">
                    <li>
                        <a href="https://www.linkedin.com/in/aditya-kumar-7abb50220">
                            <LinkedInIcon className="linkedin"/>
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/Aadi1701">
                            <GitHubIcon />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100005109192874">
                            <FacebookIcon/>
                        </a>
                    </li>

                    <li>
                        <a href="https://instagram.com/aditya_kumar171999?igshid=ZGUzMzM3NWJiOQ==">
                            <InstagramIcon/>
                        </a>
                    </li>
                </ul>
                   
                </div>
            </div>
        </section>


      <Footer />
    </>
  );
};

export default Contacts;
