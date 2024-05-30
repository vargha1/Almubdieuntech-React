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
                <section className="flex flex-wrap justify-center w-full lg:px-[6%] px-[2%] max-w-[1900px]">
                    <TekrevolMainBanner heading={"Passion-Fueled Innovation: Where Dreams Become Reality"} body={"TekRevol is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most."} />
                    <ConsultationForm />
                </section>
                <section className="flex flex-col items-center w-full my-[80px] lg:px-[6%] px-[2%] max-w-[1900px]">
                    <h2 className="font-bold mb-28">We’re Featured In</h2>
                    <FeatureSlider />
                </section>
                <section className="flex flex-col items-center w-full my-[80px] lg:px-[6%] px-[2%] max-w-[1900px]">
                    <CaseStudySection
                    />
                </section>
            </main>
        </>
    );
}