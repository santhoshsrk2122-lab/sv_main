const SV = path => 'https://www.svgroups.in/' + encodeURI(path);

export const projects = [
  {
    slug: 'sv-polaris',
    name: 'SV Polaris',
    type: 'Apartments',
    loc: 'Panathur, Marathahalli, Bangalore',
    img: SV('images/Frame 128.jpg'),
    hero: SV('images/1.jpg'),
    beds: '2 & 3 BHK',
    units: '231 Flats · 3 Blocks',
    enquiry: 'SV Polaris – Panathur',
    meta: {
      title: 'SV Polaris | 2 & 3 BHK Apartments in Panathur, Marathahalli — SV Groups',
      description: 'SV Polaris — 231 BBMP-approved 2 & 3 BHK flats across 3 blocks in Panathur, Marathahalli, built with MIVAN aluminium formwork and 80% open space.'
    },
    tagline: '2 & 3 BHK apartments in Panathur, Marathahalli — 231 flats across three towers with 80% open space.',
    heading: ['SV Polaris,', 'Panathur'],
    overview: [
      'The most luxurious, stylish and comfortable living spaces in the heart of Marathahalli — an excellent option for IT professionals seeking a harmonious work-life balance, close to world-class companies, schools and healthcare.',
      'Built with the MIVAN Aluminium Formwork System and 80% open space, every home enjoys natural light, cross-ventilation and long-lasting concrete construction.'
    ],
    highlights: ['Three towers — Shree, Veeram and Geetham', 'Basement + Ground + 13 floors', 'BBMP approved', 'MIVAN aluminium formwork with concrete walls'],
    amenitiesTitle: ['Built Around', 'Your Life'],
    amenities: [
      ['compass', '80% Open Space'], ['building', 'MIVAN Construction'], ['home', 'Vastu Compliant'],
      ['sun', 'Natural Light & Ventilation'], ['sofa', 'More Carpet Area'], ['pin', 'Near IT Hubs']
    ],
    gallery: [
      [SV('images/Frame 128.jpg'), 'SV Polaris apartment towers'],
      [SV('images/2.jpg'), 'SV Polaris project render'],
      [SV('images/3.jpg'), 'SV Polaris landscaped open spaces']
    ],
    plans: [
      ['Master Plan', SV('asset/updatedmasterplan.png'), 'SV Polaris master plan'],
      ['Floor Plan — 2 & 3 BHK', SV('asset/floorPlanUpdated3&2bhk.png'), 'SV Polaris floor plan — 2 & 3 BHK']
    ],
    facts: [
      ['Location', 'Panathur, Marathahalli'], ['Configuration', '2 & 3 BHK'], ['Towers', '3 Blocks'],
      ['Floors', 'B + G + 13'], ['Units', '231 Flats'], ['Approval', 'BBMP Approved'], ['Open Space', '80%']
    ],
    docs: [
      ['Brochure', SV('asset/brochureUpdated.pdf')],
      ['Master Plan', SV('asset/updatedmasterplan.png')],
      ['Floor Plan', SV('asset/floorPlanUpdated3&2bhk.png')]
    ],
    mapQuery: 'SV Polaris Panathur Bangalore',
    mapLink: 'https://maps.app.goo.gl/ZTsoczgQPevjuiET8'
  },
  {
    slug: 'sv-grandur',
    name: 'SV Grandur',
    type: 'Apartments',
    loc: 'Electronic City Phase 2, Bangalore',
    img: SV('images/Frame 99.jpg'),
    hero: SV('images/Frame 99.jpg'),
    beds: '2 & 3 BHK',
    units: '82% Open Space',
    enquiry: 'SV Grandur – Electronic City',
    meta: {
      title: 'SV Grandur | 2 & 3 BHK Apartments in Electronic City Phase 2 — SV Groups',
      description: 'SV Grandur — 2 & 3 BHK apartments in Electronic City Phase 2, Bangalore with 100% concrete walls, 82% open space, clubhouse, jogging track and a temple within the community.'
    },
    tagline: '2 & 3 BHK resort-style apartments in Electronic City Phase 2 with 100% concrete walls and 82% open space.',
    heading: ['SV Grandur,', 'Electronic City'],
    overview: [
      'Beautifully appointed 2 BHK and 3 BHK apartments built with 100% concrete walls and no common walls. Curtains of glass bring a wonderful sense of space and light to a resort-style community.',
      "With a metro station nearby and quick access to Hosur Road, SV Grandur saves you travel time while keeping you close to Electronic City's workplaces."
    ],
    highlights: ['100% concrete walls, no common walls', '82% open space with landscaped greenery', 'Near metro and Hosur Road', 'Temple within the complex'],
    amenitiesTitle: ['Resort-Style', 'Amenities'],
    amenities: [
      ['users', 'Clubhouse'], ['run', 'Jogging Track'], ['heart', "Children's Play Area"],
      ['leaf', 'Football Ground'], ['home', 'Temple'], ['shield', 'Security System']
    ],
    gallery: [
      [SV('images/Frame 99.jpg'), 'SV Grandur apartments'],
      [SV('images/Frame 100.jpg'), 'SV Grandur apartment towers'],
      [SV('images/Frame 101.jpg'), 'SV Grandur community']
    ],
    plans: [
      ['Master Plan', SV('images/Master Plan.png'), 'SV Grandur master plan']
    ],
    facts: [
      ['Location', 'Electronic City Phase 2'], ['Configuration', '2 & 3 BHK'], ['Construction', '100% Concrete Walls'],
      ['Open Space', '82%'], ['Connectivity', 'Metro & Hosur Road']
    ],
    docs: [
      ['Master Plan', SV('images/Master Plan.png')]
    ],
    mapQuery: 'SV Grandur Electronic City Phase 2 Bangalore',
    mapLink: 'https://goo.gl/maps/5MoJdNBcGHZmKgHu9'
  }
];

export const completed = [
  'Frame 129', 'Frame 130', 'Frame 131', 'Frame 132', 'Frame 127', 'Frame 102', 'Frame 104',
  'Frame 106', 'Frame 109', 'Frame 110', 'Frame 111', 'Frame 112', 'Frame 113'
].map(f => SV(`images/SV_Groups_2.O/${f}.jpg`)).concat(SV('images/Frame 114 recent.jpg'));

// Options accepted by the enquiry form
export const enquiryOptions = [...projects.map(p => p.enquiry), 'General Enquiry'];
