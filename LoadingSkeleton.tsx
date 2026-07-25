// components/LoadingSkeleton.tsx
export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 rounded-xl w-3/4"></div>
      <div className="h-6 bg-gray-200 rounded-xl w-1/2"></div>
      <div className="h-6 bg-gray-200 rounded-xl w-full"></div>
      <div className="h-6 bg-gray-200 rounded-xl w-5/6"></div>
    </div>
  );
}