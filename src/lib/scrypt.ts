import {scryptAsync} from "@noble/hashes/scrypt"

export interface Params {
    password: string;
    salt: string;
}

export function scrypt(params: Params): Promise<Uint8Array> {
    return scryptAsync(params.password, params.salt, {
        N: 2 ** 16,
        r: 8,
        p: 1,
        dkLen: 64,
    })
}
