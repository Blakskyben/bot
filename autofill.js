let name = 1,
  email = 1,
  num = 1,
  address = 1,
  apt = 1,
  zip = 1,
  city= 1,
  ccNum= 1233333,
  expMonth = 05,
  expYr = 2018,
  cvv = 123;


document.querySelector("#order_billing_name").value = name;
document.querySelector("#order_email").value = email;
document.querySelector("#order_tel").value = num;
document.querySelector("#bo").value = address;
document.querySelector("#oba3").value = apt;
document.querySelector("#order_billing_zip").value = zip;
document.querySelector("#order_billing_city").value = city;
document.querySelector("#nnaerb").value = ccNum;
document.querySelector("#credit_card_month").value = expMonth; //This is bugged (Doesn't work.)
document.querySelector("#credit_card_year").value = expYr;
document.querySelector("#rmae").value = ccv; //This is bugged (Doesn't work.)
