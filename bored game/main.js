function removebtn() {
    document.body.removeChild(YES);
    document.body.removeChild(NO);
};
function removeinpt() {
    document.body.appendChild(firstGuess);
};
function appendbtn() {
    document.body.appendChild(YES);
    document.body.appendChild(NO);
};
function appendinpt() {
    document.body.appendChild(firstGuess);
};
var closing = ["aww... thats too sad,\n\tmust have found something better to do..."];
function main() {
    var a = document.getElementById("a");
    a.textContent = "Hi, if your here, then your bored with nothing better to do.\n\twould you like to play a game?Y/N";
    var YES = document.createElement("button");
    var NO = document.createElement("button");
    YES.textContent = "YES";
    NO.textContent = "NO";
    YES.addEventListener("click", start);
    NO.addEventListener("click", end);
    document.body.appendChild(YES);
    document.body.appendChild(NO);
    function start() {
        var b = document.getElementById("b");
        b.textContent = "Yay, do you want to play a word game or a number game?";
        var WOD = document.createElement("button");
        var NUM = document.createElement("button");
        NUM.textContent = "NUMBER";
        WOD.textContent = "WORD";
        NUM.addEventListener("click", number);
        WOD.addEventListener("click", word);
        document.body.replaceChild(YES, NUM);
        document.body.replaceChild(NO, WOD);
        function number() {
            removebtn();
            NO.style.display = "none";
            var num1 = Math.floor(Math.random() * 10) + 1;
            var attempt = 0;
            var d = document.getElementById("d");
            var e = document.getElementById("e");
            d.textContent = "I'm thinking of a number between 1 and 10...";
            e.textContent = "What is it?";
            firstGuess = document.createElement("input");
            document.body.appendChild(firstGuess);
            while(attempt < 20) {
                if (firstGuess = num1) {
                    removeinpt();
                    win = true;
                    var f = document.getElementById("f");
                    f.textContent = "Yay! you did it! Would you like to go again?"
                    appendbtn();
                    YES.textContent = "YES";
                    NO.textContent = "NO";
                    YES.addEventListener("click", Y);
                    NO.addEventListener("click", N);
                    function Y() {
                        attempt + 1;
                    }
                    function N() {
                        var g = document.getElementById("g");
                        g.textContent = closing[0];
                    }
                };
            };
        };
    };
    function end() {
        var c = document.getElementById("c");
        c.textContent = closing[0];
        exit();
    };

};
main();