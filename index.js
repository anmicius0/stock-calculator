function balance_price() {
    var buy = Number(document.querySelector('#buy_price').value);
    var buy_rate = Number(document.querySelector('#buy_rate').value);
    var sell_rate = Number(document.querySelector('#sell_rate').value);
    var input = true;

    // input validation
    if (buy == 0) {
        document.querySelector('#buy_warning').style.visibility = 'visible';
        input = false
    } 
    if (buy_rate == 0) {
        document.querySelector('#buy_rate_warning').style.visibility = 'visible';
        input = false
    }  
    if (sell_rate == 0) {
        document.querySelector('#sell_rate_warning').style.visibility = 'visible';
        input = false
    }

    // if aok
    if (input) {
        var sell_price = ((buy * (1 + buy_rate)) / (1 - sell_rate)).toFixed(2);
        
        // return ans
        document.querySelector('#balance_price').innerHTML = sell_price;
    }

   
    return false;

}

function roi() {
    var buy = Number(document.querySelector('#buy_price').value);
    var sell = Number(document.querySelector('#sell_price').value);
    var buy_rate = Number(document.querySelector('#buy_rate').value);
    var sell_rate = Number(document.querySelector('#sell_rate').value);
    var input = true;

    // input validation
    if (buy == 0) {
        document.querySelector('#buy_warning').style.visibility = 'visible';
        input = false;
    } 
    if (sell == 0) {
        document.querySelector('#sell_warning').style.visibility = 'visible';
        input = false;
    }
    if (buy_rate == 0) {
        document.querySelector('#buy_rate_warning').style.visibility = 'visible';
        input = false;
    }
    if (sell_rate == 0) {
        document.querySelector('#sell_rate_warning').style.visibility = 'visible';
        input = false;
    }

    // if aok
    if (input) {
        var roi = Number((((sell * (1 - sell_rate)) - (buy * (1 + buy_rate))) / (buy * (1 + buy_rate))).toFixed(4));
        
        // have to do this bcs the error of js
        roi = roi * 10000 / 100;
        
        // return ans
        document.querySelector('#roi').innerHTML = roi + '%';
    }

    return false;
}

function clear_warning(element) {
    document.querySelector(`#${element.id}`).style.visibility = 'hidden'
}