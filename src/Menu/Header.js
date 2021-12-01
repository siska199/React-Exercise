import React, {useState} from 'react'

import Button from './Components/Button'
export default function Header({handleType}) {
    const category = ["all", "breakfast", "lunch", "shakes"]
    
    const [catActive, setCatActive] = useState({
        all : true,
        breakfast : false,
        lunch : false,
        shakes: false
    })

    const handelActive = (tipe)  =>{
        const listActive = catActive
        let newListActive = {}
        for(let c in listActive){
            if(String(c)==String(tipe)){
                newListActive[c] = true
            }else{
                newListActive[c] = false
            }
        }
        setCatActive(newListActive)
    }

    return (
        <div className="mb-5 ">
            <div className="row justify-content-center">
                <h2 className="text-center">Our Menu</h2>
                <hr className="ms-2" style={{"width":"80px","height":"5px", "color":"#8a5107"}}/>
            </div>
            <div className="row justify-content-center mx-5 px-5">
                {
                    category.map(c=>(
                        <Button active={catActive[c]} handelActive={handelActive} handleType={handleType} typeCategory={c}  name={c}/>
                    ))
                }
            </div>
        </div>

    )
}
