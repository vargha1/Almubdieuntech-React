import { useState } from "react";
import CaseStudySection from "./CaseStudySection";
import ConsultationForm from "../ConsultationForm";
import FeatureSlider from "../FeatureSlider";
import TekrevolMainBanner from "./TekrevolMainBanner";
import "/src/index.css"
import Header from "../Header";

export default function Main() {

    return (
        <>
            <Header />
            <main className="flex flex-col justify-center items-center w-full md:pt-[80px] pt-[30px]">
                <section className="flex flex-wrap justify-center w-full md:px-[6%] px-6 max-w-[1900px]">
                    <TekrevolMainBanner heading={"Transform Business Growth with Revolutionary Services"} body={"Our unwavering commitment to innovation and customer satisfaction drives us to deliver transformative services that effectively address the ever-evolving demands of businesses in the digital world, ensuring exceptional results and driving impactful transformations."} />
                    <ConsultationForm />
                </section>
                <section className="flex flex-col items-center w-full my-[80px] md:px-[6%] max-w-[1900px]">
                    <h2 className="font-bold mb-28">We’re Featured In</h2>
                    <FeatureSlider />
                </section>
                <section className="flex flex-col items-center w-full my-[80px] md:px-[6%] max-w-[1900px]">
                    <CaseStudySection
                    />
                </section>
            </main>
        </>
    );
}