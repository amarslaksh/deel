export const debounce = (fn: (...args: any[]) => void, delay: number) => {
    let timoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if(timoutId) clearTimeout(timoutId);
        timoutId = setTimeout(() => fn(...args), delay)
    }
}