import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';
import Products from './components/products';
import Login from './components/login';
import NotFound from './components/notFound';

const Routess = () => {
return(
<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<NotFound/>}/>
        {/* Define other routes here */}
      </Routes>
</Router>
)
};
export default Routess;