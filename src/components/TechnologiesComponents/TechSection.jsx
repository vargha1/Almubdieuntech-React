import { useState } from "react";

export default function TechSection() {

    const languages = [
        {
            id: 0,
            title: ".NET",
            body: "TekRevol uses the .NET platform to build state-of-the-art software systems. We build technologies using .NET that help you in every walk of life."
        },
        {
            id: 1,
            title: "HTML5",
            body: "We help businesses build robust digital solutions for internal operational and diverse customer segments, including web, apps, and SaaS."
        },
        {
            id: 2,
            title: "Java",
            body: "Our native app development solutions for Android have enabled many of our clients to achieve their targets and see unprecedented business growth."
        },
        {
            id: 3,
            title: "Node.js",
            body: "Get an interactive web app or a data-intensive program with a robust backend with TekRevol’s Node.js developers."
        },
        {
            id: 4,
            title: "PHP",
            body: "TekRevol is a PHP development company encompassing all the solutions you may require while developing a backend solution for your business"
        },
        {
            id: 5,
            title: "Python",
            body: "We are a python development company using Python for web development, CMS portals, machine learning."
        },
    ]

    const platforms = [
        {
            id: 0,
            title: "Azure",
            body: "TekRevol helps you create and deliver innovative business experiences to your stakeholders on a secure, robust Microsoft Azure cloud infrastructure."
        },
        {
            id: 1,
            title: "GCP",
            body: "TekRevol helps its clients migrate, modernize and transform their data with GCP Cloud, the Google Cloud Platform service"
        },
        {
            id: 2,
            title: "Oracle",
            body: "Our Oracle consulting services enable businesses to build and manage cloud applications with the right tools"
        },
        {
            id: 3,
            title: "SAP",
            body: "For clients from diverse industries, our SAP consultants have helped them achieve a stable organizational structure"
        },
    ]

    const [languagesList, setLanguagesList] = useState(languages);
    const [platformList, setPlatformList] = useState(platforms)

    return (
        <>
            <section className="flex flex-col w-full md:px-[6%] mt-14 max-w-[1900px]">
                <h2 className="font-bold">Languages</h2>
                <div className="flex flex-wrap w-full">
                    {languagesList.map(language => (
                        <div
                            className="flex flex-col md:w-[calc(33.3%-24px)] w-full relative my-3 mx-3 hover:text-white hover:bg-[#efcb19] bg-[#fcfcfc] rounded-3xl p-8 transition-all duration-500" key={language.id}>
                            <h4 className=" font-bold mb-3">{language.title}</h4>
                            <p className=" mb-[48px]">{language.body}</p>
                            <a
                                href=""
                                className="absolute flex  justify-center items-center bg-[#f8f0c8] right-[32px] bottom-[32px] rounded-lg h-[32px] w-[32px]"
                            >
                                <svg
                                    width={24}
                                    height={15}
                                    viewBox="0 0 24 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.8148 8.20711C23.2054 7.81658 23.2054 7.18342 22.8148 6.79289L16.4509 0.428932C16.0604 0.0384078 15.4272 0.0384078 15.0367 0.428932C14.6461 0.819457 14.6461 1.45262 15.0367 1.84315L20.6935 7.5L15.0367 13.1569C14.6461 13.5474 14.6461 14.1805 15.0367 14.5711C15.4272 14.9616 16.0604 14.9616 16.4509 14.5711L22.8148 8.20711ZM0.894531 8.5H22.1077V6.5H0.894531V8.5Z"
                                        fill="#efcb19"
                                    />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <section className="flex flex-col w-full md:px-[6%] mt-14 max-w-[1900px]">
                <h2 className="font-bold">Platforms</h2>
                <div className="flex flex-wrap w-full">
                    {platformList.map(platform => (
                        <div
                            className="flex flex-col md:w-[calc(33.3%-24px)] w-full relative my-3 mx-3 hover:text-white hover:bg-[#efcb19] bg-[#fcfcfc] rounded-3xl p-8 transition-all duration-500" key={platform.id}>
                            <h4 className=" font-bold mb-3">{platform.title}</h4>
                            <p className=" mb-[48px]">{platform.body}</p>
                            <a
                                href=""
                                className="absolute flex  justify-center items-center bg-[#f8f0c8] right-[32px] bottom-[32px] rounded-lg h-[32px] w-[32px]"
                            >
                                <svg
                                    width={24}
                                    height={15}
                                    viewBox="0 0 24 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.8148 8.20711C23.2054 7.81658 23.2054 7.18342 22.8148 6.79289L16.4509 0.428932C16.0604 0.0384078 15.4272 0.0384078 15.0367 0.428932C14.6461 0.819457 14.6461 1.45262 15.0367 1.84315L20.6935 7.5L15.0367 13.1569C14.6461 13.5474 14.6461 14.1805 15.0367 14.5711C15.4272 14.9616 16.0604 14.9616 16.4509 14.5711L22.8148 8.20711ZM0.894531 8.5H22.1077V6.5H0.894531V8.5Z"
                                        fill="#efcb19"
                                    />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}