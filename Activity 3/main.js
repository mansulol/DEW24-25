function tarea1() {
  let window1 = window.open("", "", "width=200,height=100");

  debugger;
}

function tarea2() {
  let window2 = window.open("", "MsgWindow", "width=500,height=400");
  window2.document.write("Some text");

  debugger;
}

function tarea3() {
  let window3 = window.open("", "MsgWindow", "width=600,height=500");
  window3.document.write("Some other text");

  debugger;
}

function tarea4() {
  let window3 = window.open("", "New window");
  window3.document.write("Some other text");

  setTimeout(() => {
    window3.close();
    window3 = window.open("", "New window").document.write("Sustituto");
  }, 2000);

  debugger;
}

function tarea4_1() {
  // Cambio url de la ventana actual
  let window1 = window.open("https://www.google.es/");
  setTimeout(() => {
    window1.document.replace("https://www.youtube.com/");
  }, 2000);

  debugger;
}

function tarea5() {
  let window1 = window.open(
    "",
    "",
    "New window",
    "toolbar=no, scrollbar=no, resizable=no, width=400, height=200, left=340, top=150"
  );

  debugger;
}

function tarea6() {
  let window1 = window.open("");

  setTimeout(() => {
    window1.close();
  }, 2000);

  debugger;
}

function tarea7() {
  let openerWindow = window.open("", "", "");

  openerWindow.opener.document.write("Some window text");

  debugger;
}

function tarea8() {
  let iframe = window.document.createElement("iframe");
  iframe.src = "./iframe.html";

  document.body.appendChild(iframe);

  iframe.onload = () => {
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.write("some text");
  };

  debugger;
}

function tarea9() {
  // let iframe = window.document.createElement('iframe')
  // iframe.src = './iframe.html'

  // let content = ""

  // document.body.appendChild(iframe)

  // iframe.onload = () => {
  //     let iframeDoc = iframe.contentDocument || iframe.contentWindow.document
  //     iframeDoc.write('some text')
  //     content = iframeDoc.body.getAttribute('texto')
  // }

  // window.document.body.appendChild(content)

  // debugger

  let iframe2 = document.createElement("iframe");
  iframe2.src = "iframe.html";

  document.body.appendChild(iframe2);

  iframe2.onload = () => {
    let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    console.log(iframeDoc.body.innerHTML);
  };

  window.document.body.innerHTML = iframeDoc.body.innerHTML
}
