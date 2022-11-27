function showBangCuuChuong()
    {   
        let text = ""; //Nếu không gán giá trị rỗng ban đầu cho text thì text lấy giá trị undefined; khi cộng chuỗi ở hàm bên dưới sẽ hiển thị thêm undefined nữa
        for (i = 1; i <= 9; i++) {
            for (j = 2; j <= 9; j++) {
                if (j === 2) text += '<tr><td class="td1">' + j + 'x' + i + '=' + i * j + '</td>';
                else if (j === 9) text += '<td class="td1">' + j + 'x' + i + '=' + i * j + '</td></tr>';
                else text += '<td class="td1">' + j + 'x' + i + '=' + i * j + '</td>';
                }
            }
        document.getElementById('result').innerHTML = '<table class="table1">' + text + '</table>';
    }
