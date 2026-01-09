import { useContext } from "react";
import { ProductContext } from "../context/apiContext";

export function ApiFetch() {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>₹ {p.price}</p>
          <img src={p.image} width="100" />
        </div>
      ))}
    </>
  );
}
