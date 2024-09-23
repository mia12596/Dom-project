// document.getElementById('donate-button').addEventListener('click', function () {
//     const z1 = document.getElementById('bank').innerText;
//     const h1 = parseFloat(z1)
//     const a = document.getElementById('amount').value;
//     const d = parseFloat(a);
//     const b = document.getElementById('total').innerText;
//     const c = parseFloat(b);
//     const sum = d + c;
//     const b1 = h1 + sum;
//     document.getElementById('total').innerText = sum;
//     document.getElementById('bank').innerText = b1;

// })
document.getElementById('donate-button').addEventListener('click', function () {
    const z1 = document.getElementById('bank').innerText;
    const h1 = parseFloat(z1);
    const a = document.getElementById('amount').value;
    const d = parseFloat(a);
    const b = document.getElementById('total').innerText;
    const c = parseFloat(b);
    const sum = d + c;
    const b1 = h1 + sum;

    document.getElementById('total').innerText = sum;
    document.getElementById('bank').innerText = b1;

    // Show the popup modal
    document.getElementById('popup-modal').classList.remove('hidden');
});

// Close the popup modal when the 'Close' button is clicked
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup-modal').classList.add('hidden');
});




// Get the donation and history buttons
const donationButton = document.getElementById('donation');
const historyButton = document.getElementById('history');

// Event listener for Donation button
donationButton.addEventListener('click', function () {
    // Change Donation button to active (green)
    donationButton.classList.remove('bg-gray-200');
    donationButton.classList.add('bg-[rgb(180,240,97)]');

    // Change History button to inactive (gray)
    historyButton.classList.remove('bg-[rgb(180,240,97)]');
    historyButton.classList.add('bg-gray-200');

});

// Event listener for History button
historyButton.addEventListener('click', function () {
    // Change History button to active (green)
    historyButton.classList.remove('bg-gray-200');
    historyButton.classList.add('bg-[rgb(180,240,97)]');

    // Change Donation button to inactive (gray)
    donationButton.classList.remove('bg-[rgb(180,240,97)]');
    donationButton.classList.add('bg-gray-200');
    document.getElementById('hidden').classList.add('hidden');

});


