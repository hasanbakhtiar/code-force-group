const fetchData = async () => {
  const api = await fetch("https://fakestoreapi.com/products");
  const data = await api.json();
  const filterData = (cat) => {
    const filteredData = data.filter(p => p.category === cat);
    console.log(filteredData);
  }
  filterData("jewelery")

}
fetchData();