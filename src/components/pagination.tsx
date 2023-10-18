import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="py-16 flex items-center justify-center space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center ${
          currentPage === 1
            ? "cursor-not-allowed text-gray-300"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="flex space-x-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${
              currentPage === index + 1
                ? "bg-mintGreen text-white"
                : "text-gray-500 hover:text-gray-700 hover:bg-green-200"
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center ${
          currentPage === totalPages
            ? "cursor-not-allowed text-gray-300"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
