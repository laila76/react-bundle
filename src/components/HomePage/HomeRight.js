import React from 'react'
// import ProgressBars from './ProgressBars'
export default function HomeRight() {
   const percentage = [
    {
      percentage: 75,
     title: "Intuition",
      id: 1,
   },
   {
      percentage: 83,
       title: "Créativity",
       id: 2,
     },
     {
       percentage: 25,
       title: "Pure Luck",
       id: 3,
     },
    {
       percentage: 95,
       title: "Awesomeness",
       id: 4,
     },
   ];
  return (
    <div className=''>
      <div>
        <h2 className='text-gray-400 font-light text-xl'>Developpeur full stack</h2>
        <h1 className='text-blue-900 text-6xl font-bold'>Justin Bieber</h1>
      </div>
      <div>
        <h2 className=' py-4 text-lg text-blue-900 font-bold'>Description</h2>
        <p className='font-serif text-sm text-gray-400'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo odit et
          vero reiciendis. Repellendus sit, ipsa dolorem sapiente asperiores,
          laudantium quisquam quia repellat assumenda dicta quos officia ipsam
          error? Porro rem omnis veniam commodi quis aspernatur id quam debitis!
          Sit et eveniet, eius quis alias perspiciatis ex nostrum nam molestiae.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, molestias?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deleniti!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, minima.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione eius labore ex consequuntur quidem perferendis provident hic odit facilis officiis molestiae aperiam, animi et in ducimus voluptatem cum sit dolores.
        </p>
      </div>
         {/* <div className="px-36 md:flex md:justify-between md:items-center"> 
        {percentage.map((bar) => (
          <ProgressBars
            percentage={bar.percentage}
            title={bar.title}
            key={bar.id}
            
          />
        ))}
      </div>  */}
      </div>
  
  ); 
}
