import Image from 'next/image'

import serv_PropList from '/public/assets/service_property.png'
import serv_Consult from '/public/assets/service_consultation.png'
import serv_Mortgage from '/public/assets/service_mortgage.png'
import serv_PropMgt from '/public/assets/service_property_mgt.png'
import serv_Invest from '/public/assets/service_investment.png'


const Service = ({bgColor, imageUrl, imageDetails, title, paraOne, paraTwo}) => {
  return <>
    <section className={`bg-[${bgColor}] text-[#344054] flex flex-col lg:flex-row p-4 sm:p-8 rounded-xl gap-4 xl:gap-12`}>
      <section className='flex-1 w-[20rem] md:w-[30rem] xl:w-[31.25rem] h-[14rem] md:h-[16.125rem]'>
        <Image
          src={imageUrl}
          alt={imageDetails}
          className='w-full h-[14rem] md:h-[16.125rem] object-cover object-center rounded-lg'
        />
      </section>
      <section className="flex-1 w-[20rem] md:w-[30rem] xl:w-[31.25rem] h-[14rem] md:h-[16.125rem]">
        <section className='w-full flex flex-col text-justify gap-4'>
          <h4 className='text-[1.25rem] lg:text-[1.5rem] font-semibold text-center lg:text-left'>{title}</h4>
          <p className='text-justify text-[0.9rem]'>{paraOne}</p>
          <p className='text-justify text-[0.9rem]'>{paraTwo}</p>
        </section>
      </section>
    </section>
  </>
}


const Services = () => {
    return <>
      <section className="scroll-smooth pt-[6.5rem] sm:pt-32 pb-16 flex w-full min-h-screen flex-col items-center">
        <section className='text-center text-[#344054]'>
          <h1 className='text-[1.5rem] lg:text-[2rem] font-bold'>Services</h1>
        </section>
        <section className="pt-4 flex flex-col justify-center gap-6">
            <Service bgColor="#DDEFF2" imageUrl={serv_PropList} imageDetails="Propety Listing" title="Property Listing" paraOne="Step into a world of possibilities as you explore a wide range of meticulously curated residential and commercial properties, each uniquely designed to meet your specific needs and aspirations. Our property listings go beyond the ordinary, offering an immersive experience with detailed information, stunning high-resolution images, and captivating virtual tours." paraTwo="Our listings are more than just a collection of properties; they're a gateway to your future. From charming family homes to sophisticated office spaces, we've carefully handpicked options that align with your vision and desires." />
            <Service bgColor="#ffa50033" imageUrl={serv_Consult} imageDetails="Real Estate Consultation" title="Real Estate Consultation" paraOne="At Onile, we take immense pride in our team of seasoned real estate professionals. They are here to serve as your trusted guides on every step of your property journey. Whether you are a seasoned buyer, a first-time homebuyer, a property seller, or an astute investor, our dedicated team is at your service." paraTwo="Our experts understand the ever-evolving real estate landscape and are well-versed in market trends, legalities, and the intricacies of property transactions." />
            <Service bgColor="#00800033" imageUrl={serv_Mortgage} imageDetails="Mortgage Assistance" title="Mortgage Assistance" paraOne="Understanding the nuances of securing the right mortgage can often be a complex and overwhelming task. At Onile, we are committed to simplifying this intricate process for you. Our goal is to provide you with expert mortgage assistance, ensuring that you navigate through the financial aspects of property transactions with confidence and clarity." paraTwo="Our mortgage assistance services are designed to simplify your financial journey, making it easier for you to achieve your real estate goals." />
            <Service bgColor="#8A2BE233" imageUrl={serv_PropMgt} imageDetails="Property Management" title="Property Management" paraOne="At Onile, we understand that property ownership comes with its own set of responsibilities and challenges. That's where our comprehensive property management services step in. Our goal is to make property ownership effortless for you, ensuring that your investments are not only well-maintained but also a source of consistent revenue." paraTwo="When you choose our property management services, you're not just hiring a property manager; you're gaining a trusted partner in your property ownership journey." />
            <Service bgColor="#FF000033" imageUrl={serv_Invest} imageDetails="Investment Opportunities" title="Investment Opportunities" paraOne="At Onile, we recognize that real estate investments are not one-size-fits-all. We're committed to tailoring investment opportunities that align with your unique financial goals and aspirations. Whether you're a seasoned investor or a newcomer to real estate, our solutions are designed to empower you." paraTwo="Our commitment to you extends beyond the initial investment phase. We are dedicated to providing continuous support and guidance throughout the entire investment lifecycle." />
        </section>
      </section>
    </>
  }
  
  export default Services