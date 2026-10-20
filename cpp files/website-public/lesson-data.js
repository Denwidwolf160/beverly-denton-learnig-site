window.lessonCatalog = {
  python: {
    title: 'Python basics', category: 'Coding', level: 'Beginner', duration: '25 minute lesson',
    intro: 'Learn how a Python program stores information, makes decisions, repeats work and organizes reusable steps.',
    objectives: ['Display a message and store values in variables.', 'Read simple input and convert text into a number.', 'Use a condition, a loop and a small function.'],
    sections: [
      { title: '1. Give the computer an instruction', text: 'A program is a set of instructions. Python runs instructions from top to bottom. The print function displays information.', code: 'print("Hello, world!")\nprint(2 + 3)  # displays 5' },
      { title: '2. Store information in variables', text: 'A variable is a named place to keep a value. The equals sign assigns the value on its right to the name on its left.', bullets: ['Text is a string: name = "Amina"', 'Whole numbers are integers: age = 20', 'Numbers with decimals are floats: price = 12.50', 'True and False are Boolean values.'] , code: 'name = "Amina"\nage = 20\nprint(name, age)'},
      { title: '3. Get input and make decisions', text: 'input() reads text typed by a person. Convert it with int() before doing arithmetic. An if statement chooses what to do based on a condition.', code: 'age = int(input("How old are you? "))\nif age >= 18:\n    print("Adult")\nelse:\n    print("Under 18")' },
      { title: '4. Repeat work and reuse steps', text: 'A for loop repeats a block. A function gives a reusable block a name. Indentation shows which lines belong together.', code: 'def greet(name):\n    print("Hello, " + name)\n\nfor person in ["Amina", "Joseph"]:\n    greet(person)' }
    ],
    practice: { title: 'Practice: build a greeting', text: 'Write a program that asks for a person’s name and prints a friendly greeting. Then change it to ask for a number and report whether the number is positive, negative, or zero.', steps: ['Start with input("What is your name? ").', 'Save the answer in a clearly named variable.', 'Use print() to display the greeting.', 'Try an empty answer and decide how you might handle it.'] },
    quiz: { question: 'What does this line do: age = 20?', options: ['Displays 20 on the screen.', 'Stores the value 20 in a variable named age.', 'Asks the user to type their age.'], answer: 1, explanation: 'The equals sign assigns the value on its right to the variable name on its left.' },
    faqs: [
      { keywords: ['variable', 'store', 'save value'], answer: 'A variable is a name that refers to a value your program can use, such as age = 20.' },
      { keywords: ['print', 'display', 'screen'], answer: 'Use print(value) to display text or a value in the program output.' },
      { keywords: ['input', 'ask', 'keyboard'], answer: 'input("Your question") displays a prompt and returns the typed answer as text. Use int(...) when you need a whole number.' },
      { keywords: ['if', 'condition', 'decision'], answer: 'An if statement runs its indented block when its condition is true. Add else for the alternative path.' },
      { keywords: ['loop', 'repeat', 'for'], answer: 'A loop repeats instructions. A for loop is useful when you want to process each item in a collection.' },
      { keywords: ['function', 'def', 'reuse'], answer: 'A function is a named group of instructions. Define one with def, then call its name to run it.' },
      { keywords: ['start', 'beginner', 'install'], answer: 'Start by running a one-line print("Hello, world!") program. You can practice in an online Python editor or install Python and use a code editor.' }
    ]
  },
  cpp: {
    title: 'C and C++ foundations', category: 'Coding', level: 'Beginner', duration: '30 minute lesson',
    intro: 'Get oriented in C and C++. They are related but distinct languages; learn the shape of a program, types, conditions and loops.',
    objectives: ['Recognize the main parts of a small C++ program.', 'Declare simple values and display output.', 'Explain one important difference between C and C++.'],
    sections: [
      { title: '1. A first C++ program', text: 'The program starts at main. Include a library when you need its features. The return value 0 indicates successful completion.', code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, world!\\n";\n    return 0;\n}' },
      { title: '2. Types and variables', text: 'A type describes what kind of value a variable stores. C++ asks you to declare the type when creating a variable.', bullets: ['int count = 3; stores a whole number.', 'double price = 12.5; stores a decimal number.', 'std::string name = "Amina"; stores text (include <string>).', 'bool ready = true; stores true or false.'] },
      { title: '3. Conditions and loops', text: 'if/else selects a path. A loop repeats instructions. Braces group the instructions that belong to each structure.', code: 'if (count > 0) {\n    std::cout << "Positive\\n";\n}\nfor (int i = 0; i < 3; i++) {\n    std::cout << i << "\\n";\n}' },
      { title: '4. C is not C++', text: 'C is a procedural language with its own standard library and conventions. C++ builds on many C ideas and adds features such as classes, templates and the C++ standard library. They are not interchangeable: compile each with the appropriate compiler.' }
    ],
    practice: { title: 'Practice: a simple counter', text: 'Make a C++ program that stores a starting number and prints the next five numbers using a loop.', steps: ['Create an int variable for the starting number.', 'Use a for loop with a counter.', 'Print each result on a new line.', 'Change the starting number and run it again.'] },
    quiz: { question: 'Where does a basic C++ program begin running?', options: ['At the first comment.', 'At the main function.', 'At the last line of the file.'], answer: 1, explanation: 'For a standard hosted C++ program, execution begins in main().' },
    faqs: [
      { keywords: ['main', 'start', 'begin'], answer: 'A standard C++ program starts in the main() function.' },
      { keywords: ['cout', 'output', 'display', 'print'], answer: 'Use std::cout to send output to the console. Include the <iostream> header.' },
      { keywords: ['difference', 'c vs c++', 'same'], answer: 'C and C++ are related but distinct languages. C++ adds features including classes, templates and its own standard library.' },
      { keywords: ['int', 'type', 'variable'], answer: 'int is a type for whole numbers. A declaration such as int score = 10; creates a variable named score.' },
      { keywords: ['compile', 'compiler', 'run'], answer: 'A compiler translates source code into a program. C and C++ use different language standards and typically different compiler commands.' }
    ]
  },
  java: {
    title: 'Java basics', category: 'Coding', level: 'Beginner', duration: '25 minute lesson',
    intro: 'Understand Java program structure, variables, decisions and methods, then practice by changing a small program.',
    objectives: ['Identify a Java class and main method.', 'Declare variables with basic types.', 'Use a condition and a loop.'],
    sections: [
      { title: '1. Program structure', text: 'Java code is organized in classes. A small application starts in the main method. The file name usually matches a public class name.', code: 'public class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}' },
      { title: '2. Variables and types', text: 'Java is statically typed: declare the type before the variable name. String is used for text; int and double are common numeric types.', code: 'String name = "Amina";\nint age = 20;\ndouble price = 12.50;\nboolean ready = true;\nSystem.out.println(name);' },
      { title: '3. Decisions and repetition', text: 'Use if/else to choose between paths. A for loop can repeat a block a known number of times.', code: 'if (age >= 18) {\n    System.out.println("Adult");\n} else {\n    System.out.println("Under 18");\n}\nfor (int i = 0; i < 3; i++) {\n    System.out.println(i);\n}' },
      { title: '4. Methods', text: 'A method is a named operation. Parameters are information passed in; a return value is information sent back.', code: 'static int doubleNumber(int number) {\n    return number * 2;\n}' }
    ],
    practice: { title: 'Practice: personalize the program', text: 'Change the Hello example so it stores a name and prints a greeting. Then add an if/else that checks a number.', steps: ['Create a String variable for a name.', 'Join the name to a greeting.', 'Create an int variable.', 'Use if/else to compare it with zero.'] },
    quiz: { question: 'Which method is the entry point of this beginner Java application?', options: ['start()', 'main()', 'runNow()'], answer: 1, explanation: 'The Java runtime calls public static void main(String[] args) to start this kind of application.' },
    faqs: [
      { keywords: ['main', 'start', 'entry'], answer: 'A basic Java application starts in public static void main(String[] args).' },
      { keywords: ['string', 'text', 'variable'], answer: 'Use String to store text, for example String city = "Lusaka";.' },
      { keywords: ['method', 'function', 'return'], answer: 'A method is a named operation. It can accept parameters and return a result.' },
      { keywords: ['class', 'file'], answer: 'A class groups Java code. A public class is normally saved in a file with the same name, including capitalization.' },
      { keywords: ['install', 'run', 'begin'], answer: 'To run Java locally, install a JDK and use an editor or IDE. You can also begin in an online Java playground.' }
    ]
  },
  computer: {
    title: 'Essential computer skills', category: 'Technology', level: 'Beginner', duration: '20 minute lesson',
    intro: 'Practice the everyday skills that make a computer easier to use: files, folders, web searches, email and basic online safety.',
    objectives: ['Save and find a file in a named folder.', 'Use a browser and email safely.', 'Recognize common signs of a suspicious message.'],
    sections: [
      { title: '1. Files and folders', text: 'A file is a document, image or other saved item. A folder helps organize files. Use names that make the contents easy to recognize.', bullets: ['Create a folder for a project.', 'Save a file with a clear name and the correct extension.', 'Use Search or File Explorer to find it again.', 'Keep a second copy of important files in a trusted backup location.'] },
      { title: '2. Browser and web searches', text: 'A browser opens websites. A search engine finds pages. Check the address bar and the source of information before trusting a page or entering details.', bullets: ['Use specific search words.', 'Compare more than one reliable source.', 'Look carefully for misspelled website addresses.', 'Avoid downloads and pop-ups you did not expect.'] },
      { title: '3. Email basics', text: 'Use a meaningful subject, a clear greeting, short paragraphs and a useful sign-off. Check the recipient and attachments before sending.', code: 'Subject: Question about the course\n\nHello Beverly,\nI would like to ask about the beginner lessons.\nThank you,\nYour name' },
      { title: '4. Protect your accounts', text: 'Use a unique password for each important account and turn on two-step verification when available. Never share one-time login codes. Treat urgent requests for money or passwords with caution.' }
    ],
    practice: { title: 'Practice: organize a project folder', text: 'Create a folder for a course or business idea, add a notes document, and practice finding it again.', steps: ['Choose a clear folder name.', 'Create a notes file inside it.', 'Save, close and reopen the file.', 'Make a backup copy in a trusted place.'] },
    quiz: { question: 'A message says your account will close unless you share a login code. What should you do?', options: ['Send the code quickly.', 'Do not share it; verify the message through the official website or app.', 'Forward it to everyone you know.'], answer: 1, explanation: 'One-time login codes should be kept private. Verify account issues using the official service directly.' },
    faqs: [
      { keywords: ['file', 'folder', 'organize'], answer: 'Create a clearly named folder for each project and save related files inside it. Keep a separate backup of important work.' },
      { keywords: ['password', 'account', 'code', 'security'], answer: 'Use unique passwords, turn on two-step verification where possible, and never share login codes.' },
      { keywords: ['email', 'message', 'subject'], answer: 'Use a clear subject, greeting, short message and sign-off. Check the recipient and attachments before sending.' },
      { keywords: ['search', 'browser', 'internet'], answer: 'Use specific search terms and compare reliable sources. Check the address carefully before signing in or entering personal details.' }
    ]
  },
  projects: {
    title: 'Project management foundations', category: 'Work skills', level: 'Beginner', duration: '20 minute lesson',
    intro: 'Turn a goal into manageable work by defining the result, breaking it into tasks, assigning owners and checking progress.',
    objectives: ['Write a clear project goal.', 'Break work into small tasks with owners and dates.', 'Spot a risk early and agree on a next action.'],
    sections: [
      { title: '1. Define the outcome', text: 'Write down what will be delivered, who it is for, when it is due and how you will know it is complete. Keep the goal specific and realistic.' },
      { title: '2. Break work into tasks', text: 'Large goals feel hard to start. Divide the work into tasks that can be completed and checked. Give each task one owner and a clear due date.', bullets: ['Plan: gather requirements and materials.', 'Do: complete the work and share progress.', 'Review: check quality and collect feedback.', 'Finish: deliver the result and record lessons learned.'] },
      { title: '3. Track progress', text: 'A simple board can use To do, Doing and Done columns. Limit how many tasks are in progress so the team finishes work before starting more.' },
      { title: '4. Manage risks', text: 'A risk is something that might affect the project. Write down what could happen, how likely it is, its impact and one action to reduce the risk.' }
    ],
    practice: { title: 'Practice: plan a one-week task', text: 'Plan a small project such as preparing a class presentation or launching a product page.', steps: ['Write the outcome and deadline.', 'List five tasks in order.', 'Choose an owner for every task.', 'Name one possible risk and a response.'] },
    quiz: { question: 'What makes a project task easier to act on?', options: ['A clear owner and a specific next step.', 'A vague goal with no deadline.', 'Keeping the plan secret from the team.'], answer: 0, explanation: 'A clear owner and next step make responsibility visible and progress easier to check.' },
    faqs: [
      { keywords: ['goal', 'scope', 'start'], answer: 'Begin by describing the outcome, who it is for, the due date and how you will know the work is complete.' },
      { keywords: ['task', 'owner', 'deadline'], answer: 'Break work into small tasks. Give each task one owner, a clear next step and a realistic date.' },
      { keywords: ['risk', 'problem', 'delay'], answer: 'Write down what might go wrong, estimate its impact, and agree on an action to reduce or respond to it.' },
      { keywords: ['board', 'kanban', 'progress'], answer: 'A simple To do / Doing / Done board makes work visible. Keep the number of tasks in progress manageable.' }
    ]
  },
  business: {
    title: 'Write a simple business plan', category: 'Business', level: 'Beginner', duration: '30 minute lesson',
    intro: 'A business plan helps you explain who you serve, what problem you solve, how you will reach customers and what the numbers might look like.',
    objectives: ['Describe a customer and the problem they have.', 'Explain your offer and how customers will find it.', 'List basic costs, prices and assumptions to check.'],
    sections: [
      { title: '1. Describe the customer and need', text: 'Be specific about who might buy from you and what they need. Talk to potential customers instead of relying only on guesses.', bullets: ['Who has this problem?', 'How do they solve it now?', 'What would make your offer useful to them?'] },
      { title: '2. Explain your offer', text: 'Describe the product or service in plain language. State the benefit, where it will be sold and what makes it different for your intended customers.' },
      { title: '3. Plan how the business works', text: 'List the supplies, skills, people, location and tools needed. Note how customers will hear about you, ask questions, pay and receive the product or service.' },
      { title: '4. Estimate the money', text: 'Write down start-up costs, regular costs, expected sales and your assumptions. Revenue is not profit: subtract costs and allow for uncertainty. Update estimates with real evidence.' }
    ],
    practice: { title: 'Practice: one-page plan', text: 'Draft a one-page outline for a business idea. Mark anything you are unsure about so you can research or test it.', steps: ['Customer and problem.', 'Product or service and price assumption.', 'How customers will find and receive it.', 'Start-up costs, monthly costs and sales assumptions.', 'One small, low-cost way to test demand.'] },
    quiz: { question: 'What is a useful first step before spending a lot on a business idea?', options: ['Assume everyone will buy it.', 'Talk to possible customers and test the need.', 'Ignore costs until after launch.'], answer: 1, explanation: 'Early customer conversations and small tests help you check assumptions before committing heavily.' },
    faqs: [
      { keywords: ['customer', 'market', 'who'], answer: 'Describe a specific group of people, the problem they have and how you know it matters to them.' },
      { keywords: ['profit', 'revenue', 'cost', 'money'], answer: 'Revenue is money from sales. Profit is what remains after costs. List assumptions and update them with real figures.' },
      { keywords: ['marketing', 'customer find', 'advertise'], answer: 'Start with places your intended customers already use. Test a small, affordable message and track who responds.' },
      { keywords: ['plan', 'business plan', 'start'], answer: 'A simple plan covers customers, the offer, operations, marketing, costs, sales assumptions and risks. It can be updated as you learn.' }
    ]
  },
  money: {
    title: 'Money basics: budgeting and investing', category: 'Money skills', level: 'Beginner', duration: '25 minute lesson',
    intro: 'Learn a basic way to track money, plan spending and understand investment risk. This is general education, not personal financial advice.',
    objectives: ['Compare income with regular and irregular expenses.', 'Make a simple spending plan and savings goal.', 'Recognize that investments can lose value.'],
    sections: [
      { title: '1. See where money goes', text: 'List money received and spending over a typical month. Include irregular costs such as school fees, repairs or annual bills by setting aside part of the expected amount each month.' },
      { title: '2. Make a spending plan', text: 'Prioritize essentials, planned obligations, savings and flexible spending. A popular 50/30/20 rule is only an example, not a requirement; adapt a plan to your income, local costs and responsibilities.', bullets: ['Write down take-home income.', 'List essential expenses and debt payments.', 'Choose a realistic savings target.', 'Review the plan after a month and adjust.'] },
      { title: '3. Understand investing risk', text: 'Investments can rise or fall in value, and you may lose money. Risk, fees, time horizon, diversification and access to your money all matter. Be cautious of guaranteed high-return claims and pressure to act quickly.' },
      { title: '4. Check before committing', text: 'Understand how an investment works, all fees, how you can withdraw, who regulates the provider and what could go wrong. Avoid borrowing to invest unless a qualified adviser has reviewed your situation.' }
    ],
    practice: { title: 'Practice: a simple monthly plan', text: 'Use your own figures privately. Do not post bank, account or identity details in a public message.', steps: ['Estimate take-home income.', 'Write essential and flexible costs.', 'Choose a small savings amount that is realistic.', 'Compare your plan with actual spending at month end.'] },
    quiz: { question: 'Which statement about investing is safest to assume?', options: ['Every investment can guarantee a profit.', 'Investment values can go down as well as up.', 'High returns are always risk-free.'], answer: 1, explanation: 'Investments involve risk. Claims of guaranteed high returns deserve careful scrutiny.' },
    faqs: [
      { keywords: ['budget', 'spending', 'plan'], answer: 'Track income and expenses, prioritize essential obligations, set a realistic savings goal and review the plan regularly.' },
      { keywords: ['invest', 'investment', 'risk'], answer: 'Investments can lose value. Understand the risks, fees, time horizon and withdrawal rules before committing money.' },
      { keywords: ['guarantee', 'return', 'scam'], answer: 'Be cautious of guaranteed high returns, urgency and requests to recruit others. Verify providers with the relevant local regulator.' },
      { keywords: ['debt', 'borrow', 'loan'], answer: 'Borrowing has costs and risks. Compare the total repayment and seek qualified local advice before taking on debt to invest.' }
    ]
  },
  cv: {
    title: 'Build a clear CV or résumé', category: 'Career skills', level: 'Beginner', duration: '25 minute lesson',
    intro: 'Create a readable CV that connects your experience to a role. Use truthful details, clear headings and specific examples of your work.',
    objectives: ['Choose clear sections and a readable layout.', 'Describe experience with actions and results.', 'Tailor the document to a specific opportunity.'],
    sections: [
      { title: '1. Use clear sections', text: 'A simple CV usually includes contact details, a short profile, relevant skills, work or volunteer experience, education and relevant training. Use headings and consistent dates.' },
      { title: '2. Describe what you did', text: 'Start bullet points with an action verb. Add context and a truthful result when possible. Do not invent numbers or experience.', code: 'Helped customers → Answered customer questions and recorded orders accurately during busy shifts.' },
      { title: '3. Tailor it to the role', text: 'Read the role requirements and move your most relevant skills and experience higher. Use language that is accurate to your experience; never claim a skill you do not have.' },
      { title: '4. Check before sending', text: 'Proofread names, dates, phone number and email. Save a PDF with a professional filename unless the employer requests another format. Follow their instructions for length and file type.' }
    ],
    practice: { title: 'Practice: improve one bullet', text: 'Choose a real task from work, school, volunteering or a project. Turn it into one clear bullet that explains your action and its result.', steps: ['Start with an action verb.', 'Say what you did and for whom.', 'Add a result or scale only if accurate.', 'Check whether the detail fits the role you want.'] },
    quiz: { question: 'Which CV bullet is strongest?', options: ['I did many things at work.', 'Answered customer questions and recorded orders accurately.', 'I am the best worker ever.'], answer: 1, explanation: 'A specific, truthful action gives an employer more useful information than a vague or exaggerated claim.' },
    faqs: [
      { keywords: ['no experience', 'first job', 'beginner'], answer: 'Include relevant school projects, volunteering, responsibilities, short courses and practical skills. Describe them truthfully.' },
      { keywords: ['length', 'pages', 'long'], answer: 'Keep it concise and relevant. Follow the employer’s instructions; one or two pages is a common starting point, not a universal rule.' },
      { keywords: ['photo', 'picture'], answer: 'Include a photo only if it is expected or requested for the role and appropriate in your location. Check local hiring norms.' },
      { keywords: ['format', 'pdf', 'send'], answer: 'Follow the employer’s instructions. If no format is specified, a clearly named PDF helps preserve layout across devices.' },
      { keywords: ['cover letter', 'letter'], answer: 'A cover letter briefly connects your relevant experience to the role and explains why you are applying. Tailor it rather than repeating the whole CV.' }
    ]
  },
  mathematics: {
    title: 'Foundation Mathematics', category: 'Mathematics', level: 'Beginner', duration: '45 minute study guide',
    intro: 'A practical, original refresher in core mathematics topics commonly used in foundation study. Use it to build confidence and practise step by step.',
    objectives: ['Work confidently with fractions, decimals, percentages and ratios.', 'Rearrange simple expressions and solve linear equations.', 'Use basic geometry, data and graphs to explain an answer.'],
    sections: [
      { title: '1. Number skills and order of operations', text: 'Work carefully with positive and negative numbers. Follow BIDMAS/BODMAS: brackets, indices/orders, division and multiplication from left to right, then addition and subtraction from left to right.', bullets: ['For -3 + 8, start at -3 and move 8 steps right: the answer is 5.', 'For 18 ÷ 3 × 2, calculate left to right: 6 × 2 = 12.', 'Estimate first so you can notice an answer that is unreasonable.'], code: '3 + 4 × 2 = 3 + 8 = 11\n(3 + 4) × 2 = 7 × 2 = 14' },
      { title: '2. Fractions, decimals and percentages', text: 'A fraction represents part of a whole. To add or subtract fractions, use a common denominator. To find a percentage of an amount, change the percentage to a decimal and multiply.', bullets: ['1/4 = 0.25 = 25%.', '3/4 + 1/8 = 6/8 + 1/8 = 7/8.', '15% of 200 = 0.15 × 200 = 30.'], code: '20% of 150\n= 0.20 × 150\n= 30' },
      { title: '3. Ratio, proportion and rates', text: 'A ratio compares quantities in the same order. Simplify by dividing every part by the same common factor. For a direct proportion, multiplying one quantity by a factor multiplies the other by that factor too.', bullets: ['12:18 simplifies to 2:3 by dividing both parts by 6.', 'If 3 notebooks cost K45, one costs K15 and 5 cost K75.', 'Write units with rates, for example 60 kilometres per hour.'], code: 'Share K80 in the ratio 1:3\nTotal parts = 1 + 3 = 4\nOne part = K80 ÷ 4 = K20\nShares: K20 and K60' },
      { title: '4. Algebra and simplifying expressions', text: 'A letter stands for a number. Like terms have the same variable part and powers, so they can be combined. Use the distributive law to multiply everything inside brackets.', bullets: ['3x + 2x = 5x, but 3x + 2 cannot be combined.', '4(a + 2) = 4a + 8.', 'Substitute a value carefully: if x = 3, then 2x + 1 = 7.'], code: 'Simplify 3x + 2 + 4x - 5\n= 3x + 4x + 2 - 5\n= 7x - 3' },
      { title: '5. Solving simple equations', text: 'An equation is a balance: whatever operation you use on one side, use on the other. Aim to leave the unknown by itself, then substitute your answer back to check it.', bullets: ['Undo addition or subtraction first.', 'Undo multiplication or division next.', 'Keep each line clear so you can find a mistake.'], code: '3x + 5 = 20\n3x = 20 - 5\n3x = 15\nx = 5\nCheck: 3(5) + 5 = 20' },
      { title: '6. Powers, roots and scientific notation', text: 'An exponent tells how many times a base is multiplied by itself. A square root reverses squaring. Scientific notation writes a number as a value from 1 up to (but not including) 10 multiplied by a power of 10.', bullets: ['2³ = 2 × 2 × 2 = 8.', '√49 = 7 because 7² = 49.', '4,500 = 4.5 × 10³.'], code: '10² × 10³ = 10⁵\n(2 × 10³) × (3 × 10²) = 6 × 10⁵' },
      { title: '7. Geometry and measurement', text: 'Always identify the shape and write the correct units. Perimeter measures distance around a shape; area measures the surface inside it. Convert units before combining measurements.', bullets: ['Rectangle area = length × width.', 'Triangle area = ½ × base × perpendicular height.', 'A straight line is 180°; angles around a point total 360°.'], code: 'Rectangle: length 8 cm, width 3 cm\nPerimeter = 2(8 + 3) = 22 cm\nArea = 8 × 3 = 24 cm²' },
      { title: '8. Data, averages and graphs', text: 'Organize data before interpreting it. The mean is the total divided by the count; the median is the middle value after sorting; the mode is the most frequent value. Choose a graph that makes the comparison clear and label its axes.', bullets: ['For 2, 3, 3, 8: mean = 16 ÷ 4 = 4.', 'The median is (3 + 3) ÷ 2 = 3; the mode is 3.', 'A range is the largest value minus the smallest: 8 - 2 = 6.'] },
      { title: '9. Coordinates and straight-line graphs', text: 'Coordinates are written (x, y): move along the x-axis first, then up or down the y-axis. In y = mx + c, m is the gradient (slope) and c is where the line crosses the y-axis.', bullets: ['A positive gradient rises as x increases.', 'To plot a line, calculate at least two points and join them with a straight line.', 'Use the graph scale and label both axes.'], code: 'For y = 2x + 1:\nIf x = 0, y = 1 → (0, 1)\nIf x = 2, y = 5 → (2, 5)' }
    ],
    practice: { title: 'Practice: solve and check', text: 'Try each question on paper before revealing or asking for help. Show your steps, include units where needed, and check answers by reversing your calculation.', steps: ['Calculate 3/5 + 1/10.', 'Find 15% of 240.', 'Simplify the ratio 18:24.', 'Solve 4x - 7 = 13.', 'Find the area of a triangle with base 10 cm and height 6 cm.', 'Find the mean of 4, 6, 6 and 8.'] },
    quiz: { question: 'Solve 3x + 4 = 19. What is x?', options: ['5', '7', '15'], answer: 0, explanation: 'Subtract 4 from both sides to get 3x = 15, then divide both sides by 3. So x = 5.' },
    faqs: [
      { keywords: ['bidmas', 'bodmas', 'order operations', 'brackets'], answer: 'Do brackets first, then indices/orders. Multiplication and division share priority, as do addition and subtraction; work left to right within each pair.' },
      { keywords: ['fraction', 'denominator', 'numerator'], answer: 'For addition or subtraction, first make the denominators the same. For example, 1/4 + 1/2 = 1/4 + 2/4 = 3/4.' },
      { keywords: ['decimal', 'percentage', 'percent'], answer: 'To find a percentage of an amount, change the percentage to a decimal and multiply. For example, 15% of 200 is 0.15 × 200 = 30.' },
      { keywords: ['ratio', 'proportion', 'share'], answer: 'Simplify a ratio by dividing every part by the same factor. To share an amount, add the ratio parts, divide the total by that number, then multiply by each part.' },
      { keywords: ['algebra', 'like terms', 'simplify'], answer: 'Combine like terms only: 3x + 2x = 5x. Constants combine with constants, and unlike variable terms stay separate.' },
      { keywords: ['equation', 'solve', 'unknown', 'x equals'], answer: 'Keep an equation balanced by doing the same operation to both sides. Undo addition/subtraction, then multiplication/division, and substitute your answer to check it.' },
      { keywords: ['power', 'exponent', 'index', 'square root', 'root'], answer: 'An exponent counts repeated multiplication: 2³ = 2 × 2 × 2 = 8. A square root reverses squaring: √49 = 7.' },
      { keywords: ['area', 'perimeter', 'triangle', 'geometry', 'angle'], answer: 'Perimeter is the distance around a shape; area is the surface inside. A rectangle has area length × width; a triangle has area ½ × base × perpendicular height.' },
      { keywords: ['mean', 'median', 'mode', 'average', 'range'], answer: 'Mean = total ÷ count; median = middle after sorting; mode = most frequent; range = largest minus smallest.' },
      { keywords: ['graph', 'coordinate', 'gradient', 'slope', 'y intercept'], answer: 'Coordinates are (x, y). In y = mx + c, m is the gradient and c is the y-intercept. Calculate two points to draw a straight line.' },
      { keywords: ['cavendish', 'syllabus', 'official', 'course'], answer: 'This is an original beginner study guide for core foundation mathematics topics. It is not an official Cavendish University syllabus or course handout; check your course outline or lecturer for the required topics.' }
    ]
  }
};