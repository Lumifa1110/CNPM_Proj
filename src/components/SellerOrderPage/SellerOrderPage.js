import React from 'react';

import foodThum1 from '../../assets/images/FoodThumnail/bun.png'
import foodThum2 from '../../assets/images/FoodThumnail/pho.png'
import foodThum3 from '../../assets/images/FoodThumnail/doannhanh.png'
import foodThum4 from '../../assets/images/FoodThumnail/dohan.png'
import foodThum5 from '../../assets/images/FoodThumnail/lau.png'
import foodThum6 from '../../assets/images/FoodThumnail/donhat.png'

import sunrise_logo from '../../assets/images/logo/SunriseFoods-logo.png'
import flavorofindia_logo from '../../assets/images/logo/FlavourOfIndia-logo.png'
import panzerhot_logo from '../../assets/images/logo/PanzerHot-logo.png'
import friggitoria from '../../assets/images/logo/Friggitoria-logo.png'

import Orders from '../Orders/Orders';

const MENU_TYPE = {SMALL: 0,LARGE: 1};
let recommend = [
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 12.567, price: 89},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 8.291, price: 25},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", fstar: 5, hstar: 0, nstar: 0, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 1.286, price: 56},
    {img: foodThum5, name: "Thập Cẩm Chả Biết Tên", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 15.927, price: 102},
    {img: foodThum6, name: "Cơm Chay Chỉ Thiên", link: "/item", fstar: 3, hstar: 0, nstar: 2, rvcount: 26.546, price: 89}
]


const foods = [
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 12.567, price: 89},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 8.291, price: 25},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", fstar: 5, hstar: 0, nstar: 0, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 1.286, price: 56},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 15.927, price: 102},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", fstar: 3, hstar: 0, nstar: 2, rvcount: 26.546, price: 89},
    {img: foodThum5, name: "Thập Cẩm Chả Biết Tên", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 15.927, price: 102},
    {img: foodThum1, name: "Bún Đậu Mắm Tôm chuẩn ngon", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 12.567, price: 89},
    {img: foodThum2, name: "Cơm Tấm Hoàng Diệu 2", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 8.291, price: 25},
    {img: foodThum3, name: "Cá Viên Chiên Makima", link: "/item", fstar: 5, hstar: 0, nstar: 0, rvcount: 163.523, price: 999},
    {img: foodThum4, name: "Nem Cuốn Hàn Xẻng", link: "/item", fstar: 3, hstar: 1, nstar: 1, rvcount: 1.286, price: 56},
    {img: foodThum6, name: "Thập Cẩm Chả Biết Tên", link: "/item", fstar: 4, hstar: 0, nstar: 1, rvcount: 15.927, price: 102},
    {img: foodThum2, name: "Cơm Chay Chỉ Thiên", link: "/item", fstar: 3, hstar: 0, nstar: 2, rvcount: 26.546, price: 89}
];



const restaurant_logo = [
    {img: sunrise_logo, name: "Sunrise Foods", link: "/list"},
    {img: flavorofindia_logo, name: "Flavour of India", link: "/list"},
    {img: panzerhot_logo, name: "Panzer Hot", link: "/list"},
    {img: friggitoria, name: "Friggitoria", link: "/list"}
];

const SellerOrderPage = () => {
    return (
        <div class="bg-white">
            <div class="container py-5">
                <div className=''>
                    <p class="mb-0 h1">Seller Home</p>
                    <p class="me-title opacity-75">View food list, edit, add, delete item</p>
                    <hr/>
                </div>
                
                <div class="row mt-4">
                    <div class="col-12 col-md-3">
                        <div class="list-group list-group-flush gap-5">
                            <div class="card">
                                <img src={flavorofindia_logo} class="" alt="" />
                            </div>
                            {/* Hiện các item mà seller đã đăng */}
                            <a href="/seller" class="list-group-item list-group-item-action nav-item d-flex align-content-center justify-content-between">
                                <div class="">
                                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                                    <span class="ps-4 me-title">Store</span> 
                                </div>
                                <span class="badge badge-pill bg-danger float-end text-center">{foods.length}</span>
                            </a>
                            <a href="/seller/orders" class="list-group-item list-group-item-action nav-item d-flex align-content-center justify-content-between">
                                <div class="">
                                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                                    <span class="ps-4 me-title">Orders</span> 
                                </div>
                                <span class="badge badge-pill bg-danger float-end text-center">12</span>
                            </a>
                            <a href="/seller/profile" class="list-group-item list-group-item-action nav-item d-flex align-content-center justify-content-between">
                                <div class="">
                                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                                    <span class="ps-4 me-title">Profile</span> 
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-md-9">
                        <div class="card">
                            <div class="card-body">
                                <Orders imgs={recommend} type={MENU_TYPE.LARGE}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerOrderPage;