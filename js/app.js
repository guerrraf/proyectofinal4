var operandoa;
var operandob;
var operacion;

function init() {
  //Variables
  var display  = document.getElementById("display")
  var on = document.getElementById("on")
  var sign = document.getElementById("sign")
  var raiz = document.getElementById("raiz")
  var dividido = document.getElementById("dividido")
  var siete = document.getElementById("7")
  var ocho = document.getElementById("8")
  var nueve = document.getElementById("9")
  var por = document.getElementById("por")
  var cuatro = document.getElementById("4")
  var cinco = document.getElementById("5")
  var seis = document.getElementById("6")
  var menos = document.getElementById("menos")
  var uno = document.getElementById("1")
  var dos = document.getElementById("2")
  var tres = document.getElementById("3")
  var mas = document.getElementById("mas")
  var cero = document.getElementById("0")
  var punto = document.getElementById("punto")
  var igual = document.getElementById("igual")

  //Eventos
  uno.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "1";
    else
    display.textContent += "1";
    }
  })
  dos.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "2";
    else
    display.textContent += "2";
    }
  })
  tres.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "3";
    else
    display.textContent += "3";
    }
  })
  cuatro.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "4";
    else
    display.textContent += "4";
    }
  })
  cinco.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "5";
    else
    display.textContent += "5";
    }
  })
  seis.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "6";
    else
    display.textContent += "6";
    }
  })
  siete.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "7";
    else
    display.textContent += "7";
    }
  })
  ocho.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "8";
    else
    display.textContent += "8";
    }
  })
  nueve.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "9";
    else
    display.textContent += "9";
    }
  })
  cero.addEventListener("click", function() {
    if (display.textContent.length < 8) {
    if (display.textContent == "0")
    display.textContent = "0";
    else
    display.textContent += "0";
    }
  })

  on.addEventListener("click", function() {
    resetear();
  })

  punto.addEventListener("click", function() {
    if (display.textContent == "0")
    display.textContent = ".";
    else
    display.textContent += ".";
  })

  var sign = document.getElementById("sign");
  sign.addEventListener('click', function() {
  display.textContent = parseFloat(display.textContent) * -1;
  })

  mas.addEventListener("click", function() {
    operandoa = display.textContent;
    operacion = "+";
    limpiar();
  })

  menos.addEventListener("click", function() {
    operandoa = display.textContent;
    operacion = "-";
    limpiar();
  })

  por.addEventListener("click", function() {
    operandoa = display.textContent;
    operacion = "*";
    limpiar();
  })

  dividido.addEventListener("click", function() {
    operandoa = display.textContent;
    operacion = "/";
    limpiar();
  })

  igual.addEventListener("click", function() {
    operandob = display.textContent;
    resolver();
  })  
}

function resolver(){
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  display.textContent = res;
}

function limpiar(){
  display.textContent = "";
}

function resetear(){
  display.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
