$(document).ready(function(){
	
    //Initialize variables to store numbers and actions
    var display = $('#display');
	var previousNum = '';
	var currentNum = '';
	var operation = '';
	var lastClick = '';
	
	//Clear display, numbers and actions
	function clear() {
	    display.val('');
	    previousNum = '';
	    currentNum = '';
	    operation = '';
	    lastClick = '';
	}
		
	//Handle the clear button
    $('#clearbutton').click(function(){
	    clear();
	});
	
	//Display clicked numbers
    $('.numbutton').click(function(){
	    if (lastClick == 'equals'){
		    clear();
	    }	
		
	    if (lastClick == 'arithmetic') {
		    previousNum = Number(display.val());
		    display.val('');						
	    }
	    var displayedNumber = display.val();
        var digit = $(this).val();
	    display.val(displayedNumber+digit);			
	    lastClick = 'digit';		
	});
	
	//Return a sum, difference, product or quotient depending on operation type
	function doOperation (operation) {
	    if (operation == 'plus') {
		    return previousNum+currentNum;
	    }
	    else if (operation == 'minus') {
		    return previousNum-currentNum;
	    }
	    else if (operation == 'multiply') {
		    return previousNum*currentNum;
	    }
	    else if (operation == 'divide') {
		    return previousNum/currentNum;
	    }			
	}
	
	//Clear previousNum and operation. Store the number in the display in currentNum.
	function handleOperatorAfterEquals (operation) {
	    previousNum = '';
	    currentNum = Number(display.val());	
	    operation = '';
	}	
		
	//Store the number in the display in currentNum. Call handleOperation and store the value in currentNum. Display currentNum. 
	function handleOperator (operation) {
	    currentNum = Number(display.val());
	    currentNum = doOperation(operation);
	    display.val(currentNum);
	}
	
	//Handle the plus button
	$('#addbutton').click(function(){
	    if (lastClick == 'equals'){
		    handleOperatorAfterEquals(operation);
	    }	
	    else if (operation != '' && previousNum != '' && lastClick != 'arithmetic'){
		    handleOperator(operation);	
	    }
	    operation = 'plus';
	    lastClick = 'arithmetic';
    });
	
	//Handle the minus button
    $('#subtractbutton').click(function(){
	    if (lastClick == 'equals'){
		    handleOperatorAfterEquals(operation);
	    }	
	    else if (operation != '' && previousNum != '' && lastClick != 'arithmetic'){
		    handleOperator(operation);		
	    }
	    operation = 'minus';
	    lastClick = 'arithmetic';
    });
	
	//Handle the multiply button
    $('#multiplybutton').click(function(){
	    if (lastClick == 'equals'){
		    handleOperatorAfterEquals(operation);
	    }		
	    else if (operation != '' && previousNum != '' && lastClick != 'arithmetic'){
		    handleOperator(operation);		
	    }
	    operation = 'multiply';
	    lastClick = 'arithmetic';
    });
	
	//Handle the divide button
    $('#dividebutton').click(function(){
	    if (lastClick == 'equals'){
		    handleOperatorAfterEquals(operation);
	    }		
	    else if (operation != '' && previousNum != '' && lastClick != 'arithmetic'){
		    handleOperator(operation);		
	    }
	    operation = 'divide';
	    lastClick = 'arithmetic';
    });
	
	//Handle the equals button
    $('#equalsbutton').click(function(){
	    if (operation != '' && lastClick != 'arithmetic' && lastClick != 'equals'){
		    handleOperator(operation);	
	    }	
	    lastClick = 'equals';		
	});
});