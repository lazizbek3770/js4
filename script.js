let ism = prompt("Ismingizni kiriting");
let a = +prompt("Hozirgi yilni kiriting");
let b = +prompt("Tugulgan yilingizni kirting");

function d(ism,a,b) {
    let age = a - b;
  return `${ism}, yoshingiz ${age}`
}
alert(d(ism,a,b))



let miqdor = +prompt("Nechta misol ishlamoqchisiz?");
let amallar = ["+", "-", "*", "/"];

for (let i = 0; i < miqdor; i++) {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;
  let amal = amallar[Math.floor(Math.random() * amallar.length)];

  if (amal === "/") {
    a = a * b; 
  }

  let javob;
  if (amal === "+") {
    javob = a + b;
  } else if (amal === "-") {
    javob = a - b;
  } else if (amal === "*") {
    javob = a * b;
  } else if (amal === "/") {
    javob = a / b;
  }

  let foyJavob = +prompt(`${a} ${amal} ${b} = ?`);

  if (foyJavob === javob) {
    console.log(`Sizning javob togri - ${javob}`);
  } else {
    console.log(`Sizning javob notogri - ${foyJavob}. Togri javob: ${javob}`);
  }
}


