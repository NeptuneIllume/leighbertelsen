import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

// ── Font loading ────────────────────────────────────────────────────────────

const fontDir = path.resolve('./public/fonts/og');
const dmSans = fs.readFileSync(path.join(fontDir, 'dm-sans-regular.ttf'));
const dmSansMedium = fs.readFileSync(path.join(fontDir, 'dm-sans-medium.ttf'));
const fragmentMono = fs.readFileSync(path.join(fontDir, 'fragment-mono.ttf'));
const cormorantItalic = fs.readFileSync(
  path.join(fontDir, 'cormorant-italic.ttf'),
);
const lora = fs.readFileSync(path.join(fontDir, 'lora-regular.ttf'));

const fonts = [
  {
    name: 'DM Sans',
    data: dmSans,
    weight: 400 as const,
    style: 'normal' as const,
  },
  {
    name: 'DM Sans',
    data: dmSansMedium,
    weight: 500 as const,
    style: 'normal' as const,
  },
  {
    name: 'Fragment Mono',
    data: fragmentMono,
    weight: 400 as const,
    style: 'normal' as const,
  },
  {
    name: 'Cormorant',
    data: cormorantItalic,
    weight: 400 as const,
    style: 'italic' as const,
  },
  { name: 'Lora', data: lora, weight: 400 as const, style: 'normal' as const },
];

// ── Sigil paths (matches Sigil.astro viewBox="0 0 64 64") ──────────────────

const SigilSVG = {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 64 64',
    width: 280,
    height: 280,
    children: [
      {
        type: 'circle',
        props: {
          cx: 32,
          cy: 32,
          r: 28,
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': 1,
          opacity: 0.55,
        },
      },
      {
        type: 'path',
        props: {
          d: 'M32 8 L54 44 L10 44 Z',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': 1,
          opacity: 0.85,
        },
      },
      {
        type: 'circle',
        props: {
          cx: 32,
          cy: 34,
          r: 10,
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': 1,
        },
      },
      {
        type: 'circle',
        props: { cx: 32, cy: 34, r: 1.6, fill: 'currentColor' },
      },
    ],
  },
};

// ── Color tokens (from src/styles/global.css) ──────────────────────────────

// membrane / index
const MEM_BG = '#fafaf8';
const MEM_TEXT = '#1c1c1a';
const MEM_MUTED = '#5c5c58';

// build
const BUILD_BG = '#f7f9fc';
const BUILD_TEXT = '#0a2540';
const BUILD_ACCENT = '#1a6fbf';

// breathe (autumn base)
const BREATHE_BG = '#fdf7f2';
const BREATHE_TEXT = '#4a1f0a';

// be
const BE_BG = '#f0f2f0';
const BE_TEXT = '#1a211c';

// ── JSX-object templates (Satori uses React-like element objects) ──────────

function div(style: Record<string, unknown>, children: unknown[]): object {
  return {
    type: 'div',
    props: { style: { display: 'flex', ...style }, children },
  };
}

function text(content: string, style: Record<string, unknown>): object {
  return {
    type: 'div',
    props: { style: { display: 'flex', ...style }, children: [content] },
  };
}

const URL_LABEL_STYLE: Record<string, unknown> = {
  position: 'absolute',
  bottom: 48,
  right: 56,
  fontSize: 18,
  letterSpacing: '0.04em',
  opacity: 0.65,
};

const templates: Record<string, object> = {
  // ── Membrane / root ────────────────────────────────────────────────────
  index: div(
    {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: MEM_BG,
      color: MEM_TEXT,
      fontFamily: 'Cormorant',
    },
    [
      // Sigil rendered as SVG element object
      {
        type: 'svg',
        props: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 64 64',
          width: 200,
          height: 200,
          children: [
            {
              type: 'circle',
              props: {
                cx: 32,
                cy: 32,
                r: 28,
                fill: 'none',
                stroke: MEM_TEXT,
                'stroke-width': 1.5,
                opacity: 0.45,
              },
            },
            {
              type: 'path',
              props: {
                d: 'M32 8 L54 44 L10 44 Z',
                fill: 'none',
                stroke: MEM_TEXT,
                'stroke-width': 1.5,
                opacity: 0.75,
              },
            },
            {
              type: 'circle',
              props: {
                cx: 32,
                cy: 34,
                r: 10,
                fill: 'none',
                stroke: MEM_TEXT,
                'stroke-width': 1.5,
              },
            },
            { type: 'circle', props: { cx: 32, cy: 34, r: 2, fill: MEM_TEXT } },
          ],
        },
      },
      text('Build · Breathe · Be', {
        fontFamily: 'Cormorant',
        fontSize: 52,
        fontStyle: 'italic',
        marginTop: 40,
        color: MEM_TEXT,
        letterSpacing: '0.02em',
      }),
      text('leighbertelsen.com', {
        ...URL_LABEL_STYLE,
        fontFamily: 'DM Sans',
        color: MEM_MUTED,
      }),
    ],
  ),

  // ── Build ──────────────────────────────────────────────────────────────
  build: div(
    {
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 96,
      paddingRight: 96,
      width: '100%',
      height: '100%',
      backgroundColor: BUILD_BG,
      color: BUILD_TEXT,
      fontFamily: 'DM Sans',
    },
    [
      text('// principal web developer · accessibility · fintech', {
        fontFamily: 'Fragment Mono',
        fontSize: 20,
        color: BUILD_ACCENT,
        marginBottom: 24,
        letterSpacing: '0.01em',
      }),
      text('Build', {
        fontFamily: 'DM Sans',
        fontSize: 210,
        fontWeight: 500,
        color: BUILD_TEXT,
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }),
      text('leighbertelsen.com', {
        ...URL_LABEL_STYLE,
        fontFamily: 'Fragment Mono',
        color: BUILD_ACCENT,
      }),
    ],
  ),

  // ── Breathe ────────────────────────────────────────────────────────────
  breathe: div(
    {
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 88,
      paddingRight: 88,
      width: '100%',
      height: '100%',
      backgroundColor: BREATHE_BG,
      color: BREATHE_TEXT,
      fontFamily: 'Cormorant',
    },
    [
      text('Breathe', {
        fontFamily: 'Cormorant',
        fontSize: 240,
        fontStyle: 'italic',
        color: BREATHE_TEXT,
        lineHeight: 0.9,
        letterSpacing: '-0.01em',
      }),
      text('leighbertelsen.com', {
        ...URL_LABEL_STYLE,
        fontFamily: 'DM Sans',
        color: BREATHE_TEXT,
      }),
    ],
  ),

  // ── Be ─────────────────────────────────────────────────────────────────
  be: div(
    {
      flexDirection: 'column',
      justifyContent: 'center',
      paddingLeft: 96,
      paddingRight: 96,
      width: '100%',
      height: '100%',
      backgroundColor: BE_BG,
      color: BE_TEXT,
      fontFamily: 'Lora',
    },
    [
      text('Be', {
        fontFamily: 'Lora',
        fontSize: 280,
        color: BE_TEXT,
        lineHeight: 1,
        letterSpacing: '-0.01em',
      }),
      text('leighbertelsen.com', {
        ...URL_LABEL_STYLE,
        fontFamily: 'DM Sans',
        color: BE_TEXT,
        letterSpacing: '0.02em',
      }),
    ],
  ),
};

// ── Route params ───────────────────────────────────────────────────────────

export const getStaticPaths = () => [
  { params: { world: 'index' } },
  { params: { world: 'build' } },
  { params: { world: 'breathe' } },
  { params: { world: 'be' } },
];

// ── Handler ────────────────────────────────────────────────────────────────

export const GET: APIRoute = async ({ params }) => {
  const world = params.world ?? 'index';
  const template = templates[world] ?? templates.index;

  const svg = await satori(template, {
    width: 1200,
    height: 630,
    fonts,
  });

  const png = new Resvg(svg).render().asPng();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
