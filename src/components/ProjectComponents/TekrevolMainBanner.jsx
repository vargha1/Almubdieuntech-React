import MainBannerList from "./MainBannerList";

export default function TekrevolMainBanner({ heading, body }) {
    return (
        <div className="flex flex-col md:w-[55%] w-full lg:me-[100px]">
            <h1 className="font-bold mb-4">{heading}</h1>
            <p>{body}</p>
            <MainBannerList item1Content={"Strategic Planning"} item2Content={"Cutting-Edge Technologies"} item3Content={"Unconventional App Experience"} item4Content={"Creative Solutions"} />
        </div>
    );
}