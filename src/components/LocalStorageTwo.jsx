import React, { useState, useEffect } from 'react';

const LocalStorageTwo = () => {
    const [result, setResult] = useState([]);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        if (name.length > 0) {
            e.preventDefault();
            const newResult = [...result, name];
            setResult(newResult);
            localStorage.setItem('result', newResult);
            setName('');
        };
    };

    useEffect(() => {
        const storedResult = localStorage.getItem('result');
        if (storedResult) {
            setResult(storedResult.split(','));
        }
    }, []);

    return (
        <div className='bg-black py-10 min-h-screen'>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='enter your name' className='border bg-white border-black py-2 px-4 max-w-xs' />
            <button onClick={handleSubmit} type='submit' className='bg-white text-black'>
                Submit
            </button> 
            {result.length > 0 && result.map((item, i) => (
                <ul className='list-disc' key={i}>
                    <li className='text-white pl-4 text-2xl'>
                        {item}
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default LocalStorageTwo;
