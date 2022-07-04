import React from 'react'
import { Link } from "react-router-dom";



const About = () => {


  return (
    <>
    <div >

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators bg-dark">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <div className="overlay-image" style={{ backgroundImage: "url(http://localhost:3000/images/notes1.jpg)" }}>
            </div>
            <div className='containerAbout'>

              <h1> NotesForYou App</h1>
              <p>NotesForYou is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes, memo, email, message, shopping list and to do list. It makes to take a note easier than any other notepad and memo apps.</p>
              <Link to="/signup" className="btn bt-lg btn-primary d-block mx-auto" style={{ width: "200px" }}> Sign Up today</Link>
            </div>
          </div>
          <div className="carousel-item">
            <div >
            {/* className="container overlay-image" style={{ backgroundImage: "url(http://localhost:3000/images/comingsoon.jpg)" }}> */}
            <img className='img-fluid' src="/images/comingsoon.jpg" alt="" />
            </div>
            <div className='containerAbout'>
              <p>
                <a className="btn btn-primary buttonStyle d-block mx-auto my-5" style={{ width: "200px" }} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Calendar
                </a>
                <button className="btn btn-primary buttonStyle d-block mx-auto my-5" style={{ width: "200px" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                  Templates
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="container well">
                  Connect schedules and notes.Your day moves fast. Bring your schedule and notes together to make the most of every moment.We will remind you to take notes before or after your meetings, so you never miss a detail.
                </div>
              </div>
              <div className="collapse" id="collapseExample2">
                <div className="container well">

                  Better notes are just a click away. Save time and effort with easy-to-install note templates to fit every need. They're fully customizable and endlessly reusable.
                </div>
              </div>

            </div>
          </div>
          <div className="carousel-item">

            <div className="overlay-image img-fluid" style={{ backgroundImage: "url(http://localhost:3000/images/notes2.jpg)" }}>
              
            </div>
            <div className='containerAbout'>

              <h1> SignUp today and Get Started</h1>
              <p>NotesForYou is a good helper to manage your schedules and notes. It gives you a quick and simple notepad editing experience when you write notes, memo, email and message., shopping list and to do list.</p>
              <Link to="/signup" className="btn bt-lg btn-primary d-block mx-auto" style={{ width: "200px" }}> Sign Up today</Link>
            </div>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="home-testimonial my-5">
        <div className=" container-fluid">
          <div className="row d-flex justify-content-center testimonial-pos">
            <div className="col-md-12 pt-4 d-flex justify-content-center">
              <h3>Social Forum</h3>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <h2>Explore the users experience</h2>
            </div>
          </div>
          <section className="home-testimonial-bottom">
            <div className="container testimonial-inner">
              <div className="row d-flex justify-content-center " style={{ flex: "200px" }}>
                <div className="col-md-4 style-3">
                  <div className="tour-item ">
                    <div className="tour-desc bg-white">
                      <div className="tour-text color-grey-3 text-center">&ldquo;This is the best notes app I've tried, and I've tried six or seven. The best part is you don't have to pay for the pro version to get a TON of use out of it. &rdquo;</div>
                      <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="/images/profile1.jpg" alt="" /></div>
                      <div className="link-name d-flex justify-content-center">Parul</div>
                      <div className="link-position d-flex justify-content-center">Student</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 style-3">
                  <div className="tour-item ">
                    <div className="tour-desc bg-white">
                      <div className="tour-text color-grey-3 text-center">&ldquo;I've tried a few Note keeping apps this is by far the best one.Now I have found an application device which I can use to file my notes.&rdquo;</div>
                      <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="/images/profile2.jpg" alt="" /></div>
                      <div className="link-name d-flex justify-content-center">Sara</div>
                      <div className="link-position d-flex justify-content-center">Student</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 style-3">
                  <div className="tour-item ">
                    <div className="tour-desc bg-white">
                      <div className="tour-text color-grey-3 text-center">&ldquo;I have fallen in love with this Notes Taking app. The app is user friendly and can devide your files in an amicable manner. &rdquo;</div>
                      <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="/images/profile3.jpg" alt="" /></div>
                      <div className="link-name d-flex justify-content-center">Kevin</div>
                      <div className="link-position d-flex justify-content-center">Student</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      
    </div>
    {/* <div class="d-flex flex-column h-100">
    
    <footer className="footer d-block my-3">
        
            <div className="row">
                                 
                   &copy; Copyrights. All rights reserved. 
                </div>     
    </footer>
    </div> */}
   <footer class="py-3 my-4">
    
    <p class="text-center text-muted">© 2022 Company, Inc</p>
  </footer>

</>
  )
}

export default About
