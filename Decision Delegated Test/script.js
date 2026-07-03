// 1. 핵심 3문항으로 리스트 축소
const questions = [
  {
    question: "식사 메뉴를 고를 때?",
    options: [
      { text: "그날 내가 정말 먹고 싶은 걸 고민해서 고른다", type: "human" },
      { text: "맛집 앱 평점이나 배달 플랫폼의 '추천' 알고리즘을 믿는다", type: "ai" }
    ]
  },
  {
    question: "유튜브나 OTT 사이트에 접속했을 때?",
    options: [
      { text: "내가 보고 싶은 영상을 검색창에 직접 검색해서 본다", type: "human" },
      { text: "메인 화면에 인공지능이 띄워준 '추천' 영상을 따라 시청한다", type: "ai" }
    ]
  },
  {
    question: "중요한 뉴스나 신문을 봐야할 때?",
    options: [
      { text: "다양한 언론사 사이트에 직접 들어가 스스로 찾아본다", type: "human" },
      { text: "포털 뉴스 피드나 SNS 알고리즘이 골라준 뉴스를 위주로 본다", type: "ai" }
    ]
  }
];

let currentQuestion = 0;
let humanScore = 0;
let aiScore = 0;
let selectedAnswer = null;

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultDesc = document.getElementById("resultDesc");
const restartBtn = document.getElementById("restartBtn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = `${currentQuestion + 1}. ${q.question}`;
  optionsDiv.innerHTML = "";
  selectedAnswer = null;

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option.text;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedAnswer = option.type;
    });
    optionsDiv.appendChild(btn);
  });
}

function showResult() {
  quizDiv.classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultDiv.classList.remove("hidden");

  if (humanScore > aiScore) {
    resultTitle.textContent = "인간 중심형";
    resultDesc.textContent = "아직 주체적인 판단과 자유의지를 더 신뢰하는거 같아요 자신도 모르게 알고리즘의 지배에 무의식적으로 저항하고 있어요";
  } else if (aiScore > humanScore) {
    resultTitle.textContent = "알고리즘 신뢰형";
    resultDesc.textContent = "데이터와 시스템의 추천을 꽤 신뢰하시는군요 유발 하라리가 말한 데이터교에 이미 깊숙이 발을 들였을지도 몰라요";
  } else {
    resultTitle.textContent = "균형형";
    resultDesc.textContent = "자유의지와 기술의 편리함 사이에서 적절한 균형을 유지하고 계시는거 같아요";
  }
}

nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) {
    alert("하나를 선택해주세요!");
    return;
  }

  if (selectedAnswer === "human") {
    humanScore++;
  } else {
    aiScore++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  humanScore = 0;
  aiScore = 0;
  quizDiv.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  resultDiv.classList.add("hidden");
  showQuestion();
});

// 첫 실행
showQuestion();


value:45
speed:0.6
size:2
distance:180
opacity:0.15