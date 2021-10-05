var obj = {a: {b: { c: {}, d: {e: {}}, f: {g: { h: {}} } } } }

var obj = {a: {b: { c: {}, d: {e: {}}, f: {g: { h: {}} } } } }

function calc(obj, gen, cache) {
    for(var ke in obj) {
        let value = obj[ke];
        if(typeof value != null
        && typeof value == 'object'
        && Object.keys(value).length > 0) {
            calc(value, gen+ 1, cache);
        } else {
            checkLevel({gen, deepKey: ke}, cache);
        }
    }
}

function checkLevel(currentKeyAndGen, cache) {
    if(currentKeyAndGen.gen > cache.gen) {
        cache.gen = currentKeyAndGen.gen;
        cache.deepKey = currentKeyAndGen.deepKey;
    }
}

function getDeepestObj(obj) {
    let cache = { gen:0, deepKey: null};
    for(let ke in obj) {
        calc(obj[ke],1, cache);
    }
    return cache;
}
