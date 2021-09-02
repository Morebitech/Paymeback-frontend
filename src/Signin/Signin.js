import React from 'react';
import './Signin.css'
import log from '../Assets/PayMeBack.png'
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import { FcGoogle } from 'react-icons/fc';


import Google from '../Assets/super-g.png';
// import fb from '../../Assets/facebook.png';
import AppleIcon from '@material-ui/icons/Apple';
import FacebookIcon from '@material-ui/icons/Facebook';

import background from '../Assets/signinbckgrnd.png'

const Signin = () => {
    return (

        <div className='container'>
                 {/* <img src={log} id='logo' alt="" /> <br/> <br/> */}

            <button id='btn'>
                <div className="icon">
                    <ArrowBackIosSharpIcon style={{fontSize:'2em',  fontWeight:800, paddingRight:'6px', color:'black',marginTop:'3em'}}  />
                </div>

                <div style={{marginTop:'4.2em', color: 'black'}}>Back</div>
            </button>

            <div className="cont">

               

                <div className="wrapper">

                    <div className="text">

                        <h3>Sign In</h3>

                        <form id='fom'>
                                <label htmlFor="name" id='field'>Please Enter Your Company Name</label> <br />
                                <input type="text" id='name' />

                                <br />
                                <label htmlFor="password" id='field'>Password</label>
                                <br />
                                <input type="password" id='password'/>
                        </form>

                        <div id='assist'>
                            <div id='us'>
                                    <input type="checkbox" />
                                    <p id='remember' style={{color:'black', fontSize:'12px',
                                   
                                    paddingLeft:'12px', 
                                    marginRight: '14em',
                                     paddingBottom:'-4em',
                                    
                                }}>Remember me</p>

                            </div>

                            <div id="link">
                                <a href="#" target="_blank">Forgot password ?</a>
                            </div> 
                            
                            
                                                 
                        </div>

                        <button id='highl'>Sign In</button>

                        <button id='highl' className='mobile-btnn'>Sign Up</button>

                        <p id='social-tag' style={{color:'black', fontSize:'14px',paddingTop:'20px', paddingRight:'10em'}}>Or Continue With Your Social Account</p>

                        <div className="socials">

                            {/* <img src={Google} alt="" /> */}

                            <FcGoogle style={{paddingLeft:'10px', cursor:'pointer', fontSize:'35px'}}/>

                            <FacebookIcon style={{paddingLeft:'10px', cursor:'pointer', fontSize:'35px'}} />

                            <AppleIcon style={{paddingLeft:'10px', cursor:'pointer', fontSize:'35px'}} />
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

export default Signin
