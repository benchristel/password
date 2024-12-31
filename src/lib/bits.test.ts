import {bytesToTribbles} from "./bits"

test("bytesToTribbles", {
    "converts empty to empty"() {
        const bytes = new Uint8Array([])
        expect([...bytesToTribbles(bytes)], equals, [])
    },

    "returns empty given only one byte"() {
        const bytes = new Uint8Array([0x01])
        expect([...bytesToTribbles(bytes)], equals, [])
    },

    "converts two bytes to one tribble, dropping a nibble"() {
        const bytes = new Uint8Array([0x01, 0x23])
        expect([...bytesToTribbles(bytes)], equals, [0x012])
    },

    "converts three bytes"() {
        const bytes = new Uint8Array([0x01, 0x23, 0x45])
        expect([...bytesToTribbles(bytes)], equals, [0x012, 0x345])
    },

    "ignores the last of four bytes"() {
        const bytes = new Uint8Array([0x01, 0x23, 0x45, 0x67])
        expect([...bytesToTribbles(bytes)], equals, [0x012, 0x345])
    },

    "converts five bytes, dropping one nibble"() {
        const bytes = new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89])
        expect([...bytesToTribbles(bytes)], equals, [0x012, 0x345, 0x678])
    },

    "converts six bytes, dropping one nibble"() {
        const bytes = new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89, 0xab])
        expect([...bytesToTribbles(bytes)], equals, [0x012, 0x345, 0x678, 0x9ab])
    },
})
