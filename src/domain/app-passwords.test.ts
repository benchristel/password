import {matches} from "../lib/regexen"
import {makeAppPassword} from "./app-passwords"

const bytes = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])

test("makeAppPassword", {
    "returns a password containing an uppercase letter"() {
        expect(makeAppPassword(bytes), matches, /[A-Z]/)
    },

    "returns a password containing a lowercase letter"() {
        expect(makeAppPassword(bytes), matches, /[a-z]/)
    },

    "returns a password containing a digit"() {
        expect(makeAppPassword(bytes), matches, /\d/)
    },

    "returns a password containing one of the symbols required by Venmo"() {
        expect(makeAppPassword(bytes), matches, /[!@$#%]/)
    },

    "returns a password that is 20 characters long"() {
        // Venmo limits passwords to 20 characters
        expect(makeAppPassword(bytes).length, is, 20)
    },
})
