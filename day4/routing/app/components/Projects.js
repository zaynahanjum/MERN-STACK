export default function Projects() {
    return(
        <div>
            <h1 style={{
                fontSize: "30px",
                marginLeft: "20px"
            }}>
                Projects:
            </h1>
            <ol style={{
                listStyleType: "decimal",
                margin: "0 40px"
            }}>
                <li>
                    <strong>Shopping Cart App</strong>
                    <p>A React.js project where users can browse products, add them to cart, and manage checkout.</p>
                    <p><b>Tech Stack:</b> React.js, CSS, LocalStorage</p>
                </li>
                <li>
                    <strong>Library Management System</strong>
                    <p>Full-stack MERN project to manage books, users, and borrow/return records.</p>
                    <p><b>Tech Stack:</b> MongoDB, Express.js, React.js, Node.js</p>
                </li>
                <li>
                    <strong>Portfolio Website</strong>
                    <p>A personal portfolio site showcasing projects, skills, and contact information.</p>
                    <p><b>Tech Stack:</b> HTML, CSS, JavaScript</p>
                </li>
            </ol>
        </div>
    )
}