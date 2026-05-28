export type DoshaWeights = { V: number; P: number; K: number };
export type Phase = "prakriti" | "vikriti";
export type DoshaKey = "V" | "P" | "K";

export interface QuizOption {
  t: string;
  w: DoshaWeights;
}

export interface QuizQuestion {
  phase: Phase;
  q: string;
  opts: QuizOption[];
}

export interface ElementMeta {
  key: string;
  code: string;
  name: string;
  color: string;
}

export interface ProductDef {
  nm: string;
  mark: string;
  price: string;
  dots: [string, string][];
  el: string;
}

export interface InferenceItem {
  c: string;
  t: string;
}

export interface ProductRec {
  p: string;
  why: string;
  cite: string;
}

export interface VikritiResult {
  headline: string;
  vaidya: string;
  desc: string;
  infer: InferenceItem[];
  products: ProductRec[];
}

export const QUESTIONS: QuizQuestion[] = [
  {phase:'prakriti', q:"What's your natural body frame?", opts:[
    {t:"Lean, thin, find it hard to gain weight", w:{V:2,P:0,K:0}},
    {t:"Medium, athletic, build muscle easily", w:{V:0,P:2,K:0}},
    {t:"Solid, broad, gain weight easily", w:{V:0,P:0,K:2}} ]},
  {phase:'prakriti', q:"How would you describe your skin, usually?", opts:[
    {t:"Dry, cool, rough in places", w:{V:2,P:0,K:0}},
    {t:"Warm, sensitive, prone to redness or breakouts", w:{V:0,P:2,K:0}},
    {t:"Smooth, thick, a little oily", w:{V:0,P:0,K:2}} ]},
  {phase:'prakriti', q:"And your hair?", opts:[
    {t:"Dry, frizzy, or fine", w:{V:2,P:0,K:0}},
    {t:"Fine, early greying or thinning", w:{V:0,P:2,K:0}},
    {t:"Thick, heavy, lustrous", w:{V:0,P:0,K:2}} ]},
  {phase:'prakriti', q:"What's your appetite like at baseline?", opts:[
    {t:"Irregular — sometimes ravenous, sometimes forget to eat", w:{V:2,P:0,K:0}},
    {t:"Strong and sharp — I get irritable if I skip a meal", w:{V:0,P:2,K:0}},
    {t:"Steady but slow — I can skip meals easily", w:{V:0,P:0,K:2}} ]},
  {phase:'prakriti', q:"How do you sleep, in general?", opts:[
    {t:"Light and easily interrupted", w:{V:2,P:0,K:0}},
    {t:"Moderate — but I run hot and wake in the night", w:{V:0,P:2,K:0}},
    {t:"Deep and long — hard to wake me", w:{V:0,P:0,K:2}} ]},
  {phase:'prakriti', q:"Under pressure, you tend to become…", opts:[
    {t:"Anxious, worried, scattered", w:{V:2,P:0,K:0}},
    {t:"Irritable, critical, intense", w:{V:0,P:2,K:0}},
    {t:"Quiet, withdrawn, but steady", w:{V:0,P:0,K:2}} ]},
  {phase:'prakriti', q:"How do you learn and remember?", opts:[
    {t:"Quick to grasp, quick to forget", w:{V:2,P:0,K:0}},
    {t:"Sharp, focused, strong recall", w:{V:0,P:2,K:0}},
    {t:"Slower to learn — but I never forget", w:{V:0,P:0,K:2}} ]},
  {phase:'vikriti', q:"How has your energy felt over the last month?", opts:[
    {t:"Wired but tired — restless, can't settle", w:{V:2,P:0,K:0}},
    {t:"Running hot — pushing too hard, fraying", w:{V:0,P:2,K:0}},
    {t:"Heavy and sluggish — low motivation", w:{V:0,P:0,K:2}} ]},
  {phase:'vikriti', q:"And your sleep, lately?", opts:[
    {t:"Hard to fall asleep — racing mind", w:{V:2,P:0,K:0}},
    {t:"I wake at 1–3am and can't switch off", w:{V:0,P:2,K:0}},
    {t:"Sleeping plenty but waking unrefreshed", w:{V:0,P:0,K:2}} ]},
  {phase:'vikriti', q:"Where's your stress sitting right now?", opts:[
    {t:"Anxious, overwhelmed, thoughts spiralling", w:{V:2,P:0,K:0}},
    {t:"Short fuse — irritable and impatient", w:{V:0,P:2,K:0}},
    {t:"Flat — checked out more than stressed", w:{V:0,P:0,K:2}} ]},
  {phase:'vikriti', q:"How's your digestion been this month?", opts:[
    {t:"Bloating, gas, irregular", w:{V:2,P:0,K:0}},
    {t:"Acidity, heartburn, reflux", w:{V:0,P:2,K:0}},
    {t:"Heavy and slow after eating", w:{V:0,P:0,K:2}} ]},
  {phase:'vikriti', q:"When you're overwhelmed, you reach for…", opts:[
    {t:"Another coffee, or my phone", w:{V:2,P:0,K:0}},
    {t:"Pushing through — more control, more work", w:{V:0,P:2,K:0}},
    {t:"Sleep, or comfort food", w:{V:0,P:0,K:2}} ]}
];

export const ELEMENTS: ElementMeta[] = [
  {key:'akasha', code:'AK', name:'akasha', color:'#5B4E7A'},
  {key:'vayu',   code:'VA', name:'vayu',   color:'#6A8AA8'},
  {key:'agni',   code:'AG', name:'agni',   color:'#C4541E'},
  {key:'jala',   code:'JA', name:'jala',   color:'#2E7A75'},
  {key:'prithvi',code:'PR', name:'prithvi',color:'#6B7A3D'}
];

export const DOSHA_NAME: Record<DoshaKey, string> = {V:'vata', P:'pitta', K:'kapha'};

export const PRODUCTS: Record<string, ProductDef> = {
  coffee:   {nm:'adaptogenic instant coffee', mark:'c', price:'₹399 / 7-pack', dots:[['AG','#C4541E'],['VA','#6A8AA8']], el:'agni · vayu'},
  ashwa:    {nm:'ashwagandha tablets',        mark:'a', price:'₹599', dots:[['PR','#6B7A3D'],['JA','#2E7A75']], el:'prithvi · jala'},
  brahmi:   {nm:'brahmi rasayana',            mark:'b', price:'₹799', dots:[['AK','#5B4E7A'],['VA','#6A8AA8']], el:'akasha · vayu'},
  triphala: {nm:'triphala churna',            mark:'t', price:'₹449', dots:[['PR','#6B7A3D'],['AG','#C4541E']], el:'prithvi · agni'},
  shilajit: {nm:'pure shilajit resin',        mark:'s', price:'₹1,499', dots:[['AG','#C4541E'],['PR','#6B7A3D']], el:'agni · prithvi'}
};

export const VIKRITI: Record<DoshaKey, VikritiResult> = {
  V:{
    headline:"You're running high in vayu.",
    vaidya:"Too much movement, not enough ground — a racing mind and a nervous system that won't downshift. A common pattern in 27- to 40-year-olds in metro roles. The work is to settle vayu without dulling the edge.",
    desc:'vata · air & ether ascending',
    infer:[
      {c:'74%', t:"You wake between 2–4am when a deadline is near, and struggle to fall back asleep."},
      {c:'69%', t:"Your focus is sharpest in the first two hours, then drops sharply after lunch."},
      {c:'66%', t:"You feel colder than the people around you — cold hands and feet especially."},
      {c:'61%', t:"You've tried meditation apps and abandoned them within three weeks."}
    ],
    products:[
      {p:'coffee',  why:"Calm-alert mornings. L-theanine smooths caffeine so you get focus without the jitter that feeds vayu.", cite:"L-theanine + caffeine improved attention-switching without arousal. Owen et al. 2008, crossover RCT."},
      {p:'ashwa',   why:"The grounding anchor for vayu. KSM-66 acts on cortisol directly — the way meditation can't.", cite:"KSM-66 600 mg/day — 27.9% serum cortisol reduction over 60 days. Chandrasekhar et al. 2012, n=64, double-blind RCT."},
      {p:'brahmi',  why:"An afternoon reset for the scattered mind — akasha clarity without stimulation.", cite:"Bacopa monnieri (CDRI 08) improved cognitive flexibility & executive function. Kean et al. 2022, n=93, RCT."}
    ]
  },
  P:{
    headline:"You're running high in agni.",
    vaidya:"The fire is over-burning — sharp, driven, and starting to fray at the edges. Heartburn, a short fuse, waking in the small hours. The work is to cool and contain agni without losing the drive that defines you.",
    desc:'pitta · fire ascending',
    infer:[
      {c:'72%', t:"You wake around 1–3am with your mind already working, and find it hard to let go."},
      {c:'70%', t:"You get irritable or snappy when meals are late — hunger hits as anger."},
      {c:'64%', t:"You've noticed more acidity or reflux in stressful weeks."},
      {c:'58%', t:"You set high standards and are hardest on yourself when you miss them."}
    ],
    products:[
      {p:'brahmi',  why:"Cooling clarity for an overheated mind — akasha over agni.", cite:"Bacopa monnieri (CDRI 08) improved attention and executive function. Kean et al. 2022, n=93, RCT."},
      {p:'triphala',why:"Settles the digestive fire and the acidity that comes with it.", cite:"Triphala 2000 mg/day modulated the gut microbiome over 4 weeks. Peterson et al. 2020, n=31, double-blind RCT."},
      {p:'ashwa',   why:"Lowers the cortisol load behind the 1am wake-ups.", cite:"KSM-66 600 mg/day — 27.9% cortisol reduction. Chandrasekhar et al. 2012, n=64, RCT."}
    ]
  },
  K:{
    headline:"You're running high in prithvi.",
    vaidya:"Heavy, slow, hard to get moving — the ground has become weight. Plenty of sleep but no lift from it; motivation thinning. The work is to rekindle agni and lighten prithvi.",
    desc:'kapha · earth ascending',
    infer:[
      {c:'71%', t:"Mornings are the hardest part of your day — you hit snooze more than once."},
      {c:'67%', t:"You feel heaviest and most sluggish in the hour after lunch."},
      {c:'62%', t:"You're sleeping eight hours or more but still wake unrefreshed."},
      {c:'57%', t:"You reach for warm, heavy, or sweet food when you're low."}
    ],
    products:[
      {p:'coffee',  why:"A clean lift for a sluggish morning — agni to move stagnant prithvi.", cite:"L-theanine + caffeine improved alertness and attention. Owen et al. 2008, crossover RCT."},
      {p:'shilajit',why:"Deep vitality for low energy and stamina — the agni rekindler.", cite:"Purified shilajit 250 mg twice daily — +20.45% total testosterone at 90 days. Pandit et al. 2016, n=75, RCT."},
      {p:'triphala',why:"Wakes up slow digestion and lightens the heaviness after meals.", cite:"Triphala 2000 mg/day modulated gut microbiota over 4 weeks. Peterson et al. 2020, n=31, RCT."}
    ]
  }
};

export const CITATIONS = [
  "1. Chandrasekhar K, Kapoor J, Anishetty S. A prospective, randomized double-blind, placebo-controlled study of ashwagandha root extract. Indian J Psychol Med. 2012;34(3):255–262.",
  "2. Owen GN, Parnell H, De Bruin EA, Rycroft JA. The combined effects of L-theanine and caffeine on cognitive performance and mood. Nutr Neurosci. 2008;11(4):193–198.",
  "3. Kean JD, et al. Effects of Bacopa monnieri (CDRI 08) on cognition. Phytother Res. 2022;36(2):996–1012.",
  "4. Peterson CT, et al. Effects of Triphala on gut microbiota: a double-blind, randomized, placebo-controlled pilot study. J Altern Complement Med. 2020;26(11):1015–1024.",
  "5. Pandit S, et al. Clinical evaluation of purified shilajit on testosterone levels in healthy volunteers. Andrologia. 2016;48(5):570–575."
];

export function vector(answers: (number | null)[], phase: Phase): DoshaWeights {
  const v: DoshaWeights = {V:0, P:0, K:0};
  QUESTIONS.forEach((Q, qi) => {
    if (Q.phase !== phase || answers[qi] === null) return;
    const w = Q.opts[answers[qi]!].w;
    v.V += w.V; v.P += w.P; v.K += w.K;
  });
  return v;
}

export function dominant(v: DoshaWeights): DoshaKey {
  return v.V >= v.P && v.V >= v.K ? 'V' : (v.P >= v.K ? 'P' : 'K');
}

export function toElements(v: DoshaWeights): Record<string, number> {
  const PRIOR = 1.5;
  const V = v.V + PRIOR, P = v.P + PRIOR, K = v.K + PRIOR;
  const raw: Record<string, number> = {
    akasha: 0.40 * V,
    vayu:   0.60 * V,
    agni:   0.70 * P,
    jala:   0.30 * P + 0.40 * K,
    prithvi:0.60 * K
  };
  let sum = Object.values(raw).reduce((a, b) => a + b, 0) || 1;
  const out: Record<string, number> = {};
  ELEMENTS.forEach(e => out[e.key] = Math.round(raw[e.key] / sum * 100));
  let diff = 100 - Object.values(out).reduce((a, b) => a + b, 0);
  const top = ELEMENTS.slice().sort((a, b) => out[b.key] - out[a.key])[0].key;
  out[top] += diff;
  return out;
}

export interface QuizResult {
  domVik: DoshaKey;
  domPrak: DoshaKey;
  elements: Record<string, number>;
  vikritiData: VikritiResult;
}

export function computeResults(answers: (number | null)[]): QuizResult {
  const prak = vector(answers, 'prakriti');
  const vik = vector(answers, 'vikriti');
  const domVik = dominant(vik);
  const domPrak = dominant(prak);
  const elements = toElements(vik);
  return { domVik, domPrak, elements, vikritiData: VIKRITI[domVik] };
}
