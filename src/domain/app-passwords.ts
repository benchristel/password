import {bytesToTribbles} from "../lib/bits"
import {capitalizeAscii} from "../lib/strings"
import {trigrams} from "./trigrams"

export function makeAppPassword(bytes: Uint8Array): string {
    const tribbles = [...bytesToTribbles(bytes)]
    let ret = ""
    for (const tribble of tribbles.slice(0, 3)) {
        ret += trigrams[tribble]
    }
    ret += String(tribbles[7] % 10)
    ret += "!@$#%"[tribbles[8] % 5]
    for (const tribble of tribbles.slice(3, 6)) {
        ret += trigrams[tribble]
    }
    return capitalizeAscii(ret)
}
