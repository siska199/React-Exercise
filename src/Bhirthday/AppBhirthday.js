import React, {useState} from 'react'
import './bhirthday.css'

//Import Component:
import List from './List'
//Import Data
import {data} from './Data'

export default function AppBhirthday() {
    const [people, setPeople] = useState(data)

    const handleClear = ()=>{
        setPeople([])
    }
    return (
        <section className="card-bhirthday px-5 py-4 shadow-lg">
            <h4 className="mb-4">{data.length} bhirthdays today</h4>
            
            {
                people.map(d=>(
                    <List id={d.id} src={d.image} name={d.name} age={d.age} />
                ))
            }
            <div className="row mx-auto">
                <button onClick={()=>handleClear()} className="mt-2 btn btn-primary">Clear All</button>
            </div>
        </section>
    )
}
