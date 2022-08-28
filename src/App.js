import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import './styles/styles.css';

const ecommerceName = "My first Ecommerce with React";

const App = () => {
  return (
    <div className="App">   
        <NavBar />
        <ItemListContainer nameEcommerce={ecommerceName} />
        
    </div>
  );  
}

export default App;
