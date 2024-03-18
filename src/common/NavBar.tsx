import React, { useContext, useState } from 'react';
import diamondIcon from "../assets/icons/diamond.svg";
import { CategoriesContext } from '../context/categories.context';

enum Category {
    LICORES = "Licores",
    SNACKS = "Snacks",
    TODO = "Todo"
}

export const NavBar: React.FC = () => {
    const { onChangeCategorySelected } = useContext(CategoriesContext)
    const [selectedButton, setSelectedButton] = useState<string | null>(Category.TODO);

    const handleButtonClick = (buttonName: string) => {
        setSelectedButton(buttonName)
        onChangeCategorySelected(buttonName)
    };

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={diamondIcon} className="w-8 h-8" />
                    <span className="text-xl">Diamond</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <button
                        className={`mr-5 hover:text-gray-900 ${selectedButton === Category.SNACKS ? 'border-b-2 border-indigo-600' : ''}`}
                        onClick={() => handleButtonClick(Category.SNACKS)}
                    >
                        {Category.SNACKS}
                    </button>
                    <button
                        className={`mr-5 hover:text-gray-900 ${selectedButton === Category.LICORES ? 'border-b-2 border-indigo-600' : ''}`}
                        onClick={() => handleButtonClick(Category.LICORES)}
                    >
                        {Category.LICORES}
                    </button>
                    <button
                        className={`mr-5 hover:text-gray-900 ${selectedButton === Category.TODO ? 'border-b-2 border-indigo-600' : ''}`}
                        onClick={() => handleButtonClick(Category.TODO)}
                    >
                        {Category.TODO}
                    </button>
                </nav>
                <button className="inline-flex items-center bg-indigo-600 border-0 py-1 px-4 focus:outline-none  text-white rounded text-base mt-4 md:mt-0">Inicia sesión
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}