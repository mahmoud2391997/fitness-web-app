import React from "react";

const Homepage = () => {
  return (
    <div class="bg-[#282b29]">
      <section class="flex items-center justify-start h-[80vh]">
      <section class="text-center py-16 bg-transparent w-1/2 h-full flex justify-between flex-col ">
        <p class="text-white text-lg uppercase mb-4 font-bold">Old-School Exercise Meets</p>
        <h1 class="text-red-500 text-8xl font-extrabold mb-4"><span class="text-white">New-Age</span><br/> Technology</h1>
        <p class="text-white text-xl font-bold mb-1">Achilles Fitness Donkey Calf Raise</p>
        <p class="text-white text-lg mb-12">Attachment For The Smith Machine</p>
        <div class="flex justify-center space-x-6">
            <a href="#" class="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-red-600">Watch Video</a>
            <a href="#" class="bg-red-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-red-600">Instruction Video</a>
        </div>
    </section>
    <img src="/gadget.png" alt="Achilles Fitness" class="w-1/2 h-full"/>
    </section>
    <img src="/bg-sec.jpeg" alt="Achilles Fitness" class="w-full h-[80vh]"/>  
    <img src="/sec-bg-2.png" alt="Achilles Fitness" class="w-full h-[80vh]"/>  
    <section class="flex items-center justify-start h-[80vh]">
      <img src="/info.png" alt="Achilles Fitness" class="w-2/3 h-full"/>
      <section class="text-center py-16 bg-[#ee0402] w-1/2 h-full flex justify-center items-center flex-col ">
        <p class="text-2xl w-2/4 text-white">
          The Achilles Fitness Donkey Calf Raise attachment is the world's 1st Calf Raise attachment for the Smith Machine. This patented commercial fitness apparatus is ergonomically designed to allow the user to mainly activate the gastrocnemius calf muscle when the knee is straight. This training method applies stress and elongation of the muscles of the hip, knee, and ankle joint, thus generating greater power.
          
          The Donkey Calf Raise is the most effective exercise for strengthening and building the calf muscle. It is a great isolation movement for overall calf development and calf mass and is simply one of the best exercises for developing the calves.
          
        </p>
      </section>
    </section>
    <img src="sec3-bg.jpeg" alt="Achilles Fitness" class="w-full h-[100vh]"/>  
    <section class="flex items-center justify-start h-[80vh]">
      <img src="/sec4-bg.png" alt="Achilles Fitness" class="w-2/3 h-full"/>
      <section class="text-center py-16 bg-transparent text-2xl text-white w-1/3 h-full flex justify-center items-center flex-col ">
        <ul class="list-disc text-start justify-between flex flex-col h-2/3">
          <li>Ankle Strength and Stability</li>
          <li>Shield Against Calf Sprains</li>
          <li>Improved Balance</li>
          <li>Injury Prevention</li>
          <li>Sprinting and Running Performance</li>
          <li>Knee Stability</li>
          <li>Greater Vertical Jump Ability</li>
          <li>Rehabilitate Achilles Tendon</li>
          <li>Aesthetics</li>
      </ul>
      </section>
    </section>
    <img src="/bg-sec5.jpeg" alt="Achilles Fitness" class="w-full h-[100vh]"/>  
    </div>
  );
};

export default Homepage;
