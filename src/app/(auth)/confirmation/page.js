import Image from "next/image";
import confirmation from "/public/assets/confirmation_image.png"

const Confirmation = () => {
    return <>
        <section className="scroll-smooth pt-[6.5rem] sm:pt-32 pb-16 flex w-full min-h-screen flex-col items-center">
            <section className="w-auto h-auto flex flex-col justify-center items-center mt-4 space-y-8">
                <section className="mx-8 px-8 sm:mx-auto w-full">
                    <h2 className="text-justify sm:text-center text-[#344054] text-2xl font-normal leading-[1.65rem] tracking-tight">
                        Congratulations! Your account has been successfully verified. Start exploring now by clicking below and diving into your dashboard.
                    </h2>
                </section>

                <section>
                    <Image src={confirmation} alt="Confirmation Image" width={515} height={456} priority className="w-[17rem] sm:w-[18rem] md:w-[25.524rem] lg:w-[32.1875rem]" />
                </section>

                <section className="w-full sm:w-[27.4375rem] h-10 px-8">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#FF7F50] px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-[#fc6832] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fc6832]"
                  >
                    Proceed to dashboard
                  </button>
                </section>
            </section>
        </section>
    </>
}

export default Confirmation;