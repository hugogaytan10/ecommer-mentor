import React, { useState, useContext, useEffect } from 'react'
import { ModalCart } from './ModalCart';
import { MyContext } from './MyContext';
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
export const NavPc = () => {
    //consumimos el contexto
    const { item } = useContext(MyContext);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {

    }, [item])
    return (
        <>
            <nav className='flex items-center  h-16 p-4 w-full mb-16'>
                <div className='-mt-1' ><p className='ml-5 font-extrabold text-3xl '>sneakers</p></div>
                <div className='w-1/3 ml-5'>
                    <ul className='w-full h-12 flex justify-between items-center'>
                        <li className='text-gray-400 p-4 hover:border-b-2 hover:border-b-primaryOrange hover:cursor-pointer'>Collections</li>
                        <li className='text-gray-400 p-4 hover:border-b-2 hover:border-b-primaryOrange hover:cursor-pointer'>Men</li>
                        <li className='text-gray-400 p-4 hover:border-b-2 hover:border-b-primaryOrange hover:cursor-pointer'>Women</li>
                        <li className='text-gray-400 p-4 hover:border-b-2 hover:border-b-primaryOrange hover:cursor-pointer'>About</li>
                        <li className='text-gray-400 p-4 hover:border-b-2 hover:border-b-primaryOrange hover:cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='flex gap-5 ml-auto'>
                    <img src={cart} alt="carrito" className='mr-20 h-8 hover:cursor-pointer' onClick={() => { setShowModal(!showModal); }} />
                    {
                        item.amount > 0 &&
                        <span className='absolute bg-primaryOrange rounded-full text-center text-xs text-white  h-4 w-5 top-3 right-56'>{item.amount}</span>
                    }
                    <img src={avatar} alt="avatar" className='mr-20 h-8 hover:cursor-pointer rounded-full hover:border-primaryOrange hover:border-2' />
                </div>
            </nav>
            {
                showModal &&
                <ModalCart />
            }

        </>
    )
}
