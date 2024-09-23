document.getElementById('donate-button').addEventListener('click', function () {
    const z1 = document.getElementById('bank').innerText;
    const h1 = parseFloat(z1)
    const a = document.getElementById('amount').value;
    const d = parseFloat(a);
    const b = document.getElementById('total').innerText;
    const c = parseFloat(b);
    const sum = d + c;
    const b1 = h1 + sum;
    document.getElementById('total').innerText = sum;
    document.getElementById('bank').innerText = b1;

})
document.getElementById('donate-buttonn').addEventListener('click', function () {
    const e = document.getElementById('amountt').value;
    const f = parseFloat(e);
    const p = document.getElementById('totall').innerText;
    const x = parseFloat(p);
    const output = f + x;

    document.getElementById('totall').innerText = output;


})
document.getElementById('donate-buttonnn').addEventListener('click', function () {
    const m = document.getElementById('amounttt').value;
    const o = parseFloat(m);
    const c = document.getElementById('totalll').innerText;
    const z = parseFloat(c);
    const result = o + z;

    document.getElementById('totalll').innerText = result;
})

const history = document.getElementById('history');
history.addEventListener('click', function () {
    history.classList.add(
        'bg-green-300',
        'font-bold',
        'rounded-md',

    );
    document.getElementById('history-section').classList.remove('hidden')
})
const p = document.createElement('p');
p.innerText = 'ok fine'

document.getElementById('history-section').appendChild(p);
const donation = document.getElementById('donation');
donation.addEventListener('click', function () {
    donation.classList.remove(
        'bg-green-300',
        'font-bold',
        'rounded-md',

    );
    document.getElementById('hidden').remove('hidden')

})


