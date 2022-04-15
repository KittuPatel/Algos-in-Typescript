var areSimilar = function (a, b) {
    var c = [];
    var d = [];
    if (a.toString() === b.toString()) {
        console.log("true line 4");
        return true;
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            c.push[a[i]];
            d.push[b[i]];
        }
    }
    d = d.reverse();
    if (c.length === 2 && (c.toString() === d.toString())) {
        console.log("true line 22");
        return true;
    }
    console.log("false line 25");
    return false;
};
// areSimilar([1, 2, 3], [1, 2, 3])
areSimilar([1, 2, 3], [2, 1, 3]);
// areSimilar([1, 2, 2], [2, 1, 1])
