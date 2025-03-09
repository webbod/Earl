// This schema markup should be added to the head of the document
// It helps search engines understand the business and improves local SEO

const SEOSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Earl James Personal Training Coventry",
  "image": "https://yourwebsite.com/logo.png",
  "url": "https://www.earljames-pt.co.uk",
  "@id": "https://www.earljames-pt.co.uk",
  "telephone": "+447792351116",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Xcel Leisure Centre",
    "addressLocality": "Coventry",
    "postalCode": "CV4 8DY",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.4068,
    "longitude": -1.5197
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "06:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/earl.james.5473",
    "https://www.instagram.com/ejamespt"
  ],
  "priceRange": "£9 - £90",
  "description": "Earl James is Coventry's premier personal trainer, bringing elite Royal Marine training methods to fitness. Specializing in circuit training, one-to-one personal training, nutrition coaching, and rehabilitation, Earl helps clients achieve transformative, sustainable results.",
  "keywords": "personal trainer coventry, fitness coach coventry, royal marine fitness, circuit training coventry, nutrition coaching coventry, injury rehabilitation coventry, elite personal training, military fitness coventry",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personal Training Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "One-to-One Personal Training",
          "description": "Personalized training sessions tailored to your specific goals with elite-level coaching from a former Royal Marine.",
          "price": "50.00",
          "priceCurrency": "GBP",
          "timeRequired": "PT45M"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Group Circuit Training",
          "description": "Military-inspired group sessions designed to push your limits in a supportive team environment.",
          "price": "9.00",
          "priceCurrency": "GBP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nutrition Coaching",
          "description": "Science-based nutrition plans focused on sustainable, long-term health and performance improvement."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Injury Rehabilitation",
          "description": "Specialized training for recovery from injuries, with personalized programs from a trainer who has overcome serious injury."
        }
      }
    ]
  },
  "makesOffer": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "itemOffered": {
      "@type": "Service",
      "name": "Free Fitness Assessment",
      "description": "Comprehensive evaluation of current fitness level, goals, and personalized program recommendations."
    }
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah M."
      },
      "reviewBody": "Earl's military approach to fitness completely transformed my outlook. I've lost 14kg and gained so much confidence. His nutrition advice was the game-changer I needed."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "James T."
      },
      "reviewBody": "After my injury, I thought intense fitness was behind me. Earl's rehabilitation knowledge and personalized program got me back to peak performance. Worth every penny."
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": "Coventry"
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.earljames-pt.co.uk/book",
      "inLanguage": "en-GB",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/IOSPlatform",
        "http://schema.org/AndroidPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Book a Personal Training Session"
    }
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Earl James",
  "jobTitle": "Personal Trainer",
  "description": "Earl James is a Level 4 qualified personal trainer and former Royal Marine with over 10 years of fitness experience. Specializing in circuit training, strength & conditioning, and rehabilitation.",
  "image": "https://yourwebsite.com/earl-james.jpg",
  "url": "https://www.earljames-pt.co.uk",
  "telephone": "+447792351116",
  "email": "earl_james@hotmail.co.uk",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coventry",
    "addressCountry": "GB"
  },
  "worksFor": {
    "@type": "LocalBusiness",
    "name": "Earl James Personal Training Coventry",
    "url": "https://www.earljames-pt.co.uk"
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Royal Marines"
  },
  "knowsAbout": [
    "Personal Training",
    "Circuit Training",
    "Strength & Conditioning",
    "Nutrition Coaching",
    "Injury Rehabilitation",
    "Boxing",
    "Kettlebell Training",
    "Military Fitness"
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Level 4 Personal Trainer"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate",
      "name": "Diploma in Neuro-Linguistic Programming (NLP)"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate",
      "name": "Diploma in Life Coaching"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate",
      "name": "GP Medical Referral Specialist"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate",
      "name": "Master Kettlebell Instructor"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate",
      "name": "UKSCA Certified in Strength & Conditioning"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/earl.james.5473",
    "https://www.instagram.com/ejamespt"
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Earl James different from other personal trainers in Coventry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earl brings unique Royal Marine discipline and training methods to his personal training approach. With over a decade of military experience and his own journey overcoming a serious back injury, Earl offers unparalleled expertise in both high-performance training and rehabilitation. His Level 4 qualification and numerous specialist certifications ensure you receive elite-level coaching tailored to your specific goals."
      }
    },
    {
      "@type": "Question",
      "name": "How much does personal training cost in Coventry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earl offers several training options to fit different budgets. One-to-one personal training sessions are £50 for 45 minutes. Group circuit training sessions start at £9 per session, with package discounts available (£50 for 10 sessions or £90 for unlimited monthly sessions). Earl also offers a free initial fitness assessment to help determine the best approach for your goals."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer nutrition coaching in Coventry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Earl provides comprehensive nutrition coaching both in-person and online. As a qualified Body Type Nutrition Coach, Earl creates sustainable, personalized nutrition plans that complement your training regimen. Unlike crash diets, Earl's approach focuses on long-term habits and lifestyle changes to create lasting results while still enjoying food."
      }
    },
    {
      "@type": "Question",
      "name": "Can Earl help with injury rehabilitation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Earl specializes in rehabilitation training, drawing from his personal experience recovering from a serious back injury sustained during military service. As a GP Medical Referral Specialist and Postural Assessment & Corrective Exercise Instructor, Earl creates safe, effective programs to help you recover from injuries and build strength to prevent future problems."
      }
    },
    {
      "@type": "Question",
      "name": "Where are the training sessions held in Coventry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earl's in-person training sessions take place at Xcel Leisure Centre in Coventry. He also offers online training and virtual sessions via Zoom for clients who prefer to train from home or have scheduling constraints."
      }
    }
  ]
}
</script>
`;

export default SEOSchema;