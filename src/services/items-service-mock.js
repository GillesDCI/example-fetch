let listOfItems = [
    {id:1, itemText:'A first item'},
    {id:2, itemText:'A second item'},
    {id:3, itemText:'A third item'},
    {id:4, itemText:'A fourth item'},
    {id:5, itemText:'A fifth item that I could find'},
    {id:6, itemText:'A sixth item'},
    {id:7, itemText:'A seventh item'},
]
//lists all the items of the array 
export let getAll = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log("data is loaded");
        resolve(listOfItems)
    },2000)
})
//get an item by id e.g. 2 => {id:2, itemText:'A second item'},
export let getById = (id) => new Promise((resolve) => {
    setTimeout(() => {
        var item = listOfItems.find((item) => item.id == id)
        resolve(item)
    },500)
})