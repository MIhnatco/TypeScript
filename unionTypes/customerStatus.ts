


// Define the OrderStatus union type
type OrderStatus = 'new' | 'processing' | 'shipped' | 'delivered' | 'canceled';

// Create the processOrder function
function processOrder(status: OrderStatus) {
    switch (status) {
        case 'new':
            // Log a message for a new order
            return "We've got your order! We'll drop you another email when your order ships.";
        case 'processing':
            return 'Your order is being processed now.'
        case 'shipped':
            return 'Your order has been shipped!'
        case 'delivered':
            return "Your order has been delivered."
        case 'canceled':
            return "Your order has been canceled"
        default:
            return 'A delivery exception for an unforeseen reason'
    }
}

// Process a sample order with different statuses and log messages
console.log(processOrder('new'))
console.log(processOrder('shipped'))
console.log(processOrder('delivered'))
console.log(processOrder('processing'))
console.log(processOrder('canceled'))
