// Here all functions written 

function showSectionById(id){
    document.getElementById('add-money-form').style.display = 'none';
    document.getElementById('cashout-form').style.display = 'none';
    document.getElementById('transaction-history').style.display = 'none';

    document.getElementById(id).style.display = 'block';
}

function insertChild(parentId,childElement){
    document.getElementById(parentId).appendChild(childElement);
}


document.getElementById('add-money-btn').addEventListener('click', function (event) {
    showSectionById('add-money-form');

    document.getElementById('add-money-submit-btn').addEventListener('click', function (event) {
        const amount = document.getElementById('add-amount').value;
        const pin = document.getElementById('add-pin').value;
        if (pin === '1234') {
            const balance = document.getElementById('balance').innerText;
            const newBalance = parseInt(balance) + parseInt(amount);
            document.getElementById('balance').innerText = newBalance;

            const div = document.createElement('div');
            // const h4 = document.createElement('h4');
            // h4.classList.add('text-bold');
            // const p = document.createElement('p');
            // h4.innerText = 'Add Money';
            // p.innerText = `${amount} Tk. added to your account, new balance is ${newBalance} Tk.`;
            // div.appendChild(h4);
            // div.appendChild(p);
            // console.log(div);

            div.innerHTML = `
                <h4 class="text-bold">Add Money</h4>
                <p>${amount} Tk. added to your account, new balance is ${newBalance} Tk.</p>`;
            insertChild('transaction-history',div);
        }else{
            alert('Invalid pin');
        }
    })
})


document.getElementById('cashout-btn').addEventListener('click',function(event){
    showSectionById('cashout-form');

    document.getElementById('cashout-submit-btn').addEventListener('click',function(event){
        const amount = document.getElementById('cashout-amount').value;
        const pin = document.getElementById('cashout-pin').value;
        if (pin === '1234') {
            const balance = document.getElementById('balance').innerText;

            if(parseInt(balance) < parseInt(amount)){
                alert('Insufficient balance');
                return;
            }

            const newBalance = parseInt(balance) - parseInt(amount);
            document.getElementById('balance').innerText = newBalance;


            const div = document.createElement('div');
            div.classList.add('bg-blue-400');
            // const p = document.createElement('p');
            // h4.innerText = 'Add Money';
            // p.innerText = `${amount} Tk. cashout from your account, new balance is ${newBalance} Tk.`;
            // div.appendChild(h4);
            // div.appendChild(p);
            // console.log(div);

            div.innerHTML = `
                <h4 class="text-bold">Cashout</h4>
                <p>${amount} Tk. cashout from your account, new balance is ${newBalance} Tk.</p>
            
            `;
            insertChild('transaction-history',div);
        }else{
            alert('Invalid pin');
        }
    })
})

document.getElementById('transactions').addEventListener('click',function(event){
    showSectionById('transaction-history');

})