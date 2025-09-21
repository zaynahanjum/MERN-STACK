export default function Home() {
  return <div>
    <h1 style={{ textAlign: "center", fontSize: "30px" }}>Resume</h1>
    <Introduction />
    <h1 style={{ fontSize: "20px", marginTop: "20px" }}>Tech Stack:</h1>
    <Skills />
    <Skills />
  </div>
}

function Introduction() {
  return <div>
    <h1>Zaynah Anjum</h1>
    <p>Age: 19 yrs</p>
    <p>Education: BE Computer Science(Sahyadri College of Engineering & Management)</p>
  </div>
}

function Skills() {
  return <li>
    <ul>C/C++</ul>
    <ul>HTML/CSS</ul>
    <ul>Javascript</ul>
    <ul>Node.js</ul>
    <ul>React.js</ul>
  </li>

}