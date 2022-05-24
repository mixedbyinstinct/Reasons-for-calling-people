class Reason {
  constructor(name, reason) {
    this.name = name;
    this.reason = reason;
  }
  erase() {
    this.name = null;
    this.reason = null;
  }
}

var names = [];
var reasons = [];
var reason1;
var reason2;
var reason3;
var reason4;
var reason5;
var reason6;
var reason7;
var reason8;
const main = document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit")
  .addEventListener('click', function() {
    names.push(document.getElementById("nameField").value);
    reasons.push(document.getElementById("reasonField").value);
    document.getElementById("nameField").value = "";
    document.getElementById("reasonField").value = "";
  })
  
  document.getElementById("one")
  .addEventListener('click', function() {
    reason1 = new Reason(names[0], reasons[0]); 
    document.getElementById("person")
    .innerHTML = reason1.name;
    document.getElementById("reason")
    .innerHTML = reason1.reason;
  })
  
  document.getElementById("two")
  .addEventListener('click', function() {
    reason2 = new Reason(names[1], reasons[1]);
    document.getElementById("person")
    .innerHTML = reason2.name;
    document.getElementById("reason")
    .innerHTML = reason2.reason;
  })
  
  document.getElementById("three")
  .addEventListener('click', function() {
    reason3 = new Reason(names[2], reasons[2]);
    document.getElementById("person")
    .innerHTML = reason3.name;
    document.getElementById("reason")
    .innerHTML = reason3.reason;
  })

  document.getElementById("four")
  .addEventListener('click', function() {
    reason4 = new Reason(names[3], reasons[3]);
    document.getElementById("person")
    .innerHTML = reason4.name;
    document.getElementById("reason")
    .innerHTML = reason4.reason;
  })

  document.getElementById("five")
  .addEventListener('click', function() {
    reason5 = new Reason(names[4], reasons[4]);
    document.getElementById("person")
    .innerHTML = reason5.name;
    document.getElementById("reason")
    .innerHTML = reason5.reason;
  })

  document.getElementById("six")
  .addEventListener('click', function() {
    reason6 = new Reason(names[5], reasons[5]);
    document.getElementById("person")
    .innerHTML = reason6.name;
    document.getElementById("reason")
    .innerHTML = reason6.reason;
  })

  document.getElementById("seven")
  .addEventListener('click', function() {
    reason7 = new Reason(names[6], reasons[6]);
    document.getElementById("person")
    .innerHTML = reason7.name;
    document.getElementById("reason")
    .innerHTML = reason7.reason;
  })

  document.getElementById("eight")
  .addEventListener('click', function() {
    reason8 = new Reason(names[7], reasons[7]);
    document.getElementById("person")
    .innerHTML = reason8.name;
    document.getElementById("reason")
    .innerHTML = reason8.reason;
  })
  
  document.getElementById("backdrop")
  .addEventListener('click', function() {
    document.getElementById("person")
    .innerHTML = "";
    document.getElementById("reason")
    .innerHTML = "";
    reason1.name = "";
    reason2.name = "";
  })
  document.getElementById("clear")
  .addEventListener('click', function() {
    document.getElementById("person")
    .innerHTML = "";
    document.getElementById("reason")
    .innerHTML = "";
    document.getElementById("nameField")
    .value = "";
    document.getElementById("reasonField")
    .value = "";
    reason1.erase();
    reason2.erase();
    reason3.erase();
    reason4.erase();
    reason5.erase();
    reason6.erase();
    reason7.erase();
    reason8.erase();
  })
});






