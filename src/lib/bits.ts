import {isValidIndex} from "./arrays"

const HIGH_NIBBLE_MASK = 0b11110000
const LOW_NIBBLE_MASK = 0b00001111

/**
 * A tribble is 3 nibbles.
 */
export function *bytesToTribbles(bytes: Uint8Array) {
    for (let i = 0; i < bytes.length - 1; i += 3) {
        yield(bytes[i] << 4) | ((bytes[i + 1] & HIGH_NIBBLE_MASK) >> 4)

        if (isValidIndex(i + 2, bytes)) {
            yield((bytes[i + 1] & LOW_NIBBLE_MASK) << 8) | bytes[i + 2]
        }
    }
}
