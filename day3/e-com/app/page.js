"use client"
import { useState } from "react"
import ProductCard from "./components/ProductCard"

export default function Home() {
  let product = [
    {
      id: 1,
      name: "Peanut Butter",
      price: 200,
      desc: "Delicious Peanut Butter",
      img: "https://images.getrecipekit.com/20230102102018-peanut_butter_01_520x500.webp?aspect_ratio=1:1&quality=90&"
    },
    {
      id: 2,
      name: "Almond Butter",
      price: 300,
      desc: "Delicious Almond Butter",
      img: "https://m.media-amazon.com/images/I/71-ZJwMr2cL._UF350,350_QL80_.jpg"
    },
    {
      id: 3,
      name: "Amul Butter",
      price: 400,
      desc: "Smooth and Creamy Butter",
      img: "https://kitchenaid.co.nz/cdn/shop/articles/Blog_Images.png?v=1739938525"
    },
    {
      id: 4,
      name: "Cocoa Powder",
      price: 500,
      desc: "Rich and Flavorful Cocoa Powder",
      img: "https://m.media-amazon.com/images/I/61lVKaQ1RiL._UF1000,1000_QL80_.jpg"
    }
  ];

  let [cart, setCart] = useState([])
  return (
    <div style={{
      width: "90%",
      margin: "0 auto",
    }}>
      <h1 style={{
        fontSize: "48px",
        textAlign: "center",
        fontWeight: "bolder"
      }}>
        Shop Now
      </h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>
        <div style={{
          width: "60%",
          marginRight: "20px"
        }}>
          <h2 style={{
            fontSize: "30px"
          }}>Products</h2>
          <div>
            {
              product.map((prod) => {
                return (
                  <ProductCard key={prod.id} buttonValue="Add to Cart" product={prod} onBorrowClick={() => {
                    setCart([...cart, prod])
                  }} />
                )
              })
            }
          </div>
        </div>

        <div style={{
          width: "40%"
        }}>
          <h2 style={{
            fontSize: "30px"
          }}>Cart</h2>
          <div>
            {
              cart.map((prod) => {
                return (
                  <ProductCard buttonValue="Remove" key={prod.id} product={prod} onBorrowClick={() => {
                    setCart(cart.filter((item) => item.id !== prod.id))
                  }} />
                )
              })
            }
          </div>

        </div>

      </div>
    </div>
  )
}