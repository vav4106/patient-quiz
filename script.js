// Quiz data for 4 diseases
const quizData = {
  covid: {
    name: "COVID-19",
    questions: [
      { q: "COVID spreads mainly through?", options: ["Water", "Air droplets", "Food", "Clothes"], a: "Air droplets" },
      { q: "Main symptom of COVID?", options: ["Fever", "Hair loss", "Toothache", "Blurred vision"], a: "Fever" },
      { q: "Best precaution?", options: ["Mask", "Jumping", "Singing", "Sleeping"], a: "Mask" },
      { q: "COVID Test is?", options: ["RT-PCR", "X-ray", "ECG", "Blood sugar test"], a: "RT-PCR" },
      { q: "COVID mainly affects?", options: ["Lungs", "Eyes", "Hair", "Nails"], a: "Lungs" }
    ]
  },
  diabetes: {
    name: "Diabetes",
    questions: [
      { q: "Which organ produces insulin?", options: ["Pancreas", "Heart", "Kidney", "Liver"], a: "Pancreas" },
      { q: "High blood sugar is called?", options: ["Hyperglycemia", "Hypoglycemia", "Anemia", "Hypertension"], a: "Hyperglycemia" },
      { q: "Best exercise for diabetics?", options: ["Walking", "Sleeping", "Watching TV", "Jumping"], a: "Walking" },
      { q: "Normal fasting blood sugar?", options: ["70-100 mg/dL", "200 mg/dL", "30 mg/dL", "150-200 mg/dL"], a: "70-100 mg/dL" },
      { q: "Diabetes can cause?", options: ["Vision problems", "Hair growth", "Fever", "Toothache"], a: "Vision problems" }
    ]
  },
  cardio: {
    name: "Cardiovascular Disease",
    questions: [
      { q: "Heart disease risk factor?", options: ["Smoking", "Sleeping", "Walking", "Reading"], a: "Smoking" },
      { q: "High blood pressure is called?", options: ["Hypertension", "Hypotension", "Diabetes", "Anemia"], a: "Hypertension" },
      { q: "Good for heart?", options: ["Exercise", "Smoking", "Junk food", "Stress"], a: "Exercise" },
      { q: "Common symptom?", options: ["Chest pain", "Hair fall", "Cough", "Blurred vision"], a: "Chest pain" },
      { q: "Heart pumps?", options: ["Blood", "Air", "Water", "Food"], a: "Blood" }
    ]
  },
  anxiety: {
    name: "Anxiety",
    questions: [
      { q: "Common symptom?", options: ["Nervousness", "Hair growth", "Fever", "Cough"], a: "Nervousness" },
      { q: "Can anxiety affect sleep?", options: ["Yes", "No", "Maybe", "Only in mornings"], a: "Yes" },
      { q: "Best relief method?", options: ["Meditation", "Smoking", "Skipping meals", "Overthinking"], a: "Meditation" },
      { q: "Anxiety is related to?", options: ["Brain & Nervous system", "Heart", "Kidney", "Skin"], a: "Brain & Nervous system" },
      { q: "Stress increases?", options: ["Anxiety", "Hair growth", "Vision", "Height"], a: "Anxiety" }
    ]
  }
};

// Elements
const diseaseSelect = document.getElementById("diseaseSelect");
const content = document.getElementById("content");

let currentQuiz = [];
let score = 0;

// Event: when user selects a disease
diseaseSelect.addEventListener("change", function () {
  const disease = this.value;
  if (!quizData[disease]) return;

  currentQuiz = quizData[disease].questions;
  score = 0;
  showQuiz();
});

// Function to show quiz questions
function showQuiz() {
  let html = "<h2>Quiz: " + quizData[diseaseSelect.value].name + "</h2>";
  
  currentQuiz.forEach((q, i) => {
    html += `<p><b>${i+1}. ${q.q}</b></p>`;
    q.options.forEach(option => {
      html += `<label>
        <input type="radio" name="q${i}" value="${option}"> ${option}
      </label><br>`;
    });
  });

  html += `<br><button onclick="submitQuiz()">Submit Quiz</button>`;
  content.innerHTML = html;
}

// Function to check answers and show score
function submitQuiz() {
  currentQuiz.forEach((q, i) => {
    const selected = document.querySelector(`input[name=q${i}]:checked`);
    if (selected && selected.value === q.a) score++;
  });

  content.innerHTML = `<h2>Quiz Result</h2>
    <p>Your Score: ${score} / ${currentQuiz.length}</p>
    <p>Correct Answers:</p>
    ${currentQuiz.map((q,i)=>`<p>${i+1}. ${q.q} <b>Answer:</b> ${q.a}</p>`).join("")}
  `;
}
