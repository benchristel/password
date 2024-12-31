import {h} from "preact"
import {useState} from "preact/hooks"
import "./app.css"
import {scrypt} from "./lib/scrypt"
import {makeAppPassword} from "./domain/app-passwords"
import {LabeledInput} from "./ui/labeled-input"

export function App() {
    const [userId, setUserId] = useState("")
    const [masterPassword, setMasterPassword] = useState("")
    const [domain, setDomain] = useState("")
    const [message, setMessage] = useState("")

    function generatePassword() {
        scrypt({
            password: masterPassword + normalize(domain) + normalize(userId),
            salt: userId,
        })
            .then(makeAppPassword)
            .then((appPassword) => navigator.clipboard.writeText(appPassword))
            .then(() => setMessage("Your password has been copied to the clipboard!"))
            .catch(console.error)
    }

    return (
        <div style={{padding: 6}}>
            <LabeledInput label="Your first name:" type="text" value={userId} onInput={setUserId} />
            <LabeledInput label="Website you're logging into (e.g. venmo.com)" type="text" value={domain} onInput={setDomain} />
            <LabeledInput label="Your master password:" type="password" value={masterPassword} onInput={setMasterPassword} />
            <button onClick={generatePassword}>
                Get website password
            </button>
            <p>{message}&nbsp;</p>
        </div>
    )
}

function normalize(s: string): string {
    return s.trim().toLowerCase()
}
