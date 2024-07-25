import dynamic from "next/dynamic";
import home from "../public/navbar/Home.svg";
import resume from "../public/navbar/Resume.svg"
import aboutme from "../public/navbar/AboutMe.svg"

import { StaticImageData } from "next/image";
interface routeType {
    route:string,
    name:string,
    img:StaticImageData
}




export const routes:Array<routeType> = [
    {route:'/', name:'Home', img:home},
    {route:'/Projects', name:'Project', img:home},
    {route:'/About-me', name:'About me', img:home}
]