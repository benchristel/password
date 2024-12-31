interface HasLength {
    length: number;
}

export function isValidIndex(i: number, array: HasLength): boolean {
    return i >= 0 && i < array.length && i === Math.floor(i)
}
