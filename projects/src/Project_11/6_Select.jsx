import {useState} from "react";

export default function GetSelect(){
    const [value, setValue] = useState()
    let cities = ['Lvov', 'Kiev', 'Minsk']
    let result = cities.map((elem,index)=>{
        return <option key={index}>{elem}</option>
    })
    return <div>
        <select onChange={event=>setValue(event.target.value)}>{result}</select>
        <p>Your city is : {value}</p>

    </div>
}