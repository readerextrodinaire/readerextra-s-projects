function regTic() {
    document.getElementById("allTic").style.display = ("none");
    document.getElementById("supTic").style.display = ("none");
    var regTic = document.getElementById("regTic");
    regTic.textContent = "You Chose Regular Tickets,\nInsert X Num Of Tickets,\nThen Double Click";
    var ticNum = document.createElement("input");
    ticNum.style.width = (4);
    document.getElementById("info").appendChild(ticNum);
    ticNum.addEventListener("dblclick", regMath);
    function regMath() {
        var check = document.getElementById("check");
        check.style.display = ("none");
        var name = document.createElement("input");
        name.style.width = (2);
        document.getElementById("cheque").appendChild(name);
        var Credit = document.createElement("input");
        name.style.width = (2);
        document.getElementById("cheque").appendChild(Credit);
        var Pin = document.createElement("input");
        name.style.width = (2);
        document.getElementById("cheque").appendChild(Pin);

    }
}
regTic();