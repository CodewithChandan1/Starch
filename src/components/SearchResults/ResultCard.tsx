import { ExternalLink } from 'lucide-react';

interface ResultCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export function ResultCard({ title, description, url, imageUrl }: ResultCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-24 h-24 object-cover rounded-lg"
          />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
          >
            {url.replace(/^https?:\/\//, '')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}