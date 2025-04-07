(function () {
  window.EmbeddedChatbot = {
    init: function (config = {}) {
      const {
        buttonId = "embedded-chatbot-button",
        modalUrl = "http://localhost:8080/api/modal",
        modalScriptUrl = "http://localhost:8080/chatbot-modal.js",
      } = config;

      const button = document.getElementById(buttonId);
      if (!button) {
        console.warn(
          `[EmbeddedChatbot] 버튼 ID '${buttonId}' 를 찾을 수 없습니다.`
        );
        return;
      }

      button.addEventListener("click", async () => {
        if (document.getElementById("custom-modal")) return;

        try {
          const res = await fetch(modalUrl);
          if (!res.ok) throw new Error("모달 요청 실패");

          const html = await res.text();
          const wrapper = document.createElement("div");
          wrapper.innerHTML = html;
          document.body.appendChild(wrapper);

          // 모달 삽입 후 JS 동적 로드
          const script = document.createElement("script");
          script.src = modalScriptUrl;
          document.body.appendChild(script);
        } catch (e) {
          console.error("[EmbeddedChatbot] 모달 불러오기 실패:", e);
        }
      });
    },
  };
})();
