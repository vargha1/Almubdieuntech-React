import { useState } from "react";
import AMJ from "../../assets/Projects/AMJ-Workplace-Wellness-d7df7da287e29888b211a62f791b0c79.webp"
import PureP from "../../assets/Projects/Pure-Plank-6ab45fef1953a122beac7d4413605b20.webp"
import Rodeo from "../../assets/Projects/Rodeo-b9267c2e104d319cd4f8f2f19cad7cce.webp"
import Mdrouz from "../../assets/Projects/mdrouz-efa475ad64e4a1f3162fd134a0b5257b.webp"
import TruthGPT from "../../assets/Projects/Truth_gpt-daeb15abc302c450f096fde5d34cc949.webp"
import FSK from "../../assets/Projects/FSK-ef36f9fa016e91760a49c38f32ad5161.webp"
import Yeppy from "../../assets/Projects/Yeppy-15b2693e5b6a177e3aa51e677af4e626.webp"
import Cmore from "../../assets/Projects/Cmore-a72b1a22036aa984459cc69154be40f3.webp"

export default function CaseStudySection() {
    function handleClick() {
        if (document.getElementById("wrapper1").classList.contains("hidden")) {
            document.getElementById("wrapper1").classList.remove("hidden");
        } else {
            document.getElementById("wrapper1").classList.add("hidden");
        }
    }

    let data = [
        {
            isFirst: true,
            isSecond: false,
            id: 0,
            title: "AMJ Workplace Wellnessasdas",
            body: "Workplace Wellness is a cross-platform fitness app for companies who acknowledge the direct connection between employee wellbeing, productivity and organizational performance.",
            imgSrc: AMJ,
        },
        {
            isFirst: false,
            isSecond: true,
            id: 1,
            title: "Pure Plank",
            body: "Plank is an online platform for fitness and exercise enthusiasts aiming to look after their health and exercise at home.",
            imgSrc: PureP,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 2,
            title: "Rodeo",
            body: "Rodeo Social stands as an efficiently interactive platform in the realm of social media management.",
            imgSrc: Rodeo,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 3,
            title: "Mdrouz",
            body: "Mdrouz is a cutting-edge multi-vendor e-commerce mobile application developed by TekRevol for the GCC region.",
            imgSrc: Mdrouz,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 4,
            title: "Truth GPT",
            body: "TruthGPT, an AI-powered mobile app designed to provide users with unbiased, transparent, and easily accessible information through a chatbot interface.",
            imgSrc: TruthGPT,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 5,
            title: "Find, Serve & Keep",
            body: "FSK by TekRevol transforms gaming with immersive match-3 puzzles and strategic time management challenges. A narrative-driven role-playing experience connects players to their virtual restaurant empires, blending creativity and strategy for a captivating adventure.",
            imgSrc: FSK,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 6,
            title: "Yeppy",
            body: "Yeppy Super App revolutionizes daily life, offering Financial, Booking, Retail, and Exclusive services in one seamless platform. Striving for global dominance, Yeppy builds partnerships, prioritizes secure payments, and ensures a user-friendly interface for diverse needs.",
            imgSrc: Yeppy,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 7,
            title: "C-more",
            body: "In collaboration with a construction industry partner, TekRevol introduces C-More—an e-commerce app designed for construction material stores and builders. The focus is on streamlining procurement processes, enhancing operational efficiency, and delivering a user-friendly platform that transforms the construction commerce sector.",
            imgSrc: Cmore,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 8,
            title: "Find, Serve & Keep",
            body: "FSK by TekRevol transforms gaming with immersive match-3 puzzles and strategic time management challenges. A narrative-driven role-playing experience connects players to their virtual restaurant empires, blending creativity and strategy for a captivating adventure.",
            imgSrc: FSK,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 9,
            title: "Find, Serve & Keep",
            body: "FSK by TekRevol transforms gaming with immersive match-3 puzzles and strategic time management challenges. A narrative-driven role-playing experience connects players to their virtual restaurant empires, blending creativity and strategy for a captivating adventure.",
            imgSrc: FSK,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 10,
            title: "Find, Serve & Keep",
            body: "FSK by TekRevol transforms gaming with immersive match-3 puzzles and strategic time management challenges. A narrative-driven role-playing experience connects players to their virtual restaurant empires, blending creativity and strategy for a captivating adventure.",
            imgSrc: FSK,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 11,
            title: "Find, Serve & Keep",
            body: "FSK by TekRevol transforms gaming with immersive match-3 puzzles and strategic time management challenges. A narrative-driven role-playing experience connects players to their virtual restaurant empires, blending creativity and strategy for a captivating adventure.",
            imgSrc: FSK,
        },
        {
            isFirst: false,
            isSecond: false,
            id: 12,
            title: "Find, Serve & Keep",
            body: "FSK by TekRevol transforms gaming with immersive match-3 puzzles and strategic time management challenges. A narrative-driven role-playing experience connects players to their virtual restaurant empires, blending creativity and strategy for a captivating adventure.",
            imgSrc: FSK,
        },
    ]

    const [productList, setProductList] = useState(data);
    const [filteredProductList, setFilteredProductList] = useState(data);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="flex flex-col w-full md:w-8/12">
                    <h2 className="font-bold mb-4">Case Study</h2>
                    <p>Explore TekRevol's exceptional portfolio to witness their transformative work in action, encompassing groundbreaking web and mobile applications, bespoke software development, and captivating digital experiences that push the boundaries of technology and drive business success</p>
                </div>
                <div className="flex relative w-full md:w-4/12">
                    <button className="p-[10px] bg-[#efcb19] min-w-[250px] w-full h-[55px] ms-[33%] rounded-lg text-white" onClick={() => handleClick()}>Select Industry</button>
                    <div id="wrapper1" className="flex flex-col absolute top-[60px] -right-[10px] p-5 bg-[#314252] min-w-[250px] w-[66%] rounded-lg text-white hidden">
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
                {productList.map(product => (
                    product.isSecond ? (
                        <div className="flex flex-col w-1/2 py-5 px-8  items-center h-[813px]" key={product.id}>
                            {product.isFirst ? (
                                <p className="font-[600] flex w-full mb-16 relative after:h-[1px] after:absolute after:right-0 after:top-5 after:w-[70%] after:bg-[#314252]">Our Case Study</p>
                            ) : null}

                            <img src={product.imgSrc} className="shadow-xl" alt="" />
                            <div className="flex flex-col w-full relative px-[50px] mt-8 after:w-[1px] after:absolute after:bg-[#314252] after:top-0 after:bottom-0 after:left-[10px]">
                                <h4 className="font-bold">{product.title}</h4>
                                <p className="md:leading-7">{product.body}</p>
                                <button className="w-1/2 rounded-full border-2 border-[#efcb19] text-[#efcb19] h-[40px] mt-8 hover:text-white hover:bg-[#efcb19] transition-all duration-500">View Case Study</button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col w-1/2 py-5 px-8 items-center" key={product.id}>
                            {product.isFirst ? (
                                <p className="font-[600] flex w-full mb-16 relative after:h-[1px] after:absolute after:right-0 after:top-5 after:w-[70%] after:bg-[#314252]">Our Case Study</p>
                            ) : null}

                            <img src={product.imgSrc} className="shadow-xl" alt="" />
                            <div className="flex flex-col w-full relative px-[50px] mt-8 after:w-[1px] after:absolute after:bg-[#314252] after:top-0 after:bottom-0 after:left-[10px]">
                                <h4 className="font-bold">{product.title}</h4>
                                <p className="md:leading-7">{product.body}</p>
                                <button className="w-1/2 rounded-full border-2 border-[#efcb19] text-[#efcb19] h-[40px] mt-8 hover:text-white hover:bg-[#efcb19] transition-all duration-500">View Case Study</button>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </>
    );
}