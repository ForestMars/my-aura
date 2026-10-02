import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  Sparkles,
  Shield,
  Waves,
  Moon,
  Star,
  Eye,
  Atom,
  HeartHandshake,
  Infinity as InfinityIcon,
} from "lucide-react";
import auraHero from "../assets/aura-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURA — Psychic Barrier Protection for the Highly Evolved" },
      {
        name: "description",
        content:
          "AURA condoms keep your energy field sealed against PTDs (Psychically Transmitted Disturbances). Quantum-tested, chakra-aligned, vibrationally verified.",
      },
      {
        property: "og:title",
        content: "AURA — Psychic Barrier Protection for the Highly Evolved",
      },
      {
        property: "og:description",
        content:
          "Keep your aura from accidentally transmitting PTDs. Quantum-tested, chakra-aligned, vibrationally verified.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "The Merkaba",
    tagline: "Sacred geometry fit",
    desc: "Tetrahedral lattice weave aligns your field across all seven planes. Our best seller among ascended masters.",
    hz: "528 Hz",
  },
  {
    name: "The Violet Flame",
    tagline: "Transmutation grade",
    desc: "Infused with St. Germain–certified violet light. Transmutes incoming disturbances into unconditional love on contact.",
    hz: "741 Hz",
  },
  {
    name: "The Void",
    tagline: "Ultra-thin, ultra-still",
    desc: "So thin it's practically non-dual. For practitioners who want protection without attachment to outcome.",
    hz: "963 Hz",
  },
];

const testimonials = [
  {
    quote:
      "I used to absorb everyone's unprocessed childhood stuff at dinner parties. Now? Nothing gets through. My aura has never been this crisp.",
    name: "Moonbeam S.",
    title: "Consciousness Researcher, Sedona",
  },
  {
    quote:
      "As a Reiki master I'm extremely careful about energetic exchange. AURA is the only barrier I trust with my light body.",
    name: "Derek V.",
    title: "Reiki Master, Level 11",
  },
  {
    quote:
      "My partner's shadow work was leaking into my dreams. One Merkaba later — clean separation, beautiful union. 10/10.",
    name: "Priya K.",
    title: "Ayahuasca Sommelier",
  },
];

const faqs = [
  {
    q: "What exactly is a PTD?",
    a: "A Psychically Transmitted Disturbance — residual karma, unprocessed projections, stray entity attachments, or your date's unresolved relationship with their mother. AURA blocks 99.97% of known disturbances across all measured dimensions.",
  },
  {
    q: "Are they quantum tested?",
    a: "Every batch is observed by a certified consciousness researcher, collapsing the wave function in your favor. Untested units are returned to the void.",
  },
  {
    q: "Will it dull the energetic connection?",
    a: "No. Our proprietary LightWeave™ membrane is permeable to love, presence, and mutual awakening — but impermeable to drama, entities, and lowercase-v vibes.",
  },
  {
    q: "Are they vegan?",
    a: "Obviously. No animals were harmed, and no lower astral beings were exploited in the making of this product.",
  },
];

function Index() {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const notify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast("That email feels misaligned", {
        description: "Try a valid address so we can reach you in this dimension.",
      });
      return;
    }
    setNotified(true);
    toast.success("You're on the list", {
      description: "We'll ping your inbox the moment the portal opens.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="font-display text-xl tracking-[0.3em] text-foreground">
              AURA
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#collection" className="transition-colors hover:text-foreground">
              The Collection
            </a>
            <a href="#science" className="transition-colors hover:text-foreground">
              The Science
            </a>
            <a href="#voices" className="transition-colors hover:text-foreground">
              Voices
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground">
              FAQ
            </a>
          </nav>
          <a
            href="#notify"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            Notify Me
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden px-6 pb-24 pt-36 md:pt-44"
      >
        <div className="aura-glow pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-widest text-accent uppercase">
              <Star className="h-3 w-3" /> Store opening soon — join the waitlist
            </p>
            <h1 className="font-display text-5xl leading-tight md:text-6xl">
              Keep your aura to{" "}
              <span className="text-shimmer">yourself.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              The first barrier protection engineered against PTDs —
              Psychically Transmitted Disturbances. Because intimacy should
              merge your hearts, not your trauma fields.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#notify"
                className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                Get Notified at Launch
              </a>
              <a
                href="#collection"
                className="rounded-full border border-border px-8 py-3 font-medium text-foreground transition-colors hover:bg-card"
              >
                Preview the Collection
              </a>
            </div>
            <div className="mt-10 flex gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" /> 99.97% PTD blockage
              </span>
              <span className="flex items-center gap-2">
                <Waves className="h-4 w-4 text-accent" /> Chakra-aligned
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="aura-ring absolute inset-0 m-auto h-72 w-72 rounded-full" />
            <img
              src={auraHero}
              alt="AURA condom wrapper glowing with violet and gold energy in a cosmic nebula"
              width={1024}
              height={1024}
              className="relative mx-auto w-full max-w-md rounded-3xl border border-border/60 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border bg-card/60 py-3 overflow-hidden">
        <div className="marquee flex gap-12 whitespace-nowrap text-sm tracking-[0.25em] text-muted-foreground uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              {[
                "Quantum tested",
                "Entity repellent",
                "Karma neutral",
                "528 Hz tuned",
                "Shadow-work safe",
                "Astral-plane certified",
                "Vegan & cruelty free",
              ].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  <Sparkles className="h-3 w-3 text-accent" /> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-center text-4xl md:text-5xl">
          The Collection
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Three frequencies of protection, each tuned to a different stage of
          your awakening. Available when the store opens.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:border-primary/60"
            >
              <div className="mb-6 flex items-center justify-between">
                <Atom className="h-8 w-8 text-primary transition-transform group-hover:rotate-180 duration-700" />
                <span className="rounded-full border border-border px-3 py-1 text-xs text-accent">
                  {p.hz}
                </span>
              </div>
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 text-sm tracking-widest text-accent uppercase">
                {p.tagline}
              </p>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
              <a
                href="#notify"
                className="mt-6 block w-full rounded-full border border-primary/50 py-2.5 text-center text-sm font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                $18 / 3-pack — Coming Soon
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Science */}
      <section id="science" className="border-y border-border bg-card/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-center text-4xl md:text-5xl">
            The Science<span className="text-accent">*</span>
          </h2>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            *science, broadly defined
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Observer-Collapsed",
                desc: "Each unit is witnessed by a trained consciousness researcher at the moment of sealing, locking in a benevolent timeline.",
              },
              {
                icon: Moon,
                title: "Lunar Cured",
                desc: "Every batch cures for one full moon cycle in a Himalayan salt cave, absorbing only the highest frequencies.",
              },
              {
                icon: InfinityIcon,
                title: "Toroidal Weave",
                desc: "Our LightWeave™ membrane mimics the torus field of a healthy aura — energy flows out, disturbances stay out.",
              },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background">
                  <f.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl">{f.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="voices" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-center text-4xl md:text-5xl">
          Voices from the Field
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-accent">{t.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-card/40 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-center text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-background p-6 open:border-primary/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  {f.q}
                  <HeartHandshake className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-12" />
                </summary>
                <p className="mt-4 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Notify / CTA */}
      <section
        id="notify"
        className="relative overflow-hidden px-6 py-28 text-center"
      >
        <div className="aura-glow pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <h2 className="font-display relative text-4xl md:text-5xl">
          Your field is sacred.
          <br />
          <span className="text-shimmer">Wrap it accordingly.</span>
        </h2>
        <p className="relative mx-auto mt-6 max-w-md text-muted-foreground">
          The AURA store is calibrating with this timeline. Leave your email
          and be first through the portal when it opens.
        </p>
        {notified ? (
          <p className="relative mx-auto mt-10 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-card px-8 py-4 text-accent">
            <Sparkles className="h-5 w-5" /> You're on the list. Stay radiant.
          </p>
        ) : (
          <form
            onSubmit={notify}
            className="relative mx-auto mt-10 flex max-w-md gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@higherplane.com"
              className="flex-1 rounded-full border border-border bg-card px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Notify Me
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-muted-foreground">
          <span className="font-display tracking-[0.3em] text-foreground">
            AURA
          </span>
          <p>
            AURA is a vibrational wellness concept. It is not a medical device
            and does not prevent actual STIs or pregnancy — please use real
            protection in this dimension too.
          </p>
          <p>© 2026 AURA Energetic Wellness Collective. All rights reserved, across all timelines.</p>
        </div>
      </footer>
    </div>
  );
}
