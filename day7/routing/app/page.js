"use client";

import { useRouter } from 'next/navigation'

function Login() {
  const router = useRouter();
  let email = ""
  let password = ""
  let confrimPassword = ""
  return (
    <div style={{
      backgroundColor: "#f8f8ff"
    }} >
      <p style={{
        fontSize: "40px", backgroundColor: "black", fontWeight: "bolder", display: "flex", justifyContent: "center", padding: "15px", marginTop: ""
      }}> Login Your Data Here </p>
      <center>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
        }}>
          <input placeholder="Email/Username" style={{
            width: "300px", color: "black", height: " 50px", backgroundColor: "white", marginTop: "30px", padding: "15px", marginBottom: "30px", borderRadius: "20px", borderColor: "#E6E6FA", borderWidth: "2px"
          }} onChange={(event) => {
            const emailValue = event.target.value;
            console.log(emailValue);
            email = emailValue;
          }}
          />
          <input placeholder="Password" style={{
            width: "300px", color: "black", height: " 50px", backgroundColor: "white", marginTop: "30px", marginBottom: "30px", padding: "15px", borderRadius: "20px", borderColor: "#E6E6FA", borderWidth: "2px"
          }} onChange={(event) => {
            const passwordValue = event.target.value;
            console.log(passwordValue);
            password = passwordValue;
          }}
          />
          <input placeholder="Confirm Password" style={{
            width: "300px", color: "black", height: " 50px", backgroundColor: "white", marginTop: "30px", marginBottom: "30px", padding: "15px", borderRadius: "20px", borderColor: "#E6E6FA", borderWidth: "2px"
          }} onChange={(event) => {
            const confirmPasswordValue = event.target.value;
            console.log(confirmPasswordValue);
            confrimPassword = confirmPasswordValue;
          }}
          />

        </div>

        <button style={{
          backgroundColor: "#FF6347", padding: "10px", width: "200px", height: "50px ", color: "white ", borderRadius: "20px", margin: "40px", fontWeight: "bold"
        }} onClick={(event) => {
          console.log(email);
          console.log(password);
          if (email.includes("@") && (password === confrimPassword))
            router.push(`/profile?emailKey=${email}&passwordKey=${password}`);
        }}>
          Sign Up
        </button>
      </center>


    </div>

  )
}
export default Login;