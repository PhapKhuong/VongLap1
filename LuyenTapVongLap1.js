function toCount()
    {
        for (i = 1; i <= 100; i++)
            {
                if (i === 99) alert ("Hoàn thành!");
                else alert (i);
            }
    }

function temp()
    {
        let t = +prompt("Hãy nhập thông tin về nhiệt độ!");
        do
            {
                if (isNaN(t)) alert ('Bạn nhập thông tin chưa chính xác!'); 
                if (t > 100) alert ('Hãy giảm nhiệt độ xuống dưới 100!');
                else if (t >= 20) break;
                else alert ('Hãy nâng nhiệt độ lên trên 20!');
                t = +prompt('Hãy nhập thông tin về nhiệt độ!');
            }
        while (true);
    }

function showFibonacci()
    {
        let fn = "";
        for (i = 1; i<= 20; i++)
            {
                if (i === 20) fn += parseInt((1 / 5**0.5) * (((1 + 5**0.5)/2)**i - ((1 - 5**0.5)/2)**i)) + ".";
                else fn += parseInt((1 / 5**0.5) * (((1 + 5**0.5)/2)**i - ((1 - 5**0.5)/2)**i)) + "; ";
            };
        document.getElementById("result3").innerHTML = "20 số đầu tiên trong dãy Fibonaccci là: " + fn;
    }

function sumFibonacci()
    {   
        let sum = 0;
        for (i = 1; i<= 20; i++)
            {
                sum += parseInt((1 / 5**0.5) * (((1 + 5**0.5)/2)**i - ((1 - 5**0.5)/2)**i));
            };
        document.getElementById("result5").innerHTML = "Tổng của 20 số đầu tiên trong dãy Fibonaccci là: " + sum;
    }