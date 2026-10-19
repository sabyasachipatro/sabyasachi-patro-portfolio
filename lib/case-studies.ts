
export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  oneLiner: string;
  description: string;
  prototypeUrl?: string;
  presentationUrl?: string;
  featured?: boolean;
  problem?: string;
  primaryUsers?: string;
  secondaryUsers?: string;
  research?: string[];
  journey?: { stage: string; detail: string }[];
  opportunities?: string[];
  solution?: string[];
  mvp?: string[];
  metrics?: { metric: string; type: "north star" | "supporting" }[];
  risks?: string[];
  rollout?: string[];
  highlights?: string[];
  assumptionsNote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "indeed-fitcheck-assistant",
    title: "Indeed FitCheck Assistant (IFCA)",
    category: "AI Product",
    tags: [
      "AI Product",
      "Career Tech",
      "Resume Matching",
      "Candidate Experience",
    ],
    oneLiner:
      "An AI-powered job-fit assistant that helps candidates understand their alignment with a job before applying.",
    description:
      "Indeed FitCheck Assistant explores how AI can help job seekers compare a job's requirements with evidence from their resume and profile, understand strong and partial matches, identify missing evidence, and make more informed application decisions.",

    prototypeUrl:
      "https://indeed-fitcheck-frontend.vercel.app/",

    presentationUrl:
      "https://docs.google.com/document/d/1AfzuW6IPV8Me5qXfPMlrLRTXBkQNet00t6pJgIowmQQ/edit?usp=sharing",

    featured: true,

    problem:
      "Job seekers may struggle to decide whether to apply because job descriptions can be lengthy, requirements can be difficult to interpret, and candidates may not know how their existing experience maps to the role. This uncertainty can make it harder to assess fit and prepare a relevant application.",

    primaryUsers:
      "Job seekers evaluating whether a role aligns with their experience",
    secondaryUsers:
      "Candidates who want to understand skill gaps and improve their applications",

    research: [
      "Hypothesis: candidates want more than a generic match percentage; they need to understand which job requirements are supported by their experience.",
      "Hypothesis: showing missing or unclear evidence could help candidates decide what to improve before applying.",
      "The product should distinguish documented evidence from missing information rather than infer qualifications that are not supported by a candidate's profile.",
    ],

    journey: [
      {
        stage: "Explore",
        detail:
          "The candidate reviews a job listing and wants to understand whether their experience aligns with the role.",
      },
      {
        stage: "Match",
        detail:
          "FitCheck compares the listed requirements with information available in the candidate's resume and profile.",
      },
      {
        stage: "Understand",
        detail:
          "The candidate reviews strong matches, partial matches, and requirements where evidence is missing or unclear.",
      },
      {
        stage: "Ask",
        detail:
          "The candidate asks FitCheck questions about the job requirements and their documented experience.",
      },
      {
        stage: "Decide",
        detail:
          "The candidate uses the explanation to decide whether to apply or improve their application materials.",
      },
    ],

    opportunities: [
      "Make job requirements easier to compare with a candidate's documented experience.",
      "Explain why a requirement appears to match rather than relying on an unexplained score.",
      "Distinguish strong evidence, partial evidence, and missing information.",
      "Allow candidates to ask follow-up questions about their fit.",
      "Support informed application decisions without predicting hiring outcomes.",
    ],

    solution: [
      "FitCheck Score: a summary of alignment between available candidate evidence and job requirements.",
      "Match Breakdown: organize requirements into strong matches, partial matches, and considerations that need further evidence.",
      "Match Details: explain the evidence behind individual requirement assessments.",
      "Ask FitCheck: provide a conversational interface for job-specific questions.",
      "Resume Intelligence: help candidates understand how their resume represents relevant experience.",
    ],

    mvp: [
      "A job-details screen with a concise FitCheck summary.",
      "A requirement-level breakdown with explanations grounded in available profile evidence.",
      "A conversational assistant for follow-up questions about the selected job.",
      "Clear indications when information is missing or insufficient to assess a requirement.",
      "A responsive interface connecting the prototype frontend to its AI backend.",
    ],

    metrics: [
      {
        metric:
          "Percentage of candidates who report better understanding of job requirements after using FitCheck",
        type: "north star",
      },
      {
        metric:
          "Percentage of match explanations rated as clear and evidence-based",
        type: "supporting",
      },
      {
        metric:
          "Percentage of users who complete a fit review and reach an application decision",
        type: "supporting",
      },
    ],

    risks: [
      "Incomplete or outdated resumes may lead to inaccurate assessments.",
      "A match score may be misunderstood as a prediction of hiring success.",
      "AI may infer skills or qualifications that the candidate has not actually demonstrated.",
      "Sensitive personal information must be handled carefully.",
      "The product must avoid presenting missing evidence as proof that a candidate lacks a skill.",
    ],

    rollout: [
      "Begin with a focused prototype for evaluating one selected job against the candidate's available resume and profile information.",
      "Evaluate explanation clarity and evidence accuracy before expanding the assessment workflow.",
      "Use candidate feedback to improve requirement mapping and the handling of incomplete information.",
    ],

    highlights: [
      "AI-assisted job-fit assessment designed to help candidates make more informed application decisions.",
      "Requirement-level explanations instead of relying only on a single match score.",
      "Clear distinction between supported matches, partial matches, and missing evidence.",
      "Conversational Ask FitCheck experience for follow-up questions.",
      "Prototype frontend connected to a Gemini-powered backend for AI responses.",
      "Product direction prioritizes evidence-based explanations and avoids predicting hiring outcomes.",
    ],

    assumptionsNote:
      "Indeed FitCheck Assistant is a portfolio product concept and prototype. The proposed metrics are not measured results, and the fit assessment is intended to support candidate understanding—not to predict hiring decisions or guarantee interview outcomes.",
  },

    {
    slug: "apollo-medicine-companion",
    title: "Apollo Medicine Companion",
    category: "AI Product",
    tags: ["AI Product", "Healthcare Workflow", "APM Portfolio"],
    oneLiner:
      "An AI-assisted medicine companion that simplifies the full medicine journey — from purchase to dosage to refills.",
    description:
      "An AI-assisted medicine organization and reminder app designed to simplify the complete medicine journey, from purchasing medicines and accessing prescription details to managing dosage timings and updating prescriptions.",
    prototypeUrl: "https://apollo-medicine-companion.vercel.app/",
    presentationUrl:
      "https://docs.google.com/document/d/17ZraGCWSENNoPrIhegNR6dyeVmVUlz43apX504kYqko/edit?usp=sharing",
    featured: true,

    problem:
      "Managing medicines for a household is fragmented today: prescriptions live in a doctor's handwriting or a PDF, refill timing is tracked in someone's head, and dosage reminders often live in generic phone alarms with no context. This creates additional challenges for caregivers managing medicines for someone else and older adults managing several medicines at once.",

    primaryUsers: "Busy parents and family caregivers",
    secondaryUsers: "Older adults",

    research: [
      "Assumption: caregivers rely on a mix of memory, phone reminders, and physical pill organizers to manage medicines.",
      "Assumption: prescription details such as dosage, duration, and refill dates can be difficult to transfer accurately into a reminder schedule.",
    ],

    journey: [
      {
        stage: "Prescribe",
        detail:
          "A doctor issues or updates a prescription, which the caregiver receives physically or digitally.",
      },
      {
        stage: "Digitize",
        detail:
          "The caregiver adds prescription details manually or through a scanning workflow.",
      },
      {
        stage: "Purchase",
        detail:
          "The app helps the caregiver understand what needs to be reordered and when.",
      },
      {
        stage: "Take",
        detail:
          "Medicine reminders help users follow their intended dosage schedules.",
      },
      {
        stage: "Renew",
        detail:
          "Refill reminders help users prepare for upcoming medicine requirements.",
      },
    ],

    opportunities: [
      "Reduce manual re-entry between a prescription and a usable reminder schedule.",
      "Give caregivers a consolidated view across multiple family members' medicines.",
      "Surface refill reminders before the medicine supply runs out.",
    ],

    solution: [
      "Prescription capture: allow users to enter or scan prescription details, with AI-assisted extraction subject to user confirmation.",
      "Family Mode: provide a consolidated dashboard for managing medicines and reminders for multiple family members.",
      "Smart refill nudges: help users anticipate when their medicine supply may need replenishing.",
    ],

    mvp: [
      "Manual and AI-assisted prescription entry with a confirmation step.",
      "Per-person dosage reminders with taken and skipped status tracking.",
      "Refill countdowns based on the medicine quantity and schedule entered by the user.",
    ],

    metrics: [
      {
        metric:
          "Percentage of scheduled doses marked as taken on time",
        type: "north star",
      },
      {
        metric:
          "Time taken to convert prescription details into a confirmed reminder schedule",
        type: "supporting",
      },
      {
        metric:
          "Percentage of refill reminders acted on before supply runs out",
        type: "supporting",
      },
    ],

    risks: [
      "AI extraction may misread handwritten prescriptions, so users must verify extracted details before relying on them.",
      "Excessive notifications may lead to reminder fatigue.",
      "The concept is not a substitute for medical advice or a validated clinical product.",
    ],

    assumptionsNote:
      "This is a self-directed product exercise. Research points are assumptions rather than findings from completed user interviews, and metrics are proposed measures rather than measured results.",
  },

  {
    slug: "google-maps-refueling",
    title: "Google Maps — Smarter Refueling Decisions",
    category: "Product Sense",
    tags: ["Product Sense", "Mobility", "Decision Support"],
    oneLiner:
      "How might Google Maps help drivers make better refueling decisions?",
    description:
      "A product-sense exercise exploring how Google Maps could reduce the friction of deciding when and where to refuel by helping drivers balance fuel price, detour time, and the risk of running low.",
    prototypeUrl:
      "https://active-nav-highway-fuel-route-trade-off.ai.studio/",
    presentationUrl:
      "https://docs.google.com/document/d/1IevISMQPcxt_d4E33mFOM9fywGSt1pM8xZyLymeVSSU/edit?usp=sharing",
    featured: true,

    problem:
      "How might Google Maps help drivers make better refueling decisions? Drivers often decide when to refuel using remaining range, familiarity with a route, and habit rather than a structured comparison of price, detour time, and the risk of running low. This can become a difficult trade-off on long or unfamiliar routes.",

    primaryUsers:
      "Long-distance and highway drivers navigating with Google Maps",
    secondaryUsers:
      "Daily commuters looking to optimize routine fuel costs",

    journey: [
      {
        stage: "Notice",
        detail:
          "The driver checks the remaining fuel range during a journey.",
      },
      {
        stage: "Weigh",
        detail:
          "The driver compares nearby stations, potential prices, detour distances, and confidence in reaching another station.",
      },
      {
        stage: "Decide",
        detail:
          "The driver refuels now or continues in search of a potentially better option.",
      },
      {
        stage: "Reflect",
        detail:
          "The outcome influences the driver's future refueling decisions.",
      },
    ],

    opportunities: [
      "Make the trade-off between fuel price, detour time, and range risk easier to understand.",
      "Use route context and station availability to identify potentially risky decisions.",
      "Keep the feature lightweight so it supports navigation rather than distracting from it.",
    ],

    solution: [
      "An in-route fuel comparison panel showing the nearest suitable station alongside a potentially better-priced option farther along the route.",
      "A clear comparison of price, distance, detour time, and the confidence of reaching another station.",
      "A dismissible interface designed to fit into the existing navigation experience.",
    ],

    mvp: [
      "Trigger the panel only when remaining range and upcoming station availability make the decision relevant.",
      "Compare the nearest station with a suitable lower-priced option within an acceptable detour.",
      "Allow users to select a suggested station without unnecessarily rebuilding the entire route.",
    ],

    metrics: [
      {
        metric:
          "Percentage of drivers who engage with the panel when it is shown",
        type: "north star",
      },
      {
        metric:
          "Estimated fuel cost saved per accepted suggestion",
        type: "supporting",
      },
      {
        metric:
          "Rate of unnecessary alerts shown when the driver has sufficient range",
        type: "supporting",
      },
    ],

    rollout: [
      "Start with long-distance highway routes where station spacing and fuel decisions are more consequential.",
      "Consider commuter routes after evaluating engagement and usefulness in the initial rollout.",
    ],

    risks: [
      "Outdated fuel prices could reduce user trust.",
      "Too many unnecessary prompts could distract drivers and reduce engagement.",
      "Incorrect range or station-availability estimates could make recommendations unreliable.",
    ],

    assumptionsNote:
      "This is a product-sense exercise without access to Google's internal usage data. The journey, opportunities, and metrics are proposed product reasoning, not measured research findings.",
  },

  {
    slug: "travelsouls",
    title: "TravelSouls",
    category: "Multi-Agent AI",
    tags: ["Multi-Agent AI", "Travel Planning", "Capstone Project"],
    oneLiner:
      "A multi-agent AI travel planning platform that simplifies research, itinerary generation, budget tracking, booking discovery, and contextual recommendations.",
    description:
      "TravelSouls is a BITSoM capstone group project developed collaboratively with fellow teammates. The platform explores how a multi-agent AI system can simplify the travel-planning journey, from discovering destinations and comparing options to creating editable itineraries, managing budgets, exploring booking options, and sharing travel plans. Orchestrator Agent  coordinates specialized research, budget, booking, and recommendation agents.",
    prototypeUrl:
      "https://travelsouls-262238454554.asia-southeast1.run.app/",
    presentationUrl: "https://canva.link/3lbxfjlf05as5no",
    featured: true,

    problem:
      "Travel planning often involves disconnected tools for destination research, itinerary building, budgeting, booking discovery, and recommendations. Travelers need to bring these separate decisions together while balancing their preferences, time, and budget.",

    primaryUsers:
      "Travelers who want a more coordinated way to plan trips",
    secondaryUsers:
      "Families and groups coordinating shared travel plans",

    opportunities: [
      "Reduce the number of disconnected tools travelers use during trip planning.",
      "Make budget trade-offs visible throughout itinerary creation.",
      "Reduce the effort required to turn a broad travel idea into an editable itinerary.",
      "Make AI recommendations easier to understand through explanations of why options were selected.",
      "Support different travel contexts, including solo, family, and group trips.",
    ],

    solution: [
      "Orchestrator Agent  coordinates specialized agents across the travel-planning workflow.",
      "Natural-language trip planning helps users describe travel requirements in their own words.",
      "AI-generated itineraries provide a starting point users can review and edit.",
      "Budget tracking helps users understand spending across trip categories.",
      "Contextual recommendations explain why suggested options may fit a user's preferences.",
    ],

    mvp: [
      "Natural-language trip input and destination research.",
      "Editable day-by-day itinerary generation.",
      "Budget planning and expense-category visibility.",
      "Contextual recommendations with explanations.",
      "A shareable itinerary for collaborative planning.",
    ],

    highlights: [
      "Group capstone project developed collaboratively with fellow teammates as part of the BITSoM Product Management with Generative & Agentic AI program.",
      "Orchestrator Agent  coordinates research, budget, booking, and recommendation agents.",
      "One-prompt trip planning allows users to describe travel requirements in natural language.",
      "AI itinerary generation provides an editable day-by-day plan.",
      "Budget tracking helps users understand costs across flights, accommodation, food, and activities.",
      "Recommendation explanations explore how AI can communicate why an option was selected.",
      "Family Mode and shareable itineraries support group and multi-generational travel planning.",
    ],

    risks: [
      "Incorrect or outdated travel information could undermine user trust.",
      "Generated itineraries may not fully reflect real-world opening hours, availability, or travel constraints.",
      "Budget estimates and booking information require validation before users make financial commitments.",
    ],

    assumptionsNote:
      "TravelSouls is a BITSoM capstone group project developed collaboratively with fellow teammates. This case study describes the product direction and prototype; it should not be interpreted as evidence of production-scale booking functionality or measured commercial performance.",
  },

  {
    slug: "meta-storyteller",
    title: "Meta Storyteller",
    category: "AR/VR",
    tags: ["AR/VR", "Spatial Audio", "Immersive Experiences"],
    oneLiner:
      "An immersive audiobook concept that turns traditional listening into a spatial, interactive AR/VR experience.",
    description:
      "Meta Storyteller explores how spatial audio and immersive environments could transform traditional audiobook listening into a more engaging storytelling experience.",

    presentationUrl:
      "https://docs.google.com/document/d/11w2RVsHY6T79E9B84-EmUICjWZ54QYpoo9tAoUjpfK8/edit?usp=sharing",

    featured: true,

    problem:
      "Traditional audiobooks are primarily linear listening experiences. Spatial audio and immersive technologies create opportunities to make scenes feel more present, but listeners may need a simple way to experience these possibilities without the complexity of a full video game.",

    primaryUsers:
      "Audiobook listeners interested in immersive storytelling",
    secondaryUsers:
      "Readers and entertainment consumers curious about spatial audio and AR/VR",

    research: [
      "Hypothesis: some audiobook listeners may value more immersive storytelling when it enhances the narrative rather than distracting from it.",
      "Hypothesis: listeners may prefer optional interaction that preserves the convenience of listening without requiring constant input.",
      "These are product hypotheses to validate, not confirmed user research findings.",
    ],

    journey: [
      {
        stage: "Discover",
        detail:
          "The listener discovers a story designed for immersive audio.",
      },
      {
        stage: "Enter",
        detail:
          "The listener enters an audio-led environment and begins the narrative.",
      },
      {
        stage: "Experience",
        detail:
          "Spatial audio helps convey the location of characters, sounds, and scene changes.",
      },
      {
        stage: "Interact",
        detail:
          "Optional physical orientation or simple choices can reveal narrative details.",
      },
      {
        stage: "Continue",
        detail:
          "The listener continues the story without unnecessary interruptions to the experience.",
      },
    ],

    opportunities: [
      "Use spatial audio to make character dialogue and scene changes feel more physically present.",
      "Allow small listener actions, such as turning toward a sound, to reveal story details.",
      "Keep interaction optional so the experience remains accessible to people who prefer passive listening.",
      "Explore immersive storytelling without introducing unnecessary game-like complexity.",
    ],

    solution: [
      "An immersive audio environment that places story sounds around the listener.",
      "Directional audio cues that help communicate the position of characters and events.",
      "Optional interactions that reveal story elements while preserving the narrative flow.",
      "A listening experience designed around the story rather than constant user input.",
    ],

    mvp: [
      "One short, purpose-built story scene demonstrating spatial audio.",
      "Directional sound cues for a small number of characters or story events.",
      "One or two optional interactions that reveal additional narrative information.",
      "A conventional listening mode or simple fallback for users who do not want to interact.",
    ],

    metrics: [
      {
        metric:
          "Percentage of users who complete the immersive story scene",
        type: "north star",
      },
      {
        metric:
          "User-reported immersion and enjoyment after the experience",
        type: "supporting",
      },
      {
        metric:
          "Percentage of users who choose to continue to another scene",
        type: "supporting",
      },
    ],

    risks: [
      "Excessive interaction could interrupt the story and reduce immersion.",
      "Hardware accessibility and comfort may limit the audience.",
      "Spatial audio alone may not create enough value to justify the added production complexity.",
    ],

    rollout: [
      "Begin with one short story scene to test whether spatial audio meaningfully improves the experience.",
      "Validate comprehension, comfort, and engagement before expanding the content library.",
    ],

    assumptionsNote:
      "This is an early-stage concept exercise, not a built or user-tested product. The research points, solution, MVP, and metrics are proposed hypotheses and require validation.",
  },

  {
    slug: "geo-product-discovery",
    title: "GEO for Product Discovery",
    category: "AI Search",
    tags: ["AI Search", "Product Discovery", "Generative AI"],
    oneLiner:
      "How can businesses improve product discoverability across AI-powered search experiences?",
    description:
      "A product concept exploring how businesses can understand and improve their product discoverability as users increasingly encounter generated answers alongside traditional search results.",

    presentationUrl: "https://canva.link/4rn563jk8c9hklo",

    featured: true,

    problem:
      "As search experiences increasingly include generated answers, a business may have limited visibility into whether its products are mentioned, accurately represented, or omitted from responses to relevant queries. Teams need a clearer way to understand this emerging discovery channel and identify practical improvements.",

    primaryUsers:
      "E-commerce businesses and product marketing teams",
    secondaryUsers:
      "Growth, SEO, and digital content teams",

    research: [
      "Hypothesis: businesses will want visibility into how AI-powered search experiences describe and recommend their products.",
      "Hypothesis: teams need actionable explanations and improvement suggestions rather than another disconnected analytics dashboard.",
      "These points are hypotheses for validation, not findings from completed customer interviews.",
    ],

    journey: [
      {
        stage: "Define",
        detail:
          "A business identifies its products, target audience, and relevant customer queries.",
      },
      {
        stage: "Evaluate",
        detail:
          "The product concept evaluates how selected AI search experiences respond to those queries.",
      },
      {
        stage: "Identify",
        detail:
          "The business reviews where products are mentioned, omitted, or represented inaccurately.",
      },
      {
        stage: "Improve",
        detail:
          "The team reviews possible content and product-information improvements.",
      },
      {
        stage: "Monitor",
        detail:
          "The team repeats evaluations to understand changes over time.",
      },
    ],

    opportunities: [
      "Show businesses when and how their products appear in AI-generated answers for relevant queries.",
      "Identify omissions and potentially inaccurate product descriptions.",
      "Translate observations into practical content and structured product-information improvements.",
      "Help teams compare results across selected queries and AI search experiences.",
      "Track changes over time without presenting generated answers as perfectly consistent or deterministic.",
    ],

    solution: [
      "Query monitoring: let teams define relevant product and category queries to evaluate.",
      "Visibility reporting: summarize when a product is mentioned, omitted, or described in a generated response.",
      "Content opportunity analysis: surface possible improvements to product information and supporting content.",
      "Change tracking: compare observed results across evaluation runs.",
      "Evidence-first reporting: preserve the query and response context behind each observation.",
    ],

    mvp: [
      "A user-defined set of product-related queries.",
      "A structured record of the AI-generated responses evaluated.",
      "Basic visibility and mention tracking for selected products.",
      "A list of potential content or product-information improvements.",
      "A history view to compare observations across evaluation runs.",
    ],

    metrics: [
      {
        metric:
          "Percentage of tracked queries with usable product-visibility observations",
        type: "north star",
      },
      {
        metric:
          "Percentage of identified content opportunities reviewed by users",
        type: "supporting",
      },
      {
        metric:
          "Repeat usage by teams monitoring their selected queries",
        type: "supporting",
      },
    ],

    risks: [
      "AI-generated answers can vary between runs, making comparisons sensitive to query wording and evaluation conditions.",
      "Visibility observations do not guarantee ranking, citations, traffic, or sales outcomes.",
      "Recommendations may be too generic unless they are grounded in the product's actual content and context.",
      "Changes in third-party AI search systems may affect measurement consistency.",
    ],

    rollout: [
      "Start with a limited set of user-defined queries and selected products.",
      "Validate whether the visibility reports and recommendations help teams make concrete content decisions.",
      "Expand query coverage and comparison features after validating usefulness and repeat usage.",
    ],

    assumptionsNote:
      "This is an early-stage product concept in a fast-changing area. The research points, product design, MVP, and metrics are proposed hypotheses rather than validated findings or measured outcomes. AI search behavior and available measurement methods may change.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
