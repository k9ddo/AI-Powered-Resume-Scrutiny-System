export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Resume Upload</h1>
        <p className="text-gray-600">Upload candidate resumes for AI analysis</p>
      </div>

      <div className="bg-white rounded-lg border">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Upload Resumes</h2>
          <p className="text-gray-600">Support for PDF, DOC, and DOCX files</p>
        </div>
        <div className="p-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-400">
            <div className="space-y-4">
              <div className="h-16 w-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-3xl">📄</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Drop resumes here or click to browse</h3>
                <p className="text-gray-600">Support for PDF, DOC, and DOCX files up to 10MB</p>
              </div>
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Browse Files
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 border rounded-lg bg-white">
          <h3 className="text-2xl font-bold text-blue-600">500+</h3>
          <p className="text-sm text-gray-600">Resumes per batch</p>
        </div>
        <div className="text-center p-4 border rounded-lg bg-white">
          <h3 className="text-2xl font-bold text-green-600">2.3s</h3>
          <p className="text-sm text-gray-600">Avg processing time</p>
        </div>
        <div className="text-center p-4 border rounded-lg bg-white">
          <h3 className="text-2xl font-bold text-purple-600">95%</h3>
          <p className="text-sm text-gray-600">Accuracy rate</p>
        </div>
      </div>
    </div>
  );
}