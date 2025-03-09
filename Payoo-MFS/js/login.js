console.log('login.js loaded');

document.getElementById('login-btn').addEventListener('click',function(event){
    const number = document.getElementById('number').value;
    const pin = document.getElementById('pin').value;
    
    if(number === '015' && pin === '1234'){
        window.location.href = '/dashboard.html';
    }
});