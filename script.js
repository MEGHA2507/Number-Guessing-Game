const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
});

let numberGuessedComputer;
function rangeDefined(){
    let num1 = document.getElementById('num1').value;
    console.log(num1);
    console.log(typeof(num1));

    let num2 = document.getElementById('num2').value;
    console.log(num2);

    if(num1 === '' || num2 === ''){
        alert('Please enter the range of numbers for the game.');
    }else{
        let a = Math.random();
    
        numberGuessedComputer = Math.floor(Math.random() * (parseInt(num2) - parseInt(num1) + 1)) + parseInt(num1);
        console.log(numberGuessedComputer);

        document.querySelector('.play').style.display = 'block';
    }
}

let counter = 0;
function userGuessedNumber(){

    let numberGuessedUser = document.getElementById('selectedNum').value;
    console.log(numberGuessedUser);

    if(parseInt(numberGuessedUser) ===  parseInt(numberGuessedComputer)){
        document.querySelector('.won').style.display = 'block';
        document.querySelector('.more').style.display = 'none';
        document.querySelector('.less').style.display = 'none';
        counter = counter + 1;
    }else{
        if(numberGuessedUser < numberGuessedComputer){
            document.querySelector('.less').style.display = 'block';
            document.querySelector('.won').style.display = 'none';
            document.querySelector('.more').style.display = 'none';
            counter = counter + 1;
        }else{
            document.querySelector('.more').style.display = 'block';
            document.querySelector('.won').style.display = 'none';
            document.querySelector('.less').style.display = 'none';
            counter = counter + 1;
        }      
    }
    console.log(counter); 

    if(counter === 3){
        document.querySelector('.maxAttempt').style.display = 'block';
        document.getElementById('selectedNum').disabled = true;
    }

    

}






