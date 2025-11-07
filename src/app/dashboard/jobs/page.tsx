export default function JobsPage() {
  const jobs = [
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      department: 'Engineering',
      description: 'Looking for experienced React developer...',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      experience: '5+ years',
      applicants: 23,
      status: 'active'
    },
    {
      id: '2', 
      title: 'Data Scientist',
      company: 'DataTech Solutions',
      department: 'Analytics',
      description: 'Join our data science team...',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      experience: '3+ years',
      applicants: 31,
      status: 'active'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Job Descriptions</h1>
        <p className="text-gray-600">Create and manage job postings for AI matching</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center p-4 border rounded-lg bg-white">
          <div className="text-2xl font-bold text-blue-600">{jobs.filter(j => j.status === 'active').length}</div>
          <p className="text-sm text-gray-600">Active Jobs</p>
        </div>
        <div className="text-center p-4 border rounded-lg bg-white">
          <div className="text-2xl font-bold text-green-600">
            {jobs.reduce((sum, job) => sum + job.applicants, 0)}
          </div>
          <p className="text-sm text-gray-600">Total Applicants</p>
        </div>
        <div className="text-center p-4 border rounded-lg bg-white">
          <div className="text-2xl font-bold text-purple-600">
            {Math.round(jobs.reduce((sum, job) => sum + job.applicants, 0) / jobs.length)}
          </div>
          <p className="text-sm text-gray-600">Avg per Job</p>
        </div>
        <div className="text-center p-4 border rounded-lg bg-white">
          <div className="text-2xl font-bold text-orange-600">87%</div>
          <p className="text-sm text-gray-600">Match Rate</p>
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white border rounded-lg p-6 hover:shadow-md">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                    {job.status}
                  </span>
                </div>
                <p className="text-gray-600">{job.company} • {job.department}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{job.applicants}</div>
                <p className="text-sm text-gray-600">applicants</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{job.description}</p>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm text-gray-600">
                  Experience: {job.experience}
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border rounded text-sm hover:bg-gray-50">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    View Candidates
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}