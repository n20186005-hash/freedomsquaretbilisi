/**
 * ერთადერთი მონაცემთა წყარო საიტისთვის:
 * დომენი, ობიექტის (TouristAttraction) NAP მონაცემები, ახლომდებარე
 * ღირსშესანიშნაობები და ოფიციალური წყაროები (E-E-A-T).
 *
 * შეცვალეთ მხოლოდ ეს ფაილი, როცა ობიექტის მონაცემები განახლდება.
 */

export const DOMAIN = 'freedomsquaretbilisi.com';
export const SITE_URL = `https://${DOMAIN}`;

/** საიტის ბოლო განახლების თარიღი (ISO 8601). */
export const LAST_UPDATED = '2026-09-10';

export const ATTRACTION = {
  /** ქართული ოფიციალური სახელი (Google Maps-ის NAP-ის შესაბამისი). */
  name: 'თავისუფლების მოედანი',
  /** ინგლისური სახელი — დომენის მნიშვნელობის შესაბამისი (freedomsquaretbilisi.com). */
  nameEn: 'Freedom Square',
  /** მოკლე/ხმარებაში გავრცელებული სახელი. */
  shortName: 'Freedom Square',
  /** ყველა ალტერნატიული სახელი ერთად, Schema.org-ისთვის. */
  alternateNames: [
    'Freedom Square',
    'Liberty Square',
    'Freedom Square Tbilisi',
    'თავისუფლების მოედანი',
  ],
  city: 'თბილისი',
  cityEn: 'Tbilisi',
  region: 'Tbilisi',
  country: 'საქართველო',
  countryEn: 'Georgia',
  countryCode: 'GE',
  streetAddress: '2 Freedom Square',
  plusCode: 'MRV2+8J',
  latitude: 41.6939923,
  longitude: 44.7982501,
  mapsShareUrl: 'https://maps.app.goo.gl/rqxiNyCApkLgwuFy7',
  /**
   * Google Maps-ის ჩაშენებული რუკა. კოორდინატები და place-ID იდენტურია
   * ოფიციალური embed-ისა; მხოლოდ ენის სეგმენტია ქართულზე მორგებული (ka/ge).
   */
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5298.9932149490005!2d44.79825011312099!3d41.693992271142584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d57d314f4a7%3A0x692f47f1da1dd66a!2z56ys5q-U5Yip5pav6Ieq55Sx5bm_5Zy6!5e1!3m2!1ska!2sge!4v1789027312134!5m2!1ska!2sge',
  rating: 4.7,
  reviewCount: 17408,
  openingHours: { opens: '00:00', closes: '23:59' },
} as const;

/** ოფიციალური/სამთავრობო რესურსები (.gov / .org). */
export const GOVT_TOURISM_URL = 'https://georgia.travel/';
export const GOVT_CITY_URL = 'https://tbilisi.gov.ge/';
export const NATIONAL_MUSEUM_URL = 'https://museum.ge/';

/** ახლომდებარე ღირსშესანიშნაობების სემანტიკური კლასტერი. */
export const NEARBY_LANDMARKS = [
  { name: 'ალექსანდრე პუშკინის სკვერი', nameEn: 'Alexandre Pushkin Square', distance: 'მოედნის გვერდით' },
  { name: 'რუსთაველის გამზირი', nameEn: 'Rustaveli Avenue', distance: 'ფეხით 1 წუთი' },
  { name: 'საქართველოს ეროვნული მუზეუმი', nameEn: 'National Museum of Georgia', distance: 'ფეხით ახლოს' },
  { name: 'კოტე აფხაზის ქუჩა / ძველი თბილისი', nameEn: 'Kote Abkhazi Street / Old Tbilisi', distance: 'პირდაპირი მარშრუტი' },
  { name: 'მშვიდობის ხიდი და სიონის ტაძარი', nameEn: 'Bridge of Peace & Sioni Cathedral', distance: 'ძველი თბილისი' },
] as const;

/** წყაროები და დამატებითი ინფორმაცია (E-E-A-T). */
export const SOURCES = [
  {
    name: 'საქართველოს ტურიზმის ეროვნული ადმინისტრაცია',
    url: 'https://georgia.travel/',
    note: 'ოფიციალური ტურისტული ინფორმაცია საქართველოს შესახებ.',
  },
  {
    name: 'ქალაქ თბილისის მუნიციპალიტეტი',
    url: 'https://tbilisi.gov.ge/',
    note: 'თბილისის მერიის ოფიციალური პორტალი — საქალაქო სივრცე და ინფრასტრუქტურა.',
  },
  {
    name: 'საქართველოს ეროვნული მუზეუმი',
    url: 'https://museum.ge/',
    note: 'მოედნიდან ფეხით მისაღწევი მუზეუმი რუსთაველის გამზირზე.',
  },
  {
    name: 'Google Maps — Freedom Square',
    url: 'https://maps.app.goo.gl/rqxiNyCApkLgwuFy7',
    note: 'მდებარეობა, NAP მონაცემები და ვიზიტორთა შეფასება (4.7 · 17 408).',
  },
  {
    name: 'Wikipedia — Freedom Square, Tbilisi',
    url: 'https://en.wikipedia.org/wiki/Freedom_Square,_Tbilisi',
    note: 'მოედნის ისტორია და სახელწოდებათა ცვლილებები.',
  },
  {
    name: 'Wikimedia Commons',
    url: 'https://commons.wikimedia.org/wiki/Category:Freedom_Square,_Tbilisi',
    note: 'ფოტოების წყარო და ლიცენზიები.',
  },
] as const;
