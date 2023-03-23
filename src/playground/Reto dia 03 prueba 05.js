// console.log();
console.log(printTriangle(5, "*"));
console.log(printTriangle(6, "$"));

function printTriangle(size, character) {
    let tri = "";
    for (let r=1; r<=size; r++) {
        for (let e=1; e<=size-r;e++) 
            tri += " ";
        for (let c=1; c<=r; c++)
            tri += character;
        if (r<size)
            tri += "\n";
    }
    return tri;
}


