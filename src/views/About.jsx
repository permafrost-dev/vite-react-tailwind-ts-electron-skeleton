import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    About Page
                    <br />
                    <span className="text-indigo-600">Vite 2.x + Vue 3.x + Tailwind 2.x</span>
                </h2>
                <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none">
                            Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
