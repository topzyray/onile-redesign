import Footer from "@/component/Footer"

const AboutUs = () => {
    return <>
      <section className="text-[#344054] pt-[6.5rem] sm:pt-32 pb-16  flex w-full min-h-screen flex-col items-center justify-between">

        <section className="space-y-6 px-8 sm:px-16 lg:px-[8.44rem]">
          <section className='text-center'>
            <h1 className='text-[1.5rem] md:text-[2rem] font-bold'>About Us</h1>
          </section>
        
          <section className="w-full flex flex-col md:flex-row items-center gap-6 lg:gap-7 xl:gap-10 xxl:gap-12 ">
            <section
              className="flex flex-col sm:flex-row pt-[19rem] pl-[3rem] lg:pt-[19rem] lg:pl-[8.25rem] w-full md:w-1/2 rounded-xl"
              style={{
                backgroundImage: `url('/assets/about.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
              }}
            >
            </section>
            <section className={`w-full md:w-1/2 shrink-0 `}>
              <p className='text-justify md:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem] xxl:text-[1.5rem]'>At Onile, our mission is deeply rooted in our unwavering commitment to transforming the real estate experience for our clients. We exist to be the guiding light in your real estate journey, working tirelessly to provide you with a level of service and expertise that goes beyond the transaction. Our mission is to redefine how real estate is perceived and navigated, offering a platform that empowers you with knowledge, choices, and confidence. <br/> <br /> We are dedicated to setting new industry standards, consistently exceeding expectations, and prioritizing your needs and aspirations above all else. We endeavor to create an environment where the dream of finding the perfect home or achieving success in property investment becomes a vivid reality.</p>
            </section>
          </section>
          
          {/* Our roots */}
          <section className="w-full flex flex-col justify-center gap-4 items-center">
            <h3 className='text-base sm:text-2xl font-bold sm:font-semibold'>Our Roots</h3>
            <p className='text-justify md:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem] xxl:text-[1.5rem]'>Founded by group of young and vibrant techies in 2023, Onile emerged with a clear vision - to redefine the real estate experience for buyers, sellers, and investors alike. Our journey began with a handful of passionate real estate professionals who shared a common belief - that the process of buying, selling, or investing in real estate should be a seamless and rewarding journey.</p>
          </section>
            
          {/* Our mission */}
          <section className="w-full flex flex-col justify-center gap-4 items-center">
            <h3 className='text-base sm:text-2xl font-bold sm:font-semibold'>Our Mission</h3>
            <p className='text-justify md:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem] xxl:text-[1.5rem]'>Our mission is simple: to make your real estate dreams come true. We understand that a home is more than just a structure; it's a place where life unfolds. That's why we're committed to providing you with the best real estate solutions tailored to your unique needs. Whether you're searching for your forever home, selling a property, or seeking an investment opportunity, we're here to guide you every step of the way.</p>
          </section>

          {/* What sets us apart */}
          <section className="w-full flex flex-col justify-center gap-4 items-center">
            <h3 className='text-base sm:text-2xl font-bold sm:font-semibold'>What Sets Us Apart</h3>
            <ul className="list-disc pl-6">
              <li className='text-justify md:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem] xxl:text-[1.5rem]'>Experience: Onile boasts a team of experienced professionals with in-depth knowledge of the local real estate landscape. With years of experience, we offer unparalleled insights into the market.</li>
              <li className='text-justify md:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem] xxl:text-[1.5rem]'>Customer-Centric Approach: Your satisfaction is at the core of our philosophy. We put your needs first, providing personalized services that cater to your preferences, desires, and lifestyle.</li>
              <li className='text-justify md:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem] xxl:text-[1.5rem]'>Innovation and Technology: We're constantly at the forefront of real estate technology and market trends. Our use of the latest tools and data analytics empowers us to deliver more efficient, effective, and enjoyable property transactions.</li>
            </ul>
          </section>

          {/* Our vision */}
          <section className="w-full flex flex-col justify-center gap-4 items-center">
            <h3 className='text-base sm:text-2xl font-bold sm:font-semibold'>Our Vision</h3>
            <p className='text-justify md:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem] xxl:text-[1.5rem]'>Our vision is to transform real estate from a transaction into a celebration of dreams realized. We envision a community where every property journey is an extraordinary experience. It's about more than just buying or selling; it's about creating lasting memories and shaping the future.</p>
          </section>

          {/* Our vision */}
          <section className="w-full flex flex-col justify-center gap-4 items-center">
            <h3 className='text-base sm:text-2xl font-bold sm:font-semibold'>Meet Our Team</h3>
            <p className='text-justify md:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem] xxl:text-[1.5rem]'>
              Behind Onile is a diverse team of real estate professionals, each bringing their unique expertise to the table. Our agents, marketing experts, and technology enthusiasts collaborate to simplify the real estate process and make your experience as smooth as possible. 
              <br /><br />
              So, whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, join us on a journey to make the most of your real estate goals. Discover homes, invest wisely, and enjoy an experience that exceeds your expectations. We're here to guide you every step of the way. Contact us today to embark on your real estate adventure with Onile. Your dream property is just a click or call away.
            </p>
          </section>

        </section>
      </section>

      <Footer />
    </>
  }
  
  export default AboutUs