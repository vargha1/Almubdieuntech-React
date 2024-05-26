import { useRef, useState } from "react";

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
    );
}