eDisplayScreen=document.getElementById("displayscreen")
eClearTab=document.getElementById("cleartab")
eMul=document.getElementById("mul")
eDevide=document.getElementById("devide")
eEqualTo=document.getElementById("equalto")
eNine=document.getElementById("nine")
eEight=document.getElementById("eight")
eSeven=document.getElementById("seven")
eSix=document.getElementById("six")
eFive=document.getElementById("five")
eFour=document.getElementById("four")
eThree=document.getElementById("three")
eTwo=document.getElementById("two")
eOne=document.getElementById("one")
eZero=document.getElementById("zero")
ePlus=document.getElementById("plus")
eMinus=document.getElementById("minus")
// list=[]
// let flag=0;
// eZero.addEventListener("click",function()
// {
//     list.push(0);
//     eDisplayScreen.value+="0";
//     if(flag==2){cal();}
// })
// eOne.addEventListener("click",function()
// {
// list.push(1);
// eDisplayScreen.value+="1";
// if(flag==2){cal();}
// })
// eTwo.addEventListener("click",function()
// {
// list.push(2);
// eDisplayScreen.value+="2";
// if(flag==2){cal();}
// })
// eThree.addEventListener("click",function()
// {
// list.push(3);
// eDisplayScreen.value+="3";
// if(flag==2){cal();}
// })
// eFour.addEventListener("click",function()
// {
// list.push(4);
// eDisplayScreen.value+="4";
// if(flag==2){cal();}
// })
// eFive.addEventListener("click",function()
// {
// list.push(5);
// eDisplayScreen.value+="5";
// if(flag==2){cal();}
// })
// eSix.addEventListener("click",function()
// {
// list.push(6);
// eDisplayScreen.value+="6";
// if(flag==2){cal();}
// })
// eSeven.addEventListener("click",function()
// {
// list.push(7);
// eDisplayScreen.value+="7";
// if(flag==2){cal();}
// })
// eEight.addEventListener("click",function()
// {
// list.push(8);
// eDisplayScreen.value+="8";
// if(flag==2){cal();}
// })
// eNine.addEventListener("click",function()
// {
// list.push(9);
// eDisplayScreen.value+="9";
// if(flag==2){cal();}
// })
// eMul.addEventListener("click",function()
// {
//     // let result=cal("*");
//     // eDisplayScreen.value+=`result`;
//     list.push("*");
// eDisplayScreen.value+="*";
// flag+=1;
// })
// eDevide.addEventListener("click",function()
// {
// list.push("/");
// eDisplayScreen.value+="/";
// flag+=1;
// })
// ePlus.addEventListener("click",function()
// {
// list.push("+");
// eDisplayScreen.value+="+";
// flag+=1;
// })
// eMinus.addEventListener("click",function()
// {
// list.push("-");
// eDisplayScreen.value+="-";
// flag+=1;
// })
// eClearTab.addEventListener("click", function()
// {
// eDisplayScreen.value="";
// })

// eEqualTo.addEventListener("click",function()
// {
//     eDisplayScreen.value=eval(eDisplayScreen.value)
// })
eClearTab.addEventListener("click", function()
{
eDisplayScreen.value="";
})

eEqualTo.addEventListener("click",function()
{
    eDisplayScreen.value=eval(eDisplayScreen.value)
})
let t=document.getElementsByClassName("element");
for(let i=0;i<t.length;i++)
{
    let x=t[i];
    x.addEventListener("click",function()
    {
        eDisplayScreen.value += x.innerHTML;
        console.log(eDisplayScreen.value);
    })
}














// function cal()
// {
//     let x;
//     while(list.pop()!=='*' ||)
//     {

//     }
//     if(operator==="*")
//     {
//         list
//     }
// }


