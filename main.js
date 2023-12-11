// (function(){                //iife    xosiblanadi !!!
//     let name = "Elbek !!! "
//     let surname = "Shermatov !!!"
//     console.log(name);
//     console.log(surname);
// })()

//massiv yangi usuli massivni !!!

// let arr = [1 , 2, 3 , "salom" , "hayr" , true];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//1-masala !!!
//sonlardan tashkil topgan massiv elementlarning yigindisini topuvchi funksiya yozing!
// function sum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length;i++){
//         sum += arr[i];
//     }

//     return sum;
// }
// console.log(sum([1 , 2 , 3]));

//2-masala
// sonlardan tashkil topgan massiv juft elementlarning yigindisini toping
// console.log("sonlardan tashkil topgan massiv juft elementlarning yigindisini toping")
// function sum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length;i++){
//         if(arr[i] % 2 == 0){
//             sum += arr[i];
//         }
//     }

//     return sum;
// }
// console.log(sum([1 , 2 , 4]));

// const arr = [1 , 2 , "salom" , false];

//  sum = 0;
// for(const item of arr){
//     sum += item;
// }
// console.log(sum)

// qiymatni ozgartirish
// arr[2] = "hayr"

//qiymat qo'shishlar

//ohiriga qo'shish
//arr.push("xayr")

//boshiga qo'shish
//arr.unshift("xayr")

//ohiridan ochirish
//arr.pop("xayr")

//boshidan o'chirish
//arr.shift("xayr");

//massivni nechta element borligini aytadi
//consolle.log(arr.lenght);

// const user = {
//     name:"elbek",
//     surname:"Shermatov",
//     age : 14,
//     email: "shermatovelbek772@gmail.com",

// };
// user.phone = "+998946749319"

// console.log(user)
//                    Uyga vazifalar boshlandi !!!
// 1-masala

// function numbers(arr){
//     let sum = 0;
//     for (const item of arr) {
//         if(item % 3 == 0 || item % 5 == 0){
//             sum += item
//         }
//     }
//     return sum
// }
// console.log(numbers([1, 2, 3, 4, 5,]));

//2-masala

// function sent(arg){
//     let sum = [];
//     for (const item of arg) {
//         sum += item.slice(0,1);
//     }
//     return sum
// }
// let n = ["salom", "xayr"]
// console.log(sent(n));            //domla bu misolda bow harflari ciqishi kerakmidi ?

//3-masala

// function sum1(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       console.log(arr[i])

//     }
//   }
//   return sum;
// }
// console.log(sum1([1, 2, 3, 4, 5, 7 , 9]));   //5

//4-masala

// function sum1(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       sum++;
//     }
//   }
//   return sum;
// }
// console.log(sum1([1, 2, 3, 4, 5, 7 , 9]));   //5

//5-masala

// function max(arr)
// {
//     return arr.filter(function(element) {
//         return element.length > 5;
//     });
// }
// const max2 = ["helo", "helloo"];

// const sum = max(max2);

// console.log(sum);

// 6-misol

function ex6(arg){
     let sum = 0;
     let res = 0;
     for (const iterator of arg) {
         for (let i = 1; i <= iterator; i++){
             if (iterator % i == 0) {
                 sum++;
             }
             if (sum == 2){
                 res++;
             }
         }

     }
     return res
}

console.log(ex6([1 , 7 , 9]));
