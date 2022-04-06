function rank(st, we, n) {
    let names = st.split(',')
    if (!st.length) return 'No participants'
    if (names.length < n) return 'Not enough participants'
    return names.map((_, i) => ({
        name: _,
        s: [..._.toLowerCase()].reduce((a, b) => a + b.charCodeAt() - 95, 0) * we[i]
    }))
        .sort((a, b) => a.name > b.name)
        .sort((a, b) => b.s - a.s)
        [n - 1].name
}

function rank2(st, we, n) {
    let names = st.split(',')
    if (!st.length) return 'No participants'
    if (names.length < n) return 'Not enough participants'
    return names.map((_, i) => ({
        name: _,
        s: [..._.toLowerCase()].reduce((a, b) => a + b.charCodeAt() - 95, 0) * we[i]
    }))
        .sort((a, b) => a.name > b.name)
        .sort((a, b) => b.s - a.s)
        [n - 1].name
}