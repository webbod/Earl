import React, { useState } from 'react';
import { Clock, MapPin, Users, Dumbbell, Heart, Flame, Zap, UserSearch, Weight } from 'lucide-react';

const TrainingSchedule = () => {
  const [viewMode, setViewMode] = useState('gym'); // 'gym' or 'zoom'
  
  // Schedule data based on the circuit training document
  const trainingSchedule = [
    {
      day: 'Monday',
      title: 'Upper Body Assault',
      sessions: [
        {
          time: '6:15 AM',
          location: 'gym',
          description: 'Upper Body HIIT with moderate weights',
          format: 'Matrix Format (20-30 Second Rounds)',
          exercises: ['Overhead Press', 'Bench Press', 'Rows', 'Push-ups', 'Dips'],
          finisher: 'Bicep Curl and Skull Crusher Complex',
          icon: <Dumbbell size={24} />
        },
        {
          time: '7:30 AM',
          location: 'zoom',
          description: 'Explosive Upper Body Training',
          format: 'Matrix Format (20-30 Second Rounds)',
          exercises: ['Dumbbell Variations', 'Explosive Push-ups', 'Resistance Band Work'],
          finisher: 'Arm Farm Challenge',
          icon: <Zap size={24} />
        }
      ]
    },
    {
      day: 'Tuesday',
      title: 'Lower Body Siege',
      sessions: [
        {
          time: '6:15 AM',
          location: 'gym',
          description: 'Lower Body HIIT with full range of motion',
          format: 'Matrix Format (20-30 Second Rounds)',
          exercises: ['Lunges', 'Squats', 'Kettlebell Swings', 'Broad Jumps', 'Box Step-Ups'],
          finisher: 'Bear Crawls, Monkey Crawls',
          icon: <Weight size={24} />
        },
        {
          time: '7:30 AM',
          location: 'zoom',
          description: 'Bodyweight Power',
          format: 'Matrix Format (20-30 Second Rounds)',
          exercises: ['Jump Squats', 'Split Lunges', 'Glute Bridges', 'Calf Raises'],
          finisher: 'AMRAP Leg Burner',
          icon: <Zap size={24} />
        }
      ]
    },
    {
      day: 'Wednesday',
      title: 'Full-Body Endurance',
      sessions: [
        {
          time: '6:15 AM',
          location: 'gym',
          description: 'Full Body endurance circuit training',
          format: 'Pyramid Format (2-12, 12-2 Reps)',
          exercises: ['Push-ups', 'Burpees', 'Sit-ups', 'Squats', 'Shuttle Runs'],
          finisher: 'Run out the clock',
          icon: <Heart size={24} />
        }
      ]
    },
    {
      day: 'Thursday',
      title: 'Full-Body Endurance',
      sessions: [
        {
          time: '7:30 AM',
          location: 'zoom',
          description: 'Replicates Wednesday\'s intensity from home',
          format: 'Pyramid Format (2-12, 12-2 Reps)',
          exercises: ['Push-Ups', 'Squat Thrusts', 'Burpees', 'Sit-Ups', 'Squats', 'Kettlebell Swings'],
          finisher: 'Last Man Standing Challenge',
          icon: <Heart size={24} />
        }
      ]
    },
    {
      day: 'Friday',
      title: 'Boxing Circuit Blitz',
      sessions: [
        {
          time: '6:15 AM',
          location: 'gym',
          description: 'Boxing drills, partner work, and high-intensity conditioning',
          format: 'Partner Conditioning',
          exercises: ['Shadow Boxing', 'Pad Work', 'Footwork Drills', 'Defense Techniques', 'Conditioning Rounds'],
          finisher: 'Abs on fire with a high-volume core workout',
          icon: <UserSearch size={24} />
        }
      ]
    },
    {
      day: 'Saturday',
      title: '12-Station Burner',
      sessions: [
        {
          time: '9:00 AM',
          location: 'gym',
          description: 'Complete circuit challenge testing strength, endurance, and mental fortitude',
          format: '12 Stations (30-40 Second Rounds)',
          exercises: [
            'Prowler Push', 'Clean to Press', 'Farmers Carry', 'Wall Balls', 
            'Kettlebell Swings', 'Lunge Walk', 'Box Jumps', 'Rollout', 
            'Dips', 'Push-Ups', 'Squat Thrusts', 'Abs'
          ],
          finisher: '10 reps per exercise, lightning-speed round',
          icon: <Flame size={24} />
        }
      ]
    },
    {
      day: 'Sunday',
      title: 'Buddy Challenge',
      sessions: [
        {
          time: '10:00 AM',
          location: 'gym',
          description: 'Battle your limits with intense partner workout',
          format: '8 Stations (200m Run Between Stations)',
          exercises: ['50 reps per station with 200m sprint between each'],
          finisher: 'Team Challenge Finale',
          icon: <Users size={24} />
        }
      ]
    }
  ];

  const filteredSessions = viewMode === 'all' 
    ? trainingSchedule 
    : trainingSchedule.map(day => ({
        ...day,
        sessions: day.sessions.filter(session => session.location === viewMode)
      }));

  return (
    <div className="training-schedule">
      <div className="schedule-header">
        <h2>Weekly Training Schedule</h2>
        <p className="schedule-description">
          Join Earl's daily training sessions at Xcel Leisure Centre or from home via Zoom.
          Each day focuses on different aspects of fitness to build a complete, balanced physique.
        </p>
        
        <div className="view-toggle">
          <button 
            className={`toggle-button ${viewMode === 'gym' ? 'active' : ''}`}
            onClick={() => setViewMode('gym')}
          >
            <MapPin size={18} />
            <span>In-Gym Sessions</span>
          </button>
          <button 
            className={`toggle-button ${viewMode === 'zoom' ? 'active' : ''}`}
            onClick={() => setViewMode('zoom')}
          >
            <Users size={18} />
            <span>Zoom Sessions</span>
          </button>
        </div>
      </div>
      
      <div className="schedule-container">
        {filteredSessions.map((day, index) => (
          <div className={`schedule-day ${day.sessions.length === 0 ? 'no-sessions' : ''}`} key={index}>
            <h3 className="day-title">{day.day}</h3>
            <div className="day-sessions">
              {day.sessions.length > 0 ? (
                day.sessions.map((session, sIdx) => (
                  <div className="session-card" key={sIdx}>
                    <div className="session-header">
                      <div className="session-title">
                        <h4>{day.title}</h4>
                      </div>
                      <div class="session-sub-header">
                        <div className="session-icon">
                          {session.icon}
                        </div>
                        <div className="session-meta">
                          <div className="meta-item">
                            <Clock size={16} />
                            <span>{session.time}</span>
                          </div>
                          <div className="meta-item">
                            <MapPin size={16} />
                            <span>{session.location === 'gym' ? 'Xcel Centre' : 'Zoom'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="session-details">
                      <p className="session-description">{session.description}</p>
                      <p className="session-format"><strong>Format:</strong> {session.format}</p>
                      <div className="session-exercises">
                        <strong>Sample exercises:</strong>
                        <ul className="exercise-list">
                          {session.exercises.map((exercise, eIdx) => (
                            <li key={eIdx}>{exercise}</li>
                          ))}
                        </ul>
                      </div>
                      {session.finisher && (
                        <p className="session-finisher"><strong>Finisher:</strong> {session.finisher}</p>
                      )}
                    </div>
                    <div className="session-action">
                      <a href="#contact" className="book-button">Book This Session</a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-sessions">
                  <p>No {viewMode} sessions on {day.day}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="pricing-summary">
        <div className="pricing-item">
          <span className="price">£9</span>
          <span className="unit">per session</span>
        </div>
        <div className="pricing-item">
          <span className="price">£50</span>
          <span className="unit">10 sessions</span>
        </div>
        <div className="pricing-item highlight">
          <span className="price">£90</span>
          <span className="unit">unlimited monthly</span>
        </div>
      </div>

      <div className="schedule-cta">
        <a href="#contact" className="cta-button primary">Book Your First Session</a>
        <a href="#assessment" className="cta-button secondary">Get Free Assessment</a>
      </div>
    </div>
  );
};

export default TrainingSchedule;