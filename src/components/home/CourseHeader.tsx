import { Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-6 sm:mb-8">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 overflow-x-auto">
        <div className="flex items-center whitespace-nowrap">
          <span>Accueil</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span>Cours</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span className="text-blue-600">Service Level Agreement (SLA)</span>
        </div>
      </nav>

      {/* Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 text-white">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 rounded-lg p-3 sm:p-4 flex-shrink-0 self-center sm:self-start">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
              Service Level Agreement (SLA)
            </h1>
            <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
              Maîtrisez les contrats de niveau de service et l&apos;offre de services de la DSI. 
              Apprenez à définir, mesurer et gérer la qualité des services informatiques.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
              <div className="bg-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">3h 30min</span>
              </div>
              <div className="bg-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">2 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}