import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {prevslide,nextslide,dotslide} from '../slices/sliderSlice'
import {sliderData}from "../assets/data/dummyData"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Slider = () => {
    const sliderState=useSelector((state)=>state.slider.value);//slider comes from store which we have mentioned in reducer object
    const dispatch=useDispatch();
    console.log("sliderstate",sliderState)
  return (
    <div className='relative pb-4'>
      <div >
      {sliderData.map((slide,idx)=>{
              return (
                <div key={slide.id} 
                className={
                  Number(slide.id)===sliderState?
                  "block ease-in-out duration-700 scale-100"
                  :"hidden ease-in-out duration-700 scale-95"}>
                <div>
                {parseInt(slide.id) === sliderState && (
                  <img
                    className="h-[250px] md:h-[800px] w-full absolute"
                    src={slide.img}
                    alt="shoes"
                  ></img>
                )}
                </div>
                 <div className="absolute top-14 md:top-44 mx-auto inset-x-1/4">
                <p className="text-white text-lg md:text-4xl font-inter font-bold tracking-normal leading-none">
                  {parseInt(slide.id) === sliderState && slide.text}
                </p>
              </div>
                 
                </div>
              
              )
        })}
      </div>
      
        <div className='flex absolute mx-auto left-[30%] mt-[200px] md:mt-[700px] md:left-[45%]'>
          {sliderData.map((dot,idx)=>{
            return( <div className='mr-4' key={dot.id}>
                       <div 
                       onClick={()=>dispatch(dotslide(idx))} 
                       className={idx==sliderState?"bg-red-400 rounded-full p-4 cursor-pointer"
                       :"bg-white rounded-full p-4 cursor-pointer"}>
                   </div>
            </div>
            );
          })}
        </div>
        <div className=' '>
        <button className='absolute top-[100px] md:top-[300px] right-4  bg-white rounded-full p-2 hover:bg-red-300' onClick={()=>dispatch(nextslide(sliderState+1))}><IoIosArrowForward className="w-6 h-6" /></button>
        <button className='absolute top-[100px] md:top-[300px] left-4   bg-white rounded-full p-2 hover:bg-red-300' onClick={()=>dispatch(prevslide(sliderState-1))}><IoIosArrowBack className="w-6 h-6"/></button>
        </div>




    


</div>


        



       
  
  )
}
