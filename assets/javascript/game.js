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
    $(".crys1").on("click",function(){

    });
    $(".crys1").on("mousedown",function(){
        
        $(".img1").hide();
    });
    $(".crys1").on("mouseup",function(){
        $(".img1").show();

    });
    $(".crys2").on("click",function(){
        
    });
    $(".crys2").on("mousedown",function(){
        
        $(".img2").hide();
    });
    $(".crys2").on("mouseup",function(){
        $(".img2").show();

    });
    $(".crys3").on("click",function(){
        
    });
    $(".crys3").on("mousedown",function(){
        
        $(".img3").hide();
    });
    $(".crys3").on("mouseup",function(){
        $(".img3").show();

    });
    $(".crys4").on("click",function(){
        
    });
    $(".crys4").on("mousedown",function(){
        
        $(".img4").hide();
    });
    $(".crys4").on("mouseup",function(){
        $(".img4").show();

    });
    $(".crys5").on("click",function(){
        
    });
    $(".crys5").on("mousedown",function(){
        
        $(".img5").hide();
    });
    $(".crys5").on("mouseup",function(){
        $(".img5").show();

    });
    $(".crys6").on("click",function(){
        
    });
    $(".crys6").on("mousedown",function(){
        
        $(".img6").hide();
    });
    $(".crys6").on("mouseup",function(){
        $(".img6").show();

    });
    reset();

});