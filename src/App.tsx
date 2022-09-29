import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './views/About';
import Home from './views/Home';
import NotFound from './views/NotFound';

export default function App() {
    //const [count, setCount] = useState(0);
    /* <div className="App mx-auto">
                <header className="bg-white shadow" v-if="$route.meta.title">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight text-blue-600">$route.meta.title</h1>
                    </div>
                </header>
                <main className="w-full">
                    <div className="mx-auto">
                        <a href="https://vitejs.dev" target="_blank">
                            <img src="/vite.svg" className="logo" alt="Vite logo" />
                        </a>
                        <a href="https://reactjs.org" target="_blank">
                            <img src="/react.svg" className="logo react" alt="React logo" />
                        </a>
                    </div>
                    <h1>Vite + React</h1>
                    <div className="card">
                        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
                        <p>
                            Edit <code>src/App.tsx</code> and save to test HMR!!
                        </p>
                    </div>
                    <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
                </main>
            </div> */

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
