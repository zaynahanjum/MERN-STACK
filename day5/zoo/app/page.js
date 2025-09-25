import Section from "./components/Section"

export default function Home() {

  const aquaticAnimals = [
    {
      "id": 1,
      "name": "Clownfish",
      "description": "A small, brightly colored orange and white fish that lives among sea anemones. Known for its symbiotic relationship with the anemone.",
      "imageUrl": "https://www.niabizoo.com/wp-content/uploads/2018/09/ClownFish.jpg"
    },
    {
      "id": 2,
      "name": "Dolphin",
      "description": "An intelligent marine mammal known for its playful behavior, echolocation abilities, and strong social bonds within pods.",
      "imageUrl": "https://news.harvard.edu/wp-content/uploads/2024/10/2500dolphin.jpg?resize=1680%2C945"
    },
    {
      "id": 3,
      "name": "Sea Turtle",
      "description": "A large marine reptile with a protective shell, found in warm and temperate seas. Many species are endangered due to habitat loss and pollution.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chelonia_mydas_is_going_for_the_air_edit.jpg/1200px-Chelonia_mydas_is_going_for_the_air_edit.jpg"
    }
  ]

  const landAnimals = [
    {
      "id": 1,
      "name": "Elephant",
      "description": "The largest land animal, known for its intelligence, strong social bonds, and iconic trunk used for eating, drinking, and communication.",
      "imageUrl": "https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png"
    },
    {
      "id": 2,
      "name": "Lion",
      "description": "A powerful predator often called the 'King of the Jungle'. Lions live in prides and are known for their majestic manes and roars.",
      "imageUrl": "https://static.vecteezy.com/system/resources/previews/026/525/162/non_2x/lion-animal-isolated-photo.jpg"
    },
    {
      "id": 3,
      "name": "Giraffe",
      "description": "The tallest land animal, recognized for its long neck and legs. Giraffes feed on leaves high up in trees, especially acacias.",
      "imageUrl": "https://cdn.britannica.com/05/148805-050-1628E169/Rothschild-giraffes-Murchison-Falls-National-Park-Uganda.jpg"
    }
  ]

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
    <div style={{
      margin: "20px"
    }}>
      <h1 style={{
        fontSize: "48px",
        textAlign: "center",
        fontWeight: "bolder",
        marginBottom: "20px"
      }}>
        Wild Haven Zoo
      </h1>
      <p style={{
        marginBottom: "20px",
      }}>
        Welcome to Wild Haven Zoo, where adventure and wildlife come together! Explore our diverse habitats, meet fascinating animals, and embark on unforgettable journeys. Whether you're a family, a school group, or a solo explorer, there's something for everyone at Wild Haven Zoo. Join us in celebrating the wonders of the animal kingdom and creating lasting memories!
      </p>
      <Section sectionName="Aquatic Animals" animals={aquaticAnimals} />
      <Section sectionName="Land Animals" animals={landAnimals} />
      <Section sectionName="Reptiles" animals={reptiles} />
    </div>
  )
}