let news = [];
let menus = document.querySelectorAll(".menus button");
let searchButton = document.getElementById("search-button");

menus.forEach((menu) => {
  menu.addEventListener("click", (event) => getNewsByTopic(event));
});

const getNews = async (url) => {
  let header = new Headers({
    "x-api-key": "ERykQRI3guOipZkPDSzaPa8gKYqdu1DbADMrQXw2Orw",
  });
  let response = await fetch(url, { headers: header });
  // response 결과 데이터로 뽑아오기
  let data = await response.json();
  news = data.articles;

  render();
};

const getLatestNews = async () => {
  let url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10"
  );
  getNews(url);
};

const getNewsByKeyword = async () => {
  // 1. 검색 키워드 읽어오기
  const keyword = document.getElementById("search-input").value;
  console.log("keyword", keyword);
  // 2. url에 검색 키워드 넣기
  const url = new URL(
    `https://api.newscatcherapi.com/v2/search?q=${keyword}&countries=KR&page_size=10`
  );
  getNews(url);
};

const getNewsByTopic = async (event) => {
  let topic = event.target.textContent.toLowerCase();
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`
  );
  getNews(url);
};

const render = () => {
  let newsHTML = "";
  newsHTML = news.map((item) => {
    return `<div class="row news">
    <div class="col-lg-4">
      <img
        class="news-img-size"
        src="${item.media}"
        alt=""
      />
    </div>
    <div class="col-lg-8">
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      <div>${item.rights} ${item.published_date}</div>
    </div>
  </div>`;
  });
  document.getElementById("news-board").innerHTML = newsHTML.join("");
};

searchButton.addEventListener("click", getNewsByKeyword);
getLatestNews();
