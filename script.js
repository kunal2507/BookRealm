
let cart = [];
  let total = 0;

  function addToCart(bookName, price) {
    cart.push({ bookName, price });
    total += price;
    updateCart();
  }

  function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;
    updateCart();
  }

  function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const totalAmount = document.getElementById("totalAmount");
    const cartTable = document.getElementById("cartTable");
    const tbody = cartTable.querySelector("tbody");
    
    tbody.innerHTML = "";

    if (cart.length === 0) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 3;
    emptyCell.textContent = "Oops!! your cart is empty";
    emptyRow.appendChild(emptyCell);
    tbody.appendChild(emptyRow);
  } else {
    
    cart.forEach((item, index) => {
      const row = document.createElement("tr");
      const bookCell = document.createElement("td");
      bookCell.textContent = item.bookName;
      const priceCell = document.createElement("td");
      priceCell.textContent = `Rs${item.price}`;
      const actionsCell = document.createElement("td");
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.onclick = () => removeFromCart(index);
      actionsCell.appendChild(removeButton);
      
      row.appendChild(bookCell);
      row.appendChild(priceCell);
      row.appendChild(actionsCell);
      
      tbody.appendChild(row);
    });
  }
    totalAmount.textContent = total;
  }

  function openCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "block";
  }

  function closeCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "none";
  }

  
  function checkout() {
    // Check if the cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty. Please add books before checking out.");
        return;
    }

    // Create a confirmation message with selected books and total amount
    let confirmationMessage = "You have selected the following books:\n\n";
    cart.forEach((item) => {
        confirmationMessage += `${item.bookName} - Rs${item.price}\n`;
    });
    confirmationMessage += `\nTotal Amount: Rs${total}`;

    // Show a confirmation dialog to the user
    if (window.confirm(confirmationMessage)) {
        // This is where you would typically integrate with a real payment gateway
        // For demonstration, we'll simply show an alert indicating the order is booked
        alert("Order booked successfully!");

        // Clear the cart after a successful order
        cart = [];
        total = 0;
        updateCart();
    }
}
 const cartIcon = document.getElementById("cartIcon");
  cartIcon.addEventListener("click", openCart);

  