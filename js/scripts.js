/*global $*/
/*global ready*/
$(document).ready(function() {
  $(".scrolla").scrolla({
    mobile: true
  });
  $("#start").click(function() {
    $("#intro").fadeOut();
  });
});

var AccountBalance = 500;
var ab = document.getElementById("ab");
ab.innerHTML = AccountBalance;

var weeklyPay = 25;
var wp = document.getElementById("pay");
wp.innerHTML = weeklyPay;

var debtAmount = 0;
var debt = document.getElementById("debt");
debt.innerHTML = debtAmount;

var creditScore = 500;
var credit = document.getElementById("credit");
credit.innerHTML = creditScore;

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

var paytimer = document.getElementById("paytimer");
