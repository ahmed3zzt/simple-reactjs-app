import React from "react";
import image from "../../images/team.png";

const OurTeam = () => {
  return (
    <>
      <div class="overflow-hidden bg-gray-200 py-24 sm:py-32 text-center">
        <div class=" max-w-7xl px-6 lg:px-8 mx-auto text-left">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-8 lg:pt-4 ">
              <div class="lg:max-w-lg">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                OUR TEAM
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  I'm a paragraph. Click here to add your own text and edit me.
                  I’m a great place for you to tell a story and let your users
                  know a little more about you.
                </p>
                <button className="inline-flex items-center justify-center px-8 py-4 my-4 font-sans font-semibold tracking-wide text-white bg-pink-700 h-[60px]">
                  Read More
                </button>
              </div>
            </div>
            <img src={image} alt="Product screenshot" class="self-center ml-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export { OurTeam };
