import {assets} from "../assets/assets.js";
import {useState} from "react";

function Frequently() {

    const faqs = [
        {
            question: "How is Precedo different than other similar platforms?",
            answer: "This is a sample answer."
        },
        {
            question: "How is profit sharing beneficial over copy-trading?",
            answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
        },
        {
            question: "How much do Precedo services cost?",
            answer: "Pricing depends on your plan."
        },
        {
            question: "How can I deposit FIAT money on the platform (EUR or USD)?",
            answer: "You can deposit via bank transfer or card."
        },
        {
            question: "How much can I start with?",
            answer: "You can start with a minimal amount."
        }
    ];

    const [openIndex, setOpenIndex] = useState(1);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className='py-10'>
                <div className='max-w-7xl mx-auto px-5'>
                    <div className='flex items-center justify-between flex-col sm:flex-row gap-5'>
                        <div className='lg:w-1/4'>
                            <h1 className='font-semibold text-xl lg:text-4xl text-white'>Frequently Asked <br/> Questions</h1>
                            <p className='text-gray-500 font-normal text-sm lg:text-lg mt-2 line-clamp-2'>If you haven't found the answer
                                you're <br/> looking for, we're here to help!</p>
                            <button type='submit'
                                    className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-5 py-2 rounded-full cursor-pointer mt-8">Contact
                                Us
                            </button>

                            <div className='mt-10 flex items-center justify-center'>
                                <img src={assets.image_18} alt=""/>
                            </div>
                        </div>
                        <div className='lg:w-3/4'>
                            <div className=" space-y-4 p-4">
                                {faqs.map((faq, index) => (
                                    <div key={index}
                                         className={`rounded-xl border transition-all duration-300 ${
                                             openIndex === index
                                                 ? "border-pink-500 bg-gradient-to-r from-[#0f172a] to-[#1e293b]"
                                                 : "border-gray-700 bg-[#0f172a]"
                                         }`}>
                                        <button onClick={() => toggle(index)}
                                                className="w-full flex justify-between items-center p-4 text-left">
                                    <span className={`text-lg font-medium ${openIndex === index
                                        ? "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent"
                                        : "text-gray-200"
                                    }`}> {faq.question}</span>
                                            <span className="text-gray-400">{openIndex === index ? "↑" : "↓"}</span>
                                        </button>

                                        <div className={`overflow-hidden transition-all duration-300 ${
                                            openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"
                                        }`}>
                                            <p className="text-gray-400 text-sm">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Frequently;
