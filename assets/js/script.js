let display = document.getElementById('display');

let button = Array.from(document.getElementsByClassName('button'));

let result = '';

button.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {

            case '=':
                result = display.innerHTML;
                console.log(eval(result));

            case 'C':
                display.innerText = '';
                break;

            default:
                display.innerText += e.target.innerText;
        }
    });
});