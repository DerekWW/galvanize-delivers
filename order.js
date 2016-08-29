$(function() {

  var priceArray = [],
    priceSubtotal,
    priceTax,
    priceTotal;



  $('.food').click(foodClick);
  $('#submit').click(submitClick);



  function foodClick(event) {

    if ($(event.target).attr('id') === 'royale') {
      var trow = $('<tr>').html('<td>Royale with Cheese</td><td class=\'money right-align\'>$8.99</td>')
      $('#tbody').append(trow);
      priceArray.push(8.99);
    }
    if ($(event.target).attr('id') === 'pizza') {
      var trow = $('<tr>').html('<td>Arugula Pie</td><td class=\'money right-align\'>$11.99</td>')
      $('#tbody').append(trow);
      priceArray.push(11.99);
    }
    if ($(event.target).attr('id') === 'ribs') {
      var trow = $('<tr>').html('<td>Smoked Swine</td><td class=\'money right-align\'>$14.99</td>')
      $('#tbody').append(trow);
      priceArray.push(14.99);
    }
    if ($(event.target).attr('id') === 'ice') {
      var trow = $('<tr>').html('<td>Ice Cream Biscut</td><td class=\'money  right-align\' >$7.99</td>')
      $('#tbody').append(trow);
      priceArray.push(7.99);
    }

    priceSubtotal = priceArray.reduce(getSum, 0);
    priceTax = (priceSubtotal * 0.085);
    priceTotal = priceSubtotal + priceTax;

    $('#subtotal').text('$' + priceSubtotal.toFixed(2).toString());
    $('#tax').text('$' + priceTax.toFixed(2).toString());
    $('#total').text('$' + priceTotal.toFixed(2).toString());

    function getSum(a, b) {
      return a + b;
    }

    console.log(priceArray);
    console.log(priceSubtotal);
  }



  function submitClick(event) {
    console.log($('textarea').val().length);
    if ($('#firstName').hasClass('valid') && $('#phoneNumber').hasClass('valid') && $('#address').val().length !== 0 && priceArray.length !== 0) {
      event.preventDefault();
      Materialize.toast($toastSuccess, 5000, '', submitForm);
    }else {
      event.preventDefault();
      Materialize.toast($toastFail, 5000);
    }
  }

  function submitForm() {
    $('form').submit();
  }

  var $toastFail = 'You missed something! Please check order and try again!';
  var $toastSuccess = 'Your Order Has Been Placed! Thank You!';

});
