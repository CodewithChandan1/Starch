import { Search, BarChart2, Zap } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Deep & Comprehensive",
    description: "In-depth analysis of your website's SEO performance with actionable insights."
  },
  {
    icon: BarChart2,
    title: "SEO Growth Strategy",
    description: "Custom-tailored strategies to improve your search engine rankings effectively."
  },
  {
    icon: Zap,
    title: "Immediate SEO",
    description: "Quick wins and long-term strategies for sustainable organic growth."
  }
];

export function Features() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Starch Is Your Best Choice<br />
          To Increase Your Website
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}