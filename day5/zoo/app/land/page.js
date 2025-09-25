import Section from "../components/Section"
export default function Land() {
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
    return (
        <div>
            <h1 style={{
                fontSize: "48px",
                textAlign: "center",
                fontWeight: "bolder",
                marginBottom: "20px"
            }}>Land Animals</h1>
            <Section animals={landAnimals} />
        </div>
    )
}