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
  
  var CONSTRUCTOR = function () {
    return new Function ("return arguments.callee.Init.call(this,arguments)");
  };
  
  BASE.Object = OBJECT({
    constructor: CONSTRUCTOR(),
    
    Subclass: function (def,classdef) {
      var obj = CONSTRUCTOR();
      obj.SUPER = this; obj.Init = this.Init;
      obj.Subclass = this.Subclass; obj.Augment = this.Augment;
      obj.protoFunction = this.protoFunction;
      obj.can = this.can; obj.has = this.has; obj.isa = this.isa;
      obj.prototype = new this(PROTO);
      obj.prototype.constructor = obj;  // the real constructor
      obj.Augment(def,classdef);
      return obj;
    },
  );

})("MathJax");
