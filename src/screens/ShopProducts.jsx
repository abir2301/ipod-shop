import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ShopProducts() {
  return (
    <Fragment>
    <Header></Header>
    <Navbar/>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}
