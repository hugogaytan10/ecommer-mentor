import React, { useState } from 'react'
import img1 from '../assets/image-product-1.jpg';
import img2 from '../assets/image-product-2.jpg';
import img3 from '../assets/image-product-3.jpg';
import img4 from '../assets/image-product-4.jpg';

export const Slider = () => {
    const images = [img1, img2, img3, img4];
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectImg, setSelectImg] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);
    //indice en donde estamos, arreglo de imagenes y si vamos a la siguiente o hacia atras
    const selectNewImage = async (next) => {
        setLoaded(false);
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
        <div className='block w-full  h-auto relative'>
            <img src={selectImg} alt='nd' className={loaded ? 'opacity-100' : 'opacity-0'} onLoad={() => { setLoaded(true) }}>
            </img>
            <button onClick={previus} className='absolute bg-gray-200 border-none font-extrabold rounded-full w-10 h-10 top-1/2 left-0  '>{'<'}</button>
            <button onClick={next} className='absolute bg-gray-200 border-none font-extrabold rounded-full w-10 h-10 top-1/2 right-0 '>{'>'}</button>
        </div>
    )
}