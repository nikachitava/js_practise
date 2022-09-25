function createNumber(m, n) {
    if (m < n) {
        for (let i = m; i < n; i++) {
            console.log(i)
        }
    } else {
        for(let i = n; i < m; i++) {
            console.log(i)
        }
    }
}

createNumber(22, 15)