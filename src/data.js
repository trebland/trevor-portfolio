// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your resume. Everything lives here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Trevor Bland',
  title: 'Full Stack Software Engineer',
  tagline:
    'Full stack engineer who builds and ships production web applications end to end — front-end, back-end, and the cloud infrastructure underneath.',
  location: '',
  email: 'bland.trevor96@gmail.com',
  // Shown as a green "available" badge in the hero. Set to '' to hide it.
  seeking: 'Actively seeking new opportunities',
  // Drop a photo in /public and set the filename here, or leave '' for initials.
  photo: '',
  // Drop your resume PDF in /public and set the filename here (e.g. '/resume.pdf').
  // Leave '' to hide the download button.
  resumePdf: '/TrevorBland_resume.pdf',
  links: {
    github: 'https://github.com/trebland', // TODO: replace with your real GitHub URL
    linkedin: 'https://www.linkedin.com/in/trevor-bland-94b2941b4', // TODO: replace with your real LinkedIn URL
    website: 'https://www.docfoxx.com',
  },
}

// Quick-hit numbers shown under the hero. Edit freely.
export const stats = [
  { value: '8', label: 'Years experience' },
  { value: '6', label: 'Companies' },
  { value: 'Full Stack', label: 'Front to infra' },
]

export const about = `Full stack software engineer with 8 years of experience designing,
building, and deploying web applications across real estate, marketing, and IoT.
Comfortable across the stack — TypeScript/React on the front end, NestJS/Node and
Java/.NET on the back end, and AWS/GCP for hosting and infrastructure. I've owned
large portions of high-traffic products, mentored teammates, and cut data delays
from minutes to near-instant.`

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Keller Williams Realty Inc.',
    period: 'Sep 2022 — Mar 2026',
    location: 'Remote',
    points: [
      'Built large portions of www.kw.com, a mixed front-end solution using Flutter alongside a monolithic HandlebarsJS and Java (Brightspot CMS) stack.',
      'Created a NestJS + TypeScript service wrapping the legacy Java CMS API, laying the groundwork to incrementally replace the underlying CMS.',
      'Reduced data delays for most of our production data from 15 minutes to near-instant by replacing a replication cron job with event-driven updates pushed via a cloud function.',
      'Standardized PubSub messaging by designing ProtoBuf models to reduce cross-team data errors and miscommunication.',
      'Mentored QA engineers in test automation — IntelliJ with Selenium, Cucumber, and Java using Gherkin syntax.',
      'Wrote and ran QA/QAT/Prod data scripts in Java, validated locally via multi-container Docker setups that replicated the QA environment.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'I-CON Systems, LLC.',
    period: 'Nov 2021 — Sep 2022',
    location: 'Orlando, FL (Hybrid)',
    points: [
      'Built an internal fixture-assembly assistant that streamlined device assembly by breaking it into validated, sequential steps.',
      'Developed a water-fixture management app on a Blazor + ReactiveUI front end with FluentValidation, and C#/.NET back end with JSInterop.',
      'Covered the codebase with unit and integration tests using Moq and xUnit, and hosted the application on Azure.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Gravitational Marketing',
    period: 'Oct 2020 — Nov 2021',
    location: 'Remote',
    points: [
      'Built Call Commando 2.0, a CRM/lead-management app that improved lead interactions and profitability by serving leads on a configurable cadence driven by agent activity.',
      'Maintained and updated WordPress sites that served as the company’s primary lead-generation tool.',
    ],
  },
  {
    role: 'Android Developer',
    company: 'National Metering Services, Inc.',
    period: 'Aug 2019 — Jan 2020',
    location: '',
    points: [
      'Built a prototype RFID scanning application to read meters without removing meter caps, aimed at streamlining day-to-day operations for meter technicians.',
      'Researched custom plastic materials engineered to let RFID signals pass through the meter cap.',
      'Developed the prototype in Android and Java, integrating barcode SDKs for scanning.',
    ],
  },
  {
    role: 'Help Desk Specialist',
    company: 'Retail Technologies Corporation',
    period: 'Jun 2018 — Dec 2018',
    location: '',
    points: [
      'Served as first response on the phones for any technical issues, triaging and resolving them or routing them appropriately.',
      'Ran full regression tests on new releases to verify stability before they shipped.',
      'Wrote and executed SQL queries and updates to investigate and resolve data issues.',
      'Handled critical breakages and determined the appropriate escalation path for each.',
    ],
  },
]

export const projects = [
  {
    name: 'Operation Portal',
    description:
      'Project manager and front-end developer for a mobile app built for Orlando Children’s Church to support the responsible care of at-risk youth. The app tracked dietary and behavioral traits so the organization could better serve children. Built the Flutter front end and led a distributed team of 5 through COVID — delegating roles, coordinating remotely, and keeping deliverables on schedule.',
    link: 'https://github.com/trebland/OperationPortal',
    tags: ['Flutter', 'Project Management', 'Mobile'],
  },
  {
    name: 'Doc Foxx',
    description:
      'Designed, developed, and deployed a full website for Doc Foxx, a Christian organization. React + TypeScript + Vite front end; NestJS + TypeScript back end running under pm2 and Nginx. Hosted on AWS (EC2, S3, CloudFront) with SES for contact email, Route 53 for DNS/subdomains, and IAM-provisioned credentials.',
    link: 'https://www.docfoxx.com',
    tags: ['React', 'TypeScript', 'NestJS', 'AWS', 'Nginx'],
  },
  {
    name: 'Bash Party Game',
    description:
      'A functional multiplayer prototype built in Godot, inspired by the party games of Warcraft III. Players connect directly to one another and play through a set of party games. Building it deepened my understanding of RPCs and server/client authority in a networked context.',
    link: 'https://tibtibs.itch.io/bash-party-game',
    tags: ['Godot', 'Multiplayer', 'Game Dev'],
  },
]

export const skills = [
  // Languages
  'TypeScript',
  'JavaScript',
  'Java',
  'C#',
  'PHP',
  'HTML/CSS',
  'HandlebarsJS',
  'GraphQL',
  // Technologies
  'React',
  'NestJS',
  'Node.js',
  'Symfony',
  'Flutter',
  'Android',
  '.NET',
  'Godot',
  // Cloud & infra
  'AWS',
  'GCP',
  'Pub/Sub',
  'Docker',
  'Azure',
  // Data
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  // Tools
  'Git',
  'GitHub',
  'Bash',
]

export const education = [
  {
    degree: 'B.S. in Computer Science',
    school: 'University of Central Florida',
    period: 'Sep 2016 — May 2020',
  },
  {
    degree: 'Computer Science — Semester Abroad',
    school: 'Hong Kong Polytechnic University',
    period: 'Jan 2019 — May 2019',
  },
]
