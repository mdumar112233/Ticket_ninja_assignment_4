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

// SHORT FUNCTION FOR PLUS AND MINUS BTN
function quantityHandler(id, isIncrease){
    var ticketQuantity = document.getElementById(id);
    var numberQuantity = parseInt(ticketQuantity.value);
    let initalValue = numberQuantity;
    if(isIncrease == true){
        var totalTicket = numberQuantity + 1;
    }
    if(isIncrease == false){
        if(initalValue > 0){
        var totalTicket = numberQuantity - 1;
        }
        else{
            return '0';
        }
    }
    ticketQuantity.value = totalTicket;
    // document.getElementById(id).innerText = '0';
}

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
    formOpenClose(bookingForm, 'none');
    const bookingConfirm = document.getElementById('ticket-confirm');
    formOpenClose(bookingConfirm, 'block');

    const totalAmount = document.getElementById('total').innerText;
    document.getElementById('total-amount').innerHTML = totalAmount;
    if(totalAmount === '$0'){
        formOpenClose(bookingForm, 'block');
        formOpenClose(bookingConfirm, 'none');
    }
})

function formOpenClose(id, display){
    id.style.display = display;
}

















