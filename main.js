function calculatePrice() {
    // Get the selected pizza size
    var size = document.querySelector('input[name="size"]:checked').value;

    // Get the number of toppings
    var toppings = document.querySelector('select[name="toppings"]').value;
    var toppingPrice = toppings == "none" ? 0 : (toppings == "one" ? 2 : 3);

    // Calculate the total price
    var price = (size == "small" ? 7 : (size == "medium" ? 10 : 14)) + toppingPrice;

    // Display the price on the webpage
    document.getElementById("price").innerHTML = "$" + price.toFixed(2);
};

