import HeaderDD from "./HeaderDD";
import { useState } from "react";
export default function Header() {

    const [stateOfMenu1, setStateOfMenu1] = useState("hidden");
    const [stateOfMenu2, setStateOfMenu2] = useState("hidden");
    const [stateOfMenu3, setStateOfMenu3] = useState("hidden");
    const [stateOfMenu4, setStateOfMenu4] = useState("hidden");

    function handleMegaMenus(num) {
        if (num == 1) {
            setStateOfMenu1("");
        }
        if (num == 2) {
            setStateOfMenu2("");
        }
        if (num == 3) {
            setStateOfMenu3("");
        }
        if (num == 4) {
            setStateOfMenu4("");
        }
        if (num == 5) {
            setStateOfMenu1("hidden");
        }
        if (num == 6) {
            setStateOfMenu2("hidden");
        }
        if (num == 7) {
            setStateOfMenu3("hidden");
        }
        if (num == 8) {
            setStateOfMenu4("hidden");
        }
    }

    function offcanvasHandler(state) {
        if (state == "open") {
            let offCanvas = document.getElementById("offCanvas");
            offCanvas.classList.remove("left-[300%]")
            offCanvas.classList.remove("opacity-0")
            document.getElementById("cover").classList.remove("hidden");
            document.addEventListener('wheel', preventScroll, { passive: false });
            document.getElementById("openOffCanvas").classList.add("hidden");
            document.getElementById("closeOffCanvas").classList.remove("hidden");
        } else if (state == "close") {
            let offCanvas = document.getElementById("offCanvas");
            offCanvas.classList.add("left-[300%]")
            offCanvas.classList.add("opacity-0")
            document.getElementById("cover").classList.add("hidden");
            document.removeEventListener('wheel', preventScroll, { passive: false });
            document.getElementById("openOffCanvas").classList.remove("hidden");
            document.getElementById("closeOffCanvas").classList.add("hidden");
        }
    }
    function preventScroll(e) {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }

    return (
        <header className="flex flex-col justify-center items-center pb-3 mb-[100px]">
            <div className="flex justify-between fixed bg-[white] w-full shadow top-0 md:px-[8%] me-[5px] max-w-[1900px] before:fixed before:bg-inherit before:left-0 before:right-[5px] before:top-0 before:bottom-0 before:max-h-[81px] before:-z-[1] h-[81px] z-[100]">
                <section className="flex items-center ps-4" id="logo">
                    <img src="/Projects/d-1.png" className="w-[48px]" alt="" />
                </section>
                <section className="hidden lg:block">
                    <nav className="flex relative">
                        <ul className="flex head-ul">
                            <a
                                href="/"
                                className="py-[30px] px-[18px] md:text-[11px] lg:text-[13px] font-[500] text-[#efcb19] relative"
                            >
                                Home
                            </a>
                            <a
                                href="/services/"
                                className="py-[30px] px-[18px] md:text-[11px] lg:text-[13px] font-[500] transition-all duration-800 relative"
                                onMouseOver={() => handleMegaMenus(1)}
                                onMouseOut={() => handleMegaMenus(5)}
                            >
                                Services
                            </a>
                            <a
                                href="/solution/"
                                className="py-[30px] px-[18px] md:text-[11px] lg:text-[13px] font-[500] transition-all duration-800 relative"
                                onMouseOver={() => handleMegaMenus(2)}
                                onMouseOut={() => handleMegaMenus(6)}
                            >
                                Solution
                            </a>
                            <a
                                href="/technologies/"
                                className="py-[30px] px-[18px] md:text-[11px] lg:text-[13px] font-[500] transition-all duration-800 relative"
                                onMouseOver={() => handleMegaMenus(3)}
                                onMouseOut={() => handleMegaMenus(7)}
                            >
                                Technologies
                            </a>
                            <a
                                href=""
                                className="py-[30px] px-[18px] md:text-[11px] lg:text-[13px] font-[500] transition-all duration-800 relative"
                            >
                                Location
                            </a>
                            <a
                                href=""
                                className="py-[30px] px-[18px] md:text-[11px] lg:text-[13px] font-[500] transition-all duration-800 relative"
                            >
                                Portfolio
                            </a>
                            <a
                                href=""
                                className="py-[30px] px-[18px] md:text-[11px] lg:text-[13px] font-[500] transition-all duration-800 relative"
                                onMouseOver={() => handleMegaMenus(4)}
                                onMouseOut={() => handleMegaMenus(8)}
                            >
                                Insights
                            </a>
                            <a
                                href="/contacts/"
                                className="flex  font-[600] justify-center items-center rounded-full px-5 py-0 h-[45px] text-white bg-[#efcb19] mt-[18px]"
                            >
                                GET A QUOTE
                            </a>
                        </ul>
                    </nav>
                </section>
                <div
                    className="lg:hidden flex w-[32px] me-5"
                    id="openOffCanvas"
                    onClick={() => offcanvasHandler("open")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hover:text-[#efcb19]"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={32}
                            d="M80 160h352M80 256h352M80 352h352"
                        />
                    </svg>
                </div>
                <div
                    className="lg:hidden flex w-[45px] overflow-hidden me-5 hidden"
                    id="closeOffCanvas"
                    onClick={() => offcanvasHandler("close")}
                >
                    <svg
                        fill="#314252"
                        height="64px"
                        width="64px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="-128 -128 768.00 768.00"
                        xmlSpace="preserve"
                        stroke="#314252"
                        strokeWidth="0.00512"
                        transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#314252CCCCCC"
                            strokeWidth="3.072"
                        />
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <path d="M256,0C114.84,0,0,114.842,0,256s114.84,256,256,256s256-114.842,256-256S397.16,0,256,0z M256,462.452 c-113.837,0-206.452-92.614-206.452-206.452S142.163,49.548,256,49.548S462.452,142.163,462.452,256S369.837,462.452,256,462.452z "></path>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <polygon points="355.269,191.767 320.233,156.731 256,220.964 191.767,156.731 156.731,191.767 220.964,256 156.731,320.233 191.767,355.269 256,291.036 320.233,355.269 355.269,320.233 291.036,256 "></polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <div
                className="bg-[black] fixed top-0 right-0 bottom-0 left-0 opacity-70 z-[99] hidden"
                id="cover"
            />
            <nav
                className="w-full fixed max-w-[300px] bg-[white] top-[81px] bottom-0 left-[300%] right-[0px] opacity-0 transition-all duration-500 z-[100]"
                id="offCanvas"
            >
                <div className="flex w-full p-8 pb-0">
                    <svg
                        width={20}
                        height={21}
                        className="hover:first::fill-[#efcb19] first:fill-[#718389]"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16.6667 7.16643L11.6667 2.78309C11.2084 2.37313 10.615 2.14648 10.0001 2.14648C9.38513 2.14648 8.79176 2.37313 8.33341 2.78309L3.33341 7.16643C3.06872 7.40316 2.8575 7.69356 2.71381 8.0183C2.57012 8.34304 2.49726 8.69466 2.50008 9.04976V16.3331C2.50008 16.9961 2.76347 17.632 3.23231 18.1009C3.70115 18.5697 4.33704 18.8331 5.00008 18.8331H15.0001C15.6631 18.8331 16.299 18.5697 16.7678 18.1009C17.2367 17.632 17.5001 16.9961 17.5001 16.3331V9.04143C17.5017 8.68773 17.4283 8.33771 17.2846 8.0145C17.141 7.69128 16.9304 7.40222 16.6667 7.16643ZM11.6667 17.1664H8.33341V12.9998C8.33341 12.7787 8.42121 12.5668 8.57749 12.4105C8.73377 12.2542 8.94573 12.1664 9.16675 12.1664H10.8334C11.0544 12.1664 11.2664 12.2542 11.4227 12.4105C11.5789 12.5668 11.6667 12.7787 11.6667 12.9998V17.1664ZM15.8334 16.3331C15.8334 16.5541 15.7456 16.7661 15.5893 16.9223C15.4331 17.0786 15.2211 17.1664 15.0001 17.1664H13.3334V12.9998C13.3334 12.3367 13.07 11.7008 12.6012 11.232C12.1323 10.7632 11.4965 10.4998 10.8334 10.4998H9.16675C8.5037 10.4998 7.86782 10.7632 7.39898 11.232C6.93014 11.7008 6.66675 12.3367 6.66675 12.9998V17.1664H5.00008C4.77907 17.1664 4.5671 17.0786 4.41082 16.9223C4.25454 16.7661 4.16675 16.5541 4.16675 16.3331V9.04143C4.1669 8.92311 4.19224 8.80617 4.24109 8.69841C4.28995 8.59065 4.36119 8.49452 4.45008 8.41643L9.45008 4.04143C9.60215 3.90783 9.79766 3.83415 10.0001 3.83415C10.2025 3.83415 10.398 3.90783 10.5501 4.04143L15.5501 8.41643C15.639 8.49452 15.7102 8.59065 15.7591 8.69841C15.8079 8.80617 15.8333 8.92311 15.8334 9.04143V16.3331Z"></path>
                    </svg>
                    <a href="/" className="ms-4  -my-[2px]">
                        Home
                    </a>
                </div>
                <div className="flex w-full p-8 pb-0">
                    <svg
                        width={20}
                        height={21}
                        className="hover:first::fill-[#efcb19] first:fill-[#718389]"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8.33333 11.3333H3.33333C3.11232 11.3333 2.90036 11.4211 2.74408 11.5774C2.5878 11.7337 2.5 11.9457 2.5 12.1667V17.1667C2.5 17.3877 2.5878 17.5996 2.74408 17.7559C2.90036 17.9122 3.11232 18 3.33333 18H8.33333C8.55435 18 8.76631 17.9122 8.92259 17.7559C9.07887 17.5996 9.16667 17.3877 9.16667 17.1667V12.1667C9.16667 11.9457 9.07887 11.7337 8.92259 11.5774C8.76631 11.4211 8.55435 11.3333 8.33333 11.3333ZM7.5 16.3333H4.16667V13H7.5V16.3333ZM16.6667 3H11.6667C11.4457 3 11.2337 3.0878 11.0774 3.24408C10.9211 3.40036 10.8333 3.61232 10.8333 3.83333V8.83333C10.8333 9.05435 10.9211 9.26631 11.0774 9.42259C11.2337 9.57887 11.4457 9.66667 11.6667 9.66667H16.6667C16.8877 9.66667 17.0996 9.57887 17.2559 9.42259C17.4122 9.26631 17.5 9.05435 17.5 8.83333V3.83333C17.5 3.61232 17.4122 3.40036 17.2559 3.24408C17.0996 3.0878 16.8877 3 16.6667 3V3ZM15.8333 8H12.5V4.66667H15.8333V8ZM16.6667 13.8333H15V12.1667C15 11.9457 14.9122 11.7337 14.7559 11.5774C14.5996 11.4211 14.3877 11.3333 14.1667 11.3333C13.9457 11.3333 13.7337 11.4211 13.5774 11.5774C13.4211 11.7337 13.3333 11.9457 13.3333 12.1667V13.8333H11.6667C11.4457 13.8333 11.2337 13.9211 11.0774 14.0774C10.9211 14.2337 10.8333 14.4457 10.8333 14.6667C10.8333 14.8877 10.9211 15.0996 11.0774 15.2559C11.2337 15.4122 11.4457 15.5 11.6667 15.5H13.3333V17.1667C13.3333 17.3877 13.4211 17.5996 13.5774 17.7559C13.7337 17.9122 13.9457 18 14.1667 18C14.3877 18 14.5996 17.9122 14.7559 17.7559C14.9122 17.5996 15 17.3877 15 17.1667V15.5H16.6667C16.8877 15.5 17.0996 15.4122 17.2559 15.2559C17.4122 15.0996 17.5 14.8877 17.5 14.6667C17.5 14.4457 17.4122 14.2337 17.2559 14.0774C17.0996 13.9211 16.8877 13.8333 16.6667 13.8333ZM8.33333 3H3.33333C3.11232 3 2.90036 3.0878 2.74408 3.24408C2.5878 3.40036 2.5 3.61232 2.5 3.83333V8.83333C2.5 9.05435 2.5878 9.26631 2.74408 9.42259C2.90036 9.57887 3.11232 9.66667 3.33333 9.66667H8.33333C8.55435 9.66667 8.76631 9.57887 8.92259 9.42259C9.07887 9.26631 9.16667 9.05435 9.16667 8.83333V3.83333C9.16667 3.61232 9.07887 3.40036 8.92259 3.24408C8.76631 3.0878 8.55435 3 8.33333 3V3ZM7.5 8H4.16667V4.66667H7.5V8Z"></path>
                    </svg>
                    <a href="/services/" className="ms-4  -my-[2px]">
                        Services
                    </a>
                </div>
                <div className="flex w-full p-8 pb-0">
                    <svg
                        width={20}
                        height={21}
                        className="hover:first::fill-[#efcb19] first:fill-[#718389]"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.0747 6.76655C17.07 6.74458 17.07 6.72185 17.0747 6.69988C17.0706 6.68065 17.0706 6.66078 17.0747 6.64155V6.56655L17.0247 6.44155C17.0044 6.40744 16.9791 6.37655 16.9497 6.34988L16.8747 6.28322H16.833L13.5497 4.20822L10.4497 2.29155C10.378 2.23466 10.2959 2.19221 10.208 2.16655H10.1414C10.0669 2.15412 9.99084 2.15412 9.91636 2.16655H9.83302C9.73623 2.18796 9.64342 2.22452 9.55802 2.27488L3.33302 6.14988L3.25802 6.20822L3.18302 6.27488L3.09969 6.33322L3.05802 6.38322L3.00802 6.50822V6.58322V6.63322C2.99993 6.68848 2.99993 6.74462 3.00802 6.79988V14.0749C3.00774 14.2165 3.04355 14.3559 3.11208 14.4798C3.18061 14.6037 3.2796 14.7082 3.39969 14.7832L9.64969 18.6499L9.77469 18.6999H9.84136C9.98234 18.7446 10.1337 18.7446 10.2747 18.6999H10.3414L10.4664 18.6499L16.6664 14.8416C16.7865 14.7665 16.8854 14.6621 16.954 14.5381C17.0225 14.4142 17.0583 14.2748 17.058 14.1332V6.85822C17.058 6.85822 17.0747 6.79988 17.0747 6.76655ZM9.99969 3.97488L11.483 4.89155L6.82469 7.77488L5.33302 6.85822L9.99969 3.97488ZM9.16636 16.4749L4.58302 13.6749V8.34988L9.16636 11.1832V16.4749ZM9.99969 9.71655L8.40802 8.75822L13.0664 5.86655L14.6664 6.85822L9.99969 9.71655ZM15.4164 13.6499L10.833 16.4999V11.1832L15.4164 8.34988V13.6499Z"></path>
                    </svg>
                    <a href="/solution/" className="ms-4  -my-[2px]">
                        Solution
                    </a>
                </div>
                <div className="flex w-full p-8 pb-0">
                    <svg
                        width={20}
                        height={11}
                        className="hover:first::fill-[#efcb19] first:fill-[#718389]"
                        viewBox="0 0 20 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.0919 0.574624C17.0145 0.496517 16.9223 0.434522 16.8208 0.392214C16.7192 0.349907 16.6103 0.328125 16.5003 0.328125C16.3903 0.328125 16.2813 0.349907 16.1798 0.392214C16.0782 0.434522 15.9861 0.496517 15.9086 0.574624L10.6669 5.82462L7.09194 2.24129C7.01447 2.16318 6.9223 2.10119 6.82076 2.05888C6.71921 2.01657 6.61028 1.99479 6.50027 1.99479C6.39026 1.99479 6.28134 2.01657 6.17979 2.05888C6.07824 2.10119 5.98608 2.16318 5.90861 2.24129L0.908608 7.24129C0.830501 7.31876 0.768506 7.41093 0.726198 7.51248C0.683891 7.61402 0.662109 7.72295 0.662109 7.83296C0.662109 7.94297 0.683891 8.05189 0.726198 8.15344C0.768506 8.25499 0.830501 8.34715 0.908608 8.42462C0.986077 8.50273 1.07824 8.56473 1.17979 8.60703C1.28134 8.64934 1.39026 8.67112 1.50027 8.67112C1.61028 8.67112 1.71921 8.64934 1.82076 8.60703C1.9223 8.56473 2.01447 8.50273 2.09194 8.42462L6.50027 4.00796L10.0753 7.59129C10.1527 7.6694 10.2449 7.73139 10.3465 7.7737C10.448 7.81601 10.5569 7.83779 10.6669 7.83779C10.777 7.83779 10.8859 7.81601 10.9874 7.7737C11.089 7.73139 11.1811 7.6694 11.2586 7.59129L17.0919 1.75796C17.17 1.68049 17.232 1.58832 17.2744 1.48677C17.3167 1.38522 17.3384 1.2763 17.3384 1.16629C17.3384 1.05628 17.3167 0.947359 17.2744 0.84581C17.232 0.74426 17.17 0.652093 17.0919 0.574624V0.574624Z"></path>
                    </svg>
                    <a href="/technologies/
                    " className="ms-4  -my-[6px]">
                        Technologies
                    </a>
                </div>
                <div className="flex w-full p-8 pb-0">
                    <svg
                        width={18}
                        height={19}
                        className="hover:first::fill-[#efcb19] first:fill-[#718389]"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2 18.5C1.45 18.5 0.979 18.3043 0.587 17.913C0.195667 17.521 0 17.05 0 16.5V2.5C0 1.95 0.195667 1.479 0.587 1.087C0.979 0.695667 1.45 0.5 2 0.5H16C16.55 0.5 17.021 0.695667 17.413 1.087C17.8043 1.479 18 1.95 18 2.5V16.5C18 17.05 17.8043 17.521 17.413 17.913C17.021 18.3043 16.55 18.5 16 18.5H2ZM2 16.5H16V2.5H2V16.5ZM3 14.5H15L11.25 9.5L8.25 13.5L6 10.5L3 14.5Z"></path>
                    </svg>
                    <a href="" className="ms-4  -my-[2px]">
                        Portfolio
                    </a>
                </div>
                <div className="flex w-full p-8 pb-0">
                    <svg
                        width={20}
                        height={21}
                        className="hover:first::fill-[#efcb19] first:fill-[#718389]"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M15.8327 3.83366H14.166V3.00033C14.166 2.77931 14.0782 2.56735 13.9219 2.41107C13.7657 2.25479 13.5537 2.16699 13.3327 2.16699C13.1117 2.16699 12.8997 2.25479 12.7434 2.41107C12.5871 2.56735 12.4993 2.77931 12.4993 3.00033V3.83366H7.49935V3.00033C7.49935 2.77931 7.41155 2.56735 7.25527 2.41107C7.09899 2.25479 6.88703 2.16699 6.66602 2.16699C6.445 2.16699 6.23304 2.25479 6.07676 2.41107C5.92048 2.56735 5.83268 2.77931 5.83268 3.00033V3.83366H4.16602C3.50297 3.83366 2.86709 4.09705 2.39825 4.56589C1.92941 5.03473 1.66602 5.67062 1.66602 6.33366V16.3337C1.66602 16.9967 1.92941 17.6326 2.39825 18.1014C2.86709 18.5703 3.50297 18.8337 4.16602 18.8337H15.8327C16.4957 18.8337 17.1316 18.5703 17.6005 18.1014C18.0693 17.6326 18.3327 16.9967 18.3327 16.3337V6.33366C18.3327 5.67062 18.0693 5.03473 17.6005 4.56589C17.1316 4.09705 16.4957 3.83366 15.8327 3.83366ZM16.666 16.3337C16.666 16.5547 16.5782 16.7666 16.4219 16.9229C16.2657 17.0792 16.0537 17.167 15.8327 17.167H4.16602C3.945 17.167 3.73304 17.0792 3.57676 16.9229C3.42048 16.7666 3.33268 16.5547 3.33268 16.3337V10.5003H16.666V16.3337ZM16.666 8.83366H3.33268V6.33366C3.33268 6.11265 3.42048 5.90068 3.57676 5.7444C3.73304 5.58812 3.945 5.50033 4.16602 5.50033H5.83268V6.33366C5.83268 6.55467 5.92048 6.76663 6.07676 6.92291C6.23304 7.0792 6.445 7.16699 6.66602 7.16699C6.88703 7.16699 7.09899 7.0792 7.25527 6.92291C7.41155 6.76663 7.49935 6.55467 7.49935 6.33366V5.50033H12.4993V6.33366C12.4993 6.55467 12.5871 6.76663 12.7434 6.92291C12.8997 7.0792 13.1117 7.16699 13.3327 7.16699C13.5537 7.16699 13.7657 7.0792 13.9219 6.92291C14.0782 6.76663 14.166 6.55467 14.166 6.33366V5.50033H15.8327C16.0537 5.50033 16.2657 5.58812 16.4219 5.7444C16.5782 5.90068 16.666 6.11265 16.666 6.33366V8.83366Z"></path>
                    </svg>
                    <a href="" className="ms-4  -my-[2px]">
                        Insights
                    </a>
                </div>
                <div className="flex w-full p-8 pb-0">
                    <svg
                        width={14}
                        height={14}
                        className="hover:first::fill-[#efcb19] first:fill-[#718389]"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.1833 14C11.5111 14 9.88115 13.6272 8.29344 12.8816C6.70522 12.1364 5.29874 11.1513 4.074 9.926C2.84874 8.70126 1.86356 7.29478 1.11844 5.70656C0.372815 4.11885 0 2.48889 0 0.816667C0 0.583333 0.0777777 0.388889 0.233333 0.233333C0.388889 0.0777777 0.583333 0 0.816667 0H3.96667C4.14815 0 4.31019 0.0583333 4.45278 0.175C4.59537 0.291667 4.67963 0.440741 4.70556 0.622222L5.21111 3.34444C5.23704 3.52593 5.23393 3.69107 5.20178 3.83989C5.16911 3.98922 5.09444 4.12222 4.97778 4.23889L3.09167 6.14444C3.63611 7.07778 4.32004 7.95278 5.14344 8.76944C5.96633 9.58611 6.87037 10.2926 7.85556 10.8889L9.68333 9.06111C9.8 8.94444 9.95245 8.85682 10.1407 8.79822C10.3284 8.74015 10.513 8.72407 10.6944 8.75L13.3778 9.29444C13.5593 9.33333 13.7083 9.4207 13.825 9.55656C13.9417 9.69293 14 9.85185 14 10.0333V13.1833C14 13.4167 13.9222 13.6111 13.7667 13.7667C13.6111 13.9222 13.4167 14 13.1833 14ZM2.35278 4.66667L3.63611 3.38333L3.30556 1.55556H1.575C1.63981 2.08704 1.73056 2.61204 1.84722 3.13056C1.96389 3.64907 2.13241 4.16111 2.35278 4.66667ZM9.31389 11.6278C9.81944 11.8481 10.3349 12.0231 10.8601 12.1528C11.3849 12.2824 11.913 12.3667 12.4444 12.4056V10.6944L10.6167 10.325L9.31389 11.6278Z"></path>
                    </svg>
                    <a href="" className="ms-4 -my-[6px]">
                        Get a Quote
                    </a>
                </div>
            </nav>
            <HeaderDD stateOne={stateOfMenu1} stateTwo={stateOfMenu2} stateThree={stateOfMenu3} stateFour={stateOfMenu4} handleMegaMenus={handleMegaMenus} />
        </header>

    );
}