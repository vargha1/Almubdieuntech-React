import ConsultationForm from "../ConsultationForm";
import FeatureSlider from "../FeatureSlider";
import TekrevolMainBanner from "../TekrevolMainBanner";
import "/src/index.css";
import Header from "../Header";
import Footer from "../Footer";
import TechSection from "./TechSection";

export default function MainTech() {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-center items-center w-full md:pt-[80px] pt-[30px]">
                <section className="flex flex-wrap justify-center w-full lg:px-[6%] px-[2%] max-w-[1900px]">
                    <TekrevolMainBanner heading={"Revolutionary Technologies for a Changing World"} body={"At Tekrevol, we harness the power of revolutionary technologies, employing a diverse range of programming languages and platforms to create custom solutions that perfectly align with the unique needs of our clients."} item1Content={"Emerging technology adoption"} item2Content={"Cross-platform compatibility"} item3Content={"Agile development process"} item4Content={"Scalable infrastructure management"} />
                    <ConsultationForm />
                </section>
                <section className="flex flex-col items-center w-full my-[80px] lg:px-[6%] px-[2%] max-w-[1900px]">
                    <h2 className="font-bold mb-28">We’re Featured In</h2>
                    <FeatureSlider />
                </section>
                <TechSection />
            </main>
            <Footer />
        </>
    );
}