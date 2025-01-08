import { useState, useRef, useEffect } from "react"
import DynamicRefSelection from "./dynamicRefSelection"
import StaticRefSelection from "./staticRefSelection"

export default function Container() {


  return (
    <>
      <DynamicRefSelection></DynamicRefSelection>
      {/* <StaticRefSelection></StaticRefSelection> */}
    </>
  )
}
