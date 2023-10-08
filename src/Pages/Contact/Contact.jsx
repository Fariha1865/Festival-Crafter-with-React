import plan from "../../assets/plan.gif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Register/toast.css'

const Contact = () => {

    const successToast = (success) => {

        toast.success(success, {
            className: 'custom-toast',
            autoClose: 4000,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        successToast("Thanks !!...We'll reach to you soon");

    
        e.target.elements.name.value = "";
        e.target.elements.phoneNumber.value = "";
        e.target.elements.email.value = "";
        e.target.elements.comment.value = "";

    }

    return (
        <div className="bg-[#752727] flex flex-col lg:flex-row ">
             <ToastContainer className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
            <div className="card lg:card-side bg-base-100 shadow-xl lg:w-1/2">
                <figure><img src={plan} alt="Movie"/></figure>
                <form className="bg-[#ba3d3d] p-10" onSubmit={handleSubmit}>
                    <h1 className="text-gray-200 italic font-bold text-lg">Get in touch, we will reach you out</h1>
                    <div className="mb-4 mt-3">
                        <label  className="block text-gray-100 font-medium">Name</label>
                        <input type="text"  name="name" className="form-input mt-1 block l p-3 w-80 rounded-md" placeholder="John Doe" />
                    </div>
                    <div className="mb-4">
                        <label  className="block text-gray-100 font-medium">Contact Number</label>
                        <input type="tel"  name="phoneNumber" className="form-input mt-1 block p-3 w-80 rounded-md" placeholder="(123) 456-7890" />
                    </div>
                    <div className="mb-4">
                        <label  className="block text-gray-100 font-medium">Email Address</label>
                        <input type="email" name="email" className="form-input mt-1 block p-3 w-80 rounded-md" placeholder="johndoe@example.com" />
                    </div>
                    <div className="mb-4">
                        <label  className="block text-gray-100 font-medium">Fill in your needs</label>
                        <textarea  name="comment" className="form-textarea mt-1 block p-3 w-80 rounded-md" rows="4" placeholder="Write your thoughts here"></textarea>
                    </div>
                    <button type="submit" className="bg-[#752727] hover:bg-[#752727] text-white font-semibold py-2 px-4 rounded-full">Submit</button>
                </form>
            </div>


           <div className="text-white ml-10 lg:ml-32 lg:mt-20 mb-5">
               <h1 className="text-xl font-bold italic mb-10">Contact us On:</h1>
               <ul className="list-disc">
                <li><strong>Phone:</strong>  01732091745</li>
                <li><strong>Address:</strong> 99/B, Road-2, Mohakhali DOHS, Dhaka, Bangladesh</li>
                <li><strong>Email Address:</strong> FestivalCrafters@gmail.com</li>
                <li><strong>Open Hours:</strong> Everyday: 10 AM to 9 PM</li>
               </ul>
           </div>

            </div>
      
    );
};

export default Contact;

