import ItemCount from "./ItemCount";

const ItemListContainer = ({nameEcommerce}) => {

    return(
        <div className="itemsContainer">
            <h1 className="ecommerceName">{nameEcommerce}</h1>
            <ItemCount Stock={'15'} Initial={'1'} Name={'Producto 1'} />
            <ItemCount Stock={'15'} Initial={'1'} Name={'Producto 2'} />
        </div>
    );
}

export default ItemListContainer;