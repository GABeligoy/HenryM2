var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){
    return resultSet.push(startEl)
  }
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if(selector[0]==="#")return "id"
  if(selector[0]===".")return "class"
  if(selector.includes("."))return "tag.class"//la forma correcta es con split
  return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction=(element)=>`#${element.id}`===selector
  } else if (selectorType === "class") {
    matchFunction=(element)=>{
      for(const clase of element.classList){
        if(`.${clase}`===selector){
          return true
        }
      }return false
      }
  } else if (selectorType === "tag.class") {
    matchFunction=(element)=>{
      const [tagName, className]=selector.split(".")
      return matchFunctionMaker(tagName)(element)&&matchFunctionMaker(`.${className}`)(element)}
  } else if (selectorType === "tag") {
    matchFunction=(element)=>element.tagName===selector.toUpperCase()
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
