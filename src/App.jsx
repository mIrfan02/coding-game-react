import { useState, useEffect } from 'react';
import './App.css';

const topics = [
  {
    id: 'loops',
    title: '🔁 Loops',
    emoji: '🔁',
    description: 'Repeat actions without repeating code',
    color: '#8b5cf6',
    difficulty: 'Beginner'
  },
  {
    id: 'arrays',
    title: '📦 Arrays',
    emoji: '📦',
    description: 'Store and manage multiple items',
    color: '#ec4899',
    difficulty: 'Beginner'
  },
  {
    id: 'functions',
    title: '⚡ Functions',
    emoji: '⚡',
    description: 'Reusable blocks of magic code',
    color: '#f59e0b',
    difficulty: 'Beginner'
  },
  {
    id: 'conditionals',
    title: '🎭 If/Else',
    emoji: '🎭',
    description: 'Make decisions in your code',
    color: '#06b6d4',
    difficulty: 'Beginner'
  },
  {
    id: 'objects',
    title: '🎯 Objects',
    emoji: '🎯',
    description: 'Organize data with properties',
    color: '#10b981',
    difficulty: 'Intermediate'
  },
  {
    id: 'strings',
    title: '📝 Strings',
    emoji: '📝',
    description: 'Work with text and characters',
    color: '#f43f5e',
    difficulty: 'Beginner'
  }
];

const lessons = {
  loops: {
    title: "Understanding Loops",
    sections: [
      {
        subtitle: "What is a Loop?",
        content: "A loop is like a magic spell that repeats actions automatically! Instead of writing the same code 100 times, you write it once and tell it to repeat.",
        example: "// Without loop (boring!):\nconsole.log('Hello');\nconsole.log('Hello');\nconsole.log('Hello');\n\n// With loop (cool!):\nfor (let i = 0; i < 3; i++) {\n  console.log('Hello');\n}",
        visual: "repeat"
      },
      {
        subtitle: "For Loop Syntax",
        content: "A for loop has three parts: START, CONDITION, and INCREMENT.",
        example: "for (let i = 0; i < 5; i++) {\n  // Code here runs 5 times\n  console.log('Count: ' + i);\n}\n\n// Breakdown:\n// i = 0      → Start at 0\n// i < 5      → Keep going while i is less than 5\n// i++        → Add 1 to i after each loop",
        visual: "counter"
      },
      {
        subtitle: "Real World Use",
        content: "Loops are everywhere! Displaying items in a shopping cart, sending emails to 1000 people, or processing student grades - all use loops!",
        example: "// Print numbers 1 to 10\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}",
        visual: "list"
      }
    ]
  },
  arrays: {
    title: "Understanding Arrays",
    sections: [
      {
        subtitle: "What is an Array?",
        content: "An array is like a backpack that holds multiple items. Each item has a numbered slot (starting from 0).",
        example: "// Creating an array\nlet fruits = ['apple', 'banana', 'orange'];\n\n// Accessing items\nconsole.log(fruits[0]); // 'apple'\nconsole.log(fruits[1]); // 'banana'\nconsole.log(fruits[2]); // 'orange'",
        visual: "boxes"
      },
      {
        subtitle: "Array Properties",
        content: "Arrays have a .length property that tells you how many items are inside.",
        example: "let colors = ['red', 'blue', 'green'];\nconsole.log(colors.length); // 3\n\n// Adding items\ncolors.push('yellow');\nconsole.log(colors.length); // 4",
        visual: "counter"
      },
      {
        subtitle: "Looping Through Arrays",
        content: "The most powerful thing: combining arrays with loops to process every item!",
        example: "let numbers = [10, 20, 30, 40];\n\nfor (let i = 0; i < numbers.length; i++) {\n  console.log(numbers[i]);\n}",
        visual: "list"
      }
    ]
  },
  functions: {
    title: "Understanding Functions",
    sections: [
      {
        subtitle: "What is a Function?",
        content: "A function is like a recipe. You write the instructions once, then you can use it whenever you need it!",
        example: "// Define the function\nfunction sayHello() {\n  console.log('Hello, world!');\n}\n\n// Use it (call it)\nsayHello();\nsayHello();\nsayHello();",
        visual: "repeat"
      },
      {
        subtitle: "Functions with Parameters",
        content: "Parameters are like ingredients - you can change them each time you use the function!",
        example: "function greet(name) {\n  console.log('Hello, ' + name + '!');\n}\n\ngreet('Alice');  // Hello, Alice!\ngreet('Bob');    // Hello, Bob!",
        visual: "boxes"
      },
      {
        subtitle: "Return Values",
        content: "Functions can give you back a result using 'return'. It's like getting change back from a vending machine!",
        example: "function add(a, b) {\n  return a + b;\n}\n\nlet result = add(5, 3);\nconsole.log(result); // 8",
        visual: "counter"
      }
    ]
  },
  conditionals: {
    title: "Understanding If/Else",
    sections: [
      {
        subtitle: "What are Conditionals?",
        content: "Conditionals let your code make decisions, like 'IF it's raining, THEN bring an umbrella!'",
        example: "let age = 18;\n\nif (age >= 18) {\n  console.log('You can vote!');\n} else {\n  console.log('Too young to vote.');\n}",
        visual: "decision"
      },
      {
        subtitle: "Comparison Operators",
        content: "Use these to compare values: === (equal), !== (not equal), > (greater), < (less), >= (greater or equal), <= (less or equal)",
        example: "let score = 85;\n\nif (score >= 90) {\n  console.log('A grade!');\n} else if (score >= 80) {\n  console.log('B grade!');\n} else {\n  console.log('Keep studying!');\n}",
        visual: "counter"
      },
      {
        subtitle: "Combining Conditions",
        content: "Use && (AND) and || (OR) to check multiple conditions at once!",
        example: "let temperature = 25;\nlet sunny = true;\n\nif (temperature > 20 && sunny) {\n  console.log('Perfect beach day!');\n}",
        visual: "decision"
      }
    ]
  },
  objects: {
    title: "Understanding Objects",
    sections: [
      {
        subtitle: "What is an Object?",
        content: "Objects store related information together, like a character in a game with name, health, and level.",
        example: "let player = {\n  name: 'Hero',\n  health: 100,\n  level: 5\n};\n\nconsole.log(player.name);   // 'Hero'\nconsole.log(player.health); // 100",
        visual: "boxes"
      },
      {
        subtitle: "Accessing Properties",
        content: "Use dot notation (object.property) or bracket notation (object['property']) to get values.",
        example: "let car = {\n  brand: 'Tesla',\n  year: 2024,\n  color: 'red'\n};\n\nconsole.log(car.brand);     // Tesla\nconsole.log(car['year']);   // 2024",
        visual: "list"
      },
      {
        subtitle: "Modifying Objects",
        content: "You can change properties or add new ones anytime!",
        example: "let hero = {\n  name: 'Link',\n  power: 50\n};\n\nhero.power = 100;      // Change\nhero.weapon = 'sword'; // Add new\n\nconsole.log(hero.power);  // 100\nconsole.log(hero.weapon); // sword",
        visual: "boxes"
      }
    ]
  },
  strings: {
    title: "Understanding Strings",
    sections: [
      {
        subtitle: "What is a String?",
        content: "Strings are text! Anything inside quotes is a string. Use them for names, messages, and more.",
        example: "let message = 'Hello, world!';\nlet name = \"Alice\";\nlet quote = `Life is good`;\n\nconsole.log(message);",
        visual: "text"
      },
      {
        subtitle: "String Operations",
        content: "Combine strings with + (concatenation), find length with .length, or change case!",
        example: "let first = 'Hello';\nlet last = 'World';\nlet combined = first + ' ' + last;\n\nconsole.log(combined);        // Hello World\nconsole.log(combined.length); // 11\nconsole.log(combined.toUpperCase()); // HELLO WORLD",
        visual: "list"
      },
      {
        subtitle: "Template Literals",
        content: "Use backticks and ${} to embed variables in strings - super powerful!",
        example: "let name = 'Alice';\nlet age = 25;\n\nlet message = `My name is ${name} and I am ${age} years old.`;\nconsole.log(message);",
        visual: "text"
      }
    ]
  }
};

const challenges = {
  loops: [
    {
      id: 1,
      title: "Count to 5",
      story: "Your first spell! Make the wizard count from 1 to 5.",
      task: "Write a loop that prints numbers from 1 to 5",
      hint: "Use: for (let i = 1; i <= 5; i++) { console.log(i); }",
      starterCode: "// Write your loop here\n",
      solution: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}"
    },
    {
      id: 2,
      title: "Water the Flowers",
      story: "The garden has 7 magical flowers that need watering!",
      task: "Write a loop that prints 'Watering flower' 7 times",
      hint: "Start from 0 and go to i < 7",
      starterCode: "// Water 7 flowers\n",
      solution: "for (let i = 0; i < 7; i++) {\n  console.log('Watering flower');\n}"
    },
    {
      id: 3,
      title: "Countdown!",
      story: "A rocket is launching! Count down from 10 to 1, then print 'Liftoff!'",
      task: "Create a countdown from 10 to 1, then print Liftoff",
      hint: "Use i-- to count down: for (let i = 10; i >= 1; i--)",
      starterCode: "// Countdown from 10 to 1\n\n\n// Print Liftoff\n",
      solution: "for (let i = 10; i >= 1; i--) {\n  console.log(i);\n}\nconsole.log('Liftoff!');"
    }
  ],
  arrays: [
    {
      id: 1,
      title: "Treasure Chest",
      story: "You found gems! Create an array with: ruby, emerald, diamond",
      task: "Create an array and print the first gem",
      hint: "let gems = ['ruby', 'emerald', 'diamond']; console.log(gems[0]);",
      starterCode: "// Create your gems array\nlet gems = \n\n// Print first gem\n",
      solution: "let gems = ['ruby', 'emerald', 'diamond'];\nconsole.log(gems[0]);"
    },
    {
      id: 2,
      title: "Array Length",
      story: "How many gems do you have? Use .length to find out!",
      task: "Create an array with 5 items and print its length",
      hint: "array.length tells you how many items",
      starterCode: "// Create array with 5 items\nlet items = \n\n// Print length\n",
      solution: "let items = ['apple', 'banana', 'orange', 'grape', 'melon'];\nconsole.log(items.length);"
    },
    {
      id: 3,
      title: "Loop Through Array",
      story: "Show all your treasures! Loop through and print each one.",
      task: "Create an array and loop through it, printing each item",
      hint: "Use for loop with array.length",
      starterCode: "let treasures = ['gold', 'silver', 'bronze', 'platinum'];\n\n// Write your loop\n",
      solution: "let treasures = ['gold', 'silver', 'bronze', 'platinum'];\nfor (let i = 0; i < treasures.length; i++) {\n  console.log(treasures[i]);\n}"
    }
  ],
  functions: [
    {
      id: 1,
      title: "Simple Greeting",
      story: "Create a spell that says hello!",
      task: "Create a function called greet that prints 'Hello!'",
      hint: "function greet() { console.log('Hello!'); }",
      starterCode: "// Create your function\n\n\n// Call it\ngreet();",
      solution: "function greet() {\n  console.log('Hello!');\n}\n\ngreet();"
    },
    {
      id: 2,
      title: "Personal Greeting",
      story: "Make it personal! Greet someone by their name.",
      task: "Create a function that takes a name parameter and greets them",
      hint: "function greet(name) { console.log('Hello, ' + name); }",
      starterCode: "// Create function with parameter\n\n\n// Test it\ngreet('Wizard');",
      solution: "function greet(name) {\n  console.log('Hello, ' + name);\n}\n\ngreet('Wizard');"
    },
    {
      id: 3,
      title: "Calculator Function",
      story: "Build a calculator! Make a function that adds two numbers and returns the result.",
      task: "Create an add function that returns the sum of two numbers",
      hint: "function add(a, b) { return a + b; }",
      starterCode: "// Create add function\n\n\n// Test it\nlet result = add(5, 7);\nconsole.log(result);",
      solution: "function add(a, b) {\n  return a + b;\n}\n\nlet result = add(5, 7);\nconsole.log(result);"
    }
  ],
  conditionals: [
    {
      id: 1,
      title: "Age Check",
      story: "Check if someone is old enough to vote (18 or older).",
      task: "Write an if statement that checks if age >= 18",
      hint: "if (age >= 18) { console.log('Can vote'); }",
      starterCode: "let age = 20;\n\n// Write your if statement\n",
      solution: "let age = 20;\n\nif (age >= 18) {\n  console.log('Can vote');\n} else {\n  console.log('Too young');\n}"
    },
    {
      id: 2,
      title: "Temperature Check",
      story: "If temperature is above 30, print 'Hot!', otherwise print 'Nice weather'",
      task: "Use if/else to check temperature",
      hint: "Use if (temperature > 30)",
      starterCode: "let temperature = 35;\n\n// Write your condition\n",
      solution: "let temperature = 35;\n\nif (temperature > 30) {\n  console.log('Hot!');\n} else {\n  console.log('Nice weather');\n}"
    },
    {
      id: 3,
      title: "Grade Calculator",
      story: "Convert a score to a grade: 90+ = A, 80+ = B, 70+ = C, below 70 = F",
      task: "Use if/else if/else to assign grades",
      hint: "Use multiple else if statements",
      starterCode: "let score = 85;\n\n// Write your grade logic\n",
      solution: "let score = 85;\n\nif (score >= 90) {\n  console.log('Grade: A');\n} else if (score >= 80) {\n  console.log('Grade: B');\n} else if (score >= 70) {\n  console.log('Grade: C');\n} else {\n  console.log('Grade: F');\n}"
    }
  ],
  objects: [
    {
      id: 1,
      title: "Create a Hero",
      story: "Every RPG needs a hero! Create one with name and level.",
      task: "Create an object with name and level properties",
      hint: "let hero = { name: 'Link', level: 5 };",
      starterCode: "// Create your hero\nlet hero = {\n  \n};\n\nconsole.log(hero.name);",
      solution: "let hero = {\n  name: 'Link',\n  level: 5\n};\n\nconsole.log(hero.name);"
    },
    {
      id: 2,
      title: "Access Properties",
      story: "You have a car object. Print its color and year!",
      task: "Access and print object properties",
      hint: "Use object.property syntax",
      starterCode: "let car = {\n  brand: 'Tesla',\n  year: 2024,\n  color: 'red'\n};\n\n// Print color and year\n",
      solution: "let car = {\n  brand: 'Tesla',\n  year: 2024,\n  color: 'red'\n};\n\nconsole.log(car.color);\nconsole.log(car.year);"
    },
    {
      id: 3,
      title: "Modify Object",
      story: "Your hero leveled up! Increase the level by 1 and add a weapon property.",
      task: "Change and add object properties",
      hint: "hero.level = hero.level + 1; hero.weapon = 'sword';",
      starterCode: "let hero = {\n  name: 'Link',\n  level: 5\n};\n\n// Level up and add weapon\n\n\nconsole.log(hero.level);\nconsole.log(hero.weapon);",
      solution: "let hero = {\n  name: 'Link',\n  level: 5\n};\n\nhero.level = hero.level + 1;\nhero.weapon = 'sword';\n\nconsole.log(hero.level);\nconsole.log(hero.weapon);"
    }
  ],
  strings: [
    {
      id: 1,
      title: "String Basics",
      story: "Create a message and print it!",
      task: "Create a string variable and print it",
      hint: "let message = 'Hello!'; console.log(message);",
      starterCode: "// Create a message\n\n\n// Print it\n",
      solution: "let message = 'Hello, world!';\nconsole.log(message);"
    },
    {
      id: 2,
      title: "String Length",
      story: "How long is your name? Find out with .length!",
      task: "Create a string and print its length",
      hint: "string.length gives you the number of characters",
      starterCode: "let name = 'Alice';\n\n// Print the length\n",
      solution: "let name = 'Alice';\nconsole.log(name.length);"
    },
    {
      id: 3,
      title: "Combine Strings",
      story: "Make a full sentence by combining first and last name!",
      task: "Combine two strings with a space between",
      hint: "Use + to combine: first + ' ' + last",
      starterCode: "let firstName = 'John';\nlet lastName = 'Smith';\n\n// Combine them\n",
      solution: "let firstName = 'John';\nlet lastName = 'Smith';\n\nlet fullName = firstName + ' ' + lastName;\nconsole.log(fullName);"
    }
  ]
};

function App() {
  const [screen, setScreen] = useState('menu');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showLesson, setShowLesson] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [output, setOutput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [completedChallenges, setCompletedChallenges] = useState(0);

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    setShowLesson(true);
    setCurrentSection(0);
    setCurrentChallenge(0);
    setScreen('learning');
  };

  const startPractice = () => {
    setShowLesson(false);
    const challenge = challenges[selectedTopic][0];
    setUserCode(challenge.starterCode);
    setOutput('');
    setShowHint(false);
    setIsSuccess(false);
  };

  const nextSection = () => {
    const lesson = lessons[selectedTopic];
    if (currentSection < lesson.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      startPractice();
    }
  };

  const runCode = () => {
    let capturedOutput = [];
    const originalLog = console.log;

    console.log = (...args) => {
      capturedOutput.push(args.join(' '));
    };

    try {
      eval(userCode);
      console.log = originalLog;

      const outputText = capturedOutput.join('\n');
      setOutput(outputText);

      if (capturedOutput.length > 0) {
        setIsSuccess(true);
        setCompletedChallenges(completedChallenges + 1);
      }
    } catch (error) {
      console.log = originalLog;
      setOutput(`❌ Error: ${error.message}`);
      setIsSuccess(false);
    }
  };

  const nextChallenge = () => {
    const nextIndex = currentChallenge + 1;
    if (nextIndex < challenges[selectedTopic].length) {
      setCurrentChallenge(nextIndex);
      const challenge = challenges[selectedTopic][nextIndex];
      setUserCode(challenge.starterCode);
      setOutput('');
      setShowHint(false);
      setIsSuccess(false);
    } else {
      setScreen('completion');
    }
  };

  const VisualIndicator = ({ type }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 2000);
      return () => clearTimeout(timer);
    }, [type]);

    if (type === 'repeat') {
      return (
        <div className="visual-container">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className={`visual-box ${animate ? 'animate-repeat' : ''}`} style={{animationDelay: `${i * 0.2}s`}}>
              {i}
            </div>
          ))}
        </div>
      );
    }
    if (type === 'boxes') {
      return (
        <div className="visual-container">
          {['🎁', '📦', '🎨', '⭐'].map((emoji, i) => (
            <div key={i} className="visual-box">{emoji}</div>
          ))}
        </div>
      );
    }
    if (type === 'counter') {
      return (
        <div className="visual-container">
          <div className={`visual-counter ${animate ? 'animate-counter' : ''}`}>0 → 5</div>
        </div>
      );
    }
    return <div className="visual-container"><div className="visual-box">📝</div></div>;
  };

  // MENU SCREEN
  if (screen === 'menu') {
    return (
      <div className="App">
        <div className="menu-container">
          <div className="menu-header">
            <h1>🎮 Code Adventure</h1>
            <p className="subtitle">Learn by doing - Write real code!</p>
            <div className="stats">
              <span className="stat-badge">✅ {completedChallenges} Challenges Completed</span>
            </div>
          </div>

          <div className="topics-grid">
            {topics.map(topic => (
              <div
                key={topic.id}
                className="topic-card"
                style={{ borderColor: topic.color }}
                onClick={() => handleTopicSelect(topic.id)}
              >
                <div className="difficulty-badge" style={{background: topic.color}}>
                  {topic.difficulty}
                </div>
                <div className="topic-emoji">{topic.emoji}</div>
                <h2>{topic.title}</h2>
                <p>{topic.description}</p>
                <div className="challenge-count">
                  {challenges[topic.id].length} Challenges
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // COMPLETION SCREEN
  if (screen === 'completion') {
    return (
      <div className="App">
        <div className="completion-screen">
          <div className="trophy-animation">🏆</div>
          <h1>Amazing Work!</h1>
          <p className="completion-text">
            You've completed all challenges in <strong>{topics.find(t => t.id === selectedTopic)?.title}</strong>!
          </p>
          <div className="completion-stats">
            <div className="stat">
              <div className="stat-number">{challenges[selectedTopic].length}</div>
              <div className="stat-label">Challenges Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Mastery</div>
            </div>
          </div>
          <button className="menu-return-btn" onClick={() => setScreen('menu')}>
            🏠 Back to Menu
          </button>
        </div>
      </div>
    );
  }

  // LESSON SCREEN
  if (showLesson) {
    const lesson = lessons[selectedTopic];
    const section = lesson.sections[currentSection];

    return (
      <div className="App">
        <div className="lesson-container">
          <div className="lesson-header">
            <button className="back-btn" onClick={() => setScreen('menu')}>← Menu</button>
            <div className="lesson-progress">
              <span>Lesson {currentSection + 1} of {lesson.sections.length}</span>
            </div>
          </div>

          <div className="lesson-content">
            <h1 className="lesson-title">{lesson.title}</h1>
            <h2 className="section-title">{section.subtitle}</h2>

            <div className="explanation-box">
              <p>{section.content}</p>
            </div>

            <div className="example-section">
              <div className="example-header">📝 Example Code</div>
              <div className="example-code">
                <pre>{section.example}</pre>
              </div>
            </div>

            <VisualIndicator type={section.visual} />

            <div className="lesson-navigation">
              {currentSection < lesson.sections.length - 1 ? (
                <button className="next-section-btn" onClick={nextSection}>
                  Next Lesson →
                </button>
              ) : (
                <button className="start-practice-btn" onClick={startPractice}>
                  🚀 Start Practice Challenges
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CHALLENGE SCREEN
  const challenge = challenges[selectedTopic][currentChallenge];

  return (
    <div className="App">
      <div className="challenge-container">
        <div className="challenge-header">
          <button className="back-btn" onClick={() => setShowLesson(true)}>← Back to Lesson</button>
          <div className="progress">
            Practice {currentChallenge + 1} of {challenges[selectedTopic].length}
          </div>
        </div>

        <div className="challenge-content">
          <div className="left-panel">
            <div className="story-section">
              <h2>{challenge.title}</h2>
              <p className="story">{challenge.story}</p>
              <div className="task-box">
                <strong>Your Task:</strong>
                <p>{challenge.task}</p>
              </div>

              {!showHint && (
                <button className="hint-btn" onClick={() => setShowHint(true)}>
                  💡 Show Hint
                </button>
              )}

              {showHint && (
                <div className="hint-box">
                  <strong>💡 Hint:</strong>
                  <p>{challenge.hint}</p>
                </div>
              )}
            </div>
          </div>

          <div className="right-panel">
            <div className="code-editor">
              <div className="editor-header">
                <span>✏️ Your Code</span>
                <button className="run-btn" onClick={runCode}>
                  ▶️ Run Code
                </button>
              </div>
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                className="code-input"
                spellCheck="false"
              />
            </div>

            <div className="output-section">
              <div className="output-header">📺 Output</div>
              <div className={`output-content ${isSuccess ? 'success' : ''}`}>
                {output || 'Click "Run Code" to see output...'}
              </div>

              {isSuccess && (
                <div className="success-box">
                  <h3>🎉 Perfect! You got it!</h3>
                  <button className="next-btn" onClick={nextChallenge}>
                    {currentChallenge < challenges[selectedTopic].length - 1
                      ? 'Next Challenge →'
                      : 'Complete Topic! 🏆'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;