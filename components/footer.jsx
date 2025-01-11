import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#1b1d22] text-white py-6">
                    <img src="/footer.jpeg" alt="Achilles Fitness Logo" className="w-full h-[20vh]" />  

            <div className="container mx-auto flex flex-col items-center">
               
                    <img src="/footer2.jpeg" alt="Achilles Fitness Logo" className="h-[30vh] w-1/3 m-auto" />  
                <div className="flex flex-col items-center mb-4">
                    <a href="tel:2812495156" className="flex items-center mb-2">
                        <span className="text-red-500 mr-2">📞</span>
                        <span>281-249-5156</span>
                    </a>
                    <a href="mailto:info@achillesfitness.fit" className="flex items-center">
                        <span className="text-red-500 mr-2">✉️</span>
                        <span>info@achillesfitness.fit</span>
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <span className="text-red-500">Facebook</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <span className="text-red-500">LinkedIn</span>
                    </a>
                </div>
                <p className="mt-4 text-sm">&copy; Copyright 2023 Achilles Fitness</p>
            </div>
        </footer>
    );
};

export default Footer;