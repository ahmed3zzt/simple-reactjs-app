import React from "react";
import "./our_service.css";
import image from '../../images/services.jpg'

import {Button} from "../../components/button/button";

const OurService = () => {
  return (
    <>
      <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            
            <img
              src={image}
              alt="Product screenshot"
              class="self-center"
            />
            <div class="lg:pr-8 lg:pt-4 ">
              <div class="lg:max-w-lg">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  our services
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <Button text='Read More'  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OurService };
