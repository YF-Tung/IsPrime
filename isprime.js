var textBox = document.getElementById('input_number');
var output = document.getElementById('output');
textBox = document.getElementsByTagName('input')[0];

function isPrime(val) {
    if (val <= 1) return 0;
    for (var i = 2; (i*i <= val) && (i < val); i++) {
        if ((val % i) == 0) return i;
    }
    return val;
}

function eval() {
    var outputStr = '';
    var val = textBox.value;
    try
    {
        outputStr = val;
        val = parseInt(val);
        r = isPrime(val);
        if (val <= 1)
            outputStr = val + ' is not prime';
        else if (val == r)
            outputStr = val + ' is prime';
        else
            outputStr = val + '= ' + r + ' x ' + val/r + ' is not prime';
    } catch {
        outputStr = 'Invalid input: ' + val;
    }

    output.innerHTML = outputStr;
}

// BUG : cannot take large int
// Test case: 9847905879304823

//textBox.addEventListener('keypress', onTextBoxChange);

