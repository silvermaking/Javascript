let news = [];
let menus = document.querySelectorAll(".menus button");
let searchButton = document.getElementById("search-button");
let url;
menus.forEach((menu) => {
  menu.addEventListener("click", (event) => getNewsByTopic(event));
});

// api 받아오기
const getNews = async () => {
  try {
    let header = new Headers({
      "x-api-key": "ERykQRI3guOipZkPDSzaPa8gKYqdu1DbADMrQXw2Orw",
    });
    // pagination 쿼리: $page=
    url.searchParams.set("page", page);
    console.log("page는", page);
    console.log("url은", url);
    let response = await fetch(url, { headers: header });
    // response 결과 데이터로 뽑아오기
    let data = await response.json();
    // error handling
    if (response.status == 200) {
      if (data.total_hits == 0) {
        throw new Error("검색된 결과값이 없습니다.");
      }
      console.log("받는 데이터는 = ", data);
      news = data.articles;
      totalPage = data.total_pages;
      page = data.page;
      render();
      pagination();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    // console.log("에러는", error.message);
    errorRender(error.message);
  }
};

const getLatestNews = async () => {
  url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10"
  );
  getNews();
};

const getNewsByKeyword = async () => {
  // 1. 검색 키워드 읽어오기
  const keyword = document.getElementById("search-input").value;
  console.log("keyword", keyword);
  // 2. url에 검색 키워드 넣기
  url = new URL(
    `https://api.newscatcherapi.com/v2/search?q=${keyword}&countries=KR&page_size=10`
  );
  getNews();
};

const getNewsByTopic = async (event) => {
  let topic = event.target.textContent.toLowerCase();
  url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`
  );
  getNews();
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

const errorRender = (message) => {
  const errorHTML = `<div class="alert alert-danger text-center" role="alert">
  ${message}
</div>`;
  document.getElementById("news-board").innerHTML = errorHTML;
};

// pagination
let page = 1;
let totalPage = 0;
const pagination = () => {
  let paginationHTML = ``;

  let pageGroup = Math.ceil(page / 5);
  let last = pageGroup * 5;
  // 1. total page가 5개 미만일 경우 or 마지막 페이지 그룹이 5개 미만인 경우
  if (last > totalPage) {
    last = totalPage;
  }
  let first = last - 4 <= 0 ? 1 : last - 4;

  // 2. << >> 버튼 추가
  // 3. 처음과 끝에서는 화살표 없애기
  if (page > 1) {
    paginationHTML = `
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(1)">
      <span aria-hidden="true">&lt;&lt;</span>
    </a>
    </li>
    <li class="page-item">
  <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${
    page - 1
  })">
    <span aria-hidden="true">&lt;</span>
  </a>
  </li>`;
  }

  for (let i = first; i <= last; i++) {
    paginationHTML += `<li class="page-item ${
      page == i ? "active" : ""
    }"><a class="page-link" href="#" onclick="moveToPage(${i})">${i}</a></li>`;
  }
  if (page < totalPage) {
    paginationHTML += `<li class="page-item">
    <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${
      page + 1
    })">
      <span aria-hidden="true">&gt;</span>
    </a>
  </li>
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${totalPage})">
      <span aria-hidden="true">&gt;&gt;</span>
    </a>
  </li>`;
  }
  document.querySelector(".pagination").innerHTML = paginationHTML;
};

const moveToPage = (pageNum) => {
  page = pageNum;
  getNews();
};

searchButton.addEventListener("click", getNewsByKeyword);
getLatestNews();
