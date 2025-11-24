import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, Clock, DollarSign, Zap } from 'lucide-react';

export default function ROICalculator() {
  const [leadsNeeded, setLeadsNeeded] = useState(5000);
  const [currentCostPerLead, setCurrentCostPerLead] = useState(15);
  
  const guardianCareMonthlyFee = 997;
  const guardianCareLeadsPerMonth = 10000;
  
  // Calculate Guardian Care cost per lead based on actual leads consumed (capped at guaranteed supply)
  // We only compare costs for leads Guardian can actually supply (max 10K)
  const effectiveLeadsForCalc = Math.min(leadsNeeded, guardianCareLeadsPerMonth);
  const guardianCareCostPerLead = effectiveLeadsForCalc > 0 ? guardianCareMonthlyFee / effectiveLeadsForCalc : guardianCareMonthlyFee / guardianCareLeadsPerMonth;
  
  // Compare costs only for the effective leads (capped at what Guardian can supply)
  const currentMonthlyCostForEffectiveLeads = effectiveLeadsForCalc * currentCostPerLead;
  const monthlySavings = currentMonthlyCostForEffectiveLeads - guardianCareMonthlyFee;
  const annualSavings = monthlySavings * 12;
  const savingsPercentage = currentMonthlyCostForEffectiveLeads > 0 ? ((monthlySavings / currentMonthlyCostForEffectiveLeads) * 100) : 0;

  return (
    <section className="py-32 px-6 relative overflow-hidden" data-testid="section-roi-calculator">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-muted-foreground/20 rounded-full blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
            data-testid="heading-roi-title"
          >
            Calculate Your Lead Gen ROI
          </h2>
          <p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-roi-description"
          >
            See how much you save with Guardian Care versus traditional lead generation methods
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="backdrop-blur-xl bg-card/50 border-border/50" data-testid="card-calculator-inputs">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Your Current Lead Gen Costs
              </CardTitle>
              <CardDescription>
                Enter your current lead generation metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="appointments" data-testid="label-appointments">
                  Leads Needed Per Month
                </Label>
                <Input
                  id="appointments"
                  type="number"
                  value={leadsNeeded}
                  onChange={(e) => setLeadsNeeded(Number(e.target.value))}
                  min="0"
                  className="bg-background/50"
                  data-testid="input-appointments"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cost-per-lead" data-testid="label-minutes">
                  Current Cost Per Lead ($)
                </Label>
                <Input
                  id="cost-per-lead"
                  type="number"
                  value={currentCostPerLead}
                  onChange={(e) => setCurrentCostPerLead(Number(e.target.value))}
                  min="0"
                  className="bg-background/50"
                  data-testid="input-minutes"
                />
                <p className="text-xs text-muted-foreground">
                  Average B2B lead costs: $10-$50+
                </p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Guardian Care Monthly Fee:</span>
                    <span className="font-semibold">${guardianCareMonthlyFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Leads Included:</span>
                    <span className="font-semibold text-primary">{guardianCareLeadsPerMonth.toLocaleString()}+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cost Per Lead:</span>
                    <span className="font-semibold text-primary">${guardianCareCostPerLead.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card 
              className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-muted/20 border-primary/30"
              data-testid="card-time-savings"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Cost Savings Per Lead</p>
                    <p className="text-4xl font-bold tracking-tight" data-testid="text-hours-saved">
                      ${(currentCostPerLead - guardianCareCostPerLead).toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      ${currentCostPerLead.toFixed(2)} → ${guardianCareCostPerLead.toFixed(2)} per lead
                    </p>
                  </div>
                  <DollarSign className="w-12 h-12 text-primary opacity-50" />
                </div>
              </CardContent>
            </Card>

            <Card 
              className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-muted/20 border-primary/30"
              data-testid="card-monthly-savings"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Monthly Savings</p>
                    <p className="text-4xl font-bold tracking-tight" data-testid="text-monthly-savings">
                      ${monthlySavings > 0 ? monthlySavings.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '0'}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {savingsPercentage > 0 ? `${savingsPercentage.toFixed(0)}% cost reduction` : 'Enter higher cost per lead'}
                    </p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-primary opacity-50" />
                </div>
              </CardContent>
            </Card>

            <Card 
              className="backdrop-blur-xl bg-gradient-to-br from-primary/20 to-muted-foreground/20 border-primary/50"
              data-testid="card-annual-savings"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Annual Savings</p>
                    <p className="text-5xl font-bold tracking-tight text-primary" data-testid="text-annual-savings">
                      ${annualSavings > 0 ? annualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '0'}
                    </p>
                    <p className="text-sm text-foreground mt-2 font-medium">
                      Plus {guardianCareLeadsPerMonth.toLocaleString()}+ verified leads monthly
                    </p>
                  </div>
                  <Zap className="w-12 h-12 text-primary opacity-70" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to see these savings in your business?
          </p>
          <a 
            href="#booking" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover-elevate active-elevate-2 transition-all"
            data-testid="link-contact-from-calculator"
          >
            Book Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
