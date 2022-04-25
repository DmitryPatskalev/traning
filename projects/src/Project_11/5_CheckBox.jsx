import {useState} from "react";

export default function CheckBox(){
    const [check, setCheck] = useState()


    return <div>
        <input type='checkbox' onChange={()=>setCheck(!check)}/>
        <p>{check? 'Turned On': 'Turned Off'}</p>

    </div>
}