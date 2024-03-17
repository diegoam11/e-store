import React from 'react';

export const Searcher: React.FC = () => {
    return (
        <div className='max-w-400px mt-5 mx-auto flex items-center justify-center'>
            <div className="w-full flex items-center" style={{ width: "80%" }}>
                <input
                    type="text"
                    placeholder="Cuéntanos, ¿Qué estás buscando? :)"
                    id="name"
                    name="name"
                    className="w-4/5 px-4 mr-1 py-2 border border-gray-300 rounded-l-lg outline-none"
                />
                <button className="w-1/5 px-4 py-2 rounded-r-lg bg-black text-white">
                    Buscar
                </button>
            </div>
        </div>
    );
}
