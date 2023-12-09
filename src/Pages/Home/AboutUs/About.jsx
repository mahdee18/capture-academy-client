import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section className="w-full py-10 bg-gray-100 sm:py-16 lg:py-24 max-w-screen-2xl mx-auto ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
          <div className="relative mb-12">
            <Fade direction='left' triggerOnce >
              <img
                className="w-full rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt=""
              />
            </Fade>
            <Fade direction='right' triggerOnce>
              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="px-10 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-green-600 sm:text-4xl">
                        99%
                      </p>
                      <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                        High Ratio Succesfull <br />
                        Students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>


          </div>

          <Fade direction='right' triggerOnce>
            <div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  className="w-8 h-8 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className=" mt-10 text-xl font-bold leading-tight  lg:leading-tight text-green-500">
                About Us
              </h2>
              <h2 className=" text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Build a perfect Career with Us.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Welcome to Capture Academy! We are a premier institution dedicated to nurturing creative minds and empowering aspiring photographers. Our experienced instructors and comprehensive curriculum provide the perfect platform for you to develop your skills and unleash your artistic vision. Join us and embark on an incredible journey of self-discovery through the lens.
              </p>
              .
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-green-600 to-green-500 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;