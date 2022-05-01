# 자바스크립트 

## 자바스크립트 런타임

![image](https://user-images.githubusercontent.com/68841702/166146474-38226edb-a2bb-4de0-b31a-04d1588fef58.png)

### Stack

- JS코드가 실행되면 스택 프레임이 쌓이는 장소
- JS는 Stack(쓰레드)이 하나인 싱글 쓰레드 언어
- 싱글 쓰레드이기 때문에 자바스크립트는 동기적 프로그래밍 언어



### 메모리 Heap

- 동적으로 생성된 변수들은 메모리 heap에가서 저장이 됨



### Task Queue

- Web API 로 부터 받은 Task를 큐에 저장해 둠

- 스택이 비면 이벤트 루프가 큐에 아이템을 꺼내다 스택으로 올림



### Event Loop

- 스택과 큐 사이에서 흐름을 제어



### Web API

- Ajax 요청(Ajax, Axios, fetch), setTimeout(), 이벤트 핸들러의 등록과 같이
  웹 브라우저에서 제공하는 기능들
- 자바스크립트의 쓰레드(스택)에서 작업이 이루어지는 것이 아닌 별도의 쓰레드에서 이루어진다

- 이러한 로직 때문에 다음 줄이 먼저 실행되는(비동기적) 현상이 발생

```javascript
console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);
---
// 출력
1
3
2
```



> Async / Await
>
> - web API에 들어온 요청을 기다리게 해줌



## Promise

자바스크립트에서 비동기 동작을 다루는 하나의 패턴

> 콜백지옥
>
> - url이 호출되고 결과가 나오면 두 번째 매개변수인 콜백함수를 불러서 result에 넘겨줌

```javascript
// promise
function delayP(sec){
   return new Promise((resolve, reject) => {    
      setTimeout(() => {    
         resolve("success");    
      }, sec * 1000);    
   });
}
```

- promise 안에는 resolve, reject 함수를 자동으로 갖음
  - resolve: 결과가 문제없이 성공적으로 수행될 때 호출되는 함수
  - reject: 중간에 에러가 나면 에러를 처리할 수 있는 함수
- resolve가 호출이되면 죽음의 콜백대신 `.then()`이나 `async/await`을 이용하여(둘다 하는 일이 비슷하다.) 그 결과값을 받아서 다른 일을 할수있다(결과를 보여준다던가 그런것들)



## Async/ Await

- 동기적인 자바스크립트를 비동기적으로 처리하기 위해 사용
- `fetch()`는 promise를 리턴
  - 우리가 필요한건 그 promise 속에서 api호출이 잘 이루어져 데이터를 받은다음 promise가 성공적으로 **resolve 함수를 호출하기를 기다리는것**

- await 은 promise가 resolve 또는 reject 를 호출할 때까지 기다려줌
  - await가 없으면 그냥 날 것 그대로(데이터가 없는)의 promise가 리턴됨
  - `Promise {<pending>}`

- **await 을 쓰려면 함수를 async로 선언해줘야 함**
- async로 함수를 선언하면 그 함수는 자동으로 promise를 반환



## Json

- 서버 클라이언트 통신에서 많이 쓰이는 데이터 타입
- 객체랑 똑같이 생긴 텍스트

```javascript
let response = await fetch(url)
let data = await response.json()
```



### API 호출하고 싶을 때

```javascript
const callAPI = async() =>{
    let url = new URL(`url주소`)
    let header = new Headers({헤더내용}) // 이건 필요한 경우만
    let response = await fetch(url,{headers:header})
    let data = await response.json()
```

