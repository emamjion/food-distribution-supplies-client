import './../../../styles/Banner.css';
const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='flex items-center justify-center h-full w-full'>
                <div className='text-center text-white p-4 md:p-0'>
                    <h1 className='text-2xl md:text-5xl font-semibold mb-6 md:w-[900px] mx-auto'>Seamless Operations for Food Distribution Success</h1>
                    <p className='md:w-[600px] mx-auto text-center text-lg'>
                        Experience seamless operations from farm to table. With our comprehensive 
                        management system, gain full control over your food distribution process 
                        and achieve unmatched efficiency
                    </p>
                    <div className='mt-12 flex items-center justify-center gap-5'>
                        <button className='px-6 py-2.5 bg-white text-black font-medium rounded-lg'>Donate</button>
                        <button className='px-6 py-2.5 border border-white font-medium rounded-lg'>About More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;