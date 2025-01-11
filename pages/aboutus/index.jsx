import React from "react";

function index() {
  return (
    <div className="bg-transparent ">
      <section className="w-full h-[80vh] flex">
        <div className="w-1/2 h-full">
          <img
            src="/welcome.jpeg"
            alt="Achilles Fitness Logo"
            className="w-full h-[40%]"
          />
          <div className="bg-[#f40001] h-[60%] flex justify-center items-center">
            <p className="text-white w-2/4 text-center text-lg">
              At Achilles Fitness, we create innovative calf muscle exercise
              equipment tailored for commercial gyms, hotels, military
              personnel, professional sports teams, recreation facilities,
              universities, high schools, and medical facilities. Our goal is to
              help you gain a competitive edge and promote a healthier physique
              by strengthening and sculpting your calf muscles. We are committed
              to providing high-quality, effective solutions for professional
              athletes, bodybuilders, weekend warriors, and fitness enthusiasts
              alike, ensuring you achieve optimal results in your calf training.
            </p>
          </div>
        </div>
        <img
          src="/calves.jpeg"
          alt="Achilles Fitness Logo"
          className="w-1/2 h-full"
        />
      </section>
      <section>
        <img
          src="/missions.jpeg"
          alt="Achilles Fitness Logo"
          className="w-full h-[20vh]"
        />
        <div className="flex flex-col md:flex-row justify-evenly items-center bg-[#191a23] text-white p-8">
          <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/5">
            
            <p>
              Achilles Fitness was founded by Fabian Jones, an Industrial CAD
              Designer and fitness enthusiast, driven by a passion for enhancing
              lower body strength and performance. Recognizing the need for
              stronger calf muscles, we developed the Donkey Calf Raise
              attachment for the smith machine, designed to accommodate all
              fitness levels, whether you're training in a commercial gym or at
              home.
            </p>
          </div>
          <div className="text-center md:text-left md:w-1/5">
           
            <p>
              Our mission is simple: to empower you to unlock your potential
              through effective calf muscle training. We believe that strong
              calves are crucial for overall lower body strength, stability, and
              athletic performance. Our goal is to support your fitness journey
              with equipment that is both functional and user-friendly.
            </p>
          </div>
        </div>
      </section>
      <img src="/markets.jpeg" alt="Achilles Fitness Logo" className="w-full" />
    </div>
  );
}

export default index;
