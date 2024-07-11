const API_KEY = "ac87ac4111a9442ab52c73ce8000c659";
const url = "https://newsapi.org/v2/everything?q=";

// Replace 'YourAppName' with your actual application name and '1.0' with your application version
const userAgent = 'NewsHub/1.0';

window.addEventListener('load', () => fetchNews("India"));
function reload(){
    window.location.reload();
}

async function fetchNews(query) {
    try {
        const encodedQuery = encodeURIComponent(query);
        const requestOptions = {
            method: 'GET',
            headers: {
                'User-Agent': userAgent,
            },
        };

        const res = await fetch(`${url}${encodedQuery}&apiKey=${API_KEY}`, requestOptions);

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        bindData(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}
function bindData(articles){
    const cardContainer= document.getElementById('card-container');
    const newsCardTepmlate= document.getElementById('template-news-card');

    cardContainer.innerHTML='';

    articles.forEach(article => {
        if(!article.urlToImage) return;

        const cardClone= newsCardTepmlate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardContainer.appendChild(cardClone);
    });
}
function fillDataInCard(cardClone,article){
    const newsImg= cardClone.querySelector('#news-img');
    const newsTitle= cardClone.querySelector('#news-title');
    const newsSource= cardClone.querySelector('#news-source');
    const newsDesc= cardClone.querySelector('#news-desc');

    newsImg.src= article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML= article.description;

    const date= new Date(article.publishedAt).toLocaleString("en-US",{
        timeZone:"Asia/Jakarta",
    });

    newsSource.innerHTML= `${article.source.name}  ${date}`;
    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url, "_blank")
    })
}

let curSelectNav=null;
function onNavItemClick(id){
    fetchNews(id);
    const navItem= document.getElementById(id);
    curSelectNav?.classList.remove('active');
    curSelectNav= navItem;
    curSelectNav.classList.add('active');
}

const searchButton= document.getElementById('search');
const searchText= document.getElementById('search-text');

searchButton.addEventListener('click',()=>{
    const query= searchText.value;
    if(!query) return;
    fetchNews(query);
    curSelectNav?.classList.remove('active');
    curSelectNav=null;
})

burger=document.querySelector('.burger')
navbar=document.querySelector('.nav-main')
navLink=document.querySelector('.list')
newsInput=document.querySelector('.news-input')
search=document.querySelector('.search')
burger.addEventListener('click',()=>{
    navLink.classList.toggle('resp-hide');
    newsInput.classList.toggle('resp-hide');
    search.classList.toggle('resp-hide');
    navbar.classList.toggle('nav-resp');

})

