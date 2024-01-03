"use client";
import React, { useEffect } from 'react';

const Advertisement = ({ adClient, adSlot }) => {
    // useEffect(() => {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({});
    // }, []);

    return (
        <div className="">
                {/* <ins
                    className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client={adClient}
                    data-ad-slot={adSlot}
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                /> */}
       
            <img src="https://www.gourmetads.com/wp-content/uploads/2019/05/fast-food-ads-burger-king-300x600.jpg.webp" alt="Ad" />
        </div>

    );
};

export default Advertisement;