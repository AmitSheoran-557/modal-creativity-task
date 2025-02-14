import React, { useState } from 'react';

const UploadImage = () => {
    const [images, setImages] = useState([]);

    const handleFiles = (e) => {
        const files = e.target.files;
        const fileArr = [];

        Array.from(files).map((file) => {
            if (file.type.startsWith("image/")) {
                fileArr.push({
                    url: URL.createObjectURL(file),
                });
            } else {
                alert("Please upload a valid image file.");
            }
        });

        setImages((prevImages) => [...prevImages, ...fileArr]);
    };

    return (
        <div className='bg-black py-20 text-white'>
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
