const textoEncriptado =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~";

const sustitucionLetras = {
  "?": "A",
  "[": "E",
  "\\": "I",
  "~": "O",
  "+": "U",
  "¬": "ó",
  "(": " ",
  ")": " ",
  "^": "M",
  "`": "C",
  "*": "P",
  "/": "L",
  "]": "N",
  "-": "H",
  "#": "V",
  "$": "R",
  "%": "B",
  "{": "S",
  "}": "Q",
  "=": "T",
  "¿": "Y",
  "¡": "D",
  "!": "J",
  "_": "Z",
  ";": "F",
};

function desencriptador(text, map) {
  let desencriptar = "";
  for (let char of text) {
    desencriptar += map[char] || char;
  }
  return desencriptar;
}

const desencriptarTexto = desencriptador(textoEncriptado, sustitucionLetras);
console.log("Texto desencriptado:", desencriptarTexto);
