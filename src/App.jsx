import { useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchSection from "./components/SearchSection";


function App() {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-950 mx-auto overflow-hidden  md:max-w-screen">
        <div className="md:flex">

          <div className="bg-slate-800 h-auto w-full object-cover md:h-screen md:w-2/5">
            <div>
              <header className="flex justify- mx-12">
                <div className="flex justify-center items-center">

                  <SearchInput onClick={() => setIsSectionOpen(true)} />


                  <SearchSection
                    isOpen={isSectionOpen}
                    onClose={() => setIsSectionOpen(false)}
                  />
                </div>
                <div>
                  <img className="mt-4 mr-5  p-2" src="Icons/location.svg" alt="hola" />
                </div>
              </header>
            </div>
            <div className="z-0">
              <img className="opacity-30  " src="fondo.png" alt="" />
              <div>
                <img className="" src="04d.png" alt="" />
              </div>
            </div>
            <div className="text-center ">
              <div className="pb-12">
                <span className="text-9xl text-white">19<span className="text-5xl text-gray-500">°C</span></span>
              </div>
              <div>
                <span className="text-4xl text-gray-500">Overcast Clouds</span>
              </div>
              <div className=" text-gray-500 p-4">
                <span>Today</span>
                <span> . </span>
                <span>Fri,21 Feb</span>
              </div>
              <div className="flex items-center justify-center
               text-3xl text-gray-500 p-4">
                <img src="./Icons/location_on.svg" alt="" />
                <span>Palenque</span>
              </div>

            </div>

          </div>
          <div className="bg-slate-950 h-full w-full object-cover md:h-screen md:w-3/5">
            <div className=" flex flex-row justify-end font-bold text-center">
              <button className=" rounded-4xl bg-white m-2 p-2 w-9 text-slate-900">°F</button>
              <button className=" rounded-4xl bg-slate-500 text-white m-2 p-2 w-9">°C</button>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  text-center">
              <div className="text-white  bg-slate-700">
                <div><span>Tomorrow</span> </div>
                <div className="mx-10 mb-4">
                  <img src="11n.png" alt="clima" />
                </div>
                <div>
                  <span>27°C</span>
                  <span className="text-gray-500">18°C</span></div>
              </div>
              <div className="text-white  bg-slate-700 ">
                <div><span>Tomorrow</span> </div>
                <div className="mx-10 mb-4">
                  <img src="11n.png" alt="clima" />
                </div>
                <div>
                  <span>27°C</span>
                  <span className="text-gray-500">18°C</span></div>
              </div>
              <div className="text-white bg-slate-700">
                <div><span>Tomorrow</span> </div>
                <div className="mx-10 mb-4">
                  <img src="11n.png" alt="clima" />
                </div>
                <div><span>27°C</span><span>18°C</span></div>
              </div>
              <div className="text-white bg-slate-700">
                <div><span>Tomorrow</span> </div>
                <div className="mx-10 mb-4">
                  <img src="11n.png" alt="clima" />
                </div>
                <div><span>27°C</span><span>18°C</span></div>
              </div>
              <div className="text-white bg-slate-700">
                <div><span>Tomorrow</span> </div>
                <div className="mx-10 mb-4">
                  <img src="11n.png" alt="clima" />
                </div>
                <div><span>27°C</span><span>18°C</span></div>
              </div>
            </div>
            <div className="mt-10 p-2 text-white font-bold text-2xl">
              <h2>Today`s Hightlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  text-center mx-6 ">
              <div className="text-white bg-slate-700 flex flex-col p-4">
                <span>Wind status</span>
                <span className="font-bold text-5xl">0.86<span className="font-light text-4xl"> ms</span></span>
                <div className="flex flex-row justify-center items-center">
                  <img className="bg-gray-500 rounded-4xl w-10 p-1.5 mr-5" src="./Icons/navigation.svg" alt="" />
                  <span>NNW</span>
                </div>
              </div>
              <div className="text-white bg-slate-700 flex flex-col p-4">
                <span >Humidity</span>
                <span className="font-bold text-5xl">96<span className="font-light text-4xl"> %</span></span>
              </div>
              <div className="text-white bg-slate-700 flex flex-col p-4">
                <span >Visibility</span>
                <span className="font-bold text-5xl">10.00<span className="font-light text-4xl"> km</span></span>
              </div>
              <div className="text-white bg-slate-700 flex flex-col p-4">
                <span >Air Pressure</span>
                <span className="font-bold text-5xl">1021<span className="font-light text-4xl"> mb</span></span>
              </div>
            </div>
            <footer className="text-white ">
              <span className="flex flex-row justify-center mt-10 mb-10 p-4">Created by  <h3> GustavoLastra</h3> </span>
            </footer>
          </div>

        </div>
      </div>


    </>
  )
}

export default App

