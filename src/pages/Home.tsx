import { useContext, useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { CategoriesContext } from "../context/categories.context";
import { Product } from "../interfaces/product.interface";

export const Home: React.FC = () => {
    const { productsFiltered, categorySelected } = useContext(CategoriesContext)
    const [resultsOfSearch, setResultsOfSearch] = useState<Product[]>([])
    const [searcher, setSearcher] = useState<string>("")

    useEffect(() => {
        if (searcher.length === 0) {
            setResultsOfSearch(productsFiltered)
        }
    }, [searcher])

    useEffect(() => {
        setResultsOfSearch(productsFiltered)
    }, [productsFiltered])

    const search = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setResultsOfSearch(productsFiltered.filter(p => p.name.toLowerCase().includes(searcher.toLowerCase())))
    }

    return (
        <div>
            <div className='max-w-400px mt-5 mx-auto flex items-center justify-center'>
                <form onSubmit={search} className="w-full flex items-center" style={{ width: "80%" }}>
                    <input
                        type="text"
                        placeholder="¿Qué estás buscando? :)"
                        id="name"
                        name="name"
                        value={searcher}
                        className="w-3/4 px-4 mr-1 py-2 border border-gray-300 rounded-l-lg outline-none"
                        onChange={(e) => setSearcher(e.target.value)}
                    />
                    <button type="submit" className="w-1/4 px-4 py-2 rounded-r-lg bg-black text-white">
                        <SearchIcon />
                    </button>
                </form>
            </div>
            <h1 className='max-w-400px my-6 mx-auto flex items-center justify-center text-gray-600 body-font'>Resultados en categoría {categorySelected}</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pb-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            resultsOfSearch.map((p, index) => {
                                return (
                                    <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <a className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.category}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{p.name}</h2>
                                            <p className="mt-1">${p.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}