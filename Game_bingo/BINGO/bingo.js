var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

function randomgenrator()
 {
   arr.sort(function(){return 0.5- Math.random()});
for(let i = 0; i<25;i++)
{
    document.getElementById(`${i+1}`).innerHTML = arr[i];
}
 } 
 randomgenrator()
 var brry = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 var sum  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 var map = new Array();
 function call()
 {
    for( let i=0;i<25;i++)
    {
       map[arr[i]]=i+1;
    }
   }
 function check(id,num)
 {
    brry[id-1]=id;
    sum[id-1]=id;
      document.getElementById(`${id}`).style.backgroundColor = "teal";
      bcheck();
      const a0 = document.getElementById(`${id}`).innerHTML;
      console.log(a0);
       if(num!=1)
       {
       server_fetch(a0);
      }
      document.getElementById(`${id}`).disabled=true; 
 }
 function bingocheck ()
 {
   return rowcheck()+columncheck()+diagonalcheck();
 }
 function search()
 {
   var x=0;
   var a=arguments[0];
   for(let i=0;i<brry.length;i++)
   {
       if(a==brry[i])
       {
         x=1;
         break;
       }
   }
   return x;
 }
 function rowcheck()
 { 
     let row=5;
   if(search(1))
   {
     for (let i=0;i<4;i++)
     {
       if(brry[i]+1!=brry[i+1])
         {
             row--;
             break;
         }
     }
   }
   else row--;
   if(search(6))
   {
     for (let i=5;i<9;i++)
     {
       if(brry[i]+1!=brry[i+1])
         {
             row--;
             break;
 
         }
     }
   }
   else row--;
   if(search(11))
   {
     for (let i=10;i<14;i++)
     {
       if(brry[i]+1!=brry[i+1])
         {
             row--;
             break;
 
         }
     }
   }
   else row--;
   if(search(16))
   {
     for (let i=15;i<19;i++)
     {
       if(brry[i]+1!=brry[i+1])
         {
             row--;
             break;
 
         }
     }
   }
   else row--;
   if(search(21))
   {
     for (let i=20;i<24;i++)
     {
       if(brry[i]+1!=brry[i+1])
         {
             row--;
             break;
 
         }
     }
   }
   else row--;
   return row;
 }
 function columncheck()
 
         {
            let column=5;
          if(search(1))
       {
     for (let i=0;i<16;i=i+5)
     {
       if(brry[i]+5!=brry[i+5])
         {
             column--;
             break;
 
         }
     }
   }
   else column--;
   if(search(2))
   {
     for (let i=1;i<17;i=i+5)
     {
       if(brry[i]+5!=brry[i+5])
         {
             column--;
             break;
 
         }
     }
   }
   else column--;
   if(search(3))
   {
     for (let i=2;i<18;i=i+5)
     {
       if(brry[i]+5!=brry[i+5])
         {
             column--;
             break;
 
         }
     }
   }
   else column--;
   if(search(4))
   {
     for (let i=3;i<19;i=i+5)
     {
       if(brry[i]+5!=brry[i+5])
         {
             column--;
             break;
         }
     }
   }
   else column--;
   if(search(5))
   {
     for (let i=4;i<20;i=i+5)
     {
       if(brry[i]+5!=brry[i+5])
         {
             column--;
             break;
 
         }
     }
   }
   else column--;
   return column;
 }
 function diagonalcheck()
 { let diago=2;
     if(search(1))
   {
     for (let i=0;i<19;i=i+6)
     {
       if(brry[i]+6!=brry[i+6])
         {
             diago--;
             break;
 
         }
     }
   }
   else diago--;
   if(search(5))
   {
     for (var i=4;i<17;i=i+4)
     {
       if(brry[i]+4!=brry[i+4])
         {
             diago--;
             break;
 
         }
     }
   }
   else diago--;
   return diago
   
 }
 function bcheck()
 {
 if(bingocheck()==1)
 {
    document.getElementById("B").checked=true;
 }
 if(bingocheck()==2)
 {
   document.getElementById("B").checked=true;
   document.getElementById("I").checked=true;
 }
 if(bingocheck()==3)
 {
   document.getElementById("B").checked=true;
   document.getElementById("I").checked=true; 
   document.getElementById("N").checked=true;
 }
 if(bingocheck()==4)
 {
   document.getElementById("B").checked=true;
   document.getElementById("I").checked=true; 
   document.getElementById("N").checked=true; 
   document.getElementById("G").checked=true;
 }
 if(bingocheck()==5)
 {
   document.getElementById("B").checked=true;
   document.getElementById("I").checked=true; 
   document.getElementById("N").checked=true; 
   document.getElementById("G").checked=true; 
   document.getElementById("O").checked=true;
 }
 }
 function popup()
 {
   if(bingocheck()<5)
   {
      if (confirm("YOU HAVE NOT COMPLLETED THE GAME , STILL WANT TO NEW GAME"))
       { 
         location.reload();
       }
    }
   else
   location.reload();
 }
 function suff()
 { let  x=1
   for(let  i=0;i<25;i++)
   {
   if(brry[i]!=0)
   {
       x=0;
     break;
   }
   }
   if(x)
   {
     randomgenrator();
   }
   else
   window.alert("YOU HAVE NOT COMLETED THE GAME")
 
  }
 
  function callback(num)
  {    
    
     check(map[num],1)
      
  }
  function server_fetch(num)
  {
   socket.emit("num",num);
  }
 socket.on("data",data=>{
   
     call();
     callback(data.num)
   
     
   
 })
 
 
