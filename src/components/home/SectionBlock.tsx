import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  bgColor
}: SectionBlockProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Icon */}
          <div className={`${bgColor} rounded-full p-3 flex-shrink-0`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={href}
          className={`${title === 'Question de DSCG' ? 'bg-blue-600 hover:bg-blue-700' : `${color.replace('text-', 'bg-')} hover:opacity-90`} text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex-shrink-0 ml-4`}
        >
          Commencer
        </Link>
      </div>
    </div>
  );
}