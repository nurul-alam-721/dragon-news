import { FaEye, FaRegBookmark } from 'react-icons/fa';
import { MdOutlineShare } from 'react-icons/md';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    image_url,
    details,
    total_view,
    rating,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      <div className="flex items-center gap-3 p-4 bg-base-200 justify-between">
        <div className='flex gap-2'>
        <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
                {new Date(news.author.published_date).toLocaleDateString()}
            </p>
        </div>
        </div>
       <div className='flex gap-4'>
        <FaRegBookmark size={20}></FaRegBookmark> 
        <MdOutlineShare size={20}></MdOutlineShare>
       </div>
      </div>

      <div className="px-4 mt-2">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>

      <figure className="px-4 pt-4">
        <img src={image_url} alt={title} className="rounded-xl w-full h-64 object-cover" />
      </figure>

      <div className="px-4 py-3 text-sm text-gray-700">
        {details.slice(0, 200)}...
        <span className="font-semibold text-orange-400"><Link to={`/news-details/${id}`}>Read More</Link></span>
      </div>

      <div className="card-actions flex gap-2 justify-between items-center px-4 pb-4 border-t-2 border-base-200 py-2">
            <div className="flex items-center gap-2">
            <div className="rating rating-sm text-orange-400">
                {Array.from({ length: 5 }, (_, i) => (
                <input
                    key={i}
                    type="radio"
                    name={`rating-${news.id}`}
                    className="mask mask-star-2 bg-orange-400"
                    checked={i < rating.number}
                    readOnly
                />
                ))}
            </div>
        <p className=" text-gray-600 font-bold">{news.rating.number}</p>
        </div>

        <p className="flex items-center gap-1 text-sm text-gray-500">
          <FaEye /> {total_view}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
