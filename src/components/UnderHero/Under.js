import React from 'react'
import Shade from '../../Assets/shade.png'
import Screen from '../../Assets/screen.png'
import Scrin from   '../../Assets/screen(1).png'

import './Under.css'

const Under = () => {
    return (
        <div className='Under'>
            <h4> Here's everything my PayMeBack <br /> offers just for you!</h4>

            <div className="wrappme">
                    
                    <div className="first">

                        <p id='high'>Invoice <br /> reminders</p>
                        <p id='pp'>This solution helps <br /> business owners send <br /> overdue invoice reminders <br /> to customers</p>

                       
                    </div>


                    <div className="second">

                        <p id='high'>Debt <br /> Collection</p>
                        <p id='pp'>It makes it easier to <br /> keep track and manage <br /> debt collection.</p>

                        
                    </div>


                    <div className="third">

                        <p id='high'>Sales <br /> Messaging</p>
                        <p id='pp'>Provides a way for business <br /> owners to push unique sales <br /> messaging directly to their <br /> customers.</p>  

                    </div>
            </div>

            <div className='images'>

                <div>
                    <img src={Shade} alt="" />
                </div>

                <div>
                    <img src={Screen} style={{paddingTop:'22px'}} alt="" />
                </div>

                <div>
                    <img src={Scrin} alt="" />
                </div>
                
               
               
            </div>
            

        </div>
    )
}

export default Under
