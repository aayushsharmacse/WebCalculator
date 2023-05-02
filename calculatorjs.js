eDisplayScreen=document.getElementById("displayscreen")
eClearTab=document.getElementById("cleartab")
eEqualTo=document.getElementById("equalto")


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
