import React from "react"
const Products =[
  { name: 'Car', year: 2024},
  { name:  'Bus', year: 2024},
  { name: 'Sheep', year: 2024},
  { name: 'Airplane', year: 2024},
  { name: 'Train', year: 2024}
]
const images={
URLs: './assets/coder.jpg',
name: 'Coding Man'
}

function App() {
  const ProductList=Products.map(product=> 
    <li>{product.name} Product year {product.year}</li>
  );

  return (
    <>
      <h1>List of Our Products</h1>
      <hr />
      <ul>{ProductList} </ul>
      <div>
        <h3>Coding Man</h3>
      <img src={images.URLs} alt={images.name} />
      </div>
    </>
  )
}

export default App
