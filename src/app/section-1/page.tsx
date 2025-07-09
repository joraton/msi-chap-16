import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, Users, Settings, FileText, Globe, Clock, BookOpen } from 'lucide-react';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-100 rounded-full p-3">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section I - L&apos;offre de services de la DSI</h1>
              <p className="text-gray-600">Comprendre la notion de service et sa conception</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">A. La notion de service</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Définition</h3>
              <p className="text-blue-800 m-0">
                Un service est une prestation qu&apos;assure la DSI auprès de ses clients et utilisateurs.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Caractéristiques d&apos;un service</h3>
            
            <div className="grid gap-6 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                  <h4 className="text-lg font-semibold text-purple-900 m-0">Client et commanditaire</h4>
                </div>
                <p className="text-purple-800 m-0">
                  Tout service est commandité par un client (direction métier ou direction générale). 
                  Il doit répondre à un besoin et nécessite des procédures pour recueillir et prioriser les besoins.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-green-900 m-0">Utilisateurs</h4>
                </div>
                <p className="text-green-800 m-0">
                  Un service est destiné à des utilisateurs dont le statut peut différer : 
                  responsable de service, opérationnel, ou vocation universelle. 
                  Une bonne connaissance des caractéristiques de l&apos;utilisateur est indispensable.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-6 w-6 text-orange-600" />
                  <h4 className="text-lg font-semibold text-orange-900 m-0">Résultats attendus</h4>
                </div>
                <p className="text-orange-800 m-0">
                  Un service est lié à des résultats attendus correspondant au cahier des charges. 
                  Ces éléments doivent faire l&apos;objet d&apos;un consensus entre les parties concernées.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-blue-900 m-0">Contenu</h4>
                </div>
                <p className="text-blue-800 m-0">
                  Un service se caractérise par son contenu : code applicatif pour un logiciel, 
                  serveur, équipements réseaux, etc.
                </p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="h-6 w-6 text-indigo-600" />
                  <h4 className="text-lg font-semibold text-indigo-900 m-0">Modalité d&apos;accès</h4>
                </div>
                <p className="text-indigo-800 m-0">
                  Le service peut être accessible par portail Web, téléphone, application smartphone. 
                  Les modalités doivent être réfléchies par catégories de services analogues.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-6 w-6 text-red-600" />
                  <h4 className="text-lg font-semibold text-red-900 m-0">Disponibilité</h4>
                </div>
                <p className="text-red-800 m-0">
                  Cet aspect décrit quand et où le service est accessible : 
                  horaires spécifiques, lieu d&apos;accès, etc.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-6 w-6 text-yellow-600" />
                  <h4 className="text-lg font-semibold text-yellow-900 m-0">Documentation</h4>
                </div>
                <p className="text-yellow-800 m-0">
                  Tous les éléments précédents sont synthétisés dans un descriptif, 
                  mis à jour régulièrement.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">B. La conception des services</h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Service Design</h3>
              <p className="text-green-800 m-0">
                En anglais, cette phase est appelée <em>Service Design</em>. Dans le cycle de vie ITIL, 
                c&apos;est une phase de réflexion qui spécifie les services et aboutit à des documents descriptifs.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Bénéfices de la conception des services</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Alignement stratégique :</strong> Services en adéquation avec la stratégie SI, 
                  les exigences métiers, l&apos;infrastructure et les contraintes organisationnelles
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Facilitation :</strong> Mise en place simplifiée des nouveaux services 
                  ou évolutions dans la phase de transition
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Coût prédictible :</strong> Meilleure prévision du TCO (Total Cost of Ownership) 
                  incluant conception, réalisation, exploitation et maintenance
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Performance garantie :</strong> Services performants selon leur utilisation
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Les 4P du succès</h3>
              <p className="text-yellow-800 mb-4">
                Pour réussir la conception des services, il faut s&apos;appuyer sur :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-yellow-900">People (Personnes) :</strong>
                  <span className="text-yellow-800"> Meilleures ressources et compétences internes</span>
                </div>
                <div>
                  <strong className="text-yellow-900">Process (Processus) :</strong>
                  <span className="text-yellow-800"> Définition et évolution des processus</span>
                </div>
                <div>
                  <strong className="text-yellow-900">Products (Produits) :</strong>
                  <span className="text-yellow-800"> Choix des produits adaptés</span>
                </div>
                <div>
                  <strong className="text-yellow-900">Partners (Partenaires) :</strong>
                  <span className="text-yellow-800"> Sélection des sous-traitants spécialisés</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Composants de la conception des services</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">1. Recueil des exigences des branches métiers</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-blue-800 text-sm">
                      <strong>Formalisation :</strong> Les besoins doivent être formalisés par écrit et validés par le demandeur
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-blue-800 text-sm">
                      <strong>Composante financière :</strong> Doit être prise en compte même si ce n&apos;est pas le client qui paie
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-blue-800 text-sm">
                      <strong>Cadre SLA :</strong> L&apos;expression des besoins donne le cadre de travail pour la constitution du SLA
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">2. Indicateurs de mesure du service</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-green-800 text-sm">
                      <strong>Définition précoce :</strong> À définir dès la phase de conception pour optimiser les coûts
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-green-800 text-sm">
                      <strong>Architecture :</strong> Prise en compte dans l&apos;architecture pour minimiser les travaux ultérieurs
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <p className="text-green-800 text-sm">
                      <strong>Reflet des exigences :</strong> Doivent refléter les exigences métiers par rapport à la solution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-4">Les 4 types d&apos;indicateurs de mesure</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">📈 Progression/Volumétrie</h4>
                  <p className="text-orange-800 text-sm">
                    Quelle est l&apos;évolution des données de volumétrie pour le service ?
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">✅ Conformité</h4>
                  <p className="text-orange-800 text-sm">
                    Est-ce que le service fait ce que l&apos;on a dit qu&apos;il ferait ?
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">🎯 Efficacité</h4>
                  <p className="text-orange-800 text-sm">
                    Est-ce que le service atteint les objectifs annoncés ?
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-2">⚡ Efficience</h4>
                  <p className="text-orange-800 text-sm">
                    Est-ce que le niveau de qualité est fourni avec les coûts optimaux ?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <a
              href="/introduction"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              ← Précédent : Introduction
            </a>
            <a
              href="/section-2"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Suivant : Définition du SLA →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}