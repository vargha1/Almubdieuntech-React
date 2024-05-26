import "/src/index.css"

export default function ConsultationForm() {
    return (
        <div className="flex flex-col md:w-[33%] w-[45%] bg-[#ffffff] p-10 shadow-lg rounded-2xl">
            <h2 className="font-bold">
                Book a Free <span className="text-[#efcb19]">Consultation</span>
            </h2>
            <form action="" className="flex flex-col ">
                <input
                    type="text"
                    className="py-3 outline-none border-b-2 border-[rgba(0,0,0,.5)] before:bg-[#efcb19] before:h-[2px] before:w-[100px] before:block before:absolute"
                    name="fullName"
                    placeholder="Full Name"
                    id="fullname"
                />
                <input
                    type="email"
                    className="my-4 py-3 outline-none border-b-2 border-[rgba(0,0,0,.5)] before:bg-[#efcb19] before:h-[2px] before:w-[100px] before:block before:absolute"
                    name="email"
                    placeholder="Email"
                    id="email"
                />
                <input
                    type="tel"
                    className="py-3 outline-none border-b-2 border-[rgba(0,0,0,.5)] before:bg-[#efcb19] before:h-[2px] before:w-[100px] before:block before:absolute"
                    name="telephoneNumber"
                    placeholder="number"
                    id="TelephoneNumber"
                />
                <input
                    type="text"
                    className="mt-4 py-3 outline-none border-b-2 border-[rgba(0,0,0,.5)] before:bg-[#efcb19] before:h-[2px] before:w-[100px] before:block before:absolute"
                    name="needs"
                    placeholder="Describe Your Projects Need."
                    id="needs"
                />
            </form>
        </div>
    );
}