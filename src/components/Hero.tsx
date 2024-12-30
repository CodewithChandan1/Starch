import { Button } from './Button';
import { Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="px-8 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Make Your{' '}
              <span className="text-blue-600">SEO Campaign</span>{' '}
              Successful
            </h1>
            <p className="text-gray-600 text-lg">
              Get insights, traffic, and high search rankings with our proven SEO strategies. Let's help your business reach its full potential online.
            </p>
            <div className="flex items-center gap-4">
              <Button>Try it Free</Button>
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://source.unsplash.com/random/100x100?face&${i}`}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
              alt="SEO Campaign"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}