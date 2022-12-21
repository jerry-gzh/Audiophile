import { useState } from "react"

export function Login() {
  return (
    <form>
      <input type="email" name="email" id="email"></input>
      <input type="password" name="password" id="password"/>
    </form>
  )
}
