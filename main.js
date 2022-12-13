let studentRecords =[{name:"john",id:123,marks:98},
                    {name:"baba",id:124,marks:35},
                    {name:"yaga",id:100,marks:45},
                    {name:"wick",id:126,marks:75}
]

// console.log(studentrecords.name)

//Q.1

let ques1Arrlength=studentRecords.length;
let newArray =[];
str ='';
for (let i=0;i<ques1Arrlength;i++){
    str=studentRecords[i].name;
    str=str.toString().toUpperCase();
    newArray.push(str);
}
console.log(newArray)

//2Q
let ques2 =studentRecords.filter(pavan=>pavan.marks>50)
console.log(ques2);


//3Q
let ques3 =studentRecords.filter(pavan1=>pavan1.marks>50 && pavan1.id>120 )
console.log(ques3);

//4Q

let ques4Arrlength=studentRecords.length;
sum=0;
for (let i=0;i<ques4Arrlength;i++){
    sum=sum+studentRecords[i].marks
    
}
console.log(sum);

//5Q
let ques5Arrlength=studentRecords.length;
sum1=0;
new1Array=[];
for (let i=0;i<ques5Arrlength;i++){
    if(studentRecords[i].marks>50){
        new1Array.push(studentRecords[i].name)
    }
    
}
console.log(`name of the students are : ${new1Array}`);

//6Q
let ques6Arrlength=studentRecords.length;
sum2=0;
for (let i=0;i<ques6Arrlength;i++){
    if(studentRecords[i].id>120){
        sum2=sum2+studentRecords[i].marks;
    }
}
console.log(`sum of student id >120 are :${sum2}`)
//7Q
let totalmarks=0;
let ques7arrlength=studentRecords.length;
for(i=0;i<ques7arrlength;i++){
    if(studentRecords[i].marks>50){
        totalmarks +=studentRecords[i].marks;
    }
    else{
        studentRecords[i].marks=studentRecords[i].marks+15
    }
}
console.log(`total marks of student with greater than 50 are :${totalmarks}`);
console.log(`newarray will be:`,studentRecords);
//8Q
let newarray=[];
function students(name,classname,rollno){
    this.stuName=name;
    this.stuClass=classname;
    this.stuRoll=rollno

}
let student1=new students("pavan","ea17",1)
let student2=new students("nithin","ea16",2)
let student3=new students("bhanu","ea15",3)
let student4=new students("prakash","ea14",4)
let student5=new students("king","ea13",5)
let student6=new students("maker","ea12",6)

newarray.push( student1)
newarray.push( student2)
newarray.push( student3)
newarray.push( student4)
newarray.push( student5)
newarray.push( student6)

console.log(newarray);