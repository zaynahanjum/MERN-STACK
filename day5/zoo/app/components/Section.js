export default function Section({ sectionName, animals }) {
    return (
        <div>
            <h1>{sectionName}</h1>
            <div style={{
                display: "flex",
                flexxDirection: "row",
                // alignItems:
                justifyContent: "space-around"
            }}>
                {
                    animals.map((animal) => {
                        return (
                            <div key={animal.id} style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "300px",
                                height: "250px"
                            }}>
                                <img style={{
                                    width: "300px",
                                    height: "200px"
                                }} src={animal.imageUrl}></img>
                                <p>{animal.name}</p>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}