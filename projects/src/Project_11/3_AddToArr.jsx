import {useState} from "react";

export default function AddToArr(){
    const [value, setValue] = useState([])
    const [par, setPar] = useState()
    let result = value.map(elem=>{
        return <p key={elem}>{elem}</p>
    })

    return <div>
        <input  onChange={(event)=>setPar(event.target.value)}/>
        <button onClick={()=>setValue([...value, par])}>ADD Par</button>

        {result}
    </div>
}