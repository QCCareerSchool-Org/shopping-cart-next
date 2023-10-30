type Descriptions = {
  [key: string]: string;
};

const descriptions: Descriptions = {
  MZ: '<p class="card-text">Learn everything you need to know to become a successful professional makeup artist. This course is ideal for beginners and experienced MUAs alike!</p><ul><li>You’ll master core makeup techniques including blending, contouring, highlighting, and more</li><li>Become an expert in daytime, nighttime, bridal, and glamour makeup</li><li>Learn how to confidently work with all types of clients</li><li>Launch your own makeup business, or freelance</li></ul><p class="card-text">This course comes with the <strong>Luminous Collection makeup kit!</strong></p>',
  MK: '<p class="card-text">If you don’t want to work as a MUA but want to learn how to do your own makeup like a pro, this course is for you!</p><p class="card-text">Learn all the basics of makeup including matching your foundation, eyes, lips, contouring, correcting, and more.</p>',
  SK: '<p class="card-text">Proper skincare is vital for any client who’s serious about their makeup routine. And most clients don’t know where to start! As a skincare consultant, you’ll help clients figure out what products to use. Then, you’ll establish a skincare routine that’s right for them.</p><p class="card-text">This course is perfect for anyone who wants to be a professional makeup artist or anyone who wants to be as full-time skincare consultant!</p>',
  AB: '<p class="card-text">There’s nothing like a smooth airbrushed look. Whether you want to work with brides, high-fashion, or with special FX clients, airbrush makeup will be a very valuable skill to add to your arsenal.</p>',
  SF: '<p class="card-text">If you want to work in the entertainment industry you’re going to need some special effects training.</p><p class="card-text">Learn from SFX expert Michelle Mulkey as she teaches you the art of special FX including simulating injuries (scars, bruises, wounds, etc.), bald caps, how to age characters, sci-fi and fantasy makeup, and more.</p><p class="card-text">This course comes with a <strong>special FX starter kit:</strong></p>',
  HS: '<p class="card-text">For artists who want to expand into other areas of the beauty industry, Hair Styling is a perfect addition to any makeup business. Imagine doing makeup and hair for a bridal client. It’s an easy way to earn more money!</p><p class="card-text">In this highly hands-on course you will learn how to style hair for any occasion, create hairdos from different periods in history, and more.</p><p class="card-text">This course come with a <strong>professional hair styling wand</strong></p>',
  PF: '<p class="card-text">If you want to be a personal shopper, stylist, or image consultant, this is the course for you.</p><p class="card-text">You’ll become an expert in working with different types of clients to create their personal style. You’ll learn about fabrics, textures, colors and more. From building a client’s wardrobe to picking out the perfect red carpet dress, you’ll have the styling skills to do it all.</p>',
  VM: '<p class="card-text">More and more professionals are offering virtual services, and you can too. You can’t do clients’ makeup through your computer screen, but you can consult with them and teach them how to do their own everyday makeup! This is a great way to earn extra income in your off-hours or whenever you’re unable to visit clients in person. You’ll also build a solid client base who will remember you for their special occasions and other in-person makeup needs!</p>',
  MW: '<p class="card-text">If you’ve completed a foundational makeup course and now want to take your skills to the next level, look no further!</p><p class="card-text">In this course exclusive to QC Makeup Academy, you’ll work one-on-one with Nathan Johnson to enhance your skills. Nathan will push you to be the very best MUA you can be by challenging you to go beyond your skillset to create breathtaking makeup looks that are sure to impress.</p><p class="card-text">Are you ready for a challenge?</p>',
  GB: '<p class="card-text">Become an expert in everyday makeup for different skin tones, and learn different beauty techniques from around the world!</p><p class="card-text">A full unit of the course also teaches you how to work with Henna, including creating henna designs, application, and Indian Bridal Henna.</p><p class="card-text">This advanced course is for those who already have makeup training. If you want to appeal to a more diverse client base, this course is for you!</p>',
  PW: '<p class="card-text">Every makeup artist needs a solid portfolio. Your portfolio is what sells your services to clients who have never seen your work before. It needs to be clean, modern, and above all it needs to show your skills in your best light.</p><p class="card-text">This workshop will teach you how to run a styled photoshoot so that you can get portfolio-quality pictures even if you have limited experience.</p>',
  DG: '<p class="card-text">Offer in-demand grooming services for your clients’ furry family members. With QC’s hands-on training, develop the skills you need to groom a dog from start to finish.</p><p class="card-text">This course comes with a <strong>professional-grade grooming starter kit:</strong></p>',
  DT: '<p class="card-text">Dog owners need trusted professionals to help them manage their furry friends. Learn the skills to help them turn their beloved pets into well-behaved family members.</p>',
  DD: '<p class="card-text">Dog owners need help looking after their four-legged friends. Develop the skills you need to launch a lucrative career as a dog-care professional.</p>',

  I2: '<p class="card-text">Your Interior Decorating certification will prepare you to</p><ul><li>Identify and apply all interior design trends</li><li>Conduct detailed client consultations</li><li>Create custom design presentations that include scale floorplans, furniture arrangements, color, accessory, and lighting choices</li><li>Launch and grow a successful business or get hired in the industry</li></ul><p class="card-text">This course comes with unlimited digital access and printed textbooks (while supplies last).</p>',
  MS: '<p class="card-text">This course is designed to be taken after the Interior Decorating course.</p><p class="card-text">The Staging for Designers course prepares you to</p><ul><li>Identify where value can be added to your clients’ homes by implementing redesign, depersonalizing and curb appeal principles.</li><li>Conduct home staging consultations and prepare client reports.</li><li>Launch and grow a successful staging business or get hired in the industry.</li></ul>',
  ST: '<p class="card-text">Your Home Staging certification will prepare you to</p><ul><li>Identify where value can be added to your clients’ homes by implementing redesign, depersonalizing and curb appeal principles.</li><li>Conduct home staging consultations and prepare client reports.</li><li>Launch and grow a successful staging business or get hired in the industry.</li></ul><p class="card-text">This course comes with unlimited digital access and printed textbooks (while supplies last).</p>',
  LD: '<p class="card-text">Your Landscape Design certification will prepare you to</p><ul><li>Create custom exteriors using landscape design principles.</li><li>Assess conditions and plan appropriate softscape and hardscape features.</li><li>Conduct consultations and site analyses, and prepare drawings to present to your clients.</li><li>Launch and grow a successful landscape design business or get hired in the industry.</li></ul><p class="card-text">This course comes with unlimited digital access and printed textbooks (while supplies last).</p>',
  PO: '<p class="card-text">Your Professional Organizing certification will prepare you to</p><ul><li>Conduct client consultations and identify the optimal function for each space.</li><li>Build new functional systems for your clients.</li><li>Prepare maintenance plans to keep your clients organized.</li><li>Launch and grow a successful organizing business or get hired in the industry.</li></ul>',
  FS: '<p class="card-text">Your Feng Shui certification will prepare you to</p><ul><li>Read the energy in a client’s home or workplace by applying the Bagua map.</li><li>Correct energy imbalances and attract positive ch’i.</li><li>Select appropriate design choices for your clients’ homes that look nice and encourage positive ch’i flow.</li><li>Launch and grow a successful feng shui design business.</li></ul>',
  CC: '<p class="card-text">Your Color Consultant certification prepares you to</p><ul><li>Confidently select colors for your clients.</li><li>Choose appropriate colors based on lighting, undertones, and existing color schemes.</li><li>Create design plans that have consistent color flow throughout the home.</li><li>Start and grow a successful and lucrative color consultation business.</li></ul><p class="card-text">This course comes with unlimited digital access and printed textbooks (while supplies last).</p>',
  FD: '<p class="card-text">Your Floral Design certification prepares you to</p><ul><li>Incorporate floral design principles and elements into your floral designs.</li><li>Expertly create all types of floral arrangements, from corsages and garlands to aisle decor.</li><li>Conduct comprehensive client consultations.</li><li>Start and grow a successful and lucrative floral design business.</li></ul><p class="card-text">This course comes with unlimited digital access and printed textbooks (while supplies last).</p>',
  ED: '<p class="card-text">Your Event Decor certification prepares you to</p><ul><li>Conduct comprehensive client consultations.</li><li>Create and present mood boards to your clients that outline lighting, color, furniture, and floral choices.</li><li>Coordinate the implementation of your event decor plan on the day of the event.</li><li>Start and grow a successful event decor business of your own.</li></ul><p class="card-text">This course comes with unlimited digital access and printed textbooks (while supplies last).</p>',
  AP: '<p class="card-text">Your Aging in Place certification prepares you to</p><ul><li>Assess client needs and evaluate homes.</li><li>Create AIP modification plans.</li><li>Apply the principles of accessible design, universal design and vistable design.</li><li>Conduct decluttering and home transition services.</li><li>Start and grow your own successful aging in place business.</li></ul>',
  DB: '<p class="card-text">Take your design business to the next level! This course can be customized to meet the goals of your business.</p><p class="card-text">You’ll learn how to</p><ul><li>Establish your brand identity and find your ideal customer persona.</li><li>Brainstorm unique promotions that appeal to your ideal customer.</li><li>Build your online presence starting with a professional website.</li><li>Managing your social media presence across channels.</li><li>And much more!</li></ul>',
  VD: '<p class="card-text">Expand your clientele by taking your services online! Virtual consultations are more popular than ever.</p><p class="card-text">Virtual Design Training prepares you to</p><ul><li>Confidently navigate online meeting room technology.</li><li>Conduct design consultations online.</li><li>Market your new online design services.</li></ul>',
};

export const getCourseCardDescription = (courseCode: string): string | undefined => descriptions[courseCode];
