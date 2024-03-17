import React, { createContext, useEffect, useState } from "react"
import products from "../assets/data/products.json"
import { Product } from "../interfaces/product.interface"

interface ContextProps {
    productsFiltered: Product[]
    categorySelected: string | null
    onChangeCategorySelected: (category: string | null) => void
}

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const CategoriesContext = createContext({} as ContextProps)

export const CategoriesContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [productsFiltered, setProductsFiltered] = useState<Product[]>(products)
    const [categorySelected, setCategorySelected] = useState<string | null>("todo")

    useEffect(() => {
        if (categorySelected?.toLocaleLowerCase() !== "todo") {
            setProductsFiltered(products.filter(p => p.category.toLowerCase() === categorySelected?.toLowerCase()))
        } else {
            setProductsFiltered(products)
        }
    }, [categorySelected])

    const onChangeCategorySelected = (category: string | null) => {
        setCategorySelected(category)
    }

    const values = {
        categorySelected,
        onChangeCategorySelected,
        productsFiltered
    }

    return (
        <CategoriesContext.Provider value={values}>
            {children}
        </CategoriesContext.Provider>
    )
}

