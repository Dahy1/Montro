// Montro Residence copy: replaces the previous project's titles, pins and links.
// Applied to every HTML/JS/JSON file at build time (assets are untouched).
const HOME = '/Montro/Zone_A';
const TEXT_EDITS = [
  // external links of the original project -> project home
  ['https://kozielskapark.pl', HOME],
  ['https://rohe.pl/kozielskapark/', HOME],
  ['https://safainv.sa/en/home', HOME],
  // sales office (previous project's contact details removed)
  ['"locationTitle":"adres"', '"locationTitle":"Address"'],
  ['ul. Kozielska 11 (teren inwestycji) 40-076 Katowice', 'Sheikh Zayed City, Giza, Egypt'],
  ['"contatEmail":"kozielskapark@rohe.pl"', '"contatEmail":""'],
  ['"contatPhone":"570 281 495"', '"contatPhone":""'],
  // branding
  ['<title>Zayed Hills', '<title>Montro Residence'],
  ['High quality. In green seclusion.', 'Luxury Boutique Resort.'],
  ['Your place to live', 'Operated by Swiss Inn'],
  ['Back to Zayed Hills', 'Back to Montro'],
  ['Zayed Hills', 'Montro'],
  ['Retail units – Stage 1', 'Lobby & Services'],
  ['Retail units – Stage 4', 'Lounges'],
  ['Retail units – Stage 6', 'Resort Facilities'],
  ['"plachandlowy":"Shopping square"', '"plachandlowy":"Resort Plaza"'],
  ['"patio":"Patio"', '"patio":"Pool & Courtyard"'],
];

// Pin titles/texts, keyed by the app's POI ids.
const POI = {
  // amenities (camera videos unchanged)
  restauracja: { title: 'Business Lounge', text: 'A refined business lounge for meetings, calls and quiet work, with hotel-grade service.' },
  hotel: { title: 'Swiss Inn Reception', text: 'Operated by Swiss Inn: a 24/7 front desk and reception with concierge services.' },
  silownia: { title: 'Indoor & Outdoor Gym', text: 'Fully equipped indoor and outdoor gym for daily training.' },
  placzabaw: { title: 'Kids Area', text: 'A safe, dedicated play area for the youngest residents.' },
  padel: { title: 'Rooftop Lounge / Terrace', text: 'A rooftop lounge and terrace with open views — the place to unwind or host guests.' },
  ogrod: { title: 'Landscaped Gardens', text: 'Lush resort landscaping with shaded seating — only 22% of the 4-acre plot is built.' },
  hamaki: { title: 'Meditation & Yoga Areas', text: 'Calm outdoor spaces for meditation, yoga and relaxation.' },
  kawiarnia: { title: 'Co-working Spaces', text: 'Comfortable co-working spaces to meet, focus and work close to home.' },
  centrummedyczne: { title: 'Concierge Services', text: 'Concierge, optional room service and maintenance support on request.' },
  paczkomat: { title: 'Smart Gates & Security', text: 'Smart gates, security cameras and a 24/7 front desk.' },
  supermarket: { title: 'Housekeeping & Laundry', text: 'Daily or weekly housekeeping, laundry and cleaning services.' },
  zabka: { title: 'EV Charging Stations', text: 'Electric vehicle charging stations and underground parking.' },
  patio: { title: 'Swimming Pool', text: 'A resort-style swimming pool at the heart of the courtyard.' },
  plachandlowy: { title: 'Resort Plaza', text: 'The central plaza connecting Montro’s facilities.' },
  etap1lokaleuslugowe: { title: 'Lobby & Services', text: 'Reception, concierge and everyday services in one place.' },
  etap4lokaleuslugowe: { title: 'Lounges', text: 'Business and rooftop lounges for residents and guests.' },
  etap6lokaleuslugowe: { title: 'Resort Facilities', text: 'Facilities operated by Swiss Inn, from housekeeping to maintenance support.' },
  // locations (fact-sheet landmarks first)
  muzeumslaskie: { title: 'Grand Egyptian Museum — 15 min' },
  galeriakatowicka: { title: 'Mall of Arabia' },
  supersam: { title: 'Hyper One — 5 min' },
  stalexport: { title: 'Smart Village' },
  trasasrednicowa: { title: '26th of July Axis' },
  dworzecpkp: { title: 'Sphinx International Airport — 10 min' },
  akademiawychowaniafizycznego: { title: 'Al Ahly Club — 2 min' },
  katowickiecentrumonkologii: { title: 'Dandy Mall — 5 min' },
  superjednostka: { title: 'Zed Towers — 5 min' },
  spodek: { title: 'The Pyramids — 15 min' },
  placandrzeja: { title: 'Allegria SODIC' },
  placmiarki: { title: 'Al Rabwa' },
  autostrada4v: { title: 'Cairo–Alexandria Desert Road' },
  placwolnosci: { title: 'Arkan Plaza' },
  altus: { title: 'Galleria 40' },
  rynek: { title: 'Americana Plaza' },
  ktw: { title: 'Capital Business Park' },
  nospr: { title: 'Mall of Egypt' },
  dolinatrzechstawow: { title: 'Dreamland Golf Course' },
  filharmoniaslaska: { title: 'Juhayna Square' },
  miedzynarodowydworzecautobusowy: { title: 'Dahshur Link' },
  parkslaski: { title: 'Sheikh Zayed Central Park' },
  parkkosciuszki: { title: 'Pyramids Heights' },
  palacmlodziezy: { title: 'Sheikh Zayed Club' },
  rondozietka: { title: 'El Remaya Square' },
  teatrslaski: { title: 'Media Production City' },
  project: { title: 'Montro Residence' },
};

module.exports = { TEXT_EDITS, POI };
