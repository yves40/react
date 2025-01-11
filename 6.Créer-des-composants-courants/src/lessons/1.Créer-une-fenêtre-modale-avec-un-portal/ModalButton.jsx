
import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"

export default function ModalButton() {

    const [showModal, setShowModal] = useState(false)

  return (
    <>
        <button className="block mx-auto bg-slate-200 text-slate-900 p-2 rounded"
        onClick={()=> setShowModal(true)} >Open the modal</button>
        {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)}/>, document.body)}
    </>
    )
}
