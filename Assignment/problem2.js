function sendNotification(email){
    if(!(email.includes('@')) || (email.split('@').length-1)>1){
        return 'Invalid email';
    }
    let splitArray = email.split('@');
    let username = splitArray[0];
    let domain = splitArray[1];
    let message = `${username} sent you an email from ${domain}`;
    return message;
}
console.log(sendNotification('alamgirhossain23525@istt.edu.bd'));
console.log(sendNotification('fahim234.hotmail.com'));
