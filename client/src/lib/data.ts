export interface Article {
  id: string;
  title: string;
  slug: string;
  category: Category;
  subCategory: string;
  content: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export type Category = 'audio' | 'lighting' | 'video' | 'graphics';

export interface SubCategory {
  name: string;
  slug: string;
  category: Category;
}

// Category data
export const categories = [
  {
    name: 'Audio',
    slug: 'audio',
    icon: 'volume-up',
    color: 'bg-blue-500',
    description: 'Sound system setup, troubleshooting, and best practices for worship and events.'
  },
  {
    name: 'Lighting',
    slug: 'lighting',
    icon: 'lightbulb',
    color: 'bg-orange-500',
    description: 'Stage and environmental lighting techniques for creating the right atmosphere.'
  },
  {
    name: 'Video',
    slug: 'video',
    icon: 'video',
    color: 'bg-red-500',
    description: 'Camera operation, streaming setups, and projection solutions for your services.'
  },
  {
    name: 'Graphics',
    slug: 'graphics',
    icon: 'paint-brush',
    color: 'bg-purple-500',
    description: 'Presentation software, design guidelines, and content creation tips.'
  }
];

// SubCategory data
export const subCategories: SubCategory[] = [
  { name: 'Sound Systems', slug: 'sound-systems', category: 'audio' },
  { name: 'Microphones', slug: 'microphones', category: 'audio' },
  { name: 'Mixing Techniques', slug: 'mixing-techniques', category: 'audio' },
  { name: 'Stage Lighting', slug: 'stage-lighting', category: 'lighting' },
  { name: 'Environmental Lighting', slug: 'environmental-lighting', category: 'lighting' },
  { name: 'Lighting Programming', slug: 'lighting-programming', category: 'lighting' },
  { name: 'Camera Setup', slug: 'camera-setup', category: 'video' },
  { name: 'Livestreaming', slug: 'livestreaming', category: 'video' },
  { name: 'Projection', slug: 'projection', category: 'video' },
  { name: 'Presentation Software', slug: 'presentation-software', category: 'graphics' },
  { name: 'Design Guidelines', slug: 'design-guidelines', category: 'graphics' },
  { name: 'Content Creation', slug: 'content-creation', category: 'graphics' }
];

// Article data
export const articles: Article[] = [
  {
    id: '1',
    title: 'Optimizing Your Sound System for Worship',
    slug: 'optimizing-sound-system-worship',
    category: 'audio',
    subCategory: 'sound-systems',
    content: `
# Optimizing Your Sound System for Worship

A properly configured sound system is essential for creating meaningful worship experiences. This guide will walk you through the process of setting up an effective audio system for your ministry.

## Assessing Your Needs

Before purchasing any equipment, it's important to evaluate your specific requirements:

- Size of your worship space and acoustic properties
- Typical size of your worship team (vocalists, instruments)
- Budget constraints and long-term expansion plans
- Technical expertise of your volunteer team
- Additional needs (recording, streaming, multiple rooms)

## Equipment Selection

Once you understand your needs, you can begin selecting appropriate components:

### Mixers

The mixer is the heart of your sound system. Consider these options:
- **Analog mixers:** More affordable, simpler operation, but limited features
- **Digital mixers:** More capabilities, scene recall, effects, remote operation via tablet

### Speakers

Choose speakers based on your room size and configuration:
- **Main speakers:** Coverage for your entire congregation
- **Subwoofers:** For enhanced low frequency reproduction
- **Stage monitors:** For performers to hear themselves

> **Pro Tip:** When selecting speakers, consider line array systems for larger spaces with challenging acoustics. Traditional point-source speakers work well in smaller, more controlled environments.

### Audio Processing

Consider adding these processing components to enhance your sound:
- **Equalization:** To adjust the frequency response of your system
- **Compression:** To control dynamics and prevent distortion
- **Feedback suppression:** To prevent feedback issues

## Installation Process

Proper installation is crucial for optimal performance:

1. **Plan your cable runs:** Keep audio cables away from power cables
2. **Speaker placement:** Position speakers for optimal coverage
3. **Acoustic treatment:** Address room reflections and resonances
4. **Secure mounting:** Ensure all equipment is safely installed

## System Configuration

After installation, properly configure your system:

1. **System gain structure:** Set proper gain levels throughout the signal chain
2. **Equalization:** Tune the system to your room's acoustic properties
3. **Monitor mix setup:** Create effective monitor mixes for performers

## Training Your Team

Even the best equipment needs skilled operators:

- Develop a training program for your tech team volunteers
- Create clear documentation and checklists
- Schedule regular practice sessions outside of service times
- Consider bringing in professional training for advanced topics

## Additional Resources

- [Church Sound University](https://www.churchsounduniversity.com)
- [Behind the Mixer](https://www.behindthemixer.com)
- [Worship Sound Guy](https://worshipsoundguy.com)
    `,
    excerpt: 'Learn how to balance vocals, instruments, and spoken word for the perfect mix during services.',
    date: 'May 15, 2023',
    readTime: '10 min',
    featured: true
  },
  {
    id: '2',
    title: 'Creating Mood with Stage Lighting',
    slug: 'creating-mood-stage-lighting',
    category: 'lighting',
    subCategory: 'stage-lighting',
    content: `
# Creating Mood with Stage Lighting

Effective stage lighting can dramatically enhance worship experiences by creating the right atmosphere for different moments. This guide explores how to use lighting techniques to support the emotional journey of your service.

## Lighting Basics

Understanding the fundamentals will help you make better lighting choices:

- **Color theory:** How different colors evoke different emotions
- **Intensity:** How brightness affects mood and attention
- **Direction:** How light placement creates focus and dimension
- **Movement:** When and how to use dynamic lighting effects

## Emotional Lighting Palettes

Here are some effective lighting approaches for different worship moments:

### Celebratory Worship

- Vibrant colors (blues, purples, reds)
- Higher intensity
- More movement and dynamics
- Wide coverage of the stage and audience

### Reflective Worship

- Cooler colors (blues, purples, teals) 
- Lower intensity
- Minimal movement
- Focused lighting on worship leaders

### Sermon/Teaching

- Warmer, neutral tones (whites, light ambers)
- Consistent, medium intensity
- Static positioning
- Clear visibility of the speaker

## Equipment Recommendations

Depending on your budget and space, consider these lighting fixtures:

- **LED wash lights:** For color-rich stage coverage
- **LED par cans:** For affordable, flexible stage lighting
- **Moving head fixtures:** For dynamic effects and special moments
- **Ellipsoidals/profile fixtures:** For precise spotlighting
- **Light controllers:** For programming scenes and transitions

## Programming Effective Scenes

Create preset lighting scenes for different parts of your service:

1. **Pre-service atmosphere:** Welcoming, warm lighting
2. **Worship transitions:** Smooth changes between songs and moods
3. **Special moments:** Baptisms, communion, altar calls
4. **Post-service:** Bright, conversational lighting

## Training Volunteers

Develop a reliable lighting team:

- Create simple, clear documentation
- Use consistent naming conventions for scenes
- Practice scene changes and transitions
- Start with basic techniques before adding complexity

## Additional Resources

- [Church Production Magazine](https://www.churchproduction.com)
- [Lighting for Worship](https://www.lightingforworship.com)
- [PLSN Magazine](https://plsn.com)
    `,
    excerpt: 'A guide to using different lighting techniques to enhance worship and create meaningful moments.',
    date: 'June 2, 2023',
    readTime: '8 min',
    featured: true
  },
  {
    id: '3',
    title: 'Livestreaming Setup for Small Churches',
    slug: 'livestreaming-setup-small-churches',
    category: 'video',
    subCategory: 'livestreaming',
    content: `
# Livestreaming Setup for Small Churches

Livestreaming your services allows you to reach beyond your physical walls. This guide offers budget-friendly solutions to start livestreaming with high-quality results.

## Essential Components

A basic but effective livestreaming system requires:

1. **Camera(s):** To capture the service
2. **Audio feed:** Direct from your sound system
3. **Computer/encoder:** To process and stream the content
4. **Internet connection:** Reliable upload bandwidth
5. **Streaming platform:** Where your content will be hosted

## Camera Options

Several affordable options provide quality results:

- **DSLR or mirrorless cameras:** Excellent quality, mid-range cost
- **PTZ cameras:** Remote-controlled, good for permanent installation
- **High-quality webcams:** Budget-friendly starting point

> **Budget tip:** Start with a single camera positioned centrally before investing in multi-camera setups.

## Audio Integration

Quality audio is more important than video quality:

- Connect directly to your sound board via a dedicated output
- Use a USB audio interface to get clean sound into your computer
- Consider a hardware audio processor to maintain consistent levels

## Computer Requirements

Your streaming computer needs these minimum specifications:

- Intel i5/AMD Ryzen 5 processor or better
- 8GB RAM minimum (16GB recommended)
- Dedicated graphics card for multi-camera setups
- Ethernet internet connection (not WiFi)

## Software Solutions

Several streaming software options are available:

- **OBS Studio:** Free, powerful, but requires some technical knowledge
- **Ecamm Live:** User-friendly for Mac users, subscription-based
- **VMix:** Powerful Windows solution, various price tiers
- **ProPresenter:** Integrates presentation and streaming, subscription-based

## Internet Requirements

For reliable streaming:

- Minimum 5Mbps dedicated upload speed
- Hardwired ethernet connection
- Backup internet option (like a cellular hotspot)

## Streaming Platforms

Consider these popular platforms:

- **YouTube:** Free, wide reach, easy embedding
- **Facebook Live:** Built-in community, good engagement tools
- **Dedicated church platforms:** Ministry-specific features, subscription-based

## Volunteer Training

Develop clear roles and documentation:

- Camera operator instructions
- Switching/directing guidelines
- Troubleshooting procedures
- Service checklist template

## Additional Resources

- [Church Streaming Guide](https://churchstreamingguide.com)
- [Ministry Tech Pro](https://ministrytechpro.com)
- [ChurchTechToday](https://churchtechtoday.com)
    `,
    excerpt: 'Budget-friendly solutions to start livestreaming your services with high quality results.',
    date: 'April 28, 2023',
    readTime: '12 min',
    featured: true
  },
  {
    id: '4',
    title: 'Setting Up Your Worship Sound System',
    slug: 'setting-up-worship-sound-system',
    category: 'audio',
    subCategory: 'sound-systems',
    content: `
# Setting Up Your Worship Sound System

A comprehensive guide to choosing, installing, and configuring a sound system that works for your space.

## Understanding Acoustics First

Before investing in equipment, understand your room:

- Room dimensions and shape
- Surface materials (reflective vs. absorptive)
- Typical occupancy
- Noise sources and levels

## System Design Principles

A proper system design considers:

- Coverage: Sound should reach every seat consistently
- Clarity: Speech intelligibility is priority #1
- Control: Ability to manage volume and tone effectively
- Consistency: Similar sound quality throughout the space

## Components Selection

### Main Speaker System

Options include:
- **Point source systems:** Economical, easier to install, good for smaller spaces
- **Line arrays:** Better control, more consistent coverage, ideal for larger venues
- **Column arrays:** Excellent speech intelligibility, visually unobtrusive

### Mixers and Processing

- **Digital mixers:** Scene recall, built-in effects, remote control
- **Signal processors:** Equalization, compression, feedback suppression
- **Speaker management:** Crossovers, limiting, time alignment

### Microphones

Choose based on application:
- **Wireless handheld:** For speaking and singing
- **Lavalier/headset:** For hands-free speaking
- **Instrument mics:** For acoustic instruments
- **Choir mics:** For group vocals

### Monitoring

Options include:
- **Floor wedges:** Traditional, affordable, visible
- **In-ear monitors:** Personal, cleaner stage, reduced feedback
- **Personal monitor mixers:** User control, customizable mixes

## Installation Best Practices

- Cable management and labeling
- Proper grounding to prevent hum
- Secure mounting of all components
- Accessibility for maintenance
- Documentation of system design

## System Tuning

- Use measurement microphones and software
- Set proper gain structure
- Equalize for room response
- Set appropriate compression
- Configure monitor mixes

## Maintenance Schedule

- Weekly visual inspection
- Monthly connector cleaning
- Quarterly deeper inspection
- Annual professional service

## Training Documentation

- Create operation manuals
- Develop troubleshooting guides
- Record settings and parameters
- Create mixing templates
    `,
    excerpt: 'A comprehensive guide to choosing, installing, and configuring a sound system that works for your space.',
    date: 'May 10, 2023',
    readTime: '10 min'
  },
  {
    id: '5',
    title: 'Microphone Selection Guide for Churches',
    slug: 'microphone-selection-guide-churches',
    category: 'audio',
    subCategory: 'microphones',
    content: `
# Microphone Selection Guide for Churches

Learn which microphones work best for different applications in your worship environment.

## Microphone Fundamentals

Understanding basic microphone concepts:

- **Polar patterns:** How microphones pick up sound from different directions
- **Frequency response:** How microphones handle different frequencies
- **Sensitivity:** How microphones respond to quiet vs. loud sounds
- **Handling noise:** How microphones handle being touched or bumped

## Vocal Microphones

### Pastor/Speaking Microphones

Options include:
- **Handheld wireless:** Freedom of movement, reliable
- **Lavalier (lapel):** Discreet, hands-free operation
- **Headset:** Consistent positioning, excellent gain-before-feedback
- **Boundary/altar mics:** Fixed position, discreet, limited range

Recommended models:
- Shure SM58 (wired) or Shure SLX/ULX (wireless)
- Countryman E6 or DPA 4066 (headset)
- Shure MX412 (podium)

### Worship Vocal Microphones

For lead and backing vocals:
- **Dynamic microphones:** Durable, good isolation, affordable
- **Condenser microphones:** More detail, wider frequency response

Recommended models:
- Shure SM58 (industry standard, affordable)
- Sennheiser e935 (enhanced clarity, still durable)
- Shure KSM9 (premium option)

## Instrument Microphones

### Acoustic Instruments

- **Guitar:** Small diaphragm condenser or instrument-mounted pickup
- **Piano:** Matched pair of condensers or specialist piano microphones
- **Strings:** Small diaphragm condenser or clip-on microphones

### Amplified Instruments

- **Guitar amp:** Dynamic microphone close to speaker
- **Bass amp:** Dynamic microphone or direct box
- **Keyboard:** Direct box preferred (no microphone)

### Drums

- **Kick drum:** Specialized dynamic microphone
- **Snare:** Small dynamic microphone
- **Toms:** Dynamic microphones or clip-on drum microphones
- **Overhead:** Small diaphragm condenser microphones
- **Alternatives:** Electronic drums or drum shield for volume control

## Choir Microphones

- **Hanging condensers:** Suspended above choir
- **Boundary microphones:** Placed on surfaces near choir
- **Microphone arrays:** Specialized for choir applications

## Wireless Systems

Important considerations:
- **Frequency management:** Avoiding interference
- **Range requirements:** Distance from receiver
- **Battery management:** Runtime and monitoring
- **Future compatibility:** Changing FCC regulations

## Microphone Accessories

Essential additions:
- **Pop filters:** For reducing plosives ("p" and "b" sounds)
- **Shock mounts:** For reducing handling noise
- **Windscreens:** For outdoor use
- **Proper stands:** For stable positioning

## Budget Considerations

- Start with critical microphones (pastor, worship leader)
- Invest in quality wireless for primary positions
- Build inventory gradually with compatible systems
- Consider long-term reliability over initial cost

## Maintenance Tips

- Proper storage procedures
- Cleaning techniques for grills and bodies
- Battery management systems
- Repair vs. replace guidelines
    `,
    excerpt: 'Learn which microphones work best for different applications in your worship environment.',
    date: 'June 5, 2023',
    readTime: '7 min'
  },
  {
    id: '6',
    title: 'Troubleshooting Common Audio Issues',
    slug: 'troubleshooting-common-audio-issues',
    category: 'audio',
    subCategory: 'mixing-techniques',
    content: `
# Troubleshooting Common Audio Issues

Solutions for feedback, distortion, and other common audio problems that occur during services.

## Understanding Audio Problems

Audio issues typically fall into these categories:

- **Level problems:** Too quiet, too loud, unbalanced
- **Tonal problems:** Harsh, muddy, thin, boomy
- **Noise problems:** Hums, buzzes, static
- **Feedback problems:** Squealing, ringing
- **Connection problems:** Dropouts, intermittent audio

## Feedback Prevention and Control

Feedback occurs when sound from speakers reenters microphones, creating a loop.

### Prevention Steps:

1. **Proper microphone placement:** Keep microphones behind speakers
2. **Use appropriate polar patterns:** Cardioid patterns reject rear sound
3. **Ring out the system:** Find feedback frequencies before the service
4. **Train speakers/singers:** Proper microphone technique

### When Feedback Occurs:

1. Quickly lower the affected channel or main fader
2. Identify the source microphone
3. Reposition the microphone or adjust EQ
4. Gradually raise levels back up

## Eliminating Unwanted Noise

### Electrical Hum (60Hz)

Possible causes:
- Ground loops between equipment
- Unbalanced cables near power sources
- Faulty power supplies

Solutions:
- Use balanced connections where possible
- Implement proper grounding techniques
- Use direct boxes with ground lifts
- Keep audio cables away from power cables

### Wireless Interference

Possible causes:
- Frequency conflicts with other devices
- Signal blockage or distance issues
- Low batteries
- External interference sources

Solutions:
- Frequency coordination and planning
- Antenna placement optimization
- Regular battery replacement
- Use of wireless spectrum analyzers

## Solving Vocal Audio Issues

### Muddy Vocals

Possible causes:
- Too much low-mid frequency content
- Excessive reverb
- Poor microphone technique

Solutions:
- Apply high-pass filter (around 100Hz)
- Reduce 200-400Hz range
- Teach proper microphone distance

### Harsh Vocals

Possible causes:
- Excessive high frequencies
- Improper gain structure causing distortion
- Poor microphone choice for the voice

Solutions:
- Gentle reduction around 2-5kHz
- Check gain structure through the signal chain
- Try different microphone options

## Instrument Balance Problems

### Drums Too Dominant

Solutions:
- Use appropriate acoustic treatment or shields
- Balance overhead and close microphones
- Apply gentle compression
- Consider electronic drums for smaller spaces

### Acoustic Guitar Issues

Solutions:
- High-pass filter to reduce low-end rumble
- Notch out problem frequencies (typically 200-400Hz)
- Light compression for consistent levels
- Proper microphone or pickup selection

## System-Wide Issues

### Overall Unclear Mix

Possible causes:
- Too many open microphones
- Lack of proper EQ
- Room acoustic problems

Solutions:
- Follow the 3:1 rule for microphone placement
- Implement the "cut narrow, boost wide" EQ approach
- Consider acoustic treatment for the room
- Use the "subtractive mixing" approach

### Volume Consistency Problems

Solutions:
- Implement proper gain staging
- Use compression appropriately
- Create detailed documentation for different service elements
- Consider an automatic mixer for speech applications

## Emergency Audio Toolkit

Every sound tech should have:
- Spare microphones and cables
- Headphones for isolated listening
- Cable tester
- Direct box
- Multitool and flashlight
- Gaffer tape
- Personal monitor system for troubleshooting
    `,
    excerpt: 'Solutions for feedback, distortion, and other common audio problems that occur during services.',
    date: 'April 28, 2023',
    readTime: '12 min'
  },
  {
    id: '7',
    title: 'Effective PowerPoint Design for Churches',
    slug: 'effective-powerpoint-design-churches',
    category: 'graphics',
    subCategory: 'presentation-software',
    content: `
# Effective PowerPoint Design for Churches

Create clear, engaging slides that enhance your message without distracting your congregation.

## Design Fundamentals

### Readability First

- **Text size:** Minimum 30pt font for main content
- **Font selection:** Sans-serif fonts are more readable on screens
- **Contrast:** Light text on dark backgrounds or vice versa
- **Line spacing:** Allow enough space between lines of text

### Visual Hierarchy

- Most important information should be largest/most prominent
- Use consistent positioning for recurring elements
- Implement a clear, logical reading order

### Color Principles

- Choose 2-3 main colors that align with your church branding
- Use color consistently to indicate different types of content
- Ensure sufficient contrast between text and backgrounds
- Consider color blindness in your design choices

## Slide Content Guidelines

### Song Lyrics

- Display 2-4 lines maximum per slide
- Break lines where people naturally pause
- Include clear section indicators (Verse 1, Chorus, etc.)
- Consider adding song numbers for physical songbook users

### Scripture Passages

- Include reference at top or bottom of slide
- Break text at natural points, not mid-sentence
- Consider including reference on every slide in a series
- Standardize whether you include verse numbers

### Announcements

- Keep to one topic per slide
- Include essential information only (What, When, Where, How)
- Add clear calls to action
- Use consistent design templates for weekly announcements

## Template Creation

### Master Slide Development

- Create master slides for different content types
- Include placeholders for consistent text positioning
- Establish font styles and sizes within the template
- Incorporate subtle branding elements

### Background Selection

- Simple backgrounds prevent distraction
- Subtle patterns or gradients add interest without overwhelming
- Avoid backgrounds that make text hard to read
- Consider using dark backgrounds for reduced eye strain

### Image Usage

- Choose high-quality, relevant images
- Avoid clipart and dated stock photography
- Ensure images don't interfere with text readability
- Be mindful of cultural sensitivity in image selection

## Technical Considerations

### Screen Format

- Know your projection system's resolution and aspect ratio
- Design slides to fit your specific display system
- Test readability from the back of your venue

### Transitions

- Use simple, consistent transitions
- Avoid flashy animations that distract
- Consider fade transitions for song lyrics
- Keep transition speed appropriate (not too slow or fast)

## Practical Workflow Tips

### Organization

- Develop a consistent file naming system
- Create separate sections for different service elements
- Save backups in cloud storage and locally
- Document your design standards for team reference

### Team Training

- Provide templates and guidelines for volunteers
- Create a slide creation checklist
- Implement a review process for quality control
- Schedule regular training sessions for new team members

### Weekly Preparation

- Establish clear deadlines for content submission
- Create a standard order of service template
- Prepare emergency slides for common situations
- Test all presentations before service day

## Alternatives to PowerPoint

- **ProPresenter:** Designed specifically for worship environments
- **EasyWorship:** Worship-focused presentation software
- **MediaShout:** Robust features for church environments
- **Google Slides:** Cloud-based alternative with good collaboration tools

## Resources

- [Church Media Drop](https://churchmediadrop.com) - Free media resources
- [CreationSwap](https://creationswap.com) - Church media marketplace
- [CMG Design](https://cmgdesign.org) - Church media design tutorials
- [Church Motion Graphics](https://churchmotiongraphics.com) - Professional media resources
    `,
    excerpt: 'Create clear, engaging slides that enhance your message without distracting your congregation.',
    date: 'May 12, 2023',
    readTime: '9 min'
  },
  {
    id: '8',
    title: 'Camera Setup for Church Services',
    slug: 'camera-setup-church-services',
    category: 'video',
    subCategory: 'camera-setup',
    content: `
# Camera Setup for Church Services

Learn how to position, configure, and operate cameras for effective ministry video production.

## Camera Selection Guide

### DSLR/Mirrorless Cameras

Advantages:
- Excellent image quality
- Interchangeable lenses
- Affordable entry point for quality video

Considerations:
- Limited recording time per clip
- Require external monitors for operation
- Additional accessories needed for production use

Recommended models:
- Canon EOS R series
- Sony Alpha series
- Panasonic Lumix GH series

### PTZ Cameras

Advantages:
- Remote operation
- Preset position recall
- Unobtrusive installation
- Single operator can control multiple cameras

Considerations:
- Higher cost per camera
- Networking infrastructure required
- Limited manual control compared to operated cameras

Recommended models:
- PTZOptics 30X-SDI
- Panasonic AW-HE40
- BirdDog P400

### Camcorders/ENG Cameras

Advantages:
- Built for video production
- Long recording times
- All-in-one solution
- Better audio inputs

Considerations:
- Limited low-light performance compared to newer systems
- Less "cinematic" look
- Fewer upgrade options

Recommended models:
- Sony PXW-Z90
- Canon XA50
- Panasonic AG-CX10

## Camera Positioning

### Main Camera Positions

- **Center Wide:** Positioned center-back for overall stage view
- **Side Angles:** 45-degree views from left/right
- **Stage Tight:** Close-up options for speakers/performers

### Camera Placement Considerations

- Stable mounting solutions (tripods, wall mounts)
- Operator space requirements
- Cable management
- Sight lines for in-person congregation
- Lighting conditions at camera positions

## Technical Setup

### Resolution and Frame Rate

- **Resolution:** 1080p minimum for most churches, 4K if budget allows
- **Frame rate:** 30fps (US standard), 24fps (more cinematic)
- **Interlaced vs. Progressive:** Always choose progressive (p)

### Exposure Settings

- **Shutter speed:** Typically 1/50 or 1/60 for natural motion
- **Aperture:** Balance depth of field with available light
- **ISO/Gain:** Keep as low as possible while maintaining exposure
- **White balance:** Set manually for consistent color

### Focus Considerations

- Use manual focus for controlled environments
- Assign a dedicated focus puller for moving subjects
- Consider cameras with reliable auto-focus for understaffed teams
- Use focus peaking and external monitors when possible

## Camera Operation Techniques

### Basic Camera Moves

- Static shots (locked down)
- Pan (horizontal movement)
- Tilt (vertical movement)
- Zoom (change in focal length)

### Composition Guidelines

- Rule of thirds for subject placement
- Lead room for speaking subjects
- Headroom considerations
- Background awareness

### Multi-Camera Coordination

- Shot calling system and terminology
- Communication systems (intercoms)
- Consistent framing between cameras
- Complementary coverage patterns

## Integrating with Your Tech Ecosystem

### Video Switching

- Hardware switchers vs. software solutions
- SDI vs. HDMI signal paths
- Camera control integration

### Monitoring

- Program vs. preview monitoring
- Confidence monitors for operators
- Return video for camera operators

### Recording and Streaming

- Camera outputs vs. program output recording
- Redundant recording solutions
- Integration with streaming platforms

## Volunteer Training

### Camera Team Development

- Position-specific training
- Shot sheets and service plans
- Practice sessions outside of services
- Review and feedback processes

### Documentation

- Camera position guides
- Technical setting sheets
- Troubleshooting procedures
- Equipment care instructions

## Resources

- [Church Filmmaker](https://churchfilmmaker.com)
- [Film Riot](https://youtube.com/filmriot) - General filmmaking tutorials
- [Church Video Pros](https://churchvideopros.com)
- [PTZ Camera Training](https://ptzoptics.com/resources)
    `,
    excerpt: 'Learn how to position, configure, and operate cameras for effective ministry video production.',
    date: 'June 18, 2023',
    readTime: '11 min'
  }
];

// Function to get articles by category
export const getArticlesByCategory = (category: Category): Article[] => {
  return articles.filter(article => article.category === category);
};

// Function to get featured articles
export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

// Function to get article by slug
export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

// Function to get subcategories by category
export const getSubcategoriesByCategory = (category: Category): SubCategory[] => {
  return subCategories.filter(subCategory => subCategory.category === category);
};

// Function to get related articles
export const getRelatedArticles = (currentArticle: Article, limit: number = 3): Article[] => {
  return articles
    .filter(article => 
      article.id !== currentArticle.id && 
      (article.category === currentArticle.category || 
       article.subCategory === currentArticle.subCategory)
    )
    .slice(0, limit);
};

// Function to search articles
export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.content.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery)
  );
};

// Function to get category by slug
export const getCategoryBySlug = (slug: string) => {
  return categories.find(category => category.slug === slug);
};
