import React, { useEffect, useContext } from "react";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard";
import Loading from "../Loading";
import AppContext from "../../context/AppContext";

export default function Products() {
  //  const [products, setProducts] = useState([]);
  //  const [loading, setLoading] = useState(true);

  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("carro").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
