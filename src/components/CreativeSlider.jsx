import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';


const CreativeSlider = () => {
  
    useEffect(() => {
        const calculateHeight = () => {
            const swiperSlideElements = Array.from(document.querySelectorAll('.swiper .swiper-slide'));
            if (!swiperSlideElements.length) return;
            const width = swiperSlideElements[0].getBoundingClientRect().width;
            const height = Math.round(width / (16 / 9));
            swiperSlideElements.forEach(element => element.style.height = `${height}px`);
        };

        // Initialize Swiper instance
        const swiper = new Swiper('.swiper', {
            slidesPerView: 5,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            simulateTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Call calculateHeight on component mount and on resize
        calculateHeight();
        window.addEventListener('resize', calculateHeight);
        
        return () => {
            window.removeEventListener('resize', calculateHeight);
        };
    }, []);

    return (
        <div>
            <div className="swiper">
                <div className="swiper-wrapper">
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1566679056462-2075774c8c07?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1670414701148-16ac8873a150?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=2856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1443632864897-14973fa006cf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1446488547543-78c11468449a?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                    <SwiperSlide><img src="https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></SwiperSlide>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    );
}

export default CreativeSlider;
