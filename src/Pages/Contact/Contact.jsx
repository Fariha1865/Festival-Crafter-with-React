import plan from "../../assets/plan.gif"
const Contact = () => {
    return (
        <div className="bg-[#752727] flex gap-20">
            <div className="card card-side bg-base-100 shadow-xl w-1/2">
                <figure><img src={plan} alt="Movie"/></figure>
                <form className="bg-[#ba3d3d] p-10">
                    <h1 className="text-gray-200 italic font-bold text-lg">Get in touch, we will reach you out</h1>
                    <div className="mb-4 mt-3">
                        <label htmlFor="name" className="block text-gray-100 font-medium">Name</label>
                        <input type="text" id="name" name="name" className="form-input mt-1 block l p-3 w-80 rounded-md" placeholder="John Doe" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-100 font-medium">Contact Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" className="form-input mt-1 block p-3 w-80 rounded-md" placeholder="(123) 456-7890" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-100 font-medium">Email Address</label>
                        <input type="email" id="email" name="email" className="form-input mt-1 block p-3 w-80 rounded-md" placeholder="johndoe@example.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-100 font-medium">Fill in your needs</label>
                        <textarea id="comment" name="comment" className="form-textarea mt-1 block p-3 w-80 rounded-md" rows="4" placeholder="Write your thoughts here"></textarea>
                    </div>
                    <button type="submit" className="bg-[#752727] hover:bg-[#752727] text-white font-semibold py-2 px-4 rounded-full">Submit</button>
                </form>
            </div>


           <div className="text-white ml-32 mt-20">
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

