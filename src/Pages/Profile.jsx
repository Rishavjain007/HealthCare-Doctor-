import React, { useContext } from 'react'
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { GrLocation, GrLinkedinOption } from "react-icons/gr";
import { LuClock3, LuFacebook } from "react-icons/lu";
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FiGithub } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import ThemeContext from '../Components/ThemeContext'

const Profile = () => {
    const { isDarkMode, colors } = useContext(ThemeContext);

    const doctors = [
        {
            name: "Jessica McFarlane",
            degree: "M.B.B.S.",
            specialty: "Dentist",
            rating: 5,
            address: "63, PG Shoutuke, UK",
            time: "Mon: 2:00PM - 6:00PM",
            price: 75,
            image: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
        },
        {
            name: "Elsie Sherman",
            degree: "M.B.B.S.",
            specialty: "Gastrologist",
            rating: 5,
            address: "63, PG Shoutuke, UK",
            time: "Mon: 2:00PM - 6:00PM",
            price: 75,
            image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?semt=ais_incoming&w=740&q=80"
        },
        {
            name: "Bertha Magers",
            degree: "M.B.B.S.",
            specialty: "Urologist",
            rating: 5,
            address: "63, PG Shoutuke, UK",
            time: "Mon: 2:00PM - 6:00PM",
            price: 75,
            image: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg"
        },
        {
            name: "Louis Batey",
            degree: "M.B.B.S.",
            specialty: "Neurologist",
            rating: 5,
            address: "63, PG Shoutuke, UK",
            time: "Mon: 2:00PM - 6:00PM",
            price: 75,
            image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?semt=ais_incoming&w=740&q=80"
        }
    ];

    return (
        <>

            <section className='flex flex-col px-5 gap-4' style={{ backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg, color: isDarkMode ? colors.darkText : colors.lightText }}>
                <div className="flex flex-col md:flex-row items-center w-full border rounded-md">
                    <img
                        src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?semt=ais_incoming&w=740&q=80"
                        alt="Doctor"
                        className="w-full md:w-[20vw] h-65 md:h-auto object-cover rounded-t-md md:rounded-t-none md:rounded-l-md"
                    />
                    <div className="p-5 w-full">
                        <p className="text-sm md:text-base text-gray-400 font-semibold">25th December, 2020 - 5:00PM</p>
                        <h3 className="text-2xl md:text-2xl lg:text-3xl mt-4 font-semibold">Good Morning!</h3>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-600 mt-2 font-semibold">Dr. Christopher Burrell</h1>
                        <p className="text-sm md:text-base text-gray-400 mt-4 md:mt-7 font-semibold">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        <p className="text-md md:text-base mt-4 font-semibold">You have <span className="text-blue-600">18 patients</span> remaining today!</p>
                    </div>
                </div>


                <div className="p-5 border rounded-md">
                    <div
                        className="flex flex-wrap md:flex-nowrap items-center rounded-md overflow-hidden"
                        style={{
                            backgroundColor: isDarkMode ? "#182c42ff" : "#E5E7EB",
                            color: isDarkMode ? colors.darkText : colors.lightText,
                        }}
                    >
                        <div className="flex-1 text-center text-base sm:text-lg md:text-xl px-4 py-3 font-semibold hover:bg-blue-600 hover:text-white rounded-l-md">
                            Overview
                        </div>
                        <div className="flex-1 text-center text-base sm:text-lg md:text-xl px-4 py-3 font-semibold hover:bg-blue-600 hover:text-white">
                            Experience
                        </div>
                        <div className="flex-1 text-center text-base sm:text-lg md:text-xl px-4 py-3 font-semibold hover:bg-blue-600 hover:text-white">
                            Reviews
                        </div>
                        <div className="flex-1 text-center text-base sm:text-lg md:text-xl px-4 py-3 font-semibold hover:bg-blue-600 hover:text-white">
                            Location
                        </div>
                        <div className="flex-1 text-center text-base sm:text-lg md:text-xl px-4 py-3 font-semibold hover:bg-blue-600 hover:text-white rounded-r-md">
                            Time Table
                        </div>
                    </div>

                    <div className="px-2">
                        <h4 className="text-lg sm:text-xl mt-5 font-semibold">Dr. Christopher Burrell</h4>
                        <p className="text-base sm:text-lg text-blue-600 mt-1.5 font-medium">
                            Gynecologist, Ph.D
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-4 font-medium">
                            A gynecologist is a surgeon who specializes in the female reproductive system,
                            which includes the cervix, fallopian tubes, ovaries, uterus, vagina and vulva.
                            Menstrual problems, contraception, sexuality, menopause and infertility issues
                            are diagnosed and treated by a gynecologist; most gynecologists also provide
                            prenatal care, and some provide primary care.
                        </p>

                        <h4 className="text-lg sm:text-xl mt-3 font-medium">Specialties:</h4>
                        <div className="mt-5 space-y-2">
                            <p className="flex items-center text-base sm:text-lg md:text-xl">
                                <FaArrowRight className="text-blue-600 mr-2" /> Women's health services
                            </p>
                            <p className="flex items-center text-base sm:text-lg md:text-xl">
                                <FaArrowRight className="text-blue-600 mr-2" /> Pregnancy care
                            </p>
                            <p className="flex items-center text-base sm:text-lg md:text-xl">
                                <FaArrowRight className="text-blue-600 mr-2" /> Surgical procedures
                            </p>
                            <p className="flex items-center text-base sm:text-lg md:text-xl">
                                <FaArrowRight className="text-blue-600 mr-2" /> Specialty care
                            </p>
                            <p className="flex items-center text-base sm:text-lg md:text-xl">
                                <FaArrowRight className="text-blue-600 mr-2" /> Conclusion
                            </p>
                        </div>

                        <h4 className="text-lg sm:text-xl mt-5 font-medium">My Team:</h4>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8 justify-items-center">
                        {doctors.map((doc, index) => (
                            <div
                                key={index}
                                className="relative w-full max-w-xs shadow-md hover:shadow-lg transition rounded-md"
                                style={{ border: isDarkMode ? "1px solid" : "none" }}
                            >

                                {/* Favourite */}
                                <button className="absolute top-2 right-2 p-3 bg-red-100 text-red-500 rounded-full">
                                    <FaRegHeart />
                                </button>

                                {/* Doctor Image */}
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-80 object-cover rounded-t-sm"
                                />

                                {/* Doctor Info */}
                                <div className="text-start px-5 pb-5 mt-4">
                                    <h3 className="text-lg font-semibold">{doc.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        {doc.degree}, {doc.specialty}
                                    </p>

                                    {/* Rating */}
                                    <div className="flex justify-between items-center gap-1 mt-1 text-lg text-yellow-500">
                                        {"★".repeat(doc.rating)}{" "}
                                        <span className="text-gray-400 text-sm font-semibold ml-1">5 Star</span>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                                        <GrLocation className='text-md text-blue-600' /> <span>{doc.address}</span>
                                    </div>

                                    {/* Time */}
                                    <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                                        <LuClock3 className='text-md text-blue-600' /> <span>{doc.time}</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                                        <AiOutlineDollarCircle className='text-md text-blue-600' /> <span>{doc.price} USD / Visit</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-3 mt-4">
                                        <button className="text-xl text-blue-600 p-3 rounded-full shadow-md shadow-blue-600/50 hover:shadow-lg transition">
                                            <LuFacebook />
                                        </button>
                                        <button className="text-xl text-blue-600 p-3 rounded-full shadow-md shadow-blue-600/50 hover:shadow-lg transition">
                                            <GrLinkedinOption />
                                        </button>
                                        <button className="text-xl text-blue-600 p-3 rounded-full shadow-md shadow-blue-600/50 hover:shadow-lg transition">
                                            <FiGithub />
                                        </button>
                                        <button className="text-xl text-blue-600 p-3 rounded-full shadow-md shadow-blue-600/50 hover:shadow-lg transition">
                                            <BsTwitterX />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </section>

        </>
    )
}

export default Profile