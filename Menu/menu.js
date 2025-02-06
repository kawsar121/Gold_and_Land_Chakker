document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const top = document.getElementById('top').value;
    const topFloat = parseFloat(top);
    const bottom = document.getElementById('bottom').value;
    const bottomFloat = parseFloat(bottom);
    const left = document.getElementById('left').value;
    const leftFloat = parseFloat(left);
    const right = document.getElementById('right').value;
    const rightFloat = parseFloat(right);
    const stat = document.getElementById('stat').value;
    const statfloat = parseFloat(stat)
    console.log(statfloat)
    
    
    const first = topFloat + bottomFloat;
    const finalfirst = first/2;
    console.log(finalfirst)
    const second = leftFloat + rightFloat;
    const finalSecond = second/2;
    const final = finalfirst * finalSecond;
    const sotokConverte = final/435.60;
    document.getElementById('stat').innerText = sotokConverte;
    // console.log(sotokConverte)
})