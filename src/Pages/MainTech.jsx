import "/src/index.css";
import Layout from "./Layout";
import TechSection from "../components/TechnologiesComponents/TechSection";

export default function MainTech() {
    return (
        <Layout bannerTitle={"Passion-Fueled Innovation: Where Dreams Become Reality"} bannerBody={"TekRevol is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most."} bannerItemContent1={"Emerging technology adoption"} bannerItemContent2={"Cross-platform compatibility"} bannerItemContent3={"Agile development process"} bannerItemContent4={"Scalable infrastructure management"}>
            <TechSection />
        </Layout>
    );
}