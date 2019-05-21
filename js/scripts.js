/*global $*/
/*global ready*/
$(document).ready(function() {
  $(".scrolla").scrolla({
    mobile: true
  });
  $("#start").click(function() {
    $("#intro").fadeOut();
    $("#game").delay(1000).fadeIn(100)
  });
});

var AccountBalance = 500;
var ab = document.getElementById("ab");
ab.innerHTML = AccountBalance;

var weeklyPay = 50;
var wp = document.getElementById("pay");
wp.innerHTML = weeklyPay;

var debtinput = document.getElementById("debtinput");
var debtAmount = 0;
var debt = document.getElementById("debt");
debt.innerHTML = debtAmount;

var nomoneyid = document.getElementById("nomoneyid");
var creditbtn = document.getElementById("creditbtn");
var creditScore = 500;
var credit = document.getElementById("credit");
credit.innerHTML = creditScore;

creditSub = () => {
  if(Number(debtinput.value) <= AccountBalance){
    debtAmount-=Number(debtinput.value);
    AccountBalance -= Number(debtinput.value);
    ab.innerHTML = AccountBalance;
    nomoneyid.style.display = "none";
  }
  else{
    nomoneyid.style.display = "block";
  }
  debt.innerHTML = debtAmount;

}

var paytimer = document.getElementById("paytimer");
var timeDisplay = 60;
window.setInterval(function() {
  paytimer.innerHTML = timeDisplay;
  timeDisplay--;
  if (timeDisplay <= 0) {
    timeDisplay = 60;
  }
}, 1000);

payday = () => {
  AccountBalance += weeklyPay;
  ab.innerHTML = AccountBalance;
};

window.setInterval(function() {
  payday();
}, 60000);



var creditPay = document.getElementById("creditpayuptimer");
var credittimeDisplay = 240;
window.setInterval(function() {
  creditPay.innerHTML = credittimeDisplay;
  credittimeDisplay--;
  if(credittimeDisplay == 0 && debtAmount > 50){
    creditScore -= 50;
    credit.innerHTML = creditScore;
  }
  if (credittimeDisplay <= 0) {
    credittimeDisplay = 240;
  }
}, 1000);

// monthlyExpenseAmount = 90;
// monthlyExpense = document.getElementById("monthlyExpense");
// monthlyExpense.innerHTML = "$" + monthlyExpenseAmount;
// paid = false;
// paymentStatus = document.getElementById("paymentStatus");

// if(paid == false){
//   paymentStatus.innerHTML = "Not Paid";
// }
// if(paid == true){
//   paymentStatus.innerHTML = "Paid"
// }

// var exptimer = 240;
// window.setInterval(function() {
//   exptimer--;
//   if (exptimer <= 0) {
//     exptimer = 240;
//     paid = false;
//     paymentStatus.innerHTML = "Not Paid";
//     creditpaybtn.classList.remove("disabled");
//     debitpaybtn.classList.remove("disabled");
//   }
// }, 1000);

// creditpaybtn = document.getElementById("creditpaybtn");

// paywithcredit = () => {
//   paid = true;
//   paymentStatus.innerHTML = "Paid"
//   debtAmount+=monthlyExpenseAmount;
//   debt.innerHTML = debtAmount;
//   creditpaybtn.classList.add("disabled");
//   debitpaybtn.classList.add("disabled");
//   creditScore += 20;
//   credit.innerHTML = creditScore;
// }

// debitpaybtn = document.getElementById("debitpaybtn");

// paywithdebit = () =>{
//   paid = true
//   paymentStatus.innerHTML = "Paid"
//   AccountBalance-=monthlyExpenseAmount;
//   ab.innerHTML = AccountBalance;
//   creditpaybtn.classList.add("disabled");
//   debitpaybtn.classList.add("disabled");
// }

var randomoccurances = 
[
  ["Doctor emergency", 100],
  ["Friend asks for money", 25],
  ["Lost Metro Card", 35]
]

var rolabel = document.getElementById("rolabel");
var roamount = document.getElementById("roamount");

window.setInterval(function(){
  var chance = Math.random();
  
  if (chance > 0.5){
    var blah = Math.floor(Math.random()*3);
    rolabel.innerHTML = randomoccurances[blah][0];
    roamount.innerHTML = randomoccurances[blah][1];
    AccountBalance-=randomoccurances[blah][1];
    ab.innerHTML = AccountBalance;
  }
},20000)

// console.log(randomoccurances);

var rentamount = document.getElementById("rentamount");
var rentamountvar = 50;
rentamount.innerHTML = rentamountvar;

var billamount = document.getElementById("billamount");
var billamountvar = 30;
billamount.innerHTML = billamountvar;

var transportation = document.getElementById("transportation");
var transportationvar = 20;
transportation.innerHTML = transportationvar;

var laundry = document.getElementById("laundry");
var laundryvar = 10;
laundry.innerHTML= laundryvar;

var other = document.getElementById("other");
var othervar = 10;
other.innerHTML = othervar;

var total = document.getElementById("total");
var totalvar = rentamountvar+billamountvar+transportationvar+laundryvar+othervar;
total.innerHTML = totalvar;

var creditpaybtnbill = document.getElementById("creditpaybtnbill");
var debitpaybtnbill = document.getElementById("debitpaybtnbill");

billpaywithcredit = () =>{
  debtAmount+=billamountvar;
  debt.innerHTML = debtAmount;
  creditpaybtnbill.classList.add("disabled");
  debitpaybtnbill.classList.add("disabled");
  creditScore += 20;
  credit.innerHTML = creditScore;
}

billpaywithdebit = () => {
  AccountBalance-=billamountvar;
  ab.innerHTML = AccountBalance;
  creditpaybtnbill.classList.add("disabled");
  debitpaybtnbill.classList.add("disabled");
}

var creditpaybtntrans = document.getElementById("creditpaybtntrans");
var debitpaybtntrans = document.getElementById("debitpaybtntrans");

paywithcredittrans = () => {
  debtAmount+=transportationvar;
  debt.innerHTML = debtAmount;
  creditpaybtntrans.classList.add("disabled");
  debitpaybtntrans.classList.add("disabled");
  creditScore += 20;
  credit.innerHTML = creditScore;
}

paywithdebittrans = () => {
  AccountBalance-=transportationvar;
  ab.innerHTML = AccountBalance;
  creditpaybtntrans.classList.add("disabled");
  debitpaybtntrans.classList.add("disabled");
}

var creditpaybtnlndry =  document.getElementById("creditpaybtnlndry");
var debitpaybtnlndry = document.getElementById("debitpaybtnlndry");

paywithcreditlndry = () => {
  debtAmount+=laundryvar;
  debt.innerHTML = debtAmount;
  creditpaybtnlndry.classList.add("disabled");
  debitpaybtnlndry.classList.add("disabled");
  creditScore += 20;
  credit.innerHTML = creditScore;
}

paywithdebitlndry = () => {
  AccountBalance-=laundryvar;
  ab.innerHTML = AccountBalance;
  creditpaybtnlndry.classList.add("disabled");
  debitpaybtnlndry.classList.add("disabled");
}

var creditpaybtnotr = document.getElementById("creditpaybtnotr");
var debitpaybtnotr = document.getElementById("debitpaybtnotr");

paywithcreditotr = () => {
  debtAmount+=othervar;
  debt.innerHTML = debtAmount;
  creditpaybtnotr.classList.add("disabled");
  debitpaybtnotr.classList.add("disabled");
  creditScore += 20;
  credit.innerHTML = creditScore;
}

paywithdebitotr = () => {
  AccountBalance-=othervar;
  ab.innerHTML = AccountBalance;
  creditpaybtnotr.classList.add("disabled");
  debitpaybtnotr.classList.add("disabled");
  
}

var exptimer = 240;
window.setInterval(function() {
  exptimer--;
  if (exptimer <= 0) {
    exptimer = 240;
    creditpaybtnotr.classList.remove("disabled");
    debitpaybtnotr.classList.remove("disabled");
    creditpaybtnlndry.classList.remove("disabled");
    debitpaybtnlndry.classList.remove("disabled");
    creditpaybtntrans.classList.remove("disabled");
    debitpaybtntrans.classList.remove("disabled");
    creditpaybtnbill.classList.remove("disabled");
    debitpaybtnbill.classList.remove("disabled");
  }
}, 1000);
