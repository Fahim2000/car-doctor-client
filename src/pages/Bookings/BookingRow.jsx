const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, customerName, email, date, price, img, service ,status} = booking;

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-800 outline-none border-0 text-white hover:bg-red-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="p-3 text-sm text-gray-700">{service}</td>
      <td className="p-3 text-sm text-gray-700">{date}</td>
      <td className="p-3 text-sm text-gray-700">${price}</td>
      <th>
   {
    status == 'confirm' ? <span className="font-bold bg-green-200 px-4 py-1 rounded-lg text-green-900">Confirmed</span> :     <button
          onClick={() => handleBookingConfirm(_id)}
          className="text-sm btn bg-orange-200 btn-xs border-0 text-orange-900 font-bold hover:bg-orange-300"
        >
          Please Confirm
        </button>
   }
      </th>
    </tr>
  );
};

export default BookingRow;
