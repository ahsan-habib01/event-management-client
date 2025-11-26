export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🎉 EventHub
        </h1>
        <p className="text-2xl text-red-600 mb-8">Event Management System</p>
        <div className="bg-white shadow-xl rounded-2xl p-8 border-2 border-blue-500">
          <p className="text-xl font-semibold text-green-600 mb-4">
            ✅ Step 2 Complete!
          </p>
          <div className="text-left space-y-2 text-gray-700">
            <p>✅ Navbar with 4+ routes</p>
            <p>✅ Sticky navigation</p>
            <p>✅ Login/Register buttons</p>
            <p>✅ Responsive design</p>
            <p>✅ Footer with links</p>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Next: Landing Page with 7 Sections
          </p>
        </div>
      </div>
    </div>
  );
}
