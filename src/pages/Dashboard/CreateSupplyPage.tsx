import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const CreateSupplyPage = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = (data : any) => {

        const items = {
            title : data.title,
            category: data.category,
            quantity: data.quantity,
            image : data.image,
            description : data.description
        };
        fetch('http://localhost:5000/supplies', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(items)
        }).then(res => res.json()).then(data => {
            if(data.insertedId)
                {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Supply post created Successfully!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
        })
    }

    
    return (
        <div>
            <div>
                <h1 className="mt-10 font-semibold text-lg">Create Supply Post</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=" mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="">
                            <label htmlFor="title" className="block font-medium mb-1">Title</label>
                            <input 
                                type="text" 
                                className="border p-2 w-full rounded-md"
                                {...register("title", { required: true })}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="category" className="block font-medium mb-1">Category</label>
                            <input 
                                type="text" 
                                className="border p-2 w-full rounded-md"
                                {...register("category", { required: true })}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="quantity" className="block font-medium mb-1">Quantity</label>
                            <input 
                                type="text" 
                                className="border p-2 w-full rounded-md"
                                {...register("quantity", { required: true })}  
                            />
                        </div>
                        <div className="">
                            <label htmlFor="image" className="block font-medium mb-1">Image</label>
                            <input 
                                type="text" 
                                className="border p-2 w-full rounded-md"
                                {...register("image", { required: true })}  
                            />
                        </div>
                        <div className="">
                            <label htmlFor="description" className="block font-medium mb-1">Description</label>
                            <input 
                                type="text" 
                                className="border p-2 w-full rounded-md"
                                {...register("description", { required: true })}
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