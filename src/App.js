import React from 'react';
import './App.css'

import Header from './components/Header/Header'
import HomeDetail from './components/HomeDetail/HomeDetail'
import CartDetail from './components/CartDetail/CartDetail'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ListItemDetail from './components/ListItemDetail/ListItemDetail'
import Footer from './components/Footer/Footer'
import SellerPage from './components/SellerPage/SellerPage';
import SellerOrderPage from './components/SellerOrderPage/SellerOrderPage';
import AddItem from './components/AddItem/AddItem';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import BuyDetail from './components/BuyDetail/BuyDetail';


const isSeller = true;
function App() {
    
    return (
        <BrowserRouter>
            <div className='bg-eee'>
                <Header/>

                <Routes>
                    <Route exact path="/" element={<HomeDetail/>} />
                </Routes>

                <Routes>
                    <Route path="/cart" element={<CartDetail/>} />
                </Routes>

                <Routes>
                    <Route path="/item" element={<ItemDetail/>} />
                </Routes>

                <Routes>
                    <Route path="/buy" element={<BuyDetail/>} />
                </Routes>

                <Routes>
                    <Route path="/list" element={<ListItemDetail/>} />
                </Routes>

                {
                    isSeller === true ? (
                        <Routes>
                            <Route path="/seller" element={<><Header/><SellerPage/><Footer/></>} />,
                            <Route path="/seller/add" element={<><Header/><AddItem/><Footer/></>} />
                            <Route path="/seller/orders" element={<><Header/><SellerOrderPage/><Footer/></>} />
                            <Route path="/seller/profile" element={<><Header/><Footer/></>} />
                        </Routes>
                        
                    ) : (
                        <Route path="/seller" element={<><Header/><SellerPage/><Footer/></>} />
                    )
                }
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
