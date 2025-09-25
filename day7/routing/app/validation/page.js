"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function Profile() {
    const parameters = useSearchParams();  //access data from url(query parameter)
    const email = parameters.get('emailKey');
    let name = parameters.get('nameKey')
    let phone = parameters.get('phoneKey')
    let age = parameters.get('ageKey')
    let location = parameters.get('locationKey')
    return (
        <div>
            <div>{email}</div>
            <div>
                {name}
            </div>
            <div>{phone}</div>
            <div>
                {age}
            </div>
            <div>{location}
            </div>

        </div>

    )
}