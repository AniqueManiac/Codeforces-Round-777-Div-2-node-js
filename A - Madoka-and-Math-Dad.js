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
    
    let t = parseInt(readline()) ;
    let c =0;
    while(c<t){
       let num =  parseInt(readline()) ;
       
            let s = "";
            let t ="21";
            let b =0;
            let d =0;
            let x =0;
            let k="";
            let l="";
            let m="";

            function gen21(total){
                let count =0;
                let add = "";
                while(count<total){
                    add +="21";
                    count++;
                }
                return add;
            }


            if(num%3 ==0){
                x = num/3;
                m = gen21(x);
                console.log(m);
            }
            if((num-1)%3 == 0 ){
               b = (num-1)/3;
               k = gen21(b);
               s = "1"+ k; 
               console.log(s)
            }
            if((num+1)%3 == 0){
                d = (num+1)/3;
                l = gen21(d);
                l = l.split("")
                
                l.splice(-1,1);

                
               l = l.join("");
               console.log(l)
            }



        c++;
    }
   
}

//type input.txt | node code.js
