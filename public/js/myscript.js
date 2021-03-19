//Compare 2 array string or 2 array number together => basic array -> not object array or nested array
if(Array.prototype.basicequals)
console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.basicequals = function (array) {
// if the other array is a falsy value, return
if (!array)
    return false;

// compare lengths - can save a lot of time 
if (this.length != array.length)
    return false;

if(JSON.stringify(this.sort())!==JSON.stringify(array.sort())){
    return false;
}
    
return true;
}
Object.defineProperty(Array.prototype, "basicequals", {enumerable: false});