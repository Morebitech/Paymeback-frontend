import React from 'react';
import './Faq.css';
import myfirstImg from '../Assets/faq.png';
import mysecImg from '../Assets/faq1.png';

const Faq = () => {
    return (
        <div className="faq-wrapper">

            <div className="faq-head">

                <div className="firstImg">
                    <img src={myfirstImg} alt="" />
                </div>

                <div className="faqSearch">

                    <div>
                         <h2>Frequently Asked Questions</h2>
                    </div>

                    <div>
                        <input type="text" placeholder="Search for a question" />
                    </div>


                    <div>
                        <button id='fav-btn'>Search</button>
                    </div>
                   
                    
                </div>

                <div className="lastImg">
                    <img src={mysecImg} alt="" />
                </div>
            </div>




            {/* Last part */}

            <div className="faq-last">
                {/* <h2> What is myCustomer</h2>
                <p>MyCustomer is solution that helps business owners send overdue reminders,
                manage debt collection and provides a unique way of pushing sales 
                messaging  directly to their customers</p> */}



                {/* <hr /> */}


                <select name="faquiz" id="faquiz" >

                    <option id='myopinion'  value="what">What is myCustomer? </option>
                      
                    <option value="what" >
                        MyCustomer is solution that helps business owners send overdue reminders,
                        manage debt collection and provides a unique way of pushing sales 
                        messaging  directly to their customers
                    </option>

                    {/* <option value="what">What is myCustomer? 
                        My customer is the best
                    </option> */}
                   
                </select>

                <select name="faquiz" id="faquiz" >
                    <option value="why">Why should I use myCustomer?</option>
                    

                    <option value="what">
                        MyCustomer is solution that helps business owners send overdue reminders,
                        manage debt collection and provides a unique way of pushing sales 
                        messaging  directly to their customers
                    </option>
                </select>
                
                
                <select name="faquiz" id="faquiz" >
                    <option value="how">How can I download the app?</option>
                    

                    <option value="what">
                        MyCustomer is solution that helps business owners send overdue reminders,
                        manage debt collection and provides a unique way of pushing sales 
                        messaging  directly to their customers
                    </option>
                </select>


                <select name="faquiz" id="faquiz" placeholder="Helllooo">
                    <option value="need">Will I need data to make use of the app?</option>
                    

                    <option value="what">
                        MyCustomer is solution that helps business owners send overdue reminders,
                        manage debt collection and provides a unique way of pushing sales 
                        messaging  directly to their customers
                    </option>
                </select>





            </div>

        </div>
    )
}

export default Faq
