import { useState } from "react";
import AMJ from "../../assets/Projects/AMJ-Workplace-Wellness-d7df7da287e29888b211a62f791b0c79.webp";
import PureP from "../../assets/Projects/Pure-Plank-6ab45fef1953a122beac7d4413605b20.webp";
import Rodeo from "../../assets/Projects/Rodeo-b9267c2e104d319cd4f8f2f19cad7cce.webp";
import Mdrouz from "../../assets/Projects/mdrouz-efa475ad64e4a1f3162fd134a0b5257b.webp";
import TruthGPT from "../../assets/Projects/Truth_gpt-daeb15abc302c450f096fde5d34cc949.webp";
import FSK from "../../assets/Projects/FSK-ef36f9fa016e91760a49c38f32ad5161.webp";
import Yeppy from "../../assets/Projects/Yeppy-15b2693e5b6a177e3aa51e677af4e626.webp";
import Cmore from "../../assets/Projects/Cmore-a72b1a22036aa984459cc69154be40f3.webp";
import Teemates from "../../assets/Projects/TeeMates-a7dd3cfee5002350cd3d075ddbfe6d9c.webp";
import Ether from "../../assets/Projects/Ether-Legends-7f5375de7497108b224099628da7515a.webp";
import MiloCare from "../../assets/Projects/milocare-ebd5d3f2fd5aaf695cb85a20932ea3ea.webp";
import Point2 from "../../assets/Projects/point2-design-dc1736ca7a8d2c962d1f8aa9cb6d5808.webp";
import Peanut from "../../assets/Projects/Peanut-Butter-a1ec857163f10ce7fd5fa0e7930eb824.webp";
import OurChat from "../../assets/Projects/our-chat-7821c8729be8301b204cb77f17666c48.webp";
import kinekt from "../../assets/Projects/kinekt-2294a3d1e73ccc504a3d28a7c625c07d.webp";
import Reck from "../../assets/Projects/reck-n-1f8b51751c733af203514c19b7c6ab75.webp";
import RevCoin from "../../assets/Projects/Rev-Coin-case-study-image-04686894a3b47de890856f49b80e1a5c.webp";
import StopVape from "../../assets/Projects/Stop-Vaping-7091022dd8e7e4c21ed66df5f2777f61.webp";
import OnSite from "../../assets/Projects/Onsite-79e4c6ef0484852c3ece40885b230389.webp";
import HDF from "../../assets/Projects/High-Def-Events-a322bf992e89a0d5df76cd64b03c97d0.webp";
import Impact from "../../assets/Projects/Project-Impact-b040f4a96670af6fc8544bf8b960960b.webp";
import Soundly from "../../assets/Projects/Soundly-6f46a71cce49cb7ac3a358756a10f870.webp";
import Nurse from "../../assets/Projects/Nurse-practitioner-7d9b8e9e65b72de2a328a10b63be39f3.webp";
import SV from "../../assets/Projects/Save-Win-8f7efc5871f8ddc1e57d3cad63a38134.webp";
import AlHossein from "../../assets/Projects/Al-Hussaini-7ebb2bb2ca6e101cff89077bfc006adf.webp";
import PCash from "../../assets/Projects/Parcheesi-Cash-12e0dbe931e65112257163e15d85e4a0.webp";
import Selah from "../../assets/Projects/Selah-c668082de800579542321c7f6eb10606.webp";
import StocknShip from "../../assets/Projects/Stock-n-Ship-362478b9193a8dd09ca631c6837c2f6b.webp";
import Mocuts from "../../assets/Projects/MoCuts-503ae546a2686e66ec20788db3a3b038.webp";
import NDE from "../../assets/Projects/NDE-Offshore-16e5dd8df4d9638bc42720cb5cffbd2f.webp";
import SmartID from "../../assets/Projects/Smart-ID-038c5ba29281adcae395701a34d2c0a2.webp";
import Equitrip from "../../assets/Projects/Equitrip-41db5739d048ae110d99b83aa2ce50ee.webp";
import Kushme from "../../assets/Projects/kush-Me-362180746a7e7d796cb5252754075b9d.webp";
import PassionPainting from "../../assets/Projects/Passion-Painting-64e99c996f50dce0d744bea83b26baf3.webp";
import IntoGo from "../../assets/Projects/Into-Go-016525282e2249aeb748a78d0eb9728a.webp";
import qRoll from "../../assets/Projects/qRoll-105633e74736dbeb643224ce28757ccb.webp";
import BtnSmasher from "../../assets/Projects/Button-Smasher-App-0565f0fc714c3e6bb830ba38ce6252e1.webp";
import bandits from "../../assets/Projects/Beach-Bandits-App-39268f337c69135f1ff85b10b83a1567.webp";
import NovelCraft from "../../assets/Projects/Novelcraft-c5ca9680a5df9d64e4822d3560012b31.webp";
import ArrRec from "../../assets/Projects/Arrow-Recovery-App-3f351dfd3d08698d5a4ac2762d2a4ca9.webp";
import PicturePick from "../../assets/Projects/Picture-Pick-8a775ac37a3a8a892c085422a1daf385.webp";
import IRemembered from "../../assets/Projects/I-Remembered-eff27fd1b77f58d2e9e361a457a6a913.webp";
import TVM from "../../assets/Projects/True-Vine-Media-44f541e5c9dda05cefadfa0ff98d6b4d.webp";
import SDW from "../../assets/Projects/Select-Dealer-4ba2dfc4500061a241aa119ea400e85c.webp";
import MarkBook from "../../assets/Projects/Martbook-28587bd11f03bd568331f3f105d47d7d.webp";
import Talpool from "../../assets/Projects/Talpool-5534607799c5d11b5d985509a0f75994.webp";
import DreamEnergy from "../../assets/Projects/DreamEnergy-abdf116dd7322c26fb76c3cc33a0c3e2.webp";
import RE4Sale from "../../assets/Projects/RE4-Sale-Signs-e3697456f006a80f3991d4dcae602e26.webp";
import WCR from "../../assets/Projects/Waste-Connections-RMO-f82b4fb8856804f1687b0a2e4e7ee29c.webp";
import Muirfield from "../../assets/Projects/Muirfield-2c93a5ab7cfbe898ec8083a1a2f760dd.webp";
import UNA from "../../assets/Projects/UNA-31ec15630ce381a528c1f1172a1e75fd.webp";
import WMS from "../../assets/Projects/Waste-Management-Solution-f9a5e076406445036dd927871cea6890.webp";
import SuperStar from "../../assets/Projects/Superstar-3632366e18395b9134dca2966a657dde.webp";
import BOB from "../../assets/Projects/B.O.B-e967b1177588094259eaf418799b476c.webp";
import WC from "../../assets/Projects/Waste-Connections-84ddbd53d7b62dc9dc4811dacae80055.webp";
import VerteranApp from "../../assets/Projects/Veteran-App-2e5e68960e0529e7afa27feb235a845e.webp";
import SmackBack from "../../assets/Projects/Smackback-1532a829a0d27abc7e572813a485342f.webp";
import OzLeazing from "../../assets/Projects/Oz-Leasing-744402995fbc91bb1c1394c4037503e2.webp";
import Mobius from "../../assets/Projects/Mobius-a9b68b02975de423df2a581e07888af7.webp";
import MoodBe from "../../assets/Projects/Moodbe-710742eee28ce9861451564efbd9ad83.webp";

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
            <div className="flex flex-wrap w-full container mt-[100px]">
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