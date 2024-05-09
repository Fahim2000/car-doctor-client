import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-full shadow-md">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl text-orange-500 font-semibold">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/book/${_id}`}>
            <button className="btn bg-orange-600 hover:bg-orange-800 border-0 text-white rounded-full">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
