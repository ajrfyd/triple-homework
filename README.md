## Triple Home work

> 
### 프로젝트 실행 방법
[deploy]:https://triple-homework.vercel.app/

### 사용한 기술과 선택한 이유
- styled-components
  1. style을 위해서 파일을 오갈 필요가 없습니다.
  2. 한개의 컴포넌트에서 스타일링까지 같이 할 수 있습니다. 
  3. className 고민할 필요가 없습니다. 
  4. 개인적으로 tailwind 나 bootstrap과 같이 classNam이 길어져 가독성이 떨어지는 것을 좋아하지 않습니다.

### Component 구조 
- App.js 의 SectionContainer가 과제의 한 섹션
- LeftLogoSection은 왼쪽 triple로고 섹션
- RightAwardSection은 오른쪽 고객 및 수상에 대한 섹션
  - RightAwardSection.js는 container
  - TopSection의 고객에 대한 정보 BottomSection은 수상
- api데이터를 가져온다면 container, props로 전달받는 presentational cpmponent로 나누는 것을 선호함
