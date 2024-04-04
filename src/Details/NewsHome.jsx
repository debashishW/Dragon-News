import { FaStar, FaEye, FaRegBookmark } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsHome = ({ newsHome }) => {
  const {
    author,
    title,
    rating,
    total_view,
    thumbnail_url,
    image_url,
    details,
    _id
  } = newsHome;
  return (
    <div>
      <div className="flex flex-col w-[558px] p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img
              alt=""
              src={author.img}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold no-underline"
              >
                {author.name}
              </a>
              <span className="text-xs dark:text-gray-600">
                {author.published_date}
              </span>
            </div>
          </div>
          <div>
            <FaRegBookmark className="pr-2" />
            <BsShare />
          </div>
        </div>
        <div>
          <h3>{title}</h3>
          <img
            src={thumbnail_url}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />

          <p className="text-sm dark:text-gray-600">
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)}
                <Link to={`/news/${_id}`}
                 className="text-blue-600 font-bold no-underline">Read More...</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>{rating.number}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>
              <FaEye />
            </p>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
