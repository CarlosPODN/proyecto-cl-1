import React, {useState, useEffect,useRef} from 'react';
import "./Body.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ReactComponent as BedsIcon } from "../../Icons/bedsIcon.svg";
import { ReactComponent as RefrigeratorIcon } from "../../Icons/refrigeratorIcon.svg";
import { ReactComponent as FurnitureIcon } from "../../Icons/furnitureIcon.svg";
import { ReactComponent as OvenIcon } from "../../Icons/ovenIcon.svg";
import { ReactComponent as SofaIcon } from "../../Icons/sofaIcon.svg";
import { ReactComponent as TvIcon } from "../../Icons/tvIcon.svg";
import { ReactComponent as WasherIcon } from "../../Icons/washerdIcon.svg";
import { ReactComponent as DinningIcon } from "../../Icons/dinningIcon.svg";
import { ReactComponent as DeskIcon } from "../../Icons/deskIcon.svg"; 
import { ReactComponent as WardroveIcon } from "../../Icons/wardroveIcon.svg";

export default function Body() {
const resultado = useRef(0)
const [cantidad, SetCantidad] = useState(0)
const [Totales, setTotales] = useState([
    {id: 0, name:'Total m²', value:0},
    {id: 1, name:'subTotal', value:0},
    {id: 2, name:'tax', value:0},
    {id: 3, name:'Total', value:0},
    {id: 4, name:'halfTotal', value:0}]);
const [items, setItems] = useState([
    {id: 0, type:'Beds', weight: 1.2, quantity:0, icon: <BedsIcon  className="gridIcon" />},
    {id: 1, type:'Refrigerator', weight:1, quantity: 0, icon: <RefrigeratorIcon className="gridIcon" />},
    {id: 2, type:'Furniture', weight:0.5, quantity:0, icon: <FurnitureIcon  className="gridIcon" />},
    {id: 3, type:'Oven', weight:0.6, quantity:0, icon: <OvenIcon className="gridIcon" />},
    {id: 4, type:'Sofa', weight:1.5, quantity:0, icon: <SofaIcon className="gridIcon" />},
    {id: 5, type:'TV', weight:0.25, quantity:0, icon: <TvIcon className="gridIcon" />},
    {id: 6, type:'Washer', weight:0.5, quantity:0, icon: <WasherIcon className="gridIcon" />},
    {id: 7, type:'Dinning', weight:2, quantity:0, icon: <DinningIcon className="gridIcon" />},
    {id: 8, type:'Desk', weight:0.75, quantity:0, icon: <DeskIcon className="gridIcon" />},
    {id: 9, type:'Wardrove', weight:3.2, quantity:0, icon: <WardroveIcon className="gridIcon" />}
])

// en el challenge otorgado por la empresa se solicito, que al dar click en calcular se actualizara el precio, o, si se podia, que todo se actualizara en conjunto, el use effect ayuda la actualizacion conjunta
useEffect(()=>{
    calcular();
},[cantidad])

//funcion para calcular el valor de los totales
const calcular = () =>{
    let suma = 0
    items.map((item)=>{
            return suma += (item.quantity * item.weight);
    })
    resultado.current = suma
    setTotales(Totales.map((totalTipo,index)=>{
        switch(totalTipo.id){
            case 0:
                return {...totalTipo, value : resultado.current }
            case 1:
                return {...totalTipo, value : (resultado.current * 200).toFixed(2) }
            case 2:
                return {...totalTipo, value : ((resultado.current * 200) * 0.16).toFixed(2) }
            case 3:
                return {...totalTipo, value : (((resultado.current * 200) * 0.16) + resultado.current * 200).toFixed(2)}
            case 4:
                return {...totalTipo, value : ((((resultado.current * 200) * 0.16) + resultado.current * 200) * 0.5).toFixed(2) }
            default:
                return {...totalTipo, value : totalTipo.value + 1 }
        }
    }
        ))
}

//funcion para limpiar los resultados y items escogidos
const clear = ()=>{
    setItems(items.map((total)=>{
        return{...total, quantity: 0}
    }))
    setTotales(Totales.map((total)=>{
        return{...total, value: 0}
    }))
    SetCantidad(0)
}

//funcion para asignar cada item
const setBoxes = ()=>{
    return items.map((item) => {
        return(
            <div className='mx-2 mb-5 yes' key={item.id}>
                <div className="itemIcon">
                    {item.icon}
                    {item.type}
                </div>
                <div className="counterIcon mt-3">
                    <button className="boton-left" onClick={() => {minus(item)}}>-</button>
                    <div className="counterNmb">
                        <h5>{item.quantity}</h5>
                    </div>
                    <button className="boton-right" onClick={() => {plus(item)}}>+</button>
                </div>
            </div>
        )
    })
}
// funcion que nos ayuda a tener los summarys, realizado asi para practicar
const setSummary = () => {
    return Totales.map((item,index)=>{
        if(item.id<=2){
        return(
            <div className="totals" key={item.id}>
                <p>{item.name}</p>
                <p>{item.value}</p>
            </div>)
            }else{
                return (
                <div className="totals fw-bold" key={item.id}>
                    <p>{item.name}</p>
                    <p>${item.value}</p>
                </div>)
            }
        })
    }

//function para sumar 1 al item en cuestion
const plus = (item) => {
    SetCantidad(cantidad + 1)
    setItems(
        items.map((itemActual,index) => {
            if(itemActual.id === item.id){
                return{...itemActual, quantity: itemActual.quantity + 1};
            }else{
                return {...itemActual}
            }
        })
    )
}
//function para restar 1 al item en cuestion
const minus = (item) => {
    if(item.quantity === 0){
        return
    }
    SetCantidad(cantidad - 1)
    if(item.quantity<=0){
        return
    }
    setItems(
        items.map((itemActual) => {
            if(itemActual.id === item.id){
                return{...item, quantity: item.quantity - 1};
            }else{
                return {...itemActual};
            }
        })
    )
}
return (
    <div className="bodyColor">
        <div className='title'>
            <h1 className="center mt-5">What items to store?</h1>
            <p  className="Ptitle">Select which itemss you wish to store before moving to your new home. We’ll keep ’em safe!</p>
        </div>
        <div className="itemArea">
            {setBoxes()}
        </div>
        <div className="calculate">
            <button className="clearBox" onClick={()=>{clear()}}>Clear</button>
            <button className="calculateBox" onClick={()=>{calcular()}}>Calculate</button>
        </div>
        <div className="result">
                <h2 className='text-center'>Summary</h2>
            <div className='mb-5'>
                <div className='totals'>
                    <p>Total items</p>
                    <p>{cantidad}</p>
                </div>
                {setSummary()}
            </div>
        </div>
    </div>
    )
}