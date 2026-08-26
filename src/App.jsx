import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import OrderDetails from './pages/OrderDetails'
import AddOrder from './pages/AddOrder'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/orders/:id' element={<OrderDetails />} />
      <Route path='/orders/new' element={<AddOrder />} />
    </Routes>
    </div>
  )
}
