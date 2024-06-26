import React from 'react'
import ShopOwnerFlow from "./shopOwnerFlow";
import ShopOwnerFlowHorizontalbar from "./shopOwnerFlowHorizontalbar";
import DetailsSection from "./detailsSection";
import DetailsSection2 from "./detailsSection2";
import Navbar from './navbar';
import Footer from './Footer';

const ShopHome = ({val}) => {
  return (
    <div>
        <Navbar/>
        <ShopOwnerFlow/>
        <ShopOwnerFlowHorizontalbar/>
        <DetailsSection/>
        <DetailsSection2/>
        <Footer/>
    </div>
  )
}

export default ShopHome
