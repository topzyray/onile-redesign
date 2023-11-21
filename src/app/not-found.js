import Link from 'next/link'

const NotFound = () => {
    return <>
      <section className="pt-24 sm:pt-36  flex w-full min-h-screen flex-col items-center justify-between">
        <section className="w-full flex flex-col sm:flex-row justify-between">
            <section>
                <h1>Page Not Found</h1> 
                <p>Please go back <Link href='/' className='text-orange-400 hover:underline'><span className=''>home</span></Link></p>
            </section>
        </section>
      </section>
    </>
  }
  
  export default NotFound