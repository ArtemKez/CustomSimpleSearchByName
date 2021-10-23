const names = [
    'Ismail',
    'Amir',
    'Herbert',
    'Nicolas',
    'Alvin',
    'Rufus',
    'Lara',
    'Willie',
    'Umar',
    'Niall',
    'Ralph',
    'Frederick',
    'Fraser',
    'Troy',
    'Zakariya',
    'Fred',
    'Herman',
    'Wayne',
    'Douglas',
];

let selected_names = [...names];

function render_result() {
    const wrapper = document.getElementById('result');
    wrapper.innerText = '';
    for (const name of selected_names) {
        const el = document.createElement('li');
        el.innerText = name;
        wrapper.appendChild(el);
    }
}

document.getElementById('search').addEventListener('input', function (event) {
    const val = event.target.value;
    selected_names = names.filter((el) => {
        return el.toLowerCase().indexOf(val.toLowerCase()) !== -1
    })
    render_result()
})