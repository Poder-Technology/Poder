import React, { useState } from 'react'


const faqData = [
    { question: "What is Poder?", answer: "Poder is a platform for ... (add your answer here)" },
    { question: "What do I stand to benefit from joining this platform?", answer: "You can benefit by ... (add your answer here)" },
    { question: "Is Poder a trusted platform, with my card details?", answer: "Yes, Poder ensures ... (add your answer here)" },
    { question: "How can fuel station supervisors get their stations featured on the platform?", answer: "Station supervisors can ... (add your answer here)" },
    { question: "Is customer support available if I need help with the platform?", answer: "Customer support is available ... (add your answer here)" },
];


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="border-b border-blue-400">
          <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left flex items-center justify-between py-4 text-white font-medium"
          >
              <span>{question}</span>
              <span className={`transform transition-transform ${isOpen ? 'rotate-45' : ''} text-2xl text-blue-400`}>
                  +
              </span>
          </button>
          {isOpen && <p className="text-blue-100 pb-4">{answer}</p>}
      </div>
  );
}


const FAQSec = () => {
  return (
    <div>
        <section className="bg-indigo-900 text-white flex flex-col-reverse md:flex-row items-center gap-4 px-8 py-16">
            {/* FAQ Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold">Got any Questions?</h2>
                <p className="text-lg text-blue-200">
                    Let us help, we're here to answer all your questions about Poder
                </p>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FAQItem 
                            key={index} 
                            question={item.question} 
                            answer={item.answer} 
                        />
                    ))}
                </div>
            </div>

            {/* Placeholder for Right Image */}
            <div className="md:block md:w-1/2">
                <img src={`${process.env.PUBLIC_URL}/img/Frame 1984077754.png`} alt="People discussing" className="w-full h-auto" />
                
            </div>
        </section>
    </div>
  )
}

export default FAQSec