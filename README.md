This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





import Image from "next/image";
import React from "react";
import Banner from "@/Components/Banner";
import TrendingCards from "@/Components/TrendingCards";
import pizza from '../Images/pizza.jpg';
import burger from '../Images/burger.webp';
import biryani from '../Images/biryani.jpg';
import pasta from '../Images/pasta.jpg';




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
      <div className="w-[85%] lg:w-[90%] sm:w-[90%] md:w-[92%]  m-auto mt-3 ">
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
    </div>
  );
}