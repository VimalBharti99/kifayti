import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import AdminHome from './Admin/AdminHome'
import MainCategory from './Admin/Maincategory/Maincategory'
import CreateMainCategory from './Admin/Maincategory/CreateMaincategory'
import UpdateMaincategory from './Admin/Maincategory/UpdateMaincategory'
import SubCategory from './Admin/Subcategory/Subcategory'
import CreateSubCategory from './Admin/Subcategory/CreateSubcategory'
import UpdateSubcategory from './Admin/Subcategory/UpdateSubcategory'
import Brand from './Admin/Brand/Brand'
import CreateBrand from './Admin/Brand/CreateBrand'
import UpdateBrand from './Admin/Brand/UpdateBrand'
import Product from './Admin/Product/Product'
import CreateProduct from './Admin/Product/CreateProduct'
import UpdateProduct from './Admin/Product/UpdateProduct'


export default function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/> 
            <Route path='/contact' element={<Contact/>} />
            <Route path='/admin' element={<AdminHome/>}/>

            <Route path='/admin/maincategory' element={<MainCategory/>}/>
            <Route path='/admin/maincategory/create' element={<CreateMainCategory/>}/>
            <Route path='/admin/maincategory/update/:id' element={<UpdateMaincategory/>}/>

            <Route path='/admin/subcategory' element={<SubCategory/>}/>
            <Route path='/admin/subcategory/create' element={<CreateSubCategory/>}/>
            <Route path='/admin/subcategory/update/:id' element={<UpdateSubcategory/>}/>

            
            <Route path='/admin/brand' element={<Brand/>}/>
            <Route path='/admin/brand/create' element={<CreateBrand/>}/>
            <Route path='/admin/brand/update/:id' element={<UpdateBrand/>}/>

            <Route path='/admin/product' element={<Product/>}/>
            <Route path='/admin/product/create' element={<CreateProduct/>}/>
            <Route path='/admin/product/update/:id' element={<UpdateProduct/>}/>


            <Route path='/*' element={<Error/>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
