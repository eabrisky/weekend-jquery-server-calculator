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
    $('#inputOne').val('');
    $('#inputTwo').val('');
} // end handleClear fn



function getNumbers(){
    $.ajax({
        method: 'GET',
        url: '/numbers'
    }).then(function (response){
        $('#inputOne').empty();
        $('#inputTwo').empty();
        console.log(response);
        for(let operation of response){
            $('#numList').append(`
            <li>
                ${operation.numberOne} ${operation.operator} ${operation.numberTwo} = ${operation.answer}
            </li>
        `)
            $('#answerText').text(`${operation.answer}`)
        }
    })
} // end getNumbers fn



function handlePlus(){
    operator = '+';
} // end handlePlus fn

function handleMinus(){
    operator = '-';
} // end handleMinus fn

function handleDivide(){
    operator = '/';
} // end handleDivide fn

function handleMultiply(){
    operator = '*';
} // end handleMultiply fn