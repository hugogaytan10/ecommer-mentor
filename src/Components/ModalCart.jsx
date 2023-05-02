import React from 'react'
import { useContext } from 'react'
import { MyContext } from './MyContext'
import img1 from '../assets/image-product-1-thumbnail.jpg'
import trash from '../assets/icon-delete.svg'
export const ModalCart = () => {
    //consumir el contexto 
    const { item, insertItem } = useContext(MyContext);
    const deleteItem = async() =>{
        let item = {
            amount: 0,
            price: 0,
            name: ''
        }
        insertItem(item); 
    }
    return (
     
            <div className='bg-white absolute z-10 w-11/12 h-72 shadow-lg  rounded-lg left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 lg:w-1/4 lg:translate-x-3/4 lg:top-52'>
                <p className='font-bold border-b-2 p-2'>Cart</p>
                {
                    item.amount == 0 &&
                    <div className=' absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400'>Your cart is empty</div>
                }
                {
                    item.amount > 0 &&
                    <div className='overflow-auto'>
                        <div className='flex justify-around w-full p-5 gap-5'>
                            <img src={img1} alt='sneaker' className='w-14 h-14 rounded-sm'/>
                            <div className='flex flex-wrap'>
                            <p className='block w-full text-sm text-gray-400'>{item.name}</p>
                            <span className='text-gray-400'>${item.price} 
                            <span className='inline-block text-xs text-gray-400'>x </span>
                            <span className='inline-block'>{item.amount}</span>  
                            <span className='inline-block font-extrabold text-black ml-1'> {item.amount*item.price}</span>
                            </span>
                            </div>
                            <img src={trash} alt="delete" className='self-center' onClick={()=>{deleteItem()}}/>
                        </div>
                        <div className='text-white text-center bg-primaryOrange w-11/12 m-auto p-2 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 hover:opacity-50 hover:cursor-pointer'>Checkout</div>
                    </div>


                }

            </div>
    )
}
