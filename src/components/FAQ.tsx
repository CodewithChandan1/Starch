export function FAQ() {
  const faqs = [
    {
      question: "What is SEO?",
      answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility in search engine results pages naturally."
    },
    {
      question: "Why is SEO important for my business?",
      answer: "SEO helps increase your online visibility, drives targeted traffic, and builds credibility with your audience."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy, typically taking 3-6 months to see significant results, depending on various factors."
    },
    {
      question: "How much does SEO cost?",
      answer: "Our SEO packages are customized based on your needs and goals, starting from competitive rates for small businesses."
    }
  ];

  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">FAQs</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">{faq.question}</span>
                <span className="transition group-open:rotate-180">↓</span>
              </summary>
              <p className="mt-4 px-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}