function showPrimeNumber()
    {
        let num = +document.getElementById('quantity').value;
        // Số lượng số nguyên tố đầu tiên cần hiển thị
        if (num - Math.floor(num)) document.getElementById('result').innerText = "Số lượng phải là một số nguyên dương!"
        // Kiểm tra xem số nhập vào có phải số nguyên hay không
        else
            {
                if (num <= 0) document.getElementById('result').innerText = "Số lượng phải là một số nguyên dương!"
                else if (num === 1) document.getElementById('result').innerText = "1 số nguyên tố đầu tiên là: 2."
                else
                    {
                        let count = 0;      // Đếm số lượng số nguyên tố đã hiển thị
                        let x = 3;          // Số nguyên cần kiểm tra xem có phải là số nguyên tố hay không
                        let str = "";       // Chuỗi để lưu dãy số nguyên tố
                        let mod;            // Số dư trong phép chia số nguyên cần kiểm tra cho các số nhỏ hơn từ 2 đến số đó
                        let testMod = true; // Kiểm tra số dư xem có số dư nào bằng 0 hay không
                        while (count < num - 1)
                            {
                                for (i = 2; i < x; i++)
                                    {
                                        mod = x % i;
                                        testMod &&= mod;
                                        if (!testMod) break;
                                    }
                                if (testMod)
                                    {
                                        if (count === num - 2) str += x + '.';
                                        else str += x + '; ';
                                        count += 1;
                                    };
                                x += 1;
                                testMod = true;
                            }
                        document.getElementById('result').innerText = num + " số nguyên tố đầu tiên là: 2; " + str
                    }
            }
    }