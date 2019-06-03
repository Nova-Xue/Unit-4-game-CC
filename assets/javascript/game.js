$(document).ready(function () {
    var winCount = 0;
    var lossCount = 0;
    var guessCurrent = 0;
    var guessNum = 0;
    var numArray = [];
    var isResulted = false;
    function getRandomGuess() {//get 6 random number from 1-15 and put in a set
        var numSet = new Set();
        for (; ;) {
            numSet.add(Math.floor(Math.random() * 15 + 1));
            if (numSet.size == 6) break;
        }
        numArray = Array.from(numSet);//numbers with index in numArray
        for (var i = 0; i < numArray.length; i++) {
            var ranTimes = Math.floor(Math.random() * 3 + 1);
            guessNum += numArray[i] * ranTimes;
        }
        return guessNum;
    }
    function reset() {
        $("#guessNum").text(getRandomGuess());
        $("#guessCurrent").text("");
        $(".result").text("");
        guessCurrent = 0;
        isResulted = false;
        for (var i = 0; i < numArray.length; i++) {
            $(".crys" + i + "-num").html(numArray[i]);
        }

    }
    function showGuess() {
        $("#guessCurrent").text(guessCurrent);
    }
    $(".reset").on("click", function () {
        reset();
    });
    $(".crys").on("mousedown", function () {
        if (isResulted) {
            return false;
        } else {
            $(this).children("img").hide();
        }

    });
    $(".crys").on("mouseup", function () {
        if (isResulted) {
            return false;
        } else {
            $(this).children("img").show();
        }
    });
    $(".crys").on("click", function () {
        if (isResulted) {
            return false;
        } else {
            var numIndex = $(this).children("img").attr("alt");
            var num = numArray[(Number(numIndex))];
            guessCurrent += num;
            if (guessCurrent == guessNum) {
                showGuess();
                var img = $('<img>');
                img.attr("src", "assets/images/iron-man-snap.png")
                img.attr("class", "img-fluid rounded");
                $(".result").append(img);
                // $(".result").text("you win");
                winCount++;
                $("#wins").text(winCount);
                isResulted = true;
                alert("you win");
            } else if (guessCurrent > guessNum) {
                showGuess();
                var img = $('<img>');
                img.attr("src", "assets/images/thanos-snap.jpg");
                img.attr("class", "img-fluid rounded");
                $(".result").append(img);
                // $(".result").text("you lose");
                lossCount++;
                $("#losses").text(lossCount);
                isResulted = true;
                alert("you lose");

            } else {
                showGuess();

            }
        }
    });

    reset();

});