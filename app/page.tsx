import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroLayout, SplitSection, CTASection, ContentSection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader } from '@/components/ui/Layout';
import { PlatformRelationshipLayout, SecuritySection, DeploymentSection } from '@/components/layouts/SectionShells';
import { StepFlow, SecurityStackDiagram } from '@/components/layouts/VisualDiagrams';
import { MissedCallStat } from '@/components/MissedCallStat';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';
import { AgentSpotlightRing } from '@/components/AgentSpotlightRing';
import TrustMarquee from '@/components/TrustMarquee';

export const metadata: Metadata = {
  description:
    'A complete AI front office — eight coordinated AI Employees that answer every call, book the appointment, and update your PMS, EHR, or POS before your front desk sees the notification.',
};

const agents = [
  { slug: 'amy', name: 'Amy', role: 'Receptionist', icon: '🎧', desc: 'AI call handling, live answer, intent detection, and intelligent routing.', value: 'Never miss a call. Capture every opportunity.', color: '#3B7E1D' },
  { slug: 'leena', name: 'Leena', role: 'Schedule Optimizer', icon: '📅', desc: 'Smart scheduling, conflict resolution, open-chair optimization, and provider matching.', value: 'Maximize schedule utilization and reduce no-shows.', color: '#F28C28' },
  { slug: 'kim', name: 'Kim', role: 'Case Acceptance', icon: '💼', desc: 'Evaluates cases, verifies benefits, checks eligibility, and recommends next actions.', value: 'Increase acceptance rates and protect revenue.', color: '#6366F1' },
  { slug: 'morgan', name: 'Morgan', role: 'Patient Intake', icon: '📋', desc: 'Automated intake, digital forms, insurance verification, and data capture.', value: 'Faster intake. Better data. Happier patients.', color: '#CA4234' },
  { slug: 'stephanie', name: 'Stephanie', role: 'Follow-up', icon: '🔄', desc: 'Automated follow-ups, recall reminders, care plans, and re-engagement campaigns.', value: 'Stronger retention. More recalls. Better long-term outcomes.', color: '#00A8C8' },
  { slug: 'trisha', name: 'Trisha', role: 'Practice Manager', icon: '⚙️', desc: 'Workflow orchestration, team oversight, task management, and operational efficiency.', value: 'Streamlined operations. Better visibility. Less admin burden.', color: '#A855F7' },
  { slug: 'elise', name: 'Elise', role: 'Patient Experience', icon: '⭐', desc: 'Monitors reviews, automates responses, tracks sentiment, and improves satisfaction.', value: 'Stronger reputation. Better experience. More referrals.', color: '#EC4899' },
  { slug: 'joseph', name: 'Joseph', role: 'Fax Management', icon: '📠', desc: 'Automated fax routing, document management, referrals, and lab order tracking.', value: 'Eliminate manual fax work and reduce document delays.', color: '#7F828E' },
];

const industries = [
  { name: 'Dental Practices', challenge: 'Your front desk is on hold with insurance while a new patient call rings out.', solution: 'It answers, checks the schedule, and books the cleaning — while your team stays on the insurance call.', outcome: 'New patients stop hearing a busy signal.' },
  { name: 'Medical Practices', challenge: 'A referral sits unconfirmed because eligibility checks ate the whole morning.', solution: 'It confirms eligibility and closes the referral loop without pulling staff off the phones.', outcome: 'Fewer patients falling through the cracks between visits.' },
  { name: 'Automotive Service', challenge: 'The phone rings while your tech has both hands under a hood.', solution: 'It books the oil change, quotes the wait time, and gets the bay filled.', outcome: 'A full schedule without pulling anyone off the floor.' },
  { name: 'Hospitality & Dining', challenge: 'A party of eight calls Friday at 7pm — your host is seating three tables at once.', solution: 'It checks real seating availability and confirms the table on the spot.', outcome: 'That party books with you, not your competitor down the street.' },
];

export default function Home() {
  return (
    <>
      <main id="main">
      {/* SECTION 1 — Enterprise Hero */}
      <HeroLayout
        eyebrow="The Complete AI Front Office"
        title={
          <>
            Your phone never stops ringing. <span className="text-gradient">Neither does this.</span>
          </>
        }
        description="While your team is buried, eight AI Employees are already answering, booking, and updating the system you already run — every call, every hour, in every business we serve. No hold music. No voicemail. Nothing falls through."
        primaryAction={<Button href="/book-demo" size="lg">Book a Demo</Button>}
        secondaryAction={<Button href="/products/aisc-booking-agent" variant="ghost">See It Take a Call →</Button>}
        visual={
          <AgentSpotlightRing
            agents={[
              { name: 'Amy', emoji: '🎧', action: 'answering an inbound call' },
              { name: 'Leena', emoji: '📅', action: 'filling a cancellation opening' },
              { name: 'Kim', emoji: '💼', action: 'verifying insurance benefits' },
              { name: 'Morgan', emoji: '📋', action: 'collecting intake forms' },
              { name: 'Stephanie', emoji: '🔄', action: 'sending a recall reminder' },
              { name: 'Trisha', emoji: '⚙️', action: 'monitoring the full team' },
              { name: 'Elise', emoji: '⭐', action: 'responding to a new review' },
              { name: 'Joseph', emoji: '📠', action: 'routing an incoming referral' },
            ]}
            logoWidth={54}
          />
        }
      />

      <TrustMarquee />

      {/* SECTION 3 — Meet the 8-agent workforce */}
      <ContentSection>
        <RevealContainer className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="The AISC Engine"
            title="One platform. Eight AI specialists."
            description="Not one generic bot pretending to do everything — eight agents, each trained on a single job, handing off to each other on every call."
          />
          <Link
            href="/agents"
            data-cursor-hover
            className="font-mono-label inline-flex items-center gap-1.5 text-xs text-blue hover:gap-2.5 transition-all"
          >
            Meet the full team →
          </Link>
        </RevealContainer>
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((a) => (
            <StaggerItem key={a.name}>
              <Link href={`/agents/${a.slug}`} data-cursor-hover className="block h-full">
                <Card glass className="h-full border-l-[3px] transition-transform hover:-translate-y-1" style={{ borderLeftColor: a.color }}>
                  <CardBody className="flex h-full flex-col gap-2">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full text-lg"
                      style={{ backgroundColor: `${a.color}1A` }}
                    >
                      {a.icon}
                    </div>
                    <h3 className="font-display font-bold">{a.name}</h3>
                    <div className="font-mono-label text-xs" style={{ color: a.color }}>{a.role}</div>
                    <p className="mt-1 text-sm text-slate">{a.desc}</p>
                    <p className="mt-auto pt-2 text-sm font-medium text-ink">{a.value}</p>
                  </CardBody>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </ContentSection>

      {/* SECTION 5 — Platform Ecosystem */}
      <ContentSection>
        <RevealContainer className="mb-10">
          <SectionHeader
            eyebrow="One Platform, Deployed"
            title="One agent engine. Deployed as three products, scoped to your industry."
            description="AISC Booking Agent, Dental Automated, and Medical Automated aren't three separate builds — they're the same eight-agent platform, configured for how each business actually runs."
          />
        </RevealContainer>
        <PlatformRelationshipLayout
          center={{ label: 'Shared 8-Agent Intelligence & Connector Layer' }}
          related={[
            { label: 'AISC Booking Agent', description: 'Amy alone, standalone for booking' },
            { label: 'Dental Automated', description: 'Full 8-agent dental front office' },
            { label: 'Medical Automated', description: 'Full 8-agent medical front office' },
            { label: 'Other Industries', description: 'Selected agents, scoped to demand' },
          ]}
        />
        <p className="mx-auto mt-8 max-w-[560px] text-center text-sm text-slate">
          Claravox Healthcare is a separate revenue-cycle management subsidiary — a distinct
          business, not another deployment of this agent platform.
        </p>
      </ContentSection>

      {/* SECTION 6 — Industries */}
      <ContentSection>
        <RevealContainer className="mb-10">
          <SectionHeader eyebrow="Industries" title="Every industry loses calls differently. So we didn't build one script." />
        </RevealContainer>
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {industries.map((ind) => (
            <StaggerItem key={ind.name}>
              <Card className="h-full">
                <CardBody className="flex h-full flex-col gap-3">
                  <h3 className="font-display font-bold">{ind.name}</h3>
                  <div>
                    <div className="font-mono-label text-xs text-slate">Challenge</div>
                    <p className="mt-1 text-sm text-ink">{ind.challenge}</p>
                  </div>
                  <div>
                    <div className="font-mono-label text-xs text-blue">Solution</div>
                    <p className="mt-1 text-sm text-ink">{ind.solution}</p>
                  </div>
                  <div>
                    <div className="font-mono-label text-xs text-positive">Expected Outcome</div>
                    <p className="mt-1 text-sm text-ink">{ind.outcome}</p>
                  </div>
                </CardBody>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </ContentSection>

      {/* SECTION 7 — Security */}
      <SecuritySection
        eyebrow="Security"
        title="Yes, it's HIPAA compliant. Here's what that actually means underneath."
        description="Compliance documentation is available on request — not just a badge in the footer."
      >
        <SecurityStackDiagram
          layers={[
            { name: 'Access Control', description: 'Every action within the platform is scoped and authenticated.' },
            { name: 'Monitoring', description: 'Interactions are logged continuously for operational and security review.' },
            { name: 'Compliance', description: 'Built to HIPAA compliance standards, with SOC 2 Type II certification and PIPEDA compliance.' },
          ]}
        />
      </SecuritySection>

      {/* SECTION 8 — Deployment Experience */}
      <ContentSection>
        <RevealContainer className="mb-10">
          <SectionHeader eyebrow="Getting Started" title="Days, not the months you're probably picturing." />
        </RevealContainer>
        <StepFlow
          steps={[
            { title: 'Discovery', timeframe: 'Hour 1', description: 'We sit in on how your phones actually run today — where calls get dropped, where staff get pulled away.' },
            { title: 'Configuration', timeframe: 'Hours 1–3', description: 'We set the booking rules and connect your PMS, EHR, or POS.' },
            { title: 'Testing', timeframe: 'Day 1', description: 'We run it through your real edge cases before it ever picks up a live call.' },
            { title: 'Training', timeframe: 'Day 2 · 20 min', description: 'Your team gets a 20-minute walkthrough, not a manual.' },
            { title: 'Go-Live', timeframe: 'Within 48 hrs', description: 'It starts taking calls — you can listen to the first ones live.' },
            { title: 'Support', timeframe: 'Ongoing', description: 'We tune it based on what actually comes up, not a fixed schedule.' },
          ]}
        />
      </ContentSection>

      {/* SECTION 8.5 — Cost of a Missed Call */}
      <ContentSection>
        <MissedCallStat
          eyebrow="The Cost of a Missed Call"
          headlinePrefix="$"
          headlineTarget={82000}
          description="That's what the average single-location dental practice quietly loses every year — one unanswered ring, one abandoned voicemail, one patient who calls the next office instead. Every business we serve loses revenue the same way; dental is simply where we have the clearest numbers."
          supportingStats={[
            { target: 23, suffix: '%', label: 'of inbound calls go unanswered during business hours' },
            { target: 285, prefix: '$', label: 'average lifetime value lost per missed new-patient call' },
            { target: 68, suffix: '%', label: 'of after-hours and weekend calls never get a callback' },
            { target: 82, prefix: '$', suffix: 'K', label: 'in compounding annual revenue, quietly walking out the door' },
          ]}
          systems={['Dentrix', 'Open Dental', 'Eaglesoft', 'eClinicalWorks', 'AdvancedMD', 'Tebra']}
        />
      </ContentSection>

      {/* SECTION 8.6 — Results / Testimonials */}
      <ContentSection>
        <RevealContainer className="mb-10 text-center">
          <SectionHeader eyebrow="Results" title="Front desks that got their hours back" align="center" />
          <p className="mx-auto mt-4 max-w-[560px] text-sm text-slate">A look at how practices are using this platform to recover the calls they used to lose.</p>
        </RevealContainer>
        <TestimonialsSection
          testimonials={[
            {
              quote: 'Our voicemail box used to fill up every weekend. Now those calls get booked before Monday morning even starts.',
              initials: 'DR', name: 'Dr. R., DDS', practiceType: 'General & family practice',
              resultValue: '+$14.2K', resultLabel: 'recovered / mo', avatarColor: '#A855F7',
            },
            {
              quote: 'Kim catches the cases my front desk used to let slide. Treatment acceptance is up without anyone changing their pitch.',
              initials: 'SM', name: 'Dr. S. M., DMD', practiceType: 'Multi-provider group practice',
              resultValue: '+18%', resultLabel: 'case acceptance', avatarColor: '#6366F1',
            },
            {
              quote: 'Setup took less than two days and it was already talking to our schedule like it had worked here for years.',
              initials: 'JT', name: 'Dr. J. T., DDS', practiceType: 'Pediatric dental clinic',
              resultValue: 'Live in', resultLabel: '36 hours', avatarColor: '#EC4899',
            },
          ]}
          disclaimer="Representative results from pilot practices. Individual outcomes vary by call volume and case mix."
        />
      </ContentSection>

      {/* SECTION 9 — Enterprise CTA */}
      <CTASection
        title="Want to hear it take a real call for your business?"
        description="Bring your actual booking rules — no generic script, no canned demo."
        actionLabel="Book a Demo"
        actionHref="/book-demo"
      />
      </main>
      <Footer />
    </>
  );
}


