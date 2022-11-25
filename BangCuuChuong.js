function showBangCuuChuong()
    {
        document.write('<table>');
        for (i = 1; i <= 9 ; i++) {
            document.write ('<tr>');
            for (j = 2; j <= 9; j++) {
                document.write
                    (
                        '<td class="style1">' + j + 'x' + i + '=' + i * j + '</td>'
                    )
                }
            document.write ('</tr>');
            }
        document.write('</table>');
    }
