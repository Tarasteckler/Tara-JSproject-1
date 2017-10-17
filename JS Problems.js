/*Tara Steckler
 *Java Script Problems 1-10
 * 10/2/2017
 */


//1. Sleep in
function sleep_in(weekday, vacation) {
    if (vacation == true || weekday == false){
        return true;
    }

    if (weekday == true && vacation == false){
        return false;
    }
}

//2. Monkey Trouble
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == b_smile){
        return true;
    }else{
        return false;
    }
}

// 3. String times
function string_times(x, n) {
    var string = '';
    for (i = 0; i < n; i ++){
        string = string + x;
    }
    return string;
}

// 4. Front times

function front_times(str, n){
    var res = str.substring(0, 3);
    var result = "";
    for (i = 0; i < n; i++){
        result += res;
        }
    return result;
}

// 5. String bits
function string_bits(string) {
    var str = string;
    var n = str.length;
    var bit = " ";
    for (i = 0; i < n; i += 2) {
        bit += str.charAt(i);
    }
    return bit;
}

// 6. Caught speeding

function caughtSpeeding(int, birthday){
    var n = int;
    if (birthday == false){
        if (n <= 60){
            return 0;
        }
        if (n >= 61 && n<= 80){
            return 1;
        }
        if (n >= 81){
            return 2;
        }
    }
    if (birthday == true){
        if (n <= 65) {
            return 0;
        }
        if (n >= 66 && n <= 85){
            return 1;
        }
        if (n >= 86){
            return 2;
        }
    }
}

// 7. Fizz buzz

function fizz_buzz(int){
    var n = int;
    if (n % 3 != 0 && n % 5 != 0){
        return n + "!";
    }
    if (n % 3 == 0 && n % 5 != 0){
        return "Fizz"
    }
    if (n % 5 == 0 && n % 3 != 0){
        return "Buzz";
    }
    if (n % 3 == 0 && n % 5 == 0){
        return "FizzBuzz";
    }
}

// 8. Tea party

function teaParty(tea, candy){
    var t = tea;
    var c = candy;
    if (t < 5 || c < 5){
        return 0;
    }
    if (t >= 2 * c || c >= 2 * t){
        return 2;
    }
    if (t >= 5 && c >= 5 && t != 2 * c && c != 2 * t){
        return 1;
    }
}

// 9. Black jack

function blackjack(intOne, intTwo){
    var x = intOne;
    var y = intTwo;
    if (x > 21 && y > 21){
        return 0;
    }
    if(x > 21 && y < 21){
        return y;
    }
    if (y > 21 && x < 21){
        return x;
    }
    if (21 - x < 21 - y){
        return x;
    }else{
        return y;
    }
}

// 10. Lone sum

function loneSum(x, y, z){
    if(x != y && x != z && y !=z){
       return x + y + z;
    }
    if (x == y && x != z){
        return z;
    }
    if (x == z && x != y){
        return y;
    }
    if (y == z && y != x){
        return x;
    }
    if (x == y && x == z && y == z){
        return 0;
    }
}


function tester() {

    document.getElementById("output1").innerHTML = sleep_in(true, false);
    document.getElementById("output2").innerHTML = monkey_trouble(true, true);
    document.getElementById("output3").innerHTML = string_times('Hi', 3);
    document.getElementById("output4").innerHTML = front_times('Chocolate', 5);
    document.getElementById("output5").innerHTML = string_bits('Hello');
    document.getElementById("output6").innerHTML = caughtSpeeding(65, false);
    document.getElementById("output7").innerHTML = fizz_buzz(15);
    document.getElementById("output8").innerHTML = teaParty(20, 6);
    document.getElementById("output9").innerHTML = blackjack(20, 6);
    document.getElementById("output10").innerHTML = loneSum(20, 6, 6);

}

