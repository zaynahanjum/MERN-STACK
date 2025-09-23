import Skills from "../components/Skills";
import Education from "../components/Education";
import Projects from "../components/Projects";

export default function Resume() {
    return (
        <div style={{
            margin: "20px"
        }}>
            <h1 style={{
                fontSize: "40px",
                textAlign: "center",
                fontWeight: "bolder",
            }}>
                Resume Page
            </h1>
            <Skills />
            <Education />
            <Projects />
        </div>
    )
}