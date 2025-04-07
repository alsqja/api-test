# Embedded Chatbot Widget

이 프로젝트는 외부 웹사이트에 `<script>` 태그와 API 를 기반으로 한 챗봇 모달 위젯입니다.

---

## 사용 방법

1. 아래와 같이 `<script>`로 챗봇 위젯을 불러옵니다:

```html
<script src="/chatbot-embed.js"></script>
<script>
  EmbeddedChatbot.init({
    buttonId: "embedded-chatbot-button",          // 챗봇을 여는 버튼 ID
    modalUrl: "http://localhost:8080/api/modal",  // 모달 HTML을 반환하는 엔드포인트
    modalScriptUrl: "http://localhost:8080/chatbot-modal.js" // 모달 동작을 처리할 JS
  });
</script>
```

2. 챗봇을 열기 위한 버튼을 페이지에 추가합니다:

```html
<button id="embedded-chatbot-button">챗봇 열기</button>
```

---

## 참고사항

- 현재는 **서버 배포 전 상태**이므로, `localhost:8080` 기준으로만 동작합니다.
- 테스트를 위해선 해당 백엔드 서버가 로컬에서 실행 중이어야 하며, 아래 API들을 제공해야 합니다:
  - `GET /api/modal` : 챗봇 모달 HTML 반환
  - `POST /api/chat` : 사용자의 메시지를 받아 챗봇 응답 반환
  - `example.html` 파일을 직접 열어 로컬 테스트할 수 있습니다:
