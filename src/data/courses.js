import {
  Brain,
  Baby,
  Puzzle,
  MessageCircle,
  Activity,
  HandHelping,
  Lightbulb,
  Apple,
  HeartPulse,
} from 'lucide-react'

const courses = [
  {
    id: 'adcp',
    title: 'ADCP Diploma',
    subtitle: 'Advanced Diploma in Clinical Psychology',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Master clinical assessment, diagnosis, and therapeutic techniques. Gain hands-on experience with real case studies and supervised practice sessions.',
    icon: Brain,
    featured: true,
  },
  {
    id: 'child-psychology',
    title: 'Diploma in Child Psychology',
    subtitle: 'Understanding Development & Behaviour',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Explore cognitive, emotional, and social development in children. Learn evidence-based interventions for behavioural and developmental challenges.',
    icon: Baby,
    featured: true,
  },
  {
    id: 'autism',
    title: 'Intl. Diploma in Autism (ASD)',
    subtitle: 'Autism Spectrum Disorder Specialist',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Develop expertise in autism assessment, intervention strategies, and inclusive education practices for individuals across the autism spectrum.',
    icon: Puzzle,
    featured: true,
  },
  {
    id: 'speech-therapy',
    title: 'Intl. Diploma in Speech & Language Therapy',
    subtitle: 'Communication Sciences & Disorders',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Learn to assess and treat speech, language, and communication disorders. Cover articulation, fluency, voice, and language-based learning disabilities.',
    icon: MessageCircle,
    featured: false,
  },
  {
    id: 'sensory-integration',
    title: 'Intl. Diploma in Sensory Integration & Reflexes',
    subtitle: 'Neurological Development & Therapy',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Understand sensory processing, integration techniques, and primitive reflex integration. Learn to design effective sensory diets and therapeutic programs.',
    icon: Activity,
    featured: false,
  },
  {
    id: 'physiotherapy',
    title: 'Intl. Diploma in Physiotherapy',
    subtitle: 'Physical Rehabilitation Sciences',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Study musculoskeletal assessment, therapeutic exercises, electrotherapy, and rehabilitation techniques for diverse patient populations.',
    icon: HandHelping,
    featured: false,
  },
  {
    id: 'cbt',
    title: 'Intl. Diploma in CBT',
    subtitle: 'Cognitive Behavioural Therapy',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Master CBT techniques for treating anxiety, depression, PTSD, and more. Learn structured therapy sessions with practical case formulations.',
    icon: Lightbulb,
    featured: false,
  },
  {
    id: 'nutrition',
    title: 'Intl. Diploma in Nutrition & Dietetics',
    subtitle: 'Clinical Nutrition & Health',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Study clinical nutrition, therapeutic diets, and nutritional assessment. Learn to create diet plans for various health conditions and populations.',
    icon: Apple,
    featured: false,
  },
  {
    id: 'public-health',
    title: 'Intl. Diploma in Public Health',
    subtitle: 'Community Health & Epidemiology',
    duration: '6 Months',
    schedule: '2 Days / Week',
    description:
      'Explore epidemiology, health policy, environmental health, and community health promotion. Develop skills in health program planning and evaluation.',
    icon: HeartPulse,
    featured: false,
  },
]

export default courses
