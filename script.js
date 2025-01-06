const accessKey = 'jFIvHUicaxhKp64GzrAeIhlbvJwV0gZZp8s49Imsa60';
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResults = document.getElementById('search-result');

let searchQuery = '';
let page = 1;
// searchImages() function is called when the form is submitted to show the images
async function searchImages() {
    searchQuery = searchBox.value;
    //searchBoxValue is the value of the input fied eg.'dog'
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchQuery}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("hello");
    // console.log(data);
    searchResults.innerHTML = ' ';
    const results = data.results;
    results.map(result=>{
        const img = document.createElement('img');
        img.src = result.urls.small;
        const imgLink = document.createElement('a');
        imgLink.href = result.links.html;
        imgLink.target = '_blank';
        imgLink.appendChild(img);
        searchResults.appendChild(imgLink);
    })
}
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page =1;
    searchImages();
})


// function searchImages(){
//     console.log('hello');
// }
// searchForm.addEventListener('submit',(e) =>{
//     e.preventDefault();
//     searchImages();
// })
// console.log('hello');