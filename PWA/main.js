const apiKey = 'd2047a70d9a440a09c3fccb8c863cad4'
const defaultSources = "the-washington-post";
var main,selectSource;
window.addEventListener('load', e=> {
    updateNews();
    updateSources();
    main = document.querySelector('main');
    selectSource = document.querySelector('#selector');
    selectSource.value = defaultSources;
    selectSource.addEventListener('change',e=>{
        updateNews(e.target.value)
    })

    if('serviceWorker' in navigator){
        try{
            navigator.serviceWorker.register('sw.js');
            console.log("SW Registered");
        } catch(error){
            console.log("SW Registered");
        }
    }
})

async function updateSources(){
    const res = await fetch(`http://newsapi.org/v1/sources`);
    const json = await res.json();
    selectSource.innerHTML = json.sources
    .map(src =>`<option value="${src.id}">${src.name}</option>`)
    .join('/n');    
}

async function updateNews(source = defaultSources){
    const res = await fetch(`https://newsapi.org/v2/everything?q=${source}&apiKey=${apiKey}`)
    const json = await res.json();
    main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article){
    return `
        <div class='article'>
            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img width ="200px" src=${article.urlToImage} onerror="this.onerror=null;this.src='https://www.w3schools.com/css/img_forest.jpg';">
                <p>${article.description}</p>
            </a>
        </div>        
    `;
}