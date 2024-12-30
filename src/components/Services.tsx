import { FileText, DollarSign } from 'lucide-react';

export function Services() {
  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Grow your business<br />
          with the SEO services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <FileText className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Content Writing Services</h3>
            <p className="text-gray-600">
              High-quality, SEO-optimized content that engages your audience and ranks well in search results.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <DollarSign className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Media Buying</h3>
            <p className="text-gray-600">
              Strategic paid media campaigns to complement your organic SEO efforts and maximize ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}