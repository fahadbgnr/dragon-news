import { FaEye, FaStar } from "react-icons/fa";
import { BsShareFill, BsBookmarkFill } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString();

  return (
    <div className=" rounded-lg shadow-md p-4 space-y-4">
      {/* Author Info */}
      <div className="flex items-center justify-between bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-500 text-lg">
          <BsBookmarkFill className="cursor-pointer" />
          <BsShareFill className="cursor-pointer" />
        </div>
      </div>

      {/* Title & Thumbnail */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="w-full rounded-md"
      />

      {/* Description */}
      <p className="text-gray-700">
        {details.length > 250 ? details.slice(0, 250) + "..." : details}
        <span className="text-blue-600 font-semibold cursor-pointer ml-2">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t mt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating.number ? "" : "text-gray-300"} />
          ))}
          <span className="ml-1 text-gray-800">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
