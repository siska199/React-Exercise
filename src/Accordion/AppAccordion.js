import React from 'react'
import Accordion from './Accordion'
import Data from './Data'
import './accordion.css'

export default function AppAccordion() {

    return (
        <div style={{"width":"700px"}} className="row bg-light rounded-3 p-3">
            <div className="col col-lg-4">
                <h3>
                    Question And Answear About Login
                </h3>
            </div>
            <div className="col col-lg-8">
                {
                    Data.map(d=>( 
                        <Accordion data={d}/>
                    ))
                }
            </div>
        </div>
    )
}
