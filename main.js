let firstNumber = + prompt('Введите 1-число ')
   
    if (isNaN(firstNumber) || firstNumber == '') {
     
        alert('Не число')
        firstNumber = + prompt('Введите 1-число ')
       
    }
   
    let secondNumber = + prompt('Введите 2-число ')
   
    if (isNaN(secondNumber ) || secondNumber == '') {
      
        alert('Не число')
        secondNumber  = + prompt('Введите 2-число ')
 
    }
   
    switch(true) {
 
        case (firstNumber > secondNumber ):
        alert('Первое число больше второго');
        break;
 
        case (firstNumber < secondNumber ):
        alert('Второе число больше первого');
        break;
 
        case (firstNumber == secondNumber ):
        alert('Числа равны');
        break;
 
    }