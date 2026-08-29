import type { Testimonial } from '@/lib/types';

/**
 * Approved client testimonials — single source of truth for the
 * homepage "Danışan Deneyimleri" section.
 *
 * ARCHITECTURE NOTE — how "approval" actually works on this site:
 * this is a static Next.js export with no backend or database (see
 * README). There is no live, automatic approval workflow, and this
 * file deliberately does not pretend there is one.
 *
 * Real flow today:
 *   1. A visitor submits the form at /deneyim-paylas.
 *   2. That form posts to the same Formspree endpoint already used
 *      by the contact form (no new external service), which emails
 *      the submission to the therapist. Nothing is published yet.
 *   3. The therapist reviews the email and decides whether to
 *      approve it.
 *   4. To actually publish an approved testimonial, someone with
 *      repository access adds a { quote, author } entry to the
 *      array below and redeploys. That commit/deploy step IS the
 *      moderation gate — there's no separate admin panel.
 *
 * What a fully automatic version would need: a real backend —
 * for example a small serverless function plus a database (e.g.
 * Supabase, Firebase, or Airtable) or a headless CMS with a
 * draft/approved status field and a moderation UI a non-technical
 * person could use without touching code. None of that exists yet
 * and shouldn't be added without an explicit decision, since it
 * would mean moving off a purely static architecture (or adding a
 * managed external service with its own cost/complexity). See the
 * Phase 8 engineering report for the tradeoffs.
 *
 * Currently empty — no real, approved testimonials exist yet. Do
 * not add placeholder or invented entries here.
 */
export const TESTIMONIALS: Testimonial[] = [];