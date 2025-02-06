document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const price = document.getElementById('textPrice').value;
    const priceFloat = parseFloat(price);
    const text = document.getElementById('text').value;
    const textFloat = parseFloat(text);
    const stat = document.getElementById('stat').value;
    const statfloat = parseFloat(stat)
    console.log(statfloat)
    
    
    const prices = priceFloat/11.664;
    const finalPrice = prices*textFloat;
    document.getElementById('stat').innerText = finalPrice
    // console.log(finalPrice)
})