let display = document.getElementById('display');

let button = Array.from(document.getElementsByClassName('button'));

button.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '=':
                display.innerText = eval(display.innerText);
                break;

            case 'C':
                display.innerText = '';
                break;

            default:
                display.innerText += e.target.innerText;
        }
    });
});