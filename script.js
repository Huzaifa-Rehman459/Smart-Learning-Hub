const courseContainer = document.querySelector(".course-cards");

const courses = [
  {
    logo: "../assets/html-logo.png",
    title: "HTML Basics",
    desc: "Learn the structure and building blocks of HTML",
    rating: "4.8",
    lessons: "20 Lessons",
  },
  {
    logo: "../assets/css-logo.png",
    title: "CSS Fundamentals",
    desc: "Style your web pages beautifully with modern CSS",
    rating: "4.7",
    lessons: "18 Lessons",
  },
  {
    logo: "../assets/js-logo.png",
    title: "JavaScript Essentials",
    desc: "Add interactivity to your websites with JS",
    rating: "4.9",
    lessons: "25 Lessons",
  },
  {
    logo: "../assets/react-logo.png",
    title: "React for Beginners",
    desc: "Build dynamic user interfaces with React",
    rating: "4.8",
    lessons: "30 Lessons",
  },
  {
    logo: "../assets/node-js-logo.png",
    title: "Node.js Crash Course",
    desc: "Build fast, scalable backend applications",
    rating: "4.6",
    lessons: "22 Lessons",
  },
  {
    logo: "../assets/github-logo.png",
    title: "Git & GitHub Mastery",
    desc: "Version control and collaboration for developers",
    rating: "4.7",
    lessons: "15 Lessons",
  },
  {
    logo: "../assets/sql-logo.png",
    title: "SQL for Beginners",
    desc: "Learn to query and manage databases effectively",
    rating: "4.5",
    lessons: "17 Lessons",
  },
  {
    logo: "../assets/api-logo.png",
    title: "REST API Development",
    desc: "Design and build robust RESTful APIs",
    rating: "4.8",
    lessons: "24 Lessons",
  },
];

function createCourseCard(course) {
  const courseCard = document.createElement("div");
  courseCard.classList.add("course-card");

  const courseText = document.createElement("div");
  courseText.classList.add("course-text");

  const img = document.createElement("img");
  img.src = course.logo;
  img.alt = course.title;

  const courseCardInfo = document.createElement("div");
  courseCardInfo.classList.add("course-card-info");

  const title = document.createElement("h4");
  title.textContent = course.title;

  const lessons = document.createElement("h5");
  lessons.textContent = course.lessons;

  const desc = document.createElement("span");
  desc.textContent = course.desc;

  courseCardInfo.append(title, lessons, desc);
  courseText.append(img, courseCardInfo);

  const courseCardFooter = document.createElement("div");
  courseCardFooter.classList.add("course-card-footer");

  const ratingP = document.createElement("p");
  const starIcon = document.createElement("i");
  starIcon.classList.add("ri-star-s-fill");
  const ratingSpan = document.createElement("span");
  ratingSpan.textContent = course.rating;
  ratingP.append(starIcon, ratingSpan);

  const startBtn = document.createElement("button");
  startBtn.classList.add("startCourse");
  startBtn.textContent = "Start course";

  courseCardFooter.append(ratingP, startBtn);

  courseCard.append(courseText, courseCardFooter);

  return courseCard;
}

function renderCourses(courseList) {
  if (!courseContainer) return; // stop here if element doesn't exist on this page
  courseContainer.innerHTML = "";
  courseList.forEach((course) => {
    const card = createCourseCard(course);
    courseContainer.appendChild(card);
  });
}

renderCourses(courses);

// HAMBURGER CODE
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

// Create overlay dynamically
const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");
document.body.appendChild(overlay);

function toggleMenu() {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Close menu when a link is clicked
document.querySelectorAll(".mobile-menu ul a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
// ACTIVE LINK CODE

// Highlight the active nav link based on current page URL
function setActiveLink() {
  const navLinks = document.querySelectorAll(".center-nav ul a");
  const currentPage = window.location.pathname.split("/").pop(); // gets e.g. "courses.html"

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop(); // gets e.g. "courses.html" from href

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

setActiveLink();

// QUIZ SECTION CODE
const startScreen = document.querySelector(".startScreen");
const quizScreen = document.querySelector(".quiz-screen");
const resultScreen = document.querySelector(".result-screen");
const quizBtn = document.querySelector(".quizBtn");
const totalQuestion = document.querySelector(".totalQuestion");
const answerButtons = document.querySelectorAll(".answerBtn");
const progressBar = document.querySelector(".progress-bar");
const questionCounter = document.querySelectorAll(".quiz-head-left span");
const percentText = document.querySelector(".quiz-head-right h5");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const scoreEl = document.querySelector(".result-card h1");
const resultMsgEl = document.querySelector(".resultMsg");
const retryBtn = document.querySelector(".retryBtn");
const homeBtn = document.querySelector(".homeBtn");
const quizQuestion = document.querySelector(".quizQuestion");

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Machine Language",
      "Hyper Links Text Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "foreground-color"],
    correctAnswer: 2,
  },
  {
    question:
      "Which keyword is used to declare a variable that cannot be reassigned in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which method is used to add an element at the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "append()"],
    correctAnswer: 0,
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: ["<style>", "<script>", "<link>", "<css>"],
    correctAnswer: 2,
  },
  {
    question: "What is the correct syntax for a JavaScript function?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "func myFunction()",
      "function:myFunction()",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Which CSS property is used to control the spacing between elements?",
    options: ["spacing", "margin", "align", "gap-space"],
    correctAnswer: 1,
  },
  {
    question:
      "Which operator is used to compare both value and type in JavaScript?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2,
  },
  {
    question: "What is the default display value of a <div> element?",
    options: ["inline", "inline-block", "block", "flex"],
    correctAnswer: 2,
  },
];

let currentQuestion = 0;
let score = 0;
let selectedAnswers = new Array(quizQuestions.length).fill(null); // tracks user's picks per question

// ============ START QUIZ ============
function startQuiz() {
  startScreen.classList.add("hideScreen");
  resultScreen.classList.add("hideScreen");
  quizScreen.classList.remove("hideScreen");

  currentQuestion = 0;
  score = 0;
  selectedAnswers.fill(null);
  loadQuestion();
}

quizBtn.addEventListener("click", startQuiz);

// ============ LOAD A QUESTION ============
function loadQuestion() {
  const q = quizQuestions[currentQuestion];
  quizQuestion.textContent = q.question;

  answerButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.dataset.index = index;
    btn.classList.remove("correct", "wrong", "selected");

    // If user already answered this question (came back via Previous), restore it
    if (selectedAnswers[currentQuestion] !== null) {
      btn.disabled = true;
      if (index === q.correctAnswer) {
        btn.classList.add("correct");
      }
      if (
        index === selectedAnswers[currentQuestion] &&
        index !== q.correctAnswer
      ) {
        btn.classList.add("wrong");
      }
    } else {
      btn.disabled = false;
    }
  });

  // Update "Question X of Y"
  questionCounter[0].textContent = currentQuestion + 1;
  questionCounter[1].textContent = quizQuestions.length;

  updateProgress();
  updateNavButtons();
  saveProgress();
}

// ============ HANDLE ANSWER CLICK ============
answerButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (selectedAnswers[currentQuestion] !== null) return; // already answered, ignore

    const selectedIndex = parseInt(btn.dataset.index);
    const correctIndex = quizQuestions[currentQuestion].correctAnswer;

    selectedAnswers[currentQuestion] = selectedIndex;

    if (selectedIndex === correctIndex) {
      btn.classList.add("correct");
      score++;
      saveProgress();
    } else {
      btn.classList.add("wrong");
      // also highlight the correct one so user sees what they missed
      answerButtons[correctIndex].classList.add("correct");
    }

    // lock all buttons after answering
    answerButtons.forEach((b) => (b.disabled = true));
  });
});

// ============ PROGRESS BAR ============
function updateProgress() {
  const percent = Math.round(
    ((currentQuestion + 1) / quizQuestions.length) * 100,
  );
  progressBar.style.width = percent + "%";
  percentText.textContent = percent + "%";
}

// ============ NAVIGATION ============
function updateNavButtons() {
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent =
    currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next";

  // re-add the icon since textContent wipes it — using innerHTML instead here
  if (currentQuestion === quizQuestions.length - 1) {
    nextBtn.innerHTML = `Finish`;
  } else {
    nextBtn.innerHTML = `Next<i class="ri-arrow-right-line"></i>`;
  }
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
});

homeBtn.addEventListener("click", () => {
  resultScreen.classList.add("hideScreen");
  startScreen.classList.remove("hideScreen");
  localStorage.removeItem("quizProgress"); // ADD THIS
});

// ============ RESULT SCREEN ============
function showResult() {
  quizScreen.classList.add("hideScreen");
  resultScreen.classList.remove("hideScreen");

  scoreEl.innerHTML = `<span>${score}</span>/<span>${quizQuestions.length}</span>`;

  const percent = (score / quizQuestions.length) * 100;
  if (percent >= 80) {
    resultMsgEl.textContent = "Excellent Work!";
  } else if (percent >= 50) {
    resultMsgEl.textContent = "Good Job!";
  } else {
    resultMsgEl.textContent = "Keep Practicing!";
  }

  localStorage.removeItem("quizProgress");
}

// ============ RETRY / HOME ============
retryBtn.addEventListener("click", startQuiz);

homeBtn.addEventListener("click", () => {
  resultScreen.classList.add("hideScreen");
  startScreen.classList.remove("hideScreen");
});

function saveProgress() {
  const quizState = {
    currentQuestion: currentQuestion,
    score: score,
    selectedAnswers: selectedAnswers,
    quizActive: true, // tracks that a quiz was in progress
  };
  localStorage.setItem("quizProgress", JSON.stringify(quizState));
}

function loadProgress() {
  const saved = JSON.parse(localStorage.getItem("quizProgress"));

  if (saved && saved.quizActive) {
    currentQuestion = saved.currentQuestion;
    score = saved.score;
    selectedAnswers = saved.selectedAnswers;

    // Show quiz screen instead of start screen
    startScreen.classList.add("hideScreen");
    resultScreen.classList.add("hideScreen");
    quizScreen.classList.remove("hideScreen");

    loadQuestion();
    return true; // tells caller a quiz was resumed
  }
  return false;
}
loadProgress();