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


const vata = `<div class="vata">
    <h2>Vata Dosha</h2>
    <h4>Strengths</h4>
    <ul>
      <li> Vata is the energy of wind and space and just like the wind you are full of movement, lightness and change.</li>
      <li> Just like the wind cools wherever it lands on and rises wherever it touches similarly your nature to is cool and dry.</li>
      <li>Vata is the energy of wind and space and just like the wind you are full of movement, lightness and change.</li>
      <li>Just like the wind cools wherever it lands on and rises wherever it touches similarly your nature to is cool and dry.</li>
      <li> Your body being light is also very quick and agile.</li>
      <li>You move fast, you speak fast. Sometimes even faster than the world can keep up. And it's not just your body, your mind also. Things happen fast. That's why it's so easy for you to learn something very Quickly</li>
      <li>You can shift from one idea to the next. Effortlessly. Which makes you quite able. You can thrive in new environments, new roles, new situations. Among all the three body types.</li>
      <li>What are also the most drawn toward higher states of awareness, to spirituality, philosophy, and deep introspection.</li>
    </ul>

    <h4>Weaknesses</h4>
    <ul>
      <li>You easily feel cold, and your skin gets dry if you don't take care of it.</li>
      <li>Sometimes mentally agile for others to understand you.</li>
      <li>money, you don't usually hold on. You love spending it as fast as you earn it.</li>
      <li>Physically, you may become overly thin, struggling to gain weight.</li>
      <li> No Matter what you do. Mentally your mind can start racing too much. Hopping from one thought to the other. Erratic indecisive, changing quickly. You may become fizzy, even restless, unable to sit still.</li>
    </ul>

    <h4>Does</h4>
    <ul>
      <li>To keep your Vata in control, you need elements opposite of yours, which are Water and Earth and these are grounding and nourishing.</li>
      <li>Your best friend is snehana. Which means oiling both inside and outside.
        <ul>
          <li> Outside by regularly oiling your self through self massage. </li>
          <li> Inside by eating foods which naturally have more oil in them. Like nuts and fats. </li>
        </ul>
      </li>
      <li> And You need food that is grounding lubricating and slightly Intense and heavy.
        <ul>
          <li> Vegetables like pumpkin, sweet potatoes.</li>
        </ul>
      </li>
      <li>Yoga is the best recreation for you. Slow and Steady Exercises.</li>
    </ul>

    <h4>Donts</h4>
    <ul>
    <li>If you only eat light salads and dry snacks it will only aggravate your weight further.</li>
    <li> When it comes to movement avoid super intense cardio.  And Instead choose yoga slow strength training practices that help you build.</li>
      </ul>
  </div>`;

  
  const pitta = `<div class="pitta">
    <h2>Pitta Dosha</h2>
      <h4>Strengths</h4>
      <ul>
        <li>The fire cracker, the go getter, the born leader.</li>
        <li>Just like fire, you are intensely hot. And almost impossible to ignore.</li>
        <li>The planner, the achiever, the one who doesn't just dream but who transforms those dreams into reality.</li>
        <li>You try to have structure, you love to do lists, deadlines. You love to lead.</li>
        <li>And good enough. That's not in your dictionary. You chase perfection. Sometimes a little too hard.</li>
      </ul>

    <h4>Weaknesses</h4>
      <ul>
        <li>You must control your fire, which if not balanced:
          <ul>
            <li> Physically you may start feeling acidity, rashes, acne on your skin, even have high blood pressure.</li>
            <li> Mentally you may find yourself snapping at people in anger losing patience over small things wanting to control and dominate everyone around you even your inner voice skin turns harsh becoming overly critical of yourself and of others.</li>
          </ul>
        </li>
      </ul>

      <h4>Does</h4>
      <ul>
        <li>Your best friend is the cool. To keep the inner fire in check.</li>
        <li> You need to load up on foods and drinks that are cooling in nature. That are hydrating in nature.
          <ul>
            <li>Like melons, apples, beets, coconut cherries</li>
            <li> like cooling vegetables such as cucumbers, ash gourd, rich gourd.</li>
            <li>sip on coconut water.</li>
          </ul>
        </li>
        <li>And if you want to have teas make them feel cooling Herbs like mint, fennel, rose petals.</li>
      </ul>
      
      <h4>Donts</h4>
      <ul>
        <li> Ironically, what you will crave the most, will be spicy food. With lots of masala, which will completely put your pitta out of balance.
          <ul>
            <li>No Spicy Curries,  spicy masalas, oily foods, pickles.</li>
            <li> Too many nuts which are all in nature you should Reduce as far as possible.</li>
          </ul>
        </li>
      </ul>

      </div>`;

      const kapha = `<div class="kapha">
        <h2>Kapha Dosha</h2>

        <h4>Strengths</h4>
        <ul>
          <li> You are like the earth. Stable, calm, deeply grounded.</li>
          <li>Physically, you are likely to have a strong, well-built frame, big expressiveness, thick lashes, lust, beautiful hair.</li>
          <li> You radiate a certain softness. A warmth which makes people around you feel very safe.</li>
          <li>You might think a lot before starting something new. But when you commit you go all in. And you make sure it's done.</li>
          <li>Doing things slightly slow. But very slowly is actually a superpower. In a world that's always racing you. Rarely make impulsive decisions. You really think everything through.</li>
          <li> You have the memory of an elephant. Once you learn something you remember it for a long time unlike a person who learns fast and forgets fast.</li>
        </ul>

        <h4>Weaknesses</h4>
        <ul>
          <li> If your Kapha increases too much. You gain weight too fast.</li>
          <li>Your digestion becomes slow and sluggish.</li>
          <li> And after meals you feel like sinking into a comfortable sofa.</li>
        </ul>

        <h4>Does</h4>
        <ul>
          <li>The most important advice for you is don't get stuck in stillness. Neither physically nor mentally. Movement is your best medicine.</li>
          <li>Really heavy exercises.</li>
          <li>Eat Fruits like pineapple, papaya, apples, oranges, berries</li>
          <li>Consume  water rich vegetables like bottle gourd, rich gourds, zucchini over sweet dense ones.</li>
          <li> Unlike for pittas, spices are actually good for you. They help cut the kapha. So you can generally use spices like, ginger, black pepper, turmeric, mustard seeds, cinnamon, cardamom, cloves, green chillies and pepper in your meals.</li>
        </ul>

        <h4>Donts</h4>
        <ul>
          <li>Simple stretches will not cut it for you. You need intensity. You need to squat. You need to run, jump, dance, sprint, whatever gets your heart pumping faster. Among all the body types you need activity the most.</li>
          <li> Also you will be the most drawn to heavy dense comfort foods, chocolates, pastries, nuts, butter, cheese, rich grain based dishes. But those are your worst Enemies.</li>
        </ul>
      </div>`

const questions = Array.from({length: 15}, (_, i) => ({
      text: (i+1) + ". " + questionPaper[i],
      options: options[i],
      images: images[i],
      selected: null,
      visited: false
    }));

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
        if (q.selected === idx) div.classList.add("selected");
        div.innerHTML = `<img src="${q.images[idx]}" alt="${opt}" /><div>${opt}</div>`;
        div.onclick = () => {
          if (q.selected === idx) {
            q.selected = null;
          } else {
            q.selected = idx;
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
        else if(q.selected == 0) btn.classList.add("answered");
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
      if (!questions.some(q => q.selected === null)){
        confirm("You have answered all the questions, would you like to submit the quiz??") ? submitTest()  : "";
      }

      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      } else if(currentQuestionIndex == 14){
        currentQuestionIndex = 0;
        loadQuestion();
      }
    }

    function prevQuestion() {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
      } else if(currentQuestionIndex == 0){
        currentQuestionIndex = 14;
        loadQuestion();
      }
    }

    function submitTest() {
      if (questions.some(q => q.selected === null)) {
        alert("Please answer all questions before submitting.");
        return;
      }

       if( confirm("Do you wish to submit the Quiz?")){

      let countA = 0, countB = 0, countC = 0;
      questions.forEach(q => {
        if (q.selected === 0) countA++;
        else if (q.selected === 1) countB++;
        else if (q.selected === 2) countC++;
      });

      document.getElementById("testPage").style.display = "none";
      document.getElementById("resultPage").style.display = "block";
      
      

    } else{
        return;
    }
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

