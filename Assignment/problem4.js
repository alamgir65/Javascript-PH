function calculateFinalScore(student){
    if(typeof student !== 'object'){
        return 'Invalid input';
    }

    let score = student.testScore + student.schoolGrade;
    if(student.isFFamily){
        score += 20;
    }
    else return false;
    return score >= 80;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));
console.log(calculateFinalScore('hello'));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));