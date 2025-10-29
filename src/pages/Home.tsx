import React, { type FormEvent, useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearchQuery("");
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="border-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
