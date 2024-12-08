function appendNumber(num) {
    const display = document.getElementById("display");
    display.value += num;
    updateResult();
}

function appendOperator(op) {
    const display = document.getElementById("display");
    display.value += op;
    updateResult();
}

function appendFunction(func) {
    const display = document.getElementById("display");
    display.value += func;
    updateResult();
}

function clearAll() {
    document.getElementById("display").value = "";
    document.getElementById("result").innerText = "0";
}

function clearDisplay() {
    document.getElementById("display").value = "";
    updateResult();
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    updateResult();
}

function handleEqual() {
    const display = document.getElementById("display");
    if (display.value.trim()) {
        document.getElementById("result").innerText = evalExpression(display.value);
        display.value = ""; // حذف العملية بعد عرض الناتج
    }
}

function updateResult() {
    const display = document.getElementById("display");
    const result = document.getElementById("result");
    if (display.value.trim()) {
        result.innerText = evalExpression(display.value);
    } else {
        result.innerText = "0";
    }
}

function evalExpression(expression) {
    try {
        let formattedExpression = expression
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
            .replace(/π/g, Math.PI);

        let result = eval(formattedExpression);
        return Number.isFinite(result) ? result : "خطأ!";
    } catch (e) {
        return "خطأ!";
    }
}