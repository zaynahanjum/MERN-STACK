"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


export default function Profile() {
    const router = useRouter();
    const parameters = useSearchParams();  //access data from url(query parameter)
    const email = parameters.get('emailKey');
    let name = ""
    let phone = ""
    let age = ""
    let location = ""
    return (
        <div>
            <input style={
                { border: "1px solid white" }
            } type='text' placeholder='Name'
                onChange={(e) => {
                    const nameValue = e.target.value
                    name = nameValue
                    console.log(name);
                }} ></input>
            <input style={
                { border: "1px solid white" }
            } type='number' placeholder='Phone'
                onChange={(e) => {
                    const phoneValue = e.target.value
                    phone = phoneValue
                    console.log(name);
                }} ></input>
            <input style={
                { border: "1px solid white" }
            } type='Email' value={email}></input>
            <input style={
                { border: "1px solid white" }
            } type='number' placeholder='Age'
                onChange={(e) => {
                    const ageValue = e.target.value
                    age = ageValue
                    console.log(name);
                }} ></input>
            <input style={
                { border: "1px solid white" }
            } type='text' placeholder='Location'
                onChange={(e) => {
                    const locationValue = e.target.value
                    location = locationValue
                    console.log(name);
                }} ></input>

            <button style={{
                backgroundColor: "#FF6347", padding: "10px", width: "200px", height: "50px ", color: "white ", borderRadius: "20px", margin: "40px", fontWeight: "bold"
            }} onClick={(event) => {

                router.push(`/validation?emailKey=${email}&nameKey=${name}&phoneKey=${phone}&ageKey=${age}&locationKey=${location}`);
            }}>
                Create Account
            </button>
        </div>
    )
}