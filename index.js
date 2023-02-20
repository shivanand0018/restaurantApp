function addDish(e) {

    e.preventDefault();
    let data = {
        dishname: e.target[0].value,
        price: e.target[1].value,
        tableNo: e.target[2].value
    }
    axios.post(`http://localhost:3000/data`, data).then(() => {
        alert(`Dish added to ${tableNo}`)
    })
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get(`http://localhost:3000/data`).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            console.log(res.data);
            let list = document.getElementById(res.data[i].tableNo);
            let btn=document.createElement('button')
            let list1 = document.createElement('ul');
            btn.appendChild(document.createTextNode('Delete'))
            btn.onclick=(()=>{
                console.log(res.data[i].id);
                axios.delete(`http://localhost:3000/data/${res.data[i].id}`).then(()=>{

                })
            })
            if (res.data[i].tableNo === "Table 1") {
                list1.textContent = res.data[i].dishname + "-" + res.data[i].price
                list1.appendChild(btn);
                list.appendChild(list1);
            }
            else if (res.data[i].tableNo == "Table 2") {
                list1.textContent = res.data[i].dishname + "-" + res.data[i].price
                list1.appendChild(btn);
                list.appendChild(list1);
            }
            else if (res.data[i].tableNo == "Table 3") {
                list1.textContent = res.data[i].dishname + "-" + res.data[i].price
                list1.appendChild(btn);
                list.appendChild(list1);
            }
        }
    })
})