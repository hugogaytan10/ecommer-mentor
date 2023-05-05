import React, { useState } from 'react'
import img1 from '../assets/image-product-1.jpg';
import img2 from '../assets/image-product-2.jpg';
import img3 from '../assets/image-product-3.jpg';
import img4 from '../assets/image-product-4.jpg';
import tb1 from '../assets/image-product-1-thumbnail.jpg';
import tb2 from '../assets/image-product-2-thumbnail.jpg';
import tb3 from '../assets/image-product-3-thumbnail.jpg';
import tb4 from '../assets/image-product-4-thumbnail.jpg';
import close from '../assets/icon-close-orange.svg';
export const PreviewItem = (props) => {
    const images = [img1, img2, img3, img4];
    const thum = [tb1, tb2, tb3, tb4];
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectImg, setSelectImg] = useState(images[0]);
    const selectNewImage = async (next) => {
        setTimeout(() => {
            //depende si va hacia adelante o no, tendra su condicion de paro
            const condition = next ? selectIndex < images.length - 1 : selectIndex > 0;
            //si va hacia adelante entonces entra al parentesis 
            const nextIndex = next ? (condition ? selectIndex + 1 : 0) : condition ? selectIndex - 1 : images.length - 1;
            setSelectImg(images[nextIndex]);
            setSelectIndex(nextIndex);
        }, 300)
    }
    const previus = async () => {
        selectNewImage(false);
    }
    const next = async () => {
        selectNewImage(true);
    }

    return (
        <div className='absolute top-60 left-0 -translate-x-1/4 -translate-y-1/2 z-30 min-h-screen min-w-screen-vh bg-overlay'>
            <div className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img src={close} alt='x' className='float-right mb-5 hover:cursor-pointer' onClick={()=>{props.setOpen(false);}}/>
                <img src={selectImg} alt='nd' onClick={() => { setOpen(true); }} className='h-1/3'>
                </img>
                <div className='flex flex-wrap justify-between  w-full'>
                    {
                        thum.map((photo, idx) => {
                            return (
                                <img src={photo} alt="tbm" key={idx} className="w-2/12 rounded-lg mt-2 hover:cursor-pointer hover:opacity-50"
                                    onClick={() => { setSelectImg(images[idx]); }}
                                />
                            )
                        })
                    }
                </div>
                <button onClick={previus} className='absolute bg-gray-200 border-none font-extrabold rounded-full w-10 h-10 top-1/2 left-0  '>{'<'}</button>
            <button onClick={next} className='absolute bg-gray-200 border-none font-extrabold rounded-full w-10 h-10 top-1/2 right-0 '>{'>'}</button>
            </div>
        </div>
    )
}
