'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, ChevronDown, ChevronRight, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface DSCGQuestion {
  id: number;
  session: string;
  title: string;
  context: string;
  question: string;
  correction: string;
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: 1,
    session: "DSCG Session 2016",
    title: "Cas SOVANI - Modernisation du SI",
    context: "Le cas \"SOVANI\" présente une entreprise spécialisée dans les fournitures de bureau qui se tourne vers les objets connectés et doit moderniser son système d'information, notamment son ERP.",
    question: "DOSSIER 2 – PROJET de MODERNISATION DU SI, Question 5 :\n\"Dans le contexte du projet de modernisation de l'ERP de SOVANI, proposer des éléments de comparaison entre les 3 alternatives cloud existantes.\"",
    correction: "Cette question est pertinente car le chapitre sur le SLA stipule que ce type de contrat est indispensable dans le cadre de relations d'externalisation comme le recours au cloud.\n\n• La société SOVANI envisage une solution cloud pour ses besoins de sauvegarde, d'accès aux ressources logicielles et d'échanges, cherchant à concilier sauvegarde, sécurité, accessibilité et coût.\n\n• Les trois alternatives cloud sont :\n\n**Cloud privé :** Accès sur serveur distant, dédié à une seule entreprise, garantissant l'étanchéité et la sécurité des données. Il permet une consommation du SI via SaaS. Les ressources peuvent être chez SOVANI ou chez l'ESN, et la gestion peut être interne ou confiée à un prestataire. Les coûts sont plus élevés en raison de la sécurité et de l'adaptation aux besoins spécifiques de l'entreprise.\n\n**Cloud public :** Matériel et services à distance fournis par un prestataire pour plusieurs entreprises. Le coût est moindre car les ressources sont mutualisées.\n\n**Cloud hybride :** Offre combinant le meilleur des deux, avec certaines ressources sur une partie publique et d'autres, plus sensibles, restreintes. Le coût est intermédiaire.\n\n• Ces éléments de comparaison sur les alternatives cloud sont directement liés aux modalités de fourniture de service et à leurs implications en termes de coûts et de sécurité, des aspects cruciaux pour la contractualisation via un SLA."
  },
  {
    id: 2,
    session: "DSCG Session 2017",
    title: "Réseau AIDADOM - Virtualisation et TCO",
    context: "Le réseau AIDADOM, spécialisé dans les services à domicile, vise à moderniser et professionnaliser ses services en faisant évoluer son système d'information, incluant le déploiement d'une application métier et l'étude d'un projet de formation à distance.",
    question: "DOSSIER 2. PROJET DE DÉPLOIEMENT DE L'APPLICATION MÉTIER, Question 6 :\n\"En quoi la virtualisation et la haute disponibilité des serveurs AidSys peuvent-ils avoir un impact sur le coût total de possession ?\"",
    correction: "Le \"CHAPITRE 16 : LE SLA\" mentionne que la phase de conception des services doit permettre de déterminer un **coût prédictible par une meilleure prévision de l'ensemble des coûts, incluant le TCO (Total Cost of Ownership)**.\n\n**Impact de la virtualisation des serveurs sur le TCO :** La virtualisation permet de faire fonctionner plusieurs serveurs virtuels sur un seul serveur physique, mutualisant les capacités et réduisant les investissements en infrastructures physiques. Cela diminue les coûts liés à la consommation électrique, au nombre de serveurs physiques et aux matériels associés (onduleurs, dispositifs de sauvegarde, climatisation, locaux sécurisés).\n\n**Impact de la haute disponibilité des serveurs sur le TCO :** Les dispositifs de haute disponibilité permettent une tolérance de panne, réduisant ou éliminant les temps d'interruption de service. Cela a un impact positif sur les coûts induits par ces interruptions (perte de productivité des utilisateurs, ralentissements).\n\n• Ces deux aspects contribuent à réduire le TCO global."
  },
  {
    id: 3,
    session: "DSCG Session 2017",
    title: "Réseau AIDADOM - Définition des SLA",
    context: "Le réseau AIDADOM, spécialisé dans les services à domicile, vise à moderniser et professionnaliser ses services en faisant évoluer son système d'information, incluant le déploiement d'une application métier et l'étude d'un projet de formation à distance.",
    question: "DOSSIER 2. PROJET DE DÉPLOIEMENT DE L'APPLICATION MÉTIER, Question 7 :\n\"Préciser ce que recouvre le concept d'\"Accords de niveaux de service\" (SLA) et indiquer les avantages procurés par une gestion de SLA et le référentiel qui le préconise. Deux avantages sont attendus.\"",
    correction: "Cette question est directement liée au \"CHAPITRE 16 : LE SLA\" qui définit précisément ce concept.\n\n**Définition du concept d'\"Accords de niveaux de service\" (SLA) :** Les Accords de niveaux de services, ou SLA (Service Level Agreements), définissent des objectifs spécifiques sur lesquels les performances des services seront jugées. L'utilisateur du système d'information est en droit d'attendre un niveau de performance suffisant, qui peut être contractualisé via un SLA, notamment lorsque le prestataire est externe. Le SLA permet de contractualiser la liste et la définition des services, les performances attendues (niveaux de service), et la disponibilité.\n\n**Avantages procurés par une gestion de SLA :**\n• Elle transforme l'obligation de moyen du prestataire en une **obligation de résultat**, basée sur des niveaux de service clairement fixés.\n• Elle permet de **maintenir et d'améliorer la qualité des services informatiques** grâce à des suivis et des rapports statistiques sur l'atteinte des objectifs. Si les niveaux requis ne sont pas atteints, la gestion de SLA initie des actions correctives.\n\n**Référentiel préconisant une gestion de SLA :** Une gestion de SLA est préconisée par le référentiel **ITIL (Information Technology Infrastructure Library)**."
  },
  {
    id: 4,
    session: "DSCG Session 2018",
    title: "Groupe Mirlac - Choix d'un PGI et TCO",
    context: "Le groupe Mirlac, spécialisé dans la transformation du bois, doit remplacer son PGI vieillissant et renforcer la sécurité de ses échanges. Le projet de nouveau PGI est jugé stratégique.",
    question: "DOSSIER 1 : REMPLACEMENT DU PGI, Question 3 :\n\"Lors du choix d'un PGI, quels sont les points auxquels l'entreprise doit être attentive ? Citer et expliciter quatre points clés.\"",
    correction: "Un des points clés mentionnés dans la correction est le **coût global du PGI, également appelé coût total de possession (TCO)**. Le \"CHAPITRE 16 : LE SLA\" souligne que la phase de conception des services permet de déterminer un coût prédictible par une meilleure prévision de l'ensemble des coûts, en utilisant le TCO. Le TCO inclut les coûts de conception, réalisation, mise en œuvre, exploitation et maintenance pendant la vie estimée du service.\n\n• Les coûts du PGI incluent les sommes dues à l'éditeur pour le droit d'utilisation (licence), la maintenance (mises à jour), les coûts d'installation (équipe projet, intégrateur, formation), les coûts d'adaptation de l'environnement matériel, et les coûts cachés (baisse de productivité).\n\n• Les autres points d'attention incluent le PGI multilingue/multidevises, son adaptabilité (paramétrage), sa complexité, l'expérience et la pérennité de l'éditeur, ainsi que les conditions de mise en œuvre."
  },
  {
    id: 5,
    session: "DSCG Session 2019",
    title: "SOLIDOR - Mode SaaS",
    context: "L'entreprise SOLIDOR, producteur et distributeur de lingerie féminine, met en œuvre une nouvelle stratégie marketing et Supply Chain, avec l'introduction d'un CRM, un NPS et une solution Planning & Tracking en mode SaaS.",
    question: "DOSSIER 2 : ALIGNEMENT STRATÉGIQUE DU SI, Question 3 :\n\"Après avoir expliqué ce qu'est le mode SaaS, sur lequel est basé la solution Planning & Tracking développée par Aleth, vous en expliquerez simplement les forces et faiblesses.\"",
    correction: "Le \"CHAPITRE 16 : LE SLA\" indique que l'utilisation du SaaS est un cas où un contrat de niveau de service (SLA) est indispensable.\n\n**Définition du mode SaaS :** Le Software as a Service (SaaS) est un mode de distribution en cloud computing où une solution logicielle est délivrée et maintenue par l'éditeur (ici Aleth) sous forme d'application web, sans installation nécessaire sur le système de l'utilisateur final. Le paiement se fait à l'utilisation ou par abonnement.\n\n**Forces du mode SaaS pour SOLIDOR :**\n• **Flexibilité** et facilité d'usage.\n• **Faible investissement initial** (frais d'exploitation au lieu d'investissement).\n• **Mises à jour facilitées**, à la charge de l'éditeur.\n• **Sécurité assurée par le prestataire**.\n• Lisibilité des tarifs (paiement à l'usage).\n\n**Faiblesses du mode SaaS pour SOLIDOR :**\n• **Forte dépendance vis-à-vis du prestataire**.\n• Vulnérabilité et **sécurité des données** (questions sur la protection, localisation et accès aux données externalisées).\n• Complexité de la contractualisation/tarification.\n• Perte de compétences informatiques en interne.\n• Coût de réversibilité élevé (difficulté à récupérer les données et applications en cas de changement de prestataire)."
  },
  {
    id: 6,
    session: "DSCG Session 2021",
    title: "Haute-Loire Habitat - Indicateurs de coût du SI",
    context: "Le cas concerne la fusion de trois organismes de logement social en une nouvelle entité, \"Haute-Loire Habitat\", nécessitant une réorganisation de la Direction des Systèmes d'Information (DSI) et des choix stratégiques.",
    question: "DOSSIER 1 – SCHÉMA DIRECTEUR DU SYSTÈME D'INFORMATION, Question 3 :\n\"Vous proposerez deux 2 indicateurs de coût du Système d'Information que vous définirez et caractériserez simplement.\"",
    correction: "Parmi les indicateurs de coût du SI proposés, le \"Coût de disponibilité\" est directement lié aux aspects de disponibilité d'un service, un élément clé dans un SLA. Le \"CHAPITRE 16 : LE SLA\" définit la disponibilité comme un critère impérativement mentionné dans tout SLA, représentant le temps d'utilisation du service sans interruption, souvent exprimé en pourcentage.\n\n**Coûts de disponibilité :** Ces coûts peuvent être évalués en fonction du coût de perte de service sur une période donnée (par exemple, à l'heure) ou du coût de garantie de disponibilité des services par le prestataire avant l'application de pénalités. Ils peuvent aussi inclure le coût d'un Plan de Continuité d'Activité (PCA) ou un Plan de Reprise d'Activité (PRA) visant à améliorer le taux de disponibilité du SI.\n\n• D'autres indicateurs de coût mentionnés incluent les coûts des infrastructures SI, la maintenance du SI, les ressources humaines de la DSI, la valorisation du SI, la valeur d'amortissement du SI et le coût d'opportunité du SI."
  },
  {
    id: 7,
    session: "DSCG Session 2022",
    title: "SD3i - Modes de distribution SaaS et On Premise",
    context: "Le groupe SD3i restructure ses activités, menant à l'indépendance de la société DIGITAL INTEGRATION. Cela implique une réorganisation des systèmes d'information, notamment les choix d'applications (CRM, ERP, GED) et leurs modes de distribution.",
    question: "DOSSIER 3 – ÉQUIPEMENT DE NOUVEAUX SYSTÈMES D'INFORMATION, Question 1 :\n\"Définir les deux modes de distribution (SaaS et On Premise) et proposer des arguments permettant de choisir un type de distribution pour chaque application.\"",
    correction: "Le \"CHAPITRE 16 : LE SLA\" mentionne le SaaS comme un contexte où les SLA sont indispensables.\n\n**Définition On-Premise :** Les infrastructures informatiques et logicielles sont \"sur site\" lorsque l'entreprise les héberge et les maintient elle-même. Elles sont acquises par un investissement en licence.\n\n**Définition SaaS :** Le \"Software as a Service\" est une solution logicielle applicative hébergée dans le cloud et exploitée par un tiers (fournisseur de service). Elle est accessible via Internet depuis un navigateur web, et l'utilisation est généralement facturée par abonnement ou au service consommé.\n\n**Arguments pour le choix du mode de distribution par application :**\n\n**CRM :** Généralement proposé en SaaS pour sa souplesse d'adaptation au nombre d'utilisateurs et aux fonctionnalités. L'hébergement dans le Cloud est un avantage pour sa facilité d'accès (mobile, web public).\n\n**ERP :** La plupart sont On-Premise pour les grandes organisations, bien que certains éditeurs proposent des ERP spécifiques en SaaS. L'hébergement de l'ERP en interne est souvent privilégié pour une meilleure maîtrise de la sécurité, étant donné qu'il est au cœur de la production et de la gestion financière.\n\n**GED (Gestion Électronique des Documents) :** Généralement On-Premise sur le marché, pour des arguments de sécurité d'accès et de maîtrise du stockage des documents, ce qui peut être plus économique lorsqu'internalisé."
  }
];

export default function QuestionsDSCG() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});

  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const toggleCorrection = (id: number) => {
    setShowCorrection(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-100 rounded-full p-3">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Question de DSCG</h1>
              <p className="text-gray-600">Exercices pratiques d&apos;application pour l&apos;examen</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Target className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900 m-0">Questions DSCG authentiques</h3>
            </div>
            <p className="text-blue-800 m-0">
              Voici les questions des sujets DSCG et leurs corrections qui ont un lien direct avec les concepts abordés dans le &quot;CHAPITRE 16 : LE SLA&quot;.
            </p>
          </div>

          {/* Questions DSCG */}
          <div className="space-y-6">
            {dscgQuestions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleQuestion(question.id)}
                  className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-medium text-blue-600 mb-1">{question.session}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {question.title}
                    </h3>
                    <p className="text-gray-600">
                      Cliquez pour développer l&apos;énoncé et voir la correction officielle
                    </p>
                  </div>
                  {expandedQuestion === question.id ? (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  )}
                </button>

                {/* Question Content */}
                {expandedQuestion === question.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 border-t border-gray-200"
                  >
                    {/* Context */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Contexte</h4>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-yellow-800">{question.context}</p>
                      </div>
                    </div>

                    {/* Question */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Question</h4>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <pre className="text-blue-800 font-medium whitespace-pre-wrap font-sans">{question.question}</pre>
                      </div>
                    </div>

                    {/* Correction */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleCorrection(question.id)}
                        className="flex items-center gap-2 mb-3 text-green-700 hover:text-green-800 transition-colors"
                      >
                        <Award className="h-5 w-5" />
                        <h4 className="text-lg font-semibold m-0">Correction officielle</h4>
                        {showCorrection[question.id] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      
                      {showCorrection[question.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-green-50 border border-green-200 rounded-lg p-4"
                        >
                          <div className="text-green-800 whitespace-pre-line">
                            {question.correction}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 rounded-full p-2">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 m-0">Conseils pour l&apos;examen DSCG</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Préparation</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Maîtrisez les définitions clés (SLA, TCO, disponibilité)</li>
                  <li>• Entraînez-vous aux calculs de disponibilité</li>
                  <li>• Connaissez les référentiels (ITIL, COBIT)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Rédaction</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Structurez vos réponses clairement</li>
                  <li>• Utilisez le vocabulaire technique approprié</li>
                  <li>• Justifiez vos choix par des arguments business</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link 
              href="/quiz" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Retour au Quiz
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Retour au plan de cours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}