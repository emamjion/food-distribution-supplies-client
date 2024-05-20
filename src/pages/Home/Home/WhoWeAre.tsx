import aboutImg from '../../../assets/images/about.png';
const WhoWeAre = () => {
    return (
        <div className="my-16 px-4 md:px-0">
            <div className='md:flex items-center gap-10'>
                <div>
                    <h1 className="text-3xl font-semibold mb-6 text-center">Who we are</h1>
                    <p className='leading-7 text-justify mb-6'>
                        Welcome to FoodFlow! We are a dedicated team committed to managing and distributing food supplies to those in need. Our mission is to combat hunger and ensure food security through efficient supply chain management and community outreach. With a focus on transparency and trust, we strive to make a tangible impact on our community. Join us in our efforts to provide nutritious food to underserved populations and support the well-being of our neighbors. Together, we can create a hunger-free future.
                    </p>
                    <div className='text-center md:text-left'>
                        <button className='px-4 py-2.5 text-white bg-[#212121] font-medium rounded-lg'>About more</button>
                    </div>
                </div>
                <img src={aboutImg} className='rounded-md mt-6 md:mt-0' />
            </div>
        </div>
    );
};

export default WhoWeAre;