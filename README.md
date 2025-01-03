# CSS Copy

```
css-copy
├─ .DS_Store
├─ README.md
├─ background.js
├─ content.js
├─ manifest.json
├─ options
│  └─ options.html
├─ popup
│  ├─ popup.css
│  ├─ popup.html
│  └─ popup.js
└─ styles
   └─ content.css
```

<details>
<summary><b>1일차 개발 내용</b></summary>

### **On/Off 버튼 구현**

- 화면 우측 하단에 CSS Copy 기능의 활성화/비활성화 버튼을 추가.
- 버튼의 상태(ON/OFF)를 로컬 스토리지를 통해 저장하고 UI와 동기화.

---

### **CSS 정보 시각화 창 제작**

- 마우스를 HTML 요소 위에 올릴 때, 해당 요소의 CSS 스타일 정보를 화면 하단에 시각적으로 표시.
- 표시 정보:
  - HTML 태그 이름과 클래스
  - 요소의 크기(Width x Height)
  - 폰트 정보(Font Family, Font Size)
  - 유효한 CSS 속성(속성 값과 색상 미리보기 포함).

---

### **CSS 속성 필터링 및 미리보기 추가**

- 유효한 CSS 속성만 필터링하여 표시.
- `box-shadow`, `color` 등의 속성을 시각적으로 확인할 수 있도록 색상 미리보기 구현.

---

### **마우스 이벤트 연동**

- `mouseover`, `mouseout` 이벤트를 활용해 실시간으로 CSS 정보를 업데이트하고 초기화.

---

### **UI 스타일링**

</details>

<details>
<summary><b>2일차 개발 내용 (추가 기능 구현 필요)</b></summary>

### **사이드바 구현(시작, 정지, 종료)**

- 화면 우측 중단에 CSS Copy 기능 사이드바 추가

---

### **popup UI 구현 종료 후 다시 시작하는 기능**

- 팝업 화면에서 Start 클릭시 다시 사이드바 UI 다시 표현

---

### **CSS 정보 시각화 창**

- 마우스를 움직이면 따라오는 CSS 창
- 스페이스바를 누르면 해당 CSS 창을 스냅샷을 찍음
  - 스냅샷의 CSS 창에서 CSS Copy 기능
  - 스냅샷의 CSS 창에서 CodePen 미리보기 기능

---

</details>
