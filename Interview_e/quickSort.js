let arr = [23, 14, 67, 9, 234, 44, 5];

let quickSort = function (arr) {
    if (arr.length <= 1) { return arr };
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr[pivotIndex];
    // var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if(i===pivotIndex)continue;
        if (arr[i] < pivot) { left.push(arr[i]) }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}

console.log(quickSort(arr));