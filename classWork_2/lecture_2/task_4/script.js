function createTable(width, height, color, border) {
    document.write(
    `<table width=${width}, height=${height}, style="background-color: ${color}; border:${border}px solid black;"> 
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
        </tr>
    </table>`)
}

createTable(200, 100, "green", 2)