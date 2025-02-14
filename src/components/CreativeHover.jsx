import React, { useEffect } from 'react'

const CreativeHover = () => {
    useEffect(() => {
        document.title = "Hover Effect";
    }, []);
    return (
        <div className='flex justify-center flex-col items-center min-h-screen bg-black text-white'>

            <h2 className='text-center lg:text-5xl text-4xl lg:mb-7 mb-5'>Hover Effect Creativity</h2>
            <ul className='lg:text-4xl text-3xl mx-auto gap-1 flex flex-col font-light list-none p-0'>
                <li>Paracetamol</li>
                <li>Ibuprofen</li>
                <li>Amoxicillin</li>
                <li>Clindamycin</li>
                <li>Aspirin</li>
                <li>Diphenhydramine</li>
                <li>Azithromycin</li>
                <li>Metformin</li>
                <li>Loratadine</li>
                <li>Omeprazole</li>
            </ul>
        </div>
    )
}

export default CreativeHover
