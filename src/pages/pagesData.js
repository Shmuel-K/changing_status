// src/pages/pagesData.js

// 1) מייבאים את כל התמונות (נשאר כבעבר)
import night from '../img/background/step/night.jpg';
import sea1850228 from '../img/background/step/sea-1850228_1280.jpg';
import stones8296649 from '../img/background/step/stones-8296649_1280.jpg';
import storm5949243 from '../img/background/step/storm-5949243_1280.jpg';
import sea1748161 from '../img/background/step/sea-1748161_1280.jpg';
import pier5832800 from '../img/background/step/pier-5832800_1280.jpg';
import sea3652697 from '../img/background/step/sea-3652697_1280.jpg';
import sea5612119 from '../img/background/step/sea-5612119_1280.jpg';
import shark2683184 from '../img/background/step/shark-2683184_1280.jpg';
import soapBubble from '../img/background/step/soap-bubble.jpg';
import lighthouse from '../img/background/step/lighthouse.jpg';
import lighthouse2 from '../img/background/step/lighthouse2.jpg';

// 2) מגדירים את מערך העמודים
const pagesData = [
  // (1) Opening page
  {
    title: "Changing Your Status! A Practical Guide to Your First Tech Job",
    paragraphs: [
      "How to find a tech job even without practical experience?",
      "You can break out of the cycle with the right tools and the right plan. Instead of waiting for an opportunity – we’ll create it ourselves.",
      "If I made it without a CS degree and without serving in a tech unit, you can also enter the high-tech world and conquer your first job.",
      "Your success does not depend on luck, it depends on the actions you take from now on!"
    ],
    bullets: [
      "Build a strong personal brand",
      "Demonstrate practical experience through real projects",
      "Master the art of self-marketing",
      "Learn how to succeed in job interviews",
      "Leverage networking and connections to get your foot in the door"
    ],
    action: null,
    background: night
  },
  // (2) Step 1
  {
    title: "1. Market Research, Defining a Position (Goal) & Deadline",
    paragraphs: [
      "Set a position and target, with a timeframe of up to one year for finding your first job.",
      "Understand the industry requirements through job postings (research and AI tools).",
      "Focus on a specific specialization to avoid spreading yourself too thin."
    ],
    bullets: [],
    action: "Write down your target role and a deadline for obtaining your first job.",
    background: sea1850228
  },
  // (3) Step 2
  {
    title: "2. Setting Realistic Expectations",
    paragraphs: [
      "Check your own knowledge level against market demands: do you have the skills and knowledge employers really need?",
      "Close knowledge gaps with structured self-learning each day at a set time.",
      "Keep realistic expectations to avoid disappointment and burnout."
    ],
    bullets: [],
    action: "Do a self-assessment, talk to people who have already found a job, and figure out where you stand and what you still need to learn.",
    background: stones8296649
  },
  // (4) Step 3
  {
    title: "3. Managing Your Daily Schedule",
    paragraphs: [
      "Searching for a job is a full-time job, so you need a schedule and structure.",
      "Create a fixed daily timetable for learning, practice, and project work.",
      "Maintain discipline and fixed work hours to boost productivity."
    ],
    bullets: [],
    action: "Create a weekly plan for self-study and implementation, and treat it like a real job.",
    background: storm5949243
  },
  // (5) Step 4
  {
    title: "4. The Breakthrough Project",
    paragraphs: [
      "Build a real project that people can actually use, combining skills like Backend, Frontend, DevOps, etc.",
      "Present a personal project in interviews as a substitute for professional experience – it’s your ticket in!",
      "Demonstrating practical and technical abilities shows you can function as an independent unit."
    ],
    bullets: [],
    action: "Identify a real problem in your environment and build a solution. Break the project into smaller development stages.",
    background: sea1748161
  },
  // (6) Step 5
  {
    title: "5. Documenting the Project",
    paragraphs: [
      "Document your work and share the process on professional platforms (LinkedIn, GitHub, communities).",
      "Open tasks on Trello so you can show interviewers your progress.",
      "Posting updates (posts/videos/guides) creates interest and can attract job offers."
    ],
    bullets: [],
    action: "Start documenting your work process and upload weekly updates.",
    background: pier5832800
  },
  // (7) Step 6
  {
    title: "6. Building a Digital Presence",
    paragraphs: [
      "Create a complete and professional LinkedIn profile.",
      "Establish a personal portfolio website – a must! Present your projects, knowledge, and a professional photo.",
      "Participate in professional communities and build a network to expose yourself to opportunities."
    ],
    bullets: [],
    action: "Update your profile with all your projects and new skills.",
    background: sea3652697
  },
  // (8) Step 7
  {
    title: "7. Polishing Your Resume",
    paragraphs: [
      "At this stage, the resume is not your main entry ticket, but it should be well-crafted.",
      "Tailor your resume for each position – don’t send one generic version.",
      "Add links to your GitHub and portfolio site at the top!"
    ],
    bullets: [],
    action: "Create a custom resume for each role you apply for, emphasizing what’s relevant to that company.",
    background: sea5612119
  },
  // (9) Step 8
  {
    title: "8. Practicing Interview Simulations",
    paragraphs: [
      // כעת מציגים את שלושת המשפטים כשלוש פסקאות נפרדות
      "Prepare thoroughly for technical, behavioral, and HR interviews.",
      "Do as many mock interviews as possible with colleagues, mentors, or friends in the field.",
      "Practicing technical interviews reduces stress in real-time."
    ],
    bullets: [],
    action: "Do mock interviews with a colleague or mentor, get feedback, and fix what didn’t work.",
    background: shark2683184
  },
  // (10) Step 9
  {
    title: "9. Getting Feedback and Continuous Learning",
    paragraphs: [
      "Ask for feedback after every interview!",
      "Feedback is your truth machine to help you improve.",
      "Understanding your strengths and weaknesses is crucial to progress."
    ],
    bullets: [],
    action: "After each interview, send an email and request detailed feedback.",
    background: soapBubble
  },
  // (11) Step 10
  {
    title: "10. Handling Rejections and Persistence",
    paragraphs: [
      "Everyone hears “no” dozens of times before getting that desired “yes.”",
      "Turn rejections into learning opportunities.",
      "Stubbornness and persistence are key to success – don’t give up."
    ],
    bullets: [],
    action: "Commit to continuing the process and not giving up when faced with rejections.",
    background: lighthouse
  },
  // (12) Summary page
  {
    title: "In Conclusion – Success Is a Result of Action, Not Luck",
    paragraphs: [
      "Don’t wait for opportunities – create them yourself.",
      "Act smart and focused, build a structured work plan.",
      "Be persistent, learn from your mistakes, now it’s your turn."
    ],
    bullets: [],
    action: "What is the first step you will take today to change your status?",
    background: lighthouse2
  }
];

export default pagesData;
