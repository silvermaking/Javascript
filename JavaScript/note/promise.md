# Promise

- 콜백 지옥을 해결하기 위해 나옴
- 비동기 작업을 좀 더 편하게 할 수 있도록 ES6에서 도입
- 현재는 async / await가 자주 사용

```js
new Promise((resolve, reject) => {});
```

- pending 상태
  - 대기 상태, resolve나 reject가 실행되기 전의 상태
- fulfilled 상태
  - 이행 상태, resolve 호출 시
- rejected 상태
  - 실패 상태, reject 호출 시
