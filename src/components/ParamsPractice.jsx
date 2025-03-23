import React, { useState } from 'react';
import { Link, Router, useParams } from 'react-router-dom';

const ParamsPractice = () => {

    const { paramId } = useParams()
    const tabs = [
        { id: 'tab1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit adipisci aut nesciunt dolores rem provident ad animi temporibus itaque!' },
        { id: 'tab2', content: 'Lorem ipsum dolor sit.' },
        { id: 'tab3', content: 'Lorem ipsum dolor sit ipsum dolor sit.' },
    ];

    return (
        <div className='py-20 bg-black min-h-screen'>
            <div className="flex gap-3 max-w-xl mx-auto">
                <Link className='text-black bg-white px-10 text-2xl py-1 flex justify-center flex-col items-center max-w-max mb-1 mx-auto' to="/param/tab1">Tab 1</Link>
                <Link className='text-black bg-white px-10 text-2xl py-1 flex justify-center flex-col items-center max-w-max mb-1 mx-auto' to="/param/tab2">Tab 2</Link>
                <Link className='text-black bg-white px-10 text-2xl py-1 flex justify-center flex-col items-center max-w-max mb-1 mx-auto' to="/param/tab3">Tab 3</Link>
            </div>

            <div className="flex bg-black text-white max-w-xl w-full mx-auto justify-center items-center gap-40 pt-10">
                {tabs.map(tab => (
                    tab.id === paramId && <div className='max-w-xs mt-3 min-w-xs text-white' key={tab.id}>{tab.content}</div>
                ))}
            </div>
        </div>
    );
};

export default ParamsPractice;
