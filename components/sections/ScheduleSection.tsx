import { Clock, Code, Presentation, Trophy } from 'lucide-react';

const Schedule = () => {
  const day1Schedule = [
    { time: '02:00 pm', event: 'Registration & Check-in', icon: <Clock size={24} /> },
    { time: '02:15 AM', event: 'Opening Ceremony & Keynote', icon: <Presentation size={24} /> },
    { time: '02:30 AM', event: 'Hackathon Begins', icon: <Code size={24} /> },
    { time: '06:00 PM', event: 'Evening Snacks', icon: <Clock size={24} /> },
    { time: '07:00 PM', event: 'Mentor Check-ins', icon: <Presentation size={24} /> },
    { time: '09:00 PM', event: 'Dinner', icon: <Clock size={24} /> },
    { time: '10:00 PM', event: 'Overnight Hacking', icon: <Code size={24} /> },
  ];

  const day2Schedule = [
    { time: '08:00 AM', event: 'Breakfast', icon: <Clock size={24} /> },
    { time: '11:00 PM', event: 'Final Sprint', icon: <Code size={24} /> },
    { time: '12:00 PM', event: 'Hackathon Ends - Submission Deadline', icon: <Clock size={24} /> },
    { time: '12:30 PM', event: 'Team Presentations Begin', icon: <Presentation size={24} /> },
    { time: '01:00 PM', event: 'Lunch Break', icon: <Clock size={24} /> },  
    { time: '01:00 PM', event: 'Presentations Continue', icon: <Presentation size={24} /> },
    { time: '03:00 PM', event: 'Judging & Evaluation', icon: <Trophy size={24} /> },
    { time: '03:30 PM', event: 'Winner Announcement', icon: <Trophy size={24} /> },
    
  ];

  return (
    <section id="schedule" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text-glow">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8 cyber-glow"></div>
          <p className="text-gray-400 text-lg">22 hours of innovation across two action-packed days</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="cyber-card p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="cyber-button px-8 py-3 text-xl">
                Day 1 - October 10, 2025
              </div>
            </div>
            <div className="space-y-4">
              {day1Schedule.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-red-600/5 transition-all duration-300 border border-transparent hover:border-red-600/30"
                >
                  <div className="flex-shrink-0 mt-1 text-red-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-red-400 font-semibold">{item.time}</span>
                    </div>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cyber-card p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="cyber-button px-8 py-3 text-xl">
                Day 2 - October 11, 2025
              </div>
            </div>
            <div className="space-y-4">
              {day2Schedule.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-red-600/5 transition-all duration-300 border border-transparent hover:border-red-600/30"
                >
                  <div className="flex-shrink-0 mt-1 text-red-600 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-red-400 font-semibold">{item.time}</span>
                    </div>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 cyber-card p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Important Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">All timings are subject to minor changes based on event flow</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Meals and refreshments will be provided at scheduled times</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Mentors will be available throughout the hackathon for guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
