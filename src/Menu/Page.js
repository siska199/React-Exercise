import React from 'react'
import Card from './Components/Card'
export default function Page({data}) {
    return (
       <div className="row p-5">
           {
               data.map(c=>(
                   <Card d={c}/>
               ))
           }

       </div>
    )
}
