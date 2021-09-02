import React from 'react';
import './Contact.css';
import myimage from '../Assets/Rectangllle.png'

function Locatiion() {
    return (
        <div className="contact-details" >
            <div id='talk-us' >
                <h3> Whatsapp</h3>
                <p>090968231515</p>
            </div>
            <div id='email-us'>
                <h3>Email US</h3>
                <p>Help@paymeback.com</p>
            </div>

            <div id='work-hrs'>
                <h3>Working Hours: 9 AM-11 PM</h3>
            </div>
           
           
           

           <div className='mappp'>

                <div className="mapy">
                    {/* <img  src={myimage} alt="" /> */}

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.5621888828186!2d37.042944763157635!3d-1.4453961857391775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f77034419022f%3A0x6f243216f54aaac2!2sDaystar%20University-Athi%20River%20Campus!5e0!3m2!1sen!2ske!4v1630575471034!5m2!1sen!2ske" width="350px" height="300px" style={{"border":0}} allowfullscreen="" loading="lazy"></iframe>
                    
                </div>

                <div className="map-txt">
                    <h3>Find us at,</h3>
                    <p>Street Name</p>
                    <p >Avenue</p>
                    <p>country</p>
                </div>

               
            </div>
            
            

 

           
        </div>
    )
}

export default Locatiion

