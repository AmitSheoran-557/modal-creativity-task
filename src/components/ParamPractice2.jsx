import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ParamPractice2 = () => {
    const { tabId } = useParams();
    const tabs = [
        { id: 'tab1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, fugit adipisci aut nesciunt dolores rem provident ad animi temporibus itaque!' },
        { id: 'tab2', content: 'Lorem ipsum dolor sit.' },
    ];
    return (
        <div className='bg-black min-h-screen flex justify-center items-start pt-10'>
            <div className='text-white'>

                <h1 className="text-4xl mb-5">Active Tab: {tabId}</h1>

                <Link className='text-black bg-white px-10 text-2xl py-1 mx-2' to="/tabs/tab1">Tab 1</Link>
                <Link className='text-black bg-white px-10 text-2xl py-1 mx-2' to="/tabs/tab2">Tab 2</Link>

                {tabs.map(tab => (
                    tab.id === tabId && <div className='max-w-xs mt-3 min-w-xs' key={tab.id}>{tab.content}</div>
                ))}
            </div>
        </div >
    );
};

export default ParamPractice2;
