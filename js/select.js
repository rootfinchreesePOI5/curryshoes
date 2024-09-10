

// Function to get  parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get('name'),
        price: parseFloat(params.get('price').replace('$', '')),
        img: params.get('img')
    };
}


function calculateTotal(price, quantity, deliveryFee) {
    const total = price * quantity + deliveryFee;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

function displaySelectedItem() {
    const selectedItem = getQueryParams();


    document.querySelector('.selected-items img').src = selectedItem.img;
    document.getElementById('name').textContent = selectedItem.name;
    document.getElementById('price').textContent = `$${selectedItem.price.toFixed(2)}`;


    document.getElementById('input').value = 1;


    const deliveryFees = {
        "Kenya": 100,
        "Somalia": 150,
        "UK": 300,
        "USA": 250
    };

    calculateTotal(selectedItem.price, 1, 0);

    document.getElementById('input').addEventListener('input', function() {
        const quantity = parseInt(this.value) || 1;
        const selectedCountry = document.getElementById('location').value;
        const deliveryFee = deliveryFees[selectedCountry] || 0;
        calculateTotal(selectedItem.price, quantity, deliveryFee);
    });


    document.getElementById('location').addEventListener('change', function() {
        const selectedCountry = this.value;
        const deliveryFee = deliveryFees[selectedCountry] || 0;
        const quantity = parseInt(document.getElementById('input').value) || 1;
        calculateTotal(selectedItem.price, quantity, deliveryFee);
    });
}

// Call the function to display the selected item
displaySelectedItem();

