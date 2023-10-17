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
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <article className="flex flex-col items-center justify-center w-full py-8">
              <img src={article.image} />
              <h3 className="text-4xs mb-6 text-gray-700 text-center">
                {article.category}
              </h3>
              <h3 className="text-4xs mb-6 text-gray-700 text-center">
                {article.date}
              </h3>
              <h3 className="text-4xs mb-6 text-gray-700 text-center">
                {article.title}
              </h3>
              <h3 className="text-4xs mb-6 text-gray-700 text-center">
                {article.readTime}
              </h3>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
