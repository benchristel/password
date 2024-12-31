export function *countTo(top: number) {
    for (let i = 1; i <= top; i++) {
        yield i
    }
}
