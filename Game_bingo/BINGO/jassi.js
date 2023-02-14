var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  document.getElementById(`${f}`).innerHTML = "B";
  document.getElementById("a1").innerHTML = "I";
  document.getElementById("a2").innerHTML = "N";
  document.getElementById("a3").innerHTML = "G";
  document.getElementById("a4").innerHTML = "O";    
  document.getElementById("b0").innerHTML = "B";
  document.getElementById("b1").innerHTML = "I";
  document.getElementById("b2").innerHTML = "N";
  document.getElementById("b3").innerHTML = "G";
  document.getElementById("b4").innerHTML = "O";
  document.getElementById("c0").innerHTML = "B";
  document.getElementById("c1").innerHTML = "I";
  document.getElementById("c2").innerHTML = "N";
  document.getElementById("c3").innerHTML = "G";
  document.getElementById("c4").innerHTML = "O";
  document.getElementById("d0").innerHTML = "B";
  document.getElementById("d1").innerHTML = "I";
  document.getElementById("d2").innerHTML = "N";
  document.getElementById("d3").innerHTML = "G";
  document.getElementById("d4").innerHTML = "O";
  document.getElementById("e0").innerHTML = "B";
  document.getElementById("e1").innerHTML = "I";
  document.getElementById("e2").innerHTML = "N";
  document.getElementById("e3").innerHTML = "G";
  document.getElementById("e4").innerHTML = "O";
function randomgenrator()
  {
   arr.sort(function(){return 0.5- Math.random()});

  document.getElementById("a0").innerHTML = arr[0];
  document.getElementById("a1").innerHTML = arr[1];
  document.getElementById("a2").innerHTML = arr[2];
  document.getElementById("a3").innerHTML = arr[3];
  document.getElementById("a4").innerHTML = arr[4];
  document.getElementById("b0").innerHTML = arr[5];
  document.getElementById("b1").innerHTML = arr[6];
  document.getElementById("b2").innerHTML = arr[7];
  document.getElementById("b3").innerHTML = arr[8];
  document.getElementById("b4").innerHTML = arr[9];
  document.getElementById("c0").innerHTML = arr[10];
  document.getElementById("c1").innerHTML = arr[11];
  document.getElementById("c2").innerHTML = arr[12];
  document.getElementById("c3").innerHTML = arr[13];
  document.getElementById("c4").innerHTML = arr[14];
  document.getElementById("d0").innerHTML = arr[15];
  document.getElementById("d1").innerHTML = arr[16];
  document.getElementById("d2").innerHTML = arr[17];
  document.getElementById("d3").innerHTML = arr[18];
  document.getElementById("d4").innerHTML = arr[19];
  document.getElementById("e0").innerHTML = arr[20];
  document.getElementById("e1").innerHTML = arr[21];
  document.getElementById("e2").innerHTML = arr[22];
  document.getElementById("e3").innerHTML = arr[23];
  document.getElementById("e4").innerHTML = arr[24];
   } 


   var map = new Array();
function call()
{
   for( let i=0;i<25;i++)
   {
      map[arr[i]]=i+1;
   }
  }


var brry =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var sum =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function a0()
{
brry[0]=1;
sum[0]=1;

  document.getElementById("a0").style.backgroundColor = "teal";
  document.getElementById("a0j").style.backgroundColor = "teal";
  const a0 = document.getElementById("a0").innerHTML;
  
  server_fetch(a0);
  
  document.getElementById("a0").disabled=true;

  bcheck()
}
function a1(num)
{
brry[1]=2
sum[1]=1;
  document.getElementById("a1").style.backgroundColor = "teal";
  document.getElementById("a1j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("a1").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  document.getElementById("a1").disabled=true;
}
function a2(num)
{
brry[2]=3;
sum[2]=1; 
  document.getElementById("a2").style.backgroundColor = "teal";
  document.getElementById("a2j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("a2").innerHTML;
  
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  document.getElementById("a2").disabled=true;
}
function a3(num)
{
brry[3]=4;
sum[3]=1;
  document.getElementById("a3").style.backgroundColor = "teal";
  document.getElementById("a3j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("a3").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  document.getElementById("a3").disabled=true;
}
function a4(num)
{
brry[4]=5;
sum[4]=1;
  document.getElementById("a4").style.backgroundColor = "teal";
  document.getElementById("a4j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("a4").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
    
  document.getElementById("a4").disabled=true;
}
function b0(num)
{
brry[5]=6;
sum[5]=1;
  document.getElementById("b0").style.backgroundColor = "teal";
  document.getElementById("b0j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("b0").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  document.getElementById("b0").disabled=true;
}
function b1(num)
{
brry[6]=7;
sum[6]=1;
  document.getElementById("b1").style.backgroundColor = "teal";
  document.getElementById("b1j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("b1").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
    
  document.getElementById("b1").disabled=true;
}
function b2(num)
{
brry[7]=8;
sum[7]=1;
  document.getElementById("b2").style.backgroundColor = "teal";
  document.getElementById("b2j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("b2").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
    
  document.getElementById("b2").disabled=true;
}

function b3(num)
{
brry[8]=9;
sum[8]=1;
  document.getElementById("b3").style.backgroundColor = "teal";
  document.getElementById("b3j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("b3").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
    
  document.getElementById("b3").disabled=true;
}
function b4(num)
{
brry[9]=10;
sum[9]=1;
  document.getElementById("b4").style.backgroundColor = "teal";
  document.getElementById("b4j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("b4").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("b4").disabled=true;
}
function c0(num)
{
brry[10]=11;
sum[10]=1;
  document.getElementById("c0").style.backgroundColor = "teal";
  document.getElementById("c0j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("c0").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("c0").disabled=true;
}
function c1(num)
{
brry[11]=12;
sum[11]=1;
  document.getElementById("c1").style.backgroundColor = "teal";
  document.getElementById("c1j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("c1").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("c1").disabled=true;
}
function c2(num)
{
brry[12]=13;
sum[12]=1;
  document.getElementById("c2").style.backgroundColor = "teal";
  document.getElementById("c2j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("c2").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("c2").disabled=true;
}
function c3(num)
{
brry[13]=14;
sum[13]=1;
  document.getElementById("c3").style.backgroundColor = "teal";
  document.getElementById("c3j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("c3").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("c3").disabled=true;
}
function c4(num)
{
brry[14]=15;
sum[14]=1;
  document.getElementById("c4").style.backgroundColor = "teal";
  document.getElementById("c4j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("c4").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("c4").disabled=true;
}
function d0(num)
{
brry[15]=16;
sum[15]=1;
  document.getElementById("d0").style.backgroundColor = "teal";
  document.getElementById("d0j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("d0").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("d0").disabled=true;
}
function d1(num)
{
brry[16]=17;
sum[16]=1;
  document.getElementById("d1").style.backgroundColor = "teal";
  document.getElementById("d1j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("d1").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("d1").disabled=true;
}
function d2(num)
{
brry[17]=18;
sum[17]=1;
  document.getElementById("d2").style.backgroundColor = "teal";
  document.getElementById("d2j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("d2").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("d2").disabled=true;
}
function d3(num)
{
brry[18]=19;
sum[18]=1;
  document.getElementById("d3").style.backgroundColor = "teal";
  document.getElementById("d3j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("d3").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  document.getElementById("d3").disabled=true;
}
function d4(num)
{
brry[19]=20;
sum[19]=1;
  document.getElementById("d4").style.backgroundColor = "teal";
  document.getElementById("d4j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("d4").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  document.getElementById("d4").disabled=true;
}
function e0(num)
{
brry[20]=21;
sum[20]=1;
  document.getElementById("e0").style.backgroundColor = "teal";
  document.getElementById("e0j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("e0").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  document.getElementById("e0").disabled=true;
}
function e1(num)
{
brry[21]=22;
sum[21]=1;
document.getElementById("e1").style.backgroundColor = "teal";
  document.getElementById("e1j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("e1").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("e1").disabled=true;
}
function e2(num)
{
  brry[22]=23;
  sum[22]=1;
  document.getElementById("e2").style.backgroundColor = "teal";
  document.getElementById("e2j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("e2").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("e2").disabled=true;
}
function e3(num)
{
  brry[23]=24;
  sum[23]=1;
    document.getElementById("e3").style.backgroundColor = "teal";
  document.getElementById("e3j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("e3").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  
  document.getElementById("e3").disabled=true;
}
function e4(num)
{
  brry[24]=25;
  sum[24]=1;
    document.getElementById("e4").style.backgroundColor = "teal";
  document.getElementById("e4j").style.backgroundColor = "teal";
  bcheck();
  const a0 = document.getElementById("e4").innerHTML;
  if(num!=0)
  {
  server_fetch(a0);
  }
  
  document.getElementById("e4").disabled=true; 
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
      const callnum=map[num];      
    const n=0;
      switch(callnum)
      {
        case 1: a0(n);
        break;
        case 2: a1(n);
        break;
        case 3: a2(n);
        break;
        case 4: a3(n);
        break;
        case 5: a4(n);
        break;
        case 6: b0(n);
        break;
        case 7: b1(n);
        break;
        case 8: b2(n);
        break;
        case 9: b3(n);
        break;
        case 10: b4(n);
        break;
        case 11: c0(n);
        break;
        case 12: c1(n);
        break;
        case 13: c2(n);
        break;
        case 14: c3(n);
        break;
        case 15: c4(n);
        break;
        case 16: d0(n);
        break;
        case 17: d1(n);
        break;
        case 18: d2(n);
        break;
        case 19: d3(n);
        break;
        case 20: d4(n);
        break;
        case 21: e0(n);
        break;
        case 22: e1(n);
        break;
        case 23: e2(n);
        break;
        case 24: e3(n);
        break;
        case 25: e4(n);
        break;
        
      }
 }
 function server_fetch(num)
 {
  socket.emit("num",num);
 }
socket.on("data",data=>{
  
    call();
    callback(data.num)
  
    
  
})
// function even()
// { var sm= 0
//   for(let i=0;i<24;i++)
//   {
//     sm=sm+sum[i];
//   }
//   if(sm%2==0)
//   {
//   document.getElementById("a0").disabled = true
//   document.getElementById("a1").disabled = true
//   document.getElementById("a2").disabled = true
//   document.getElementById("a3").disabled = true
//   document.getElementById("a4").disabled = true
//   document.getElementById("b0").disabled = true
//   document.getElementById("b1").disabled = true
//   document.getElementById("b2").disabled = true
//   document.getElementById("b3").disabled = true
//   document.getElementById("b4").disabled = true
//   document.getElementById("c0").disabled = true;
//   document.getElementById("c1").disabled = true;
//   document.getElementById("c2").disabled = true;
//   document.getElementById("c3").disabled = true;
//   document.getElementById("c4").disabled = true;
//   document.getElementById("d0").disabled = true;
//   document.getElementById("d1").disabled = true;
//   document.getElementById("d2").disabled = true;
//   document.getElementById("d3").disabled = true;
//   document.getElementById("d4").disabled = true;
//   document.getElementById("e0").disabled = true;
//   document.getElementById("e1").disabled = true;
//   document.getElementById("e2").disabled = true;
//   document.getElementById("e3").disabled = true;
//   document.getElementById("e4").disabled = true;
//   }
// }


    
