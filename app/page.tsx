import Image from "next/image";
import { RiMailLine, RiLinkedinBoxLine, RiGithubLine, RiFileTextLine } from "@remixicon/react";
import { ButtonLink } from "@/components/base/buttons/button";
import { Chip } from "@/components/base/badges/chip";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@/components/base/table/table";
import { BoxScore } from "@/components/site/box-score";
import { Deck } from "@/components/site/deck";
import { Stars } from "@/components/site/stars";
import { site, work, career, howIWork, liftflow } from "@/app/content";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#career", label: "Career" },
  { href: "#liftflow", label: "Liftflow" },
  { href: "#contact", label: "Contact" },
];

export default function Page() {
  return (
    <main className="relative z-[1] flex flex-col">
      <Stars />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5">
        <a href="#top" className="roster-display text-headline-semibold text-text-primary">
          {site.name}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul className="hidden gap-6 sm:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-body-medium text-text-secondary hover:text-text-primary">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section id="top" className="mx-auto w-full max-w-6xl px-4 pb-6 pt-10">
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
          <Image
            src="/sam.png"
            alt="Sam Evans"
            width={96}
            height={96}
            priority
            className="size-24 rounded-full border-2 border-[var(--roster-gold)] object-cover shadow-[0_0_0_8px_rgba(232,197,71,0.1)]"
          />
          <h1 className="roster-display roster-hero-title text-display-3-bold sm:text-display-2-bold lg:text-display-1-bold">
            Product leader in sports, payments, and everything in between.
          </h1>
          <p className="max-w-[58ch] text-title-3-regular text-text-secondary">
            Seven years shipping at Teamworks: two product lines built from zero and payments that moved half a
            billion dollars. Now co-founder of LiftFlow.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href="#work">See the work</ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <Deck />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20">
        <BoxScore />
      </section>

      <section id="work" className="mx-auto w-full max-w-6xl px-4 py-20">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_2fr]">
          <h2 className="roster-display text-display-3-bold text-text-primary">Selected work</h2>
          <p className="max-w-[60ch] text-body-regular text-text-secondary lg:self-end">
            Products I took from problem to general availability. Each line is one thing I owned end to end: spec,
            build, rollout, and what happened after.
          </p>
        </div>
        <Table aria-label="Selected work">
          <TableHeader>
            <TableColumn isRowHeader className="w-[22%]">
              Product
            </TableColumn>
            <TableColumn className="w-[22%]">Result</TableColumn>
            <TableColumn>What I did</TableColumn>
          </TableHeader>
          <TableBody>
            {work.map((w) => (
              <TableRow key={w.name}>
                <TableCell className="align-top text-body-medium text-text-primary">{w.name}</TableCell>
                <TableCell className="align-top">
                  <div className="text-headline-semibold text-text-primary">{w.result}</div>
                  <div className="text-caption-1-regular text-text-tertiary">{w.detail}</div>
                </TableCell>
                <TableCell className="align-top whitespace-normal text-body-regular text-text-secondary">
                  {w.how}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section id="career" className="bg-background-secondary-default">
        <div className="mx-auto w-full max-w-6xl px-4 py-20">
          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_2fr]">
            <h2 className="roster-display text-display-3-bold text-text-primary">Career</h2>
            <p className="max-w-[60ch] text-body-regular text-text-secondary lg:self-end">
              Came up through customer success, moved into product in 2019, and spent the next seven years building and
              shipping for college and pro sports.
            </p>
          </div>
          <ol className="border-s-2 border-accent-500">
            {career.map((c) => (
              <li key={c.role} className="relative pb-9 ps-8 last:pb-0">
                <span className="absolute -start-[9px] top-1.5 size-4 rounded-full border-[3px] border-accent-500 bg-background-full" />
                <div className="text-caption-1-semibold text-accent-700">{c.when}</div>
                <h3 className="mt-1 text-title-3-semibold text-text-primary">{c.role}</h3>
                <p className="mt-2 max-w-[68ch] text-body-regular text-text-secondary">{c.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="liftflow" className="mx-auto w-full max-w-6xl px-4 py-20">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_2fr]">
          <div>
            <Chip color="lime" variant="caption">
              Now
            </Chip>
            <h2 className="roster-display mt-3 text-display-3-bold text-text-primary">Liftflow</h2>
          </div>
          <p className="max-w-[60ch] text-body-regular text-text-secondary lg:self-end">
            Service management software for independent elevator maintenance companies. Most of them run on
            spreadsheets, paper tickets, and QuickBooks. Liftflow puts scheduling, field work, quoting, invoicing, and
            customer records in one system, with a mobile app for mechanics. I co-founded it and run product and
            engineering.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <Table aria-label="What Liftflow does">
            <TableHeader>
              <TableColumn isRowHeader className="w-[28%]">
                Workflow
              </TableColumn>
              <TableColumn>How it works</TableColumn>
            </TableHeader>
            <TableBody>
              {liftflow.workflows.map((w) => (
                <TableRow key={w.name}>
                  <TableCell className="align-top text-body-medium text-text-primary">{w.name}</TableCell>
                  <TableCell className="align-top whitespace-normal text-body-regular text-text-secondary">
                    {w.how}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-headline-semibold text-text-primary">Integrations</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {liftflow.integrations.map((name) => (
                  <li key={name}>
                    <Chip color="neutral" variant="caption">
                      {name}
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-headline-semibold text-text-primary">Product decisions</h3>
              <ul className="mt-3 flex flex-col gap-3 text-body-regular text-text-secondary">
                {liftflow.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <ButtonLink href="https://liftflow.io" variant="secondary" className="self-start">
              liftflow.io
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20">
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_2fr]">
          <h2 className="roster-display text-display-3-bold text-text-primary">How I work</h2>
          <p className="max-w-[60ch] text-body-regular text-text-secondary lg:self-end">
            Execution is my strength: getting features to GA, not just into a doc.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {howIWork.map((h) => (
            <div key={h.title}>
              <h3 className="text-title-3-semibold text-text-primary">{h.title}</h3>
              <p className="mt-2 text-body-regular text-text-secondary">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-separator-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-20">
          <h2 className="roster-display text-display-2-bold text-text-primary">Let&apos;s talk.</h2>
          <p className="mt-3 max-w-[52ch] text-title-3-regular text-text-secondary">
            {site.location}. Open to senior product roles, in sports and out.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${site.email}`} leadingIcon={RiMailLine}>
              Email
            </ButtonLink>
            <ButtonLink href={site.linkedin} variant="secondary" leadingIcon={RiLinkedinBoxLine}>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={site.github} variant="secondary" leadingIcon={RiGithubLine}>
              GitHub
            </ButtonLink>
            <ButtonLink href={site.resume} variant="secondary" leadingIcon={RiFileTextLine}>
              Resume
            </ButtonLink>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 text-caption-1-regular text-text-tertiary">
        &copy; 2026 {site.name}
      </footer>
    </main>
  );
}
