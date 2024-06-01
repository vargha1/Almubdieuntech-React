import MainBannerList from "./MainBannerList";

export default function TekrevolMainBanner({ heading, body, item1Content, item2Content, item3Content, item4Content }) {
    return (
        <div className="flex flex-col md:w-[55%] w-full">
            <h1 className="font-bold mb-4">{heading}</h1>
            <p>{body}</p>
            <MainBannerList item1Content={item1Content} item2Content={item2Content} item3Content={item3Content} item4Content={item4Content} />
        </div>
    );
}