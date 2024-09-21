import Banner from "@/Components/Banner";
import TrendingCards from "@/Components/TrendingCards";
import Image from "next/image";
import pizza from './Images/pizza.jpg';
import burger from './Images/burger.webp';
import biryani from './Images/biryani.jpg';
import pasta from './Images/pasta.jpg';


export default function Home() {

  let trendingObj = [
    {
      "title":"Pizza",
      "startFrom":149,
      "image":pizza
    },
    {
      "title":"Burger",
      "startFrom":79,
      "image":burger
    },
    {
      "title":"Biryani",
      "startFrom":249,
      "image":biryani
    },
    {
      "title":"Pasta",
      "startFrom":169,
      "image":pasta
    }
  ]


  return (
    <div>
 <div className="w-[85%] lg:w-[90%] sm:w-[90%] md:w-[92%]  m-auto mt-5 z-0 ">
        <Banner />
      </div>
      <div className="w-11/12 m-auto text-2xl text-[brown] font-bold mt-14">
        <h1>All time favorites</h1>
      </div>

      <div className="w-11/12 m-auto  mt-5 md:flex lg:flex block justify-between items-center ">
        <div className="w-full md:w-[49%] lg:w-[49%]  flex justify-between items-center">
          {trendingObj.map((items,index)=>{
            if(index<2){
              return(
                <TrendingCards title={items?.title} priceFrom={items?.startFrom} image={items?.image}/>
              )
            }
             
          })}
        </div>
        <div className="w-full md:w-[49%] lg:w-[49%] mt-10 md:mt-0 lg:mt-0  flex justify-between items-center">
        {trendingObj.map((items,index)=>{
            if(index>=2){
              return(
                <TrendingCards title={items?.title} priceFrom={items?.startFrom} image={items?.image}/>
              )
            }
             
          })}
        </div>
      </div>

      <div className="h-[300px] w-11/12 m-auto bg-[grey] mt-5 ">

      </div>
    </div>
  );
}
