async function addDish(event) {
    try {
        event.preventDefault();
        let data = {
            dishname: event.target.dishName.value,
            price: event.target.price.value,
            tableNo: event.target.tableNo.value
        }
        let post = await axios.post(`https://crudcrud.com/api/2c02f652278044119e446d204851f825/data`, data);
        showData(post.data);
    }
    catch (err) {
        console.log('error message:' + err.name);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    async function getData() {
        try {
            let res = await axios.get(`https://crudcrud.com/api/2c02f652278044119e446d204851f825/data`);
            for (let i = 0; i < res.data.length; i++) {
                showData(res.data[i]);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    getData();
})

function showData(data) {
    try {
        let list = document.getElementById(data.tableNo);
        let btn = document.createElement('button');
        let list1 = document.createElement('ul');
        list1.id = `${data._id}`;
        console.log(list1);
        btn.appendChild(document.createTextNode('Delete'));
        btn.onclick = (() => {
            deleteData(data);
        })
        list1.textContent = data.dishname + "-" + data.price + " ";
        list1.appendChild(btn);
        list.appendChild(list1);
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteData(data) {
    try {
        let res = await axios.delete(`https://crudcrud.com/api/2c02f652278044119e446d204851f825/data/${data._id}`)
        if (res.status == 200) {
            alert('Deleted successfully');
            let parent = document.getElementById(data.tableNo);
            let child = document.getElementById(data._id)
            parent.removeChild(child);
        }
    }
    catch (err) {
        console.log(err.name);
    }
}