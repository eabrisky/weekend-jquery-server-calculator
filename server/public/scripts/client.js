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

    getNumbers();
} // end readyNow


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
    }).then(function (response){
        console.log(response);
        getNumbers();
    })
} // end handleEquals fn

function handleClear(){
    
} // end handleClear fn



function getNumbers(){
    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then(function (response){
        console.log(response);
    })
} // end getNumbers fn


function handlePlus(){
    operator = 'plus';
} // end handlePlus fn

function handleMinus(){
    operator = 'minus';
} // end handleMinus fn

function handleDivide(){
    operator = 'divide';
} // end handleDivide fn

function handleMultiply(){
    operator = 'multiply';
} // end handleMultiply fn