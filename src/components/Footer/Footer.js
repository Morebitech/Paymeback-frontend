import React from 'react';
import './Footer.css';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className='foot'>

           <div className="containne">

                <div className="first">
                    <h6>Pay<span style={{color:'#FDA741'}}>Me</span>Back</h6>
                    <p>paymeback.com</p>
                </div>

                <div className="links">
                    <div className="top">
                        <ul>
                            <li style={{color:'#FDA741'}}>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div className="bottom">
                        <TwitterIcon style={{paddingRight:'42px', fontSize:'4em', cursor:'pointer', }} />
                        <FacebookIcon style={{paddingRight:'42px', fontSize:'4em', cursor:'pointer', }} />
                        <InstagramIcon style={{paddingRight:'42px', fontSize:'4em', cursor:'pointer'}}/>

                    </div>
                </div>

           </div>

        </div>
    )
}

export default Footer
