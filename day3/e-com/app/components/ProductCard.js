"use client";

export default function ProductCard({ product, buttonValue, onBorrowClick }) {
    // const isCartItem = cart.some((item) => item.id === product.id);

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid black",
            margin: "20px 0px"
        }}>
            <img style={{
                height: "250px",
                width: "200px",
            }} src={product.img}></img>

            <div style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "15px"
            }}>
                <p style={{
                    fontSize: "20px"
                }}>
                    {product.name}
                </p>
                <p>{product.desc}</p>
                <p>₹ {product.price}</p>
                <button
                    style={{
                        backgroundColor: buttonValue === "Add to Cart" ? "green" : "red",
                        color: "white",
                        padding: "5px 20px",
                        borderRadius: "1000px",
                        cursor: "pointer",
                        width: "200px"
                    }} onClick={() => {
                        onBorrowClick()
                    }}>
                    {buttonValue }
                </button>

            </div>
        </div>
    )
}