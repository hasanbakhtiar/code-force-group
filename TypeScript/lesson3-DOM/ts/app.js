// const h1 = document.querySelector<HTMLHeadingElement>('h1');
// const h1 = document.querySelector('h1') as HTMLHeadElement;
var btn = document.querySelector('button');
var ul = document.querySelector('ul');
var showList = function () {
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var li = "";
        data.map(function (item) {
            li += "<li>".concat(item.title, "</li>");
        });
        ul.innerHTML = li;
    });
};
btn.onclick = showList;
