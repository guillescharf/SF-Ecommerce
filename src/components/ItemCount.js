import { useState } from "react";

const ItemCount = ({Stock, Initial, Name}) => {

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
            <h3>{Name}</h3>
            <img className="productImage" src="" alt="Imagen del producto " />
            <button className="cartButton" onClick={cartDown} > - </button>
            <span> {count} </span>
            <button className="cartButton" onClick={cartUp} > + </button>
        </div>
    )
}
export default ItemCount;