import React from 'react'
// import facilityimage from "./assets/image41.jpg.jpg"
// import facilityimage2 from "./assets/image42.jpg.jpg"
// import facilityimage3 from "./assets/image43.jpg.jpg"

const App = () => {
  return (
    <div>
      <section className="header">
        <nav>
 <a href="index.html"><img src="images/logo.png.jpeg" alt=""/></a>
  
        <div className="nav-links">
            <ul>
            <li> <a href="#">HOME</a></li>
             <li><a href="#">ABOUT</a></li>
              <li><a href="#">SERVICES</a></li>
               <li><a href="#">OUR IMPACT</a></li>
                <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
    </nav>
    <div className="text-box">
        <h1>JPET CLEEN</h1>
        <p>Cleaner PET Recovery for a Circular Future</p>
        <a href="" className="hero-btn">visit us to know more</a>
    </div>
    
     </section>
     {/* <!-- service--> */}
      <section className="services">
        <h2>SERVICES WE OFFER</h2>
        <p> We collect, recover and recycle PET plastic waste to create a cleaner environment and build a sustainable future for all.</p>
         <div className="row">
            <div className="service-col">
                <h3> PLASTIC RECYCLING</h3>
                <p>We recycle plastic waste into valuable reuseable materials. </p>
            </div>
            <div className="service-col">
                <h3> DOORSTEP PLASTIC PICKUP</h3>
                <p> Reliable waste collection services for homes and businesses. </p>
            </div>
            <div className="service-col">
                <h3> CORPORATE RECYCLING</h3>
                <p>Helping businesses achieve their sustainability goals.</p>
            </div>
         </div>
         </section>
         {/* <!-- our facility --> */}
          <section className="facilities">
            <h1>OUR FACILITIES</h1>
            <div className="row">
                <div className="facilities-col">
                    {/* <img src={facilityimage} alt="456"/> */}
                    <h3>ACO RECYCLING</h3>
                </div>
                <div className="facilities-col">
                    {/* <img src={facilityimage2} alt="890"/> */}
                    <h3>MMS</h3>
                </div>
                <div className="facilities-col">
                    {/* <img src={facilityimage3} alt="098"/> */}
                    <h3>WASTE POINT</h3>
                </div>
            </div>
          </section>
        {/* <!-- process container --> */}
        <section className="process">
            <h1>OUR RECYCLING PROCESS</h1>
           <p> COLLECT,   RECOVER,   RECYCLE,  RENEW </p>
           <div className="row">

               <div className="process-card">
                <img src="images/WASTE 2.jpeg" alt=""/>
                <h3>Collection</h3>
               </div>
               <div className="process-card">
                <img src="images/waste 1.jpg" alt=""/>
                <h3>Recycling</h3>
               </div>
                <div className="process-card">
                <img src="images/image 40.jpeg" alt=""/>
                <h3>Recycled</h3>
               </div>
            
        </div>
         </section> 
     {/* <!-- testimonials --> */}
      <section className="Testimonials">
        <h1>TESTIMONIALS</h1>
        <h2>Real feedback from businesses and individuals</h2>

        <div/>className="testimonial-container"
            <div className="card">
                <div>
                    <img src="images/JOSHUA3.jpeg" alt=""/>
                    <h3>David Somtochukwu</h3>
                    <p>This place provides a valuable service to the community, helping divert toxic and precious materials from the landfill to be reused again.it. <br/> Drop-off is free and easy for all sorts of electronics and metals. Some stuff, like plastic film and styrofoam, is a small fee, but it's worth </p>
                </div>
            </div>
            <div className="card">
                <div>
                    <img src="images/image 38.jpg" alt=""/>
                     <h3>Victory Oluchi</h3>
                     <p>Took all my E-waste at no charge to me. Very easy drop-off.</p>
                </div>
                
                </div>
                <div className="card">
                <div> 
                    <img src="images/image 39.jpg" alt=""/>
                    <h3>BIOS Environmental</h3>
                    <p>I'm thankful this place exists. They take a variety of things to recycle that cannot be recycled through the curbside service. 
                    <br/>It was easy to drop off and pay. Everyone is friendly. I will be back with other materials!</p>
                </div>
            
        </div>
      </section>
      {/* <!-- call to action --> */}
       <section className="cta">
        <h1>Ready to Schedule a Secure Pickup?</h1>
       <a href="" className="hero-btn">CONTACT US</a>

       </section>
    </div>
  )
}
export default App
