

const PropertyDetails = ({ params }) => {
    return <>
        <section className="pt-24 sm:pt-36  flex w-full min-h-screen flex-col items-center justify-between">
            <section className="w-full flex flex-col sm:flex-row justify-between">
                <h1>PropertyDetails {params.propertyId}</h1>
            </section>
        </section>
    </>
}

export default PropertyDetails