"use client";
import { useAppSelector, useAppDispatch } from "./hooks";
import Link from "next/link";
import { decrement, increment } from "./features/data/dataSlice";
import  { AboutMe,HorizontalTimeline  } from "./component/home";
import ProjectPin from "./Projects/pin";

export default function Home() {
  const count = useAppSelector((state) => state.data.value);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col p-3">
      <div className="text-black p-4">
      <AboutMe/>
      </div>
      <div className="text-black pearl mt-2 p-4 rounded-lg">
      <ProjectPin/>
      </div>
      <div className="text-black pearl mt-2 p-4 rounded-lg">
      <HorizontalTimeline/>
      </div>
      {/* <div className=" text-black pearl mt-2 p-4 rounded-lg">
        <div className="container flex flex-row items-center">
          <div className="flex-1">2</div>
          <div className="flex-1">2</div>
          <div className="flex-1">2</div>
        </div>  
      </div> */}
    
    </div>
  );
}
