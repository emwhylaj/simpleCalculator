(function(){
    let display = document.querySelector("#display");
    let buttons = document.querySelectorAll(".btn");
    let clearscreen = document.querySelector(".btn-clear");
    let equalTo = document.querySelector(".btn-equal");

    let count = 0
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let myValue = e.target.dataset.num;
            if(count > 0){

                if(isNaN(myValue)){
                    display.value += myValue;
                    count = 0;
                }else{
                    clearScreen();
                    count = 0;
                   
                }
                
            }
            
            if((!display.value.includes()) & (myValue === myValue)){
                display.value += myValue;
            }
            // // if((display.value.includes()) &(myValue === myValue)){
            // //     display.value += myValue;
            // }
                
            
            
        });
    });

    equalTo.addEventListener('click',function(e){
        if (display.myValue === " "){
            display.value = 'Input Some Data';
        }else{
            let answer = eval(display.value);
            display.value = answer;
            count = count + 1;
        }
    })

    clearscreen.addEventListener('click',function(e){
        display.value = '';
    })
    
    function clearScreen(){
        
            display.value = '';
        
    
    }
})