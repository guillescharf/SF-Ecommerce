import ItemCount from "./ItemCount";

const ItemListContainer = ({nameEcommerce}) => {

    return(
        <div>
            <h1>{nameEcommerce}</h1>
            <ItemCount Stock={'15'} Initial={'1'} />
        </div>
    );
}

export default ItemListContainer;