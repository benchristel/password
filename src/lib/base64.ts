export function base64Encode(bytes: Uint8Array): string {
    return window.btoa(String.fromCodePoint(...bytes))
}
