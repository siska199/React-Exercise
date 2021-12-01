import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    background-color : #787468;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, 0.86);

`
const ModalCard = styled.div`
  margin: 0 auto;
  display: block;
  margin-top: 250px;
  width: 300px;
  height: 300px;
  background-color: lightgray;
  border-radius: 5px;
`

export default function ModalSignIn({active, handelSignUp, handeClose}) {
    return (
        <div >
            {active && (
                <Background onClick={()=>{handeClose("signIn")}}>
                    <ModalCard onClick={(e)=> e.stopPropagation()}>
                        <button onClick={()=>{handeClose("signIn")}}>
                            Close
                        </button>

                        <button onClick={()=>handelSignUp()}>
                            Sign Up
                        </button>
                    </ModalCard>
                </Background>
            )}
        </div>
    )
}
