import React from "react";
import useFetch from "../CustomHooks/useFetch";
const Table = () => {
  const { data, message } = useFetch("https://fakestoreapi.com/products");
  console.log(data);
  return (
    <div className="main-div">
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.rating.count}</td>
                <td>{item.price}</td>
                <td>{item.price * item.rating.count}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
