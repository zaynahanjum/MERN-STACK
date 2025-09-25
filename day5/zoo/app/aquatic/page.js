import Section from "../components/Section"
export default function Aquatic() {
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
    return (
        <div>
            <h1 style={{
                fontSize: "48px",
                textAlign: "center",
                fontWeight: "bolder",
                marginBottom: "20px"
            }}>Aquatic Animals</h1>
            <Section animals={aquaticAnimals} />
        </div>
    )
}