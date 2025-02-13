export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full mb-8 p-2 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  }