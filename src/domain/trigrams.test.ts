import {matches} from "../lib/regexen"
import {trigrams} from "./trigrams"

test("trigrams", {
    "are 3 letters each"() {
        for (const trigram of trigrams) {
            expect(trigram, matches, /^[a-z]{3}$/)
        }
    },

    "are 4096 in number"() {
        expect(trigrams.length, is, 4096)
    },

    "are unique"() {
        expect(new Set(trigrams).size, is, 4096)
    },

    "start with aaf"() {
        expect(trigrams[0], is, "aaf")
    },

    "end with zzu"() {
        expect(trigrams[trigrams.length - 1], is, "zzu")
    },
})
