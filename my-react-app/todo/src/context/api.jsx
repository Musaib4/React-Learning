import { useState, useEffect } from "react";

function ApiFetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      {data.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>
          <img src={product.image} alt={product.title} width="100" />
        </div>
      ))}
    </>
  );
}

export default ApiFetch;
