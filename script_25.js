// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)


let table = document.createElement('table')
let td = document.getElementsByTagName('td')
document.body.append(table)

for(let i = 0; i < 10; i++){
    let row = table.insertRow()
    for(let j = 0; j < 10; j++){
        let cell = row.insertCell()
    }
}
for(let k = 0; k < td.length; k++){
    td[k].innerHTML = k + 1;
    if(k >= 50){
        td[k].style.background = 'yellow'
    }
}
console.log(td);

