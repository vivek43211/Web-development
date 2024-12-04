import React from "react";
function Card({myname, btx_text = "visit me ",myimg = "https://hips.hearstapps.com/hmg-prod/images/sydney-sweeney-exercise-regime-659bd6125f773.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=1200:*"}){
    console.log(myname)
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src={myimg}
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{myname}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
            {btx_text} →
          </button>
        </div>
      </div>
    )
}
export default Card