
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import img4 from "../../../assets/images/banner/4.jpg"


const Banner = () => {
    return (
      <div data-aos="fade-left" className="mt-14 lg:px-0 px-3">
        <div className="carousel w-full h-[480px] lg:h-[650px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full rounded-xl object-cover" />
            <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className="text-white space-y-7 pl-10 lg:pl-12">
                <h2 className=" text-3xl lg:text-6xl font-bold w-full lg:w-1/2">
                  Affordable price for car servicing
                </h2>
                <p className="text-sm lg:text-xl">
                  There are many variations of passages of Available, But the
                  majority have alteration in some form
                </p>
                <div>
                  {/* buttons */}
                  <button className="btn bg-orange-600 hover:bg-orange-800 text-white border-0 mr-5">
                    Discover more{" "}
                  </button>
                  <button className="border border-white bg-transparent text-white px-4 py-2 rounded hover:bg-white hover:text-black">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide4" className="btn btn-circle mr-4">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className="text-white space-y-7 pl-10 lg:pl-12">
                <h2 className="text-3xl lg:text-6xl font-bold w-full lg:w-1/2">
                  Affordable price for car servicing
                </h2>
                <p>
                  There are many variations of passages of Available, But the
                  majority have alteration in some form
                </p>
                <div>
                  {/* buttons */}
                  <button className="btn bg-orange-600 hover:bg-orange-800 text-white border-0 mr-5">
                    Discover more{" "}
                  </button>
                  <button className="border border-white bg-transparent text-white px-4 py-2 rounded hover:bg-white hover:text-black">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide1" className="btn btn-circle mr-4">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className="text-white space-y-7 pl-10 lg:pl-12">
                <h2 className="text-3xl lg:text-6xl font-bold w-full lg:w-1/2">
                  Affordable price for car servicing
                </h2>
                <p>
                  There are many variations of passages of Available, But the
                  majority have alteration in some form
                </p>
                <div>
                  {/* buttons */}
                  <button className="btn bg-orange-600 hover:bg-orange-800 text-white border-0 mr-5">
                    Discover more{" "}
                  </button>
                  <button className="border border-white bg-transparent text-white px-4 py-2 rounded hover:bg-white hover:text-black">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide2" className="btn btn-circle mr-4">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full rounded-xl" />
            <div className="absolute flex rounded-xl items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
              <div className="text-white space-y-7 pl-10 lg:pl-12">
                <h2 className="text-3xl lg:text-6xl font-bold w-full lg:w-1/2">
                  Affordable price for car servicing
                </h2>
                <p>
                  There are many variations of passages of Available, But the
                  majority have alteration in some form
                </p>
                <div>
                  {/* buttons */}
                  <button className="btn bg-orange-600 hover:bg-orange-800 text-white border-0 mr-5">
                    Discover more{" "}
                  </button>
                  <button className="border border-white bg-transparent text-white px-4 py-2 rounded hover:bg-white hover:text-black">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide3" className="btn btn-circle mr-4">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;