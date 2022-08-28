const distance = prompt('Quanta distanza vuoi percorrere?');
const age = prompt('Quanti anni hai?');
let earlyprice = distance * 0.21 + ' €';
console.log(earlyprice);
let discount = 0

if (18 > (age)) {
    discount = (earlyprice / 100 * 20);
    console.log(earlyprice / 100 * 20) + ' €';
}
if (65 < (age)) {
    discount = (earlyprice / 100 * 40);
    console.log(earlyprice / 100 * 40 + ' €');
}
