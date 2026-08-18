import Categories_section from "./Categories_section";
import COMMUNITY from "./COMMUNITY";
import Hero from "./Hero";
import Product_section from "./Product_section";
import Seasonal_section from "./Seasonal_section";
import Join from "./Join";


function Home() {
  return (
    <>
     <Hero></Hero>
     
     <Product_section></Product_section>
     <Categories_section></Categories_section>
     <Seasonal_section></Seasonal_section>
     {/* <COMMUNITY></COMMUNITY> */}
     <Join></Join>
    </>
  )
}

export default Home;