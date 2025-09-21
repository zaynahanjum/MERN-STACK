"use client";
import BookCard from "./components/BookCard"
import { useState } from 'react'
export default function Home() {
  //list = [1,2,3,4,5,6,7]
  //JSON (Javascript object notation)

  const [cart, setCart] = useState([]);

  const books = [
    {
      title: "Programming with Java",
      desc: "We have 200+ books related to Programming",
      img: "https://m.media-amazon.com/images/I/61FmuzUH8AL._UF1000,1000_QL80_.jpg"
    },
    {
      title: "Design and Analysis of Algorithms",
      desc: "How to work with c and DSA",
      img: "https://m.media-amazon.com/images/I/714+tgyHDRL._UF1000,1000_QL80_.jpg"
    },
  ];


  return <div>
    <center style={{ marginTop: "40px", fontWeight: "bold", fontSize: "40px" }}>
      Sahyadri Digital Library
    </center>

    <div>Cart items</div>
    <hr />
    {
      cart.map((element) => {
        return <BookCard
          key={element.desc}
          title={element.title}
          desc={element.desc}
          bookImg={element.img}
          onBorrowClick={(e) => {
            cart.push(element);
          }}
        />
      })
    }
    <div>Store items</div>
    <hr />
    {
      books.map((element) => {
        return <BookCard
          key={element.desc}
          title={element.title}
          desc={element.desc}
          bookImg={element.img}
          onBorrowClick={(e) => {
            //JAVASCRIPT SPREAD OPERATER
            setCart([...cart, element])
            console.log(`Cart Items : ${cart}`)
          }}
        />
      })
    }

    <div>Programming Books</div>
    <hr />
    {
      books.map((element) => {
        return <BookCard
          key={element.desc}
          title={element.title}
          desc={element.desc}
          bookImg={element.img}
          onBorrowClick={(e) => {
            //JAVASCRIPT SPREAD OPERATER
            setCart([...cart, element])
            console.log(`Cart Items : ${cart}`)
          }}
        />
      })
    }

    <div>Self Help Books</div>
    <hr />
    {
      books.map((element) => {
        return <BookCard
          key={element.desc}
          title={element.title}
          desc={element.desc}
          bookImg={element.img}
          onBorrowClick={(e) => {
            //JAVASCRIPT SPREAD OPERATER
            setCart([...cart, element])
            console.log(`Cart Items : ${cart}`)
          }}
        />
      })
    }

  </div>
}

// {}
// Properties passing or Prop Passing
function CategoryTitle({ title, desc }) {
  return (
    <div style={{ marginLeft: "20px", }}>
      <div style={{ fontFamily: "mono-space", fontSize: "20px" }}>
        {title}
      </div>
      <div style={{ fontSize: "10px" }}>
        {desc}
      </div>
      <hr />
    </div>
  )
}