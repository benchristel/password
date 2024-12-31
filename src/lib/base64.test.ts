import {base64Encode} from "./base64"

test("base64Encode", {
    "encodes no bytes as empty string"() {
        const bytes = new Uint8Array([])
        expect(base64Encode(bytes), equals, "")
    },

    "encodes zeroes as A"() {
        const bytes = new Uint8Array([0, 0, 0])
        expect(base64Encode(bytes), equals, "AAAA")
    },

    "encodes ones as /"() {
        const bytes = new Uint8Array([0xFF, 0xFF, 0xFF])
        expect(base64Encode(bytes), equals, "////")
    },
})
