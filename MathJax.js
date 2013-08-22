(function (BASENAME) {
  var BASE = window[BASENAME];
  if (!BASE) {
    BASE = window[BASENAME] = {}
  }

  var PROTO = [];  // a static object used to indicate when a prototype is being created
  var OBJECT = function (def) {
    var obj = def.constructor; 
    
    if (!obj) {obj = new Function("")}
    
    for (var id in def) {
      if (id !== 'constructor' && def.hasOwnProperty(id)) {
        obj[id] = def[id]
      }
    }
    
    return obj;
  };

})("MathJax");
