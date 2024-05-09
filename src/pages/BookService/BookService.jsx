import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
      const service = useLoaderData();
      const { title, _id,price,img } = service;
      const {user} = useContext(AuthContext)

      const handleBookService = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value

        const booking= {
            customerName: name,
            email,
            img,
            date,
            service:title,
            service_id: _id,
            price
        }

       

        fetch("http://localhost:5000/bookings",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
          .then((res) => res.json())
          .then((data) => {
           
            if(data.insertedId){
                Swal.fire("Service Booked Successfully");
            }
          });


      }
    return (
      <div className="min-h-[65vh]">
        <h2 className="text-center text-3xl">Book Service: {title}</h2>

        <form className="card-body" onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered bg-white"
                required
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="email"
                name="date"
                className="input input-bordered bg-gray-600 text-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered bg-white"
                required
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                defaultValue={"$" + price}
                className="input input-bordered bg-white"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order confirm"
              className="btn bg-orange-600 border-0 text-white hover:bg-orange-800"
            />
          </div>
        </form>
      </div>
    );
};

export default BookService;