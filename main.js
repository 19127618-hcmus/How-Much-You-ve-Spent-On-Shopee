// From 2022, some code using Shopee's API can't run anymore. I wrote this little code that uses JS to calculate my Shopee spending. If you're like me and find it useful, use it!
// goto: https://shopee.vn/user/purchase/
// open: console

// first
time = setInterval(function(){window.scrollBy(0, 100),2});

// ------------------------------------------------------------------------------------------------------------------------------------
// after load to the bottom page (in this time, the page stop moving), use bellow code to stop scroll down
clearInterval(time);

// ------------------------------------------------------------------------------------------------------------------------------------
const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
function format(money){
    money = Math.round(money*1000000);
    return formatter.format(money);
}

totalMoney = 0;
discountMoney = 0;
listOrder = document.getElementsByClassName('TDMlX1');
numOfProduces = document.getElementsByClassName('qGisqd');
listProductsDiscountPrice = document.getElementsByClassName('ghw9hb');

for (i=0;i<listOrder.length;i++){
    totalMoney += parseFloat(listOrder[i].innerHTML.substring(1));
}
for (i=0;i<listProductsDiscountPrice.length;i++){
    discountMoney += parseFloat(listProductsDiscountPrice[i].innerHTML.substring(1)) * parseFloat(numOfProduces[i].textContent.substring(1));
}

console.log("Number of orders placed: ",listOrder.length);
console.log("Number of products ordered: ",listProductsDiscountPrice.length);
console.log("Total amount spent: ",format(totalMoney));
console.log("Savings: ",format(discountMoney-totalMoney));
console.log("*Total cost includes shipping fee and discount code.\nThe money saved is equal to the sum of the products - the total amount spent. It is equivalent to the amount you applied the discount code - shipping fee")
