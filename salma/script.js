function submitOrder() {
    var name=document.getElementById('name').value;
    var name=document.getElementById('address').value;
    var name=document.getElementById('phone').value;
    var name=document.getElementById('order').value;

    if (name && address && phone && order) {
        alert('Order will be sent the next day!')
    }
}
function submitFeedback() {
    var name=document.getElementById('name').value;
    var name=document.getElementById('email').value;
    var name=document.getElementById('feedback').value;

    if (name && email && feedback) {
        alert('Thank you for your feedback and for choosing EL MAGO RESTAURANT!')
    }
}