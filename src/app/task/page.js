"use client";
import { useState, useEffect } from "react";
import Sliding from "../component/swiper";

export default function Task() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <main class="bg-[#fff4df] w-full h-[800px]">
      <section>
        <div class="p-20">
          <img src="/astrix.png" class="w-40 h-30" alt="" />
        </div>
        <div class="pl-40 pr-40 pt-10">
          <div class="h-10 w-auto flex pb-24">
            <div class="bg-[#fff4df] flex w-1/2  ">
              <h1 class="text-6xl font-bold">WE </h1>
              <img src="/flower2.jpg" alt="" class="w-[800px] h-14 mt-1 pl-2" />
            </div>
            <div
              class="bg-[#fff4df] text-6xl font-bold w-1/2 h-20 animate-slide transition duration-80 ease-out"
              style={{ animationDelay: "1.5s" }}
            >
              <div>
                <h1 class="pl-2">ORGANIZE THE</h1>
              </div>
            </div>
          </div>
          <div class="h-20 w-full flex pb-24">
            <div class="bg-[#fff4df]  flex w-auto ">
              <h1 class="text-6xl font-bold">CONNECTION</h1>
            </div>
            <div class="w-auto">
              <img src="/connect.jpg" alt="" class="w-[600px] h-14 mt-1 pl-2" />
            </div>
            <div class="bg-[#fff4df] text-6xl font-bold w-[900px] h-20 animate-slide"></div>
          </div>
          <div class="h-20 w-auto flex pb-24">
            <div class="bg-[#fff4df] flex w-1/3  ">
              <img src="/audiance.jpg" alt="" class="w-full h-14 mt-1" />
            </div>
            <div
              class="bg-[#fff4df] text-6xl font-bold w-1/2 h-20 animate-slide flex"
              style={{ animationDelay: "0.9s" }}
            >
              <h1 class="text-6xl font-bold pl-2">BETWEEN </h1>
              <img src="/music.jpg" alt="" class="w-full h-14 mt-1 pl-2" />
              <h1 class="text-6xl font-bold pl-2">MUSIC</h1>
            </div>
          </div>
          <div class="h-20 w-auto flex pb-24">
            <div class="bg-[#fff4df] flex w-1/2  ">
              <h1 class="text-6xl font-bold">ARTIST </h1>
              <img src="/artist.jpg" alt="" class="w-full h-14 mt-1 pl-2" />
            </div>
            <div
              class="bg-[#fff4df] text-6xl font-bold w-1/2 h-20 animate-slide"
              style={{ animationDelay: "0.5s" }}
            >
              <div class="flex">
                <h1 class="pl-2">CULTURE</h1>
                <img
                  src="/culture.jpg"
                  alt=""
                  class="w-[200px] h-14 mt-1 pl-2"
                />
              </div>
            </div>
          </div>
          <div class=" bg-[#fff4df] h-20 w-auto flex pb-24">
            <div class="bg-[#fff4df] flex w-auto ">
              <img src="/art.jpg" alt="" class="w-[300px] h-14 mt-1" />
            </div>
            <div
              class="bg-[#fff4df] text-6xl font-bold w-1/2 h-20 animate-slide transition duration-80 ease-out"
              style={{ animationDelay: "2.15s" }}
            >
              <div class="w-[500px] flex">
                <h1 class="text-6xl font-bold pl-2"> ART </h1>
                <img
                  src="/collection.jpg"
                  alt=""
                  class="w-full h-14 mt-1 pl-2"
                />
                <h1 class="text-6xl font-bold pl-2"> &COLLECTION</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class=" w-[100%] h-auto flex">
        <div class="bg-stone-950 w-[60%] h-auto  staticz-20 relative">
          <div>
            <img src="/astrix1.png" class="m-6 w-48 h-30" alt="" />
          </div>
          <div class="pl-10">
            <p class="text-9xl font-bold text-[#444649]  break-words w-[350px] pb-20 ">
              {" "}
              ASTRIX
            </p>

            <p class="text-9xl font-bold text-[#444649] break-words w-[300px] ">
              {" "}
              EVENTS
            </p>
          </div>
          <div class="absolute top-56 left-0 w-full h-auto bg-transparent z-10">
            <div class="mb-20">
              {" "}
              <Sliding />
            </div>
            <div className="pl-14">
              <label
                htmlFor="Toggle3"
                className={`inline-flex items-center rounded-[30px] cursor-pointer text-gray-100 ${
                  isChecked
                    ? "bg-[#282b30]  transition duration-300"
                    : "bg-[#484e56]  transition duration-300"
                }`}
              >
                <input
                  id="Toggle3"
                  type="checkbox"
                  className="hidden peer"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <span className="px-14 py-4 rounded-l-[30px] rounded-r-[30px] bg-[#282b30] text-xl font-bold">
                  Events
                </span>
                <span className="px-10 py-4 rounded-l-[30px] rounded-r-[30px] bg-[#484e56] text-xl font-bold">
                  Collection
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="relative w-[5%] h-auto  bg-black overflow-hidden">
          <div class=" absolute  rotate-90 z-40 mt-[400px] ml-[-600px] w-[1280px] h-24 bg-[#b9a0ff] text-black text-2xl font-bold flex justify-center items-center   ">
            <p>
              Event At Jawaharlal Nehru Stadium is a multi-sports stadium lorem
            </p>
          </div>
        </div>
        <div class="bg-stone-950 w-[35%] h-auto pl-5">
          <div class=" w-[380px] text-3xl font-bold text-white p-14">
            Explore Your First Event
          </div>
          <div class="w-auto p-14 mt-2">
            <h3 class=" text-white text-5xl font-bold ">Event Name</h3>
            <div class="flex-row pt-5">
              <div class=" flex items-center ">
                <img src="/location.png" class="w-6 h-6 mr-3" alt="" />
                <p class="text-white text-xl font-bold mr-3">Venue</p>
                <img src="/alarm.png" class="w-10 h-10 mr-3" alt="" />
                <p class="text-white text-xl font-bold  mr-5">04/03/2024</p>
                <p class="text-white text-xl font-bold"> @19:00</p>
              </div>
              <p class="text-white w-[350px] text-l font-bold pt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                reiciendis, deleniti nobis pariatur numquam vitae eos repellat.
                Officia, inventore.
              </p>
              <p class="text-white w-[250px] text-2xl font-bold pt-10">
                Artist Lineup
              </p>
            </div>
          </div>
          <div class="flex w-full h-auto items-center justify-center mt-10">
            <div class="w-36 h-36 ">
              <img
                src="/artist1.jpg"
                class="rounded-l-lg w-full h-full"
                alt=""
              />
            </div>
            <div class="w-48 h-48">
              {" "}
              <img src="/artist2.jpg" class="rounded-lg w-full h-full" alt="" />
            </div>
            <div class=" w-36 h-36">
              <img
                src="/artist3.jpg"
                class="rounded-r-lg w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div class="flex w-auto h-auto mt-20 p-8 items-center justify-center space-x-36 ">
            <div class="bg-white w-28 h-28 rounded ">
              <img src="/code.webp" class="w-28 h-28 p-1" alt="" />
            </div>
            <div class="w-52 h-14 bg-[#ffca5f]  flex  items-center justify-center rounded-[30px] mt-12">
              <p class="text-xl font-bold">Join watchlist</p>{" "}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
