export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            <h1 className="text-2xl font-bold text-blue-600">Resume Scrutiny AI</h1>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">Sign In</button>
            <a href="/dashboard">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700">
                Get Started
              </button>
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20 text-center">
        <div className="inline-block px-3 py-1 mb-4 text-sm bg-blue-100 text-blue-800 rounded-full">
          AI-Powered Recruitment
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          Intelligent Resume Analysis System
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your hiring process with AI-powered resume screening. 
          Reduce bias, save time, and find the perfect candidates with advanced 
          Natural Language Processing technology.
        </p>
        <a href="/dashboard">
          <button className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
            Start Analyzing Resumes
          </button>
        </a>
      </main>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center border">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Resumes Processed</div>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-3">
              <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border">
            <div className="text-3xl font-bold text-green-600 mb-2">94%</div>
            <div className="text-gray-600">Accuracy Rate</div>
            <div className="w-full bg-green-200 rounded-full h-2 mt-3">
              <div className="bg-green-600 h-2 rounded-full w-full"></div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border">
            <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
            <div className="text-gray-600">Time Saved</div>
            <div className="w-full bg-purple-200 rounded-full h-2 mt-3">
              <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center border">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction</div>
            <div className="w-full bg-orange-200 rounded-full h-2 mt-3">
              <div className="bg-orange-600 h-2 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-gray-600">
          <p>&copy; 2024 Resume Scrutiny System. AI-Powered Recruitment Technology.</p>
        </div>
      </footer>
    </div>
  );
}