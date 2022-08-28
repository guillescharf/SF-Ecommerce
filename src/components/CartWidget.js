import cartLogo from "../imgs/carro.png";
const CartWidget = () => {


    return(
        <div className="cartWidget">
            <img width="50px" height="50px" src ={cartLogo} alt="imagen de carro de compras" />
        </div>
    );
}

export default CartWidget;