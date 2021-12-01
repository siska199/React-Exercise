import React, {useState} from 'react'

//Import Bagian Page:
import Header from './Header'
import Page from './Page'

//Import data
import menu from './Data'

export default function AppMenu() {
    const [Menu, setMenu] = useState(menu)

    const handleType = (filter) =>{
        if(filter=="all"){
            setMenu(menu)
        }else{
            const newMenu = menu.filter(m=>m.category==filter)
            console.log(newMenu)
            setMenu(newMenu)
        }
    }

    return (
        <div className="">
            <Header handleType={handleType} />
            <Page data={Menu} />
        </div>
    )
}
