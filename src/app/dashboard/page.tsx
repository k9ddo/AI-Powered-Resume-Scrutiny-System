export default function Dashboard() {
  const metrics = [
    { title: "Resumes Processed", value: "1,247", change: "+23%" },
    { title: "Active Jobs", value: "18", change: "+5" },
    { title: "Match Rate", value: "87%", change: "+12%" },
    { title: "Processing Time", value: "2.3s", change: "-15%" }
  ];

  const analyses = [
    { name: "Sarah Johnson", position: "Senior Developer", score: 92, status: "High Match" },
    { name: "Michael Chen", position: "Data Scientist", score: 88, status: "High Match" },
    { name: "Emily Rodriguez", position: "UX Designer", score: 76, status: "Good Match" }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">AI Recruitment Dashboard</h1>
        <p className="mb-4 text-blue-100">Your intelligent hiring assistant is ready to analyze resumes.</p>
        <div className="flex space-x-3">
          <a href="/dashboard/upload">
            <button className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-50">
              Upload Resumes
            </button>
          </a>
          <a href="/dashboard/jobs">
            <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-blue-600">
              Create Job
            </button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg border p-6">
            <div className="text-gray-600 text-sm">{metric.title}</div>
            <div className="text-3xl font-bold">{metric.value}</div>
            <div className="text-sm text-green-600 mt-2">{metric.change} from last week</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Latest Analyses</h2>
          <p className="text-gray-600">Recent candidate evaluations</p>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {analyses.map((analysis, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      {analysis.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{analysis.name}</h3>
                    <p className="text-sm text-gray-600">{analysis.position}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {analysis.score}% Match
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {analysis.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}