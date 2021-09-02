import React from 'react';
import './Contact.css';
import SendIcon from '@material-ui/icons/Send';


const Contact = () => {
    return (
        <form className= "form" >

           <h1> Let's keep in Touch </h1>
           <label>Full Name</label>
           <input type="text" />

           <label>Email Address</label>
           <input type="email" />

           <label>Subject</label>
           <select name="cars" id="cars" placeholder=" ">
                <option value="volvo"></option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

           <label>Your Message Here..</label>
           <textarea placeholder="Message" textarea/>

           <button style={{color:'white'}}>
            <SendIcon />
                Send
           </button>
        </form>
    )
}

export default Contact

