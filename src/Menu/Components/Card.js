import React from 'react'

export default function Card({d}) {
    return (
        <div className="col col-lg-6 mb-3">
            <div class="card" >
                <img src={d.img} style={{"width":"500px","height":"200px",}} className="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{d.title}</h5>
                    <h5>$ {d.price}</h5>
                    <p class="card-text">{d.desc}</p>
                </div>
            </div>
        </div>
    )
}
