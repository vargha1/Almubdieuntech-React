import ConsultationForm from "../components/ConsultationForm";
import FeatureSlider from "../components/FeatureSlider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TekrevolMainBanner from "../components/TekrevolMainBanner";

export default function Layout({ bannerTitle, bannerBody, bannerItemContent1, bannerItemContent2, bannerItemContent3, bannerItemContent4 }) {
    return (
        <>
            <Header />
            <main className="flex flex-col justify-center items-center w-full md:pt-[80px] pt-[30px]">
                <section className="flex flex-wrap justify-center w-full lg:px-[6%] px-[2%] max-w-[1900px]">
                    <TekrevolMainBanner heading={bannerTitle} body={bannerBody} item1Content={bannerItemContent1} item2Content={bannerItemContent2} item3Content={bannerItemContent3} item4Content={bannerItemContent4} />
                    <ConsultationForm />
                </section>
                <section className="flex flex-col items-center w-full my-[80px] lg:px-[6%] px-[2%] max-w-[1900px]">
                    <h2 className="font-bold mb-28">We’re Featured In</h2>
                    <FeatureSlider />
                </section>
            </main>
            <Footer />
        </>
    );
}