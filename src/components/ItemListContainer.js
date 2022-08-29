import { useEffect, useState} from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({nameEcommerce}) => {

    const [products, setProducts] = useState([]);

    const getProducts  = async () => {
        //poner try catch
        try{
            const response = await fetch("https://fakestoreapi.com/products/");
            const data = await response.json();
            setProducts(data);
        }catch(e){
            console.log("aca hubo un error");
        }
    }

    useEffect(() => {
        getProducts();
    }, []); //Array de dependencias del useEffect

    return(
        <div className="itemsContainer">
            <h1 className="ecommerceName">{nameEcommerce}</h1>
            {products.map((product) => {
                console.log("product", product);
                return (
                    <ItemCount key={product.id} Stock={'15'} Initial={'1'} Data={product} />
                );
            })}
        </div>
    );
}

export default ItemListContainer;