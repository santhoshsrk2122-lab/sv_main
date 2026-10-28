// Static page copy shared across pages. Project, gallery and testimonial data come from the Node API.
const SV = path => 'https://www.svgroups.in/' + encodeURI(path);
export { SV };

export const contact = {
  office: 'No.89, 3rd Floor, V.M. Cosma, Karthik Nagar, Marathahalli, Outer Ring Road, Bangalore – 560 037',
  officePhone: ['080-29505657', 'tel:+918029505657'],
  salesPhones: [['+91 93805 22599', 'tel:+919380522599'], ['+91 93805 22566', 'tel:+919380522566']],
  email: 'svpolaris@svgroups.in',
  whatsapp: 'https://wa.me/919380522599?text=Hello%20SV%20Groups%2C%20I%27d%20like%20to%20enquire%20about%20your%20apartments.',
  brochure: SV('asset/brochureUpdated.pdf'),
  mapEmbed: 'https://maps.google.com/maps?q=V.M.%20Cosma%2C%20Karthik%20Nagar%2C%20Marathahalli%2C%20Bangalore%20560037&z=15&output=embed',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100085960375209',
    instagram: 'https://www.instagram.com/svgroups_95/',
    youtube: 'https://www.youtube.com/channel/UCbwO3833z68trp6_YiJMs9Q'
  }
};

export const counters = [
  [110, 'Residential Projects'],
  [50, 'Commercial Projects'],
  [25, 'Industrial Projects'],
  [1000, 'Happy Customers']
];

export const services = [
  { icon: 'building', img: SV('images/2.jpg'), alt: 'SV Polaris project render', title: 'MIVAN Aluminium Formwork', text: 'Concrete structures are cast in place using the Aluminium Formwork System (MIVAN) — a simple, adaptable and precise construction method.' },
  { icon: 'shield', img: SV('images/Frame 100.jpg'), alt: 'SV Grandur apartment towers', title: '100% Concrete Walls', text: 'Long-term durability and lasting style without common walls — strengthened structures, accurate dimensions and a quality concrete finish.' },
  { icon: 'compass', img: SV('images/3.jpg'), alt: 'SV Polaris landscaped open spaces', title: '80%+ Open Space', text: 'Significantly architected with over 80% open space, giving every flat natural light, cross-ventilation and breathtaking vistas.' },
  { icon: 'home', img: SV('images/4.jpg'), alt: 'SV Polaris project amenities', title: 'Vastu-Compliant Homes', text: 'Units modelled for the feel of individual flats — Vastu compliant without compromising on style and space.' },
  { icon: 'sofa', img: SV('images/Frame 101.jpg'), alt: 'SV Grandur community', title: 'More Carpet Area', text: 'MIVAN walls and slabs need no additional plastering, giving you more usable carpet area in every home.' },
  { icon: 'pin', img: SV('images/1.jpg'), alt: 'SV Polaris aerial view', title: 'Prime Locations', text: 'Close to IT hubs, metro, schools and healthcare in Marathahalli, Panathur and Electronic City.' }
];

export const whyUs = [
  ['users', 'Professional Builder', 'A reputed Bangalore construction company since 1987 with residential, commercial and industrial projects delivered.'],
  ['tools', 'Advanced Tools', 'Aluminium Formwork (MIVAN) technology for precise, durable structures with a smooth concrete finish.'],
  ['compass', 'Vasthu Compliant', 'Thoughtfully planned, Vastu-compliant units that never compromise on style or space.'],
  ['calendar', 'Certified Experience', 'QMS-certified teams and monthly Project Review Management keep every project on schedule.'],
  ['receipt', 'Affordable Prices', 'Premium construction quality and generous carpet areas at genuine value for money.'],
  ['shield', 'Safety', 'Safety and housekeeping are rated on every project, with homes designed for privacy, safety and beauty.']
];

export const journey = [
  ['chat', 'Consultation', 'Talk to our sales team about configurations, pricing and availability.'],
  ['calendar', 'Site Visit', 'Walk through the project, the show flat and the surrounding neighbourhood.'],
  ['blueprint', 'Booking', 'Choose your unit with full clarity on floor plans and documentation.'],
  ['key', 'Handover', 'Move into a quality-checked home, built to last for generations.']
];

export const faqs = [
  ['Where are SV Groups projects located?', 'Our current projects are SV Polaris in Panathur, Marathahalli and SV Grandur in Electronic City Phase 2, Bangalore. Our head office is in Karthik Nagar, Marathahalli.'],
  ['Which apartment configurations are available?', 'Both SV Polaris and SV Grandur offer 2 BHK and 3 BHK apartments. Contact our sales team for current availability.'],
  ['What construction technology do you use?', 'We use the MIVAN Aluminium Formwork System with 100% concrete walls, giving precise dimensions, a smooth finish and more usable carpet area.'],
  ['How do I schedule a site visit?', 'Fill in the enquiry form on this page, call +91 93805 22599, or message us on WhatsApp and our team will arrange a convenient time.'],
  ['Where can I get the brochure and floor plans?', 'Brochures, master plans and floor plans can be downloaded from each project page, or requested from our sales team.']
];
