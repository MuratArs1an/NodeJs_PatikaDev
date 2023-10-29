const arquments=process.argv.slice(2);

const circleArea=(radius)=>{
    let pi=3.14;
    let area=pi*radius*radius;
    console.log(area);
}

circleArea(arquments[0]*1);