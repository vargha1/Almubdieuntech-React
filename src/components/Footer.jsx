import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Footer() {
    return (
        <>
            <section className="flex flex-col items-center w-full mt-[150px]">
                <div className="flex flex-col md:px-[8%] max-w-[1900px] w-full">
                    <h2 className="font-bold">Our Clients</h2>
                    <p className="my-5">
                        We contribute to these partnership programs, supported by global
                        technology experts. Partnering with industry leaders, we offer quality
                        technology solutions that meet your business needs.
                    </p>
                </div>
                <div className="md:flex flex-wrap md:px-[8%] max-w-[1900px] hidden">
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                    <div className="flex justify-center items-center lg:w-1/6 md:w-1/4 w-1/3 px-6 border-trans2">
                        <img src="/Almubdieuntech-React/Projects/d-1.png" alt="logo" />
                    </div>
                </div>
                <div className="overflow-hidden flex md:hidden w-full md:px-[8%] max-w-[1900px]">
                    <Swiper
                        loop={true}
                        modules={[A11y]}
                        spaceBetween={10}
                        breakpoints={{
                            0: {
                                slidesPerView: 2.1,
                            },
                            768: {
                                slidesPerView: 4.3,
                            },
                        }}
                    >
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans flex justify-center">
                            <p>.</p>
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans flex justify-center">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="border-trans">
                            <img src="/Almubdieuntech-React/Projects/d-1.png" className="w-[50%]" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <footer className="flex flex-col items-center w-full pt-10 mt-32 bg-black text-white">
                <p className="mb-0 mt-14">Have a Project To Discuss?</p>
                <h2 className="font-bold mb-4">We’re ready!</h2>
                <button className="rounded-full w- h-[45px] w-[150px] text-[#efcb19] border-[#efcb19] border-2 hover:text-white hover:bg-[#efcb19] transition-all duration-300">
                    Lets Connect
                </button>
                <div className="flex md:hidden flex-col w-full p-5">
                    <nav className="flex flex-col">
                        <h4 className=" mb-4 font-bold">Services</h4>
                        <div className="flex flex-col ps-3">
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Custom Software Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Android App Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Iphone App Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Web Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Game Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Mobile App Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Startup App Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Flutter App Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Cross Platform App Development
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                React Native App Development
                            </a>
                        </div>
                    </nav>
                    <nav className="flex flex-col">
                        <h4 className=" mb-4 font-bold mt-6">Solution</h4>
                        <a
                            href=""
                            className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                        >
                            Music App Development
                        </a>
                        <a
                            href=""
                            className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                        >
                            Real Estate App Development
                        </a>
                    </nav>
                    <nav>
                        <h4 className=" mb-4 font-bold mt-6">About Us</h4>
                        <div className="flex flex-col ps-3">
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                About Almubdieuntech
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Referral Program
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Blogs
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Press
                            </a>
                            <a
                                href=""
                                className=" my-[5px] w-fit hover:text-[#efcb19] transition-all duration-300"
                            >
                                Location
                            </a>
                        </div>
                    </nav>
                    <div className=" my-3">© Tekrevol 2024. All rights reserved</div>
                    <div className="flex items-center">
                        <a
                            href=""
                            className=" my-[5px] me-4 w-fit hover:text-[#efcb19] transition-all duration-300 after:bg-white after:w-[2px] after:inline-block after:absolute after:h-[20px] after:ms-2"
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href=""
                            className=" my-[5px] me-4 w-fit hover:text-[#efcb19] transition-all duration-300 after:bg-white after:w-[2px] after:inline-block after:absolute after:h-[20px] after:ms-2"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href=""
                            className=" my-[5px] me-4 w-fit hover:text-[#efcb19] transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="md:flex hidden w-full md:px-[8%] max-w-[1900px] mt-28">
                    <div className="flex flex-col">
                        <h4 className=" font-bold">Services</h4>
                        <div className="flex">
                            <div className="flex flex-col me-6">
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Custom Software Development
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Iphone App Development
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Game Development
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Startup App Development
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Cross Platform App Development
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Android App Development
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Web Development
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Mobile App Development
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Flutter App Development
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    React Native App Development
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-20">
                        <h4 className=" font-bold">Solutions</h4>
                        <div className="flex">
                            <div className="flex flex-col me-6">
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Music App Development
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Real Estate App Development
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className=" font-bold">About Us</h4>
                        <div className="flex">
                            <div className="flex flex-col me-6">
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    About Almubdieuntech
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Referral Program
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Blogs
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Press
                                </a>
                                <a
                                    href=""
                                    className=" my-[10px] w-fit hover:text-[#efcb19] transition-all duration-300"
                                >
                                    Location
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex flex-col hidden w-full md:px-[8%] max-w-[1900px] mt-10 mb-14">
                    <h4 className="font-bold mb-4">Location</h4>
                    <div className="flex justify-between">
                        <div className="flex">
                            <a className="font-[600]">IR</a>
                        </div>
                        <div className="flex">
                            <a href="https://instagram.com/almubdieun.tech">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    className="fill-white hover:fill-[#efcb19]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:flex hidden justify-between w-full max-w-[1900px] px-[8%]">
                    <p>© Tekrevol 2024. All rights reserved</p>
                    <ul className="flex items-center">
                        <li className=" my-[5px] me-4 w-fit hover:text-[#efcb19] transition-all duration-300 after:bg-white after:w-[2px] after:inline-block after:absolute after:h-[20px] after:ms-2">
                            Terms and Conditions
                        </li>
                        <li className=" my-[5px] me-4 w-fit hover:text-[#efcb19] transition-all duration-300 after:bg-white after:w-[2px] after:inline-block after:absolute after:h-[20px] after:ms-2">
                            Privacy Policy
                        </li>
                        <li className=" my-[5px] me-4 w-fit hover:text-[#efcb19] transition-all duration-300">
                            Contact Us
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}