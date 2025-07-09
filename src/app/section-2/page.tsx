import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Settings, FileText, Target, BarChart, Clock, Shield } from 'lucide-react';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 rounded-full p-3">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Section II - La définition du contrat de niveau de service</h1>
              <p className="text-gray-600">Maîtriser la rédaction et les composants d&apos;un SLA</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Variabilité des SLA</h3>
              <p className="text-purple-800 m-0">
                La rédaction d&apos;un SLA varie selon la prestation : un SLA &quot;Réseau&quot; diffère 
                d&apos;un SLA &quot;Hébergement&quot; ou &quot;Application&quot;. Chacun comporte des points spécifiques 
                liés à son domaine, mais tous doivent couvrir certains aspects essentiels.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900 m-0">Important</h3>
              </div>
              <p className="text-blue-800 m-0">
                Si le SLA n&apos;est pas un contrat à part entière, il permet de contractualiser 
                les éléments essentiels de la prestation de service.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. La liste et la définition du (ou des) service(s)</h2>
            
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900 m-0">Niveaux de service</h3>
              </div>
              <p className="text-green-800 mb-4">
                Pour chaque service à fournir, il faut définir la (ou les) performance(s) attendue(s) 
                appelée(s) &quot;niveaux de service&quot;.
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-green-800 m-0">
                  <strong>Le niveau de service</strong> est la référence de la qualité minimale 
                  du service pour lequel le fournisseur va s&apos;engager.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Caractéristiques des niveaux de service</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Performance minimale :</strong> Le fournisseur peut faire mieux, 
                  mais l&apos;enjeu sera de valoriser les surcroîts de performance dans ses tarifs
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Satisfaction des exigences :</strong> Le niveau doit satisfaire les exigences 
                  du client, avec conseil sur la pertinence des performances demandées
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Accord mutuel :</strong> Chaque niveau doit être défini d&apos;un commun accord 
                  et évalué par des valeurs techniques mesurables
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 rounded-full p-1 mt-1">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">
                  <strong>Optimisation coût/performance :</strong> Éviter des niveaux trop élevés 
                  par rapport aux besoins réels
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <BarChart className="h-5 w-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-yellow-900 m-0">Bonnes pratiques</h3>
              </div>
              <p className="text-yellow-800 m-0">
                Un bon SLA doit éviter de viser des niveaux de performances trop élevés 
                par rapport aux besoins, ce qui engendre des prestations plus onéreuses 
                sans améliorer les retombées quant à l&apos;usage du SI.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Le cas de la disponibilité</h2>
            
            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-semibold text-red-900 m-0">Disponibilité du service</h3>
              </div>
              <p className="text-red-800 mb-4">
                La disponibilité est l&apos;un des indicateurs les plus critiques d&apos;un SLA. 
                Elle définit le pourcentage de temps pendant lequel le service doit être opérationnel.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">Calcul de disponibilité</h4>
                  <p className="text-red-800 text-sm">
                    Disponibilité = (Temps total - Temps d&apos;arrêt) / Temps total × 100
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">Exemple</h4>
                  <p className="text-red-800 text-sm">
                    99,9% = 8h46min d&apos;arrêt maximum par an
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Composants essentiels d&apos;un SLA</h2>
            
            <div className="grid gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-blue-900 m-0">Description du service</h4>
                </div>
                <p className="text-blue-800 m-0">
                  Définition claire et précise de ce qui est fourni, 
                  incluant les fonctionnalités et les limites.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-semibold text-green-900 m-0">Indicateurs de performance</h4>
                </div>
                <p className="text-green-800 m-0">
                  Métriques mesurables : disponibilité, temps de réponse, 
                  débit, taux d&apos;erreur, etc.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <h4 className="text-lg font-semibold text-purple-900 m-0">Responsabilités</h4>
                </div>
                <p className="text-purple-800 m-0">
                  Répartition claire des responsabilités entre le prestataire 
                  et le client pour chaque aspect du service.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-6 w-6 text-orange-600" />
                  <h4 className="text-lg font-semibold text-orange-900 m-0">Horaires de service</h4>
                </div>
                <p className="text-orange-800 m-0">
                  Définition des plages horaires de disponibilité 
                  et des fenêtres de maintenance.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Moyens mnémotechniques</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>SMART :</strong> Spécifique, Mesurable, Atteignable, Réaliste, Temporel
                </p>
                <p className="text-gray-700">
                  <strong>Les 4D :</strong> Disponibilité, Débit, Délai, Défauts
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Composants détaillés du SLA</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">📊 Reporting</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-purple-800 text-sm">
                      <strong>Fréquence :</strong> Mensuelle, trimestrielle ou annuelle selon les besoins
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-purple-800 text-sm">
                      <strong>Contenu :</strong> Synthèse des indicateurs, analyse des écarts, actions correctives
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <p className="text-purple-800 text-sm">
                      <strong>Format :</strong> Tableaux de bord, graphiques d&apos;évolution, commentaires explicatifs
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">💰 Tarification</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <p className="text-yellow-800 text-sm">
                      <strong>Modalités :</strong> Forfait, régie, ou mixte selon la nature du service
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <p className="text-yellow-800 text-sm">
                      <strong>Facturation :</strong> Périodicité et modalités de facturation clairement définies
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-100 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    </div>
                    <p className="text-yellow-800 text-sm">
                      <strong>Évolution :</strong> Mécanismes de révision tarifaire et conditions d&apos;ajustement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-4">⚖️ Responsabilité du prestataire</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">🎯 Engagement de résultat</h4>
                  <p className="text-red-800 text-sm">
                    Le prestataire s&apos;engage sur l&apos;atteinte des objectifs définis dans le SLA
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">🔧 Moyens mis en œuvre</h4>
                  <p className="text-red-800 text-sm">
                    Définition claire des ressources et moyens alloués au service
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">📋 Obligations contractuelles</h4>
                  <p className="text-red-800 text-sm">
                    Respect des engagements pris et des délais convenus
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">🚨 Gestion des incidents</h4>
                  <p className="text-red-800 text-sm">
                    Procédures d&apos;escalade et de résolution des problèmes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📋 Checklist SLA complète</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Définition</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Listing des services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Description détaillée</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Périmètre d&apos;application</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Mesure</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Indicateurs de performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Seuils de qualité</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Méthodes de calcul</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Gestion</h4>
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Reporting périodique</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Actions correctives</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Évolution continue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <a
              href="/section-1"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              ← Précédent : Offre de services
            </a>
            <a
              href="/quiz"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Suivant : Quiz →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}