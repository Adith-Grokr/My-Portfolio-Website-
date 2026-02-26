import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Terminal,
  Search,
  X
} from 'lucide-react';

// --- Data Constants ---

const WORK_DATA = [
  {
    title: "Data Grokr",
    role: "Data Engineer",
    period: "Dec 2021 - June 2023",
    description: "Built scalable ETL pipelines extracting data from on-premises servers using Python. Created BODS to extract data to Blob via OGG in XML, utilizing IIB Dataflow & Kafka. Constructed IBM DataStage pipelines migrating data to Snowflake with automation via Shell scripting & Stone Branch.",
    href: "#", 
  },
  {
    title: "Data Grokr",
    role: "Data Engineer Intern",
    period: "June 2021 - Dec 2021",
    description: "Automated sanity check & migration reports reducing manual work by 100 hrs/month. Built frontend & backend for synthetic Data Generating Software using ML. Developed user manuals & technical specs.",
    href: "#", 
  },
];

const HONORS_DATA = [
  {
    title: "Data Science Methodology",
    issuer: "IBM",
    description: "Certification demonstrating proficiency in data science methodologies and best practices.",
    href: "https://www.linkedin.com/in/aditya-sheripally", 
  },
  {
    title: "DSA Self Paced",
    issuer: "GeeksforGeeks",
    description: "Comprehensive course on Data Structures and Algorithms focusing on problem-solving skills.",
    href: "https://www.linkedin.com/in/aditya-sheripally",
  },
  {
    title: "AWS: Technical Accredited",
    issuer: "Amazon Web Services",
    description: "Accreditation validating technical knowledge of AWS cloud services and architecture.",
    href: "https://www.linkedin.com/in/aditya-sheripally",
  },
  {
    title: "LangChain & LangGraph",
    issuer: "DeepLearning.AI / Specialized Training",
    description: "Specialized training in building LLM applications with LangChain and multi-agent systems with LangGraph.",
    href: "https://www.linkedin.com/in/aditya-sheripally",
  },
];

const PROJECTS_DATA = [
  {
    title: "Chat with GitHub Repo",
    description: "LLM app with RAG to chat with GitHub Repo in just 30 lines of Python Code. The app uses Retrieval Augmented Generation (RAG) to provide accurate answers to questions based on the content of the specified GitHub repository.",
    role: "AI Developer",
    period: "2024",
    achievements: [
      "Provide the name of GitHub Repository as input",
      "Ask questions about the content of the GitHub repository",
      "Get accurate answers using OpenAI's API and Embedchain"
    ],
    technologies: ["Python", "OpenAI API", "Embedchain", "RAG"],
    href: "#", 
  },
  {
    title: "Chat with Arxiv Research Papers",
    description: "This Streamlit app enables you to engage in interactive conversations with arXiv, a vast repository of scholarly articles, using GPT-4o. With this RAG application, you can easily access and explore the wealth of knowledge contained within arXiv.",
    role: "AI Research Assistant",
    period: "2024",
    achievements: [
      "Engage in conversational interactions with arXiv",
      "Access and explore a vast collection of research papers",
      "Utilize OpenAI GPT-4o for intelligent responses"
    ],
    technologies: ["Streamlit", "OpenAI GPT-4o", "RAG", "Python"],
    href: "#", 
  },
  {
    title: "AI Data Analysis Agent",
    description: "An AI data analysis Agent built using the Agno Agent framework and OpenAI's gpt-4o model. This agent helps users analyze their data (CSV, Excel) through natural language queries, powered by OpenAI's language models and DuckDB for efficient data processing.",
    role: "AI Agent Developer",
    period: "2024",
    achievements: [
      "Built file upload support for CSV/Excel with auto schema inference.",
      "Implemented natural language to SQL query conversion for instant data answers.",
      "Enabled advanced analysis: complex aggregations, filtering, and statistical summaries."
    ],
    technologies: ["Agno Framework", "OpenAI GPT-4o", "DuckDB", "Streamlit", "Python", "SQL"],
    href: "#", 
  },
  {
    title: "AI Study Companion",
    description: "A personal AI agent to organize and analyze course materials (PDFs, PPTs) for instant Q&A and summarization.",
    role: "AI Agent",
    period: "Jun 2025 - Aug 2025",
    achievements: [
      "Implemented LangChain for LLM-based document processing & LangGraph for multi-agent orchestration.",
      "Integrated PineconeDB to store 1,200+ document embeddings, reducing study time by ~40%.",
      "Designed React-based web interface for interactive Q&A; optimized retrieval speed to sub-second responses."
    ],
    technologies: ["LangChain", "LangGraph", "LangSmith", "Pinecone DB", "React", "LLM Tuning"],
    href: "#",
  },
  {
    title: "NYC Data Analysis",
    description: "Exploratory data analysis and data mining on NYC datasets to predict demographics, crime, and traffic trends.",
    role: "Data Analyst",
    period: "Oct 2024 - Nov 2024",
    achievements: [
      "Led team of 4 to perform EDA and data mining.",
      "Conducted pre-processing in Python; visualized trends & correlations using Tableau.",
      "Trained & validated ML models in RapidMiner; selected Gradient Boosted Model with 96% accuracy."
    ],
    technologies: ["Python", "Tableau", "RapidMiner", "Data Mining", "Machine Learning"],
    href: "#",
  },
];

const CONTACT_LINKS = [
  { title: "email", href: "mailto:as47619n@pace.edu", icon: <Mail className="w-4 h-4"/> },
  { title: "linkedin", href: "https://www.linkedin.com/in/aditya-sheripally", icon: <Linkedin className="w-4 h-4"/> }, 
  { title: "github", href: "https://github.com/Adith-Grokr", icon: <Github className="w-4 h-4"/> }, 
  { title: "phone", href: "tel:5512321951", icon: <Phone className="w-4 h-4"/> },
];

// --- Utility Components ---

const ScrambleText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((_letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

// --- Main Components ---

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: string[];
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, role, period, achievements, technologies, href }) => (
  <div className="group border border-zinc-800 p-6 transition-all duration-300 hover:border-[#ff6b35]/50 rounded-lg bg-zinc-900/50 hover:bg-zinc-900">
    <a href={href || "#"} target={href !== "#" ? "_blank" : undefined} rel="noreferrer" className="block">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-[#ff6b35] transition-colors">
          {title}
        </h2>
        {href !== "#" && <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-[#ff6b35] transition-colors" />}
      </div>
    </a>

    <p className="text-sm text-zinc-500 mb-4 font-mono">
      <span className="text-[#ff6b35]">{role}</span> {period && <span className="text-zinc-600">| {period}</span>}
    </p>

    <p className="text-zinc-300 mb-6 leading-relaxed text-sm md:text-base">{description}</p>

    <div className="space-y-6">
      {achievements && achievements.length > 0 && (
        <div>
          <h3 className="text-zinc-500 font-semibold mb-2 text-xs uppercase tracking-wider">Achievements</h3>
          <ul className="space-y-1 text-zinc-400 text-sm list-disc list-inside marker:text-zinc-700">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div>
          <h3 className="text-zinc-500 font-semibold mb-2 text-xs uppercase tracking-wider">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs text-zinc-400 bg-zinc-800/50 rounded border border-zinc-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

interface SectionListProps {
  title: string;
  items: any[];
  viewAllHref?: string;
  viewAllText?: string;
}

const SectionList = ({ title, items, viewAllHref, viewAllText }: SectionListProps) => (
  <section className="mb-16 animate-fade-in-up">
    <h2 className="text-2xl font-bold mb-6 flex items-center text-zinc-100">
      <span className="text-[#ff6b35] mr-2">*</span> {title}
    </h2>
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="group border-l-2 border-zinc-800 pl-4 hover:border-[#ff6b35] transition-colors duration-300">
          <a href={item.href || "#"} target={item.href !== "#" ? "_blank" : undefined} rel="noreferrer" className="block">
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-zinc-200 group-hover:text-[#ff6b35] transition-colors duration-200">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-500 mb-2 font-mono">
              <span className="text-[#ff6b35]">{item.role || item.issuer}</span> {item.period && `(${item.period})`}
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-2">{item.description}</p>
          </a>
        </div>
      ))}
    </div>
    {viewAllHref && (
      <a
        href={viewAllHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 mt-6 text-[#ff6b35] hover:underline group font-medium text-sm"
      >
        {viewAllText}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    )}
  </section>
);

// --- Page Views ---

const HomeView = ({ setView }: { setView: (v: string) => void }) => (
  <div className="animate-fade-in">
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-100 tracking-tight">
        <span className="inline-block">
          <ScrambleText text="Sheripally Aditya" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-zinc-500 font-mono text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          New York, NY
        </div>
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          Data Science MS Student @ Pace University
        </div>
      </div>
      <p className="leading-relaxed text-zinc-400 max-w-2xl mt-6 text-base md:text-lg">
        Software Engineer & Data Scientist passionate about building AI Agents, LLM applications, and Cloud Engineering solutions. 
        Experienced in AWS, Fullstack development, and building scalable data pipelines.
        <br /><br />
        Currently pursuing an MS in Data Science with a concentration in Machine Learning (GPA: 3.9).
      </p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '#'; // Placeholder for resume logic
            link.click();
          }}
          className="inline-flex items-center gap-2 text-[#ff6b35] hover:underline group font-medium"
        >
          Resume
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </header>

    <SectionList 
      title="experience" 
      items={WORK_DATA} 
      viewAllHref="#" 
      viewAllText="view all experience" 
    />

    <SectionList 
      title="honors & certificates" 
      items={HONORS_DATA}
      viewAllHref="https://www.linkedin.com/in/aditya-sheripally"
      viewAllText="view linkedin profile"
    />

    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-zinc-100">
        <span className="text-[#ff6b35] mr-2">*</span>
        skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div className="bg-zinc-900/30 p-4 rounded border border-zinc-800">
          <p className="text-[#ff6b35] font-medium mb-2 uppercase text-xs tracking-wider">Languages</p>
          <p className="text-zinc-400 leading-relaxed">Python (Pandas, Numpy, Scikit-Learn), Shell Scripting, C, C++, Java, Apache Spark</p>
        </div>
        <div className="bg-zinc-900/30 p-4 rounded border border-zinc-800">
          <p className="text-[#ff6b35] font-medium mb-2 uppercase text-xs tracking-wider">Data & Databases</p>
          <p className="text-zinc-400 leading-relaxed">MySQL, SQL, Snowflake, Redis, MongoDB</p>
        </div>
        <div className="bg-zinc-900/30 p-4 rounded border border-zinc-800">
          <p className="text-[#ff6b35] font-medium mb-2 uppercase text-xs tracking-wider">Analytics & BI</p>
          <p className="text-zinc-400 leading-relaxed">Tableau, Google Analytics, RapidMiner, Optymyze, MS Excel, PowerBI</p>
        </div>
        <div className="bg-zinc-900/30 p-4 rounded border border-zinc-800">
          <p className="text-[#ff6b35] font-medium mb-2 uppercase text-xs tracking-wider">AI & ML Tools</p>
          <p className="text-zinc-400 leading-relaxed">Langchain, Langgraph, Langsmith, Pinecone DB, ChromaDB, LLM Tuning, MCP</p>
        </div>
        <div className="col-span-1 md:col-span-2 bg-zinc-900/30 p-4 rounded border border-zinc-800">
          <p className="text-[#ff6b35] font-medium mb-2 uppercase text-xs tracking-wider">Machine Learning Skills</p>
          <p className="text-zinc-400 leading-relaxed">Bayesian Methods, SVMs, Regression, Deep Learning, NLP, CNNs, RNNs, LSTMs, Feature Engineering</p>
        </div>
      </div>
    </section>

    <section className="animate-fade-in-up mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-zinc-100">
        <span className="text-[#ff6b35] mr-2">*</span> contact
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {CONTACT_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#ff6b35] transition-colors duration-200 lowercase bg-zinc-900/50 px-3 py-2 rounded border border-zinc-800 hover:border-[#ff6b35]/50"
          >
            {link.icon}
            {link.title}
          </a>
        ))}
      </div>
    </section>
  </div>
);

const ProjectsView = () => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "/" || (e.ctrlKey && e.key.toLowerCase() === "k")) &&
        document.activeElement !== inputRef.current
      ) {
        e.preventDefault();
        setShowSearch(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      if (e.key === "Escape") {
        setShowSearch(false);
        setSearch("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredData = PROJECTS_DATA.filter((p) => {
    const query = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.role.toLowerCase().includes(query) ||
      (p.technologies && p.technologies.join(" ").toLowerCase().includes(query))
    );
  });

  return (
    <div className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">
        <span className="text-[#ff6b35] mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <div className="relative mb-8">
        {!showSearch ? (
           <p className="hidden sm:block text-sm text-zinc-500 font-mono">
           press{" "}
           <kbd 
            onClick={() => setShowSearch(true)}
            className="cursor-pointer px-1 py-0.5 text-xs border border-zinc-700 rounded bg-zinc-800 hover:bg-zinc-700 transition-colors">
              /
           </kbd>{" "}
           to search
         </p>
        ) : (
          <div className="relative animate-fade-in">
             <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
             <input
              ref={inputRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-10 py-2 bg-zinc-900 text-zinc-100 border border-[#ff6b35] rounded focus:outline-none placeholder:text-zinc-600 font-mono text-sm"
            />
            <button 
              onClick={() => { setShowSearch(false); setSearch(""); }}
              className="absolute right-3 top-2.5 text-zinc-500 hover:text-zinc-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      <p className="text-zinc-400 mb-12 leading-relaxed max-w-2xl">
        Here are some of the academic and personal projects I've worked on, involving AI Agents, Data Mining, and Fullstack development.
      </p>

      <div className="space-y-12">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <ProjectCard 
              key={item.title}
              title={item.title}
              description={item.description}
              role={item.role}
              period={item.period}
              achievements={item.achievements}
              technologies={item.technologies}
              href={item.href}
            />
          ))
        ) : (
          <div className="text-center py-12 border border-dashed border-zinc-800 rounded">
            <p className="text-zinc-500 italic">No projects found matching "{search}"</p>
            <button 
              onClick={() => setSearch("")} 
              className="mt-2 text-[#ff6b35] text-sm hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- App Root ---

export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case "h":
          setView("home");
          break;
        case "p":
          setView("projects");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-[#ff6b35] selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-16">
        {/* Navbar */}
        <nav className="flex items-center justify-between mb-12 text-sm font-mono">
          <div className="flex space-x-6">
            <button
              onClick={() => setView('home')}
              className={`transition-colors duration-200 ${view === 'home' ? 'text-[#ff6b35]' : 'text-zinc-500 hover:text-white'}`}
            >
              [h] home
            </button>
            <button
              onClick={() => setView('projects')}
              className={`transition-colors duration-200 ${view === 'projects' ? 'text-[#ff6b35]' : 'text-zinc-500 hover:text-white'}`}
            >
              [p] projects
            </button>
          </div>
        </nav>

        {/* Content */}
        <main>
          {view === 'home' ? <HomeView setView={setView} /> : <ProjectsView />}
        </main>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-zinc-900 text-zinc-600 text-xs text-center font-mono">
          <p>stack: react, tailwindcss, lucide-react</p>
        </footer>
      </div>
    </div>
  );
}
