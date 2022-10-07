import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Books from '../books/Books';

import Login from '../Login';
import Register from '../Register';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Register/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
      <Route path="/addbooks" element={<Books />} />
      
    </Routes>
  </BrowserRouter>
);

export default App;
