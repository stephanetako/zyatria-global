import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';
import { Slider } from './ui/slider';
import { Card } from './ui/card';

const translations = {
  en: {
    badge: "ROI Calculator",
    title: "Calculate Your ROI",
    titleHighlight: "Calculate Your ROI",
    subtitle: "See how much you could save with AI automation",
    employees: "Number of employees",
    avgSalary: "Average salary per employee",
    hoursAutomated: "Hours automated per week (per employee)",
    calculate: "Calculate Savings",
    results: {
      title: "Your Potential Savings",
      monthlySavings: "Monthly Savings",
      yearlySavings: "Yearly Savings",
      roi: "ROI Period",
      timeRecovered: "Time Recovered",
      equivalent: "Equivalent to",
      fullTimeEmployees: "full-time employees"
    }
  },
  fr: {
    badge: "Calculateur de ROI",
    title: "Calculez votre ROI",
    titleHighlight: "Calculez votre ROI",
    subtitle: "Découvrez combien vous pourriez économiser avec l'automatisation IA",
    employees: "Nombre d'employés",
    avgSalary: "Salaire moyen par employé",
    hoursAutomated: "Heures automatisées par semaine (par employé)",
    calculate: "Calculer les économies",
    results: {
      title: "Vos économies potentielles",
      monthlySavings: "Économies mensuelles",
      yearlySavings: "Économies annuelles",
      roi: "Période de ROI",
      timeRecovered: "Temps récupéré",
      equivalent: "Équivalent à",
      fullTimeEmployees: "employés à temps plein"
    }
  },
  es: {
    badge: "Calculadora de ROI",
    title: "Calcula tu ROI",
    titleHighlight: "Calcula tu ROI",
    subtitle: "Descubre cuánto podrías ahorrar con la automatización IA",
    employees: "Número de empleados",
    avgSalary: "Salario promedio por empleado",
    hoursAutomated: "Horas automatizadas por semana (por empleado)",
    calculate: "Calcular ahorros",
    results: {
      title: "Tus ahorros potenciales",
      monthlySavings: "Ahorros mensuales",
      yearlySavings: "Ahorros anuales",
      roi: "Período de ROI",
      timeRecovered: "Tiempo recuperado",
      equivalent: "Equivalente a",
      fullTimeEmployees: "empleados a tiempo completo"
    }
  },
  pt: {
    badge: "Calculadora de ROI",
    title: "Calcule seu ROI",
    titleHighlight: "Calcule seu ROI",
    subtitle: "Veja quanto você poderia economizar com automação IA",
    employees: "Número de funcionários",
    avgSalary: "Salário médio por funcionário",
    hoursAutomated: "Horas automatizadas por semana (por funcionário)",
    calculate: "Calcular economias",
    results: {
      title: "Suas economias potenciais",
      monthlySavings: "Economias mensais",
      yearlySavings: "Economias anuais",
      roi: "Período de ROI",
      timeRecovered: "Tempo recuperado",
      equivalent: "Equivalente a",
      fullTimeEmployees: "funcionários em tempo integral"
    }
  }
};

export default function ROICalculator() {
  const [lang] = useState<'en' | 'fr' | 'es' | 'pt'>('en');
  const t = translations[lang];

  const [employees, setEmployees] = useState([50]);
  const [avgSalary, setAvgSalary] = useState([50000]);
  const [hoursAutomated, setHoursAutomated] = useState([10]);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    setShowResults(true);
  };

  // Calculs
  const hourlyRate = avgSalary[0] / 2080; // 40h/week * 52 weeks
  const weeklyTimeValue = employees[0] * hoursAutomated[0] * hourlyRate;
  const monthlySavings = weeklyTimeValue * 4.33; // moyenne semaines/mois
  const yearlySavings = monthlySavings * 12;
  
  // Assuming plan Business at $2,497/mo
  const planCost = 2497;
  const roiMonths = Math.ceil(planCost / monthlySavings);
  
  // FTE equivalent
  const hoursRecoveredPerYear = employees[0] * hoursAutomated[0] * 52;
  const fteEquivalent = hoursRecoveredPerYear / 2080;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-600">{t.badge}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">{t.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <Card className="p-8 md:p-12">
          <div className="space-y-8">
            {/* Employees */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-4">
                <Users className="w-4 h-4 text-blue-600" />
                {t.employees}: <span className="text-blue-600 font-bold">{employees[0]}</span>
              </label>
              <Slider
                value={employees}
                onValueChange={setEmployees}
                min={5}
                max={500}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>5</span>
                <span>500</span>
              </div>
            </div>

            {/* Average Salary */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-4">
                <DollarSign className="w-4 h-4 text-blue-600" />
                {t.avgSalary}: <span className="text-blue-600 font-bold">${avgSalary[0].toLocaleString()}/year</span>
              </label>
              <Slider
                value={avgSalary}
                onValueChange={setAvgSalary}
                min={30000}
                max={150000}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$30k</span>
                <span>$150k</span>
              </div>
            </div>

            {/* Hours Automated */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-4">
                <Clock className="w-4 h-4 text-blue-600" />
                {t.hoursAutomated}: <span className="text-blue-600 font-bold">{hoursAutomated[0]}h</span>
              </label>
              <Slider
                value={hoursAutomated}
                onValueChange={setHoursAutomated}
                min={1}
                max={40}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1h</span>
                <span>40h</span>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateROI}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all"
            >
              {t.calculate}
            </button>
          </div>

          {/* Results */}
          {showResults && (
            <div className="mt-12 pt-8 border-t border-border animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {t.results.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <div className="text-sm font-medium text-green-700 dark:text-green-400">
                      {t.results.monthlySavings}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-700 dark:text-green-300">
                    ${Math.round(monthlySavings).toLocaleString()}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-500 mt-1">
                    per month
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <div className="text-sm font-medium text-blue-700 dark:text-blue-400">
                      {t.results.yearlySavings}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                    ${Math.round(yearlySavings).toLocaleString()}
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-500 mt-1">
                    per year
                  </div>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Calculator className="w-6 h-6 text-purple-600" />
                    <div className="text-sm font-medium text-purple-700 dark:text-purple-400">
                      {t.results.roi}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                    {roiMonths} {roiMonths === 1 ? 'month' : 'months'}
                  </div>
                  <div className="text-xs text-purple-600 dark:text-purple-500 mt-1">
                    Break-even point
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <div className="text-sm font-medium text-orange-700 dark:text-orange-400">
                      {t.results.timeRecovered}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-orange-700 dark:text-orange-300">
                    {hoursRecoveredPerYear.toLocaleString()}h
                  </div>
                  <div className="text-xs text-orange-600 dark:text-orange-500 mt-1">
                    {t.results.equivalent} <strong>{fteEquivalent.toFixed(1)}</strong> {t.results.fullTimeEmployees}
                  </div>
                </Card>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a
                  href="/demo"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all"
                >
                  Get Started Now →
                </a>
                <p className="text-xs text-muted-foreground mt-3">
                  Start saving in as little as 7-15 days
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}




