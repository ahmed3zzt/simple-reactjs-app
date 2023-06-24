import React from "react";

const Blog = () => {
  return (
    <>
      <div className="bg-gray-200 p-12">
        <div className="container mx-auto">
          <h1 className="font-bold text-[40px] text-gray-700 my-5">
            Latest Articles
          </h1>

          <div className="grid md:grid-cols-3 md:grid-rows-1 md:gap-4 grid-cols-1 grid-rows-3 gap-4">
            <div class="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
              <a href="/">
                <img
                  class=""
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="/">
                  <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="font-normal text-gray-700 mb-3">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  class="text-white bg-pink-600 hover:bg-pink-800 transition-all focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-3 py-2 text-center inline-flex items-center"
                  href="/"
                >
                  Read more
                </a>
              </div>
            </div>
            <div class="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
              <a href="/">
                <img
                  class=""
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="/">
                  <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="font-normal text-gray-700 mb-3">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  class="text-white bg-pink-600 hover:bg-pink-800 transition-all focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-3 py-2 text-center inline-flex items-center"
                  href="/"
                >
                  Read more
                </a>
              </div>
            </div>
            <div class="bg-white shadow-md border border-gray-200  max-w-sm mb-5">
              <a href="/">
                <img
                  class=""
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="/">
                  <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="font-normal text-gray-700 mb-3">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  class="text-white bg-pink-600 hover:bg-pink-800 transition-all focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-3 py-2 text-center inline-flex items-center"
                  href="/"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Blog };
