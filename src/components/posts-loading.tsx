export function PostsLoading() {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-800 h-48 w-full"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-800 mb-2"></div>
              <div className="h-4 bg-gray-800 w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
