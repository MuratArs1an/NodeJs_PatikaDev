const fs=require('fs');

fs.writeFile("employees.json",'{"name": "Employee 1 Name", "salary": 2000}',(err)=>{
    if(err) console.log(err);
    console.log("Dosya Olusturma Basarılı");
})

fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log("Dosya Basarılı bir Şekilde Okundu");
})

fs.appendFile('employees.json',',{"name": "Employee 2 Name", "salary": 3000}',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log("Dosya Güncellendi");
})

fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
    console.log("Dosya Silindi");
})