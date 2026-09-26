import logoImg from '../assets/logo.jpeg'
import image4 from '../assets/image4.jpeg'
import image5 from '../assets/image5.jpeg'
import image6 from '../assets/image6.jpeg'
import image7 from '../assets/image7.jpeg'
import image8 from '../assets/image8.jpeg'
import image9 from '../assets/image9.jpeg'
import image10 from '../assets/image10.jpeg'
import image11 from '../assets/image11.jpeg'
import image12 from '../assets/image12.jpeg'
import image13 from '../assets/image13.jpeg'
import image14 from '../assets/image14.jpeg'
import image15 from '../assets/image15.jpeg'
import image16 from '../assets/image16.jpeg'
import image17 from '../assets/image17.jpeg'
import image18 from '../assets/image18.jpeg'
import image19 from '../assets/image19.jpeg'
import image20 from '../assets/image20.jpeg'
import image21 from '../assets/image21.jpeg'
import image22 from '../assets/image22.jpeg'
import image23 from '../assets/image23.jpeg'
import image24 from '../assets/image24.jpeg'
import image25 from '../assets/image25.jpeg'
import image29 from '../assets/image29.jpeg'
import image30 from '../assets/image30.jpeg'
import image31 from '../assets/image31.jpeg'
import image32 from '../assets/image32.jpeg'
import image33 from '../assets/image33.jpeg'
import image34 from '../assets/image34.jpeg'
import image36 from '../assets/image36.jpeg'
import image37 from '../assets/image37.jpeg'

export const BUSINESS_INFO = {
  name: "H Coronel & Associates LLC",
  shortName: "H Coronel & Associates",
  type: "Licensed & Insured General Contractor",
  phoneDisplay: "(689) 349-3202",
  phoneRaw: "6893493202",
  email: "hugocoronel@att.net",
  address: "Altamonte Springs, FL 32714",
  city: "Altamonte Springs",
  state: "FL",
  zip: "32714",
  serviceRadius: "Orlando + 50 Miles (Central Florida)",
  hours: "Monday – Saturday: 7:00 AM – 6:00 PM | Sunday: By Appointment",
  logo: logoImg,
  tagline: "Premier Contractor for Kitchen, Bathroom, Drywall & Complete Home Remodeling in Central Florida",
  stats: [
    { label: "Years of Craftsmanship", value: "15+" },
    { label: "Completed Projects", value: "450+" },
    { label: "Service Radius", value: "50 Miles" },
    { label: "Customer Satisfaction", value: "100%" }
  ]
}

export const SPECIAL_OFFERS = [
  {
    id: "referral-bonus",
    title: "$50 Referral Reward",
    badge: "Share With Friends",
    description: "Recommend our contracting and remodeling services to friends, family, or neighbors. Receive a $50 cash bonus or project credit once their contract is initiated!",
    cta: "Refer & Earn $50",
    terms: "No limit on referrals. Reward disbursed upon signed contract."
  }
]

export const SERVICES_DATA = [
  {
    id: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    headline: "Transforming the Heart of Your Florida Home",
    shortDescription: "Custom cabinetry, waterfall quartz & marble countertops, oversized islands, designer backsplashes, and open-concept floor plan reconfigurations.",
    featuredImage: image8,
    gallery: [image8, image10, image11],
    features: [
      "Custom shaker and raised-panel cabinetry fabrication & installation",
      "Calacatta quartz, granite, and exotic marble countertop fabrication",
      "Oversized kitchen island installations with under-counter storage & power",
      "Handmade subway tile and mosaic backsplash masonry",
      "Undermount and farmhouse apron sinks with modern brushed nickel faucets",
      "Plumbing and electrical reconfiguration for modern high-efficiency appliances"
    ],
    details: "Your kitchen is the focal point of everyday living and entertainment. At H Coronel & Associates LLC, we manage your kitchen remodel from structural demolition to the final coat of paint. We source high-grade solid wood cabinetry, resilient non-porous quartz surfaces that resist Florida heat and humidity, and custom layout engineering to optimize workflow and resale value."
  },
  {
    id: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    headline: "Spa-Grade Master Ensuites & Guest Bathroom Upgrades",
    shortDescription: "Curbless walk-in showers, frameless glass enclosures, freestanding soaking tubs, river rock pebble pans, and luxury waterproof tiling.",
    featuredImage: image37,
    gallery: [image37, image22, image18, image20, image23, image12, image13, image19, image36],
    features: [
      "Complete gut-to-studs demolition and professional subfloor waterproofing",
      "Large-format porcelain and marble wall tile installation with precision leveling",
      "Zero-threshold walk-in showers with custom recessed niche shelving",
      "Freestanding contemporary soaking tubs on decorative pebble tile inlays",
      "Double-sink vanity suites with quartz tops, integrated lighting & mirrors",
      "RedGard industrial waterproofing membrane preventing moisture behind walls"
    ],
    details: "Central Florida bathrooms require strict moisture control and durable waterproofing. We specialize in converting cramped, dated shower-tub combos into breathtaking master suites. From linear drains and river-pebble massage floors to custom shaker vanities with soft-close drawers, our artisans deliver showroom-quality finishes."
  },
  {
    id: "drywall",
    title: "Drywall & Structural Framing",
    headline: "Precision Hanging, Level 5 Taping & Architectural Niches",
    shortDescription: "Metal & wood stud framing, structural demolition, seamless drywall installation, water-damage repair, and custom decorative arches.",
    featuredImage: image7,
    gallery: [image7, image6, image5, image4],
    features: [
      "Wood and heavy-gauge metal stud framing for walls and partitions",
      "Drywall hanging, taping, 3-coat mudding, and dustless sanding",
      "Seamless Level 5 smooth wall finishing and knockdown textures",
      "Custom architectural archways, built-in display niches, and media cutouts",
      "Ceiling restoration, popcorn removal, and drywall water stain repair",
      "Fast turnarounds on tenant-improvement and remodeling alterations"
    ],
    details: "A flawless paint job begins with immaculate drywall. We take great pride in our drywall craftsmanship—evidenced by our genuine project photos showing complex structural re-framing transformed into glass-smooth walls with custom arches and illuminated display alcoves."
  },
  {
    id: "painting",
    title: "Painting (Exterior + Interior)",
    headline: "Weather-Shield Exterior Coatings & Flawless Interior Finishes",
    shortDescription: "Premium paints formulated for Florida's intense sunlight and humid subtropical climate. Crisp trim lines, smooth surfaces, and lasting protection.",
    featuredImage: image7,
    gallery: [image7, image37, image8],
    features: [
      "Exterior stucco pressure washing, hairline crack sealing, and elastomeric paint",
      "Interior wall and ceiling painting with washable, low-VOC Benjamin Moore & Sherwin Williams paints",
      "Cabinet repainting and industrial lacquer spraying for updated kitchens",
      "Baseboard, crown moulding, and casing enamel spray finishing",
      "Staining and clear-coating of natural wood accents and stairs",
      "Thorough surface preparation with plastic masking and floor protection"
    ],
    details: "Florida's climate is tough on paints. Ultraviolet radiation and seasonal moisture cause substandard coatings to peel, chalk, or mildew. H Coronel & Associates LLC uses commercial-grade primers and exterior acrylics tailored for Central Florida stucco and siding, alongside velvety interior paints that resist scuffs and clean easily."
  },
  {
    id: "flooring",
    title: "Flooring & Tile Solutions",
    headline: "Durable Luxury Vinyl, Hardwood, Porcelain & Travertine",
    shortDescription: "Expert installation of large-format porcelain tile, waterproof luxury vinyl plank (LVP), natural stone travertine, and river stone mosaics.",
    featuredImage: image22,
    gallery: [image22, image14, image24, image18, image37],
    features: [
      "Large-format porcelain and ceramic tile installation with anti-lippage clips",
      "Outdoor travertine stone patio and pool deck paving",
      "Exterior balcony waterproofing and weather-grade tile installation",
      "Waterproof luxury vinyl plank (LVP) for high-traffic and pet-friendly spaces",
      "Pebble mosaic accents, decorative borders, and transition trim",
      "Self-leveling subfloor preparation ensuring dead-flat foundations"
    ],
    details: "Flooring defines the character and longevity of your home. Whether laying cooling porcelain tile throughout an open living area, paving an outdoor pool terrace with elegant travertine, or installing waterproof vinyl plank, our precision layouts ensure straight grout lines and durable bonds."
  },
  {
    id: "cabinets",
    title: "Cabinets & Storage Systems",
    headline: "Custom Kitchen & Bath Cabinets Built for Everyday Luxury",
    shortDescription: "Factory-finish shaker cabinets, pantry storage, floating vanities, soft-close hardware, and bespoke architectural woodwork.",
    featuredImage: image10,
    gallery: [image8, image10, image20, image36, image12],
    features: [
      "Solid maple and birch face-frame cabinets with dovetail drawer boxes",
      "Full-extension undermount drawer glides with soft-close mechanisms",
      "Walk-in kitchen pantry shelving and appliance garage integrations",
      "Modern floating bathroom vanities and furniture-style credenzas",
      "Designer bar pulls, matte black, and brushed brass hardware installation",
      "Custom crown moulding toppers and finished base toe-kicks"
    ],
    details: "Eliminate clutter and enhance your interior appeal with our custom cabinet solutions. We combine durable materials that resist humidity warping with sleek aesthetic styling, providing you with ample storage tailored precisely to your family's routine."
  },
  {
    id: "finished-carpentry",
    title: "Finished Carpentry & Trim",
    headline: "The Defining Details That Elevate Any Space",
    shortDescription: "Architectural crown moulding, 5-1/4\" baseboards, window casings, custom archway casings, and recessed display niches.",
    featuredImage: image11,
    gallery: [image7, image11, image8, image20],
    features: [
      "Multi-piece crown moulding and coffered ceiling beam trim",
      "Modern tall baseboards (5-1/4\" and 7-1/4\") with mitered exterior corners",
      "Door and window casing packages with craftsman sill aprons",
      "Custom passage archways and wall pocket transitions",
      "Closet built-ins, bench seating, and mudroom storage cubbies",
      "Precision coping and seamless joints that will not crack over time"
    ],
    details: "Finished carpentry is the hallmark of a master builder. It's the crisp corner miter, the graceful archway transition between rooms, and the stately crown moulding that turns a standard house into a luxury estate. Our carpenters execute every cut with surgical precision."
  }
]

export const LOCATIONS_DATA = [
  {
    id: "altamonte-springs",
    name: "Altamonte Springs, FL",
    zip: "32714 / 32701",
    tag: "Headquarters & Hometown",
    headline: "Your Local Altamonte Springs General Contractor",
    description: "Centrally located right here in Altamonte Springs (ZIP 32714), H Coronel & Associates LLC is your neighborhood contractor. We offer rapid on-site quotes within 24 hours, understand Seminole County building permit codes inside and out, and have completed dozens of renovations across Uptown Altamonte, Spring Lake, and Sanlando.",
    benefits: [
      "Same-day or next-day on-site consultations in Altamonte Springs",
      "Deep familiarity with Seminole County residential permitting",
      "Rapid dispatch for urgent drywall, tile, and plumbing renovations",
      "Local references available from your fellow Altamonte Springs neighbors"
    ]
  },
  {
    id: "orlando-metro",
    name: "Orlando & 50-Mile Radius",
    zip: "Orange, Seminole, Lake, Osceola & Volusia Counties",
    tag: "Full Regional Coverage",
    headline: "Comprehensive Renovation Across Greater Orlando",
    description: "From Winter Park historic bungalows and Downtown Orlando high-rises to Lake Nona contemporary homes and Windermere estates, our crews travel up to 50 miles throughout Greater Orlando. We bring full contractor trucks equipped with professional tile saws, drywall rigs, and spray setups.",
    benefits: [
      "Service corridor encompassing all Central Florida communities within 50 miles",
      "Extensive experience with Florida HOA regulations and architectural guidelines",
      "Equipped for large-scale full house remodeling and multi-room projects",
      "Dedicated project managers ensuring on-time project completion"
    ]
  },
  {
    id: "clermont",
    name: "Clermont, FL",
    zip: "34711 / 34714 / 34715",
    tag: "Lake County Community",
    headline: "Transforming Clermont & South Lake Homes",
    description: "Clermont is one of the fastest-growing residential hubs in Central Florida. Homeowners throughout Clermont trust H Coronel & Associates LLC for open-concept kitchen reconfigurations, modernizing older floor plans, and creating master bathroom sanctuaries with freestanding tubs and walk-in showers.",
    benefits: [
      "Custom remodels for single-family homes in Clermont's premier subdivisions",
      "Durable tile and LVP flooring engineered for active lake-life lifestyles",
      "Open-concept wall removals and ceiling drywall structural updates",
      "Free in-home consultations for Lake County residents"
    ]
  },
  {
    id: "debary",
    name: "Debary, FL",
    zip: "32713 / 32753",
    tag: "Volusia County Corridor",
    headline: "Trusted Contractor Services in Debary",
    description: "Just north along the I-4 corridor, Debary homeowners rely on our team for exterior weatherproofing, whole-house interior painting, tile pool terraces, and master bathroom upgrades. We bring the highest standards of craftsmanship to every Volusia County home.",
    benefits: [
      "Exterior stucco protection and mildew-resistant paint systems",
      "Custom kitchen cabinet replacements and stone countertop fitting",
      "Outdoor patio tile and travertine pool deck installation",
      "Convenient scheduling for Debary and Orange City homeowners"
    ]
  },
  {
    id: "apopka",
    name: "Apopka, FL",
    zip: "32703 / 32712",
    tag: "Northwest Orange County",
    headline: "Apopka Home Remodeling & Renovation Experts",
    description: "Whether you live in an established neighborhood near Wekiwa Springs or a newly developed master-planned community in Apopka, our team provides turn-key kitchen remodels, drywall repair, finish carpentry, and full bathroom overhauls.",
    benefits: [
      "Fast transit from our Altamonte Springs HQ directly to Apopka",
      "Modern shaker cabinet installations and pantry transformations",
      "Crown moulding and architectural trim packages",
      "Licensed and insured work backed by our written warranty"
    ]
  },
  {
    id: "mount-dora",
    name: "Mount Dora (Montdora), FL",
    zip: "32757",
    tag: "Historic & Lakefront Charm",
    headline: "Renovating Historic & Lakefront Properties in Mount Dora",
    description: "Mount Dora's unique architectural heritage requires a contractor who respects structural integrity and historical character. We specialize in intricate finish carpentry, custom archways, crown moulding, and modernized kitchens and bathrooms that blend vintage charm with modern comfort.",
    benefits: [
      "Expertise in custom trim, period-appropriate moulding, and archways",
      "High-end custom bathroom tile designs and freestanding bathtubs",
      "Respectful, clean job sites preserving property value and landscaping",
      "Personalized craftsmanship directed by master contractor Hugo Coronel"
    ]
  }
]

export const BEFORE_AFTER_PROJECTS = [
  {
    id: "ba-drywall",
    title: "Structural Demolition & Framing to Finished Archway Niche",
    service: "Drywall, Framing & Painting",
    location: "Altamonte Springs, FL",
    beforeImage: image4,
    afterImage: image7,
    beforeLabel: "Before: Demolition & Framing",
    afterLabel: "After: Level 5 Finish & Paint",
    description: "The homeowner wanted to open up a cramped utility pass-through and construct an elegant architectural arch with an illuminated display niche. We demolished the existing structure, framed custom metal studs, ran protected piping and electrical, hung drywall, applied 3 coats of mud with Level 5 finish, and coated with crisp satin paint.",
    steps: [
      { img: image4, title: "1. Demo & Steel Framing", desc: "Removed damaged drywall, framed steel studs, organized interior plumbing." },
      { img: image5, title: "2. Drywall & Joint Tape", desc: "Hung mold-resistant drywall sheets and taped all joints and interior angles." },
      { img: image6, title: "3. 3-Coat Mudding & Sanding", desc: "Applied feathered joint compound and hand-sanded to seamless Level 5." },
      { img: image7, title: "4. Final Prime & Topcoat", desc: "Finished architectural archway with recessed alcove and flawless paint." }
    ]
  },
  {
    id: "ba-bathroom",
    title: "Dated Tub-Shower to Spa-Grade Walk-In Tile Enclosure",
    service: "Bathroom Remodeling & Flooring",
    location: "Orlando / Clermont, FL",
    beforeImage: image25,
    afterImage: image37,
    beforeLabel: "Before: Dated Enclosure & Tub",
    afterLabel: "After: Luxury Walk-In Shower",
    description: "A complete master bathroom gut renovation. We eliminated the dated acrylic bathtub and dingy builder tile, replaced the subfloor, applied RedGard waterproofing membrane, hand-installed large-format marbleized porcelain tile with leveling clips, laid a river-rock pebble shower pan, installed frameless sliding glass barn-door hardware, and fitted a new modern shaker vanity.",
    steps: [
      { img: image25, title: "1. Original Bathroom", desc: "Dated tile, old tub, and builder-grade vanity before demolition." },
      { img: image30, title: "2. Complete Gut Demolition", desc: "Removed all drywall and fixtures down to the structural studs." },
      { img: image32, title: "3. Precision Wall Tiling", desc: "Hugo leveling large-format porcelain wall tiles with precision spacers." },
      { img: image37, title: "4. Turnkey Master Suite", desc: "Finished shower with frameless glass sliding door, vanity, and polished floor." }
    ]
  },
  {
    id: "ba-balcony",
    title: "Weathered Subfloor Balcony to Luxury Tiled Terrace",
    service: "Flooring & Exterior Tile",
    location: "Central Florida",
    beforeImage: image21,
    afterImage: image24,
    beforeLabel: "Before: Raw Subfloor Plywood",
    afterLabel: "After: Travertine Tile & Ironwork",
    description: "This exterior balcony terrace suffered from weathering and raw plywood exposure. We laid high-performance elastomeric exterior waterproofing underlayment, set large-format non-slip stone porcelain tile with waterproof epoxy grout, and fitted decorative wrought iron railings."
  }
]

export const GALLERY_ITEMS = [
  { id: 1, title: "Luxury Kitchen Waterfall Island & Shaker Cabinets", category: "kitchen", image: image8, desc: "Custom white ceiling-height shaker cabinets, Calacatta quartz waterfall island with seating, and apron sink." },
  { id: 2, title: "Contemporary Master Bath with Freestanding Tub", category: "bathroom", image: image22, desc: "Modern oval freestanding soaking tub set on pebble mosaic inlay with marble half-wall partition." },
  { id: 3, title: "Walk-In Shower with Glass Enclosure & Pebble Pan", category: "bathroom", image: image37, desc: "Floor-to-ceiling marbleized porcelain tile, sliding barn-door glass, and shaker vanity suite." },
  { id: 4, title: "Custom Kitchen Remodel with Stone Island", category: "kitchen", image: image10, desc: "Full kitchen renovation featuring custom white cabinetry, granite/quartz island, and stainless appliances." },
  { id: 5, title: "Double Vanity Suite with Granite Countertops", category: "bathroom", image: image12, desc: "Stained wood double vanity with dual undermount sinks, black granite tops, and custom mirror frames." },
  { id: 6, title: "Travertine Tile Outdoor Pool Patio", category: "flooring", image: image14, desc: "Expansive French pattern travertine stone tile installation around a luxury Florida swimming pool." },
  { id: 7, title: "Architectural Passage Archway & Display Niche", category: "drywall", image: image7, desc: "Custom drywall framing, Level 5 smooth texturing, and finished interior archway with upper alcove." },
  { id: 8, title: "Corner Glass Shower with River Pebble Floor", category: "bathroom", image: image18, desc: "Natural travertine shower surround with decorative slate bands and contrasting river stone floor." },
  { id: 9, title: "Jetted Jacuzzi Spa Bath Suite", category: "bathroom", image: image19, desc: "Large format porcelain tile surround, recessed storage niche, and wood-look tile flooring." },
  { id: 10, title: "Bright White Shaker Double Vanity Suite", category: "bathroom", image: image20, desc: "Dual sinks, quartz tops, contemporary framed mirrors, and chrome sconce lighting." },
  { id: 11, title: "Tiled Balcony Terrace with Iron Railings", category: "flooring", image: image24, desc: "Waterproof exterior stone-finish tile installation overlooking manicured golf course grounds." },
  { id: 12, title: "Freestanding Soaking Tub Close-Up", category: "bathroom", image: image23, desc: "Sleek freestanding tub with high-rise chrome floor faucet on natural river pebble bed." },
  { id: 13, title: "Master Bath Soaking Tub & Travertine Wall", category: "bathroom", image: image13, desc: "Built-in soaking tub with custom travertine tile surround and chrome roman tub faucet." },
  { id: 14, title: "Kitchen Island & Cabinet Detail", category: "kitchen", image: image11, desc: "View across quartz island showing tall upper cabinets, crown moulding, and pass-through arch." },
  { id: 15, title: "Craftsman Laying Precision Wall Tile", category: "craftsmanship", image: image32, desc: "Hugo Coronel actively installing large porcelain wall tiles using tile leveling clips and spirit level." },
  { id: 16, title: "RedGard Waterproofing & Tile Installation", category: "craftsmanship", image: image33, desc: "RedGard waterproof moisture barrier applied behind shower tiles ensuring lifelong durability." },
  { id: 17, title: "Contractor Framing & Drywall Rough-In", category: "craftsmanship", image: image29, desc: "Master contractor Hugo Coronel preparing electrical rough-in and steel framing during bathroom remodel." },
  { id: 18, title: "Modern Grey Vanity with Undermount Sink", category: "bathroom", image: image36, desc: "Custom shaker grey vanity, solid surface counter, brushed nickel hardware, and modern light fixture." },
  { id: 19, title: "Drywall Tape & Joint Compound in Progress", category: "drywall", image: image5, desc: "Taped seams and mud coats on custom framed wall and architectural arch." },
  { id: 20, title: "Pool Coping & Patio Surface Preparation", category: "flooring", image: image9, desc: "Precision masonry demolition and surface leveling for swimming pool tile and coping replacement." },
  { id: 21, title: "Travertine Pool Deck Alternate Angle", category: "flooring", image: image15, desc: "Finished natural stone travertine pool terrace paving with custom coping." },
  { id: 22, title: "Custom Master Shower Tilework", category: "bathroom", image: image16, desc: "Custom hand-set porcelain shower wall tiling with decorative tile banding." },
  { id: 23, title: "Tile Masonry Detail & Wall Pattern", category: "bathroom", image: image17, desc: "Detailed close-up of tile joint consistency and decorative tile transitions." },
  { id: 24, title: "Bathroom Plumbing & Framing Rough-In", category: "craftsmanship", image: image31, desc: "Exposed plumbing lines, wall studs, and bathtub framing during active renovation." },
  { id: 25, title: "Shower Pan & Tile Floor Installation", category: "bathroom", image: image34, desc: "Completed shower pan masonry and floor tiling with fixture boxes ready for finish trim." }
]

export const BLOG_POSTS = [
  {
    id: "florida-bathroom-remodeling-guide",
    title: "Florida Bathroom Remodeling Guide: Waterproofing and Tile Selection for High-Humidity Climates",
    date: "September 15, 2026",
    readTime: "6 min read",
    category: "Bathroom Tips",
    excerpt: "Central Florida's relentless humidity makes proper shower waterproofing paramount. Discover why RedGard barriers and large-format porcelain tile prevent hidden mold and preserve your investment.",
    image: image37,
    content: `When remodeling a bathroom in Central Florida, aesthetic appeal is only half the equation—the unseen defense behind your tiles is what guarantees a 20-year lifespan.

### The Humidity Challenge in Florida Homes
Unlike drier climates, Central Florida homes endure ambient humidity levels often exceeding 75%. In a steamy shower enclosure, water vapor permeates standard cement backer board if an impermeable membrane is not applied. Over time, moisture trapped between drywall and studs causes framing rot and toxic black mold.

### The Solution: Multi-Coat Liquid Waterproofing
At H Coronel & Associates LLC, every shower we construct features RedGard or Schluter waterproofing systems. We apply continuous waterproof barriers across:
- All vertical shower walls up to the ceiling line
- Recessed soap and shampoo niches
- The entire pre-sloped shower curb and pan

### Why Porcelain Trumps Ceramic
While ceramic tile is slightly cheaper, porcelain is fired at significantly higher temperatures, yielding an absorption rate under 0.5%. That makes porcelain virtually impervious to water penetration, staining, and cracking. Combined with anti-microbial epoxy grouts, your shower will remain sparkling clean with minimal scrubbing.

### Elevating the Aesthetic
Central Florida homeowners love combining large-format 24x48 marble-look porcelain walls with tactile river-rock pebble shower pans. The smooth stones gently massage your feet while providing natural traction under wet conditions.`
  },
  {
    id: "kitchen-remodel-roi-central-florida",
    title: "Kitchen Remodeling ROI in Central Florida: Countertops, Cabinets & Layouts That Maximize Value",
    date: "August 28, 2026",
    readTime: "7 min read",
    category: "Kitchen Renovations",
    excerpt: "Planning a kitchen renovation in Altamonte Springs or Greater Orlando? Learn which upgrades return up to 85% of their cost when selling your home.",
    image: image8,
    content: `The kitchen remains the undisputed focal point of residential real estate appraisals in Central Florida. Whether you plan to enjoy your home for another decade or prepare it for a lucrative sale, strategic remodeling choices dictate your return on investment.

### 1. Solid Wood Shaker Cabinets to the Ceiling
Builder-grade cabinets with hollow pressboard doors date a home instantly. Replacing them with solid birch or maple shaker cabinets that extend to the ceiling line accomplishes two vital goals:
- It eliminates the dust-gathering gap above standard cabinets.
- It elongates vertical sightlines, making standard 8-foot or 9-foot ceilings feel grand and expansive.

### 2. Quartz vs. Granite: The Modern Buyer's Choice
While granite was king for decades, non-porous engineered quartz (such as Calacatta quartz with dramatic grey veining) now commands the highest appraisal value. Quartz does not require periodic sealing, resists acidic lemon juice and wine stains, and maintains a sleek, modern finish.

### 3. The Power of the Open-Concept Island
Central Florida entertainment revolves around family gatherings and hosting friends. Opening up a partition wall between your kitchen and living room and replacing it with an 8-foot or 10-foot island creates an inviting culinary stage. Incorporating undermount sinks, pull-out trash bins, and hidden power outlets keeps surfaces clutter-free.`
  },
  {
    id: "drywall-repair-vs-replacement-guide",
    title: "Drywall Repair vs. Replacement: What to Do After Water Leaks or Wall Alterations",
    date: "August 10, 2026",
    readTime: "5 min read",
    category: "Drywall & Framing",
    excerpt: "Plumbing leak or AC condensation drip? Here is how to tell when a simple patch will suffice and when structural drywall replacement is required.",
    image: image7,
    content: `Drywall damage is one of the most common issues Central Florida homeowners encounter—often triggered by air conditioning condensation pan overflows, plumbing leaks behind vanities, or shifting foundations.

### Spotting Water Damage Early
Drywall is made of gypsum plaster sandwiched between paper facings. When gypsum gets wet, it softens and loses structural integrity. Warning signs include:
- Yellowish or brownish water rings on ceilings or baseboards
- Spongy or sagging sections of wallboard
- Musty odors emanating from outlets or baseboards

### Patch vs. Full Replacement
- **When a Patch Works**: If the leak was caught immediately, affected an area under 12x12 inches, and the drywall has not softened, a skilled taper can apply a California patch, joint compound, and texture match.
- **When Full Replacement is Mandatory**: If insulation behind the wall is wet, or if more than 24 inches of gypsum has softened, cutting out the section to the nearest studs is essential. Leaving wet drywall inside a wall cavity will sprout mold within 48 hours in Florida's warm climate.

### Achieving a Level 5 Smooth Finish
Many builders spray heavy orange peel or knockdown texture to hide sloppy drywall joints. At H Coronel & Associates LLC, we specialize in high-end Level 5 smooth skim coats. We apply a thin, continuous coat of compound across the entire wall surface, leaving walls flat and silky smooth before paint.`
  },
  {
    id: "interior-exterior-painting-florida-climate",
    title: "Interior & Exterior Painting in Central Florida: Choosing Paints That Withstand Sun & Moisture",
    date: "July 22, 2026",
    readTime: "5 min read",
    category: "Painting Advice",
    excerpt: "Intense UV rays and summer downpours punish exterior paint. Here is how professional prep and elastomeric coatings protect your stucco for 10+ years.",
    image: image11,
    content: `Painting in Central Florida is fundamentally different from painting in temperate regions. Between tropical sun, torrential afternoon thunderstorms, and high humidity, your exterior coating is the primary shield defending your home's masonry and wood framing.

### The Problem With Cheap Exterior Paint
Standard paints break down under Florida's intense UV radiation. The binder disintegrates, causing chalking—that powdery residue you get on your hand when leaning against an old stucco wall. Once paint chalks, water penetrates hairline cracks during summer storms.

### Professional Exterior Coating Protocol
At H Coronel & Associates LLC, our exterior painting process is thorough:
1. **Commercial Pressure Washing**: Stripping chalk, dirt, and mildew.
2. **Masonry Crack Repair**: Filling hairline stucco fissures with elastomeric patching compound.
3. **Conditioning Primer**: Sealing chalky masonry so the topcoat adheres permanently.
4. **100% Acrylic Exterior Finish**: Applying two thick coats of high-grade exterior paint designed to expand and contract with temperature shifts.

### Interior Paints: Durability & Scrubbability
For interior walls, we recommend satin or eggshell finishes in living areas and semi-gloss for moisture-prone bathrooms and kitchens. We exclusively utilize trusted brands like Sherwin Williams and Benjamin Moore to ensure low odor, rapid drying, and rich color depth.`
  }
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Carlos & Elena M.",
    location: "Altamonte Springs, FL",
    project: "Complete Kitchen & Bathroom Remodel",
    rating: 5,
    date: "2 months ago",
    comment: "Hugo and his crew at H Coronel & Associates are true masters of their trade. They remodeled our entire kitchen with custom cabinets and quartz countertops, then transformed our master bath into a luxury walk-in shower. They were always on time, kept the work area clean every night, and the quality is outstanding! Highly recommend!"
  },
  {
    id: 2,
    name: "David R.",
    location: "Orlando, FL",
    project: "Drywall Repair, Framing & Interior Painting",
    rating: 5,
    date: "3 months ago",
    comment: "We had serious water damage from a plumbing leak that ruined half our living room wall and ceiling. H Coronel & Associates came out immediately, framed new steel studs, hung drywall, and matched the texture so perfectly you can't even tell where the damage was. Honest pricing, fast response, and Hugo is a pleasure to work with."
  },
  {
    id: 3,
    name: "Stephanie K.",
    location: "Clermont, FL",
    project: "Master Bathroom & Soaking Tub",
    rating: 5,
    date: "1 month ago",
    comment: "I was blown away by the craftsmanship. Hugo built us a freestanding tub area on pebble tile and a gorgeous walk-in tile shower with glass doors. The tile leveling was flawless. Best contractor we've hired in Central Florida by far!"
  },
  {
    id: 4,
    name: "Robert P.",
    location: "Debary, FL",
    project: "Exterior Balcony Tiling & Painting",
    rating: 5,
    date: "4 months ago",
    comment: "We referred our neighbor and received our $50 referral bonus as promised! Hugo tiled our second-story exterior balcony and painted the entire exterior of our house. Fair estimate, licensed, insured, and finished ahead of schedule."
  },
  {
    id: 5,
    name: "Michelle T.",
    location: "Mount Dora, FL",
    project: "Custom Finish Carpentry & Archways",
    rating: 5,
    date: "5 months ago",
    comment: "In an older home like ours in Mount Dora, you need someone who knows carpentry. Hugo installed 5-1/4 inch baseboards, crown moulding, and custom built-in niches that look like they were always part of the house. 5 stars all the way."
  }
]
