import React, {useState} from 'react'
 
 export default function Accordion({data}) {
    const [info, setInfo] = useState(false)
    
    const handleInfo = () =>{
        setInfo(!info)
    }

     return (
         <div>
             <div key={data.id} className="row shadow rounded-3 p-3 mb-3">
                <div className="col col-lg-9">
                    <h5 style={{"fontSize":"17px"}}>{data.title}</h5>
                    {info &&  <p style={{"fontSize":"12px"}}>{data.info}</p>}

                </div>
                <div className="col col-lg-3 text-end">
                    <button onClick={handleInfo} className="btn btn-danger rounded-circle">
                        {info?"-":"+"}
                    </button>
                </div>
             </div>
         </div>
     )
 }
 