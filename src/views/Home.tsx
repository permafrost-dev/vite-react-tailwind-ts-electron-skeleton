import ButtonRepo from '@/components/ButtonRepo';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    Ready to dive in?
                    <br />
                    <span className="text-indigo-600">Vite 3.x + React 18.x + Tailwind 3.x + Typescript 4.x</span>
                </h2>
                <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link
                            to="/about"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none">
                            Next Page
                        </Link>
                    </div>
                    <ButtonRepo />
                </div>
            </div>
        </div>
    );
}
