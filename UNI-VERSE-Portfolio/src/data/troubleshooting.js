export const troubleshootingData = [
  {
    id: 1,
    problem: "STOMP 알림은 전달되지만 상대방 화면에 최신 메시지가 바로 표시되지 않는 현상.",
    cause: "Message DB Transaction이 Commit 되기 전에 STOMP Event가 먼저 발송되어 상대가 Commit 이전 데이터를 조회.",
    solution: "TransactionSynchronizationManager의 afterCommit() 이후에 Event를 발송.",
    result: "DB Commit 완료 후에만 알림이 전달되어 최신 메시지가 안정적으로 표시.",
    lesson: "비동기 이벤트와 DB 트랜잭션의 생명주기에 대한 이해 향상."
  },
  {
    id: 2,
    problem: "로그아웃 후 다시 로그인하면 30분부터 시작하지 않고 이전 Session 시간이 유지.",
    cause: "localStorage의 마지막 Activity 시간이 로그아웃 시 삭제되지 않음.",
    solution: "Session 종료 시 clear(), Login 성공 시 touch().",
    result: "새 로그인은 항상 30:00부터 시작하면서 새로고침 / 여러 탭에서는 기존 Session 시간 유지.",
    lesson: "클라이언트 상태와 서버 세션 생명주기의 동기화 중요성 인식."
  },
  {
    id: 3,
    problem: "AWS 배포 이후 Service / Log / DB 시간이 KST보다 9시간 느림.",
    cause: "RDS, JDBC, Container, JVM의 기본 Timezone이 UTC.",
    solution: "관련 Timezone을 Asia/Seoul로 통일.",
    result: "Service / Log / DB 시간을 KST 기준으로 통일.",
    lesson: "인프라 배포 시 Timezone 설정의 체계적인 관리 필요성 학습."
  },
  {
    id: 4,
    problem: "기존 회원은 multiverse.ac.kr 같은 Domain이 학교명으로 표시되고, 신규 회원은 실제 학교명이 표시.",
    cause: "과거에는 Email Domain을 학교 정보처럼 사용했지만 이후 실제 학교명 저장 방식으로 구조가 변경.",
    solution: "주요 Domain → 정식 학교명 Mapping 추가. 저장된 학교명을 우선 출력.",
    result: "기존 / 신규 회원 모두 동일한 학교명 표시.",
    lesson: "데이터베이스 스키마 및 비즈니스 로직 변경 시 기존 데이터와의 호환성 유지 방법 터득."
  }
];
