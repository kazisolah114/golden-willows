// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import "./OverviewSection.css";
// import Image from "next/image";

// const OverviewSection = () => {
//     const overview_data = {
//         category: "Residential",
//         status: "Under Construction",
//         configurations: "1, 2, 3 & 4 BHK",
//         project_size: "8 Buildings",
//         location: "Survey No. 30, Bhokharpada Village NH-4, Raigad, Panvel",
//         city: "Navi Mumbai",
//         avg_price: "17.58 K - ₹18.49 K/sq.ft",
//     };

//     const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
//     const isScrolling = useRef(false);
//     const sectionRefs = useRef([]);

//     const sections = [
//         <SectionOne overview_data={overview_data} />,
//         <SectionTwo />,
//         <SectionThree />,
//     ];

//     const handleScroll = (event) => {
//         if (isScrolling.current) return;

//         const nextSectionIndex =
//             event.deltaY > 0
//                 ? Math.min(currentSectionIndex + 1, sections.length - 1)
//                 : Math.max(currentSectionIndex - 1, 0);

//         if (nextSectionIndex !== currentSectionIndex) {
//             isScrolling.current = true;
//             sectionRefs.current[nextSectionIndex]?.scrollIntoView({
//                 behavior: "smooth",
//             });
//             setCurrentSectionIndex(nextSectionIndex);

//             setTimeout(() => {
//                 isScrolling.current = false;
//             }, 700); // Prevent rapid scrolling
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("wheel", handleScroll, { passive: false });
//         return () => {
//             window.removeEventListener("wheel", handleScroll);
//         };
//     }, [currentSectionIndex, sections.length]);

//     return (
//         <div className="overview-section px-20 max-lg:px-10 max-md:px-5 py-20" id="overview">
//             <p className="text-lg mb-16">Overview</p>
//             <div className="grid grid-cols-11 gap-5 items-start">
//                 <div className="section-indicators col-span-1">
//                     {sections.map((_, index) => (
//                         <div
//                             key={index}
//                             className={`indicator ${index === currentSectionIndex ? "active" : ""
//                                 }`}
//                         ></div>
//                     ))}
//                 </div>
//                 {sections.map((section, index) => (
//                     <div
//                         key={index}
//                         ref={(el) => (sectionRefs.current[index] = el)}
//                         className={`col-span-10 scroll-section ${index === currentSectionIndex ? "visible" : "hidden"
//                             }`}
//                     >
//                         {section}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// const SectionOne = ({ overview_data }) => (
//     <section className="max-lg:mb-10 grid grid-cols-2 max-lg:grid-cols-1 gap-44 max-lg:gap-20 items-center animate-slide-in-up">
//         <div>
//             <h3 className="text-4xl font-semibold mb-20 animate-fade-in">
//                 Step into your next lavish abode
//             </h3>
//             <p className="mb-5 animate-fade-in">
//                 Each 1 BHK to 4 BHK residence is an elegant sanctuary of space
//                 and sophistication.
//             </p>
//             <p className="animate-fade-in">
//                 Surrounded by lush, landscaped gardens and filled with natural
//                 light, these homes are paired with exceptional amenities,
//                 including a modern clubhouse, a rejuvenating pool, and a fully
//                 equipped gym.
//             </p>
//         </div>
//         <div className="animate-slide-in-up">
//             <ul className="flex flex-col gap-5">
//                 {Object.keys(overview_data).map((key) => (
//                     <li
//                         key={key}
//                         className="border-b border-gray-300 pb-5 grid grid-cols-3 gap-5 font-[500]"
//                     >
//                         {key.charAt(0).toUpperCase() + key.slice(1)}
//                         <span className="font-normal text-[#1E1E1E] col-span-2">
//                             {overview_data[key]}
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     </section>
// );

// const SectionTwo = () => (
//     <section className="max-lg:mb-10 grid grid-cols-2 max-lg:grid-cols-1 gap-44 max-lg:gap-20 items-center animate-fade-in">
//         <div>
//             <h3 className="text-4xl font-semibold mb-20">
//                 Say Bye to long commutes
//             </h3>
//             <p className="mb-5">
//                 Set in the vibrant suburbs of Panvel, Golden Willows offers
//                 connectivity to the upcoming Navi Mumbai International Airport
//                 with metro and Yotta- Asia's Largest Data Center.
//             </p>
//             <p>
//                 This exclusive address offers a school, hospital, mall,
//                 restaurants and a bus stand all within a minutes reach.
//             </p>
//         </div>
//         <div>
//             <Image
//                 src="/images/map.png"
//                 alt="map_map"
//                 width={500}
//                 height={500}
//                 className="w-full h-96 rounded-md animate-slide-in-up"
//                 quality={100}
//                 priority
//             />
//         </div>
//     </section>
// );

// const SectionThree = () => (
//     <section className="grid grid-cols-2 max-lg:grid-cols-1 gap-44 max-lg:gap-20 items-center animate-slide-in-up">
//         <div>
//             <h3 className="text-4xl font-semibold mb-20">
//                 Silence, Serenity, and Beauty come together here
//             </h3>
//             <p className="mb-5">
//                 Surrounded by verdant landscapes and designed with impeccable
//                 precision, this residence redefines modern luxury.
//             </p>
//             <p>
//                 Here, every detail speaks to a life elevated—where the serenity
//                 of nature meets peak comfort.
//             </p>
//         </div>
//         <div>
//             <Image
//                 src="/images/overview.jpg"
//                 alt="overview_map"
//                 width={500}
//                 height={500}
//                 className="w-full h-96 rounded-md animate-fade-in"
//                 quality={100}
//                 priority
//             />
//         </div>
//     </section>
// );

// export default OverviewSection;


"use client";
import Image from "next/image";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./OverviewSection.css";

const OverviewSection = () => {
    const overview_data = {
        category: "Residential",
        status: "Under Construction",
        configurations: "1, 2, 3 & 4 BHK",
        project_size: "8 Buildings",
        location: "Survey No. 30, Bhokharpada Village NH-4, Raigad, Panvel",
        city: "Navi Mumbai",
        avg_price: "₹17.58 K - ₹18.49 K/sq.ft",
    };

    const isSmallScreen = useMediaQuery("(max-width: 1024px)");
    const [current_section, set_current_section] = useState("first");

    return (
        <div className="px-20 max-lg:px-10 max-md:px-5 py-20" id="overview">
            <p className="text-lg mb-28">Overview</p>
            {isSmallScreen ? (
                // Small screen: Show all sections stacked in one column
                <div className="grid grid-cols-1 gap-10">
                    <SectionOne overview_data={overview_data} />
                    <SectionTwo />
                    <SectionThree />
                </div>
            ) : (
                // Larger screens: Show sections with buttons for interaction
                <div className="grid grid-cols-8">
                    <div className="actions flex flex-col gap-3">
                        {["first", "second", "third"].map((section) => (
                            <button
                                key={section}
                                onClick={() => set_current_section(section)}
                                className={`h-2 rounded-full transition-all duration-300 ${current_section === section
                                        ? "w-20 bg-gray-800 scale-105"
                                        : "w-14 bg-gray-300"
                                    }`}
                            ></button>
                        ))}
                    </div>
                    <div className="sections col-span-7 relative overflow-hidden">
                        {current_section === "first" && (
                            <SectionOne overview_data={overview_data} />
                        )}
                        {current_section === "second" && <SectionTwo />}
                        {current_section === "third" && <SectionThree />}
                    </div>
                </div>
            )}
        </div>
    );
};

const SectionOne = ({ overview_data }) => (
    <section className="max-lg:mb-10 grid grid-cols-2 max-lg:grid-cols-1 gap-44 max-lg:gap-20 items-center animate-slide-in-up">
        <div>
            <h3 className="text-4xl font-semibold mb-20 animate-fade-in">
                Step into your next lavish abode
            </h3>
            <p className="mb-5 animate-fade-in">
                Each 1 BHK to 4 BHK residence is an elegant sanctuary of space
                and sophistication.
            </p>
            <p className="animate-fade-in">
                Surrounded by lush, landscaped gardens and filled with natural
                light, these homes are paired with exceptional amenities,
                including a modern clubhouse, a rejuvenating pool, and a fully
                equipped gym.
            </p>
        </div>
        <div className="animate-slide-in-up">
            <ul className="flex flex-col gap-5">
                {Object.entries(overview_data).map(([key, value]) => (
                    <li
                        key={key}
                        className="border-b border-gray-300 pb-5 grid grid-cols-3 gap-5 font-[500]"
                    >
                        <span>
                            {key
                                .split('_')
                                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(' ')}
                        </span>
                        <span className="font-normal text-[#1E1E1E] col-span-2">
                            {value}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

const SectionTwo = () => (
    <section className="max-lg:mb-10 grid grid-cols-2 max-lg:grid-cols-1 gap-44 max-lg:gap-20 items-center animate-fade-in">
        <div>
            <h3 className="text-4xl font-semibold mb-20">
                Say Bye to long commutes
            </h3>
            <p className="mb-5">
                Set in the vibrant suburbs of Panvel, Golden Willows offers
                connectivity to the upcoming Navi Mumbai International Airport
                with metro and Yotta- Asia's Largest Data Center.
            </p>
            <p>
                This exclusive address offers a school, hospital, mall,
                restaurants, and a bus stand all within a minute's reach.
            </p>
        </div>
        <div>
            <Image
                src="/images/map.png"
                alt="map_map"
                width={500}
                height={500}
                className="w-full h-96 rounded-md animate-slide-in-up"
                quality={100}
                priority
            />
        </div>
    </section>
);

const SectionThree = () => (
    <section className="grid grid-cols-2 max-lg:grid-cols-1 gap-44 max-lg:gap-20 items-center animate-slide-in-up">
        <div>
            <h3 className="text-4xl font-semibold mb-20">
                Silence, Serenity, and Beauty come together here
            </h3>
            <p className="mb-5">
                Surrounded by verdant landscapes and designed with impeccable
                precision, this residence redefines modern luxury.
            </p>
            <p>
                Here, every detail speaks to a life elevated—where the serenity
                of nature meets peak comfort.
            </p>
        </div>
        <div>
            <Image
                src="/images/overview.jpg"
                alt="overview_map"
                width={500}
                height={500}
                className="w-full h-96 rounded-md animate-fade-in"
                quality={100}
                priority
            />
        </div>
    </section>
);

export default OverviewSection;
