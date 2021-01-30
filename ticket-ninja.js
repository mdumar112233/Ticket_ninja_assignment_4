// SHORT FUNCTION FOR PLUS AND MINUS BTN
function quantityHandler(id, isIncrease){
    var ticketQuantity = document.getElementById(id);
    var numberQuantity = parseInt(ticketQuantity.value);
    let initalValue = numberQuantity;
    if(isIncrease == true){
        var totalTicket = numberQuantity + 1;
    }
    if(isIncrease == false && initalValue > 0){
        var totalTicket = numberQuantity - 1;
    }
    ticketQuantity.value = totalTicket;
}

// first class ticket PLUS btn 
    document.getElementById('first-plus-btn').addEventListener('click', function(){
        quantityHandler('first-class-ticket', true);
        ticketCalculation()
})

// first class ticket MINUS btn 
    document.getElementById('first-minus-btn').addEventListener('click', function(){
        quantityHandler('first-class-ticket', false);
        ticketCalculation()
})


// economy ticket PLUS BTN
    document.getElementById('economy-plus-btn').addEventListener('click', function(){
        quantityHandler('economy-ticket', true);
        ticketCalculation()
})

// economy ticket MINUS BTN
    document.getElementById('economy-minus-btn').addEventListener('click', function(){
        quantityHandler('economy-ticket', false);
        ticketCalculation()
})

// TICKET CALCULATION
function ticketCalculation(){
    const firstTicketNumber = calculationValue('first-class-ticket');
    const economyTicketNumber = calculationValue('economy-ticket');

    const totalprice = firstTicketNumber * 150 + economyTicketNumber * 100;
    document.getElementById('subtotal').innerText = '$'+ totalprice;
    const vat = totalprice * 0.10;
    document.getElementById('vat').innerText = '$'+ vat;
    const total = totalprice + vat;
    document.getElementById('total').innerText = '$'+ total;
}

function calculationValue(numberOfTicket){
    const ticketQuantity= document.getElementById(numberOfTicket);
    const quantityNumber = parseInt(ticketQuantity.value);
    return quantityNumber;
}

// CONFORMATION ALERT MESSAGE 
document.getElementById('ticket-book').addEventListener('click', function(){
    const bookingForm = document.querySelector('.booking-form');
    bookingForm.style.display = 'none';
    const bookingConfirm = document.getElementById('ticket-confirm');
    bookingConfirm.style.display = 'block';
    // const totalAmount = 
    ticketCalculation();
    // console.log(totalAmount)
    // bookingConfirm.innerText = "totalAmount";
})

















