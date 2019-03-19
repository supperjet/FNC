export function extend(to, from) {
    for(key in from) {
        to[key] = from[key]
    }
    return to
}