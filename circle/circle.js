const circleArea=(radius)=>{
    let pi=3.14;
    let result= pi*radius*radius;
    console.log(result);
}

const circumference=(radius)=>{
    let pi=3.14;
    let result= 2*pi*radius
    console.log(result);
}

module.exports={
    circleArea,
    circumference
}