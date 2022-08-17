import { createRef } from "react"

export function Signup({setUser}) {
const inpRef = createRef()
    return (
        <main className="container">
            <label htmlFor="username">username</label>
            <input ref={inpRef} type="text" name='username' />
            <button onClick={()=>setUser(inpRef.current.value)}>Signup</button>
            </main>
    )
}