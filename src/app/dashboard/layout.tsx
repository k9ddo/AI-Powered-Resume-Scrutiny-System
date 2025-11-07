export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = [
    { href: '/dashboard', label: 'Overview', icon: '📊' },
    { href: '/dashboard/upload', label: 'Upload', icon: '📤' },
    { href: '/dashboard/jobs', label: 'Jobs', icon: '💼' },
    { href: '/dashboard/analyze', label: 'Analyze', icon: '🔍' },
    { href: '/dashboard/candidates', label: 'Candidates', icon: '👥' },
    { href: '/dashboard/analytics', label: 'Analytics', icon: '📈' },
    { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-white border-r">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            <div>
              <h2 className="font-bold text-lg">Resume Scrutiny</h2>
              <div className="text-xs text-gray-500">AI Dashboard</div>
            </div>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex-1">
        <header className="bg-white border-b px-6 py-4">
          <h1 className="text-2xl font-bold">AI Recruitment Dashboard</h1>
          <p className="text-gray-600">Intelligent resume analysis and candidate matching</p>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}