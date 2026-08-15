import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { CapabilityCard } from './components/sections/CapabilityCard';
import { HeroSlider } from './components/sections/HeroSlider';
import { IndustryPanel } from './components/sections/IndustryPanel';
import { QualityTimeline } from './components/sections/QualityTimeline';
import { RFQForm } from './components/sections/RFQForm';
import { Reveal } from './components/ui/Reveal';
import { SectionHeading } from './components/ui/SectionHeading';
import { capabilities, differentiators, industries } from './content/homepage';

function CrosshairIcon() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="34" />
      <circle cx="60" cy="60" r="13" />
      <path d="M60 4v28M60 88v28M4 60h28M88 60h28" />
    </svg>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <HeroSlider />

        <section id="about" className="intro section">
          <div className="shell intro__grid">
            <Reveal className="intro__copy">
              <SectionHeading
                number="01"
                eyebrow="Creative Fasteners USA"
                title="Precision Components for Demanding Applications"
                titleLines={['Precision', 'Components for', 'Demanding', 'Applications']}
              />
              <p className="intro__lead">
                Creative Fasteners USA is built around one essential idea: demanding components require disciplined execution from the first requirement review through final release.
              </p>
              <p>
                We focus on made-to-spec fastener manufacturing support for aerospace, defense, and precision industrial applications—bringing process routing, in-process dimensional inspection, and clear RFQ communication into one coordinated approach.
              </p>
              <a className="text-link" href="#quality">See the quality-control process <span aria-hidden="true">↗</span></a>
            </Reveal>

            <Reveal className="intro-visual" delay={120}>
              <img
                src={`${import.meta.env.BASE_URL}assets/images/industries/aerospace.webp`}
                alt="Precision dimensional inspection of a threaded component"
                width="1280"
                height="768"
                loading="lazy"
              />
              <div className="intro-visual__overlay" aria-hidden="true">
                <span>DIMENSIONAL CONTROL</span>
                <CrosshairIcon />
                <div><strong>PROCESS</strong><span>01—05</span></div>
              </div>
              <div className="intro-visual__caption">
                <span>Inspection visibility</span>
                <span>Made-to-spec focus</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="capabilities" className="capabilities section section--grey">
          <span id="products" className="anchor-target" aria-hidden="true" />
          <div className="shell">
            <Reveal>
              <div className="section-heading-row">
                <SectionHeading
                  number="02"
                  eyebrow="Manufacturing Capabilities"
                  title="Built Around the Requirement"
                  description="A focused set of manufacturing and finishing processes, presented for project-level review against the supplied drawing and specification."
                />
                <p className="section-note">Capability availability, process route, material compatibility, and specification fit are confirmed during RFQ review.</p>
              </div>
            </Reveal>
            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <Reveal key={capability.number} delay={index * 55}>
                  <CapabilityCard {...capability} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="quality" className="quality section">
          <div className="quality__grid" aria-hidden="true" />
          <div className="shell">
            <Reveal>
              <SectionHeading
                number="03"
                eyebrow="Quality-Control Process"
                title="Quality Controlled at Every Stage"
                description="Quality is treated as a connected production discipline, with review points that follow the component through the manufacturing route."
                light
              />
            </Reveal>
            <Reveal delay={100}>
              <QualityTimeline />
            </Reveal>
            <Reveal delay={180}>
              <div className="quality__notice">
                <span aria-hidden="true">!</span>
                <p><strong>Verification note:</strong> Final compliance, certification, and quality-system language will be inserted only after supporting client documentation has been reviewed.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="industries" className="industries section">
          <div className="shell">
            <Reveal>
              <div className="section-heading-row">
                <SectionHeading
                  number="04"
                  eyebrow="Industries Served"
                  title="Precision Where Performance Matters"
                  description="Manufacturing support shaped around demanding drawings, controlled requirements, and applications where component consistency is essential."
                />
                <a className="button button--outline-dark" href="#rfq">Discuss Your Application</a>
              </div>
            </Reveal>
            <div className="industries__grid">
              {industries.map((industry, index) => (
                <Reveal key={industry.number} delay={index * 80}>
                  <IndustryPanel {...industry} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="why section">
          <div className="shell why__layout">
            <Reveal className="why__intro">
              <SectionHeading
                number="05"
                eyebrow="Why Creative Fasteners USA"
                title="Discipline You Can Build Around"
                description="A modern manufacturing partner should make requirements clearer, process decisions more visible, and RFQ communication easier to act on."
                light
              />
              <a className="button button--ghost" href="#rfq">Start an RFQ</a>
            </Reveal>
            <div className="why__list">
              {differentiators.map((item, index) => (
                <Reveal key={item.number} delay={index * 45}>
                  <article>
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="rfq" className="rfq section">
          <div className="shell">
            <Reveal>
              <div className="rfq__heading">
                <SectionHeading
                  number="06"
                  eyebrow="Request for Quote"
                  title="Bring Us the Requirement"
                  description="Share the information available now. Drawing details, material, finish, quantity, and timing help shape a more focused review."
                />
                <div className="rfq__aside">
                  <span>RFQ REVIEW INPUTS</span>
                  <ul>
                    <li>Drawing or part number</li>
                    <li>Material and finish</li>
                    <li>Quantity and required date</li>
                  </ul>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <RFQForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
