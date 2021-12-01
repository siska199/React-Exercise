import React, {useState} from 'react'

export default function Tour({key, id,name,info,img,price,handleClear}) {
    const [readMore, setReadMore] = useState(false)
    const handleSeeMore = ()=>{
        setReadMore(!readMore)
    }
    return (
    <div key={key} class="card mb-4" style={{"width": "30rem"}}>
        <img src={img} style={{"height":"300px"}} className="card-img-top" alt="..." />
        <div className="card-body">

            <div className="row mb-3">
                <div className="col col-lg-9">
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="text-end col-lg-3">
                    <h5 style={{"color":"#9dd3e0"}}>${price}</h5>
                </div>
            </div>

            <p className="card-text">
                {readMore?(`${info} `):(`${info.substring(0,200)}... `)}
                <span onClick={()=>handleSeeMore()} style={{"color":"#9dd3e0","cursor":"pointer"}}>
                    {readMore? "See Less":"Read More"}
                </span>
            </p>
            <div className="row justify-content-center">
                <button onClick={()=>handleClear(id)} style={{"width":"300px"}} className="btn btn-danger">Not Interested</button>
            </div>
        </div>
    </div>

    )
}
