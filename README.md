# UNI:VERSE Team Project Portfolio

대학 인증 기반 익명 커뮤니티와 AI 안전 중고거래를 결합한 **UNI:VERSE** 프로젝트의 포트폴리오 웹사이트입니다.
본 레포지토리는 팀 포트폴리오 및 개별 팀원들의 포트폴리오로 활용될 수 있도록 범용적인 구조로 설계되었습니다.

## 🚀 Project Overview
- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Static Web Hosting)

## 📁 Directory Structure
\`\`\`text
UNI-VERSE-Portfolio/
├── public/                 # 정적 리소스 (favicon, images)
│   └── images/             # 사이트에 사용되는 모든 이미지
├── src/
│   ├── components/         # 재사용 가능한 UI 컴포넌트
│   ├── data/               # 포트폴리오의 모든 텍스트 데이터 분리
│   ├── sections/           # 페이지의 각 섹션 컴포넌트
│   ├── App.jsx             # 전체 페이지 조립
│   └── index.css           # Tailwind 및 글로벌 CSS
\`\`\`

## 🛠 Installation & Run
이 프로젝트는 Node.js 환경에서 실행됩니다. (권장 Node.js v18 이상)

\`\`\`bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행 (기본 포트: 5173)
npm run dev

# 프로덕션 빌드
npm run build
\`\`\`

## 📝 데이터 수정 방법
이 포트폴리오는 하드코딩을 최소화하고 데이터를 분리했습니다.
내용을 수정하려면 **\`src/data/\`** 폴더 내의 파일을 편집하세요.

- \`project.js\`: 프로젝트 기본 정보 (버전, 기간, 이름 등)
- \`problems.js\`: 문제 배경 및 해결책
- \`features.js\`: 핵심 기능 카드
- \`team.js\`: 팀원 프로필 및 기여도
- \`responsibilities.js\`: 역할 분담 매트릭스
- \`techStack.js\`: 기술 스택
- \`ai.js\`: AI 관련 기능 및 프로세스
- \`process.js\`: 개발 프로세스 플로우
- \`troubleshooting.js\`: 문제 해결 경험
- \`results.js\`: 결과 및 개선 지표
- \`links.js\`: 외부 링크 (데모, GitHub, 서비스 URL)

> **주의**: 확정되지 않은 데이터(예: 설문 응답 수, 데모 URL)는 임의로 작성하지 말고 \`TODO\` 상태로 남겨두세요.

## 🖼 이미지 추가 방법
이미지는 **\`public/images/\`** 폴더 내에 역할별로 분류되어 있습니다.
- 이미지 파일명은 데이터 파일(예: \`src/data/team.js\`)에서 참조하는 경로와 정확히 일치해야 합니다.
- 이미지가 아직 준비되지 않았다면, 브라우저의 '깨진 이미지' 대신 UI가 무너지지 않도록 **Placeholder**가 렌더링됩니다.

## 🌐 Vercel 배포 방법
이 프로젝트는 백엔드 없이 Frontend 단독 배포가 가능한 정적 사이트입니다.
1. Vercel(https://vercel.com)에 로그인 후 **New Project** 클릭
2. 본 GitHub Repository 선택 후 **Import**
3. 설정 사항 확인:
   - Framework Preset: **Vite**
   - Build Command: \`npm run build\`
   - Output Directory: \`dist\`
4. **Deploy** 버튼 클릭

## ⚙️ 설정 관련 (팀원용)
환경 변수(.env)는 현재 구성에 필요하지 않습니다.
수정이 필요한 경우 코드를 직접 수정하거나 \`src/data\`의 파일을 업데이트하고 커밋/푸시하면 Vercel에 자동 배포됩니다.
