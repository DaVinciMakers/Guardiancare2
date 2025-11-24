import { Calendar, Clock, User } from 'lucide-react';

export default function AppointmentDashboard() {
  return (
    <div className="bg-gradient-to-br from-card to-background p-8 min-h-[500px]" data-testid="mockup-appointment-dashboard">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Appointment Calendar</h3>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-sm">
            Today
          </div>
          <div className="px-3 py-1 rounded-lg bg-muted/50 text-sm text-muted-foreground">
            Week
          </div>
          <div className="px-3 py-1 rounded-lg bg-muted/50 text-sm text-muted-foreground">
            Month
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={i} className="text-center text-xs text-muted-foreground font-medium py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {[...Array(35)].map((_, i) => {
          const hasAppointment = [4, 11, 12, 18, 19, 25, 26].includes(i);
          const isToday = i === 11;
          
          return (
            <div 
              key={i} 
              className={`aspect-square rounded-lg p-2 transition-all ${
                isToday 
                  ? 'bg-primary/20 border-2 border-primary' 
                  : hasAppointment 
                    ? 'bg-primary/10 border border-primary/30 hover:bg-primary/15' 
                    : 'bg-muted/30 hover:bg-muted/50'
              }`}
            >
              <div className="text-xs font-medium mb-1">{i + 1}</div>
              {hasAppointment && (
                <div className="space-y-0.5">
                  <div className="h-1 w-full rounded-full bg-primary animate-pulse-glow" />
                  <div className="h-1 w-2/3 rounded-full bg-muted-foreground" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Today</span>
          </div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-muted-foreground">Appointments</div>
        </div>
        <div className="p-4 rounded-xl bg-muted border border-border">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Pending</span>
          </div>
          <div className="text-2xl font-bold">3</div>
          <div className="text-xs text-muted-foreground">Confirmations</div>
        </div>
        <div className="p-4 rounded-xl glassmorphism border border-border">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Active</span>
          </div>
          <div className="text-2xl font-bold">48</div>
          <div className="text-xs text-muted-foreground">This week</div>
        </div>
      </div>
    </div>
  );
}
