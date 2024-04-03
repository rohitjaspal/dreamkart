import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import Routess from './routes';
// import Login from './components/login'
// import Products from './components/products';
// import Signup from './components/signup';


function App() {   
  return (
    <div className="App">
      <PrimeReactProvider>
        <Routess>
        {/* <Login/>
         <Products/>
          <Signup/>  */}
        </Routess>
      </PrimeReactProvider>
    </div>
  );
}

export default App;