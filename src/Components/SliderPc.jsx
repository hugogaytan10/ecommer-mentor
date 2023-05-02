import React, { useState } from 'react'
import img1 from '../assets/image-product-1.jpg';
import img2 from '../assets/image-product-2.jpg';
import img3 from '../assets/image-product-3.jpg';
import img4 from '../assets/image-product-4.jpg';
import tb1 from '../assets/image-product-1-thumbnail.jpg';
import tb2 from '../assets/image-product-2-thumbnail.jpg';
import tb3 from '../assets/image-product-3-thumbnail.jpg';
import tb4 from '../assets/image-product-4-thumbnail.jpg';
import { PreviewItem } from './PreviewItem';

export const SliderPc = () => {
    const images = [img1, img2, img3, img4];
    const thum = [tb1, tb2, tb3, tb4];
    const [selectImg, setSelectImg] = useState(images[0]);
    const [open, setOpen] = useState(false);

    return (
        <div className='block  h-auto relative w-1/3 rounded-xl'>
            <img src={selectImg} alt='nd' onClick={()=>{setOpen(true);}}>
            </img>
            <div className='flex flex-wrap justify-between  w-full'>
                {
                    thum.map((photo, idx) => {
                        return (
                            <img src={photo} alt="tbm" key={idx} className="w-2/12 rounded-lg mt-2 hover:cursor-pointer hover:opacity-50" 
                            onMouseOver={()=>{setSelectImg(images[idx]);}}
                            onMouseOut={()=>{setSelectImg(images[0]);}}
                            />
                        )
                    })
                }
            </div>
            {
                open &&
                <PreviewItem setOpen={setOpen}/>
            }
        </div>
    )
}