import './App.css'
import ProductPage from './Pages/ProductPage'
import Cart from './Pages/Cart'
import Header from './components/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/productpage" element={<ProductPage />}/>
          <Route path="/cartpage" element={<Cart />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
