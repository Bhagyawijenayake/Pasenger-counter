

let count = 0
let saveEl = document.getElementById("save-el")


function increment()
{
    
    count++
    console.log(count)
    document.getElementById("count-el").innerText=count
    
}



function save()
{
    let countStr = count + " - "
    
    saveEl.textContent += countStr
    count = 0;
    console.log(count)
    document.getElementById("count-el").innerText=count
}