import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://img.lovepik.com/element/40148/2908.png_300.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React development is carried out by passionate developers who strive to create innovative, user-friendly, and scalable web applications.
                         Every line of code is written with dedication, ensuring that each component contributes to a seamless and dynamic user 
                         experience. The flexibility and power of React enable developers to turn complex ideas into interactive and functional 
                         realities.
                        </p>
                        <p className="mt-4 text-gray-600">
                        With a strong focus on collaboration and continuous learning, React developers constantly push boundaries,
                         staying updated with the latest advancements in the field. Their commitment to excellence drives the
                          creation of intuitive interfaces and robust architectures, making React one of the most beloved 
                          frameworks in the development community.


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }