import React, { useEffect, useState } from 'react';
import { Link, Router, useParams, useSearchParams } from 'react-router-dom';

const ParamsPractice = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const { paramId } = useParams()

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='py-20 bg-black min-h-screen'>
            <ul className='flex bg-black text-white max-w-xl w-full mx-auto justify-center items-center gap-40'>
                <Link to={() => Router.push('/param/tab1')} className={`bg-white rounded text-3xl text-black px-4 cursor-pointer`}>
                    tab1
                </Link>
                <li onClick={() => handleClick('tab2')} className={`bg-white rounded text-3xl text-black px-4 cursor-pointer`}>
                    tab2
                </li>
                <li onClick={() => handleClick('tab3')} className={`bg-white rounded text-3xl text-black px-4 cursor-pointer`}>
                    tab3
                </li>
            </ul>
            <div className="flex bg-black text-white max-w-xl w-full mx-auto justify-center items-center gap-40 pt-10">
                <div className={`${activeTab === 'tab1' ? '' : 'hidden'} text-xl`}>
                    <h1>tab1</h1>
                    <p>tab1 content</p>
                </div>
                <div className={`${activeTab === 'tab2' ? '' : 'hidden'} text-xl`}>
                    <h1>tab2</h1>
                    <p>tab2 content</p>
                    <p>tab2 reiugywui euirhnc ernd</p>
                </div>
                <div className={`${activeTab === 'tab3' ? '' : 'hidden'} text-xl`}>
                    <h1>tab3</h1>
                    <p>tab3 content</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};

export default ParamsPractice;
