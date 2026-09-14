export type Locale = 'om' | 'en';
export interface PackageTier {
  id: string;
  name: string;
  price: string;
  desc: string;
  features: string[];
  duration: string;
  pjp: string;
  popular?: boolean;
}

export const translations = {
  om: {
    nav: { about: "Waa'ee Keenya", mission: "Ergama", packages: "Pakeejota", teachers: "Barsiisota", faq: "Gaaffilee", login: "Seensa", join: "Nu Hordofaa" },
    hero: {
      badge: "Barnoota Afaanii fi Carraa Hojii",
      title: "Imalli Kee Asitti Eegala",
      desc: "Afaan Ingiliffaa fi Afaan Arabaa barsiisota gahumsa qabaniin baradhaa, akkasumas maatii carraa uumu keessatti hirmaadhaa.",
      ctaPrimary: "Amma Eegali",
      ctaSecondary: "Pakeejota Ilaali",
      stat1: "Barattoota 2,000+",
      stat2: "Barsiisota 15+",
      stat3: "Gammachuu 100%"
    },
    auth: {
      loginTab: "Seensa",
      registerTab: "Herrega Bansi",
      title: "Herrega keessan bansi",
      subtitle: "Namni hundi akka Hiriyatti (Partner) eegala. Maqaan affeerraa ofiin uumama.",
      firstName: "Maqaa Duraa",
      middleName: "Maqaa Abbaa",
      lastName: "Maqaa Akaakayyuu",
      job: "Hojii / Ogummaa",
      age: "Umurii",
      phone: "Lakkoofsa Bilbilaa",
      accNo: "Lakkoofsa Herrega Baankii",
      address: "Teessoo",
      email: "Imeelii (Gmail)",
      gender: "Kornayaa",
      education: "Sadarkaa Barnootaa",
      refUsername: "Maqaa Affeeraa (Dirqama Miti)",
      password: "Jecha Icchiitii",
      submit: "Har'a Eegali"
    },
    about: {
  tag: "WAA'EE KEENYA",
  title: "Giddugala barnootaa amanamummaa irratti ijaarame",
  desc: "Barnoota qulqullina olaanaa fi carraa daldalaa walitti makuun namoota dhuunfaa fi maatiif carraawwan haaraa uumna[cite: 1].",
  visionTitle: "Mul'ata Keenya",
  visionText: "Hawaasa barnootaa fi geggeessummaa addunyaa irratti amanamummaa qabu ta'uu[cite: 1].",
  missionTitle: "Ergama Keenya",
  missionText: "Barnoota qulqulluu kennuu, geggeessitoota cimoo horuu, fi carraawwan diinagdee amanamoo uumuu[cite: 1]."
},
features: {
  tag: "FAAYIDAA KEENYA",
  title: "Barumsa fuulduratti nama ceesisu",
  f1Title: "Imala Qindaa'aa",
  f1Desc: "Sadarkaa bu'uuraa irraa eegalee hanga dandeettii olaanaatti deemsa ifa ta'e.",
  f2Title: "Wal-faana Barachuu",
  f2Desc: "Barsiisota gargaarsaa fi hiriyyoota waliin wal hubachaa deemuu.",
  f3Title: "Amanamummaa fi Iftoomina",
  f3Desc: "Sirna kaffaltii fi qabxii iftoomina qabu.",
  f4Title: "Yeroo Barattu Galii Hori",
  f4Desc: "Dandeettii afaanii gabbifachaa sirna affeerraatiin qabxii fi galii argadhu[cite: 1]."
},
teachers: {
  tag: "BARSIISOTA KEENYA",
  title: "Namoota dandeettii fi jaalala qabaniin qajeelfamaa"
},
testimonials: {
  tag: "RAGAALEE BARATTOOTAA",
  title: "Imalli barattootaa kan milkaa'ina agarsiisan"
},
ctaBanner: {
  title: "Imalli kee asitti eegala",
  subtitle: "Herrega kee bansiiti maatii barnootaa fi carraa bal'aa qabu kanaatti makami.",
  button: "Herrega Bansi"
},

packages: {
      tag: "PAAKEEJOTA BARNOOTAA",
      heading: "Bakka imalli kee itti eegalu filadhu",
      startBtn: "Imala kana eegali",
      mostPopular: "Baay'ee Jaalatamaa",
      englishTitle: "Imala Barnoota Afaan Ingiliffaa",
      arabicTitle: "Imala Barnoota Afaan Arabaa",
      englishList: [
        {
          id: 'en-foundation',
          name: "Foundation",
          price: "6,800 ETB",
          desc: "Hundee cimaa haasawa fi dubbii Ingiliffaa guyyuu ijaarradhaa.",
          features: [
            "Kutaalee barnootaa kallattii (Live)",
            "Waraqaa fi kitaaba shaakalaa",
            "Shaakala haasawaa torbanii",
            "Waraqaa ragaa xumuraa"
          ],
          duration: "Torban 8",
          pjp: "PJP 68 argata"
        },
        {
          id: 'en-progress',
          name: "Progress",
          price: "12,500 ETB",
          desc: "Bu'uura irraa gara marii fi haasawa guyyuu ifa ta'eetti ce'aa.",
          features: [
            "Waan Foundation keessa jiru hunda",
            "Gareewwan shaakala marii xixinnoo",
            "Seerluga gadi-fagoo",
            "Madaallii guddina barnootaa"
          ],
          duration: "Torban 12",
          pjp: "PJP 125 argata"
        },
        {
          id: 'en-mastery',
          name: "Mastery",
          price: "19,850 ETB",
          desc: "Afaan Ingiliffaa sadarkaa ogummaa fi barreessuu gadi-fageenyaan.",
          features: [
            "Waan Progress keessa jiru hunda",
            "Barreessuu daldalaa fi ogummaa",
            "Qajeelcha kallattii 1:1 gorsaa waliin",
            "Shaakala qormaata hojii (Mock interview)"
          ],
          duration: "Torban 20",
          pjp: "PJP 198 argata",
          popular: true
        },
        {
          id: 'en-excellence',
          name: "Excellence",
          price: "24,500 ETB",
          desc: "Qormaataaf qophaa'uu dandeettii geggeessummaa waliin guutuu ta'e.",
          features: [
            "Waan Mastery keessa jiru hunda",
            "Toora qophii qormaata idil-addunyaa",
            "Seminaara dandeettii geggeessummaa",
            "Gorsa dursa qabu gorsitoota irraa"
          ],
          duration: "Torban 28",
          pjp: "PJP 245 argata"
        }
      ],
      arabicList: [
        {
          id: 'ar-foundation',
          name: "Foundation",
          price: "5,400 ETB",
          desc: "Afaan Arabaa jalqabaa keessan dubbisaa, barreessaa, fi dubbadhaa.",
          features: [
            "Kutaalee barnootaa bu'uuraa kallattii",
            "Leenjii qubee fi qubeessuu",
            "Shaakala haasawaa torbanii",
            "Waraqaa ragaa xumuraa"
          ],
          duration: "Torban 8",
          pjp: "PJP 54 argata"
        },
        {
          id: 'ar-progress',
          name: "Progress",
          price: "9,650 ETB",
          desc: "Haasawa Afaan Arabaa guyyuu amansiisaa ta'e keessatti guddadhaa.",
          features: [
            "Waan Foundation keessa jiru hunda",
            "Gareewwan shaakala marii",
            "Seerluga Arabaa gadi-fagoo",
            "Madaallii guddina barnootaa"
          ],
          duration: "Torban 12",
          pjp: "PJP 96 argata"
        },
        {
          id: 'ar-mastery',
          name: "Mastery",
          price: "15,390 ETB",
          desc: "Afaan Arabaa sadarkaa olaanaa barnootaa fi hojiif oolu.",
          features: [
            "Waan Progress keessa jiru hunda",
            "Dubbisa barruulee gadi-fagoo",
            "Qajeelcha dhuunfaa 1:1",
            "Barreessuu sadarkaa olaanaa"
          ],
          duration: "Torban 20",
          pjp: "PJP 153 argata",
          popular: true
        },
        {
          id: 'ar-excellence',
          name: "Excellence",
          price: "21,436 ETB",
          desc: "Dandeettii Afaan Arabaa guutuu leenjii geggeessummaa waliin.",
          features: [
            "Waan Mastery keessa jiru hunda",
            "Qophii qormaata waraqaa ragaa",
            "Seminaara geggeessummaa",
            "Gorsa dursa qabu gorsitoota irraa"
          ],
          duration: "Torban 28",
          pjp: "PJP 214 argata"
        }
      ]
    },
    faq: {
      tag: "GAAFFILEE",
      title: "Gaaffilee yeroo baay'ee ka'an",
      items: [
        {
          q: "Journex'tti makamuuf kaffaltiin ni barbaachisaa?",
          a: "Lakki, akka maamilatti tola galmaa'uu dandeessu. Garuu pakeejota yoo bittan sadarkaa 'Partner' taatuu fi bu'aa daldalaa argattu[cite: 1]."
        },
        {
          q: "Sirni qabxii affeerraa (referral points) akkamitti hojjeta?",
          a: "Qabxii dhuunfaa (PJP) barnoota keessaniin argattu, qabxii garee (TJP) immoo namoota affeertaniin argattu[cite: 1]."
        },
        {
          q: "Garaagarummaan ETB fi PJP maali?",
          a: "ETB qarshii kaffaltii pakeejiif kaffalamuudha[cite: 1]. PJP immoo qabxii faayidaa fi sadarkaa keessan daldalicha keessatti murteessudha[cite: 1]."
        },
        {
          q: "Kutaaleen barnootaa akkamitti kennamu?",
          a: "Kutaaleen kallattiin toora intarneetiitiin barsiisota gahumsa qabaniin kennamu, akkasumas shaakala garee of keessaa qaba."
        },
        {
          q: "Boodarra pakeejii koo ol guddifachuu nan danda'aa?",
          a: "Eeyyee, yeroo barbaaddanitti Foundation irraa gara Progress, Mastery, ykn Excellence'tti ol guddisuu dandeessu[cite: 1]."
        }
      ]
    }
  },

  en: {
    nav: { about: "About", mission: "Mission", packages: "Packages", teachers: "Teachers", faq: "FAQ", login: "Log in", join: "Start today" },
    hero: {
      badge: "Language Learning & Networking",
      title: "Your Journey Begins Here",
      desc: "Learn English & Arabic with accredited/native teachers, expert coaches, and a community of learners dedicated to mutual development.",
      ctaPrimary: "Start Today",
      ctaSecondary: "View packages",
      stat1: "2,000+ Active learners",
      stat2: "15+ Instructors",
      stat3: "100% Client satisfaction"
    },
    auth: {
      loginTab: "Log in",
      registerTab: "Create account",
      title: "Create your account",
      subtitle: "Everyone starts as a Partner. Your referral username is generated automatically.",
      firstName: "First name",
      middleName: "Middle name",
      lastName: "Last name",
      job: "Work / job",
      age: "Age",
      phone: "Phone number",
      accNo: "Account number",
      address: "Address",
      email: "Email (Gmail)",
      gender: "Gender",
      education: "Educational status",
      refUsername: "Referral username (optional)",
      password: "Password",
      submit: "Start today"
    },

    about: {
  tag: "ABOUT JOURNEX",
  title: "An education network built on trust",
  desc: "We combine high-quality language education with real business opportunities, empowering individuals to grow their communication skills and financial well-being simultaneously[cite: 1].",
  visionTitle: "Our Vision",
  visionText: "To become the world's most trusted education and leadership network, empowering millions of people[cite: 1].",
  missionTitle: "Our Mission",
  missionText: "To provide high-quality education, develop confident leaders, and create ethical business opportunities[cite: 1]."
},
features: {
  tag: "WHY JOURNEX",
  title: "Learning that pays forward",
  f1Title: "Structured journeys",
  f1Desc: "Clear progress roadmaps from conversational basics to executive mastery.",
  f2Title: "Peer-driven classes",
  f2Desc: "Interactive group dynamics and native-fluent mentor check-ins.",
  f3Title: "Trusted and transparent",
  f3Desc: "Open point ledger and straightforward path toward certifications.",
  f4Title: "Earn while you grow",
  f4Desc: "Reward programs that convert active learning and community referrals into value[cite: 1]."
},
teachers: {
  tag: "OUR TEACHERS",
  title: "Guided by people who care"
},
testimonials: {
  tag: "STUDENT STORIES",
  title: "Journeys already underway"
},
ctaBanner: {
  title: "Your journey begins here",
  subtitle: "Take your communication to the next level while accessing life-changing networking opportunities.",
  button: "Create your account"
},
packages: {
      tag: "LEARNING & EARNING PACKAGES",
      heading: "Choose where your journey starts",
      startBtn: "Start this journey",
      mostPopular: "Most popular",
      englishTitle: "English Learning Journey",
      arabicTitle: "Arabic Learning Journey",
      englishList: [
        {
          id: 'en-foundation',
          name: "Foundation",
          price: "6,800 ETB",
          desc: "Build a confident base in everyday English.",
          features: [
            "Live foundation classes",
            "Course workbook",
            "Weekly speaking practice",
            "Completion certificate"
          ],
          duration: "8 weeks",
          pjp: "earns 68 PJP"
        },
        {
          id: 'en-progress',
          name: "Progress",
          price: "12,500 ETB",
          desc: "Move from basics to fluent everyday conversation.",
          features: [
            "Everything in Foundation",
            "Small group conversation labs",
            "Grammar intensives",
            "Progress assessments"
          ],
          duration: "12 weeks",
          pjp: "earns 125 PJP"
        },
        {
          id: 'en-mastery',
          name: "Mastery",
          price: "19,850 ETB",
          desc: "Professional-level written and spoken English.",
          features: [
            "Everything in Progress",
            "Business writing module",
            "1:1 coaching sessions",
            "Mock interviews"
          ],
          duration: "20 weeks",
          pjp: "earns 198 PJP",
          popular: true
        },
        {
          id: 'en-excellence',
          name: "Excellence",
          price: "24,500 ETB",
          desc: "Exam-ready mastery with leadership coaching.",
          features: [
            "Everything in Mastery",
            "Exam preparation track",
            "Leadership workshops",
            "Priority mentor access"
          ],
          duration: "28 weeks",
          pjp: "earns 245 PJP"
        }
      ],
      arabicList: [
        {
          id: 'ar-foundation',
          name: "Foundation",
          price: "5,400 ETB",
          desc: "Read, write and speak your first Arabic.",
          features: [
            "Live foundation classes",
            "Alphabet and script training",
            "Weekly speaking practice",
            "Completion certificate"
          ],
          duration: "8 weeks",
          pjp: "earns 54 PJP"
        },
        {
          id: 'ar-progress',
          name: "Progress",
          price: "9,650 ETB",
          desc: "Grow into confident daily Arabic conversation.",
          features: [
            "Everything in Foundation",
            "Conversation labs",
            "Grammar intensives",
            "Progress assessments"
          ],
          duration: "12 weeks",
          pjp: "earns 96 PJP"
        },
        {
          id: 'ar-mastery',
          name: "Mastery",
          price: "15,390 ETB",
          desc: "Advanced Arabic for work and study.",
          features: [
            "Everything in Progress",
            "Classical text reading",
            "1:1 coaching sessions",
            "Advanced writing"
          ],
          duration: "20 weeks",
          pjp: "earns 153 PJP",
          popular: true
        },
        {
          id: 'ar-excellence',
          name: "Excellence",
          price: "21,436 ETB",
          desc: "Complete Arabic mastery with leadership coaching.",
          features: [
            "Everything in Mastery",
            "Certification preparation",
            "Leadership workshops",
            "Priority mentor access"
          ],
          duration: "28 weeks",
          pjp: "earns 214 PJP"
        }
      ]
    },
    faq: {
      tag: "FAQ",
      title: "Questions, answered",
      items: [
        {
          q: "Do I need to pay to join Journex?",
          a: "You can create an initial account as a customer or start directly as a partner when signing up for a package[cite: 1]."
        },
        {
          q: "How does the referral point system work?",
          a: "You earn Personal Journey Points (PJP) through your courses and Team Journey Points (TJP) through network referrals[cite: 1]."
        },
        {
          q: "What is the difference between ETB and PJP?",
          a: "ETB is the local currency paid for packages[cite: 1]. PJP is your internal achievement & compensation ledger value[cite: 1]."
        },
        {
          q: "How are classes delivered?",
          a: "Classes are delivered via live online sessions, supplemented by digital resources and regular peer evaluations."
        },
        {
          q: "Can I upgrade my package later?",
          a: "Yes, you can upgrade from Foundation or Progress tracks to Mastery or Excellence at any point[cite: 1]."
        }
      ]
    }
  
  }


}