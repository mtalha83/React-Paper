import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

export interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
}


const Home = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  return (
    <div className="p-6 text-center">

      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Featured Products
      </h1>


      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
