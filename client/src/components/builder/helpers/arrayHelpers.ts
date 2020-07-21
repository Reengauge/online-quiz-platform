export function set(array: any[], index: number, element: number) {
    return [...array.slice(0, index), element, ...array.slice(index + 1)];
}

export function remove(array: any[], index: number) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function insert(array: any[], index: number, element: number) {
    return [...array.slice(0, index), element, ...array.slice(index)];
}

export function move(array: any[], fromIndex: number, toIndex: number) {
    return insert(remove(array, fromIndex), toIndex, array[fromIndex])
}
