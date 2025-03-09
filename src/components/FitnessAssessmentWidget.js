import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const FitnessAssessmentWidget = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    fitnessLevel: '',
    fitnessGoals: [],
    availability: '',
    dietaryPreferences: '',
    limitations: '',
    name: '',
    email: '',
    phone: ''
  });

  const questions = [
    {
      id: 'fitnessLevel',
      question: 'What is your current fitness level?',
      type: 'radio',
      options: [
        { value: 'beginner', label: 'Beginner - New to regular exercise' },
        { value: 'intermediate', label: 'Intermediate - Exercise 1-3 times per week' },
        { value: 'advanced', label: 'Advanced - Exercise 4+ times per week' },
        { value: 'athlete', label: 'Athlete -  Training several times per week' },
      ]
    },
    {
      id: 'fitnessGoals',
      question: 'What are your main fitness goals? (Select all that apply)',
      type: 'checkbox',
      options: [
        { value: 'weight-loss', label: 'Weight Loss' },
        { value: 'muscle-gain', label: 'Muscle Gain' },
        { value: 'strength', label: 'Strength Improvement' },
        { value: 'endurance', label: 'Endurance Building' },
        { value: 'injury-rehab', label: 'Injury Rehabilitation' },
        { value: 'sports', label: 'Sports Performance' }
      ]
    },
    {
      id: 'availability',
      question: 'How many days per week can you commit to training?',
      type: 'radio',
      options: [
        { value: '1-2', label: '1-2 days' },
        { value: '3-4', label: '3-4 days' },
        { value: '5+', label: '5+ days' }
      ]
    },
    {
      id: 'dietaryPreferences',
      question: 'Do you have any dietary preferences or restrictions?',
      type: 'textarea',
      placeholder: 'E.g., vegetarian, gluten-free, dairy-free, etc.'
    },
    {
      id: 'limitations',
      question: 'Do you have any injuries or physical limitations?',
      type: 'textarea',
      placeholder: 'Please describe any current or past injuries that might affect your training.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedGoals = [...formData.fitnessGoals];
      if (checked) {
        updatedGoals.push(value);
      } else {
        const index = updatedGoals.indexOf(value);
        if (index > -1) {
          updatedGoals.splice(index, 1);
        }
      }
      setFormData({
        ...formData,
        fitnessGoals: updatedGoals
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e && e.preventDefault();

    console.log('Submitting form:', formData);
    // Prepare the form data - convert arrays to strings
    const templateParams = {
      fitnessLevel: formData.fitnessLevel,
      fitnessGoals: formData.fitnessGoals.join(', '),
      availability: formData.availability,
      dietaryPreferences: formData.dietaryPreferences,
      limitations: formData.limitations,
      name: formData.name,
      email: formData.email,
      phone: formData.phone
    };

    // Replace these with your actual EmailJS values
    const serviceId = 'service_q5y5eun';  
    const templateId = 'template_djx1yn9';
    const publicKey = 'c8PQPcUPPAH7Gms6o';
    
    // Send the email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setShowResults(true); // Show success message or results page
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        // Handle error - show error message
        setShowResults(true);
      });
};


  const resetForm = () => {
    setFormData({
      fitnessLevel: '',
      fitnessGoals: [],
      availability: '',
      dietaryPreferences: '',
      limitations: '',
      name: '',
      email: '',
      phone: ''
    });
    setCurrentStep(0);
    setShowResults(false);
  };

  // Generate personalized recommendations based on form data
  const generateRecommendations = () => {
    let recommendations = [];
    
    // Base recommendation on fitness level
    if (formData.fitnessLevel === 'beginner') {
      recommendations.push("Starting with 2 sessions per week focusing on foundational movements and proper form.");
    } else if (formData.fitnessLevel === 'intermediate') {
      recommendations.push("A mix of circuit training and focused strength sessions 3-4 times per week to challenge your current fitness level.");
    } else if (formData.fitnessLevel === 'advanced') {
      recommendations.push("High-intensity training 4-5 times per week with periodized programming to prevent plateaus and optimize results.");
    } else if (formData.fitnessLevel === 'athlete') {
      recommendations.push("Advanced training plan built around the needs of your sport to help you refine performance and boost recovery.");
    }
    
    // Add goal-specific recommendations
    if (formData.fitnessGoals.includes('weight-loss')) {
      recommendations.push("Combination of strength training and HIIT sessions to maximize calorie burn.");
    }
    
    if (formData.fitnessGoals.includes('muscle-gain')) {
      recommendations.push("Progressive overload resistance training with proper nutrition guidance for muscle growth.");
    }
    
    if (formData.fitnessGoals.includes('injury-rehab')) {
      recommendations.push("One-to-one sessions focusing on rehabilitation exercises and building strength around problem areas.");
    }
    
    if (formData.fitnessGoals.includes('endurance')) {
      recommendations.push("Specialized endurance training incorporating interval work and progressive cardio sessions.");
    }
    
    // Add training frequency recommendation
    if (formData.availability === '1-2') {
      recommendations.push("Full-body workouts to maximize efficiency with your limited training time.");
    } else if (formData.availability === '3-4') {
      recommendations.push("Split training routines to target specific muscle groups with adequate recovery time.");
    } else if (formData.availability === '5+') {
      recommendations.push("Comprehensive program including strength, conditioning, mobility, and recovery sessions.");
    }
    
    // Add nutrition recommendation if provided
    if (formData.dietaryPreferences) {
      recommendations.push("Personalized nutrition guidance accounting for your dietary preferences and restrictions.");
    }
    
    return recommendations;
  };

  const renderQuestion = () => {
    if (currentStep >= questions.length) {
      return (
        <div className="contact-details-form">
          <h3>Just a few more details to complete your assessment</h3>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      );
    }

    const question = questions[currentStep];
    
    if (question.type === 'radio') {
      return (
        <div className="question-container">
          <h3>{question.question}</h3>
          <div className="radio-options">
            {question.options.map((option, index) => (
              <div className="radio-option" key={index}>
                <input
                  type="radio"
                  id={option.value}
                  name={question.id}
                  value={option.value}
                  checked={formData[question.id] === option.value}
                  onChange={handleInputChange}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (question.type === 'checkbox') {
      return (
        <div className="question-container">
          <h3>{question.question}</h3>
          <div className="checkbox-options">
            {question.options.map((option, index) => (
              <div className="checkbox-option" key={index}>
                <input
                  type="checkbox"
                  id={option.value}
                  name={question.id}
                  value={option.value}
                  checked={formData.fitnessGoals.includes(option.value)}
                  onChange={handleInputChange}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (question.type === 'textarea') {
      return (
        <div className="question-container">
          <h3>{question.question}</h3>
          <textarea
            name={question.id}
            value={formData[question.id]}
            onChange={handleInputChange}
            placeholder={question.placeholder}
            rows={4}
          />
        </div>
      );
    }
  };

  const renderResults = () => {
    const recommendations = generateRecommendations();
    
    return (
      <div className="results-container">
        <h3>Your Personalised Fitness Recommendations</h3>
        <div className="recommendations">
          {recommendations.map((rec, index) => (
            <div className="recommendation-item" key={index}>
              <Check size={24} className="recommendation-icon" />
              <p>{rec}</p>
            </div>
          ))}
        </div>
        
        <div className="results-action">
          <p>Thanks {formData.name}, Earl will contact you shortly to schedule a call to discuss your results.</p>
          
          <button className="reset-button" onClick={resetForm}>
            Start New Assessment
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fitness-assessment-widget">
            
      <form onSubmit={handleSubmit}>
        {showResults ? (
          renderResults()
        ) : (
          <>
            {renderQuestion()}
            
            <div className="navigation-buttons">
              {
                <button 
                  type="button" 
                  className='nav-button prev' disabled={currentStep === 0} 
                  onClick={prevStep}
                >
                  <ArrowLeft size={20} />
                  <span>Back</span>
                </button>
              } 
              
              <div className="assessment-progress">
                {!showResults && (
                  <div className="progress-indicators">
                    {[...Array(questions.length + 1)].map((_, index) => (
                      <div 
                        key={index}
                        className={`progress-dot ${currentStep >= index ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {currentStep < questions.length + 1 ? (
                <button 
                  type="button" 
                  className="nav-button next"
                  onClick={nextStep}
                  disabled={
                    (currentStep < questions.length && 
                     ((questions[currentStep].type === 'radio' && !formData[questions[currentStep].id]) ||
                      (questions[currentStep].id === 'fitnessGoals' && formData.fitnessGoals.length === 0))) ||
                    (currentStep === questions.length && 
                     (!formData.name || !formData.email || !formData.phone))
                  }
                >
                  <span>{currentStep === questions.length ? 'Submit' : 'Next'}</span>
                  {currentStep === questions.length ? <Send size={20} /> : <ArrowRight size={20} />}
                </button>
              ) : (
                <button type="submit" className="nav-button submit">
                  <span>View Recommendations</span>
                  <Check size={20} />
                </button>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default FitnessAssessmentWidget;