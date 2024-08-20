const { default: axios } = require("axios")


// GET
// POST
// PUT
// DELETE



const getData = () => {
    axios.get('https://fakestoreapi.com/products')
        .then(res => console.log(res)
        )
}

const postData = () => {
    axios.post("https://fakestoreapi.com/products", {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }).then(function (response) {
        console.log(response.data);
    })
        .catch(function (error) {
            console.log(error);
        });
}

const putData = ()=>{
    axios.put("https://fakestoreapi.com/products/7", {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }).then(res=>console.log(res)
    )
}


const deleteData = ()=>{
    axios.delete("https://fakestoreapi.com/products/6")
    .then(res=>console.log(res)
    )
}


deleteData();
// putData();
// postData();
// getData();
