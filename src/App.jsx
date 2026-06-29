import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Code2, Server, ChevronDown, ChevronRight, ExternalLink, Github, Linkedin, BookOpen, Youtube, Globe, Zap, Menu, X, User, FileText } from 'lucide-react'

const roadmapData = {
  frontend: {
    title: "Frontend Development",
    icon: Code2,
    duration: "2.5 Months",
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
          { name: "HTML & CSS Full Course", url: "https://www.youtube.com/watch?v=kUMe1FH4CHE", type: "youtube" },
          { name: "CSS Flexbox Course", url: "https://www.youtube.com/watch?v=3J65DdHk2-0", type: "youtube" },
          { name: "CSS Grid Course", url: "https://www.youtube.com/watch?v=jV8B24rSN5o", type: "youtube" }
        ]
      },
      {
        week: 2,
        title: "Git & GitHub Fundamentals",
        topics: [
          "Git Basics & Commands",
          "GitHub Repository Management",
          "Branching & Merging",
          "Pull Requests & Code Review",
          "Git Workflows"
        ],
        resources: [
          { name: "Git Documentation", url: "https://git-scm.com/doc", type: "website" },
          { name: "GitHub Guides", url: "https://guides.github.com/", type: "website" },
          { name: "GitHub Skills", url: "https://skills.github.com/", type: "website" },
          { name: "Git & GitHub Full Course", url: "https://www.youtube.com/watch?v=RGOj5W-h7w4", type: "youtube" },
          { name: "Git Tutorial for Beginners", url: "https://www.youtube.com/watch?v=HVsySz-h8r4", type: "youtube" },
          { name: "GitHub Complete Tutorial", url: "https://www.youtube.com/watch?v=3RjQ1utlKs0", type: "youtube" }
        ]
      },
      {
        week: 3,
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
          { name: "JavaScript Full Course", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg", type: "youtube" },
          { name: "JavaScript for Beginners", url: "https://www.youtube.com/watch?v=hdI2bqOjy3c", type: "youtube" },
          { name: "ES6+ JavaScript Tutorial", url: "https://www.youtube.com/watch?v=n1RpwMzFGro", type: "youtube" }
        ]
      },
      {
        week: 4,
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
          { name: "React Full Course", url: "https://www.youtube.com/watch?v=SqcY0GlETPk", type: "youtube" },
          { name: "React Tutorial for Beginners", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8", type: "youtube" },
          { name: "React Hooks Tutorial", url: "https://www.youtube.com/watch?v=TNhaWjU5q9I", type: "youtube" }
        ]
      },
      {
        week: 5,
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
          { name: "React Router Tutorial", url: "https://www.youtube.com/watch?v=Ul3y1LXxzwU", type: "youtube" },
          { name: "Redux Toolkit Tutorial", url: "https://www.youtube.com/watch?v=9zySeJTg-LM", type: "youtube" },
          { name: "React Query Course", url: "https://www.youtube.com/watch?v=AMl2vXXVm1U", type: "youtube" }
        ]
      },
      {
        week: 6,
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
          { name: "Advanced React Patterns", url: "https://www.youtube.com/watch?v=xsSnOQynmYU", type: "youtube" },
          { name: "React Performance Optimization", url: "https://www.youtube.com/watch?v=CvA7FBsL3LQ", type: "youtube" },
          { name: "Zustand Tutorial", url: "https://www.youtube.com/watch?v=X2t7mnWWp4E", type: "youtube" }
        ]
      },
      {
        week: 7,
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
          { name: "Jest Testing Tutorial", url: "https://www.youtube.com/watch?v=7rT5v2VgWmE", type: "youtube" },
          { name: "React Testing Library", url: "https://www.youtube.com/watch?v=ML5egN8xIOE", type: "youtube" },
          { name: "Cypress E2E Testing", url: "https://www.youtube.com/watch?v=6Jz1c1P6g7M", type: "youtube" }
        ]
      },
      {
        week: 8,
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
          { name: "Tailwind CSS Full Course", url: "https://www.youtube.com/watch?v=ft30zcMlFao", type: "youtube" },
          { name: "Material UI Tutorial", url: "https://www.youtube.com/watch?v=1e-fDIK5T7U", type: "youtube" },
          { name: "Framer Motion Tutorial", url: "https://www.youtube.com/watch?v=2T-lO8b_4f8", type: "youtube" }
        ]
      },
      {
        week: 9,
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
          { name: "React Portfolio Tutorial", url: "https://www.youtube.com/watch?v=1tjO1bBQ0L0", type: "youtube" },
          { name: "Frontend Interview Prep", url: "https://www.youtube.com/watch?v=DEqY54tC7p8", type: "youtube" },
          { name: "GitHub Portfolio Guide", url: "https://www.youtube.com/watch?v=0f5gY8eC4JQ", type: "youtube" }
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
          { name: "Node.js Full Course", url: "https://www.youtube.com/watch?v=Oe421EPjeBE", type: "youtube" },
          { name: "Node.js Crash Course", url: "https://www.youtube.com/watch?v=fbYCNfcsN1Y", type: "youtube" },
          { name: "Node.js Tutorial for Beginners", url: "https://www.youtube.com/watch?v=U8XF6AFGqlc", type: "youtube" }
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
          { name: "Express.js Full Course", url: "https://www.youtube.com/watch?v=L72fhGm1tfE", type: "youtube" },
          { name: "Express.js Tutorial", url: "https://www.youtube.com/watch?v=SLWPqooHJGs", type: "youtube" },
          { name: "Express & Node.js Course", url: "https://www.youtube.com/watch?v=Oe421EPjeBE", type: "youtube" }
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
          { name: "REST API Tutorial", url: "https://www.youtube.com/watch?v=-7nJb8slI3k", type: "youtube" },
          { name: "Building REST APIs", url: "https://www.youtube.com/watch?v=Oe421EPjeBE", type: "youtube" },
          { name: "API Design Best Practices", url: "https://www.youtube.com/watch?v=7YcWxPHsItc", type: "youtube" }
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
          { name: "MongoDB Full Course", url: "https://www.youtube.com/watch?v=pWbMrx5rV2w", type: "youtube" },
          { name: "Mongoose Tutorial", url: "https://www.youtube.com/watch?v=WDrE305SD1U", type: "youtube" },
          { name: "SQL Full Course", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY", type: "youtube" }
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
          { name: "JWT Authentication Tutorial", url: "https://www.youtube.com/watch?v=7w17r21KG8k", type: "youtube" },
          { name: "Node.js Authentication", url: "https://www.youtube.com/watch?v=U8XF6AFGqlc", type: "youtube" },
          { name: "OAuth 2.0 Tutorial", url: "https://www.youtube.com/watch=996Okx_1C7g", type: "youtube" }
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
          { name: "API Testing with Jest", url: "https://www.youtube.com/watch?v=Amg0q3B1vcE", type: "youtube" },
          { name: "Swagger Documentation", url: "https://www.youtube.com/watch?v=7oYVPo8eq0A", type: "youtube" },
          { name: "Postman API Testing", url: "https://www.youtube.com/watch?v=VywxI2Qh3Lc", type: "youtube" }
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
          { name: "Docker Full Course", url: "https://www.youtube.com/watch?v=3c-iBn7FPGM", type: "youtube" },
          { name: "GitHub Actions Tutorial", url: "https://www.youtube.com/watch?v=R8veReO7frQ", type: "youtube" },
          { name: "AWS for Beginners", url: "https://www.youtube.com/watch?v=3snlp2FRnqE", type: "youtube" }
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
          { name: "MERN Stack Full Course", url: "https://www.youtube.com/watch?v=-0exw-9YJBo", type: "youtube" },
          { name: "Full Stack Project Tutorial", url: "https://www.youtube.com/watch?v=K8YFLr297y0", type: "youtube" },
          { name: "E-commerce Full Stack", url: "https://www.youtube.com/watch?v=112TFo8-3g0", type: "youtube" }
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
  const [activeTab, setActiveTab] = useState('roadmap')
  const [activeTrack, setActiveTrack] = useState('frontend')
  const [expandedWeek, setExpandedWeek] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const navTabs = [
    { id: 'roadmap', label: 'Roadmap', icon: Code2 },
    { id: 'about', label: 'About Us', icon: User },
    { id: 'blog', label: 'Blog', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="https://github.com/karan00006/react-roadmap"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-primary-500 to-accent-600 p-2 rounded-xl">
                  <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold gradient-text">Dev Roadmap</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider">LEARN • BUILD • DEPLOY</p>
              </div>
            </motion.a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navTabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>

            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              
              {/* Dark Mode Toggle */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col gap-2">
                  {navTabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id)
                          setMobileMenuOpen(false)
                        }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                          activeTab === tab.id
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 sm:py-12 px-3 sm:px-4 lg:px-8">
        <AnimatePresence mode="wait">
          {activeTab === 'roadmap' && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <section className="mb-8 sm:mb-12">
                <div className="max-w-4xl mx-auto text-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 gradient-text"
                  >
                    Your Complete Learning Roadmap
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8"
                  >
                    Master Frontend with React and Backend with Express in just 4.5 months
                  </motion.p>

                  {/* Track Selection */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                  >
                    {Object.entries(roadmapData).map(([key, track]) => {
                      const Icon = track.icon
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveTrack(key)}
                          className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${
                            activeTrack === key
                              ? `bg-gradient-to-r ${track.color} text-white shadow-lg scale-105`
                              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                          }`}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="text-sm sm:text-base">{track.title}</span>
                          <span className="text-xs sm:text-sm opacity-80">({track.duration})</span>
                        </button>
                      )
                    })}
                  </motion.div>
                </div>
              </section>

              {/* Roadmap Content */}
              <section className="py-6 sm:py-8">
                <div className="max-w-4xl mx-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTrack}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3 sm:space-y-4"
                    >
                      {roadmapData[activeTrack].weeks.map((weekData) => (
                        <motion.div
                          key={weekData.week}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: (weekData.week - 1) * 0.1 }}
                          className="glass-card rounded-xl sm:rounded-2xl overflow-hidden hover-lift"
                        >
                          <button
                            onClick={() => toggleWeek(weekData.week)}
                            className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left"
                          >
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${roadmapData[activeTrack].color} flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0`}>
                                {weekData.week}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                                  Week {weekData.week}: {weekData.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                  {weekData.topics.length} topics to master
                                </p>
                              </div>
                            </div>
                            {expandedWeek === weekData.week ? (
                              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
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
                                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                  {/* Topics */}
                                  <div>
                                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 uppercase tracking-wide">
                                      Topics to Learn
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                      {weekData.topics.map((topic, idx) => (
                                        <motion.span
                                          key={idx}
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ delay: idx * 0.05 }}
                                          className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium"
                                        >
                                          {topic}
                                        </motion.span>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Resources */}
                                  <div>
                                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 uppercase tracking-wide">
                                      Learning Resources
                                    </h4>
                                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                                      {weekData.resources.map((resource, idx) => (
                                        <motion.a
                                          key={idx}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: idx * 0.05 }}
                                          href={resource.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                        >
                                          <span className={`p-1.5 sm:p-2 rounded-lg ${
                                            resource.type === 'youtube' 
                                              ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' 
                                              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                          }`}>
                                            {getResourceIcon(resource.type)}
                                          </span>
                                          <span className="flex-1 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                                            {resource.name}
                                          </span>
                                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors flex-shrink-0" />
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
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8"
                >
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-primary-500 to-accent-600 p-6 rounded-full">
                      <User className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">About Dev Roadmap</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Your comprehensive guide to becoming a full-stack developer
                  </p>
                </motion.div>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6"
                  >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We believe in making quality education accessible to everyone. This roadmap is designed to take you from beginner to job-ready developer through a structured, practical learning path.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Frontend development with React, modern CSS, and responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Backend development with Node.js, Express, and RESTful APIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Database management with MongoDB and PostgreSQL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Version control with Git and GitHub</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>Testing, deployment, and DevOps best practices</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Created by Karan</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    This project was created to help aspiring developers navigate their learning journey with a clear, structured path. All resources are carefully curated from the best educational sources available.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/karan-jee-50868b315"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5] text-white hover:bg-[#006097] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>Connect on LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/karan00006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Follow on GitHub</span>
                    </a>
                  </div>
                </motion.div>
              </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'blog' && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl font-bold gradient-text mb-4"
                >
                  Developer Blog
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 dark:text-gray-300 text-lg"
                >
                  Tips, tutorials, and insights for your coding journey
                </motion.p>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    title: "Getting Started with React",
                    excerpt: "Learn the fundamentals of React and build your first component-based application.",
                    date: "Coming Soon",
                    category: "Frontend"
                  },
                  {
                    title: "Mastering Git Workflows",
                    excerpt: "Understand the best practices for version control and team collaboration.",
                    date: "Coming Soon",
                    category: "Tools"
                  },
                  {
                    title: "Building RESTful APIs with Express",
                    excerpt: "Create scalable and efficient backend services with Node.js and Express.",
                    date: "Coming Soon",
                    category: "Backend"
                  },
                  {
                    title: "Database Design Best Practices",
                    excerpt: "Learn how to design efficient database schemas for your applications.",
                    date: "Coming Soon",
                    category: "Database"
                  }
                ].map((post, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card rounded-xl p-6 hover-lift cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-500 dark:text-gray-400">
                  More articles coming soon! Stay tuned for valuable content to help you grow as a developer.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 py-6 sm:py-8 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center sm:text-left">
              Made with ❤️ by <span className="font-semibold text-primary-600 dark:text-primary-400">Karan</span>
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/karan-jee-50868b315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#0077b5] text-white hover:bg-[#006097] transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">LinkedIn</span>
              </a>
              <a
                href="https://github.com/karan00006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
