import React, {useState} from 'react'
import Review from './Review'
import { reviews } from './Data'

export default function AppReviews() {
    const [data, setData] = useState(reviews[0])
    const handelPreview = ()=>{
        let index = reviews.findIndex(d=>d.id==data.id)
        console.log(index)
        index--
        if(index<0){
            index = reviews.length-1 
        }
        setData(reviews[index])
    }
    const handelNext = ()=>{

        let index = reviews.findIndex(d=>d.id==data.id)
        console.log(index)
        index++
        if(index>reviews.length-1){
            index=0
        }
        setData(reviews[index])
    }
    const handleRandom = ()=>{
        const index = Math.floor(Math.random()*reviews.length)
        console.log("Index: ", index)
        setData(reviews[index])
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card text-center px-5 pb-3" style={{"width": "30rem"}}>
                <Review data={data} handelPreview={handelPreview} handelNext={handelNext} />
                <button onClick={()=>handleRandom()} className="btn btn-primary">Suprise Me</button>
            </div>
        </div>
    )
}
