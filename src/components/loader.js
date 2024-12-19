import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/loadingAnimation.json"

export default function Loader(){
    return  <Lottie animationData={Animation} loop={true} />;
}