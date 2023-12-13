console.log('what´s up old')
const d = document,
    $select = d.querySelectorAll('[themeChange]')
    $screen = d.querySelector(".screen__result"),
    $inputs = d.querySelector('.inputs'),
    $number = d.querySelectorAll(".numbers__el"),
    $del = d.getElementById("del"),
    $equal = d.getElementById("equal"),
    $reset = d.getElementById("reset"),
    $operators = d.querySelectorAll(".operators"),
    data = [],
    $themes = d.getElementById("theme1__range"),
    $themes1 = d.getElementById("theme2__range"),
    $themes2 = d.getElementById("theme3__range");
let result = 0,
    operator,
    operatorSign,
    op = true,
    values = '',
    values2 = '',
    i = 0;

function del(value = 0) {
    let fragment = value.split('');
    fragment.pop();
    return fragment.join('');
}
del('hola')
d.addEventListener("click", e => {
    if (e.target === $reset) {
        op = true;
        values = '';
        values2 = '';
        $screen.textContent = 0;
        // El método splice() cambia el contenido de un array eliminando 
        // elementos existentes y/o agregando nuevos elementos.
        data.splice(0, data.length);
    }
    if (e.target === $del) {
        if (op) {
            values = del(values);
            // console.log(values)
            $screen.textContent = values;
        }
        else {
            values2 = del(values2);
            // console.log(values2)
            $screen.textContent = values2;
        }
    }
    if (e.target === $equal) {
        data.push(values2);
        result = 0;
        if (data.length > 1) {
            console.log(operator == 0)
            if (operator == 0) {
                result = Number(data[data.length - 2]) + Number(data[data.length - 1]);
            } else if (operator == 1) {
                result = Number(data[data.length - 2]) - Number(data[data.length - 1]);
            } else if (operator == 2) {
                result = Number(data[data.length - 2]) / Number(data[data.length - 1]);
            } else if (operator == 3) {
                result = Number(data[data.length - 2]) * Number(data[data.length - 1]);
            }
            $screen.textContent = result;
            data.push(result);
        } else {
            $screen.textContent = values;
        }
        op = true
        values = '';
        values2 = '';
    }

    $number.forEach(el => {
        if (op) {
            if (e.target === el) {
                values += el.dataset.value;
                $screen.textContent = values;
            }
        } else {
            if (e.target === el) {
                values2 += el.dataset.value;
                $screen.textContent += el.dataset.value;
            }
        }
    })

    $operators.forEach(el => {
        if (e.target === el) {
            operator = el.dataset.value;
            operatorSign = el.dataset.sign;
            $screen.textContent = values + operatorSign;
            op = false;
            data.push(values)
        }
    })
})
console.log($select)
d.addEventListener('click', e=>{
    if(e.target === $themes){
        $select.forEach(element =>{
            element.classList.remove('themetwo');
            element.classList.remove('themethr');
        })
    }
    if(e.target === $themes1){
        $select.forEach(element =>{
            element.classList.add('themetwo');
            element.classList.remove('themethr');
        })
    }
    if(e.target === $themes2){
        $select.forEach(element =>{
            element.classList.remove('themetwo');
            element.classList.add('themethr');
        })
    }
})