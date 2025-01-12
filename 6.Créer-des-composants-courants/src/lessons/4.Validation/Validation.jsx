
import { useState } from "react"
import Pseudo from "./Pseudo"
import Password from "./Password"
import Confirmation from "./Confirmation"

export default function Validation() {
    const [inputstates, setInputStates] = useState({
        pseudo: "",
        password: "",
        passwordConfirmation: ""
    })
    const [showvalidation, setShowValidation] = useState({
        pseudo: false,
        password: false,
        passwordConfirmation: false
    })

    function handleSubmit(e) {
        e.preventDefault()
        if(validationCheck()) {
            console.log('Register now....')
        }
    }
    function validationCheck() {
        const areValid = {
            pseudo: false,
            password: false,
            passwordConfirmation: false    
        }
        // Check pseudo
        if(inputstates.pseudo.length < 3 || inputstates.pseudo.length > 16) {
            setShowValidation(state => ({...state, pseudo: true}))
        }
        else {
            areValid.pseudo = true
            setShowValidation(state => ({...state, pseudo: false}))
        }
        // Check password rule
        if(inputstates.password.length < 6 || !/\d/.test(inputstates.password)) {
            setShowValidation(state => ({...state, password: true}))
        }
        else {
            areValid.password = true
            setShowValidation(state => ({...state, password: false}))
        }
        // Check confirmation rule
        if(inputstates.passwordConfirmation !== inputstates.password) {
            setShowValidation(state => ({...state, passwordConfirmation: true}))
        }
        else {
            areValid.passwordConfirmation = true
            setShowValidation(state => ({...state, passwordConfirmation: false}))
        }
        console.log(Object.values(areValid).every(value => value))
        if(Object.values(areValid).every(value => value)) {
            return true
        }
        else {
            return false
        }
        
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto border p-10 rounded">
            <p className="text-slate-100 text-xl mb-6">Créer votre compte</p>
            <Pseudo
                inputstates={inputstates}
                setInputStates={setInputStates}
                showvalidation={showvalidation}
            />
            <Password
                inputstates={inputstates}
                setInputStates={setInputStates}
                showvalidation={showvalidation}>
            </Password>
            <Confirmation
                inputstates={inputstates}
                setInputStates={setInputStates}
                showvalidation={showvalidation}>
            </Confirmation>
            <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">Valider</button>
        </form>
    )
}
