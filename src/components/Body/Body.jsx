import React, {useState, useEffect} from 'react';
import "./Body.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ReactComponent as BedsIcon } from "../../bedsIcon.svg";
import { ReactComponent as RefrigeratorIcon } from "../../refrigeratorIcon.svg";
import { ReactComponent as FurnitureIcon } from "../../furnitureIcon.svg";
import { ReactComponent as OvenIcon } from "../../ovenIcon.svg";
import { ReactComponent as SofaIcon } from "../../sofaIcon.svg";
import { ReactComponent as TvIcon } from "../../tvIcon.svg";
import { ReactComponent as WasherIcon } from "../../washerdIcon.svg";
import { ReactComponent as DinningIcon } from "../../dinningIcon.svg";
import { ReactComponent as DeskIcon } from "../../deskIcon.svg"; 
import { ReactComponent as WardroveIcon } from "../../wardroveIcon.svg";
export default function Body() {

//function for quantityer weights

const [item, setitem] = useState(0)


function tryal (){
    console.log(item)
    setitem(previo =>{
        previo = previo + 1;
    })
    console.log(item,'despues')
}

const [items, setItems]= useState([
    {id: 0, type:'Bed', weight: 1.2, quantity:0, icon:BedsIcon},
    {id: 1, type:'refrigerator', weight:1, quantity: 0, icon:RefrigeratorIcon},
    {id: 2, type:'Furniture', weight:0.5, quantity:0, icon:FurnitureIcon},
    {id: 3, type:'oven', weight:0.6, quantity:0, icon:OvenIcon},
    {id: 4, type:'sofa', weight:1.5, quantity:0, icon:SofaIcon},
    {id: 5, type:'tv', weight:0.25, quantity:0, icon:TvIcon},
    {id: 6, type:'washer', weight:0.5, quantity:0, icon:WasherIcon},
    {id: 7, type:'dinning', weight:2, quantity:0, icon:DinningIcon},
    {id: 8, type:'desk', weight:0.75, quantity:0, icon:DeskIcon},
    {id: 9, type:'wardrove', weight:3.2, quantity:0, icon:WardroveIcon}
])

function accion(n){
    setItems((currentquantity)=>{
        console.log(n)
        return currentquantity.map(item=>{
            if(n === item.id){
                return {...item, quantity: item.quantity + 1}
            }
        })
        console.log(items[0])
    })
}
// const accion = (weight) =>{
//     console.log(items[weight], 'intento 1')
//     items[weight] = items[weight] + 1;
//     setitems(items)
//     console.log(items[weight])
//     return items;
//}


const itemreturn = (i)=>{
    return items[i].quantity;
}
return (
    <div className="bodyColor">
        <div className="bodyArea">
            <div>
                <h1 className="center">What itemss to store?</h1>
                <div className="center">
                <p  className="Ptitle">Select which itemss you wish to store before moving to your new home. We’ll keep ’em safe!</p>
                </div>
            </div>
            <div className="itemArea">
                <div className='gridArea'>
                    <div className="iconsArea">
                        <div className="itemIcon">
                            <div>
                            <BedsIcon/>
                            </div>
                            <p>Beds</p>
                        </div>
                        <div className="counterIcon">
                            <button className="boton">-</button>
                            <div className="counterNmb">
                            <h4>{item}</h4>
                            </div>
                            <button className="boton" onClick={()=>{tryal()}}
                            weight={1}>+</button>
                        </div>
                    </div>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="calculate">
                <p className="clearBox">Clear</p>
                <p className="calculateBox">Calculate</p>
            </div>
            <div className="result">
                <div className="summary">
                    <h2>Summary</h2>
                </div>
                <div className="summaryArea">
                    <div className="summaryColor">
                        <div>
                            <p>Total itemss</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Total m²</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Subtotal</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Tax</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Total</p>
                            <p></p>                        
                        </div>
                        <div>
                            <p>Due Today 50%</p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}