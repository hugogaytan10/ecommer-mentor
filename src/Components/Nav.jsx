import React, { useState } from 'react'
import menu from '../assets/icon-menu.svg';
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import close from '../assets/icon-close.svg';
import { useContext } from 'react';
import { MyContext } from './MyContext';
import { ModalCart } from './ModalCart';
import { useEffect } from 'react';
export const Nav = () => {
    //consumimos el contexto
    const { item } = useContext(MyContext);
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    useEffect(()=>{

    },[item])
    return (
        <>
            <nav className='flex items-center  h-16 p-4 w-full'>
                <img src={menu} alt="meu" className='h-4 self-center' onClick={() => { setOpen(!open); }} />
                <div className='-mt-1' ><p className='ml-5 font-extrabold text-3xl '>sneakers</p></div>
                <div className='flex gap-5 ml-auto'>
                    <img src={cart} alt="carrito" className='h-5' onClick={()=>{setShowModal(!showModal);}}/>
                    {
                        item.amount > 0 &&
                        <span className='absolute bg-primaryOrange rounded-full text-center text-xs text-white  h-4 w-5 top-3 right-12'>{item.amount}</span>
                    }
                    <img src={avatar} alt="avatar" className='h-5' />
                </div>
            </nav>
            {
                showModal &&
                <ModalCart/>
            }
            {
                open &&
                <div className='fixed z-20 bg-overlay w-full min-h-screen top-0'>
                    <div className='absolute w-8/12 min-h-screen bg-white p-5 flex flex-wrap flex-col gap-10'>
                        <img src={close} alt="X" className='w-5' onClick={() => { setOpen(!open) }} />
                        <ul>
                            <li className='font-extrabold mb-5'>Collections</li>
                            <li className='font-extrabold mb-5'>Men</li>
                            <li className='font-extrabold mb-5'>Women</li>
                            <li className='font-extrabold mb-5'>About</li>
                            <li className='font-extrabold mb-5'>Contact</li>
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}
