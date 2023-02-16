import React, {useState} from "react";
import {ManType} from "../05-map/05";

type PropsType = {
    title: string,
    man: ManType,
    food:Array<string>,
    car:{model:string}
}
function useDimych(m:string){
    return [m,function (){}]
}
export const ManComponent: React.FC<PropsType> = (props: PropsType) => {

    const[message,setMessage] = useState("hello")
    const {title, man} = props;
    const rest ={
        food:props.food
    }

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{props.car.model}</div>
        <div>{props.man.name}</div>
    </div>
}