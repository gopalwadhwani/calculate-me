const input = document.querySelector('.input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            input.value = '';
        }
        else if (value === '⌫') {
            input.value = input.value.slice(0, -1);
        }
        else if (value === '=') {
            try {
                const expression = input.value.replace(/×/g, '*').replace(/÷/g, '/');
                input.value = eval(expression);
            } catch (error) {
                input.value = 'Error';
            }
        }
        else if (value === '%') {
            const current = parseFloat(input.value);
            if (!isNaN(current)) {
                input.value = current / 100;
            }
        }
        else {
            input.value += value;
        }
    });
});
