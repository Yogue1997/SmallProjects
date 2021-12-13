let celsius = document.getElementById('celsius')
let fah = document.getElementById('fahrenheit')

celsius.oninput = () => {
    let output = parseFloat(celsius.value) * 9/5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output = (parseFloat((fahrenheit.value) - 32)* 5)/9;
    celsius.value = parseFloat(output.toFixed(2));
};



// const cel = (a) => (a - 32) * 5/9
// console.log(cel(fah));

// const fahrenheit = (a) => (a * 9/5) + 32
// console.log(fahrenheit(celsius));


