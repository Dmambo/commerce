import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

const MiddleCard = () => {
    return (
        <div className="relative p-6 flex items-start justify-between flex-col shadow-lg text-black">
            {/* Firecracker effect */}
            <div className="firecrackers">
                {/* You can generate multiple firecracker elements here */}
                {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className="firecracker" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }} />
                ))}
            </div>
            
            {/* Card content */}
            <div className="relative z-10 border border-zinc-300 bg-white p-6 rounded-lg">
                <h1 className="text-lg font-semibold">SalesPerson of the day</h1>
                <Separator className="mt-2 mb-4" />
                <div className="flex justify-between gap-8">
                    {/* image */}
                    <div>
                        <Image src="/profile.jpg" alt="hero" width={60} height={30} className="rounded-full" />
                    </div>
                    {/* vertical line */}
                    <div className="bg-gray-200 h-24 w-1"></div>
                    <div>
                        {/* details */}
                        <p className="text-lg font-semibold mb-3">IBRAHIM DIABY</p>
                        <p className="text-sm">Agence Camayenne</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleCard;
