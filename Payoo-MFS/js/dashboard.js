document.getElementById('add-money-btn').addEventListener('click', function (event) {
    document.getElementById('add-money-form').style.display = 'block';
    document.getElementById('cashout-form').style.display = 'none';

    document.getElementById('add-money-submit-btn').addEventListener('click', function (event) {
        const amount = document.getElementById('add-amount').value;
        const pin = document.getElementById('add-pin').value;
        if (pin === '1234') {
            const balance = document.getElementById('balance').innerText;
            const newBalance = parseInt(balance) + parseInt(amount);
            document.getElementById('balance').innerText = newBalance;
            document.getElementById('add-money').value = '';
            document.getElementById('add-pin').value = '';
        }else{
            alert('Invalid pin');
        }
    })
})


document.getElementById('cashout-btn').addEventListener('click',function(event){
    document.getElementById('cashout-form').style.display = 'block';
    document.getElementById('add-money-form').style.display = 'none';

    document.getElementById('cashout-submit-btn').addEventListener('click',function(event){
        const amount = document.getElementById('cashout-amount').value;
        const pin = document.getElementById('cashout-pin').value;
        if (pin === '1234') {
            const balance = document.getElementById('balance').innerText;
            const newBalance = parseInt(balance) - parseInt(amount);
            document.getElementById('balance').innerText = newBalance;
            document.getElementById('cashout-money').value = '';
            document.getElementById('cashout-pin').value = '';
        }else{
            alert('Invalid pin');
        }
    })
})