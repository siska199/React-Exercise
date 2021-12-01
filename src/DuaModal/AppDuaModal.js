import React, {useState} from 'react'
import ModalSignUp from './ModalSignUp'
import ModalSignIn from './ModalSignIn'

export default function AppDuaModal() {
    const [signUp, setSignUp] = useState(false)
    const [signIn, setSignIn] = useState(false)

    const handelSignUp=()=>{
        setSignUp(!signUp)
        setSignIn(false)

    }
    const handelSignIn=()=>{
        setSignIn(!signIn)
        setSignUp(false)
        console.log("Masuk")
    }
    
    const handeClose=(tipe)=>{
        if(tipe=="signUp"){
            setSignUp(false)
        }else{
            setSignIn(false)
        }
    }
    return (
        <div className="row">
            <div className="col">
                 <button onClick={()=> handelSignUp()} className="btn btn-primary me-5">Sign Up</button>
                <ModalSignUp  handeClose={handeClose} handelSignIn={handelSignIn}  active={signUp}/>
            </div>

            <div className="col">
                <button  onClick={()=> handelSignIn()}  className="btn btn-danger">Sign In</button>
                <ModalSignIn handeClose={handeClose} handelSignUp={handelSignUp} active={signIn}/>
            </div>
        </div>
    )
}
