import React from "react";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Form from "./pages/Form";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/productDetails/:productId" element={<ProductDetail/>}/>
        <Route path="/form" element={<Form/>}/> 
      </Routes>
     </Router>
    </div>
  );
}

export default App;
