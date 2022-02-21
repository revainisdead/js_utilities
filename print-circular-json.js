// Credit: https://stackoverflow.com/questions/11616630/how-can-i-print-a-circular-structure-in-a-json-like-format
// Demo: Circular reference
// ---

// Option 1
var circ = {};
circ.circ = circ;

// Note: cache should not be re-used by repeated calls to JSON.stringify.
var cache = [];
JSON.stringify(circ, (key, value) => {
  if (typeof value === 'object' && value !== null) {
    // Duplicate reference found, discard key
    if (cache.includes(value)) return;

    // Store value in our collection
    cache.push(value);
  }
  return value;
});
cache = null; // Enable garbage collection

// ---

// Option 2
JSON.safeStringify = (obj, indent = 2) => {
  let cache = [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};

// Example:
console.log('options', JSON.safeStringify(options))

// ---
// Credit: https://stackoverflow.com/questions/10392293/stringify-convert-to-json-a-javascript-object-with-circular-reference/12659424#12659424

// Option 3: Same as option 1
JSON.stringify( that.person, function( key, value) {
  if( key == 'parent') { return value.id;}
  else {return value;}
})
