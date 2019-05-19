

export function removeEmptyProperties(obj: Object, parent?: Object, key?: string): Object {
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') {
            removeEmptyProperties(obj[key], obj, key);
        } else if (obj[key] === '' || obj[key] === undefined) {
            delete obj[key];
        }
    });
    if (isEmpty(obj)) {
        // Delete empty object
        delete parent[key];
    } else {
        return obj;
    }
}

function isEmpty(obj: Object): boolean {
    for (let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
