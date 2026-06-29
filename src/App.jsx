import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Code2, Server, ChevronDown, ChevronRight, ExternalLink, Github, Linkedin, BookOpen, Youtube, Globe } from 'lucide-react'

const roadmapData = {
  frontend: {
    title: "Frontend Development",
    icon: Code2,
    duration: "2 Months",
    color: "from-blue-500 to-cyan-500",
    weeks: [
      {
        week: 1,
        title: "HTML & CSS Fundamentals",
        topics: [
          "HTML5 semantic elements",
          "CSS Box Model",
          "Flexbox & Grid Layout",
          "Responsive Design",
          "CSS Animations"
        ],
        resources: [
          { name: "W3Schools HTML", url: "https://www.w3schools.com/html/", type: "website" },
          { name: "W3Schools CSS", url: "https://www.w3schools.com/css/", type: "website" },
          { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "website" },
          { name: "CSS Tricks", url: "https://css-tricks.com/", type: "website" },
          { name: "Traversy Media", url: "https://www.youtube.com/c/TraversyMedia", type: "youtube" },
          { name: "Kevin Powell", url: "https://www.youtube.com/@KevinPowell", type: "youtube" }
        ]
      },
      {
        week: 2,
        title: "JavaScript Essentials",
        topics: [
          "Variables & Data Types",
          "Functions & Scope",
          "DOM Manipulation",
          "Event Handling",
          "ES6+ Features"
        ],
        resources: [
          { name: "W3Schools JavaScript", url: "https://www.w3schools.com/js/", type: "website" },
          { name: "JavaScript.info", url: "https://javascript.info/", type: "website" },
          { name: "MDN JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", type: "website" },
          { name: "freeCodeCamp", url: "https://www.youtube.com/c/freeCodeCamp", type: "youtube" },
          { name: "Net Ninja", url: "https://www.youtube.com/c/TheNetNinja", type: "youtube" },
          { name: "JavaScript Mastery", url: "https://www.youtube.com/c/jsmasterypro", type: "youtube" }
        ]
      },
      {
        week: 3,
        title: "React Fundamentals",
        topics: [
          "Components & Props",
          "State Management",
          "Hooks (useState, useEffect)",
          "Conditional Rendering",
          "Lists & Keys"
        ],
        resources: [
          { name: "React Documentation", url: "https://react.dev/learn", type: "website" },
          { name: "W3Schools React", url: "https://www.w3schools.com/react/", type: "website" },
          { name: "React Tutorial", url: "https://reactjs.org/tutorial/tutorial.html", type: "website" },
          { name: "Traversy Media React", url: "https://www.youtube.com/playlist?list=PLillGF-RfqbbQeVSccR9FqNt81Tx7833k", type: "youtube" },
          { name: "Web Dev Simplified", url: "https://www.youtube.com/c/WebDevSimplified", type: "youtube" },
          { name: "Code with Ania", url: "https://www.youtube.com/c/CodeWithAniaKubow", type: "youtube" }
        ]
      },
      {
        week: 4,
        title: "Advanced React",
        topics: [
          "Custom Hooks",
          "Context API",
          "React Router",
          "Form Handling",
          "API Integration"
        ],
        resources: [
          { name: "React Router Docs", url: "https://reactrouter.com/", type: "website" },
          { name: "Redux Toolkit", url: "https://redux-toolkit.js.org/", type: "website" },
          { name: "React Query", url: "https://tanstack.com/query/latest", type: "website" },
          { name: "Academind React", url: "https://www.youtube.com/c/Academind", type: "youtube" },
          { name: "Fireship", url: "https://www.youtube.com/c/Fireship", type: "youtube" },
          { name: "Ben Awad", url: "https://www.youtube.com/c/BenAwad97", type: "youtube" }
        ]
      },
      {
        week: 5,
        title: "State Management & Performance",
        topics: [
          "Redux Toolkit",
          "Zustand",
          "React Query",
          "Memoization",
          "Code Splitting"
        ],
        resources: [
          { name: "Redux Docs", url: "https://redux.js.org/", type: "website" },
          { name: "Zustand Docs", url: "https://zustand-demo.pmnd.rs/", type: "website" },
          { name: "React Performance", url: "https://react.dev/learn/render-and-commit", type: "website" },
          { name: "Jack Herrington", url: "https://www.youtube.com/c/JackHerrington", type: "youtube" },
          { name: "Theo - t3.gg", url: "https://www.youtube.com/c/theot3", type: "youtube" },
          { name: "Kent C. Dodds", url: "https://www.youtube.com/c/kentcdodds", type: "youtube" }
        ]
      },
      {
        week: 6,
        title: "Testing & Deployment",
        topics: [
          "Jest & React Testing Library",
          "Cypress E2E Testing",
          "CI/CD with GitHub Actions",
          "Vercel Deployment",
          "Netlify Deployment"
        ],
        resources: [
          { name: "Testing Library", url: "https://testing-library.com/", type: "website" },
          { name: "Cypress Docs", url: "https://docs.cypress.io/", type: "website" },
          { name: "GitHub Actions", url: "https://docs.github.com/actions", type: "website" },
          { name: "Vercel Docs", url: "https://vercel.com/docs", type: "website" },
          { name: "Testing JavaScript", url: "https://www.youtube.com/c/TestingJavaScript", type: "youtube" },
          { name: "Netlify", url: "https://www.youtube.com/c/Netlify", type: "youtube" }
        ]
      },
      {
        week: 7,
        title: "UI Libraries & Styling",
        topics: [
          "Tailwind CSS",
          "Material UI",
          "shadcn/ui",
          "Framer Motion",
          "CSS Modules"
        ],
        resources: [
          { name: "Tailwind CSS", url: "https://tailwindcss.com/docs", type: "website" },
          { name: "Material UI", url: "https://mui.com/", type: "website" },
          { name: "shadcn/ui", url: "https://ui.shadcn.com/", type: "website" },
          { name: "Framer Motion", url: "https://www.framer.com/motion/", type: "website" },
          { name: "DesignCourse", url: "https://www.youtube.com/c/DesignCourse", type: "youtube" },
          { name: "Gary Simon", url: "https://www.youtube.com/c/GarySimonDesign", type: "youtube" }
        ]
      },
      {
        week: 8,
        title: "Final Projects & Portfolio",
        topics: [
          "Build Complete Projects",
          "GitHub Portfolio",
          "Code Review Best Practices",
          "Interview Preparation",
          "Job Application Strategy"
        ],
        resources: [
          { name: "GitHub Guides", url: "https://guides.github.com/", type: "website" },
          { name: "Portfolio Examples", url: "https://www.awwwards.com/", type: "website" },
          { name: "Frontend Interview", url: "https://frontendinterviewhandbook.com/", type: "website" },
          { name: "Clement Mihailescu", url: "https://www.youtube.com/c/ClementMihailescu", type: "youtube" },
          { name: "Tech With Tim", url: "https://www.youtube.com/c/TechWithTim", type: "youtube" },
          { name: "Fireship Interviews", url: "https://www.youtube.com/c/Fireship", type: "youtube" }
        ]
      }
    ]
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    duration: "2 Months",
    color: "from-green-500 to-emerald-500",
    weeks: [
      {
        week: 1,
        title: "Node.js Fundamentals",
        topics: [
          "Node.js Architecture",
          "Modules & NPM",
          "File System Operations",
          "Event Loop",
          "Streams & Buffers"
        ],
        resources: [
          { name: "Node.js Docs", url: "https://nodejs.org/docs/", type: "website" },
          { name: "W3Schools Node.js", url: "https://www.w3schools.com/nodejs/", type: "website" },
          { name: "Node.js Best Practices", url: "https://github.com/goldbergyoni/nodebestpractices", type: "website" },
          { name: "Net Ninja Node.js", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU", type: "youtube" },
          { name: "Traversy Media Node", url: "https://www.youtube.com/playlist?list=PLillGF-RfqbbQeVSccR9FqNt81Tx7833k", type: "youtube" },
          { name: "Academind Node", url: "https://www.youtube.com/c/Academind", type: "youtube" }
        ]
      },
      {
        week: 2,
        title: "Express.js Basics",
        topics: [
          "Express Setup & Middleware",
          "Routing",
          "Request/Response Handling",
          "Static Files",
          "Error Handling"
        ],
        resources: [
          { name: "Express Docs", url: "https://expressjs.com/", type: "website" },
          { name: "Express Tutorial", url: "https://expressjs.com/en/starter/hello-world.html", type: "website" },
          { name: "MDN Express", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs", type: "website" },
          { name: "Web Dev Simplified Express", url: "https://www.youtube.com/c/WebDevSimplified", type: "youtube" },
          { name: "Hitesh Choudhary", url: "https://www.youtube.com/c/HiteshChoudharydotcom", type: "youtube" },
          { name: "Codevolution", url: "https://www.youtube.com/c/Codevolution", type: "youtube" }
        ]
      },
      {
        week: 3,
        title: "RESTful APIs",
        topics: [
          "REST Principles",
          "HTTP Methods",
          "API Design",
          "Status Codes",
          "API Versioning"
        ],
        resources: [
          { name: "REST API Tutorial", url: "https://restfulapi.net/", type: "website" },
          { name: "API Design Best Practices", url: "https://apisyouwonthate.com/", type: "website" },
          { name: "Postman Learning", url: "https://learning.postman.com/", type: "website" },
          { name: "Traversy API Design", url: "https://www.youtube.com/c/TraversyMedia", type: "youtube" },
          { name: "Fireship REST", url: "https://www.youtube.com/c/Fireship", type: "youtube" },
          { name: "Academind APIs", url: "https://www.youtube.com/c/Academind", type: "youtube" }
        ]
      },
      {
        week: 4,
        title: "Databases",
        topics: [
          "MongoDB Basics",
          "Mongoose ODM",
          "SQL Fundamentals",
          "PostgreSQL",
          "Database Design"
        ],
        resources: [
          { name: "MongoDB University", url: "https://university.mongodb.com/", type: "website" },
          { name: "Mongoose Docs", url: "https://mongoosejs.com/docs/", type: "website" },
          { name: "PostgreSQL Tutorial", url: "https://www.postgresql.org/docs/", type: "website" },
          { name: "Net Ninja MongoDB", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9h67RV1mESg_Mq7D1p4XNVv", type: "youtube" },
          { name: "Traversy Databases", url: "https://www.youtube.com/c/TraversyMedia", type: "youtube" },
          { name: "FreeCodeCamp SQL", url: "https://www.youtube.com/c/freeCodeCamp", type: "youtube" }
        ]
      },
      {
        week: 5,
        title: "Authentication & Security",
        topics: [
          "JWT Authentication",
          "Password Hashing",
          "Session Management",
          "OAuth 2.0",
          "Security Best Practices"
        ],
        resources: [
          { name: "JWT.io", url: "https://jwt.io/", type: "website" },
          { name: "OWASP Security", url: "https://owasp.org/", type: "website" },
          { name: "Auth0 Docs", url: "https://auth0.com/docs", type: "website" },
          { name: "Dave Gray Auth", url: "https://www.youtube.com/c/DaveGrayTeachesCode", type: "youtube" },
          { name: "Web Dev Simplified Auth", url: "https://www.youtube.com/c/WebDevSimplified", type: "youtube" },
          { name: "Hitesh Choudhary Auth", url: "https://www.youtube.com/c/HiteshChoudharydotcom", type: "youtube" }
        ]
      },
      {
        week: 6,
        title: "API Testing & Documentation",
        topics: [
          "Jest API Testing",
          "Supertest",
          "Swagger/OpenAPI",
          "Postman Collections",
          "API Monitoring"
        ],
        resources: [
          { name: "Jest Docs", url: "https://jestjs.io/", type: "website" },
          { name: "Supertest Docs", url: "https://github.com/visionmedia/supertest", type: "website" },
          { name: "Swagger Docs", url: "https://swagger.io/docs/", type: "website" },
          { name: "Postman", url: "https://www.youtube.com/c/Postman", type: "youtube" },
          { name: "Testing API", url: "https://www.youtube.com/c/TestingJavaScript", type: "youtube" },
          { name: "Academind Testing", url: "https://www.youtube.com/c/Academind", type: "youtube" }
        ]
      },
      {
        week: 7,
        title: "Deployment & DevOps",
        topics: [
          "Docker Basics",
          "CI/CD Pipelines",
          "AWS/Cloud Services",
          "Environment Variables",
          "Logging & Monitoring"
        ],
        resources: [
          { name: "Docker Docs", url: "https://docs.docker.com/", type: "website" },
          { name: "GitHub Actions", url: "https://docs.github.com/actions", type: "website" },
          { name: "AWS Docs", url: "https://docs.aws.amazon.com/", type: "website" },
          { name: "DevOps Tutorials", url: "https://www.youtube.com/c/DevOpsTube", type: "youtube" },
          { name: "Fireship DevOps", url: "https://www.youtube.com/c/Fireship", type: "youtube" },
          { name: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana", type: "youtube" }
        ]
      },
      {
        week: 8,
        title: "Final Projects & Integration",
        topics: [
          "Full Stack Projects",
          "API Integration",
          "Performance Optimization",
          "Scaling Strategies",
          "Production Deployment"
        ],
        resources: [
          { name: "Full Stack Tutorial", url: "https://www.fullstackopen.com/en/", type: "website" },
          { name: "MERN Stack", url: "https://www.mongodb.com/mern-stack", type: "website" },
          { name: "Deployment Guides", url: "https://www.digitalocean.com/community/tutorials", type: "website" },
          { name: "Traversy Full Stack", url: "https://www.youtube.com/c/TraversyMedia", type: "youtube" },
          { name: "Hitesh Choudhary Projects", url: "https://www.youtube.com/c/HiteshChoudharydotcom", type: "youtube" },
          { name: "JavaScript Mastery", url: "https://www.youtube.com/c/jsmasterypro", type: "youtube" }
        ]
      }
    ]
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })
  const [activeTrack, setActiveTrack] = useState('frontend')
  const [expandedWeek, setExpandedWeek] = useState(null)

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleWeek = (week) => {
    setExpandedWeek(expandedWeek === week ? null : week)
  }

  const getResourceIcon = (type) => {
    switch (type) {
      case 'youtube':
        return <Youtube className="w-4 h-4" />
      case 'website':
        return <Globe className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h1 className="text-2xl font-bold gradient-text">Dev Roadmap</h1>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-4 gradient-text"
          >
            Your Complete Learning Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            Master Frontend with React and Backend with Express in just 4 months
          </motion.p>

          {/* Track Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {Object.entries(roadmapData).map(([key, track]) => {
              const Icon = track.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTrack(key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTrack === key
                      ? `bg-gradient-to-r ${track.color} text-white shadow-lg scale-105`
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span>{track.title}</span>
                  <span className="text-sm opacity-80">({track.duration})</span>
                </button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Roadmap Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrack}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {roadmapData[activeTrack].weeks.map((weekData) => (
                <motion.div
                  key={weekData.week}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (weekData.week - 1) * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden hover-lift"
                >
                  <button
                    onClick={() => toggleWeek(weekData.week)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${roadmapData[activeTrack].color} flex items-center justify-center text-white font-bold text-lg`}>
                        {weekData.week}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Week {weekData.week}: {weekData.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {weekData.topics.length} topics to master
                        </p>
                      </div>
                    </div>
                    {expandedWeek === weekData.week ? (
                      <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedWeek === weekData.week && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 dark:border-gray-700"
                      >
                        <div className="p-6 space-y-6">
                          {/* Topics */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                              Topics to Learn
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {weekData.topics.map((topic, idx) => (
                                <motion.span
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                                >
                                  {topic}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Resources */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                              Learning Resources
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {weekData.resources.map((resource, idx) => (
                                <motion.a
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                >
                                  <span className={`p-2 rounded-lg ${
                                    resource.type === 'youtube' 
                                      ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' 
                                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                  }`}>
                                    {getResourceIcon(resource.type)}
                                  </span>
                                  <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {resource.name}
                                  </span>
                                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors" />
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400">
              Made with ❤️ by <span className="font-semibold text-primary-600 dark:text-primary-400">Karan</span>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/karan-jee-50868b315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5] text-white hover:bg-[#006097] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/karan00006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
