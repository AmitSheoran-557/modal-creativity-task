import React, { useState } from 'react';

const UploadImage = () => {
    const [images, setImages] = useState([]);

    const handleFiles = (e) => {
        e.preventDefault();
        const files = e.target.files || e.dataTransfer.files;
        const fileArr =
            Array.from(files).filter(file =>
                file.type.startsWith("image/")).map(file => ({
                    url: URL.createObjectURL(file),
                }));
        setImages(prevImages => [...prevImages, ...fileArr]);
        e.target.value = null;
    };

    return (
        <div className='bg-black py-20 min-h-screen text-white' onDrop={handleFiles} onDragOver={(e) => e.preventDefault()}  >
            <label htmlFor="image" className='bg-black text-white cursor-pointer text-4xl'>
                upload now
            </label>
            <input type="file" multiple onChange={handleFiles} id='image' hidden />
            <div>
                {images.map((item, index) => (
                    <img className='max-w-80' key={index} src={item.url} alt={`selected-img-${index}`} />
                ))}
            </div>
        </div>
    );
};

export default UploadImage;
