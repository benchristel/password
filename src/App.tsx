import {h} from "preact"
import {useState} from "preact/hooks"
import "./app.css"
import {scrypt} from "./lib/scrypt"
import {base64Encode} from "./lib/base64"

export function App() {
    const [userId, setUserId] = useState("")
    const [masterPassword, setMasterPassword] = useState("")
    const [message, setMessage] = useState("")

    function generatePassword() {
        scrypt({password: masterPassword, salt: userId})
            .then(base64Encode)
            .then((appPassword) => navigator.clipboard.writeText(appPassword))
            .then(() => setMessage("Your password has been copied to the clipboard!"))
            .catch(console.error)
    }

    return (
        <div>
            <label>
                Your phone number (digits only, no punctuation):
                <input type="text" value={userId} onInput={(e) => setUserId(e.currentTarget.value)} />
            </label>
            <label>
                Your master password:
                <input type="password" value={masterPassword} onInput={(e) => setMasterPassword(e.currentTarget.value)} />
            </label>
            <button onClick={generatePassword}>
                Get website password
            </button>
            <p>{message}&nbsp;</p>
        </div>
    )
}
