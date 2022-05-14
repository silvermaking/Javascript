function getData() {
  const httpRequest = new XMLHttpRequest();
  console.log(httpRequest);
  console.log(httpRequest.readyState);
  // 0번 : request가 초기화 되지 않은 상태
  // 1번 : 서버와 연결이 완료된 Loading 상태
  // 2번 : 서버가 request를 받은 Loaded 상태
  // 3번 : request를 처리하는 중인 상태
  // 4번 : 처리가 완료되어 응답할 준비가 된 상태 = DONE
  httpRequest.onreadystatechange = () => {
    console.log(httpRequest);
    console.log(httpRequest.readyState);
    console.log(httpRequest.readyState);

    if (httpRequest.readyState == httpRequest.DONE) {
      if (httpRequest.status == 200 || httpRequest.status == 201) {
        console.log(httpRequest.response);
      } else {
        console.log(httpRequest.responseText);
      }
    }
  };
  httpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  httpRequest.send();
}

const data = getData();
