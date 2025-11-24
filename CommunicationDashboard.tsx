import { Send, Mail, MessageSquare, Clock } from 'lucide-react';

export default function CommunicationDashboard() {
  const messages = [
    { 
      customer: 'Alice Cooper', 
      message: 'Is the appointment confirmed for tomorrow?', 
      time: '2m ago',
      status: 'auto-replied',
      type: 'email'
    },
    { 
      customer: 'Bob Smith', 
      message: 'Thank you for the quick response!', 
      time: '15m ago',
      status: 'resolved',
      type: 'sms'
    },
    { 
      customer: 'Carol Davis', 
      message: 'Can I reschedule my appointment?', 
      time: '1h ago',
      status: 'auto-replied',
      type: 'email'
    },
  ];

  return (
    <div className="bg-gradient-to-br from-card to-background p-8 min-h-[500px]" data-testid="mockup-communication-dashboard">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Customer Communications</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          <span className="text-sm text-muted-foreground">Auto-responses active</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Send className="w-4 h-4" />
            <span className="text-sm font-medium">Sent Today</span>
          </div>
          <div className="text-3xl font-bold">156</div>
          <div className="text-xs text-muted-foreground">98% automated</div>
        </div>
        <div className="p-4 rounded-xl glassmorphism">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Emails</span>
          </div>
          <div className="text-3xl font-bold">94</div>
          <div className="text-xs text-muted-foreground">100% responded</div>
        </div>
        <div className="p-4 rounded-xl glassmorphism">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">SMS</span>
          </div>
          <div className="text-3xl font-bold">62</div>
          <div className="text-xs text-muted-foreground">Avg 30s response</div>
        </div>
        <div className="p-4 rounded-xl glassmorphism">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Avg Response</span>
          </div>
          <div className="text-3xl font-bold">1.2m</div>
          <div className="text-xs text-muted-foreground">-45s improvement</div>
        </div>
      </div>

      <div className="space-y-3">
        {messages.map((msg, index) => (
          <div 
            key={index}
            className="p-5 rounded-xl glassmorphism hover:border-primary/30 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  {msg.customer.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium">{msg.customer}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-2">
                    {msg.type === 'email' ? <Mail className="w-3 h-3" /> : <MessageSquare className="w-3 h-3" />}
                    {msg.time}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {msg.status === 'auto-replied' && (
                  <div className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs text-primary font-medium flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Auto-replied
                  </div>
                )}
                {msg.status === 'resolved' && (
                  <div className="px-2 py-1 rounded-md bg-muted border border-border text-xs text-foreground font-medium">
                    Resolved
                  </div>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground pl-13">{msg.message}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-muted/30 border border-border/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium mb-0.5">Automation Active</div>
          <div className="text-xs text-muted-foreground">All customer inquiries are being handled automatically with personalized responses</div>
        </div>
      </div>
    </div>
  );
}

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
