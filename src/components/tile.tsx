import Image from "next/image";

type TileProps = {
  article: {
    id: string;
    image: string;
    category: string;
    date: string;
    title: string;
    readTime: string;
  };
};

export function Tile({ article }: TileProps) {
  return (
    <li className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden h-96 flex flex-col">
      <article className="flex flex-col h-full">
        <div className="relative w-full h-[156px]">
          <Image
            src={article.image}
            alt={article.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center">
              <h3 className="text-xs text-gray-400">{article.category}</h3>
              <span className="text-xs mx-2 text-gray-400">|</span>
              <h4 className="text-xs text-gray-400">{article.date}</h4>
            </div>
            <h2 className="text-2xl mt-4 font-semibold">{article.title}</h2>
          </div>
          <p className="text-xs text-gray-600 mt-auto">{article.readTime}</p>
        </div>
      </article>
    </li>
  );
}
