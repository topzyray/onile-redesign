"use client"

import { useState } from "react"

import Login from "../login/page"
import Registeration from "../register/page"


const Auth = () => {

  const [toggleAuth, setToggleAuth] = useState(true)
  
  const handleToggle = () => {
    setToggleAuth(() => !toggleAuth)
  }

    return <>
      <section className="pt-24 sm:pt-36  flex w-full min-h-screen flex-col items-center justify-between">
        <section className="w-full flex flex-col sm:flex-row justify-between">
          <h1 className="text-xl sm:text-3xl lg:text-5xl">Auth Page Under Development <br /> Please Check Back Later</h1>
        </section>
      </section>
    </>
  }
  
  export default Auth