"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(collection1, collection2, collection3) {
    const merged = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < collection1.length &&
        j < collection2.length &&
        k < collection3.length) {
        const min = Math.min(collection1[i], collection2[j], collection3[k]);
        merged.push(min);
        if (min === collection1[i]) {
            i++;
        }
        else if (min === collection2[j]) {
            j++;
        }
        else {
            k++;
        }
    }
    // Handle remaining elements in collections
    while (i < collection1.length) {
        merged.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        merged.push(collection2[j]);
        j++;
    }
    while (k < collection3.length) {
        merged.push(collection3[k]);
        k++;
    }
    return merged;
}
exports.merge = merge;
