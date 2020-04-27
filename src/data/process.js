// Data for keytakeaways section:
import k1 from 'assets/images/keytakeaway1.svg';
import k2 from 'assets/images/keytakeaway2.svg';
import k3 from 'assets/images/keytakeaway3.svg';

// Data for research goals section:
import r1 from 'assets/images/research1.svg';
import r2 from 'assets/images/research2.svg';
import r3 from 'assets/images/research3.svg';

import student from 'assets/images/personas/student.png';
import engineer from 'assets/images/personas/engineer.png';
import thinkTank from 'assets/images/personas/thinkTank.png';
import DTinstructor from 'assets/images/personas/DTinstructor.png';
import DTstrategist from 'assets/images/personas/DTstrategist.png';

export const data = [
  {
    sectionTitle: "Problem Brief",
    subsections: [
      { 
        subsectionTitle: "What we started with",
        text: "Whether it is disruptive, revolutionary, evolutionary or incremental, the ability to innovate is essential for companies to sustain market position and grow. As innovation becomes a core competence, companies must also innovate faster, address new dimensions of innovation and apply it across market segments. Honda R&D is not exempt from this trend. It too must develop discipline for innovating and selecting innovations that are strategically significant throughout the company.",
        boxedText: "How can Honda implement technology to help drive design thinking methodologies in a rapidly changing automotive industry?",
        customComponentKey: null,
      },
      { 
        subsectionTitle: "Where we're headed",
        text: "A significant theme that arose in our findings is the difficulty in sharing artifacts and transferring research and information. These transactions, both within and between teams, prove particularly challenging, especially when people are not in the same location. There are many angles to approach this opportunity as well, from team collaboration workflows to analysis and persuasive visualization tools.  Which led us to the question...",
        boxedText: "How might we enabled better collaboration and communication of design artifacts and insights?",
        customComponentKey: null,
      }
    ],
  },
  {
    sectionTitle: "Research",
    subsections: [
      { 
        subsectionTitle: "How did we get here?",
        text: "Our research focused on the interactions between design thinking facilitators and the employees and students seeking knowledge and consulting from them to identify painpoints that could better improve their research. Through our generative research phase, we reached out to design thinking industry leaders, internal Honda design thinking practitioners, and workshop participants to better understand these relationships.",
      },
      { 
        subsectionTitle: "Research Goals",
        customComponentKey: "RESEARCH_GOAL_CARDS",
      }
    ],
  },
  {
    sectionTitle: "Synthesis",
    subsections: [
      { 
        subsectionTitle: "Affinity Diagramming",
        customComponentKey: "AFFINITY",
      },
      { 
        subsectionTitle: "Personas",
        customComponentKey: "PERSONAS",
      },
      { 
        subsectionTitle: "Customer Journey Map",
        customComponentKey: "JOURNEYMAP",
      }
    ],
  },
  {
    sectionTitle: "Insights",
    subsections: [
      { 
        subsectionTitle: "Data at Honda is Not Sustainable",
        customComponentKey: "INSIGHTS_DATA",
      },
      { 
        subsectionTitle: "We Don't Speak the Same Language",
        customComponentKey: "INSIGHTS_LANGUAGE",
      },
      { 
        subsectionTitle: "Why Should I Believe You?",
        customComponentKey: "INSIGHTS_BELIEVE",
      },
      { 
        subsectionTitle: "Do I Believe What Research You've Done?",
        customComponentKey: "INSIGHTS_UNDERSTAND",
      }
    ],
  },
]

export const researchdata = [
  {text: "Understand how value is communicated through our stakeholders",
   img: r3},
  {text: "Empathize with Design Thinking facilitators and 'implementors'",
   img: r2},
  {text: "Identify pain points and opportunities within Design Thinking education",
   img: r1},
]

export const keyTakeawaysData = [
  {text: "Understand how value is communicated through our stakeholders",
   body: ["How do I find what others on my team (especially if remote) are working on?", "How do I structure my work so others can understand without me / digitally?", "Share information and materials quickly and easily?"],
   img: k2},
  {text: "Empathize with Design Thinking facilitators and 'implementors'",
   body: ["I learned you worked on X too, how do I access and build off of that?", "How do I make sure I’m doing something that hasn’t been worked on before?"],
   img: k1},
  {text: "Identify pain points and opportunities within Design Thinking education",
   body: ["How do I show tangible results to the upper management to gain support and funding?"],
   img: k3},
]

export const personasData = [
  {
   text: "OnRamp Student",
   subtitle: "OSU Business Administration Major, OnRamp Participant",
   img: student,
   url: "https://www.figma.com/proto/EoFcPwLlzWjIdIBVQhoyUw/Personas?node-id=460%3A772&scaling=scale-down"
  },
  {
   text: "Engineer",
   subtitle: "American Automotive Co, Materials Engineer",
   img: engineer,
   url: "https://www.figma.com/proto/EoFcPwLlzWjIdIBVQhoyUw/Personas?node-id=460%3A852&scaling=scale-down"
  },
  {
   text: "Think Tank Faciltator",
   subtitle: "Experience Design Manager, Think Tank Facilitator",
   img: thinkTank,
   url: "https://www.figma.com/proto/EoFcPwLlzWjIdIBVQhoyUw/Personas?node-id=460%3A453&scaling=scale-down"
  },
  {
   text: "Design Thinking Instructor",
   subtitle: "Design Thinking Instructor, Practitioner Training",
   img: DTinstructor,
   url: "https://www.figma.com/proto/EoFcPwLlzWjIdIBVQhoyUw/Personas?node-id=460%3A156&scaling=scale-down"
  },
  {
   text: "Design Thinking Strategist",
   subtitle: "Design Thinking Strategist, Fundamentals Instructor",
   img: DTstrategist,
   url: "https://www.figma.com/proto/EoFcPwLlzWjIdIBVQhoyUw/Personas?node-id=460%3A153&scaling=scale-down"
  },
]

export const insightsData = {
  data: [
    {
      insightTitle: "Documentation from past research isn’t useful or understandable.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "I use Control-F a lot.",
          author: "Engineer",
        },
        {
          quote: "The final presentation and contact list are the only things I use.",
          author: "OnRamp Student"
        }
      ]
    },
    {
      insightTitle: "Clustering qualitative data is time consuming.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "We spend a lot of time doing research, interviewing, taking notes, then clustering.  The process is good BUT it takes a lot of time. ",
          author: "Design Thinking Facilitator",
        },
        {
          quote: "We also end up with over a thousand data points, and you can’t holistically see all pieces of evidence.",
          author: "Design Thinking Facilitator"
        }
      ]
    },
    {
      insightTitle: "Sometimes shortcuts are made when synthesizing information.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "I’ll often pull insights and quotes directly from my phone into a slide deck. Most interviews end up just staying on my phone.",
          author: "OnRamp Student",
        },
      ]
    },
    {
      insightTitle: "Lost opportunities in future projects being able to build off past research.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "There’s no one place to understand all the different research that has happened.",
          author: "Engineer",
        },
        {
          quote: "Someone in Japan could be doing exactly what we’re doing, and we wouldn’t know! Since there are so many Honda research centers around the world",
          author: "Engineer",
        },
      ]
    },
    {
      insightTitle: "Security measures hinder teams in their ability to collaborate.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "We don’t do a lot of what I would consider ‘Cloud sharing’. Within our own building it’s not too bad... But our LA office, they don’t have access to the same drives. So it becomes an issue.",
          author: "Engineer",
        },
        {
          quote: "I spend most of my time up against roadblocks for access.",
          author: "Design Thinking Facilitator",
        },
      ]
    }
  ],
  language: [
    {
      insightTitle: "Translation adds additional steps to the process.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "Sometimes I struggle understanding the intentions of design decisions made from teams in other locations.",
          author: "Engineer",
        },
        {
          quote: "As a team leader, it can be difficult to understand the contributions of other disciplines.",
          author: "Engineer",
        },
      ]
    },
    {
      insightTitle: "Alignment can’t be reached without conversation.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "I want our team to be more integrated with other innovation labs within Honda, like 99P and HISV.",
          author: "Design Thinking Facilitator",
        },
        {
          quote: "Generating group insights right after the interview process is really key. We comb through insights, takeaways and ideas together.",
          author: "OnRamp Student",
        },
      ]
    },
    {
      insightTitle: "Having multiple perspectives helps drive the prototyping process.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "We often consult other groups for expertise in order to get feedback on our prototypes.",
          author: "Engineer",
        },
        {
          quote: "Human experts are more effective for finding information than searching.",
          author: "Engineer",
        },
      ]
    }
  ],
  believe: [
    {
      insightTitle: "Persuasive presentations are key to moving research forward.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "Visuals are very important. Communicating to  Japanese leadership means it’s very important to be concise and clear in our wording and as much as possible to show things visually. ",
          author: "Engineer",
        },
        {
          quote: "OnRamp students have a hard time handing off and presenting their work like a business proposal to Phase III companies or teams",
          author: "OnRamp Student",
        },
      ]
    },
    {
      insightTitle: "Establishing trust and buy-in from executives is critical for pushing forward initiatives and projects at Honda.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "I tried to show a spreadsheet to communicate my findings and it went awful - figured out quickly, “What’s an easy way a middleschooler could see this?” ",
          author: "OnRamp Student",
        },
        {
          quote: "I’ll usually check to see if the Chief Engineer signed off on past research to see if the work is credible.",
          author: "Engineer",
        },
      ]
    }
  ],
  understand: [
    {
      insightTitle: "Internal research storage lacks standardization.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "Our Google Drive can be very 'jumbled' for storing data, forms, & insights. It’s tough jumping between all these different docs.",
          author: "OnRamp Student",
        },
        {
          quote: "Sharing past projects is splintered through Github - we need a better way to write things in a more standardized way.",
          author: "Design Thinking Facilitator",
        },
      ]
    },
    {
      insightTitle: "There is risk of similar projects being created.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "Honda doesn’t have one place to understand all the internal research that has happened.",
          author: "Engineer",
        },
        {
          quote: "We see overlap between the projects of disparate groups at Honda.",
          author: "Think Tank Facilitator",
        },
      ]
    },
    {
      insightTitle: "Lack of standardization makes handoffs inefficient.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "Our team had to fly out to Japan to do our hand-off process.",
          author: "Engineer",
        },
        {
          quote: "A lot of time is spent at the beginning of the project going over the last team’s documents and presentations.",
          author: "OnRamp Student",
        },
      ]
    },
    {
      insightTitle: "However, months or years of project knowledge is difficult to transfer without actual project involvement.",
      insightText: "//TODO",
      quotes: [
        {
          quote: "Members of teams who will continue our project understand the project better if they actively participate.",
          author: "Engineer",
        },
        {
          quote: "When we received our project, we had someone from the old team in our group and that was really helpful.",
          author: "OnRamp Student",
        },
      ]
    }
  ]

}