import React  from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'




const ContactUs = () => {

  const [isOpen,setIsOpen] = useState(true);
  const [isTranslate,setIstraslate] = useState(false);
  const clickMenuSvg = ()=>{
    setIsOpen(!isOpen);
    setIstraslate(!isTranslate);
  }


  return (
<>
    <div className='w-full fixed headerFixed  overflow-x-hidden top-0'>
    <header className='py-4 border-b-[1px] border-[#d9d9d9] bg-white  justify-between px-10 overflow-x-hidden lg:py-7 lg:px-15 xl:pt-4 xl:pb-4 xl:px-20 flex items-center md:justify-between xl:justify-between lg:justify-between z-50'>
      <a className=' logo font-semibold appFixed cursor-pointer' href='#'>University of Tlemcen</a>
     <nav>
     {/* #1877F2 */}
     <ul className='flex gap-10 items-center'>
       <li><Link to="/" className='textLink font-semibold   '>Home</Link></li>
       <li><Link  to="/News" className='textBase font-semibold   '>NEWS</Link></li>
       <li><Link  to='/Events' className='textBase font-semibold '>Events</Link></li>
       <li><Link  to='/ContactUs' className='textBase font-semibold {path===to ? active : "" }'>ContactUs</Link></li>
       <button onClick={clickMenuSvg} className='md:hidden buttonMenu'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#1877F2' viewBox="0 0 448 512" className='w-6 cursor-pointer menuSvg' strokeWidth={0.5}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
       </button>
    </ul>
    </nav>
   </header>
   </div>


   <div className="lo:mt-28 lg:mt-0">
                <div className="lo:pt-16 xl:pt-20 mt-10 mb-5">
                    <h3 className="text-primaryColor text-center font-semibold lo:text-2xl md:text-5xl lo:mb-5 md:mb-6 lg:text-6xl ">
                        Contact our support teams
                    </h3>
                    <h4 className="text-[#374151] text-center font-semibold lo:text-base lo:px-6 md:text-xl xl:text-2xl">
                        Questions,bug reports,feedback - we're here for it all
                    </h4>
                </div>

                <div className="mt-16">
                <h2 className="text-[#374151] font-medium text-center ">
                    Our support team is here to listen to our member's opinions
                    and ideas
                </h2>
                <form action="">
                    <div className=" py-8 lo:flex lo:flex-col lo:px-4 md:px-20 lg:px-36 xl:px-60">
                        <h3 className="text-left font-medium mb-1">Title*</h3>
                        <input
                            type="text"
                            className=" text-black border-2 border-[#dddddd] px-2 py-3 mb-5 focus:outline-none"
                            placeholder="write your theme"
                        />
                        <h3 className="text-left font-medium mb-1">Message*</h3>
                        <textarea
                            className=" text-black border-2 border-[#dddddd] px-3 py-3 resize-none lo:h-32 mb-5 focus:outline-none"
                            placeholder="write your message"
                        />
                        <button
                            type="submit"
                            className="text-white bg-[#025EBF] py-2 rounded-md cursor-pointer font-semibold focus:outline-none"
                        >SEND</button>
                    </div>
                </form>
            </div>
                {/* <ContactNewUser /> */}
            </div>




































{/* ------------------------------------------- Events page ---------------------------------------------- */}

<div className="footerApp py-8 px-4 ">

<div className="socialMedia mb-7 flex justify-center items-center gap-4">
<a href="https://www.facebook.com/cyworkclub?locale=ar_AR"><svg xmlns="http://www.w3.org/2000/svg" height="23" width="23" className="footerSvg" fill="#ffffff" viewBox="0 0 512 512" ><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg></a>
<a href="https://twitter.com/NoodSaf"><svg xmlns="http://www.w3.org/2000/svg" height="23" width="23" className="footerSvg" fill="#ffffff" viewBox="0 0 512 512" ><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
<a href="https://www.linkedin.com/company/cywork/about/"><svg xmlns="http://www.w3.org/2000/svg" height="23" width="21" className="footerSvg" fill="#ffffff" viewBox="0 0 448 512" ><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
<a href=""><svg xmlns="http://www.w3.org/2000/svg" height="23" width="21" className="footerSvg" fill="#ffffff" viewBox="0 0 448 512" ><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a>
</div>
<div className="rightResiver flex justify-center items-center gap-8">
<p>&copy; All rights reserved by <span className="AbdElDjalil">Under_score</span></p>
</div>

</div>


























    {isOpen ?
  <div className='  w-[91%] top-0 left-0 fixed  menuHidden'>
<div className=' bg-white h-[100vh]'>
<nav className='z-50'>
<div className='flex justify-end items-center px-5 py-7 bg-[#1877F2] '>
<button onClick={clickMenuSvg} className='md:hidden '>
   <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 384 512" className='w-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
</button>
</div>
<ul className='flex flex-col gap-5 py-7 px-4'>
<li className='block '><Link to="/" className='textLinkTwo text-[#666666] font-semibold   flex justify-between items-center'>Home<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></Link></li>
<li className='block'><Link  to="/News" className='textBaseTwo text-[#666666] font-semibold  flex justify-between items-center'>NEWS<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg></Link></li>
<li className='block'><Link  to='/Events' className='textBaseTwo text-[#666666] font-semibold  flex justify-between items-center'>Events<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" ><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg></Link></li>
<li className='block'><Link  to='/ContactUs' className='textBaseTwo  font-semibold {path===to ? Bactive : "" }  flex justify-between items-center'>ContactUs<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#1877F2' width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg></Link></li>
</ul>
</nav>
</div>
</div>
:
<div className='  w-[91%] top-0 left-0 fixed  menuBlock'>
<div className=' bg-white h-[100vh]'>
<nav>
<div className='flex justify-end items-center px-5 py-7 bg-[#1877F2]'>
<button onClick={clickMenuSvg} className='md:hidden '>
   <svg xmlns="http://www.w3.org/2000/svg" fill='#cdf381' viewBox="0 0 384 512" className='w-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
</button>
</div>
<ul className='flex flex-col gap-5 py-7 px-4'>
<li className='block '><Link to="/" className='textLinkTwo text-[#666666] font-semibold  flex justify-between items-center'>Home<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></Link></li>
<li className='block'><Link  to="/News" className='textBaseTwo text-[#666666] font-semibold  flex justify-between items-center'>NEWS<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg></Link></li>
<li className='block'><Link  to='/Events' className='textBaseTwo text-[#666666] font-semibold  flex justify-between items-center'>Events<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" ><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg></Link></li>
<li className='block'><Link  to='/ContactUs' className='textBaseTwo  font-semibold {path===to ? Bactive : "" } flex justify-between items-center'>ContactUs<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#1877F2'><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg></Link></li>
</ul>
</nav>
</div>
</div>
}





    </>
  )
}

export default ContactUs
