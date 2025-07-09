import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Rocket, Target, Users } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 rounded-full p-3">
              <Rocket className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Introduction aux SLA</h1>
              <p className="text-gray-600">Concepts fondamentaux et importance des Service Level Agreements</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900 m-0">Objectif du chapitre</h3>
              </div>
              <p className="text-blue-800 m-0">
                Comprendre l&apos;importance des contrats de niveau de service dans la gestion 
                des systèmes d&apos;information et maîtriser leur mise en œuvre.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qu&apos;est-ce qu&apos;un SLA ?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              L&apos;utilisateur du système d&apos;information est en droit d&apos;attendre un niveau 
              de performance suffisant. Cette attente peut être contractualisée, 
              lorsque le prestataire est externe, mais peut également concerner une 
              prestation interne.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Définition clé</h3>
              <p className="text-green-800 m-0">
                Un <strong>Service Level Agreement (SLA)</strong> est un contrat qui définit 
                le niveau de service attendu entre un prestataire de services et son client.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi les SLA sont-ils essentiels ?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Responsabilisation</h3>
                <p className="text-purple-800">
                  Le but est de responsabiliser le producteur interne de la prestation informatique.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Externalisation</h3>
                <p className="text-orange-800">
                  Un tel contrat est indispensable dans le cadre de relations d&apos;externalisation 
                  comme l&apos;infogérance ou le recours au cloud.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-900 m-0">Lien avec ITIL</h3>
              </div>
              <p className="text-yellow-800 m-0">
                La notion de service est particulièrement attachée au référentiel ITIL 
                (Information Technology Infrastructure Library), qui fournit un cadre 
                de bonnes pratiques pour la gestion des services informatiques.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que vous allez apprendre</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Comment définir et concevoir l&apos;offre de services de la DSI</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Les composants essentiels d&apos;un contrat de niveau de service</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Comment mesurer et garantir la performance des services</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
            <a
              href="/section-1"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Suivant : L&apos;offre de services →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}