# 비동기 VS 멀티 쓰레드

## 싱글 VS 멀티 쓰레드

![Img](https://velog.velcdn.com/images/gil0127/post/540376e9-9eb4-46d8-9cff-816a1d9cce1f/%EC%8B%B1%EA%B8%80%20vs%20%EB%A9%80%ED%8B%B0.png)

(출처: https://velog.io/@gil0127/%EC%8B%B1%EA%B8%80%EC%8A%A4%EB%A0%88%EB%93%9CSingle-thread-vs-%EB%A9%80%ED%8B%B0%EC%8A%A4%EB%A0%88%EB%93%9C-Multi-thread-t5gv4udj)



- 멀티 쓰레드
  - 여러 함수들을 동시에 수행할 수 있음



## 자바스크립트의 비동기 프로그래밍

- 시간이 걸리는 함수(setTimeout, async 등)를 잠시 보류하고, 다른 함수 부터 **순차적(하나하나씩)**으로 수행