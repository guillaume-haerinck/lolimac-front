export function removeEmptyProperty(obj: Object) {
    for (let propName in obj) { 
        if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
        }
    }
}