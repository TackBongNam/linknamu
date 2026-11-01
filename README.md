# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 Link in Bio 서비스입니다.

## 시작하기

```bash
npm install
cp .env.example .env.local   # MONGODB_URI에 Atlas 연결 문자열 입력
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 내용 수정

- 이름, 소개, 사진, 링크: `src/data/profile.ts`
- 프로필 사진 파일: `public/`

링크의 `id`는 클릭 수를 저장하는 키이므로, 바꾸면 해당 링크의 클릭 수가 0부터 다시 시작합니다.
