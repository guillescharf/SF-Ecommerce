import { useState } from "react";

const ItemCount = ({Stock, Initial, Data}) => {

    const[count,setCount] = useState(parseInt(Initial));

    const cartDown = () => {
        if(count <= 0){
            console.log("La cantidad no puede ser menor a cero. Para devoluciones contactese con el sector de ventas.");
            alert("La cantidad no puede ser menor a cero. Para devoluciones contactese con el sector de ventas.");
        }else{
            setCount(count-1);
        }
    }

    const cartUp = () => {
        if(count >= Stock){
            console.log(`No se puede agegar, el stock disponible es de ${Stock}` );
            alert(`No se puede agegar, el stock disponible es de ${Stock}` );
        }else{
            setCount(count+1);
        }
    }
     
    return (
        <div className="item">
            <a href="." title={Data.title}>
            <h3>{Data.title.substr(0,18)}...</h3>            
            <img className="productImage" src={Data.image} alt={Data.title} title={Data.title} />
            </a>
            <h3> $ {parseFloat(Data.price).toFixed(2)}</h3>
            <button className="cartButton" onClick={cartDown} > - </button>
            <span> {count} de {Stock} en Stock </span>
            <button className="cartButton" onClick={cartUp} > + </button>
            <button className="cartButtonAdd" onClick="" >Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;