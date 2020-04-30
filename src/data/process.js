// Images for opportunities section:
import communicationSVG from 'assets/images/opportunities/communication.svg';
import dataSVG from 'assets/images/opportunities/data.svg';
import handoffSVG from 'assets/images/opportunities/handoff.svg';
import trustSVG from 'assets/images/opportunities/trust.svg';

// Images for research goals section:
import r1 from 'assets/images/research1.svg';
import r2 from 'assets/images/research2.svg';
import r3 from 'assets/images/research3.svg';

// Images for personas:
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
        boxedText: "How might we enable better collaboration and communication of design artifacts and insights?",
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
  {
    text: "Understand how value is communicated through our stakeholders",
    img: r3
  },
  {
    text: "Empathize with Design Thinking facilitators and 'implementors'",
    img: r2
  },
  {
    text: "Identify pain points and opportunities within Design Thinking education",
    img: r1
  },
]

export const keyTakeawaysData = [
  {
    text: "Data Sustainability",
    body: ["How might we document and tag ongoing research so that data is searchable and usable by others?", "How might we Understand existing data without the researcher or team present to explain it?"],
    img: dataSVG
  },
  {
    text: "Communicating Research Findings",
    body: ["How might we design for multiple languages, cultures, or disciplines?",
      "How might we enable more cross-team collaboration and bring multiple perspectives to prototyping processes?"],
    img: communicationSVG
  },
  {
    text: "Communicating Research Credibility",
    body: ["How might we better evaluate and demonstrate the credibility of our research?",
      "How might we better demonstrate alignment to business strategy in our projects?"
    ],
    img: trustSVG
  },
  {
    text: "Improve Project Hand-offs",
    body: ["How might we make it easier to find past projects related to our own?",
      "How might we enable more efficient project hand-offs that do not require lengthy in-person visits?"
    ],
    img: handoffSVG
  },
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
      insightText: "If data can't be found or understood it is not sustainable.<br/><br/>An engineer described browsing files using Ctrl-F to locate keywords that might indicate usable data. This is incredibly tedious and inefficient.<br/><br/>Students said that data from previous teams was absent or unusable, and that all they only used the presentation and contacts.",
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
      insightText: "We heard this from facilitators, and even experienced it ourselves. <br/><br/>The process of doing research and searching for insights within the data is absolutely necessary, but it takes a tremendous amount of time and effort.<br/><br/> The level of effort grows exponentially as the data set expands. Facilitators reported huge amounts of information to sort through, and while the process is not one that they would like fully automated, some assistance in this regard would be welcomed.",
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
      insightText: "Because the process of working with data is so cumbersome, many people are not to spend their time uploading, labeling, and tagging information. <br/><br/>Even if repositories for data exist such as Microsoft Sharepoint or Google Drive, there is no guarantee and little incentive for people to publish their data to those shared drives when they could just as easily keep it locally on their machines. <br/><br/>It’s not unusual for it to get abandoned in personal devices or obscure folders.",
      quotes: [
        {
          quote: "I’ll often pull insights and quotes directly from my phone into a slide deck. Most interviews end up just staying on my phone.",
          author: "OnRamp Student",
        },
      ]
    },
    {
      insightTitle: "Lost opportunities in future projects being able to build off past research.",
      insightText: "If there isn’t sufficient transparency and communication between groups, silos form and lead to costly inefficiencies. <br/><br/>The lack of a single shared gateway, and limitations placed on access to information in other divisions creates a situation where decisions are being made without all of the necessary information.<br/><br/> Projects may be taken on by different groups simultaneously without each other's knowledge. Ideally these groups would either work together, or one of the groups would take on another project.",
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
      insightText: "A system that is fully secured, but unusable has no value.<br/><br/> Security is essential in any industry, but it also tends to lead to barriers for collaboration. Security, by definition, is intended to limit access to information. The irony is that any information worth securing must have significant value to the organization when in the hands of authorized users. When someone who should be authorized isn’t value is lost. <br/><br/>Today, people are finding ways to get around the problem by asking other people who are authorized to access the information for them, but that doesn’t scale to a global company like Honda, and while there may be processes in place to grant access when needed, currently they are far too difficult to navigate.",
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
      insightText: "Collaboration requires some form of a shared language. <br/><br/> This can be a literal language barrier between native English and Japanese speakers, or a more nuanced language barrier between different disciplines within the company such as materials engineers and electrical engineers, or more broadly between engineering and design.<br/><br/>When language barriers exist, translation of some kind is required whether that takes the form of an interpreter or a data visualization that presents information more clearly.",
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
      insightText: "Alignment between facilitators & their participants, but also with like-minded teams across an organization enables work to move forward, amplifies efficacy of projects, and prevents costly mistakes.<br/><br/>However, if teams are unable to communicate with each other, alignment is not attainable. <br/><br/>We’ve heard strong demand for alignment between groups within Honda, as well as within student teams made up of cross-disciplinary participants.",
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
      insightText: "Perspective is a valuable commodity, and can be hard to find in teams made up entirely of people with the same backgrounds.<br/><br/>To combat this issue, engineers and team leaders turn to people outside of their group for feedback on prototypes that might not surface in their own organization.<br/><br/>Similarly, people in other groups can serve as the primary resource in the search for information. An engineer we talked to credited human sources as being superior to digital search tools.",
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
      insightText: "It turns out that presentation materials played a critical role in pushing forward research in the problem spaces that people were working in. Both engineers and students mentioned how former presentation slides and posters made for great entryways into assessing the relevance of past research to their work. <br/><br/>Also, creating presentations of research allowed teams to have better dialogue with their Japanese counterparts. To overcome language barriers, we heard how visualizations played a key part in communication of work. ",
      quotes: [
        {
          quote: "Visuals are very important. Communicating to  Japanese leadership means it’s very important to be concise and clear in our wording and as much as possible to show things visually. ",
          author: "Engineer",
        },
        {
          quote: "OnRamp students have a hard time handing off and presenting their work like a business proposal to Phase III companies or teams.",
          author: "OnRamp Student",
        },
      ]
    },
    {
      insightTitle: "Establishing trust and buy-in from executives is critical for pushing forward initiatives and projects at Honda.",
      insightText: "In addition, being able to communicate in effective ways is integral to establishing buy-in for supervisors.<br/><br/>So getting this higher level in this current reality becomes important, especially in the context of the difficulties in accessing, parsing, and assessing data you already have available. Due to these delays in understanding the problem space people use this higher level buy in to by-pass searching through data. From our findings, we found a quick shortcut to identifying credible research is by seeing if the Chief Engineer signed off on it. ",
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
      insightText: "From our interviews and studies, we found that there was not a clear standardization in terms of how internal teams were organizing their research. Although teams may understand their internal research structure, this does not necessarily mean that other individuals from outside the team will be able to understand. <br><br>This pattern was found both in OnRamp teams, and within teams at Honda. For example, one OnRamp team was using both Google Drive and BaseCamp as a way to organize their research; however a student admitted that “it was tough [having to] jump” between these different documents, all stored on differing systems. Additionally, a Design Thinking Facilitator who had overseen multiple Honda projects noted that although they were storing their past projects on Github, the organization was “splintered” and still required greater standardization.",
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
      insightText: "As a consequence of poor research organization and standardization, being able to easily read, and identify past projects becomes difficult. <br><br> Firstly, employees already face great difficulty in surfacing past research in general, as evidenced by one Honda engineer commenting how there was no central repository storing all undertaken projects in the organization. <br><br> Inevitably, this inability to identify past projects produces silos of information, where teams may be carrying out similar kinds of projects. As seen in an interview with a Think Tank facilitators at Honda, this individual admitted that they had seen disparate teams producing the same kind of projects.",
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
      insightText: "An additional consequence of poor internal research organization is that handoffs become difficult and time-consuming. <br><br> One prime example is where a team of Honda engineers travelled all the way to Japan to go through the hand-off process; yet, despite having met the other team face-to-face, they still had difficulty understanding the background research and insights produced by the other team. <br><br> In a similar vein, one OnRamp student admitted that when receiving a project from their Phase I counterparts, the team had to spend a large amount of time trying to sift through and understand the research that had been done.",
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
      insightText: "However, we must acknowledge that an inefficient handoff process is not only a function of poor internal research organization, but also because it is extremely difficult to be able to pass knowledge and experience built from being immersed in any given project. <br><br> Some Honda teams are already trying to deal with this issue by “onboarding” individuals from the receiving team - essentially, these employees become involved towards the latter stages of the project, but have opportunities to understand how research has been organized, or ask for clarification from any of the current team members. ",
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