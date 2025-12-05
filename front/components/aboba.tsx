'use server'

import { useState } from "react"


export async function AbobaComponent() {
    const [aboba, setAboba] = useState()
    return (
        <div>
            aboba from server
        </div>
    )
}