import React, { useState } from 'react'
import { Slider } from './Slider'
import cart from '../assets/icon-cart-white.svg';
import { useContext } from 'react';
import { MyContext } from './MyContext';
import { SliderPc } from './SliderPc';
export const Feed = () => {
    const [count, setCount] = useState(0);
    //consumimos nuestro contexto
    const { insertItem } = useContext(MyContext);
    const addToCart = async () => {
        let item = {
            amount: count,
            price: 125,
            name: 'Fall Limited Edition Sneackers'
        }
        insertItem(item);
    }
    return (
        <div className='lg:flex lg:justify-center lg:w-full lg:gap-20'>
            {
                window.screen.width > 499 ?
                    <SliderPc />
                    :
                    <Slider />
            }
            <div className='p-5 lg:w-1/3'>
                <p className='text-primaryOrange text-xs mb-2'>SNEAKER COMPANY</p>
                <h3 className='text-3xl font-extrabold'>Fall Limited Edition Sneakers</h3>
                <p className='mt-2 text-sm p-2 text-gray-500 lg:text-base'>These low-profile sneakers are your perfect
                    casual wear companion Feacturing a durable
                    rubber outer sole, they'll withstand everything
                    the weather can offer.
                </p>
                <div className='w-full flex flex-wrap justify-between gap-4'>
                    <div className='font-extrabold text-lg lg:text-3xl'>$125.00</div>
                    <div className='text-xs mr-auto text-primaryOrange font-extrabold bg-overlayOrange p-1 rounded-sm lg:h-5'>50%</div>
                    <div className='text-xs text-gray-400 line-through lg:w-full lg:block'>$250.00</div>
                </div>
                <div className='lg:flex lg:gap-10 lg:mt-5'>
                    <div className='flex justify-between p-2 bg-gray-100 rounded-lg mt-2 mb-2 lg:w-1/4 lg:mb-0 lg:mt-0 lg:h-12'>
                        <button className='text-primaryOrange font-extrabold text-lg' onClick={() => { setCount(count - 1); }}>-</button>
                        <p className='self-center'>{count}</p>
                        <button className='text-primaryOrange font-extrabold text-lg' onClick={() => { setCount(count + 1) }}>+</button>
                    </div>
                    <div className='w-11/12 flex justify-center m-auto gap-2 bg-primaryOrange h-12 rounded-lg lg:w-8/12 hover:opacity-50 hover:cursor-pointer' onClick={() => { addToCart() }}>
                        <img src={cart} alt="cart" className='h-4  self-center ' />
                        <p className='text-white self-center '>Add to cart</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
