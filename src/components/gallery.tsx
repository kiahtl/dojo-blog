import { Tile } from "./tile";
import { useState } from "react";
import { ToggleButton } from "@/components/toggle-button";

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
  return (
    <>
      <ToggleButton
        options={toggleOptions}
        selected={selectedOption}
        onToggle={setSelectedOption}
      />
      <ul className="mt-16 grid grid-cols-3 gap-6 justify-center">
        {articles.map((article) => (
          <Tile key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
}
