import { Tile } from "./tile";

type GalleryProps = {
  articles: Array<{
    id: string;
    image: string;
    category: string;
    date: string;
    title: string;
    readTime: string;
  }>;
};

export function Gallery({ articles }: GalleryProps) {
  return (
    <>
      <ul className="grid grid-cols-3 gap-6 justify-center">
        {articles.map((article) => (
          <Tile key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
}
