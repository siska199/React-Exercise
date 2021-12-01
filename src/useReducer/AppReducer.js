import React, {useState, useReducer} from 'react'

const reducerFunction = (state, action)=>{
    console.log('isi state: ', state)
    console.log('isi action',action)
    switch(action.type){
        case 'increment' :
            return{
                ...state,
                count: state.count+1
            }
        case 'decrement':
            return{
                ...state,
                count : state.count-1
            }
        case 'initCount':
            return {
                ...state,
                count : action.payload
            }
        default:
            return state
    }
}

const initialState = {
    count : 0,
}

export default function AppReducer() {
    const [input, setInput] = useState(0)
    const [state, dispatch] = useReducer(reducerFunction,initialState)

    return (
        <div>
            <h1>Reducer Example</h1>

            <div>
                <label>Star Count:</label>
                <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <br/>
                <button onClick={()=>dispatch({type:'initCount', payload: input})}>Initialixe Counter</button>
            </div>

            <p>{state.count}</p>            
            <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type: 'decrement'})}>Decrement</button>

        </div>
    )
}
