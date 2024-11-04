import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="absolute top-4 left-4 right-4 z-10">
      <div className="bg-white rounded-xl shadow-lg p-4 space-y-2">
        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Ki kotew prale"
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Casa
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Trabajo
          </button>
        </div>
      </div>
    </div>
  );
}
