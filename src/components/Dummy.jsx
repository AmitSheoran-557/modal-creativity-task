import React from 'react';

const Dummy = () => {
  const slides = [
    {
      id: 1, title: "Example Modal - Slide 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      nextLabel: "››",
      nextTarget: "modal-content-2",
    },
    {
      id: 2, title: "Example Modal - Slide 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      prevLabel: "‹‹",
      prevTarget: "modal-content-1",
      nextLabel: "››",
      nextTarget: "modal-content-3",
    },
    {
      id: 3, title: "Example Modal - Slide 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      prevLabel: "‹‹",
      prevTarget: "modal-content-2",
    },
  ];

  return (
    <div>
      <div className="m-7 text-center">
        <h1 className='text-4xl lg:mb-7 mb-5'>This is a Modal Slider</h1>
        <label htmlFor="modal-content" className=" bg-white hover:bg-black transition-all duration-300 border-black ease-in hover:text-white border-solid border-[1px] rounded-sm cursor-pointer inline-block text-[14px] px-[15px] py-[8px] text-center min-w-[60px] relative">
          TAP ME
        </label>
      </div>

      <div >
        <input type="checkbox" id="modal-content" className="modal-open absolute left-[-999em] opacity-0" hidden />
        <div className="modal hidden">
          <label htmlFor="modal-content" className="modal-overlay absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-[102] hidden"></label>
          <div className="modal-body absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90%] max-h-[90%] p-4 bg-white rounded-lg overflow-hidden text-center w-[75%] z-[103]">
            <label htmlFor="modal-content" className="cursor-pointer text-[35px] font-bold leading-[20px] p-2.5 absolute top-0 right-0 z-100">
              &times;
            </label>

            <input type="radio" name="content" id="modal-content-1" className="modal-radio" defaultChecked hidden />
            <input type="radio" name="content" id="modal-content-2" className="modal-radio" hidden />
            <input type="radio" name="content" id="modal-content-3" className="modal-radio" hidden />

            {slides.map((slide) => (
              <div key={slide.id} className={`flex absolute transition-all duration-400 ease-in w-full content-${slide.id}`}>
                <div className="relative my-8 mx-4 py-12">
                  <h2 className="lg:text-3xl text-2xl lg:mb-4 mb-3">{slide.title}</h2>
                  <p className="text-left lg:text-base text-sm">{slide.content}</p>

                  <div className="absolute top-[50px] w-full">
                    {slide.prevLabel && (
                      <label htmlFor={slide.prevTarget} className="content-[''] left-0 -top-14 absolute bg-[#f7f7f7] text-[#303030] cursor-pointer inline-block text-[50px] leading-[45px] h-[50px] w-[80px] px-[25px] py-0 text-center align-middle -tracking-[7px]">
                        {slide.prevLabel}
                      </label>
                    )}
                    {slide.nextLabel && (
                      <label htmlFor={slide.nextTarget} className="content-[''] right-0 -top-14 absolute bg-[#f7f7f7] text-[#303030] cursor-pointer inline-block text-[50px] leading-[45px] h-[50px] w-[80px] px-[25px] py-0 text-center align-middle -tracking-[7px]">
                        {slide.nextLabel}
                      </label>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
