// Data for keytakeaways section:
import k1 from 'assets/images/keytakeaway1.svg';
import k2 from 'assets/images/keytakeaway2.svg';
import k3 from 'assets/images/keytakeaway3.svg';

// Data for research goals section:
import r1 from 'assets/images/research1.svg';
import r2 from 'assets/images/research2.svg';
import r3 from 'assets/images/research3.svg';

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
        customComponentKey: null,
      },
      { 
        subsectionTitle: "Customer Journey Map",
        customComponentKey: "JOURNEYMAP",
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
