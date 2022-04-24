import {useState} from "react";

export default function TextInput(){
    const [value, setValue] = useState()

    return <div>
        <input value={value} onChange={event => setValue(event.target.value)}/>
        <p>{value}</p>

    </div>
}