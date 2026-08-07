import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { WorkflowExplorer, WorkflowStage } from '@/components/layouts/ProductStory';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';
import { AgentWorkflowIcon } from '@/components/AgentWorkflowIcon';
import { agents, getAgentBySlug } from '@/lib/agents';

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const agent = getAgentBySlug(params.slug);
  if (!agent) return {};
  return {
    title: `${agent.name} — ${agent.role}`,
    description: `${agent.summary} See ${agent.name}'s full workflow and the specific pain points it resolves.`,
  };
}

export default function AgentDetailPage({ params }: { params: { slug: string } }) {
  const agent = getAgentBySlug(params.slug);
  if (!agent) notFound();

  const stages: WorkflowStage[] = agent.workflow.map((step) => ({
    icon: <AgentWorkflowIcon name={step.icon} />,
    label: step.label,
    detail: step.detail,
  }));

  const others = agents.filter((a) => a.slug !== agent.slug);

  return (
    <>
      <Breadcrumb items={[{ label: 'Our Agents', href: '/agents' }, { label: agent.name }]} />
      <main id="main">
        {/* Hero */}
        <HeroLayout
          eyebrow={`Agent Profile — ${agent.role}`}
          title={
            <>
              {agent.name}. <span className="text-gradient">{agent.tagline}</span>
            </>
          }
          description={agent.summary}
          primaryAction={<Button href="/book-demo" size="lg">Book a Demo</Button>}
          secondaryAction={<Button href="/agents" variant="ghost">← All Agents</Button>}
          visual={
            <div className="flex flex-col items-center gap-4 rounded-token border border-line bg-panel p-10 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full text-4xl"
                style={{ backgroundColor: `${agent.colorHex}1A` }}
              >
                {agent.emoji}
              </div>
              <div>
                <div className="font-display text-h3">{agent.name}</div>
                <div className="font-mono-label mt-1 text-xs" style={{ color: agent.colorHex }}>
                  {agent.role}
                </div>
              </div>
            </div>
          }
        />

        {/* Scenario */}
        <ContentSection background="tint">
          <RevealContainer>
            <div className="mx-auto max-w-[720px] text-center">
              <div className="font-mono-label mb-4 text-xs text-blue">The Moment This Solves</div>
              <p className="font-display text-h3 text-ink">{agent.scenario.setup}</p>
              <p className="mt-4 text-body-lg text-slate">{agent.scenario.resolution}</p>
            </div>
          </RevealContainer>
        </ContentSection>

        {/* Full workflow */}
        <ContentSection id="workflow">
          <RevealContainer className="mb-10">
            <SectionHeader
              eyebrow="How It Works"
              title={`${agent.name}'s full workflow, step by step.`}
              description="Not a feature list — the actual sequence this agent runs, every time."
            />
          </RevealContainer>
          <WorkflowExplorer stages={stages} />
        </ContentSection>

        {/* Pain points */}
        <ContentSection background="panel">
          <RevealContainer className="mb-10">
            <SectionHeader
              eyebrow="Pain Points Resolved"
              title="The specific problems this agent exists to solve."
            />
          </RevealContainer>
          <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {agent.painPoints.map((p) => (
              <StaggerItem key={p.title}>
                <Card className="h-full">
                  <CardBody className="flex h-full flex-col gap-3">
                    <h3 className="font-display font-bold">{p.title}</h3>
                    <div>
                      <div className="font-mono-label text-xs text-slate">The Problem</div>
                      <p className="mt-1 text-sm text-ink">{p.problem}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="font-mono-label text-xs" style={{ color: agent.colorHex }}>
                        How {agent.name} Resolves It
                      </div>
                      <p className="mt-1 text-sm text-ink">{p.resolution}</p>
                    </div>
                  </CardBody>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </ContentSection>

        {/* Adapts across industries */}
        {agent.adaptedAcrossIndustries.length > 0 && (
          <ContentSection>
            <RevealContainer className="mb-8">
              <SectionHeader
                eyebrow="Not One Script"
                title={`How ${agent.name}'s role adapts by industry.`}
              />
            </RevealContainer>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {agent.adaptedAcrossIndustries.map((a) => (
                <Card key={a.context}>
                  <CardBody>
                    <div className="font-mono-label text-xs text-blue">{a.context}</div>
                    <p className="mt-2 text-sm text-ink">{a.note}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </ContentSection>
        )}

        {/* Coordinates with */}
        <ContentSection background="panel">
          <RevealContainer className="mb-8">
            <SectionHeader eyebrow="Works Alongside" title={`Who ${agent.name} hands off to.`} />
          </RevealContainer>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {agent.coordinatesWith.map((c) => {
              const other = others.find((o) => o.slug === c.slug);
              if (!other) return null;
              return (
                <Link key={c.slug} href={`/agents/${other.slug}`} data-cursor-hover>
                  <Card className="h-full transition-colors hover:border-blue/40 active:scale-[0.98]">
                    <CardBody className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-xl"
                        style={{ backgroundColor: `${other.colorHex}1A` }}
                      >
                        {other.emoji}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-display font-bold">
                          {other.name} <ArrowRight className="h-3.5 w-3.5 text-slate" />
                        </div>
                        <p className="mt-1 text-sm text-slate">{c.note}</p>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              );
            })}
          </div>
        </ContentSection>

        <CTASection
          title={`See ${agent.name} take a real call.`}
          description="Bring your actual booking rules and edge cases — no generic script, no canned demo."
          actionLabel="Book a Demo"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
