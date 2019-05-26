document.addEventListener('DOMContentLoaded', () => {
})

function balance_price() {
    var buy = Number(document.querySelector('#buy_price').value);
    var buy_rate = Number(document.querySelector('#buy_rate').value);
    var sell_rate = Number(document.querySelector('#sell_rate').value);
    var input = true;

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
    if (input) {
        var sell_price = ((buy * (1 + buy_rate)) / (1 - sell_rate)).toFixed(2);
        
        // return ans
        document.querySelector('#balance_price').innerHTML = sell_price;
    }

    return false;

}

function clear_warning(element) {
    document.querySelector(`#${element.id}`).style.visibility = 'hidden'
}