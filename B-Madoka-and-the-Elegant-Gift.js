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
    let c= 0;
    while(c<t){
        

      let m = readline().split(" ").map(a =>parseInt(a));
      let m0 = m[0];
      let countRow = 0 ;
      let arr =[];
      while(countRow < m0){
        let row = readline().split("").map(b=>parseInt(b));
        arr.push(row);
        countRow++;
      }
 

    let eleg =true;
    let count =0;
    // for (var k = 0; k < arr.length; k++) {
    //     if(arr[k].indexOf(1) == -1 ){
    //          count++;
    //     }
    // }


    for (var i = 0; i < arr.length-1; i++) {

        
        
        for (var j = 0; j < arr[0].length; j++) {

           // 

          if(arr[i][j] ==1){
               if(j !==0 && arr[i+1][j] ==1 && arr[i+1][j-1] ==1 && arr[i][j-1] ==0 ){
                    eleg= false;
                    // console.log(i,j,"1st")
                    break;
               }

               if(arr[i+1][j]==1 && arr[i+1][j+1] ==1 && arr[i][j+1] == 0){
                   eleg =false;
                    // console.log(i,j,"2st")
                    break;
               }

               if(arr[i][j+1]==1 && arr[i+1][j]==1 && arr[i+1][j+1] ==0){
                eleg = false;
                 // console.log(i,j,"3st")
                 break;
               }

               if(i !== 0 && arr[i][j+1]==1 && arr[i-1][j+1] == 1 && arr[i-1][j] == 0){
                eleg =false;
                 // console.log(i,j,"4st")
                 break;
               }

               if(arr[i][j+1]==1 && arr[i+1][j+1] ==1 && arr[i+1][j]==0){
                eleg =false;
                // console.log(i,j,"5st")
                break;
               }
          }
        }
       

    }
    
    // if(count == arr.length*arr[0].length ){
    //     eleg = false;
    // }

    if(eleg){
        console.log("yes");
    }else{
        console.log("no");
    }






    c++;
    } 
   
}

//type input.txt | node code.js
