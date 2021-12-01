import React from 'react'
import './review.css'

export default function Review({data, handelPreview, handelNext}) {
    return (
        <div key={data.id} >
            <p className="pt-3">
                <img src={data.image} className="card-img-top img-review rounded-circle" alt="..." />
                <h5>{data.name}</h5>
                <span>{data.job}</span>
                <p className="card-text">{data.text}</p>

                <button onClick={()=>handelNext()} className="btn btn-primary me-4">Next</button>
                <button onClick={()=>handelPreview()} className="btn btn-primary">Preview</button>
            </p>
        </div>
    )
}
