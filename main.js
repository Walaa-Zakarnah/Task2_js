var xchange = document.querySelector(".currencyForm");
xchange.onsubmit = currencyExchange;

function currencyExchange(e) {
    e.preventDefault();
    elements = e.target.elements;
    amount = elements['amount'].value;
    currency = document.querySelector(".sel").value;
    if (currency == "dollar") {
        amount = amount / 3.58;
        document.querySelector(".result").textContent = `${amount.toFixed(2)} USD`;
    } else if(currency == "dinar"){
        amount/=5;
        document.querySelector(".result").textContent = `${amount.toFixed(2)} JD`;
    }else if(currency=="nis"){
        amount*=1;
        document.querySelector(".result").textContent = `${amount.toFixed(2)} NIS`;
    }
}
