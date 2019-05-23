

export function removeEmptyProperties(obj: Object, parent?: Object, key?: string): Object {
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') {
            removeEmptyProperties(obj[key], obj, key);
        } else if (obj[key] === '' || obj[key] === undefined) {
            delete obj[key];
        }
    });
    if (isEmpty(obj)) {
        delete parent[key];
    } else {
        return obj;
    }
}

export function fillUndefinedProperties(obj: Object): Object {
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') {
            fillUndefinedProperties(obj[key]);
        } else if (obj[key] === null || obj[key] === undefined) {
            obj[key] = '';
        }
    });
    return obj;
}

function isEmpty(obj: Object): boolean {
    if (obj instanceof Date) {
        return false;
    } else {
        for (let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
    }
    return true;
}
