a = 7;
b = 9;
console.log(a * b);
c = 7;
d = 9;
document.querySelector("div.out-1").innerHTML = c * d;
e = 3;
f = 5;
document.querySelector("div.out-2").innerHTML = e + f;
e1 = "3";
f1 = 5;
document.querySelector("div.out-3").innerHTML = e1 + f1;
// В данном случае сработала конкатенация.
//Когда Js видит одну из строк при "+", второй
//параметр также воспринимается строкой
e2 = 3;
f2 = 0;
document.querySelector("div.out-4").innerHTML = e2 / f2;
e3 = 3;
f3 = "Hello";
document.querySelector("div.out-5").innerHTML = e3 + f3;
e4 = 3;
f4 = "Hello";
document.querySelector("div.out-6").innerHTML = e4 * f4;

addText = () => {
  document.querySelector("div.out-8").innerHTML =
    document.querySelector("input.i-8").value;
};
addText9 = () => {
  document.querySelector("div.out-9").innerHTML =
    document.querySelector("input.i-9").value;
};

cleanMe = () => {
  document.querySelector("div.out-9").innerHTML = "";
};

t10 = () => {
  document.querySelector("div.out-10").innerHTML =
    document.querySelector("input.i-10").value * 20;
};

t11 = () => {
  document.querySelector("div.out-11").innerHTML =
    document.querySelector("input.i-11").value + 55;
};

t12 = () => {
  console.log("click");
  document.querySelector("div.out-12").innerHTML =
    "Hello" +
    " " +
    document.querySelector("input.i-12-1").value +
    " " +
    document.querySelector("input.i-12-2").value;
};

t13 = () => {
  document.querySelector("div.out-13").innerHTML =
    +document.querySelector("input.i-13-1").value +
    +document.querySelector("input.i-13-2").value;
};

t14 = () => (document.querySelector("input.i-14").value = "Go");

t15 = () =>
  (document.querySelector("input.i-15").style.border = "4px solid red");

t16 = () => {
  document.querySelector("div.out-16").innerHTML =
    document.querySelector("input.i-16-1").value +
    document.querySelector("input.i-16-2").value;
};

t17 = () => {
  document.querySelector("div.out-17").innerHTML = Number(
    document.querySelector("input.i-17").value
  );
};

t18 = () => {
  a = document.querySelector("input.i-18").value;
  document.querySelector("div.out-18").innerHTML = parseFloat(a);
};

t19 = () => {
  document.querySelector("div.out-19").innerHTML =
    +document.querySelector("input.i-19-1").value +
    +document.querySelector("input.i-19-2").value;
};

let counter = 0;

t20 = () => {
  counter++;
  document.querySelector("div.out-19").innerHTML = `<h1>${counter}</h2>`;
};
