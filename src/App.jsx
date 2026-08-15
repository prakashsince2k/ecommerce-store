import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import CartPage from './pages/CartPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {

    return (
        <div>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<ProductList />}
                />

                <Route
                    path="/cart"
                    element={<CartPage />}
                />

            </Routes>

        </div>
    )
}

export default App