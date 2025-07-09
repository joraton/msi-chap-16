import { Target, Rocket, BarChart3, Settings, HelpCircle, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Découvrez les concepts fondamentaux des SLA et leur importance',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I - L\'offre de services de la DSI',
    description: 'Comprenez la notion de service et la conception des services',
    href: '/section-1',
    icon: BarChart3,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II - La définition du contrat de niveau de service',
    description: 'Maîtrisez la rédaction et les composants d&apos;un SLA',
    href: '/section-2',
    icon: Settings,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Quiz',
    description: 'Testez vos connaissances avec des questions interactives',
    href: '/quiz',
    icon: HelpCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Question de DSCG',
    description: 'Exercices pratiques et cas d\'étude pour l\'examen',
    href: '/questions-dscg',
    icon: Award,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  }
];

export default function CoursePlan() {
  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
          Suivez ce parcours structuré pour maîtriser les Service Level Agreements
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-3 sm:space-y-4">
        {sections.map((section) => (
          <SectionBlock
            key={section.href}
            {...section}
          />
        ))}
      </div>
    </div>
  );
}