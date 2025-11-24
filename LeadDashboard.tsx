import { TrendingUp, Users, Mail, PhoneCall } from 'lucide-react';

export default function LeadDashboard() {
  const leads = [
    { name: 'Sarah Johnson', status: 'hot', score: 95, source: 'Website', time: '2m ago' },
    { name: 'Michael Chen', status: 'warm', score: 78, source: 'Referral', time: '15m ago' },
    { name: 'Emma Rodriguez', status: 'warm', score: 72, source: 'Google', time: '1h ago' },
    { name: 'David Thompson', status: 'cold', score: 45, source: 'Social', time: '3h ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'text-foreground bg-primary/20 border-primary/30';
      case 'warm': return 'text-foreground bg-muted border-border';
      case 'cold': return 'text-muted-foreground bg-muted/50 border-border';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <div className="bg-gradient-to-br from-card to-background p-8 min-h-[500px]" data-testid="mockup-lead-dashboard">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Lead Pipeline</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
            All Leads
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-muted/50 text-sm">
            Assigned
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">New Leads</span>
          </div>
          <div className="text-3xl font-bold mb-1">24</div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <TrendingUp className="w-3 h-3" />
            <span>+12% this week</span>
          </div>
        </div>
        <div className="p-4 rounded-xl glassmorphism">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Contacted</span>
          </div>
          <div className="text-3xl font-bold mb-1">18</div>
          <div className="text-xs text-muted-foreground">Auto-responded</div>
        </div>
        <div className="p-4 rounded-xl glassmorphism">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <PhoneCall className="w-4 h-4" />
            <span className="text-sm font-medium">Qualified</span>
          </div>
          <div className="text-3xl font-bold mb-1">12</div>
          <div className="text-xs text-muted-foreground">Ready to close</div>
        </div>
        <div className="p-4 rounded-xl glassmorphism">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Conversion</span>
          </div>
          <div className="text-3xl font-bold mb-1">68%</div>
          <div className="text-xs text-muted-foreground">+8% increase</div>
        </div>
      </div>

      <div className="space-y-3">
        {leads.map((lead, index) => (
          <div 
            key={index}
            className="p-4 rounded-xl glassmorphism hover:border-primary/30 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                {lead.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="font-medium">{lead.name}</div>
                <div className="text-sm text-muted-foreground">Source: {lead.source} • {lead.time}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium mb-1">Lead Score</div>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${lead.score}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold">{lead.score}</span>
                </div>
              </div>
              <div className={`px-3 py-1.5 rounded-lg border text-xs font-medium uppercase ${getStatusColor(lead.status)}`}>
                {lead.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
