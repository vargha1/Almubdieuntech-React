import { useState } from "react";
import CaseStudySection from "./CaseStudySection";
import ConsultationForm from "./ConsultationForm";
import FeatureSlider from "./FeatureSlider";
import TekrevolMainBanner from "./TekrevolMainBanner";
import "/src/index.css"

export default function Main() {

    const [isDDOpen, setIsDDOpen] = useState(false);
    const [DDState, setDDState] = useState("hidden");
    function handleDropDown(stateOfDD) {
        setIsDDOpen(stateOfDD);
        if (!isDDOpen) {
            setDDState("");
        } else if (isDDOpen) {
            setDDState("hidden");
        }
    }

    return (
        <main className="flex flex-col justify-center items-center w-full md:pt-[150px] pt-[30px]">
            <section className="flex flex-wrap justify-center w-full md:px-[6%] px-6 max-w-[1900px]">
                <TekrevolMainBanner heading={"Transform Business Growth with Revolutionary Services"} body={"Our unwavering commitment to innovation and customer satisfaction drives us to deliver transformative services that effectively address the ever-evolving demands of businesses in the digital world, ensuring exceptional results and driving impactful transformations."} />
                <ConsultationForm />
            </section>
            <section className="flex flex-col items-center w-full my-[80px] md:px-[6%] max-w-[1900px]">
                <h2 className="font-bold mb-28">We’re Featured In</h2>
                <FeatureSlider />
            </section>
            <section className="flex flex-col items-center w-full my-[80px] md:px-[6%] max-w-[1900px]">
                <CaseStudySection heading={"Case Study"} body={"Explore TekRevol's exceptional portfolio to witness their transformative work in action, encompassing groundbreaking web and mobile applications, bespoke software development, and captivating digital experiences that push the boundaries of technology and drive business success"} DDOpenState={handleDropDown} DDState={DDState} />
            </section>
        </main>
    );
}