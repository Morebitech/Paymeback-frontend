import React from 'react'

import first from '../../Assets/side triangle.png';
import second from '../../Assets/Ellipse 2.png';

import third from '../../Assets/frame.png'
// import Play from '../../Assets/playstore.png';
// import AppleIcon from '@material-ui/icons/Apple';
// import ShopIcon from '@material-ui/icons/Shop';

import theFirst from '../../Assets/Frame 3.png';
import theSec from '../../Assets/Frame 4.png';

import './Last.css'

const Content = () => {
    return (
        <div className='cont'>

            <div className="firstimg">
                <img src={first} alt="" />
            </div>

            <div className="texty">
                <h5>Download the app <br /> and get started</h5>

                <div className="btnns">

                    <div id='vg'>
                        <img src={theFirst} alt="" />
                    </div>
                        <br />
                    <div id='pc'>
                        <img src={third} alt="" />
                    </div>
                    
                </div>
            </div>

            <div className="lastimg">
               <img src={second} alt="" />
            </div>
          
        </div>
    )
}

export default Content
