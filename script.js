function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (p * years * rate) / 100;
    var years = new Date().getFullYear()+parseInt(years);

    if(p == "")
    {
        alert('Please fill out Amount');
        p.focus();
        return false;
    }
    if(p<=0)
    {
        alert("Amount must be greater than Zero ");
        p.focus();
        return false;
    }
    document.getElementById("result").innerHTML = "If you deposit " + p + ", \<br> at an interest rate of " + rate + "%. \<br> You will receive an amount of " + interest + ",\<br> in year " + years
    return true;
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
