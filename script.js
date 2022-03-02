function comput()
{
    var p = document.getElementById("principal").nodeValue;
    var rate = document.getElementById("rate").nodeValue;
    var years = document.getElementById("years").nodeValue;

    if(p == "")
    {
        alert('Please fill out Amount');
        p.focus();
        return false;
    }
    if(p<=0)
    {
        alert("Amount must be greater than Zero \'0'");
        p.focus();
        return false;
    }
    document.getElementById("result").innerHTML = "If you deposit " + p + ", \<br> at an interest rate of " + rate + "%. \<br> You will receive an amount of " + interest + ",\<br> in year " + years
    return true;
}

function updateRate()
{
    var rateval = document.getElementById("rate").nodeValue;
    document.getElementById("rate_val").innerText = rateval;
}