function createTable(width, height, color, border) {
    document.write(
        `<table width=${width}px, height=${height}px> 
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

createTable(200, 100, green, 5)