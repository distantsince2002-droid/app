// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-blue-600 hover:underline mt-6 inline-block">
          Go back home
        </a>
      </div>
    </div>
  );
}