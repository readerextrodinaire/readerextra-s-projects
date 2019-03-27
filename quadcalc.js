function quadraticformula() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('c').value);
    var c = parseFloat(document.getElementById('b').value);

    var output = document.getElementById('output');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        output.textContent = "you did not enter a proper digit. please try again.";
    }
    else {
        var stepthreeb = ((b ** 2) - (4 * a * c)) ** .5
        var stepfour = 2 * a
        var stepfivea = -b + stepthreeb
        var stepfiveb = -b - stepthreeb
        var stepsixa = stepfivea / stepfour
        var stepsixb = stepfiveb / stepfour
        output.textContent = "your answer is x = " + stepsixa + " , " + stepsixb;
    }
    draw(a, b, c);
}

function draw(a, b, c) {
    var canvas = document.getElementById("canvas");

    if (canvas == null || !canvas.getContext) {return};

    var axes = {};
    var ctx = canvas.getContext("2d");

    axes.x0 = .5 + .5 * canvas.width;  // x0 pixels from left to x=0
    axes.y0 = .5 + .5 * canvas.height; // y0 pixels from top to y=0
    axes.scale = 10;                   // 40 pixels from x=0 to x=1
    axes.doNegativeX = true;
    axes.a = a;
    axes.b = b;
    axes.c = c;

    showAxes(ctx, axes);
    funGraph(ctx, axes);
}

function showAxes(ctx, axes) {
    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    var xmin = axes.doNegativeX ? 0 : axes.x0;

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(28, 28, 28)";
    ctx.moveTo(xmin, axes.y0); ctx.lineTo(w, axes.y0); // x axis
    ctx.moveTo(axes.x0, 0);    ctx.lineTo(axes.x0, h); // y axis
    ctx.stroke();
}

function funGraph(ctx, axes) {
    var xx, yy;
    var dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
    var iMax = Math.round((ctx.canvas.width-x0) / dx);
    var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(28, 28, 153)";

    for (var i = iMin; i <= iMax; i++) {
        xx = dx * i;
        yy = scale * computeequ(xx/scale, axes.a, axes.b, axes.c);
        if (i == iMin) {
            ctx.moveTo(x0+xx,y0-yy);
        }
        else {
            ctx.lineTo(x0+xx,y0-yy);
        }
    }
    ctx.stroke();
}

plusOrMinus(a, b, c); {
  var stepthreeb = ((b ** 2) - (4 * a * c)) ** .5
  var stepfour = 2 * a
  var stepfivea = -b + stepthreeb
  var stepfiveb = -b - stepthreeb
  var stepsixa = stepfivea / stepfour
  var stepsixb = stepfiveb / stepfour
  var pluOrMin = []
}


function computeequ(x, a, b, c) {
    return x == ((-b - Math.sqrt((b) ^ 2 - 4 * a * c)) / 2 * a);
}
