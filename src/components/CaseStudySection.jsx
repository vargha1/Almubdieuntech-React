import { useState } from "react";

export default function CaseStudySection({ heading, body, DDOpenState, DDState }) {

    function handleClick() {
        if (DDState == "") {
            DDOpenState(true);
        } else if (DDState == "hidden") {
            DDOpenState(false);
        }
    }

    return (
        <div className="flex flex-wrap">
            <div className="flex flex-col w-full md:w-8/12">
                <h2 className="font-bold mb-4">{heading}</h2>
                <p>{body}</p>
            </div>
            <div className="flex relative w-full md:w-4/12">
                <button className="p-[10px] bg-[#efcb19] min-w-[250px] w-full h-[55px] ms-[33%] rounded-lg text-white" onClick={() => handleClick()}>Select Industry</button>
                <div className={`flex flex-col absolute top-[60px] -right-[10px] p-5 bg-[#314252] min-w-[250px] w-[66%] rounded-lg text-white ${DDState}`}>
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