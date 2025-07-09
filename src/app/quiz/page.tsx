'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { HelpCircle, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'un SLA ?",
    options: [
      "Un logiciel de gestion de services",
      "Un contrat définissant le niveau de service attendu",
      "Une méthode de développement agile",
      "Un protocole de sécurité informatique"
    ],
    correct: 1,
    explanation: "Un SLA (Service Level Agreement) est un contrat qui définit le niveau de service attendu entre un prestataire et son client."
  },
  {
    id: 2,
    question: "Quels sont les 4P de la conception des services selon ITIL ?",
    options: [
      "People, Process, Products, Partners",
      "Plan, Prepare, Perform, Perfect",
      "Price, Performance, People, Process",
      "Prevent, Protect, Provide, Perform"
    ],
    correct: 0,
    explanation: "Les 4P sont : People (Personnes), Process (Processus), Products (Produits), Partners (Partenaires)."
  },
  {
    id: 3,
    question: "Que signifie une disponibilité de 99,9% ?",
    options: [
      "Le service peut être arrêté 1 jour par an",
      "Le service peut être arrêté environ 8h46min par an",
      "Le service peut être arrêté 1 heure par mois",
      "Le service ne peut jamais être arrêté"
    ],
    correct: 1,
    explanation: "99,9% de disponibilité correspond à environ 8h46min d'arrêt maximum par an."
  },
  {
    id: 4,
    question: "Quel est l'objectif principal d'un SLA ?",
    options: [
      "Réduire les coûts informatiques",
      "Responsabiliser le prestataire et garantir un niveau de service",
      "Accélérer le développement logiciel",
      "Améliorer la sécurité des données"
    ],
    correct: 1,
    explanation: "L'objectif principal est de responsabiliser le prestataire et de garantir un niveau de service défini contractuellement."
  },
  {
    id: 5,
    question: "Que signifie TCO dans le contexte des services ?",
    options: [
      "Technical Control Office",
      "Total Cost of Ownership",
      "Technology Coordination Office",
      "Technical Configuration Options"
    ],
    correct: 1,
    explanation: "TCO signifie Total Cost of Ownership - le coût total de possession incluant conception, réalisation, exploitation et maintenance."
  },
  {
    id: 6,
    question: "Quels sont les 4 types d'indicateurs de mesure du service ?",
    options: [
      "Progression, Conformité, Efficacité, Efficience",
      "Performance, Qualité, Coût, Délai",
      "Disponibilité, Fiabilité, Sécurité, Performance",
      "Mesure, Analyse, Amélioration, Contrôle"
    ],
    correct: 0,
    explanation: "Les 4 types d'indicateurs sont : Progression/Volumétrie, Conformité, Efficacité et Efficience."
  },
  {
    id: 7,
    question: "Quand faut-il définir les indicateurs de mesure du service ?",
    options: [
      "Après la mise en production",
      "Pendant la phase d'exploitation",
      "Dès la phase de conception",
      "Lors des incidents"
    ],
    correct: 2,
    explanation: "Les indicateurs doivent être définis dès la phase de conception pour optimiser les coûts et être pris en compte dans l'architecture."
  },
  {
    id: 8,
    question: "Que doit contenir le reporting d'un SLA ?",
    options: [
      "Uniquement les métriques techniques",
      "Synthèse des indicateurs, analyse des écarts, actions correctives",
      "Seulement les incidents survenus",
      "Les coûts de fonctionnement"
    ],
    correct: 1,
    explanation: "Le reporting doit inclure une synthèse des indicateurs, une analyse des écarts par rapport aux objectifs et les actions correctives mises en place."
  },
  {
    id: 9,
    question: "Quelle est la responsabilité principale du prestataire dans un SLA ?",
    options: [
      "Fournir uniquement les moyens techniques",
      "S'engager sur l'atteinte des objectifs définis",
      "Gérer seulement les incidents majeurs",
      "Assurer la formation des utilisateurs"
    ],
    correct: 1,
    explanation: "Le prestataire s'engage sur un résultat : l'atteinte des objectifs de niveau de service définis dans le SLA."
  },
  {
    id: 10,
    question: "Pourquoi la composante financière doit-elle être prise en compte dans l'expression des besoins ?",
    options: [
      "Pour augmenter les profits",
      "Même si ce n'est pas le client qui paie, cela donne le cadre de travail pour le SLA",
      "Pour réduire les fonctionnalités",
      "Pour accélérer le projet"
    ],
    correct: 1,
    explanation: "La composante financière doit être prise en compte car elle donne le cadre de travail pour la constitution du SLA, même si ce n'est pas le client final qui paie."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    } else {
      // Calculate score
      const finalScore = newAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
      }, 0);
      setScore(finalScore);
      setTimeout(() => {
        setShowResults(true);
      }, 1000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez bien les SLA.';
    if (percentage >= 60) return 'Bien ! Quelques révisions seraient bénéfiques.';
    return 'Il serait bon de revoir le cours avant de continuer.';
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <BackToPlanButton />
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Résultats du Quiz</h1>
              <p className="text-gray-600">Voici vos résultats et les corrections</p>
            </div>

            <div className="text-center mb-8">
              <div className={`text-6xl font-bold ${getScoreColor()} mb-4`}>
                {score}/{questions.length}
              </div>
              <p className="text-xl text-gray-700 mb-2">
                {((score / questions.length) * 100).toFixed(0)}% de réussite
              </p>
              <p className={`text-lg ${getScoreColor()}`}>
                {getScoreMessage()}
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      {isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600 mt-1" />
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Question {index + 1}: {question.question}
                        </h3>
                        <div className="space-y-2 mb-4">
                          {question.options.map((option, optionIndex) => {
                            let className = 'p-3 rounded-lg border ';
                            if (optionIndex === question.correct) {
                              className += 'bg-green-100 border-green-300 text-green-800';
                            } else if (optionIndex === userAnswer && !isCorrect) {
                              className += 'bg-red-100 border-red-300 text-red-800';
                            } else {
                              className += 'bg-white border-gray-200 text-gray-700';
                            }
                            
                            return (
                              <div key={optionIndex} className={className}>
                                {option}
                                {optionIndex === question.correct && (
                                  <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>
                                )}
                                {optionIndex === userAnswer && !isCorrect && (
                                  <span className="ml-2 text-red-600 font-semibold">✗ Votre réponse</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                          <p className="text-blue-800">
                            <strong>Explication :</strong> {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <button
                onClick={resetQuiz}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer le quiz
              </button>
              <a
                href="/questions-dscg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Suivant : Question de DSCG →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const hasAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BackToPlanButton />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 rounded-full p-3">
              <HelpCircle className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Quiz SLA</h1>
              <p className="text-gray-600">Testez vos connaissances sur les Service Level Agreements</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => {
                let className = 'p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ';
                
                if (hasAnswered) {
                  if (index === question.correct) {
                    className += 'bg-green-100 border-green-500 text-green-800';
                  } else if (index === selectedAnswers[currentQuestion]) {
                    className += 'bg-red-100 border-red-500 text-red-800';
                  } else {
                    className += 'bg-gray-100 border-gray-300 text-gray-600';
                  }
                } else {
                  className += 'bg-white border-gray-200 hover:border-orange-300 hover:bg-orange-50';
                }

                return (
                  <motion.button
                    key={index}
                    whileHover={!hasAnswered ? { scale: 1.02 } : {}}
                    whileTap={!hasAnswered ? { scale: 0.98 } : {}}
                    className={className}
                    onClick={() => !hasAnswered && handleAnswer(index)}
                    disabled={hasAnswered}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-left">{option}</span>
                      {hasAnswered && index === question.correct && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                      {hasAnswered && index === selectedAnswers[currentQuestion] && index !== question.correct && (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border-l-4 border-blue-500 p-6"
            >
              <p className="text-blue-800">
                <strong>Explication :</strong> {question.explanation}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}