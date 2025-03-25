 
import React from 'react';
import './aboutus.css';
import Header from './header';
import Footer from './footer';
 
const AboutUs = () => {
  return (
       
    <div className="container my-5 about-us-container">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="text-center mb-5">
        Welcome to our e-commerce website! We offer a wide variety of products ranging from art supplies to handmade crafts. Our mission is to provide high-quality items to inspire creativity and support artists worldwide.
      </p>
      <div className="row">
        {[
          { name: "Sakshi Bole", email: "sbole@deloitte.com", image: "images/sakshi.jpg" },
          { name: "Drashti Nihalani", email: "dnihalani@deloitte.com", image: "images/Drashti.jpg" },
          { name: "Vidhi Prajapati", email: "vidprajapati@deloitte.com", image: "images/Vidhi.jpg" },
          { name: "Isha Lal", email: "islal@deloitte..com", image: "images/Isha.jpg" }
        ].map((person, index) => (
          <div key={index} className="col-md-3 text-center">
            <div className="card mb-4">
              <img src={person.image} className="card-img-top" alt={`${person.name}`} />
              <div className="card-body2">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text"><a href={`mailto:${person.email}`}>{person.email}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};
 
export default AboutUs;
 
 