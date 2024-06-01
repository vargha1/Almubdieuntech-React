import ConsultationForm from "../components/ConsultationForm";
import FeatureSlider from "../components/FeatureSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TekrevolMainBanner from "../components/TekrevolMainBanner";

export default function Layout(props) {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-center items-center w-full md:pt-[80px] pt-[30px]">
                <section className="flex flex-wrap justify-center w-full lg:px-[6%] px-[2%] max-w-[1900px]">
                    <TekrevolMainBanner heading={props.bannerTitle} body={props.bannerBody} item1Content={props.bannerItemContent1} item2Content={props.bannerItemContent2} item3Content={props.bannerItemContent3} item4Content={props.bannerItemContent4} />
                    <ConsultationForm />
                </section>
                <section className="flex flex-col items-center w-full my-[80px] lg:px-[6%] px-[2%] max-w-[1900px]">
                    <h2 className="font-bold mb-28">We’re Featured In</h2>
                    <FeatureSlider />
                </section>
                <section className="flex flex-col items-center w-full my-[80px] lg:px-[6%] px-[2%] max-w-[1900px]">
                    {props.children}
                </section>
            </main>
            <Footer />
        </>
    );
}