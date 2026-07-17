---
brand: "THE SUM V2"
aesthetic: "Apple Urban Minimalist"
reference_url: "https://jwyim3387-commits.github.io/THE-SUM-SITE/"
colors:
  background: "#000000"       # 딥 블랙 (프리미엄 신뢰감)
  surface: "#1C1C1E"          # 애플 다크 그레이 (컨텐츠 카드 배경)
  primary: "#FFFFFF"          # 화이트 (메인 타이포그래피)
  secondary: "#8E8E93"        # 차콜 그레이 (본문 및 서브 텍스트)
  accent: "#007AFF"           # 애플 시그니처 블루 (링크 및 액션 버튼)
typography:
  font-family: "San Francisco, -apple-system, BlinkMacSystemFont, sans-serif"
---

# THE SUM V2 개발 및 디자인 대원칙

AI 에이전트는 본 프로젝트를 빌드할 때 아래 지시사항을 절대적으로 준수해야 합니다.

## 1. 콘텐츠 및 구성의 원칙 (콘텐츠 보존 최우선)
- **기존 URL 핵심 유지:** 반드시 `https://jwyim3387-commits.github.io/THE-SUM-SITE/`의 텍스트 내용, 로고, 메뉴 구성 및 철학을 그대로 복사하여 기반으로 삼아야 합니다.
- **두 가지 핵심 기둥 유지:** 오리지널 사이트의 핵심인 [의사결정 지원 (Business Decision Support)]과 [개인의 직업 선택 (Career & Vocational Selection)] 콘텐츠가 메인 화면의 중심 축이어야 합니다. 임의로 비즈니스 시뮬레이터 등으로 구성을 왜곡하지 마십시오.
- **로고 보존:** 기존 V1에서 사용한 'THE SUM'의 로고 텍스트 감성을 그대로 상단 네비게이션에 유지합니다.

## 2. 시각적 스타일 가이드 (Apple Urban Minimalist)
- **여백과 가시성:** 배경(#000000)과 텍스트(#FFFFFF)의 명도 대비를 확실히 주어 가독성을 극대화하고, 요소 간 여백을 넉넉히 두어 세련미를 줍니다.
- **둥근 모서리:** 모든 섹션 및 카드의 곡률은 `border-radius: 12px`로 통일합니다. 불필요한 입체감이나 그라데이션은 금지합니다.

## 3. 기능 및 확장성
- **반응형 모바일 퍼스트:** 모바일 스마트폰 화면 환경을 기본으로 정렬하고, 터치 영역은 44x44px 이상 확보하며, 하단 고정 탭 바(Bottom Tab Bar)를 배치합니다.
- **기능 컴포넌트 추가:** 기존 UI 흐름을 해치지 않는 선에서 [로그인], [인사이트 게시판], [결재 프로세스]로 진입하거나 팝업되는 직관적인 가상 UI 요소를 세련되게 심어둡니다.