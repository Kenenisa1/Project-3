import React from "react"
const Products =[
  { name: 'Car', year: 2024},
  { name:  'Bus', year: 2024},
  { name: 'Sheep', year: 2024},
  { name: 'Airplane', year: 2024},
  { name: 'Train', year: 2024}
]

function App() {
  const ProductList=Products.map(product=> 
    <li>{product.name}</li>
  );

  return (
    <>
      <h1>List of Our Products</h1>
      <hr />
      <ul>{ProductList} </ul>
    </>
  )
}

export default App
