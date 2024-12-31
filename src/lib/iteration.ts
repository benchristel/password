export function *next<T>(n: number, iterator: IterableIterator<T>) {
    let i = 0
    for (const elem of iterator) {
        yield elem
        if (++i === n) {
            return
        }
    }
}
