export const aiData = {
  title: "AI Risk Detection",
  purpose: "중고거래 게시글에 포함된 위험 거래 표현을 사전에 탐지",
  models: ["TF-IDF", "Logistic Regression"],
  flow: [
    "중고거래 글 작성",
    "Spring Boot",
    "FastAPI",
    "Text Preprocessing",
    "TF-IDF",
    "Logistic Regression",
    "NORMAL / BLOCK",
    "Spring Boot",
    "등록 허용 또는 차단 안내"
  ],
  riskExamples: [
    "외부 메신저 유도",
    "선입금",
    "계좌이체",
    "택배거래 유도",
    "입금 후 발송",
    "외부 링크"
  ],
  improvements: [
    "추가 학습 데이터 반영",
    "모델 재학습 Retraining",
    "오분류 사례 검토"
  ],
  futurePlans: [
    "실제 거래 / 신고 데이터 확보",
    "Context 기반 NLP 모델 검토",
    "KoELECTRA / KoBERT 등 검토",
    "OCR 연동",
    "Linear SVM 등 다른 경량 모델 비교"
  ]
};
