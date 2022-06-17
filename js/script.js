const textInput = document.querySelector('.text-input');
const mensagem = document.querySelector('.message');
const sumir = document.querySelector('.sumir');
const copiar = document.querySelector('#copiar');

function btnEncriptar() {
  const textoEncriptado = encriptar(textInput.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage = "none";
  textInput.value = "";
  sumir.style.display = "none";
  copiar.style.display = "block";
}

function encriptar(stringEncriptada) {
  let matrizCodigoCriptografado = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigoCriptografado.length; i++) {
    if (stringEncriptada.includes(matrizCodigoCriptografado[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigoCriptografado[i][0], matrizCodigoCriptografado[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDecriptar() {
  const textoDescriptado = decriptar(textInput.value);
  mensagem.value = textoDescriptado;
  mensagem.style.backgroundImage = "none";
  textInput.value = "";
  sumir.style.display = "none";
  copiar.style.display = "block";
}

function decriptar(stringDecriptada) {
  let matrizCodigoDescriptografado = [
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"]
  ];
  stringDecriptada = stringDecriptada.toLowerCase();

  for (let i = 0; i < matrizCodigoDescriptografado.length; i++) {
    if (stringDecriptada.includes(matrizCodigoDescriptografado[i][0])) {
      stringDecriptada = stringDecriptada.replaceAll(matrizCodigoDescriptografado[i][0], matrizCodigoDescriptografado[i][1]);
    }
  }
  return stringDecriptada;
}

function btnCopiar() {
  mensagem.select();
  document.execCommand("copy");
  sumir.style.display = "block";
  copiar.style.display = "none";
  mensagem.value = "";
  
}