export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About This Project</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          This application demonstrates a modern <span className="font-semibold">MERN</span> stack
          using <span className="font-semibold">Next.js 14 (App Router)</span>, MongoDB, Tailwind CSS,
          and TypeScript. It includes authentication, protected routes, and a responsive UI.
        </p>
      </div>
    </main>
  );
}
