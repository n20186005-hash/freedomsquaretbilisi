/**
 * ენათა ცენტრალიზებული ლექსიკონი (ka / en / ru).
 * ყველა ხილული ტექსტი ამ ერთ ფაილშია, რომ გვერდის შაბლონი
 * (GuidePage.astro) იყოს ენა-ცნობიერი და არ იყოს სამჯერ გადუმრელი.
 *
 * ენის დამატებისას: დაამატე ჩანაწერი LOCALES-ში, შექმენი შესაბამისი
 * გვერდი (src/pages/<locale>/index.astro) და შევსე ამ ობიექტი იგივე კლავიშებით.
 */

export type Locale = 'ka' | 'en' | 'ru';

export const LOCALES: Locale[] = ['ka', 'en', 'ru'];
export const DEFAULT_LOCALE: Locale = 'ka';

/** თითოეული ენის გვერდის ფართი (canonical/hreflang-ისთვის). */
export const LOCALE_PATHS: Record<Locale, string> = {
  ka: '/',
  en: '/en/',
  ru: '/ru/',
};

/** <html lang> ატრიბუტი. */
export const HTML_LANG: Record<Locale, string> = {
  ka: 'ka',
  en: 'en',
  ru: 'ru',
};

/** Open Graph-ის რეგიონული კოდი. */
export const OG_LOCALE: Record<Locale, string> = {
  ka: 'ka_GE',
  en: 'en_US',
  ru: 'ru_RU',
};

export interface UI {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
  heroImgAlt: string;
  nightImgAlt: string;

  nav: { about: string; story: string; visit: string; transport: string; nearby: string; map: string; sources: string };

  heroEyebrow: string;
  heroTitleMain: string;
  heroTitleSub: string;
  heroSub: string;
  heroBtnPlan: string;
  heroBtnMap: string;
  googleReviews: string;
  heroFreeStrong: string;
  heroFreeSpan: string;
  heroHoursStrong: string;
  heroHoursSpan: string;
  heroPcStrong: string;
  heroPcSpan: string;
  photoCreditLabel: string;
  photoCreditAuthor: string;
  photoCreditAuthorNight: string;

  aboutKicker: string;
  aboutTitle: string;
  aboutIntro: string;
  aboutCluster: string;
  lastUpdatedLabel: string;
  factLabels: { official: string; address: string; plusCode: string; coords: string; rating: string; hours: string; reach: string };
  factValues: { official: string; address: string; plusCode: string; coords: string; hours: string; reach: string };

  storyKicker: string;
  storyTitle: string;
  storyParas: [string, string];
  timeline: { time: string; text: string }[];

  photoBreakEyebrow: string;
  photoBreakTitle: string;
  photoBreakText: string;
  photoBreakBtn: string;

  visitKicker: string;
  visitTitle: string;
  visitLead: string;
  visitPanels: { title: string; text: string }[];

  transportKicker: string;
  transportTitle: string;
  transportNote: string;
  routes: { tag: string; title: string; text: string }[];

  nearbyKicker: string;
  nearbyTitle: string;
  nearbyLead: string;
  nearbyBlocks: { heading: string; places: { name: string; text: string; dist: string }[] }[];

  mapKicker: string;
  mapTitle: string;
  mapAddress: string;
  mapBtn: string;
  mapAuthorityPre: string;
  mapAuthorityA: string;
  mapAuthorityB: string;

  sourcesKicker: string;
  sourcesTitle: string;
  sourcesLead: string;
  sourcesNotes: string[];
  sourcesMetaUpdated: string;
  sourcesMetaPhoto: string;

  faqKicker: string;
  faqTitle: string;
  faq: [string, string][];

  footerText: string;
  footerNapName: string;
  footerNapAddress: string;
  footerNapPc: string;
  footerPhotoPolicy: string;
  footerLinks: { about: string; faq: string; sources: string; maps: string; govTravel: string; city: string; museum: string };
  cookiePanelText: string;
  cookieAccept: string;
  cookieDecline: string;
  disclaimer: string;

  breadcrumb: { home: string; city: string; country: string };
}

export const ui: Record<Locale, UI> = {
  ka: {
    metaTitle: 'თავისუფლების მოედანი (Freedom Square, თბილისი) — Visitor Guide & Location',
    metaDescription: 'თავისუფლების მოედანი (Freedom Square / Liberty Square) — თბილისის ცენტრალური მოედანი საქართველოში. რუკა, მისვლა მეტროთი, ახლომდებარე ღირსშესანიშნაობები, ისტორია და ვიზიტის რჩევები.',
    ogTitle: 'თავისუფლების მოედანი (Freedom Square) — თბილისის გზამკვლევი',
    ogDescription: 'ოფიციალური ვიზიტორთა გზამკვლევი თავისუფლების მოედანზე (Freedom Square) — თბილისი, საქართველო. მდებარეობა, რუკა, მისვლა და ახლომდებარე ღირსშესანიშნაობები.',
    ogImageAlt: 'თავისუფლების მოედანი (Freedom Square) თბილისში, საქართველო',
    heroImgAlt: 'თავისუფლების მოედანი (Freedom Square) — მთავარი ხედი თბილისში, საქართველო',
    nightImgAlt: 'თავისუფლების მოედანი (Freedom Square) ღამით — წმინდა გიორგის მონუმენტი, თბილისი',

    nav: { about: 'მიმოხილვა', story: 'ისტორია', visit: 'ვიზიტი', transport: 'ტრანსპორტი', nearby: 'ახლომახლო', map: 'რუკა', sources: 'წყაროები' },

    heroEyebrow: 'თბილისის ისტორიული ცენტრი',
    heroTitleMain: 'თავისუფლების მოედანი',
    heroTitleSub: '(Freedom Square · თბილისი)',
    heroSub: 'ქალაქის წერტილი, სადაც რუსთაველის გამზირი, სოლოლაკი და ძველი თბილისი ერთმანეთს ხვდება — ოქროსფერი წმინდა გიორგის მონუმენტის გარშემო.',
    heroBtnPlan: 'ვიზიტის დაგეგმვა',
    heroBtnMap: 'Google Maps',
    googleReviews: 'Google შეფასება',
    heroFreeStrong: 'უფასო',
    heroFreeSpan: 'საჯარო მოედანი · ბილეთი არ არის',
    heroHoursStrong: '24 საათი',
    heroHoursSpan: 'ღია ურბანული სივრცე',
    heroPcStrong: 'MRV2+8J',
    heroPcSpan: 'თბილისი, საქართველო',
    photoCreditLabel: 'ფოტო',
    photoCreditAuthor: 'anjči / Wikimedia Commons · CC BY 2.0',
    photoCreditAuthorNight: 'CivArmy / Wikimedia Commons · CC BY 4.0',

    aboutKicker: 'მიმოხილვა',
    aboutTitle: 'თავისუფლების მოედანი (Freedom Square) — მოკლე მიმოხილვა.',
    aboutIntro: 'კეთილი იყოს თქვენი მობრძანება თავისუფლების მოედანზე, რომელიც ფართოდ არის ცნობილი როგორც ცენტრალური Freedom Square (ასევე Liberty Square). მოედანი მდებარეობს თბილისის გულში, საქართველოში, და წარმოადგენს რეგიონის მთავარ სატრანსპორტო და ტურისტულ კვანძს — აქედან იწყება ქალაქის ცენტრის ფეხით შესწავლა.',
    aboutCluster: 'მოედნის მონახულებისას ადვილად შეგიძლიათ იხილოთ ახლომდებარე ისტორიული ღირსშესანიშნაობები, მათ შორის ალექსანდრე პუშკინის სკვერი და რუსთაველის გამზირი, ასევე ძველი თბილისის ქუჩები მშვიდობის ხიდამდე.',
    lastUpdatedLabel: '2026 წლის 29 სექტემბერი',
    factLabels: { official: 'ოფიციალური სახელი', address: 'მისამართი', plusCode: 'Plus Code', coords: 'კოორდინატები', rating: 'Google შეფასება', hours: 'სამუშაო საათები', reach: 'მისვლა' },
    factValues: { official: 'თავისუფლების მოედანი (Freedom Square)', address: '2 Freedom Square, თბილისი, საქართველო', plusCode: 'MRV2+8J', coords: '41.6939923° N, 44.7982501° E', hours: '24 საათი · ღია საჯარო სივრცე', reach: 'მეტრო „თავისუფლების მოედანი“ (ხაზი 1)' },

    storyKicker: 'მოედნის ამბავი',
    storyTitle: 'თავისუფლების მოედნის ისტორია და მნიშვნელობა: ერთი მოედანი, რამდენიმე ეპოქის სახელი.',
    storyParas: [
      'თავისუფლების მოედანი თბილისის ერთ-ერთი მთავარი ისტორიული და კულტურული კვანძია. მისი მდებარეობა ბუნებრივად აკავშირებს რუსთაველის გამზირს ძველ თბილისთან და სოლოლაკთან, ამიტომ აქ ქალაქის სხვადასხვა ეპოქა ერთ სივრცეში იკითხება.',
      'მე-19 საუკუნის დასაწყისიდან მოედანს სხვადასხვა დანიშნულება და სახელი ჰქონდა. საბჭოთა პერიოდის შემდეგ „თავისუფლების მოედნის“ სახელწოდება კვლავ დამკვიდრდა. დღეს სივრცის ვიზუალური ცენტრი მაღალი სვეტია წმინდა გიორგის ოქროსფერი ქანდაკებით — თანამედროვე თბილისის ერთ-ერთი ყველაზე ამოსაცნობი სილუეტი.',
    ],
    timeline: [
      { time: 'მე-19 ს.', text: 'მოედანი თანდათან ჩამოყალიბდა ქალაქის მნიშვნელოვან საჯარო სივრცედ; ადრეულ პერიოდში მას „შეშის მოედანსაც“ უწოდებდნენ.' },
      { time: '1917', text: '„თავისუფლების“ სახელწოდება პირველად გამოჩნდა პოლიტიკურ და საზოგადოებრივ გარდაქმნებთან ერთად.' },
      { time: '1990-იანი', text: 'საბჭოთა სახელწოდებების შემდეგ მოედანს თავისუფლების სახელი დაუბრუნდა.' },
      { time: '2006', text: 'ცენტრში აღმართეს მაღალი სვეტი წმინდა გიორგის ქანდაკებით, ავტორი — ზურაბ წერეთელი.' },
    ],

    photoBreakEyebrow: 'დღიდან ღამემდე',
    photoBreakTitle: 'ოქროსფერი სვეტი ქალაქის ცვალებად ფონზე.',
    photoBreakText: 'დილით მოედანი უფრო მშვიდია და არქიტექტურის გადაღება მარტივდება. მზის ჩასვლის შემდეგ განათებული სვეტი, ტრანსპორტის მოძრაობა და ძველი ქალაქისკენ მიმავალი ქუჩები უფრო დრამატულ ქალაქურ ატმოსფეროს ქმნის.',
    photoBreakBtn: 'ფოტოს წყარო',

    visitKicker: 'ვიზიტის პრაქტიკული ნაწილი',
    visitTitle: 'მდებარეობა და ვიზიტი Freedom Square-ზე — მარტივი გაჩერება, რომელსაც ქალაქის მარშრუტში ჩასმა ყველაზე კარგად მუშაობს.',
    visitLead: 'მოედნისთვის ცალკე ბილეთი ან წინასწარი დაჯავშნა საჭირო არ არის. ის საუკეთესო საწყისი წერტილია ცენტრის ფეხით სანახავად.',
    visitPanels: [
      { title: 'საუკეთესო დრო / ხანგრძლივობა', text: 'ადრეული დილა — ნაკლები მოძრაობა და სუფთა კადრები. საღამო — მონუმენტის განათება და უფრო ცოცხალი ცენტრი. მხოლოდ მოედნისთვის დაახლოებით 20–40 წუთი დაგეგმეთ; ძველ თბილისთან ერთად — უფრო ხანგრძლივი გასეირნება.' },
      { title: 'ბილეთი / ხარჯი', text: 'მოედანზე შესვლა უფასოა. ხარჯი შეიძლება დაგჭირდეთ მხოლოდ ტრანსპორტის, პარკინგის, კვების ან ახლომდებარე მუზეუმების მონახულებისთვის.' },
      { title: 'პარკირება', text: 'ცენტრში ქუჩის ადგილი შეზღუდულია. პრაქტიკული ვარიანტია Galleria Tbilisi-ს ფასიანი მიწისქვეშა პარკინგი; ტარიფი ადგილზე გადაამოწმეთ.' },
      { title: 'ორიენტირი', text: 'მაღალი სვეტი წმინდა გიორგის ოქროსფერი ქანდაკებით მოედნის ცენტრშია და ფეხით გადაადგილებისას მთავარი ვიზუალური ორიენტირია.' },
      { title: 'რას შევუთავსოთ', text: 'მოედნიდან მარტივად გადადიხართ რუსთაველზე, კოტე აფხაზის ქუჩაზე, სოლოლაკსა და ძველი თბილისის ქუჩებში.' },
    ],

    transportKicker: 'დეტალური ტრანსპორტი',
    transportTitle: 'ცენტრში მანქანაზე ნაკლები დამოკიდებულება უფრო მარტივია.',
    transportNote: 'ავტობუსის ნომრები და მარშრუტები დროთა განმავლობაში იცვლება. გამგზავრებამდე გადაამოწმეთ TTC-ის ოფიციალურ აპში ან მიმდინარე მგზავრობის დამგეგმავში.',
    routes: [
      { tag: 'M', title: 'მეტრო — „თავისუფლების მოედანი“', text: 'ყველაზე პირდაპირი საზოგადოებრივი ტრანსპორტია. სადგური ქალაქის პირველ მეტროს ხაზზეა და გასასვლელი უშუალოდ ცენტრალურ არეალში გამოდის.' },
      { tag: 'B', title: 'ავტობუსი', text: 'ცენტრს მრავალი მუნიციპალური მარშრუტი ემსახურება, მაგრამ ნომრები შეიძლება შეიცვალოს. გამოიყენეთ თბილისის სატრანსპორტო კომპანიის მიმდინარე მარშრუტები და რეალურ დროში ინფორმაცია.' },
      { tag: '↟', title: 'ფეხით — ძველი თბილისიდან', text: 'კოტე აფხაზის ქუჩა პირდაპირ აკავშირებს მოედანს მეიდანთან და ძველი თბილისის მთავარ საფეხმავლო ზონებთან — კარგი არჩევანია ქალაქის ცენტრის ფეხით შესაცნობად.' },
      { tag: 'T', title: 'ტაქსი / აპით გამოძახება', text: 'მანქანით მისვლა შესაძლებელია, თუმცა პიკის საათებში ცენტრი დატვირთულია. ჩამოსასვლელად შეარჩიეთ მოედნის გარშემო უსაფრთხო და ნებადართული ადგილი, შემდეგ ფეხით გააგრძელეთ.' },
    ],

    nearbyKicker: 'ახლომახლო',
    nearbyTitle: 'ახლომდებარე ღირსშესანიშნაობები Freedom Square-ის გარშემო: სანახაობა და ქართული გემო ერთი გასეირნების რადიუსში.',
    nearbyLead: 'თავისუფლების მოედნის მთავარი უპირატესობა მის გარშემო არსებული ქალაქური სიმჭიდროვეა — ისტორია, არქიტექტურა, მუზეუმები და კვება ერთმანეთს ბუნებრივად ებმის. მოედნიდან ფეხით მისაღებია ალექსანდრე პუშკინის სკვერი, რუსთაველის გამზირი და ძველი თბილისის ღერძი.',
    nearbyBlocks: [
      { heading: 'სანახაობები', places: [
        { name: 'ალექსანდრე პუშკინის სკვერი', text: 'პატარა მწვანე სივრცე უშუალოდ მოედნის გვერდით; აქვეა ტურისტული საინფორმაციო ცენტრი.', dist: 'მოედნის გვერდით' },
        { name: 'საქართველოს ეროვნული მუზეუმი', text: 'რუსთაველის დასაწყისში — კარგი გაგრძელებაა ისტორიითა და კულტურით დაინტერესებულთათვის.', dist: 'ფეხით ახლოს' },
        { name: 'კოტე აფხაზის ქუჩა / ძველი თბილისი', text: 'მოედნიდან ძველი ქალაქისკენ მიმავალი ისტორიული სავაჭრო და სასეირნო ღერძი.', dist: 'პირდაპირი მარშრუტი' },
        { name: 'მშვიდობის ხიდი და სიონი', text: 'ძველი თბილისის მიმართულებით გასეირნების ბუნებრივი გაგრძელება მტკვრის სანაპირომდე.', dist: 'ძველი თბილისი' },
      ] },
      { heading: 'ქართული სამზარეულო', places: [
        { name: 'Badagoni — Georgian Wines & Kitchen', text: 'მოედანზე, ქართული კერძებისა და ღვინის მიმართულებით; მოსახერხებელი არჩევანია ხედის შეცვლის გარეშე.', dist: 'Freedom Sq. 4' },
        { name: 'Khinkali Collection', text: 'პუშკინის ქუჩაზე, ხინკალზე ორიენტირებული ქართული რესტორანი.', dist: 'Pushkin St. 19' },
        { name: 'Pasanauri', text: 'ლეონიძის ქუჩაზე — კლასიკური ქართული კერძები, მათ შორის ხინკალი და ხაჭაპური.', dist: 'Leonidze St. 7/2' },
        { name: 'რჩევა', text: 'საღამოს და შაბათ-კვირას პოპულარულ ადგილებზე შეიძლება რიგი იყოს; მიმდინარე საათები და დაჯავშნა ვიზიტამდე გადაამოწმეთ.', dist: 'მიმდინარე ინფორმაცია' },
      ] },
    ],

    mapKicker: 'რუკაზე',
    mapTitle: 'თავისუფლების მოედანი',
    mapAddress: '2 Freedom Square<br />თბილისი, საქართველო<br />Plus Code: MRV2+8J',
    mapBtn: 'გახსნა Google Maps-ში',
    mapAuthorityPre: 'ოფიციალური ინფორმაციისთვის იხილეთ',
    mapAuthorityA: 'საქართველოს ტურიზმის ეროვნული ადმინისტრაცია (georgia.travel)',
    mapAuthorityB: 'თბილისის მერია (tbilisi.gov.ge)',

    sourcesKicker: 'წყაროები',
    sourcesTitle: 'წყაროები და დამატებითი ინფორმაცია.',
    sourcesLead: 'ეს გვერდი ეყრდნობა ოფიციალურ და საჯარო წყაროებს. მონაცემები (სატრანსპორტო მარშრუტები, ობიექტების სამუშაო საათები) შეიძლება შეიცვალოს — ვიზიტამდე გადაამოწმეთ შესაბამის ოფიციალურ რესურსზე.',
    sourcesNotes: [
      'ოფიციალური ტურისტული ინფორმაცია საქართველოს შესახებ.',
      'თბილისის მერიის ოფიციალური პორტალი — საქალაქო სივრცე და ინფრასტრუქტურა.',
      'მოედნიდან ფეხით მისაღწევი მუზეუმი რუსთაველის გამზირზე.',
      'მდებარეობა, NAP მონაცემები და ვიზიტორთა შეფასება (4.7 · 17 536).',
      'მოედნის ისტორია და სახელწოდებათა ცვლილებები.',
      'ფოტოების წყარო და ლიცენზიები.',
    ],
    sourcesMetaUpdated: 'ბოლო განახლება:',
    sourcesMetaPhoto: 'ფოტოების წყარო: Wikimedia Commons (anjči · CC BY 2.0, CivArmy · CC BY 4.0). ფოტოების უფლებები ეკუთვნის მათ ორიგინალ ავტორებს.',

    faqKicker: 'FAQ',
    faqTitle: 'ხშირად დასმული კითხვები.',
    faq: [
      ['სად მდებარეობს თავისუფლების მოედანი?', 'თავისუფლების მოედანი (Freedom Square) მდებარეობს თბილისის ცენტრში, საქართველოში, მისამართზე 2 Freedom Square (Plus Code MRV2+8J). ის რუსთაველის გამზირს, სოლოლაკსა და ძველი თბილისს აკავშირებს.'],
      ['თავისუფლების მოედანზე შესვლა ფასიანია?', 'არა. ეს საჯარო ქალაქის მოედანია და შესასვლელი ბილეთი არ არის საჭირო. ახლომდებარე მუზეუმებსა და სხვა ობიექტებს შეიძლება საკუთარი საფასური ჰქონდეთ.'],
      ['რამდენი დრო დავუთმო მოედანს?', 'მხოლოდ მოედნის სანახავად დაახლოებით 20–40 წუთი საკმარისია. თუ ძველი თბილისს, სოლოლაკს ან რუსთაველის გამზირსაც აერთიანებთ, დაგეგმეთ უფრო გრძელი სასეირნო მარშრუტი.'],
      ['რომელია საუკეთესო დრო ფოტოების გადასაღებად?', 'ადრეული დილა უფრო მშვიდი და ნაკლებად ხალხმრავალია. საღამოს კი მოედანი განათებულია და ოქროსფერი წმინდა გიორგის მონუმენტი განსაკუთრებით ეფექტურად ჩანს.'],
      ['როგორ მივიდე საზოგადოებრივი ტრანსპორტით?', 'ყველაზე მარტივი არჩევანია მეტროს სადგური „თავისუფლების მოედანი“. ავტობუსის მარშრუტები შეიძლება შეიცვალოს, ამიტომ მგზავრობამდე გამოიყენეთ თბილისის სატრანსპორტო კომპანიის მიმდინარე მარშრუტების დაგეგმვა.'],
      ['სად შეიძლება მანქანის გაჩერება?', 'ქალაქის ცენტრში ქუჩის ადგილი შეზღუდულია. მოედანთან მდებარე Galleria Tbilisi-ს აქვს ფასიანი მიწისქვეშა პარკინგი; მიმდინარე ტარიფი და პირობები ადგილზე გადაამოწმეთ.'],
      ['მოედანი ღამითაც ხელმისაწვდომია?', 'როგორც ღია საჯარო სივრცე, მოედანი დღე-ღამის განმავლობაში ხელმისაწვდომია. გვიან საათებში ჩვეულებრივი ქალაქური სიფრთხილე დაიცავით.'],
      ['რომელი ღირსშესანიშნაობებია მოედნის ახლოს?', 'მოედნიდან ფეხით მისაღებია ალექსანდრე პუშკინის სკვერი, რუსთაველის გამზირი, საქართველოს ეროვნული მუზეუმი, კოტე აფხაზის ქუჩა და ძველი თბილისი, ასევე მშვიდობის ხიდი და სიონის ტაძარი.'],
    ],

    footerText: 'ეს გვერდი შექმნილია თავისუფლების მოედნის დამოუკიდებელი სამოგზაურო გზამკვლევის სახით. სატრანსპორტო მარშრუტები, პარკირების პირობები და კერძო ობიექტების სამუშაო დრო ვიზიტამდე გადაამოწმეთ.',
    footerNapName: 'თავისუფლების მოედანი (Freedom Square)',
    footerNapAddress: '2 Freedom Square, თბილისი, საქართველო',
    footerNapPc: 'Plus Code: MRV2+8J',
    footerPhotoPolicy: 'საიტზე წარმოდგენილი ყველა ფოტოს ქონებრივი და საავტორო უფლებები ეკუთვნის მათ ორიგინალ ავტორებს. All images displayed on this website remain the property of their original photographers.',
    footerLinks: { about: 'მიმოხილვა', faq: 'FAQ', sources: 'წყაროები', maps: 'Google Maps', govTravel: 'Georgia Travel (georgia.travel)', city: 'თბილისის მერია', museum: 'ეროვნული მუზეუმი' },
    cookiePanelText: 'ეს საიტი Google Analytics 4-ს (GA4) იყენებს მხოლოდ თქვენი თანხმობის შემდეგ, ვიზიტების სტატისტიკის გასაანალიზებლად. თანხმობა ნებაყოფლობითია და შეგიძლიათ ნებისმიერ დროს შეცვალოთ.',
    cookieAccept: 'თანხმობა',
    cookieDecline: 'უარი',
    disclaimer: 'არაოფიციალური ვებგვერდი — არ წარმოადგენს თბილისის მერიის, საქართველოს ტურიზმის ეროვნული ადმინისტრაციის ან თავისუფლების მოედნის ოფიციალურ რესურსს. დომენი: freedomsquaretbilisi.com',
    breadcrumb: { home: 'მთავარი', city: 'თბილისი', country: 'საქართველო' },
  },

  en: {
    metaTitle: 'Freedom Square (Liberty Square), Tbilisi — Visitor Guide & Location',
    metaDescription: 'Freedom Square (Liberty Square) — the central square of Tbilisi, Georgia. Map, how to get there by metro, nearby attractions, history and visiting tips.',
    ogTitle: 'Freedom Square (Liberty Square) — Tbilisi Visitor Guide',
    ogDescription: 'Official visitor guide to Freedom Square (Liberty Square) — Tbilisi, Georgia. Location, map, how to get there and nearby attractions.',
    ogImageAlt: 'Freedom Square (Liberty Square) in Tbilisi, Georgia',
    heroImgAlt: 'Freedom Square (Liberty Square) — main view in Tbilisi, Georgia',
    nightImgAlt: 'Freedom Square (Liberty Square) at night — the St. George monument, Tbilisi',

    nav: { about: 'Overview', story: 'History', visit: 'Visit', transport: 'Getting there', nearby: 'Nearby', map: 'Map', sources: 'Sources' },

    heroEyebrow: 'Historic centre of Tbilisi',
    heroTitleMain: 'Freedom Square',
    heroTitleSub: '(Liberty Square · Tbilisi)',
    heroSub: 'The city’s meeting point where Rustaveli Avenue, Sololaki and the Old Town converge — around the golden St. George monument.',
    heroBtnPlan: 'Plan your visit',
    heroBtnMap: 'Google Maps',
    googleReviews: 'Google reviews',
    heroFreeStrong: 'Free',
    heroFreeSpan: 'Public square · no ticket required',
    heroHoursStrong: '24 hours',
    heroHoursSpan: 'Open public space',
    heroPcStrong: 'MRV2+8J',
    heroPcSpan: 'Tbilisi, Georgia',
    photoCreditLabel: 'Photo',
    photoCreditAuthor: 'anjči / Wikimedia Commons · CC BY 2.0',
    photoCreditAuthorNight: 'CivArmy / Wikimedia Commons · CC BY 4.0',

    aboutKicker: 'Overview',
    aboutTitle: 'Freedom Square (Liberty Square) — a quick overview.',
    aboutIntro: 'Welcome to Freedom Square, widely known as the central Freedom Square (also Liberty Square). The square sits in the heart of Tbilisi, Georgia, and is the region’s main transport and tourist hub — the best starting point to explore the city centre on foot.',
    aboutCluster: 'While visiting the square you can easily reach nearby historic landmarks, including Pushkin Square and Rustaveli Avenue, as well as the streets of the Old Town all the way to the Bridge of Peace.',
    lastUpdatedLabel: '29 September 2026',
    factLabels: { official: 'Official name', address: 'Address', plusCode: 'Plus Code', coords: 'Coordinates', rating: 'Google rating', hours: 'Opening hours', reach: 'Getting there' },
    factValues: { official: 'Freedom Square (Liberty Square)', address: '2 Freedom Square, Tbilisi, Georgia', plusCode: 'MRV2+8J', coords: '41.6939923° N, 44.7982501° E', hours: '24 hours · open public space', reach: "Metro 'Freedom Square' (Line 1)" },

    storyKicker: 'The square’s story',
    storyTitle: 'The history and meaning of Freedom Square: one square, several eras of names.',
    storyParas: [
      'Freedom Square is one of Tbilisi’s main historical and cultural crossroads. Its location naturally links Rustaveli Avenue with the Old Town and Sololaki, so here the city’s different eras are read in a single space.',
      'Since the early 19th century the square served different purposes and carried different names. After the Soviet period the name "Freedom Square" was restored. Today the visual centre of the space is a tall column with the golden St. George monument — one of modern Tbilisi’s most recognizable silhouettes.',
    ],
    timeline: [
      { time: '19th c.', text: 'The square gradually formed into an important public space of the city; in an earlier period it was also called the "Fire Square".' },
      { time: '1917', text: 'The name "Freedom" first appeared alongside political and social transformations.' },
      { time: '1990s', text: 'After the Soviet-era names, the square regained its freedom name.' },
      { time: '2006', text: 'A tall column with the St. George monument was erected in the centre, by Zurab Tsereteli.' },
    ],

    photoBreakEyebrow: 'From day to night',
    photoBreakTitle: 'The golden column against the changing city.',
    photoBreakText: 'In the morning the square is calmer and easier to photograph. After sunset the lit column, moving traffic and the streets leading to the Old Town create a more dramatic urban atmosphere.',
    photoBreakBtn: 'Photo source',

    visitKicker: 'Practical side of the visit',
    visitTitle: 'Location and visiting Freedom Square — a simple stop that fits best into your city route.',
    visitLead: 'The square needs no separate ticket or advance booking. It is the best starting point to see the centre on foot.',
    visitPanels: [
      { title: 'Best time / duration', text: 'Early morning — less movement and clean frames. Evening — the monument is lit and the centre is livelier. Plan about 20–40 minutes for the square alone; with the Old Town, a longer walk.' },
      { title: 'Ticket / cost', text: 'Entry to the square is free. You may only need to pay for transport, parking, food or nearby museums.' },
      { title: 'Parking', text: 'Street parking in the centre is limited. A practical option is the paid underground parking at Galleria Tbilisi; check the current rate on site.' },
      { title: 'Orientation', text: 'The tall column with the golden St. George monument stands in the centre of the square and is the main visual reference point on foot.' },
      { title: 'What to combine', text: 'From the square you can easily move on to Rustaveli, Kote Abkhazi Street, Sololaki and the streets of the Old Town.' },
    ],

    transportKicker: 'Getting there in detail',
    transportTitle: 'Relying less on a car in the centre is simpler.',
    transportNote: 'Bus numbers and routes change over time. Before travelling, check the current routes and real-time info in the TTC official app or planner.',
    routes: [
      { tag: 'M', title: "Metro — 'Freedom Square'", text: "The most direct public transport. The station is on the city's first metro line and the exit comes out right in the central area." },
      { tag: 'B', title: 'Bus', text: 'Many municipal routes serve the centre, but numbers may change. Use the current Tbilisi transport company routes and real-time information.' },
      { tag: '↟', title: 'On foot — from the Old Town', text: 'Kote Abkhazi Street directly links the square with Meidan and the Old Town’s main pedestrian zones — a good choice to get to know the city centre on foot.' },
      { tag: 'T', title: 'Taxi / ride app', text: 'Driving is possible, but the centre is busy at peak hours. Choose a safe, permitted drop-off around the square, then continue on foot.' },
    ],

    nearbyKicker: 'Nearby',
    nearbyTitle: 'Nearby attractions around Freedom Square: sights and Georgian flavour within a single walk.',
    nearbyLead: 'The main advantage of Freedom Square is the urban density around it — history, architecture, museums and dining blend naturally. From the square you can reach on foot Pushkin Square, Rustaveli Avenue and the Old Town axis.',
    nearbyBlocks: [
      { heading: 'Sights', places: [
        { name: 'Pushkin Square', text: 'A small green space right next to the square; it also hosts a tourist information centre.', dist: 'Next to the square' },
        { name: 'National Museum of Georgia', text: 'At the start of Rustaveli — a good continuation for those interested in history and culture.', dist: 'A short walk' },
        { name: 'Kote Abkhazi Street / Old Town', text: 'The historic trading and promenade axis leading from the square to the Old Town.', dist: 'Direct route' },
        { name: 'Bridge of Peace & Sioni', text: 'A natural continuation of a walk towards the Old Town, down to the riverbank.', dist: 'Old Town' },
      ] },
      { heading: 'Georgian cuisine', places: [
        { name: 'Badagoni — Georgian Wines & Kitchen', text: 'On the square, focused on Georgian dishes and wine; a convenient choice without changing the view.', dist: 'Freedom Sq. 4' },
        { name: 'Khinkali Collection', text: 'On Pushkin Street, a Georgian restaurant focused on khinkali.', dist: 'Pushkin St. 19' },
        { name: 'Pasanauri', text: 'On Leonidze Street — classic Georgian dishes including khinkali and khachapuri.', dist: 'Leonidze St. 7/2' },
        { name: 'Tip', text: 'In the evening and at weekends popular spots may have a queue; check current hours and book before your visit.', dist: 'Current info' },
      ] },
    ],

    mapKicker: 'On the map',
    mapTitle: 'Freedom Square',
    mapAddress: '2 Freedom Square<br />Tbilisi, Georgia<br />Plus Code: MRV2+8J',
    mapBtn: 'Open in Google Maps',
    mapAuthorityPre: 'For official information see',
    mapAuthorityA: 'National Tourism Administration of Georgia (georgia.travel)',
    mapAuthorityB: 'Tbilisi City Hall (tbilisi.gov.ge)',

    sourcesKicker: 'Sources',
    sourcesTitle: 'Sources and additional information.',
    sourcesLead: 'This page relies on official and public sources. Data (transport routes, opening hours of venues) may change — verify with the relevant official resource before your visit.',
    sourcesNotes: [
      'Official tourist information about Georgia.',
      'Official portal of the Tbilisi City Hall — urban space and infrastructure.',
      'A museum reachable on foot from the square, on Rustaveli Avenue.',
      'Location, NAP data and visitor rating (4.7 · 17 536).',
      'History of the square and changes of its names.',
      'Source of photos and licences.',
    ],
    sourcesMetaUpdated: 'Last updated:',
    sourcesMetaPhoto: 'Photo sources: Wikimedia Commons (anjči · CC BY 2.0, CivArmy · CC BY 4.0). All images displayed on this website remain the property of their original photographers.',

    faqKicker: 'FAQ',
    faqTitle: 'Frequently asked questions.',
    faq: [
      ['Where is Freedom Square located?', 'Freedom Square is in the centre of Tbilisi, Georgia, at 2 Freedom Square (Plus Code MRV2+8J). It links Rustaveli Avenue, Sololaki and the Old Town.'],
      ['Is entry to Freedom Square paid?', 'No. It is a public city square and no entry ticket is required. Nearby museums and other venues may have their own admission.'],
      ['How much time should I spend at the square?', 'About 20–40 minutes is enough to see the square alone. If you combine it with the Old Town, Sololaki or Rustaveli, plan a longer walk.'],
      ['What is the best time for photos?', 'Early morning is calmer and less crowded. In the evening the square is lit and the golden St. George monument looks especially striking.'],
      ['How do I get there by public transport?', 'The simplest option is the metro station "Freedom Square". Bus routes may change, so use the current Tbilisi transport company route planner before travelling.'],
      ['Where can I park a car?', 'Street parking in the centre is limited. The nearby Galleria Tbilisi has paid underground parking; check the current rate and conditions on site.'],
      ['Is the square accessible at night?', 'As an open public space, the square is accessible around the clock. Keep normal city caution at late hours.'],
      ['Which landmarks are near the square?', 'On foot from the square you can reach Pushkin Square, Rustaveli Avenue, the National Museum of Georgia, Kote Abkhazi Street and the Old Town, as well as the Bridge of Peace and Sioni Cathedral.'],
    ],

    footerText: 'This page was created as an independent visitor guide to Freedom Square. Verify transport routes, parking conditions and opening hours of private venues before your visit.',
    footerNapName: 'Freedom Square (Liberty Square)',
    footerNapAddress: '2 Freedom Square, Tbilisi, Georgia',
    footerNapPc: 'Plus Code: MRV2+8J',
    footerPhotoPolicy: 'All photos displayed on this website remain the property of their original photographers.',
    footerLinks: { about: 'Overview', faq: 'FAQ', sources: 'Sources', maps: 'Google Maps', govTravel: 'Georgia Travel (georgia.travel)', city: 'Tbilisi City Hall', museum: 'National Museum' },
    cookiePanelText: 'This site uses Google Analytics 4 (GA4) only after your consent, to analyse visit statistics. Consent is voluntary and you can change it at any time.',
    cookieAccept: 'Accept',
    cookieDecline: 'Decline',
    disclaimer: 'Unofficial website — not an official resource of the Tbilisi City Hall, the National Tourism Administration of Georgia or Freedom Square. Domain: freedomsquaretbilisi.com',
    breadcrumb: { home: 'Home', city: 'Tbilisi', country: 'Georgia' },
  },

  ru: {
    metaTitle: 'Площадь Свободы (Freedom Square), Тбилиси — Путеводитель и расположение',
    metaDescription: 'Площадь Свободы (Liberty Square) — центральная площадь Тбилиси, Грузия. Карта, как добраться на метро, ближайшие достопримечательности, история и советы для посещения.',
    ogTitle: 'Площадь Свободы (Freedom Square) — Путеводитель по Тбилиси',
    ogDescription: 'Официальный путеводитель по площади Свободы (Freedom Square) — Тбилиси, Грузия. Расположение, карта, как добраться и ближайшие достопримечательности.',
    ogImageAlt: 'Площадь Свободы (Freedom Square) в Тбилиси, Грузия',
    heroImgAlt: 'Площадь Свободы (Freedom Square) — общий вид в Тбилиси, Грузия',
    nightImgAlt: 'Площадь Свободы (Freedom Square) ночью — памятник Святого Георгия, Тбилиси',

    nav: { about: 'Обзор', story: 'История', visit: 'Визит', transport: 'Как добраться', nearby: 'Рядом', map: 'Карта', sources: 'Источники' },

    heroEyebrow: 'Исторический центр Тбилиси',
    heroTitleMain: 'Площадь Свободы',
    heroTitleSub: '(Liberty Square · Тбилиси)',
    heroSub: 'Городская точка встречи, где проспект Руставели, Сололаки и Старый город сходятся у золотого памятника Святого Георгия.',
    heroBtnPlan: 'Спланировать визит',
    heroBtnMap: 'Google Maps',
    googleReviews: 'отзывов Google',
    heroFreeStrong: 'Бесплатно',
    heroFreeSpan: 'Общественная площадь · билет не нужен',
    heroHoursStrong: '24 часа',
    heroHoursSpan: 'Открытое общественное пространство',
    heroPcStrong: 'MRV2+8J',
    heroPcSpan: 'Тбилиси, Грузия',
    photoCreditLabel: 'Фото',
    photoCreditAuthor: 'anjči / Wikimedia Commons · CC BY 2.0',
    photoCreditAuthorNight: 'CivArmy / Wikimedia Commons · CC BY 4.0',

    aboutKicker: 'Обзор',
    aboutTitle: 'Площадь Свободы (Liberty Square) — краткий обзор.',
    aboutIntro: 'Добро пожаловать на площадь Свободы, широко известную как центральная Freedom Square (также Liberty Square). Площадь расположена в сердце Тбилиси, Грузия, и является главным транспортным и туристическим узлом региона — лучшей отправной точкой для пешеходного знакомства с центром города.',
    aboutCluster: 'Посещая площадь, вы легко можете увидеть ближайшие исторические достопримечательности, включая сквер Пушкина и проспект Руставели, а также улицы Старого города вплоть до Моста мира.',
    lastUpdatedLabel: '29 сентября 2026',
    factLabels: { official: 'Официальное название', address: 'Адрес', plusCode: 'Plus Code', coords: 'Координаты', rating: 'Рейтинг Google', hours: 'Часы работы', reach: 'Как добраться' },
    factValues: { official: 'Площадь Свободы (Liberty Square)', address: '2 Freedom Square, Тбилиси, Грузия', plusCode: 'MRV2+8J', coords: '41.6939923° N, 44.7982501° E', hours: '24 часа · открытое общественное пространство', reach: 'Метро «Площадь Свободы» (Линия 1)' },

    storyKicker: 'История площади',
    storyTitle: 'История и значение площади Свободы: одна площадь, несколько эпох названий.',
    storyParas: [
      'Площадь Свободы — один из главных исторических и культурных перекрёстков Тбилиси. Её расположение естественным образом связывает проспект Руставели со Старым городом и Сололаки, поэтому здесь разные эпохи города читаются в едином пространстве.',
      'С начала XIX века площадь имела разные назначения и названия. После советского периода название «Площадь Свободы» было восстановлено. Сегодня визуальный центр пространства — высокая колонна с золотым памятником Святого Георгия, один из самых узнаваемых силуэтов современного Тбилиси.',
    ],
    timeline: [
      { time: 'XIX в.', text: 'Площадь постепенно сформировалась как важное общественное пространство города; в ранний период её также называли «Дровяной площадью».' },
      { time: '1917', text: 'Название «Свобода» впервые появилось вместе с политическими и общественными преобразованиями.' },
      { time: '1990-е', text: 'После советских названий площадь вновь обрела имя Свободы.' },
      { time: '2006', text: 'В центре установили высокую колонну с памятником Святого Георгия, автор — Зураб Церетели.' },
    ],

    photoBreakEyebrow: 'От дня к ночи',
    photoBreakTitle: 'Золотая колонна на фоне меняющегося города.',
    photoBreakText: 'Утром площадь спокойнее, и архитектуру легче сфотографировать. После заката подсвеченная колонна, движение транспорта и улицы, ведущие в Старый город, создают более драматичную городскую атмосферу.',
    photoBreakBtn: 'Источник фото',

    visitKicker: 'Практическая сторона визита',
    visitTitle: 'Расположение и посещение площади Свободы — простая остановка, которая лучше всего вписывается в маршрут по городу.',
    visitLead: 'Для площади не нужен отдельный билет или предварительная бронь. Это лучшая отправная точка, чтобы увидеть центр пешком.',
    visitPanels: [
      { title: 'Лучшее время / длительность', text: 'Раннее утро — меньше движения и чистые кадры. Вечер — памятник подсвечен, центр оживлённее. Планируйте около 20–40 минут только на площадь; со Старым городом — более долгую прогулку.' },
      { title: 'Билет / расходы', text: 'Вход на площадь бесплатный. Платить, возможно, придётся только за транспорт, парковку, еду или ближайшие музеи.' },
      { title: 'Парковка', text: 'Парковка в центре ограничена. Практичный вариант — платная подземная парковка в Galleria Tbilisi; уточните текущий тариф на месте.' },
      { title: 'Ориентир', text: 'Высокая колонна с золотым памятником Святого Георгия стоит в центре площади и служит главным визуальным ориентиром пешком.' },
      { title: 'Что совместить', text: 'С площади легко перейти на Руставели, улицу Котэ Абхази, Сололаки и улицы Старого города.' },
    ],

    transportKicker: 'Как добраться подробно',
    transportTitle: 'В центре проще полагаться меньше на автомобиль.',
    transportNote: 'Номера и маршруты автобусов меняются со временем. Перед поездкой проверьте текущие маршруты и информацию в реальном времени в официальном приложении TTC.',
    routes: [
      { tag: 'M', title: 'Метро — «Площадь Свободы»', text: 'Самый прямой общественный транспорт. Станция находится на первой линии метро, выход — прямо в центральной части.' },
      { tag: 'B', title: 'Автобус', text: 'Центр обслуживает множество муниципальных маршрутов, но номера могут меняться. Используйте текущие маршруты транспортной компании Тбилиси и информацию в реальном времени.' },
      { tag: '↟', title: 'Пешком — из Старого города', text: 'Улица Котэ Абхази напрямую связывает площадь с Мейданом и главными пешеходными зонами Старого города — хороший выбор, чтобы узнать центр города пешком.' },
      { tag: 'T', title: 'Такси / приложение', text: 'На машине добраться можно, но в часы пик центр загружен. Выберите безопасную разрешённую высадку у площади, а дальше продолжайте пешком.' },
    ],

    nearbyKicker: 'Рядом',
    nearbyTitle: 'Ближайшие достопримечательности вокруг площади Свободы: виды и грузинский колорит в пределах одной прогулки.',
    nearbyLead: 'Главное преимущество площади Свободы — городская плотность вокруг неё: история, архитектура, музеи и питание сочетаются естественно. С площади пешком можно дойти до сквера Пушкина, проспекта Руставели и оси Старого города.',
    nearbyBlocks: [
      { heading: 'Достопримечательности', places: [
        { name: 'Сквер Пушкина', text: 'Небольшое зелёное пространство прямо у площади; здесь же есть туристический информационный центр.', dist: 'Рядом с площадью' },
        { name: 'Национальный музей Грузии', text: 'В начале Руставели — хорошее продолжение для интересующихся историей и культурой.', dist: 'Недалеко пешком' },
        { name: 'Улица Котэ Абхази / Старый город', text: 'Историческая торговая и прогулочная ось, ведущая от площади в Старый город.', dist: 'Прямой маршрут' },
        { name: 'Мост мира и Сиони', text: 'Естественное продолжение прогулки в сторону Старого города, к набережной.', dist: 'Старый город' },
      ] },
      { heading: 'Грузинская кухня', places: [
        { name: 'Badagoni — Georgian Wines & Kitchen', text: 'На площади, с упором на грузинские блюда и вино; удобный выбор без смены вида.', dist: 'Freedom Sq. 4' },
        { name: 'Khinkali Collection', text: 'На улице Пушкина, грузинский ресторан с упором на хинкали.', dist: 'Pushkin St. 19' },
        { name: 'Pasanauri', text: 'На улице Леонидзе — классические грузинские блюда, включая хинкали и хачапури.', dist: 'Leonidze St. 7/2' },
        { name: 'Совет', text: 'Вечером и в выходные в популярных местах может быть очередь; уточните текущие часы и бронируйте заранее.', dist: 'Текущая информация' },
      ] },
    ],

    mapKicker: 'На карте',
    mapTitle: 'Площадь Свободы',
    mapAddress: '2 Freedom Square<br />Тбилиси, Грузия<br />Plus Code: MRV2+8J',
    mapBtn: 'Открыть в Google Maps',
    mapAuthorityPre: 'Официальную информацию см. на',
    mapAuthorityA: 'Национальной туристической администрации Грузии (georgia.travel)',
    mapAuthorityB: 'Мэрии Тбилиси (tbilisi.gov.ge)',

    sourcesKicker: 'Источники',
    sourcesTitle: 'Источники и дополнительная информация.',
    sourcesLead: 'Эта страница опирается на официальные и общедоступные источники. Данные (маршруты транспорта, часы работы заведений) могут меняться — проверьте по соответствующему официальному ресурсу перед визитом.',
    sourcesNotes: [
      'Официальная туристическая информация о Грузии.',
      'Официальный портал мэрии Тбилиси — городское пространство и инфраструктура.',
      'Музей в пешей доступности от площади, на проспекте Руставели.',
      'Расположение, данные NAP и рейтинг посетителей (4.7 · 17 536).',
      'История площади и смена её названий.',
      'Источник фотографий и лицензий.',
    ],
    sourcesMetaUpdated: 'Последнее обновление:',
    sourcesMetaPhoto: 'Источники фото: Wikimedia Commons (anjči · CC BY 2.0, CivArmy · CC BY 4.0). Все фотографии на сайте остаются собственностью их авторов.',

    faqKicker: 'FAQ',
    faqTitle: 'Часто задаваемые вопросы.',
    faq: [
      ['Где находится площадь Свободы?', 'Площадь Свободы находится в центре Тбилиси, Грузия, по адресу 2 Freedom Square (Plus Code MRV2+8J). Она связывает проспект Руставели, Сололаки и Старый город.'],
      ['Вход на площадь Свободы платный?', 'Нет. Это общественная городская площадь, билет не нужен. Ближайшие музеи и другие заведения могут иметь свою плату.'],
      ['Сколько времени уделить площади?', 'Около 20–40 минут достаточно, чтобы осмотреть только площадь. Если добавить Старый город, Сололаки или Руставели — планируйте более долгую прогулку.'],
      ['Когда лучше фотографировать?', 'Раннее утро спокойнее и менее многолюдно. Вечером площадь подсвечена, и золотой памятник Святого Георгия смотрится особенно эффектно.'],
      ['Как добраться на общественном транспорте?', 'Самый простой вариант — станция метро «Площадь Свободы». Маршруты автобусов могут меняться, поэтому перед поездкой используйте текущий планировщик транспортной компании Тбилиси.'],
      ['Где можно припарковать машину?', 'Парковка в центре ограничена. Рядом с площадью в Galleria Tbilisi есть платная подземная парковка; уточните текущий тариф на месте.'],
      ['Площадь доступна ночью?', 'Как открытое общественное пространство, площадь доступна круглосуточно. В поздние часы соблюдайте обычную городскую осторожность.'],
      ['Какие достопримечательности рядом с площадью?', 'Пешком от площади можно дойти до сквера Пушкина, проспекта Руставели, Национального музея Грузии, улицы Котэ Абхази и Старого города, а также до Моста мира и Сионского собора.'],
    ],

    footerText: 'Эта страница создана как независимый путеводитель по площади Свободы. Перед визитом уточните маршруты транспорта, условия парковки и часы работы частных заведений.',
    footerNapName: 'Площадь Свободы (Liberty Square)',
    footerNapAddress: '2 Freedom Square, Тбилиси, Грузия',
    footerNapPc: 'Plus Code: MRV2+8J',
    footerPhotoPolicy: 'Все фотографии на сайте остаются собственностью их авторов.',
    footerLinks: { about: 'Обзор', faq: 'FAQ', sources: 'Источники', maps: 'Google Maps', govTravel: 'Georgia Travel (georgia.travel)', city: 'Мэрия Тбилиси', museum: 'Национальный музей' },
    cookiePanelText: 'Этот сайт использует Google Analytics 4 (GA4) только с вашего согласия для анализа статистики посещений. Согласие добровольно и может быть изменено в любое время.',
    cookieAccept: 'Принять',
    cookieDecline: 'Отклонить',
    disclaimer: 'Неофициальный сайт — не является официальным ресурсом мэрии Тбилиси, Национальной туристической администрации Грузии или площади Свободы. Домен: freedomsquaretbilisi.com',
    breadcrumb: { home: 'Главная', city: 'Тбилиси', country: 'Грузия' },
  },
};

/** ლოკალიზებული სახელი NEARBY_LANDMARKS-ისთვის (name/nameEn/nameRu). */
export function landmarkName(locale: Locale, l: { name: string; nameEn: string; nameRu: string }): string {
  if (locale === 'ka') return l.name;
  if (locale === 'en') return l.nameEn;
  return l.nameRu;
}

/** ლოკალიზებული დისტანცია NEARBY_LANDMARKS-ისთვის. */
export function landmarkDistance(locale: Locale, l: { distance: string; distanceEn: string; distanceRu: string }): string {
  if (locale === 'ka') return l.distance;
  if (locale === 'en') return l.distanceEn;
  return l.distanceRu;
}
