import React from 'react'
import Rec from '../../Assets/Rectangle 19.png'
import Ellip from '../../Assets/Ellipse 23.png'

import './Winner.css'

const Winner = () => {
    return (
        <div className='win'>

            <div className="wrappy">
                <div className="imagee">
                    <img src={Rec} id='rec' alt="" />
                    <img src={Ellip} id='ell' alt="" />
                </div>

                <div className="list">
                    <ul>
                        <li> 01 <span id='space'>Trustworthy</span></li>
                        <li> 02 <span id='space'>Easy to use</span></li>
                        <li> 03 <span id='space'>Fast</span></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Winner
