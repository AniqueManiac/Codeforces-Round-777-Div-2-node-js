"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputStr = "";
let currentLne = 0;

process.stdin.on('data' , inputStdin =>{

	 inputStr += inputStdin;
})

process.stdin.on('end' , _ =>{
    inputStr = inputStr.trim().split('\n').map( string =>{
    	return string.trim();
    })
    
main();
})

function readline(){
   return inputStr[currentLne++];
}

function main(){
   let t = parseInt(readline());
   let c =0;

   while(c<t){
        let mat = readline().split(" ").map(a => parseInt(a));
        let tr = mat[0];
        let count =0;
        let arrd=[]
           while(count<tr){
              let rows = readline().split("").map(b=> parseInt(b));  
              arrd.push(rows);
              count++;
           } 
         let newarr = new Array();
         let co =0;
         for (var i = arrd.length-1; i>=0 ; i--) {
               for (var j = arrd[0].length-1; j >=0  ; j--) {
                if(arrd[i][j]==1){
                     co++;
                }
            }
         }
         
         if(arrd[0][0] ==1){
           console.log(-1);
         }else{
             console.log(co);
             for (var i = arrd.length-1; i>=0 ; i--) {
             for (var j = arrd[0].length-1; j >=0  ; j--) {
                if(arrd[i][j]==1){
                     co++;
                          if(j - 1 >= 0) {
                              console.log(i+1,j,i+1,j+1);

                          }
                          else {
                             console.log(i,j+1,i+1,j+1);

                          }
                     }
                 }   
             }
         }
      c++
   }


   
}

//type input.txt | node code.js
