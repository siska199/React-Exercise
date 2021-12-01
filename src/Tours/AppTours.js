import React, {useState, useEffect} from 'react'

import './tours.css'
import {Section} from './tours.style'
import Tour from './Tour'
import Loading from './Loading'
export default function AppTours() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    //Membuat functin untuk mengekstrak data api:
    const fetchData = async() =>{
        setLoading(true)
        const res = await fetch('https://course-api.com/react-tours-project')
        const resJson = await res.json()
        setData(resJson)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData()
    },[])

    if(loading){
        return <Loading/>
    }

    const handleClear=(id)=>{
        setData(data.filter(d=>d.id!=id))
    }

    return (
        <Section className="">
            <h3 className="text-center">Our Tours</h3>
            <hr style={{"width":"70px","height":"5px","backgroundColor":"blue"}}/>
            {
                data.length<1?
                (<button onClick={()=>fetchData()} className="btn btn-primary">Refresh</button>):
                (data.map((d, index)=>
                    ( <Tour key={index} handleClear={handleClear} id={d.id} name={d.name} info={d.info} img={d.image} price={d.price}/>)
                ))
            }
        </Section>
    )
}
