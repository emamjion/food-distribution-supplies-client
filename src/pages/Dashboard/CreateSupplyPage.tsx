const CreateSupplyPage = () => {
    return (
        <div>
            <div>
                <h1 className="mt-10 font-semibold text-lg">Create Supply Post</h1>
            </div>
            <div>
                <form className=" mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="">
                            <label htmlFor="title" className="block font-medium mb-1">Title</label>
                            <input 
                                type="text" 
                                name="title"
                                className="border p-2 w-full rounded-md"  
                            />
                        </div>
                        <div className="">
                            <label htmlFor="category" className="block font-medium mb-1">Category</label>
                            <input 
                                type="text" 
                                name="category"
                                className="border p-2 w-full rounded-md"  
                            />
                        </div>
                        <div className="">
                            <label htmlFor="quantity" className="block font-medium mb-1">Quantity</label>
                            <input 
                                type="text" 
                                name="quantity"
                                className="border p-2 w-full rounded-md"  
                            />
                        </div>
                        <div className="">
                            <label htmlFor="image" className="block font-medium mb-1">Image</label>
                            <input 
                                type="text" 
                                name="image"
                                className="border p-2 w-full rounded-md"  
                            />
                        </div>
                        <div className="">
                            <label htmlFor="description" className="block font-medium mb-1">Description</label>
                            <input 
                                type="text" 
                                name="description"
                                className="border p-2 w-full rounded-md"  
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <input 
                            type="submit" 
                            value="Submit"
                            className='w-full px-6 py-2.5 text-white bg-[#212121] font-medium rounded'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateSupplyPage;