function collect_same_elements(collection_a, object_b) {
    var collect_same = [];

    collection_a.forEach(function (collection) {
        var existValue = isExistValue(collection.key, object_b);

        if (existValue) {
            collect_same.push(collection.key);
        }
    });

    return collect_same;
}

function isExistValue(collection, object_b) {
    var flag = false;

    object_b.value.forEach(function (object) {
        if (collection === object) {
            flag = true;
        }
    });

    return flag;
}

module.exports = collect_same_elements;
