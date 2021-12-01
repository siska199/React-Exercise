import React from 'react'

export default function List({id,src,name,age}) {
    return (
        <article key={id} className="row mb-3">
            <div className="col col-lg-2">
                <img src={src} className="img-fluid img-people" alt="" />
            </div>
            <div className="col col-lg-10">
                <span className="name-people" >{name}</span> <br />
                <span className="text-muted">{age} years</span>
            </div>
        </article>
    )
}
