let news = [];
const getLatestNews = async () => {
  let url = new URL(
    "https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business&page_size=2"
  );
  let header = new Headers({
    "x-api-key": "ERykQRI3guOipZkPDSzaPa8gKYqdu1DbADMrQXw2Orw",
  });
  let response = await fetch(url, { headers: header });
  // response 결과 데이터로 뽑아오기
  let data = await response.json();
  news = data.articles;
  console.log("this is news", news);
};

getLatestNews();
