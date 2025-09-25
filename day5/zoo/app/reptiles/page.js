import Section from "../components/Section"
export default function Land() {
  const reptiles = [
    {
      "id": 1,
      "name": "Komodo Dragon",
      "description": "The largest living lizard, found in Indonesia. Known for its powerful bite, venom, and hunting skills.",
      "imageUrl": "https://www.komodoluxury.com/wp-content/uploads/2024/10/Komodo-dragon-Komodo-Luxury-e1729054247920.webp"
    },
    {
      "id": 2,
      "name": "Cobra",
      "description": "A venomous snake recognized for its hood display when threatened. Cobras are found in Asia and Africa.",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5U6C2RXGQHyBJjOvA-cBXu6fLJYt2uvwjIA&s"
    },
    {
      "id": 3,
      "name": "Crocodile",
      "description": "A large, semi-aquatic reptile with powerful jaws and tough scales, inhabiting rivers, lakes, and wetlands.",
      "imageUrl": "https://www.rainforest.com.au/wp-content/uploads/2023/09/freshwater-crocodile-rainforestation-nature-park-kuranda.jpg"
    }
  ]
    return (
        <div>
            <h1 style={{
                fontSize: "48px",
                textAlign: "center",
                fontWeight: "bolder",
                marginBottom: "20px"
            }}>Reptiles</h1>
            <Section animals={reptiles} />
        </div>
    )
}