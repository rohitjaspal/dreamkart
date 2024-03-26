import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import Login from './components/login'
import Signup from './components/signup';
import Products from './components/products';


function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <Login/>
        <Products/>
        <Signup/>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
