"use client"
import { useState } from "react";
export default function App() {

  const posts = [
    {
      id: 1,
      name: "kanzee._",
      img: "https://i.pinimg.com/736x/1a/0a/26/1a0a261aad43e4a526902ae25ed42851.jpg",
      desc: "The tiger is the largest member of the cat family, known for its powerful build, striking orange coat with black stripes, and solitary nature. Native to Asia, tigers are apex predators that rely on stealth and strength to hunt. They are territorial and often dwell in forests, grasslands, and mangroves. Despite their fearsome reputation, many tiger species are endangered due to habitat loss and poaching."
    },
    {
      id: 2,
      name: "alia_bhatt",
      img: "https://i.pinimg.com/736x/88/6d/88/886d8817fed17aaad20bbc91ed88d9c1.jpg",
      desc: "Foxes are small to medium-sized omnivorous mammals, known for their bushy tails, pointed ears, and cunning behavior. The red fox is the most widespread species, adaptable to various environments including forests, grasslands, and urban areas. Foxes are solitary hunters, feeding on rodents, birds, fruits, and insects. Their agility and intelligence have made them symbols of cleverness in many cultures."
    },
    {
      id: 3,
      name: "katrinakaif",
      img: "https://i.pinimg.com/1200x/49/83/09/49830937883c1e2d07eb6e1937df5377.jpg",
      desc: "Elephants are the largest land mammals, recognized for their massive bodies, long trunks, and large ears. Found in Africa and Asia, they are highly intelligent and social animals that live in matriarchal herds. Their trunks serve multiple purposes—from breathing and smelling to grasping objects and communicating. Elephants play a crucial role in their ecosystems, but face threats from habitat destruction and ivory poaching."
    }
  ];

  return (
    <Posts posts={posts} />
  )
}


function Posts({ posts }) {
  const [like, setLike] = useState([]);

  function toggleLike(postId) {
        console.log(like)

    like.includes(postId) 
    ? setLike(like.filter((id) => id != postId))
    : setLike([...like, postId])
  }

  return (<div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }}>
    {posts.map((posts) => {
      return (
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "15px",
          padding: "20px",
          gap: "15px",
          marginBottom: "20px"
        }} key={posts.id}>

          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px"
          }}>
            <img style={{
              width: "40px",
              height: "40px",
              borderRadius: "1000px",
            }} src={posts.img}></img>
            <h1>{posts.name}</h1>
          </div>
          <div>
            <img style={{
              width: "300px",
              height: "350px"
            }} src={posts.img}></img>

          </div>
          <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px"
          }}>
            <img style={{
              width: "30px",
              height: "30px"
            }} 
            src={like.includes(posts.id) ? "/red-heart.png" : "/black-heart.png"} 
            onClick = {() => toggleLike(posts.id)} 
            ></img>
            <img style={{
              width: "30px",
              height: "30px"
            }} src="/chat.png"></img>
            <img style={{
              width: "25px",
              height: "25px"
            }} src="/send.png"></img>
          </div>
        </div>);

    })}
  </div>
  );

}