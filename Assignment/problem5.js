function waitingTime(donePatients,serialNumber){
    if(!(Array.isArray(donePatients)) || typeof serialNumber !== 'number'){
        return 'Invalid input';
    }
    let totalTime = donePatients.reduce((sum,time) => sum + time);
    // console.log(totalTime);
    let averageTime = Math.round(totalTime/donePatients.length);
    // console.log(averageTime);
    let waitingTime = (serialNumber-donePatients.length-1)*averageTime;
    return waitingTime;
}

console.log(waitingTime(7 , 10));