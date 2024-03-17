import { useState } from "react"
import products from "../assets/data/products.json"
import { Product } from "../interfaces/product.interface";
import SearchIcon from '@mui/icons-material/Search';

export const Home: React.FC = () => {
    const [productsFiltered, setProductsFiltered] = useState<Product[]>(products);
    const [searcher, setSearcher] = useState<string>("");

    const search = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searcher.length !== 0) {
            setProductsFiltered(products.filter(p => p.name.toLowerCase().includes(searcher.toLowerCase())))
        } else {
            setProductsFiltered(products)
        }
    }

    return (
        <div>
            <div className='max-w-400px mt-5 mx-auto flex items-center justify-center'>
                <form onSubmit={search} className="w-full flex items-center" style={{ width: "80%" }}>
                    <input
                        type="text"
                        placeholder="Cuéntanos, ¿Qué estás buscando? :)"
                        id="name"
                        name="name"
                        value={searcher}
                        className="w-3/4 px-4 mr-1 py-2 border border-gray-300 rounded-l-lg outline-none"
                        onChange={(e) => setSearcher(e.target.value)}
                    />
                    <button type="submit" className="w-1/4 px-4 py-2 rounded-r-lg bg-black text-white">
                        <SearchIcon></SearchIcon>
                    </button>
                </form>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            productsFiltered.map((p, index) => {
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