# 0. EMMIT 요소들

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

- !DOCTYPE
  - 브라우저한테, HTML 5로 작성되었음을 선언 해줌
- html lang='en'
  - 언어 : en, ko, ko-kr 등



- head
  - 문서의 머리를 나타내는 태그
  - 웹 브라우저에 보이지 않으며, 숨은 데이터를 정의하는 태그
  - title
    - 제목
    - 브라우저 상단 탭에 표시

- body
  - 개발자가 작성한 내용 -> 화면에 출력되는 내용

## meta

- charset="UTF-8"
  - 문자열 인코딩
- http-equiv="X-UA-Compatible" content="IE=edge"
  - 크로스 브라우징
  - 브라우저마다 규격이 다른데 그 규격을 통일시켜줌
- name="viewport" content="width=device-width, initial-scale=1.0"
  - 반응형 웹



# 태그

태그는 하나하나 외우지 말고 찾아서 쓰기

- 태그는 <열림> </닫힘>
- 위의 쌍을 요소(element)라 함



## 블록 VS 인라인

### 블록

- 자동 줄바꿈이 발생
  - 컨텐츠의 크기에 상관없이 1줄을 차지

### 인라인

- 자동 줄바꿈 X
  - 컨텐츠의 크기만큼 영역을 차지