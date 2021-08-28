import React from 'react'
import Dots from '../../Assets/image 1.png'
import './Youtube.css'

const Youtube = () => {
    return (
        <div className='Youtube'>
            
            <img src={Dots} alt="" />

           <div id="wrat">

                <div className="text">
                    <h5 id='spec'>
                        See how PayMeBack is <br /> impacting lives
                    </h5>

                    <p> We have reached a wide number of small business <br /> owners in Nigeria and our goal is to reach small <br /> business owners all over Africa and keep impacting <br /> on their lives </p>
                </div>

                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ph1-R8BBwB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>

        </div>
    )
}

export default Youtube
