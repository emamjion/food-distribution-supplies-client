const Gallery = () => {
    const images = [
        'https://i.ibb.co/Nmb5ghh/gallery-1.png',
        'https://i.ibb.co/P9nLCwq/gallery-2.png',
        // 'https://i.ibb.co/w69t5LB/gallery-3.png',
        'https://i.ibb.co/tsSZYMy/gallery-4.png',
        'https://i.ibb.co/XSm7FPS/gallery-5.png'
    ];
    
    
    return (
        <div className="my-16 px-2 md:px-0">
            <h1 className="text-3xl font-semibold mb-4 text-center">Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {
                    images.map((image, index) => (
                        <div key={index}>
                            <img src={image} className="rounded-md" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Gallery;