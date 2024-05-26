export default function MainBannerList({ item1Content, item2Content, item3Content, item4Content }) {
    return (
        <ul className="flex flex-wrap ps-5 mt-4">
            <li className="md:w-1/2 w-full list-disc">{item1Content}</li>
            <li className="md:w-1/2 w-full list-disc">{item2Content}</li>
            <li className="md:w-1/2 w-full list-disc">{item3Content}</li>
            <li className="md:w-1/2 w-full list-disc">{item4Content}</li>
        </ul>
    );
}