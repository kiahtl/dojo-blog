import { Tile } from "./tile";
import { useState } from "react";
import { ToggleButton } from "@/components/toggle-button";
import { Pagination } from "./pagination";

type GalleryProps = {
  articles: Array<{
    id: string;
    image: string;
    category: string;
    date: string;
    title: string;
    readTime: string;
  }>;
  toggleOptions: string[];
};

export function Gallery({ articles, toggleOptions }: GalleryProps) {
  const [selectedOption, setSelectedOption] = useState(toggleOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const displayedArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <>
      <ToggleButton
        options={toggleOptions}
        selected={selectedOption}
        onToggle={setSelectedOption}
      />
      <ul className="mt-16 grid-flow-col gap-6 justify-center">
        {displayedArticles.map((article) => (
          <Tile key={article.id} article={article} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
