import { useState } from "react";

export default function HeaderDD({ stateOne, stateTwo, stateThree, stateFour, handleMegaMenus }) {
    return (
        <>
            <section
                id="megamenu1"
                onMouseOver={() => handleMegaMenus(1)}
                onMouseOut={() => handleMegaMenus(5)}
                className={`w-full fixed z-[191] bg-[white] shadow top-[81px] flex flex-col ${stateOne}`}
            >
                <div className="flex">
                    <div className="w-[25%] ps-[160px] flex flex-col">
                        <h4 className="pb-3 2xl:text-[25px] menu-h text-[black] font-[500]">
                            Our Services
                        </h4>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>
                    <div className="w-[25%] flex flex-col border-s-[1px] ps-4 border-[#f1f1f1]">
                        <h4 className="pb-3 2xl:text-[25px] menu-h text-[black] font-[500]">
                            Primary
                        </h4>
                        <a href="/android-app-development/">Android App Development</a>
                        <a href="/">IPhone App Development</a>
                        <a href="/">Game Development</a>
                        <a href="/">Web Development</a>
                        <a href="/">Custom Software Development</a>
                        <a href="/">Futter App Development</a>
                        <a href="/">Mobile App Development Services</a>
                    </div>
                    <div className="w-[25%] flex flex-col border-s-[1px] ps-4 border-[#f1f1f1]">
                        <h4 className="pb-3 2xl:text-[25px] menu-h text-[black] font-[500]">
                            Consulting
                        </h4>
                        <a href="/">Cloud Computing</a>
                        <a href="/">CTO Consultant</a>
                        <a href="/">Emerging Technology</a>
                        <a href="/">Digital Transformation</a>
                        <a href="/">Digital Marketplace</a>
                        <a href="/">Data Analytics</a>
                        <a href="/">Digital Strategy</a>
                    </div>
                    <div className="w-[25%] flex flex-col border-s-[1px] ps-4 border-[#f1f1f1]">
                        <h4 className="pb-3 2xl:text-[25px] menu-h text-[black] font-[500]">
                            Trending
                        </h4>
                        <a href="/">AI Development</a>
                        <a href="/">AR/VR Company</a>
                        <a href="/">Bluetooth App Development</a>
                        <a href="/">Automation Consultancy</a>
                        <a href="/">NFT Development</a>
                        <a href="/">Machine Learning</a>
                        <a href="/">React Native App Development</a>
                    </div>
                </div>
                <div className="flex items-center text-[white] w-full bg-[#314252] mt-[45px]">
                    <div className="flex items-center ps-[175px] w-[25%]">
                        <h4 className="2xl:text-[25px] font-normal">Core Services</h4>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={27}
                            height={41}
                            viewBox="0 0 27 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.77202 0.0322266H22.2266C23.286 0.0370094 24.3006 0.459973 25.0497 1.20908C25.7988 1.9582 26.2218 2.97283 26.2266 4.03223V36.0322C26.2218 37.0916 25.7988 38.1063 25.0497 38.8554C24.3006 39.6045 23.286 40.0274 22.2266 40.0322H4.77202C3.71262 40.0274 2.69798 39.6045 1.94887 38.8554C1.19976 38.1063 0.776798 37.0916 0.772017 36.0322V4.03223C0.776798 2.97283 1.19976 1.9582 1.94887 1.20908C2.69798 0.459973 3.71262 0.0370094 4.77202 0.0322266ZM2.95383 36.0322C2.95383 36.5144 3.14539 36.9769 3.48637 37.3179C3.82734 37.6589 4.2898 37.8504 4.77202 37.8504H22.2266C22.7088 37.8504 23.1712 37.6589 23.5122 37.3179C23.8532 36.9769 24.0447 36.5144 24.0447 36.0322V4.03223C24.0447 3.55001 23.8532 3.08755 23.5122 2.74658C23.1712 2.4056 22.7088 2.21404 22.2266 2.21404H4.77202C4.2898 2.21404 3.82734 2.4056 3.48637 2.74658C3.14539 3.08755 2.95383 3.55001 2.95383 4.03223V36.0322ZM11.6811 7.66859C11.6811 8.02819 11.7877 8.37972 11.9875 8.67872C12.1873 8.97772 12.4713 9.21076 12.8035 9.34837C13.1357 9.48598 13.5013 9.52199 13.854 9.45184C14.2067 9.38168 14.5307 9.20852 14.7849 8.95424C15.0392 8.69996 15.2124 8.37599 15.2825 8.0233C15.3527 7.67061 15.3167 7.30503 15.1791 6.9728C15.0415 6.64057 14.8084 6.35661 14.5094 6.15683C14.2104 5.95704 13.8589 5.85041 13.4993 5.85041C13.0171 5.85041 12.5546 6.04197 12.2136 6.38294C11.8727 6.72392 11.6811 7.18638 11.6811 7.66859Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a href="" className="">
                                Mobile Application
                            </a>
                            <span className="">IOS, Android and wearable Apps</span>
                        </div>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={56}
                            height={41}
                            viewBox="0 0 56 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M40.9519 15.8503H33.523C33.1535 15.8503 32.7993 15.7035 32.538 15.4423C32.2768 15.1811 32.1301 14.8268 32.1301 14.4574C32.1301 14.088 32.2768 13.7337 32.538 13.4724C32.7993 13.2112 33.1535 13.0645 33.523 13.0645H40.9519C41.3213 13.0645 41.6756 13.2112 41.9368 13.4724C42.198 13.7337 42.3448 14.088 42.3448 14.4574C42.3448 14.8268 42.198 15.1811 41.9368 15.4423C41.6756 15.7035 41.3213 15.8503 40.9519 15.8503ZM22.3796 13.0645H20.0581V10.7429C20.0581 10.3735 19.9113 10.0192 19.6501 9.75799C19.3889 9.49677 19.0346 9.35001 18.6652 9.35001C18.2957 9.35001 17.9415 9.49677 17.6802 9.75799C17.419 10.0192 17.2722 10.3735 17.2722 10.7429V13.0645H14.9507C14.5813 13.0645 14.227 13.2112 13.9658 13.4724C13.7046 13.7337 13.5578 14.088 13.5578 14.4574C13.5578 14.8268 13.7046 15.1811 13.9658 15.4423C14.227 15.7035 14.5813 15.8503 14.9507 15.8503H17.2722V18.1718C17.2722 18.5413 17.419 18.8956 17.6802 19.1568C17.9415 19.418 18.2957 19.5648 18.6652 19.5648C19.0346 19.5648 19.3889 19.418 19.6501 19.1568C19.9113 18.8956 20.0581 18.5413 20.0581 18.1718V15.8503H22.3796C22.749 15.8503 23.1033 15.7035 23.3646 15.4423C23.6258 15.1811 23.7725 14.8268 23.7725 14.4574C23.7725 14.088 23.6258 13.7337 23.3646 13.4724C23.1033 13.2112 22.749 13.0645 22.3796 13.0645ZM48.8219 40.8068C48.3689 40.8799 47.911 40.9187 47.4522 40.9228C46.416 40.9241 45.3899 40.7196 44.4334 40.321C43.477 39.9225 42.6092 39.338 41.8805 38.6013L41.7876 38.5317L32.1997 27.8758L23.7029 27.9223L14.115 38.5317L14.0221 38.6013C13.2934 39.338 12.4256 39.9225 11.4692 40.321C10.5127 40.7196 9.4866 40.9241 8.45043 40.9228C7.99158 40.9187 7.53371 40.8799 7.08072 40.8068C5.02056 40.4387 3.18997 39.2698 1.98926 37.5557C0.78854 35.8417 0.315398 33.7219 0.673294 31.6599L4.45739 12.1591C4.48061 12.1591 4.48061 12.1359 4.48061 12.1126C5.02727 8.99503 6.65655 6.17034 9.08148 4.13612C11.5064 2.10191 14.5714 0.988666 17.7366 0.992497L38.166 0.922852C41.3221 0.926199 44.377 2.03615 46.7991 4.05951C49.2212 6.08287 50.8571 8.89151 51.422 11.9966V12.043L55.2293 31.6367C55.594 33.7022 55.124 35.828 53.9227 37.5473C52.7213 39.2666 50.8868 40.4389 48.8219 40.8068ZM38.166 25.0668C40.9983 25.0668 43.7146 23.9417 45.7173 21.939C47.72 19.9363 48.8451 17.22 48.8451 14.3877C48.8451 11.5555 47.72 8.83922 45.7173 6.83651C43.7146 4.8338 40.9983 3.70869 38.166 3.70869L17.7366 3.77834C15.2351 3.7708 12.8108 4.64351 10.8881 6.24364C8.96537 7.84377 7.66688 10.0693 7.22001 12.5305V12.6234L3.4127 32.1475C3.18944 33.4822 3.5001 34.8512 4.27761 35.9588C5.05512 37.0664 6.23708 37.8238 7.56824 38.0674C8.36845 38.2083 9.19077 38.1553 9.9663 37.9129C10.7418 37.6706 11.448 37.2459 12.0256 36.6744L22.0546 25.6007C22.1805 25.4532 22.3372 25.3352 22.5137 25.255C22.6902 25.1747 22.8822 25.1343 23.0761 25.1364L38.166 25.0668ZM52.4899 32.1475L50.2148 20.4237C49.0941 22.6585 47.3734 24.5371 45.2454 25.8492C43.1173 27.1612 40.666 27.855 38.166 27.8526H35.9374L43.877 36.6512C44.6486 37.4109 45.6417 37.9057 46.7129 38.0642C47.7841 38.2226 48.8779 38.0365 49.8365 37.5327C50.795 37.0289 51.5685 36.2335 52.0455 35.2613C52.5224 34.2892 52.6781 33.1906 52.4899 32.1242V32.1475Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a className="menu-item" href="">
                                Game Development
                            </a>
                            <span className="">2D, 3D and Isometric Games</span>
                        </div>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={56}
                            height={41}
                            viewBox="0 0 56 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M49.4118 37.0588C52.1294 37.0588 54.3282 34.8353 54.3282 32.1176L54.3529 4.94118C54.3529 2.22353 52.1294 0 49.4118 0H9.88235C7.16471 0 4.94118 2.22353 4.94118 4.94118V32.1176C4.94118 34.8353 7.16471 37.0588 9.88235 37.0588H0C0 39.7765 2.22353 42 4.94118 42H54.3529C57.0706 42 59.2941 39.7765 59.2941 37.0588H49.4118ZM12.3529 4.94118H46.9412C48.3 4.94118 49.4118 6.05294 49.4118 7.41176V29.6471C49.4118 31.0059 48.3 32.1176 46.9412 32.1176H12.3529C10.9941 32.1176 9.88235 31.0059 9.88235 29.6471V7.41176C9.88235 6.05294 10.9941 4.94118 12.3529 4.94118ZM29.6471 39.5294C28.2882 39.5294 27.1765 38.4176 27.1765 37.0588C27.1765 35.7 28.2882 34.5882 29.6471 34.5882C31.0059 34.5882 32.1176 35.7 32.1176 37.0588C32.1176 38.4176 31.0059 39.5294 29.6471 39.5294Z"
                                fill="white"
                            />
                            <path
                                d="M20.2102 19.9318V19.25L25.6989 16.4545V17.5455L21.4886 19.5739L21.5227 19.5057V19.6761L21.4886 19.608L25.6989 21.6364V22.7273L20.2102 19.9318ZM30.9158 13.8636L28.1033 24.3125H27.1829L29.9954 13.8636H30.9158ZM37.8864 19.9318L32.3977 22.7273V21.6364L36.608 19.608L36.5739 19.6761V19.5057L36.608 19.5739L32.3977 17.5455V16.4545L37.8864 19.25V19.9318Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a className="" href="">
                                Software Development
                            </a>
                            <span className="">Startups &amp; Enterprises</span>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="megamenu2"
                onMouseOver={() => handleMegaMenus(2)}
                onMouseOut={() => handleMegaMenus(6)}
                className={`w-full fixed z-[191] bg-[white] shadow top-[81px] flex flex-col ${stateTwo}`}
            >
                <div className="flex">
                    <div className="w-[25%] ps-[160px] flex flex-col">
                        <h4 className="text-[black] font-[500] 2xl:text-[25px] menu-h">
                            Our Solution
                        </h4>
                    </div>
                    <div className="w-[25%] flex flex-col border-s-[1px] ps-4 border-[#f1f1f1]">
                        <h4 className="text-[black] font-[500] 2xl:text-[25px] menu-h">
                            Products
                        </h4>
                        <p>CMS Solution</p>
                        <p>HRM Solution</p>
                        <p>CRM Solution</p>
                        <p>ERP Solution</p>
                        <p>LMS Solution</p>
                        <p>POS Solution</p>
                    </div>
                    <div className="w-[25%] flex flex-col border-s-[1px] ps-4 border-[#f1f1f1]">
                        <h4 className="text-[black] font-[500] 2xl:text-[25px] menu-h">
                            Industries
                        </h4>
                        <p>Automotive</p>
                        <p>Healthcare</p>
                        <p>On-Demand</p>
                        <p>Education</p>
                        <p>Music</p>
                        <p>Fintech</p>
                    </div>
                    <div className="w-[25%] flex flex-col border-s-[1px] ps-4 border-[#f1f1f1]">
                        <h4>&nbsp;</h4>
                        <p>Logistics</p>
                        <p>Retail</p>
                        <p>Ecommerce</p>
                        <p>Real Estate</p>
                        <p>Staff Augmentation</p>
                    </div>
                </div>
                <div className="flex items-center text-[white] w-full bg-[#314252] mt-[45px]">
                    <div className="flex items-center ps-[175px] w-[25%]">
                        <h4 className="font-normal">Core Services</h4>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={27}
                            height={41}
                            viewBox="0 0 27 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.77202 0.0322266H22.2266C23.286 0.0370094 24.3006 0.459973 25.0497 1.20908C25.7988 1.9582 26.2218 2.97283 26.2266 4.03223V36.0322C26.2218 37.0916 25.7988 38.1063 25.0497 38.8554C24.3006 39.6045 23.286 40.0274 22.2266 40.0322H4.77202C3.71262 40.0274 2.69798 39.6045 1.94887 38.8554C1.19976 38.1063 0.776798 37.0916 0.772017 36.0322V4.03223C0.776798 2.97283 1.19976 1.9582 1.94887 1.20908C2.69798 0.459973 3.71262 0.0370094 4.77202 0.0322266ZM2.95383 36.0322C2.95383 36.5144 3.14539 36.9769 3.48637 37.3179C3.82734 37.6589 4.2898 37.8504 4.77202 37.8504H22.2266C22.7088 37.8504 23.1712 37.6589 23.5122 37.3179C23.8532 36.9769 24.0447 36.5144 24.0447 36.0322V4.03223C24.0447 3.55001 23.8532 3.08755 23.5122 2.74658C23.1712 2.4056 22.7088 2.21404 22.2266 2.21404H4.77202C4.2898 2.21404 3.82734 2.4056 3.48637 2.74658C3.14539 3.08755 2.95383 3.55001 2.95383 4.03223V36.0322ZM11.6811 7.66859C11.6811 8.02819 11.7877 8.37972 11.9875 8.67872C12.1873 8.97772 12.4713 9.21076 12.8035 9.34837C13.1357 9.48598 13.5013 9.52199 13.854 9.45184C14.2067 9.38168 14.5307 9.20852 14.7849 8.95424C15.0392 8.69996 15.2124 8.37599 15.2825 8.0233C15.3527 7.67061 15.3167 7.30503 15.1791 6.9728C15.0415 6.64057 14.8084 6.35661 14.5094 6.15683C14.2104 5.95704 13.8589 5.85041 13.4993 5.85041C13.0171 5.85041 12.5546 6.04197 12.2136 6.38294C11.8727 6.72392 11.6811 7.18638 11.6811 7.66859Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a href="" className="">
                                Mobile Application
                            </a>
                            <span className="">IOS, Android and wearable Apps</span>
                        </div>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={56}
                            height={41}
                            viewBox="0 0 56 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M40.9519 15.8503H33.523C33.1535 15.8503 32.7993 15.7035 32.538 15.4423C32.2768 15.1811 32.1301 14.8268 32.1301 14.4574C32.1301 14.088 32.2768 13.7337 32.538 13.4724C32.7993 13.2112 33.1535 13.0645 33.523 13.0645H40.9519C41.3213 13.0645 41.6756 13.2112 41.9368 13.4724C42.198 13.7337 42.3448 14.088 42.3448 14.4574C42.3448 14.8268 42.198 15.1811 41.9368 15.4423C41.6756 15.7035 41.3213 15.8503 40.9519 15.8503ZM22.3796 13.0645H20.0581V10.7429C20.0581 10.3735 19.9113 10.0192 19.6501 9.75799C19.3889 9.49677 19.0346 9.35001 18.6652 9.35001C18.2957 9.35001 17.9415 9.49677 17.6802 9.75799C17.419 10.0192 17.2722 10.3735 17.2722 10.7429V13.0645H14.9507C14.5813 13.0645 14.227 13.2112 13.9658 13.4724C13.7046 13.7337 13.5578 14.088 13.5578 14.4574C13.5578 14.8268 13.7046 15.1811 13.9658 15.4423C14.227 15.7035 14.5813 15.8503 14.9507 15.8503H17.2722V18.1718C17.2722 18.5413 17.419 18.8956 17.6802 19.1568C17.9415 19.418 18.2957 19.5648 18.6652 19.5648C19.0346 19.5648 19.3889 19.418 19.6501 19.1568C19.9113 18.8956 20.0581 18.5413 20.0581 18.1718V15.8503H22.3796C22.749 15.8503 23.1033 15.7035 23.3646 15.4423C23.6258 15.1811 23.7725 14.8268 23.7725 14.4574C23.7725 14.088 23.6258 13.7337 23.3646 13.4724C23.1033 13.2112 22.749 13.0645 22.3796 13.0645ZM48.8219 40.8068C48.3689 40.8799 47.911 40.9187 47.4522 40.9228C46.416 40.9241 45.3899 40.7196 44.4334 40.321C43.477 39.9225 42.6092 39.338 41.8805 38.6013L41.7876 38.5317L32.1997 27.8758L23.7029 27.9223L14.115 38.5317L14.0221 38.6013C13.2934 39.338 12.4256 39.9225 11.4692 40.321C10.5127 40.7196 9.4866 40.9241 8.45043 40.9228C7.99158 40.9187 7.53371 40.8799 7.08072 40.8068C5.02056 40.4387 3.18997 39.2698 1.98926 37.5557C0.78854 35.8417 0.315398 33.7219 0.673294 31.6599L4.45739 12.1591C4.48061 12.1591 4.48061 12.1359 4.48061 12.1126C5.02727 8.99503 6.65655 6.17034 9.08148 4.13612C11.5064 2.10191 14.5714 0.988666 17.7366 0.992497L38.166 0.922852C41.3221 0.926199 44.377 2.03615 46.7991 4.05951C49.2212 6.08287 50.8571 8.89151 51.422 11.9966V12.043L55.2293 31.6367C55.594 33.7022 55.124 35.828 53.9227 37.5473C52.7213 39.2666 50.8868 40.4389 48.8219 40.8068ZM38.166 25.0668C40.9983 25.0668 43.7146 23.9417 45.7173 21.939C47.72 19.9363 48.8451 17.22 48.8451 14.3877C48.8451 11.5555 47.72 8.83922 45.7173 6.83651C43.7146 4.8338 40.9983 3.70869 38.166 3.70869L17.7366 3.77834C15.2351 3.7708 12.8108 4.64351 10.8881 6.24364C8.96537 7.84377 7.66688 10.0693 7.22001 12.5305V12.6234L3.4127 32.1475C3.18944 33.4822 3.5001 34.8512 4.27761 35.9588C5.05512 37.0664 6.23708 37.8238 7.56824 38.0674C8.36845 38.2083 9.19077 38.1553 9.9663 37.9129C10.7418 37.6706 11.448 37.2459 12.0256 36.6744L22.0546 25.6007C22.1805 25.4532 22.3372 25.3352 22.5137 25.255C22.6902 25.1747 22.8822 25.1343 23.0761 25.1364L38.166 25.0668ZM52.4899 32.1475L50.2148 20.4237C49.0941 22.6585 47.3734 24.5371 45.2454 25.8492C43.1173 27.1612 40.666 27.855 38.166 27.8526H35.9374L43.877 36.6512C44.6486 37.4109 45.6417 37.9057 46.7129 38.0642C47.7841 38.2226 48.8779 38.0365 49.8365 37.5327C50.795 37.0289 51.5685 36.2335 52.0455 35.2613C52.5224 34.2892 52.6781 33.1906 52.4899 32.1242V32.1475Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a className="menu-item" href="">
                                Game Development
                            </a>
                            <span className="">2D, 3D and Isometric Games</span>
                        </div>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={56}
                            height={41}
                            viewBox="0 0 56 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M49.4118 37.0588C52.1294 37.0588 54.3282 34.8353 54.3282 32.1176L54.3529 4.94118C54.3529 2.22353 52.1294 0 49.4118 0H9.88235C7.16471 0 4.94118 2.22353 4.94118 4.94118V32.1176C4.94118 34.8353 7.16471 37.0588 9.88235 37.0588H0C0 39.7765 2.22353 42 4.94118 42H54.3529C57.0706 42 59.2941 39.7765 59.2941 37.0588H49.4118ZM12.3529 4.94118H46.9412C48.3 4.94118 49.4118 6.05294 49.4118 7.41176V29.6471C49.4118 31.0059 48.3 32.1176 46.9412 32.1176H12.3529C10.9941 32.1176 9.88235 31.0059 9.88235 29.6471V7.41176C9.88235 6.05294 10.9941 4.94118 12.3529 4.94118ZM29.6471 39.5294C28.2882 39.5294 27.1765 38.4176 27.1765 37.0588C27.1765 35.7 28.2882 34.5882 29.6471 34.5882C31.0059 34.5882 32.1176 35.7 32.1176 37.0588C32.1176 38.4176 31.0059 39.5294 29.6471 39.5294Z"
                                fill="white"
                            />
                            <path
                                d="M20.2102 19.9318V19.25L25.6989 16.4545V17.5455L21.4886 19.5739L21.5227 19.5057V19.6761L21.4886 19.608L25.6989 21.6364V22.7273L20.2102 19.9318ZM30.9158 13.8636L28.1033 24.3125H27.1829L29.9954 13.8636H30.9158ZM37.8864 19.9318L32.3977 22.7273V21.6364L36.608 19.608L36.5739 19.6761V19.5057L36.608 19.5739L32.3977 17.5455V16.4545L37.8864 19.25V19.9318Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a className="" href="">
                                Software Development
                            </a>
                            <span className="">Startups &amp; Enterprises</span>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="megamenu3"
                onMouseOver={() => handleMegaMenus(3)}
                onMouseOut={() => handleMegaMenus(7)}
                className={`w-full fixed z-[191] bg-[white] shadow top-[81px] flex flex-col ${stateThree}`}
            >
                <div className="flex">
                    <div className="w-[25%] ps-[185px] flex flex-col">
                        <h4 className="text-[black] font-normal 2xl:text-[25px] menu-h">
                            Our Technologies
                        </h4>
                    </div>
                    <div className="w-[25%] flex flex-col" />
                    <div className="w-[25%] flex flex-col border-s-[1px] ps-4 border-[#f1f1f1]">
                        <h4 className="text-[black] font-[500] 2xl:text-[25px] menu-h">
                            Languages
                        </h4>
                        <p>.NET</p>
                        <p>HTML5</p>
                        <p>Java</p>
                        <p>Node.Js</p>
                        <p>PHP</p>
                        <p>Python</p>
                    </div>
                    <div className="w-[25%] flex flex-col border-s-[1px] ps-4 border-[#f1f1f1]">
                        <h4 className="text-[black] font-[500] 2xl:text-[25px] menu-h">
                            Platforms
                        </h4>
                        <p>Azure</p>
                        <p>GCP</p>
                        <p>Oracle</p>
                        <p>SAP</p>
                    </div>
                </div>
                <div className="flex items-center text-[white] w-full bg-[#314252] mt-[45px]">
                    <div className="flex items-center ps-[175px] w-[25%]">
                        <h4>Core Services</h4>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={27}
                            height={41}
                            viewBox="0 0 27 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.77202 0.0322266H22.2266C23.286 0.0370094 24.3006 0.459973 25.0497 1.20908C25.7988 1.9582 26.2218 2.97283 26.2266 4.03223V36.0322C26.2218 37.0916 25.7988 38.1063 25.0497 38.8554C24.3006 39.6045 23.286 40.0274 22.2266 40.0322H4.77202C3.71262 40.0274 2.69798 39.6045 1.94887 38.8554C1.19976 38.1063 0.776798 37.0916 0.772017 36.0322V4.03223C0.776798 2.97283 1.19976 1.9582 1.94887 1.20908C2.69798 0.459973 3.71262 0.0370094 4.77202 0.0322266ZM2.95383 36.0322C2.95383 36.5144 3.14539 36.9769 3.48637 37.3179C3.82734 37.6589 4.2898 37.8504 4.77202 37.8504H22.2266C22.7088 37.8504 23.1712 37.6589 23.5122 37.3179C23.8532 36.9769 24.0447 36.5144 24.0447 36.0322V4.03223C24.0447 3.55001 23.8532 3.08755 23.5122 2.74658C23.1712 2.4056 22.7088 2.21404 22.2266 2.21404H4.77202C4.2898 2.21404 3.82734 2.4056 3.48637 2.74658C3.14539 3.08755 2.95383 3.55001 2.95383 4.03223V36.0322ZM11.6811 7.66859C11.6811 8.02819 11.7877 8.37972 11.9875 8.67872C12.1873 8.97772 12.4713 9.21076 12.8035 9.34837C13.1357 9.48598 13.5013 9.52199 13.854 9.45184C14.2067 9.38168 14.5307 9.20852 14.7849 8.95424C15.0392 8.69996 15.2124 8.37599 15.2825 8.0233C15.3527 7.67061 15.3167 7.30503 15.1791 6.9728C15.0415 6.64057 14.8084 6.35661 14.5094 6.15683C14.2104 5.95704 13.8589 5.85041 13.4993 5.85041C13.0171 5.85041 12.5546 6.04197 12.2136 6.38294C11.8727 6.72392 11.6811 7.18638 11.6811 7.66859Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a href="" className="">
                                Mobile Application
                            </a>
                            <span className="">IOS, Android and wearable Apps</span>
                        </div>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={56}
                            height={41}
                            viewBox="0 0 56 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M40.9519 15.8503H33.523C33.1535 15.8503 32.7993 15.7035 32.538 15.4423C32.2768 15.1811 32.1301 14.8268 32.1301 14.4574C32.1301 14.088 32.2768 13.7337 32.538 13.4724C32.7993 13.2112 33.1535 13.0645 33.523 13.0645H40.9519C41.3213 13.0645 41.6756 13.2112 41.9368 13.4724C42.198 13.7337 42.3448 14.088 42.3448 14.4574C42.3448 14.8268 42.198 15.1811 41.9368 15.4423C41.6756 15.7035 41.3213 15.8503 40.9519 15.8503ZM22.3796 13.0645H20.0581V10.7429C20.0581 10.3735 19.9113 10.0192 19.6501 9.75799C19.3889 9.49677 19.0346 9.35001 18.6652 9.35001C18.2957 9.35001 17.9415 9.49677 17.6802 9.75799C17.419 10.0192 17.2722 10.3735 17.2722 10.7429V13.0645H14.9507C14.5813 13.0645 14.227 13.2112 13.9658 13.4724C13.7046 13.7337 13.5578 14.088 13.5578 14.4574C13.5578 14.8268 13.7046 15.1811 13.9658 15.4423C14.227 15.7035 14.5813 15.8503 14.9507 15.8503H17.2722V18.1718C17.2722 18.5413 17.419 18.8956 17.6802 19.1568C17.9415 19.418 18.2957 19.5648 18.6652 19.5648C19.0346 19.5648 19.3889 19.418 19.6501 19.1568C19.9113 18.8956 20.0581 18.5413 20.0581 18.1718V15.8503H22.3796C22.749 15.8503 23.1033 15.7035 23.3646 15.4423C23.6258 15.1811 23.7725 14.8268 23.7725 14.4574C23.7725 14.088 23.6258 13.7337 23.3646 13.4724C23.1033 13.2112 22.749 13.0645 22.3796 13.0645ZM48.8219 40.8068C48.3689 40.8799 47.911 40.9187 47.4522 40.9228C46.416 40.9241 45.3899 40.7196 44.4334 40.321C43.477 39.9225 42.6092 39.338 41.8805 38.6013L41.7876 38.5317L32.1997 27.8758L23.7029 27.9223L14.115 38.5317L14.0221 38.6013C13.2934 39.338 12.4256 39.9225 11.4692 40.321C10.5127 40.7196 9.4866 40.9241 8.45043 40.9228C7.99158 40.9187 7.53371 40.8799 7.08072 40.8068C5.02056 40.4387 3.18997 39.2698 1.98926 37.5557C0.78854 35.8417 0.315398 33.7219 0.673294 31.6599L4.45739 12.1591C4.48061 12.1591 4.48061 12.1359 4.48061 12.1126C5.02727 8.99503 6.65655 6.17034 9.08148 4.13612C11.5064 2.10191 14.5714 0.988666 17.7366 0.992497L38.166 0.922852C41.3221 0.926199 44.377 2.03615 46.7991 4.05951C49.2212 6.08287 50.8571 8.89151 51.422 11.9966V12.043L55.2293 31.6367C55.594 33.7022 55.124 35.828 53.9227 37.5473C52.7213 39.2666 50.8868 40.4389 48.8219 40.8068ZM38.166 25.0668C40.9983 25.0668 43.7146 23.9417 45.7173 21.939C47.72 19.9363 48.8451 17.22 48.8451 14.3877C48.8451 11.5555 47.72 8.83922 45.7173 6.83651C43.7146 4.8338 40.9983 3.70869 38.166 3.70869L17.7366 3.77834C15.2351 3.7708 12.8108 4.64351 10.8881 6.24364C8.96537 7.84377 7.66688 10.0693 7.22001 12.5305V12.6234L3.4127 32.1475C3.18944 33.4822 3.5001 34.8512 4.27761 35.9588C5.05512 37.0664 6.23708 37.8238 7.56824 38.0674C8.36845 38.2083 9.19077 38.1553 9.9663 37.9129C10.7418 37.6706 11.448 37.2459 12.0256 36.6744L22.0546 25.6007C22.1805 25.4532 22.3372 25.3352 22.5137 25.255C22.6902 25.1747 22.8822 25.1343 23.0761 25.1364L38.166 25.0668ZM52.4899 32.1475L50.2148 20.4237C49.0941 22.6585 47.3734 24.5371 45.2454 25.8492C43.1173 27.1612 40.666 27.855 38.166 27.8526H35.9374L43.877 36.6512C44.6486 37.4109 45.6417 37.9057 46.7129 38.0642C47.7841 38.2226 48.8779 38.0365 49.8365 37.5327C50.795 37.0289 51.5685 36.2335 52.0455 35.2613C52.5224 34.2892 52.6781 33.1906 52.4899 32.1242V32.1475Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a className="menu-item" href="">
                                Game Development
                            </a>
                            <span className="">2D, 3D and Isometric Games</span>
                        </div>
                    </div>
                    <div className="flex w-[25%] py-4">
                        <svg
                            className="me-4"
                            width={56}
                            height={41}
                            viewBox="0 0 56 41"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M49.4118 37.0588C52.1294 37.0588 54.3282 34.8353 54.3282 32.1176L54.3529 4.94118C54.3529 2.22353 52.1294 0 49.4118 0H9.88235C7.16471 0 4.94118 2.22353 4.94118 4.94118V32.1176C4.94118 34.8353 7.16471 37.0588 9.88235 37.0588H0C0 39.7765 2.22353 42 4.94118 42H54.3529C57.0706 42 59.2941 39.7765 59.2941 37.0588H49.4118ZM12.3529 4.94118H46.9412C48.3 4.94118 49.4118 6.05294 49.4118 7.41176V29.6471C49.4118 31.0059 48.3 32.1176 46.9412 32.1176H12.3529C10.9941 32.1176 9.88235 31.0059 9.88235 29.6471V7.41176C9.88235 6.05294 10.9941 4.94118 12.3529 4.94118ZM29.6471 39.5294C28.2882 39.5294 27.1765 38.4176 27.1765 37.0588C27.1765 35.7 28.2882 34.5882 29.6471 34.5882C31.0059 34.5882 32.1176 35.7 32.1176 37.0588C32.1176 38.4176 31.0059 39.5294 29.6471 39.5294Z"
                                fill="white"
                            />
                            <path
                                d="M20.2102 19.9318V19.25L25.6989 16.4545V17.5455L21.4886 19.5739L21.5227 19.5057V19.6761L21.4886 19.608L25.6989 21.6364V22.7273L20.2102 19.9318ZM30.9158 13.8636L28.1033 24.3125H27.1829L29.9954 13.8636H30.9158ZM37.8864 19.9318L32.3977 22.7273V21.6364L36.608 19.608L36.5739 19.6761V19.5057L36.608 19.5739L32.3977 17.5455V16.4545L37.8864 19.25V19.9318Z"
                                fill="white"
                            />
                        </svg>
                        <div className="flex flex-col">
                            <a className="" href="">
                                Software Development
                            </a>
                            <span className="">Startups &amp; Enterprises</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center max-w-[1900px] w-full md:px-[8%] relative">
                <section
                    id="drop-D"
                    className={`flex flex-col fixed top-[81px] right-[10%] z-[102] bg-[white] shadow-md p-5 ${stateFour}`}
                    onMouseOver={() => handleMegaMenus(4)}
                    onMouseOut={() => handleMegaMenus(8)}
                >
                    <a href="" className="p-2 text-[13px]">
                        About Almubdieuntech
                    </a>
                    <a href="" className="p-2 text-[13px]">
                        Life at Almubdieuntech
                    </a>
                    <a href="" className="p-2 text-[13px]">
                        Blogs
                    </a>
                    <a href="" className="p-2 text-[13px]">
                        Press
                    </a>
                    <a href="" className="p-2 text-[13px]">
                        Podcast
                    </a>
                    <a href="" className="p-2 text-[13px]">
                        Events
                    </a>
                    <a href="" className="p-2 text-[13px]">
                        Referral Program
                    </a>
                </section>
            </section>
        </>
    )
}