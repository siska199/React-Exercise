import React from 'react'

export default function Button({name, active,  handelActive, handleType, typeCategory }) {

    const handleClick = ()=>{
        handleType(typeCategory)
        handelActive(typeCategory)
        
    }


    return (
        <div className="col ">
            <button className={active?"btn btn-danger":"btn btn-warning"} onClick={()=>handleClick()} style={{"width":"100px"}} >
                {name} {String(active)}
            </button>
        </div>
    )
}
