const questionPaper = [
    `Which best describes your natural body structure,\n especially around your shoulders, chest and hips? `,
    'Which of these best describe your weight, in general, throughout your life?',
    'Which of these best describes your skin?',
    'After 30 minutes of a good workout, what would your shirt look like?',
    'How is your bodys temperature?',
    'What is your hair like naturally? Dont count for any artificial treatment.',
    'Which best describes your eyes?',
    'Whats your hunger like? How is your craving for food?',
    'What is your digestive Health Like?',
    'Whats your sleep like?',
    'Your typical concentration style? How good are you to focus on a project/ topic?',
    'Which of these describe you closest when it comes to your work?',
    'Your involvement in group discussions with friends/ colleagues?',
    'What negative emotions do you feel the most in your life?',
    'Which best describes your experience with learning a new skill? Like: a complex recepie, a new tech, an instrument, etc.',

]

const options = [
    ['Narrow Frame', 'Medium Frame', 'Wide Frame'],
    ['Thin. Difficult to gain weight', 'Medium. I gain and lose weight easliy, depending on my food and lifestyle.', 'Heavy, Tend to gain weight easily and struggle to lose it.'],
    ['Alaways dry, quick moisture loss','Oily, easy to get pimples, inflammation OR redness', 'Thick and Smooth, Not much moisturizer needed.' ],
    ['Barely Wet, I dont sweat too much.','Drenched, I sweat a lot and get really smelly', 'Moderately sweaty, sweaty only in humid enviornments'],
    ['Very sensitive to cold, and need more sweaters. I love the warmth of the sun and summer.', 'I prefer winter, peak summers really make me suffer.', 'Generally comfortable most of the year, but i prefer summer a little more.'],
    ['Dry, thin, Rough, frizzy, little scanty and Easy hair loss', 'Straight thin hair, tendency to premature graying', 'Thick, quite dense, abundant, with a natural shiny and lustrous texture'],
    ['Small, dries out at times.', 'Medium size, sharp intense gaze', 'Large size, thick lashes.'],
    ['Irregular, Sometimes not hungry at all, sometimes super hungry', 'Strong! Good appetite, feel hungry quite frequently.', 'Quite calm, feel hungry quite a few times in a day and its easy for me to fast.'],
    ['Irregular, sometimes good, other times tendency to get bloated and gassy and constipated', 'Quick digestion, hungry just 2-3 hours after a meal.', 'Slow digestion, a meal lasts long, feel sluggish and heavy after meals.'],
    ['Light sleep, I easily wake up with sounds. Sometimes trouble sleeping.', 'Moderate sleep, wake up very promptly in the morning,ready to get into action.','Deep sleep, takes me a while to wake up in the morning.' ],
    ['My mind is like a humming bird, constant fluctuation between thoughts and ideas, hard to stay with a topic for too long.', 'I can lock onto a task like laser when its genuinely engaging. I am drive to getit done efficiently. However, I might get agitated and impatient easily upon interuptions.', 'It takes me time to start working on a project, but once i start, my focus in incredibly deep. It takes a lot to pull me away and I can work for long uninterupted streches.'],
    ['I tend to have a lot of projects going on at once, often starting a new one before finishing the last. New ideas allure me and I keep juggling many thigns at once.', 'I am intensely goal-oriented, and push myself for perfection. I love to lead and even get very competitive.', 'I seek consisntent, stable roels, and prefer long-term commitment. I find it very challenging and stressful to deal with constant changes in my work.'],
    ['I speak quickly at a fast pace and move quickly from one thought to another.', 'I speak up clearly and assertively only when i have a precise point to make or to guide the discussion towards a clear decision.', 'I tend to listen more than I speak. I do contribute with usually very well-thought and considered words.'],
    ['Anxious, fearful, Nervous.' , 'Angry, impatient Irritable and Frustated.', 'Depressed, Low and Demotivated.'],
    ['Quick to learn, Quick to forget.', 'Quick to learn, Can recall later when practicaly useful.', 'Takes a bit longer to fully grasp somethig new, but once i do it, it becomes deeply ingrained in my memoery and it stays for years.']
];

const images = [
    ['images/Q1/A.png', 'images/Q1/B.png', 'images/Q1/C.png'],
    ['images/Q2/A.png', 'images/Q2/B.png', 'images/Q2/C.png'],
    ['images/Q3/A.png', 'images/Q3/B.png', 'images/Q3/C.png'],
    ['images/Q4/A.png', 'images/Q4/B.png', 'images/Q4/C.png'],
    ['images/Q5/A.png', 'images/Q5/B.png', 'images/Q5/C.png'],
    ['images/Q6/A.png', 'images/Q6/B.png', 'images/Q6/C.png'],
    ['images/Q7/A.png', 'images/Q7/B.png', 'images/Q7/C.png'],
    ['images/Q8/A.png', 'images/Q8/B.png', 'images/Q8/C.png'],
    ['images/Q9/A.png', 'images/Q9/B.png', 'images/Q9/C.png'],
    ['images/Q10/A.png', 'images/Q10/B.png', 'images/Q10/C.png'],
    ['images/Q11/A.png', 'images/Q11/B.png', 'images/Q11/C.png'],
    ['images/Q12/A.png', 'images/Q12/B.png', 'images/Q12/C.png'],
    ['images/Q13/A.png', 'images/Q13/B.png', 'images/Q13/C.png'],
    ['images/Q14/A.png', 'images/Q14/B.png', 'images/Q14/C.png'],
    ['images/Q15/A.png', 'images/Q15/B.png', 'images/Q15/C.png']
];

const questions = Array.from({length: 15}, (_, i) => ({
      text: (i+1) + ". " + questionPaper[i],
      options: options[i],
      images: images[i],
      selected: null,
      visited: false
    }));

    console.log(questions);
    let currentQuestionIndex = 0;

    function startTest() {
      const name = document.getElementById('username').value.trim();
      if (!name) return alert("Please enter your name.");
      document.getElementById('homePage').style.display = "none";
      document.getElementById('testPage').style.display = "block";
      loadQuestion();
      renderSidebar();
    }

    function loadQuestion() {
      const q = questions[currentQuestionIndex];
      q.visited = true;
      document.getElementById("questionText").textContent = q.text;
      const optionsContainer = document.getElementById("optionsContainer");
      optionsContainer.innerHTML = "";

      q.options.forEach((opt, idx) => {
        const div = document.createElement("div");
        div.className = "option";
        if (q.selected === opt) div.classList.add("selected");
        div.innerHTML = `<img src="${q.images[idx]}" alt="${opt}" /><div>${opt}</div>`;
        div.onclick = () => {
          if (q.selected === opt) {
            q.selected = null;
          } else {
            q.selected = opt;
          }
          loadQuestion();
          renderSidebar();
        };
        optionsContainer.appendChild(div);
      });
      renderSidebar();
    }

    function renderSidebar() {
      const container = document.getElementById("questionButtons");
      container.innerHTML = "";
      questions.forEach((q, i) => {
        const btn = document.createElement("button");
        btn.textContent = `Question ${i + 1}`;
        btn.className = "question-button";
        if (i === currentQuestionIndex) btn.classList.add("current-question");
        else if (!q.visited) btn.classList.add("not-visited");
        else if (q.visited && !q.selected) btn.classList.add("visited-not-answered");
        else if (q.selected) btn.classList.add("answered");
        btn.onclick = () => {
          currentQuestionIndex = i;
          loadQuestion();
        };
        container.appendChild(btn);
      });
    }

    function nextQuestion() {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      }
    }

    function prevQuestion() {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
      }
    }

    function submitTest() {
      if (questions.some(q => q.selected === null)) {
        alert("Please answer all questions before submitting.");
        return;
      }

      let countA = 0, countB = 0, countC = 0;
      questions.forEach(q => {
        if (q.selected === 'A') countA++;
        else if (q.selected === 'B') countB++;
        else if (q.selected === 'C') countC++;
      });

      document.getElementById("testPage").style.display = "none";
      document.getElementById("resultPage").style.display = "block";
      document.getElementById("resultSummary").textContent = `You selected:
        A: ${countA}, B: ${countB}, C: ${countC}`;
    }

    function selectOption(index) {
  const question = questions[currentQuestionIndex];
  question.selected = index;

  renderQuestion();
  updateSidebarButton(currentQuestionIndex);
}

function updateSidebarButton(index) {
  const button = document.getElementById(`qbtn-${index}`);
  const question = questions[index];

  // Remove all status classes
  button.classList.remove('not-visited', 'visited-not-answered', 'answered', 'current-question');

  if (question.selected !== undefined) {
    button.classList.add('answered'); // Green
  } else if (index === currentQuestionIndex) {
    button.classList.add('current-question'); // Yellow
  } else {
    button.classList.add('visited-not-answered'); // Red
  }
}

const btn = document.getElementById('toggleBtn');
const box = document.getElementById('infoBox');

btn.addEventListener('click', () => {
  box.classList.toggle('show');
});

