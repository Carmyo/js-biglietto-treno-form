

document.getElementById('genera').addEventListener("click", function () {

    const age = document.getElementById('age').value;
    // se minorenne x altrimenti y

    const distance = document.getElementById('distance').value;


    const earlyprice = distance * 0.21;

    let discount = 0;
    if (age == 'Minorenne') {
        discount = (earlyprice / 100 * 20);
    }

    if (age == 'Senior') {
        discount = (earlyprice / 100 * 40);
    };

    console.log(discount);
    console.log(distance);
    const finalprice = earlyprice - discount;

    document.getElementById('price').innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", }).format(finalprice);
})