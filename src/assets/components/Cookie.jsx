import { X } from 'lucide-react'
import React, { useState } from 'react'

function Cookie() {

    const [value, setValue] = useState(true);

    function cookie(val) {
        localStorage.setItem('cookieConsentGiven', true);
        setValue(false);
    }

    function remove(){
         setValue(false);
    }

    if (!value
    ) return null;

    return (


        <div className='cursor-pointer animate-swipe-up h-85 w-80 rounded-2xl bg-gray-950 shadow-xl text-white flex flex-col p-6 justify-between fixed bottom-5 right-10'>
            <div className='flex justify-between'>
                <img className='h-15 rotate-y-180' src='https://img.icons8.com/ios-filled/100/ffffff/cookie.png' ></img>
                <X size={28} strokeWidth={0.5} onClick={remove}/>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-2xl pb-6'>We use cookies to improve your user experience.</p>
                <button onClick={(e) => {
                    cookie(e);
                }} className='px-18 py-2 bg-white text-black rounded-xl text-xl font-semibold active:scale-95'>I like Cookies</button>
            </div>
        </div>



    )
}

export default Cookie