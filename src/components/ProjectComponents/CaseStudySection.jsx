import { useState } from "react";
import React from 'react'
let RevCoin = "/Almubdieuntech-React/Projects/Rev-Coin-case-study-image-04686894a3b47de890856f49b80e1a5c.webp";
let StopVape = "/Almubdieuntech-React/Projects/Stop-Vaping-7091022dd8e7e4c21ed66df5f2777f61.webp";
let OnSite = "/Almubdieuntech-React/Projects/Onsite-79e4c6ef0484852c3ece40885b230389.webp";
let HDE = "/Almubdieuntech-React/Projects/High-Def-Events-a322bf992e89a0d5df76cd64b03c97d0.webp";
let Impact = "/Almubdieuntech-React/Projects/Project-Impact-b040f4a96670af6fc8544bf8b960960b.webp";
let Soundly = "/Almubdieuntech-React/Projects/Soundly-6f46a71cce49cb7ac3a358756a10f870.webp";
let Nurse = "/Almubdieuntech-React/Projects/Nurse-practitioner-7d9b8e9e65b72de2a328a10b63be39f3.webp";
let SV = "/Almubdieuntech-React/Projects/Save-Win-8f7efc5871f8ddc1e57d3cad63a38134.webp";
let AlHossein = "/Almubdieuntech-React/Projects/Al-Hussaini-7ebb2bb2ca6e101cff89077bfc006adf.webp";
let PCash = "/Almubdieuntech-React/Projects/Parcheesi-Cash-12e0dbe931e65112257163e15d85e4a0.webp";
let Selah = "/Almubdieuntech-React/Projects/Selah-c668082de800579542321c7f6eb10606.webp";
let StocknShip = "/Almubdieuntech-React/Projects/Stock-n-Ship-362478b9193a8dd09ca631c6837c2f6b.webp";
let Mocuts = "/Almubdieuntech-React/Projects/MoCuts-503ae546a2686e66ec20788db3a3b038.webp";
let NDE = "/Almubdieuntech-React/Projects/NDE-Offshore-16e5dd8df4d9638bc42720cb5cffbd2f.webp";
let SmartID = "/Almubdieuntech-React/Projects/Smart-ID-038c5ba29281adcae395701a34d2c0a2.webp";
let Equitrip = "/Almubdieuntech-React/Projects/Equitrip-41db5739d048ae110d99b83aa2ce50ee.webp";
let Kushme = "/Almubdieuntech-React/Projects/kush-Me-362180746a7e7d796cb5252754075b9d.webp";
let PassionPainting = "/Almubdieuntech-React/Projects/Passion-Painting-64e99c996f50dce0d744bea83b26baf3.webp";
let IntoGo = "/Almubdieuntech-React/Projects/Into-Go-016525282e2249aeb748a78d0eb9728a.webp";
let qRoll = "/Almubdieuntech-React/Projects/qRoll-105633e74736dbeb643224ce28757ccb.webp";
let BtnSmasher = "/Almubdieuntech-React/Projects/Button-Smasher-App-0565f0fc714c3e6bb830ba38ce6252e1.webp";
let bandits = "/Almubdieuntech-React/Projects/Beach-Bandits-App-39268f337c69135f1ff85b10b83a1567.webp";
let NovelCraft = "/Almubdieuntech-React/Projects/Novelcraft-c5ca9680a5df9d64e4822d3560012b31.webp";
let ArrRec = "/Almubdieuntech-React/Projects/Arrow-Recovery-App-3f351dfd3d08698d5a4ac2762d2a4ca9.webp";
let PicturePick = "/Almubdieuntech-React/Projects/Picture-Pick-8a775ac37a3a8a892c085422a1daf385.webp";
let IRemembered = "/Almubdieuntech-React/Projects/I-Remembered-eff27fd1b77f58d2e9e361a457a6a913.webp";
let TVM = "/Almubdieuntech-React/Projects/True-Vine-Media-44f541e5c9dda05cefadfa0ff98d6b4d.webp";
let SDW = "/Almubdieuntech-React/Projects/Select-Dealer-4ba2dfc4500061a241aa119ea400e85c.webp";
let MartBook = "/Almubdieuntech-React/Projects/Martbook-28587bd11f03bd568331f3f105d47d7d.webp";
let Talpool = "/Almubdieuntech-React/Projects/Talpool-5534607799c5d11b5d985509a0f75994.webp";
let DreamEnergy = "/Almubdieuntech-React/Projects/DreamEnergy-abdf116dd7322c26fb76c3cc33a0c3e2.webp";
let RE4Sale = "/Almubdieuntech-React/Projects/RE4-Sale-Signs-e3697456f006a80f3991d4dcae602e26.webp";
let WCR = "/Almubdieuntech-React/Projects/Waste-Connections-RMO-f82b4fb8856804f1687b0a2e4e7ee29c.webp";
let Muirfield = "/Almubdieuntech-React/Projects/Muirfield-2c93a5ab7cfbe898ec8083a1a2f760dd.webp";
let UNA = "/Almubdieuntech-React/Projects/UNA-31ec15630ce381a528c1f1172a1e75fd.webp";
let WMS = "/Almubdieuntech-React/Projects/Waste-Management-Solution-f9a5e076406445036dd927871cea6890.webp";
let SuperStar = "/Almubdieuntech-React/Projects/Superstar-3632366e18395b9134dca2966a657dde.webp";
let BOB = "/Almubdieuntech-React/Projects/B.O.B-e967b1177588094259eaf418799b476c.webp";
let WC = "/Almubdieuntech-React/Projects/Waste-Connections-84ddbd53d7b62dc9dc4811dacae80055.webp";
let VerteranApp = "/Almubdieuntech-React/Projects/Veteran-App-2e5e68960e0529e7afa27feb235a845e.webp";
let SmackBack = "/Almubdieuntech-React/Projects/Smackback-1532a829a0d27abc7e572813a485342f.webp";
let OzLeazing = "/Almubdieuntech-React/Projects/Oz-Leasing-744402995fbc91bb1c1394c4037503e2.webp";
let Mobius = "/Almubdieuntech-React/Projects/Mobius-a9b68b02975de423df2a581e07888af7.webp";
let MoodBe = "/Almubdieuntech-React/Projects/Moodbe-710742eee28ce9861451564efbd9ad83.webp";

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
            category: "",
            id: 0,
            title: "AMJ Workplace Wellnessasdas",
            body: "Workplace Wellness is a cross-platform fitness app for companies who acknowledge the direct connection between employee wellbeing, productivity and organizational performance.",
            imgSrc: "/Almubdieuntech-React/Projects/AMJ-Workplace-Wellness-d7df7da287e29888b211a62f791b0c79.webp",
        },
        {
            isFirst: false,
            isSecond: true,
            category: "",
            id: 1,
            title: "Pure Plank",
            body: "Plank is an online platform for fitness and exercise enthusiasts aiming to look after their health and exercise at home.",
            imgSrc: "/Almubdieuntech-React/Projects/Pure-Plank-6ab45fef1953a122beac7d4413605b20.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 2,
            title: "Rodeo",
            body: "Rodeo Social stands as an efficiently interactive platform in the realm of social media management.",
            imgSrc: "/Almubdieuntech-React/Projects/Rodeo-b9267c2e104d319cd4f8f2f19cad7cce.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "ecommerce",
            id: 3,
            title: "Mdrouz",
            body: "Mdrouz is a cutting-edge multi-vendor e-commerce mobile application developed by TekRevol for the GCC region.",
            imgSrc: "/Almubdieuntech-React/Projects/mdrouz-efa475ad64e4a1f3162fd134a0b5257b.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 4,
            title: "Truth GPT",
            body: "TruthGPT, an AI-powered mobile app designed to provide users with unbiased, transparent, and easily accessible information through a chatbot interface.",
            imgSrc: "/Almubdieuntech-React/Projects/Truth_gpt-daeb15abc302c450f096fde5d34cc949.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 5,
            title: "Find, Serve & Keep",
            body: "FSK by TekRevol transforms gaming with immersive match-3 puzzles and strategic time management challenges. A narrative-driven role-playing experience connects players to their virtual restaurant empires, blending creativity and strategy for a captivating adventure.",
            imgSrc: "/Almubdieuntech-React/Projects/FSK-ef36f9fa016e91760a49c38f32ad5161.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 6,
            title: "Yeppy",
            body: "Yeppy Super App revolutionizes daily life, offering Financial, Booking, Retail, and Exclusive services in one seamless platform. Striving for global dominance, Yeppy builds partnerships, prioritizes secure payments, and ensures a user-friendly interface for diverse needs.",
            imgSrc: "/Almubdieuntech-React/Projects/Yeppy-15b2693e5b6a177e3aa51e677af4e626.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "ecommerce",
            id: 7,
            title: "C-more",
            body: "In collaboration with a construction industry partner, TekRevol introduces C-More—an e-commerce app designed for construction material stores and builders. The focus is on streamlining procurement processes, enhancing operational efficiency, and delivering a user-friendly platform that transforms the construction commerce sector.",
            imgSrc: "/Almubdieuntech-React/Projects/Cmore-a72b1a22036aa984459cc69154be40f3.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 8,
            title: "Teemates",
            body: "TeeMates is a social media app for golfers where they can connect, network and share their golfing stories through TeeTimes with other buddies around the world.",
            imgSrc: "/Almubdieuntech-React/Projects/TeeMates-a7dd3cfee5002350cd3d075ddbfe6d9c.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 9,
            title: "Ether Legends",
            body: 'Ether Legends is a "play to earn" collectible NFT - Blockchain Trading Card Game where players can earn trophies and claim rewards by winning matches!',
            imgSrc: "/Almubdieuntech-React/Projects/Ether-Legends-7f5375de7497108b224099628da7515a.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 10,
            title: "Milocare",
            body: "MiloCare + is a platform aiming to transform health record management systems - creating a seamless experience for patients.",
            imgSrc: "/Almubdieuntech-React/Projects/milocare-ebd5d3f2fd5aaf695cb85a20932ea3ea.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 11,
            title: "Point2 Design",
            body: "Point 2 Design is an innovative platform dedicated to digitalization of customized order handling.",
            imgSrc: "/Almubdieuntech-React/Projects/point2-design-dc1736ca7a8d2c962d1f8aa9cb6d5808.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 12,
            title: "Peanut Butter",
            body: "Peanut Butter Park is the ultimate app for dog owners in the United States! We designed this app to help dog owners connect with other pet parents, find local resources, and receive real-time safety alerts, all in one convenient place.",
            imgSrc: "/Almubdieuntech-React/Projects/Peanut-Butter-a1ec857163f10ce7fd5fa0e7930eb824.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 13,
            title: "Our Chat",
            body: "OurChat is a paid texting service that connects you with a range of professionals at your fingertips.",
            imgSrc: "/Almubdieuntech-React/Projects/our-chat-7821c8729be8301b204cb77f17666c48.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 14,
            title: "kinekt",
            body: "Kinekt is an innovative solution developed to empower care providers by gathering and deciphering patient feedback from varied sources.",
            imgSrc: "/Almubdieuntech-React/Projects/kinekt-2294a3d1e73ccc504a3d28a7c625c07d.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 15,
            title: "Reck'N",
            body: "In a world where dining out sees digital novelty, TekRevol brought the Reck’N mobile app to life—a ground breaking resolution that redefines restaurant experiences.",
            imgSrc: "/Almubdieuntech-React/Projects/reck-n-1f8b51751c733af203514c19b7c6ab75.webp",
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 16,
            title: "Revcoin",
            body: "Rev Coin is a state-of-the-art crypto stock-based solution created by TekRevol, utilizing blockchain technology to revolutionize employee benefits.",
            imgSrc: RevCoin,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 17,
            title: "Stop Vaping Challenge App",
            body: "To minimize vaping, Stop Vaping was designed to be a digital solution for teens and young adults to cut down on nicotine intake and e-cigarettes, and reduce adverse health effects.",
            imgSrc: StopVape,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 18,
            title: "Onsite Social",
            body: "OnSite Social is a revolutionary mobile application developed by TekRevol, designed to bridge the gap between the physical and digital worlds. It facilitates the users with meaningful connections according to their real-time locations.",
            imgSrc: OnSite,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 19,
            title: "High Def Events",
            body: "HDE App is a one-stop digital auctions platform. It is a feature-packed mobile application with dedicated panels for creating appealing videos of products to intrigue the visitors into buying the product.",
            imgSrc: HDE,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 20,
            title: "Project Impact",
            body: "S.E.L.F Web App by Project Impact is a platform to increase productivity and efficiency of the students, teachers, parents.",
            imgSrc: Impact,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 21,
            title: "Soundly",
            body: "Soundly has revolutionized the way people experience music. Designed to enable music lovers to stream millions of songs from new artists through the app.",
            imgSrc: Soundly,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 22,
            title: "Nurse Practitioner",
            body: "The Nurse Practitioners application was built for a very specific reason – to revolutionize the healthcare system and convey the positive impact of technology to the end users.",
            imgSrc: Nurse,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "ecommerce",
            id: 23,
            title: "Save & Win",
            body: "Save & Win is a mobile application that encourages users to save money and get rewarded for it. Basically, this type of money-saving application allows users to compare the prices of their favorite products.",
            imgSrc: SV,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "ecommerce",
            id: 24,
            title: "Al Hussaini",
            body: "Al Hussaini Trading Company is a leading marketplace in Saudi Arabia for watches and jewelry, along with an expanded portfolio that includes leather goods, and writing instruments.",
            imgSrc: AlHossein,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 25,
            title: "Parcheesi Cash",
            body: "Parcheesi Cash is an online multiplayer Spanish board game that is a recreation of the Parcheesi – the national game of India since medieval times.",
            imgSrc: PCash,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 26,
            title: "Selah",
            body: "Selah is a social app designed to connect and interact with friends and family. It's a dedicated platform to socialize, chat, and share media with your loved ones.",
            imgSrc: Selah,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 27,
            title: "Stock n Ship",
            body: "Stock n Ship is a platform designed for businesses to manage their inventory, orders, product supplies, and customer refunds in a better-redefined manner through portals.",
            imgSrc: StocknShip,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 28,
            title: "MoCuts",
            body: "MoCuts Pro is an online marketplace for booking registered barbers, beauticians, and other day-to-day barber services.",
            imgSrc: Mocuts,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 29,
            title: "NDE Offshore",
            body: "NDE Offshore is a Swedish offshore company founded in 2005, operating in Sweden, Europe, and the Middle East.",
            imgSrc: NDE,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "corporate",
            id: 30,
            title: "Smart ID",
            body: "We teamed up with the client and helped him create the SmartID, Our team worked hard to ensure that the app we create promises a quick, uncomplicated and secure experience.",
            imgSrc: SmartID,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "corporate",
            id: 31,
            title: "Equitrip",
            body: "Equitrip is a digital platform for horse owners, horse transportation companies, and other industry stakeholders to connect and collaborate to make horse transport convenient.",
            imgSrc: Equitrip,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "corporate",
            id: 32,
            title: "kush-Me",
            body: "Kush Me is a user-orientated app designed for people to connect with marijuana dispensaries located near them.",
            imgSrc: Kushme,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 34,
            title: "Passion Painting",
            body: "Passion Painting Doesn’t Just Paint Houses, It’s a One Stop Solution.Consider Passion Painting as The Premier Experts In All Kinds Of Interior & Exterior Painting Jobs. Aiming To Make Your House Look As Good As New.",
            imgSrc: PassionPainting,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 35,
            title: "Into Go",
            body: "Into Go is America's newest and coolest 'things to do' app. Users can find information on local attractions, events, dining options, and everything else that is fun.",
            imgSrc: IntoGo,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 36,
            title: "qRoll",
            body: "qRoll is the mobile application for Talpool, a platform that helps people with talents and skills connect with recruiters, such as models and photographers, and find work.",
            imgSrc: qRoll,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 37,
            title: "Button Smasher App",
            body: "ButtonSmasher is a complete solution for gaming enthusiasts. With an authentic rating and review system, it provides a way for gamers to stay updated with the latest news in the game industry.",
            imgSrc: BtnSmasher,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 38,
            title: "Beach Bandits App",
            body: "Beach bandits is a one-stop solution, beach rental app that offers a wide variety of beach equipment and accessories for a fun day at the beach.",
            imgSrc: bandits,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 39,
            title: "Novelcraft",
            body: "Inspired by the New York Times Best Seller, “Beautiful Disaster,” NovelCraft allows players to step in the shoes of favorite characters, and take control of their fates.",
            imgSrc: NovelCraft,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "ecommerce",
            id: 40,
            title: "Arrow Recovery App",
            body: "One Of A Kind, Integrated Ecommerce Platform For Buying & Selling Of Catalytic Converters. Buy and sell with ease on our integrated platform, and experience hassle-free transactions like never before.",
            imgSrc: ArrRec,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 41,
            title: "Picture Pick",
            body: "Everything begins with a crazy idea. The big idea for Picture Pick was to bring together two things that no one could refuse.",
            imgSrc: PicturePick,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 42,
            title: "I Remembered",
            body: "iRemembered is an app that helps users to schedule their messages in advance using one of the pre-defined templates or by customizing their unique message.",
            imgSrc: IRemembered,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 43,
            title: "True Vine Media",
            body: "Unity is strength, and great communities are built on foundations of strong networks and collaboration.",
            imgSrc: TVM,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 44,
            title: "Select Dealer Website",
            body: "Select Dealer Service offers a complete partnership for their Dealer clients. They help their clients generate incremental income and offer exemplary services, support, and training.",
            imgSrc: SDW,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "ecommerce",
            id: 45,
            title: "Martbook",
            body: "Mart Book app is the more convenient option for farmers to explore regional markets and buy or sell animals of their choice in just three simple steps.",
            imgSrc: MartBook,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 46,
            title: "Talpool",
            body: "It’s said ‘two heads are better than one’, and we couldn’t agree more. It isn’t just technology that we revolutionize.",
            imgSrc: Talpool,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 47,
            title: "DreamEnergy",
            body: "Certified Business Energy Professionals and experienced industry experts offer unbiased advice, before and after sale consultation.",
            imgSrc: DreamEnergy,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 48,
            title: "RE4-Sale-Signs",
            body: "Tekrevol, design and development specialists build Re-Installer to be a modern, scalable, extensible, and secure platform that extend the capabilities of real estate professionals and deliver unmatched facilities.",
            imgSrc: RE4Sale,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 49,
            title: "Waste Connections RMO",
            body: "Waste Connections had a comprehensive web app solution to manage and optimize the route for truck drivers. Hence, they opted for RMO (Route Manager Online.",
            imgSrc: WCR,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 50,
            title: "Muirfield",
            body: "Today, technology is the key to turning strategies into sustainable returns. The real estate investment industry thrives on the flow, analysis.",
            imgSrc: Muirfield,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "corporate",
            id: 51,
            title: "UNA",
            body: "The University of North Alabama, one of the top universities in the USA, is known for producing exceptional U.S. Students.",
            imgSrc: UNA,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 52,
            title: "Waste Management Solution",
            body: "We design tailor-made automation software for the waste management industry that are known to Augment ROI through Automation and Technology.",
            imgSrc: WMS,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 53,
            title: "Superstar",
            body: "Superstar is an end-to-end digital platform that serves as a database for Waste Connections. The app also offered other features to the internal teams of Waste Connections.",
            imgSrc: SuperStar,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 54,
            title: "B.O.B",
            body: "B.O.B is an ultra-modern app that lets you list your business easily and conveniently over the internet. The app acts more like a local guide to your audience.",
            imgSrc: BOB,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "",
            id: 55,
            title: "Waste Connections",
            body: "Waste Connections decided to leverage modern technologies to solve one of the world’s biggest problems, ‘waste and garbage disposal.",
            imgSrc: WC,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "corporate",
            id: 56,
            title: "Veteran App",
            body: "This app was designed to serve just one purpose – To help Veterans in any way we can! The Veteran App connects US veterans with all types of facilities that can help them re-build their lives after coming back from the frontlines.",
            imgSrc: VerteranApp,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 57,
            title: "Smackback",
            body: "The Number #1 Message Scheduling App Out There. The USP of Smackback lies in the unprecedented convenience it offers to its users.",
            imgSrc: SmackBack,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "social",
            id: 58,
            title: "Oz Leasing",
            body: "Our team of qualified and experienced web designers and developers have an innovative approach to implement cutting-edge technologies to create highly functional, secure, and scalable websites with high ROI.",
            imgSrc: OzLeazing,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "corporate",
            id: 59,
            title: "Mobius",
            body: "Mobius Risk Group is an independent multi-asset risk advisory firm, offering appropriate market guidance to manufacturers, patrons, and capital market participants.",
            imgSrc: Mobius,
        },
        {
            isFirst: false,
            isSecond: false,
            category: "entertainment",
            id: 60,
            title: "Moodbe",
            body: "MoodBe is a revolutionary dating app that uses the user’s mood and interests to connect them with like-minded individuals. The app is designed to match them with people who share similar passions and emotional states, helping them find their perfect match.",
            imgSrc: MoodBe,
        },
    ]

    function handleCategory(type) {
        setFilteredProductList(data);
        console.log(type);
        if (type != null) {
            filteredProductList[0].isFirst = false;
            filteredProductList[1].isSecond = false;
            setFilteredProductList(filteredProductList.filter(product => {
                return product.category == type;
            }))
            filteredProductList[0].isFirst = true;
            filteredProductList[1].isSecond = true;
        }
    }
    const [, updateState] = React.useState();
    const [filteredProductList, setFilteredProductList] = useState(data);
    const forceUpdate = React.useCallback(() => updateState({}), []);

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
                        <a className="cursor-pointer" onClick={() => { handleCategory(null), forceUpdate() }}>All</a>
                        <a className="cursor-pointer" onClick={() => { handleCategory("corporate"), forceUpdate() }}>Corporate</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Ecommerce</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Social</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Entertainment</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Fashion</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Gaming</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Healthcare</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Logistics</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Oil & Gas</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Real Estate</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Automobile</a>
                        <a className="cursor-pointer" onClick={() => handleCategory("")}>Education</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-full container mt-[100px]">
                {filteredProductList.map(product => (
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