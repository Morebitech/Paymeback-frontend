import React from 'react'
import './Create.css'


import logo from '../../Assets/PayMeBack.png'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';

import Google from '../../Assets/super-g.png';
import fb from '../../Assets/facebook.png';
import AppleIcon from '@material-ui/icons/Apple';
import FacebookIcon from '@material-ui/icons/Facebook';

import background from '../../Assets/signinbckgrnd.png'

const Create = () => {
    return (
        <div className='contai'>
                    <img src={logo} id='logo' alt="" /> <br/> <br/>

            <button id='btn'>
                <div className="icon">
                    <ArrowBackIosSharpIcon style={{fontSize:'2em',  fontWeight:800, paddingRight:'6px', color:'black'}}  />
                </div>

                <div style={{paddingTop:'1px'}}>Back</div>
            </button>

            <div className="cont">

                

                <div className="wrapper">

                    <div className="text">

                        <h3>Create an Account</h3>

                        <form id='fom'>
                                <label htmlFor="name" id='field'>Enter Name</label> <br />
                                <input type="text" id='name' />

                                <br />

                                <label htmlFor="name" id='field'>Email Address</label> <br />
                                <input type="text" id='name' />

                                <br />

                                <label htmlFor="name" id='field'>Phone Number</label> <br />
                                <input type="text" id='name' />


                                

                                <br />
                                <label htmlFor="password" id='field'>Password</label>
                                <br />
                                <input type="password" id='password'/>

                                <br />
                                <label htmlFor="password" id='field'>Confirm Password</label>
                                <br />
                                <input type="password" id='password'/>
                        </form>

                        {/* <div id='assist'>
                            <div id='us'>
                                    <input type="checkbox" />
                                    <p style={{color:'black', fontSize:'12px',
                                    
                                    paddingLeft:'12px', 
                                    marginRight: '14em',
                                        paddingBottom:'-4em',
                                    
                                }}>Remember me</p>

                            </div>

                            <div id="link">
                                <a href="#" target="_blank">Forgot password ?</a>
                            </div> 
                            
                            
                                                    
                        </div> */}

                        <button id='highl'>Sign Up</button>

                        <p id='social-tag' style={{color:'black', fontSize:'14px',paddingTop:'20px', paddingRight:'7em'}}>Or Continue With Your Social Account</p>

                        <div className="socials">

                            <img src={Google} alt="" />
                            <FacebookIcon style={{paddingRight:'5px', cursor:'pointer', fontSize:'35px'}} />
                            <AppleIcon style={{paddingRight:'5px', cursor:'pointer', fontSize:'35px'}} />
                        </div>

                    </div>

                    <div className="image">

                        <div className="content">
                            <button id='mybtn'>Sign Up</button>

                            <p>Welcome back to Pay<span style={{color:'#FF8C5F'}}>Me</span>Back</p>
                            <p style={{fontSize: '14px'}}>Sign in to access your account</p>

                            <img src={background} alt="" />
                        </div>

                    </div>

                </div>






            </div>

  
        </div>
    )
}

export default Create
