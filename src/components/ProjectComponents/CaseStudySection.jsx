import { useRef, useState } from "react";
import AMJ from "../../assets/Projects/AMJ-Workplace-Wellness-d7df7da287e29888b211a62f791b0c79.webp"

export default function CaseStudySection() {
    const inputRef = useRef(null);

    function handleClick() {
        if (document.getElementById("wrapper1").classList.contains("hidden")) {
            document.getElementById("wrapper1").classList.remove("hidden");
        } else {
            document.getElementById("wrapper1").classList.add("hidden");
        }
    }

    return (
        <>
            <div className="flex flex-wrap">
                <div className="flex flex-col w-full md:w-8/12">
                    <h2 className="font-bold mb-4">Case Study</h2>
                    <p>Explore TekRevol's exceptional portfolio to witness their transformative work in action, encompassing groundbreaking web and mobile applications, bespoke software development, and captivating digital experiences that push the boundaries of technology and drive business success</p>
                </div>
                <div className="flex relative w-full md:w-4/12">
                    <button className="p-[10px] bg-[#efcb19] min-w-[250px] w-full h-[55px] ms-[33%] rounded-lg text-white" onClick={() => handleClick()}>Select Industry</button>
                    <div id="wrapper1" ref={inputRef} className="flex flex-col absolute top-[60px] -right-[10px] p-5 bg-[#314252] min-w-[250px] w-[66%] rounded-lg text-white hidden">
                        <a className="cursor-pointer">Corporate</a>
                        <a className="cursor-pointer">Ecommerce</a>
                        <a className="cursor-pointer">Social</a>
                        <a className="cursor-pointer">Entertainment</a>
                        <a className="cursor-pointer">Fashion</a>
                        <a className="cursor-pointer">Gaming</a>
                        <a className="cursor-pointer">Healthcare</a>
                        <a className="cursor-pointer">Logistics</a>
                        <a className="cursor-pointer">Oil & Gas</a>
                        <a className="cursor-pointer">Real Estate</a>
                        <a className="cursor-pointer">Automobile</a>
                        <a className="cursor-pointer">Education</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-full max-w-[1900px] mt-[100px]">
                <div className="flex flex-col w-1/2 p-5 items-center">
                    <p className="font-[600] flex w-full mb-16 relative after:h-[1px] after:absolute after:right-0 after:top-5 after:w-[70%] after:bg-[#314252]">Our Case Study</p>
                    <img src={AMJ} alt="" />
                    <div className="flex flex-col w-full relative px-[50px] mt-8 after:w-[1px] after:absolute after:bg-[#314252] after:top-0 after:bottom-0 after:left-[10px]">
                        <h4 className="font-bold">AMJ Workplace Wellness</h4>
                        <p className="md:leading-7">Workplace Wellness is a cross-platform fitness app for companies who acknowledge the direct connection between employee wellbeing, productivity and organizational performance.</p>
                        <button className="w-1/2 rounded-full border-2 border-[#efcb19] text-[#efcb19] h-[40px] mt-8 hover:text-white hover:bg-[#efcb19] transition-all duration-500">View Case Study</button>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 p-5 items-center">
                    <img src={AMJ} alt="" />
                </div>
                <div className="flex flex-col w-1/2 p-5 items-center">
                    <img src={AMJ} alt="" />
                </div>
            </div>
        </>
    );
}