function myRand() {
    var low = parseInt(document.getElementsByClassName('low')[0].value);
    var up = parseInt(document.getElementsByClassName('up')[0].value);
    if (up > 100){
        alert ("Up cannot be greater than 100!");
        return;
    }
    if (low < 1 || low > up) {
        alert ("low should be bigger than one and smaller then up!");
        return;
    }
    var result = Math.floor(Math.random() * (up - low + 1)) + low;
    document.getElementById('result').innerHTML = result;
}
