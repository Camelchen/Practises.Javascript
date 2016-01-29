ShowHeader();

function factorial(num) {
    if (num <= 0) {
        return "invalid value";
    } else {
        if ( num === 1) {
            return 1;
        } else {
            var tmp = num;
            var formula = num;
            while (num-- > 2) {
                tmp *= num;
                formula = formula + "*" + num.toString();
            }
            document.write(formula + "*1 = ");
            return tmp;
        }
    }
}

var result = factorial(8);
ShowOutput(result);

function factorial_recur(num) {
    if (num <= 0) {
        return "invalid value";
    } else {
        if (num === 1) {
            document.write(num);
            return 1;
        } else {
            document.write(num + "*");
            return (num * factorial_recur(num - 1));
        }
        
    }
}

var result_recur = factorial_recur(8);
ShowOutput(" = " + result_recur);