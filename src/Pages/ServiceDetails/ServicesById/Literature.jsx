import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LiteratureBookFestival = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-[#752727] text-white'>
            <div className="container lg:mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 mt-10">Literature and Book Festival</h1>

                <p className="mb-4">
                    Welcome to <strong>LitBook Fest</strong>, your ultimate destination for celebrating literature and books. We bring you a diverse range of literary events and activities, including book launches, author introductions, book stalls, customized stall decorations, photography, entertainment events, and fun-filled programs for children.
                </p>

                <img src="https://i.ibb.co/4t2N8tB/book.gif" alt="Festival Image" className='lg:mx-auto  lg:w-[1400px] h-80' />

                <h2 className="text-2xl font-semibold mb-10 mt-20 italic">Our Festival Events:</h2>

                <div className='p-5 lg:p-10'>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">New Writers Introduction:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Author Showcases:</strong> We provide a platform for emerging writers to introduce their work to a wider audience. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 20,000)</span></li>
                                        <li><strong className="font-semibold">Book Launch Events:</strong> Celebrate the release of new books with engaging launch events. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Book Readings:</strong> Host book reading sessions with authors. <span className='font-medium underline'>(Price Range: BDT 8,000 - BDT 15,000)</span></li>
                                        <li><strong className="font-semibold">Literary Workshops:</strong> Conduct workshops on various literary topics. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 18,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex lg:flex-row-reverse'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Childrens Activities:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Storytelling Workshops:</strong> Engage children with interactive storytelling sessions. <span className='font-medium underline'>(Price Range: BDT 8,000 - BDT 15,000)</span></li>
                                        <li><strong className="font-semibold">Art and Craft Workshops:</strong> Foster creativity with hands-on art and craft activities. <span className='font-medium underline'>(Price Range: BDT 7,000 - BDT 12,000)</span></li>
                                        <li><strong className="font-semibold">Book Reading Sessions:</strong> Encourage the love of reading with dedicated book reading events for kids. <span className='font-medium underline'>(Price Range: BDT 6,000 - BDT 10,000)</span></li>
                                        <li><strong className="font-semibold">Childrens Author Meet-and-Greets:</strong> Allow children to meet their favorite authors. <span className='font-medium underline'>(Price Range: BDT 5,000 - BDT 8,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Book Stalls:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Book Vendor Booths:</strong> Showcase a variety of books from different genres and authors. <span className='font-medium underline'>(Price Range: BDT 8,000 - BDT 15,000 per booth)</span></li>
                                        <li><strong className="font-semibold">Rare Book Collection:</strong> Feature a collection of rare and antique books for sale. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 20,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex lg:flex-row-reverse'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Customized Stall Decorations:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Custom Stall Designs:</strong> Create unique and eye-catching stall designs for vendors and authors. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 20,000)</span></li>
                                        <li><strong className="font-semibold">Themed Stalls:</strong> Decorate stalls according to different book genres or themes. <span className='font-medium underline'>(Price Range: BDT 8,000 - BDT 15,000 per stall)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Photography Services:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Event Photography:</strong> Capture memorable moments of the festival. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 25,000)</span></li>
                                        <li><strong className="font-semibold">Author Photo Sessions:</strong> Arrange professional photo sessions for authors and attendees. <span className='font-medium underline'>(Price Range: BDT 8,000 - BDT 15,000)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-10" data-aos="zoom-in">
                        <div className='lg:flex lg:flex-row-reverse'>
                            <div className="card lg:w-[70%] text-black bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Entertainment Events:</h2>
                                    <ul className="list-disc pl-6">
                                        <li><strong className="font-semibold">Author Talks and Panels:</strong> Engaging discussions with renowned authors. <span className='font-medium underline'>(Price Range: BDT 10,000 - BDT 20,000)</span></li>
                                        <li><strong className="font-semibold">Live Music Performances:</strong> Enhance the festival atmosphere with live music. <span className='font-medium underline'>(Price Range: BDT 15,000 - BDT 30,000)</span></li>
                                        <li><strong className="font-semibold">Theater and Drama Performances:</strong> Showcase literary-themed plays and dramas. <span className='font-medium underline'>(Price Range: BDT 12,000 - BDT 22,000)</span></li>
                                        <li><strong className="font-semibold">Open Mic Sessions:</strong> Allow attendees to share their literary creations.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add more festival events as needed */}
                </div>
            </div>
        </div>
    );
};

export default LiteratureBookFestival;
