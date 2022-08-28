import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const ecommerceName = "My first Ecommerce with React";

const App = () => {
  return (
    <div className="App">   
        <ItemListContainer nameEcommerce={ecommerceName} />
        <NavBar />
    </div>
  );  
}

export default App;
