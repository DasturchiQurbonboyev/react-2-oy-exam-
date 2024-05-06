import React, { useEffect } from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import Adidas from '../../components/adidas/Adidas'
import Company from '../../components/company/Company'

const Home = () => {


    return (
        <>
            <Hero />
            <Products />
            <Adidas />
            <Company />
        </>
    )
}

export default Home