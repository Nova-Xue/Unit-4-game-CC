$(document).ready(function(){
    var winCount = 0;
    var lossCount = 0;
    var guessCurrent = 0;
    var numArray = [];
    function getRandomGuess (){//get 6 random number from 1-15 and put in a set
        var numSet = new Set();
        var guessNum =0;
        for(;;){
            numSet.add(Math.floor(Math.random()*15+1));
            if(numSet.size == 6) break;
        }
       numArray = Array.from(numSet);//numbers with index in numArray
        for(var i = 0;i<numArray.length;i++){
            var ranTimes = Math.floor(Math.random()*3+1);
            guessNum += numArray[i]*ranTimes;
        }
       return guessNum;
    }
    function reset(){
        $("#guessNum").text(getRandomGuess());
        $("#guessCurrent").text(guessCurrent);
        $("#wins").text(winCount);
        $("#losses").text(lossCount);
        for(var i = 0;i<numArray.length;i++){
            $(".crys"+(i+1)+"-num").html(numArray[i]);
        }
        
    } 
    $(".reset").on("click",function(){
        reset();
    });
    $(".crys").on("mousedown",function(){
        $(this).children("img").hide();
    });
    $(".crys").on("mouseup",function(){
        $(this).children("img").show();
    });
    reset();

});