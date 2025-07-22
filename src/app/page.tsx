export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="max-w-4xl w-full p-8 bg-white rounded-xl shadow-xl text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to Full Stack App</h1>
        <p className="text-lg text-gray-600 mb-6">
          This is the home page. You can login to access your dashboard or explore the app.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/login" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Login
          </a>
          <a href="/register" className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
            Register
          </a>
        </div>
      </div>
    </main>
  );
}
