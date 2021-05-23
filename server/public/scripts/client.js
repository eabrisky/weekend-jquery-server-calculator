$(readyNow)

function readyNow () {
    console.log('in readyNow');
    

    // C L I C K   L I S T E N E R S

    $('#plus').on('click', handlePlus);
    $('#minus').on('click', handleMinus);
    $('#divide').on('click', handleDivide);
    $('#multiply').on('click', handleMultiply);

    $('#equalsBtn').on('click', handleEquals);
    $('#clearBtn').on('click', handleClear);
} // end readyNow

// let submittedNumbers = [];
let operator;

function handleEquals(){
    
    console.log('in handleEquals');
  
    let submittedNumbers = {
        numberOne: $('#inputOne').val(),
        operator: operator,
        numberTwo: $('#inputTwo').val()
    };
    // $('#inputOne').push
    // $('#inputTwo').push
    
    $.ajax({
        method: 'POST',
        url: '/numbers',
        data: submittedNumbers
    })
} // end handleEquals fn

function handleClear(){
    
} // end handleClear fn

function handlePlus(){
    operator = '+';
} // end handlePlus fn

function handleMinus(){

} // end handleMinus fn

function handleDivide(){

} // end handleDivide fn

function handleMultiply(){

} // end handleMultiply fn