import React, { useState } from 'react'

const UploadImage = () => {

    const [image, setImage] = useState('')

    const handleFiles = (e) => {
        const files = e.target.files;
        const fileArr = Array.from(files);
        setImage((prevImages) => [...prevImages, ...fileArr]); 
    }

    return (
        <div className='bg-black py-20 text-white'>
            <label htmlFor="image" className='bg-black text-white cursor-pointer text-4xl'>
                upload now
            </label>
            <input type="file" multiple onClick={handleFiles} id='image' placeholder='upload image' hidden />
            {image && image.map((item, index) => (
                <img className='max-w-80' key={index} src={URL.createObjectURL(item)} alt={`selected-img-${index}`} />
            ))}
        </div>
    )
}

export default UploadImage
