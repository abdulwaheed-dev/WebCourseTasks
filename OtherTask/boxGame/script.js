//box-game
let counter = 1;
window.onkeydown = function(e){
    if(e.keyCode == 37){
        //left-key
        if(counter==1){
            document.getElementById(counter).classList.remove('bcolor');
            counter=9;
            document.getElementById(counter).classList.add('bcolor');
        }
        else{
            document.getElementById(counter).classList.remove('bcolor');
            counter--;
            document.getElementById(counter).classList.add('bcolor');
        }
    }
    if(e.keyCode == 38){
        //up-key
        if(counter == 3){
            document.getElementById(counter).classList.remove('bcolor');
            counter=8;
            document.getElementById(counter).classList.add('bcolor');                    
        } else if(counter == 2){
            document.getElementById(counter).classList.remove('bcolor');
            counter=7;
            document.getElementById(counter).classList.add('bcolor');                    
        } else if(counter == 1){
            document.getElementById(counter).classList.remove('bcolor');
            counter=9;
            document.getElementById(counter).classList.add('bcolor');                    
        }
        else{
            document.getElementById(counter).classList.remove('bcolor');
            counter-=3;
            document.getElementById(counter).classList.add('bcolor');
        }
    }
    if(e.keyCode == 39){
        //right-key
        if(counter==9){
            document.getElementById(counter).classList.remove('bcolor');
            counter = 1;
            document.getElementById(counter).classList.add('bcolor');
        }
        else{
            document.getElementById(counter).classList.remove('bcolor');
            counter++;
            document.getElementById(counter).classList.add('bcolor');
        }
    }
    if(e.keyCode == 40){
        //down-key
        if(counter == 7){
            document.getElementById(counter).classList.remove('bcolor');
            counter=2;
            document.getElementById(counter).classList.add('bcolor');                    
        } else if(counter == 8){
            document.getElementById(counter).classList.remove('bcolor');
            counter=3;
            document.getElementById(counter).classList.add('bcolor');
        }
        else if(counter == 9){
            document.getElementById(counter).classList.remove('bcolor');
            counter=1;
            document.getElementById(counter).classList.add('bcolor');
        }
        else{
            document.getElementById(counter).classList.remove('bcolor');
            counter+=3;
            document.getElementById(counter).classList.add('bcolor');
        }
    }
}