import { Article, Category, Author } from "@/types";

const audioCategory = {
  id: 1,
  name: "Audio",
  slug: "audio",
  icon: "volume-up",
  description: "Sound system setup, troubleshooting, and best practices"
};

const lightingCategory = {
  id: 2,
  name: "Lighting",
  slug: "lighting",
  icon: "lightbulb",
  description: "Stage and environmental lighting techniques"
};

const videoCategory = {
  id: 3,
  name: "Video",
  slug: "video",
  icon: "video",
  description: "Camera operation and streaming solutions"
};

const graphicsCategory = {
  id: 4,
  name: "Graphics",
  slug: "graphics",
  icon: "paint-brush",
  description: "Presentation design and content creation"
};

const authors: Author[] = [
  {
    id: 1,
    name: "John Smith",
    title: "Audio Engineer"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Lighting Designer"
  },
  {
    id: 3,
    name: "Michael Brown",
    title: "Video Director"
  }
  ,
  {
    id: 4,
    name: "Emily Chen",
    title: "Graphics Designer",
  },
    {
      id: 5,
      name: "Dustin Conine",
      title: "AV Engineer",
    }
];

export const articles: Article[] = [
  {
    id: 1,
    title: "Setting Up Your Audio Console for Worship",
    slug: "setting-up-audio-console-worship",
    excerpt: "Learn how to properly configure your audio console for optimal sound during worship services, including EQ settings, gain staging, and monitor mixes.",
    sections: [
      {
        id: "setup",
        title: "Setting Up Your Audio Console for Worship",
        content: `
          <p>A properly configured audio console is essential for creating an immersive worship experience. This guide walks you through the steps to set up your console effectively.</p>
          <h3>1. Understanding Your Console</h3>
          <p>Before making any adjustments, familiarize yourself with your specific audio console. Different models have different layouts and features, but most share these common elements:</p>
          <ul>
            <li>Channel strips</li>
            <li>Gain/trim controls</li>
            <li>Equalization (EQ) sections</li>
            <li>Auxiliary sends</li>
            <li>Faders</li>
            <li>Master section</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "gainStaging",
        title: "Gain Staging",
        content: `
          <p>Proper gain staging is the foundation of a good mix. Start by setting appropriate input levels:</p>
          <ul>
            <li>Begin with all faders down and gain controls at minimum</li>
            <li>Have musicians play at their typical volume</li>
            <li>Adjust the gain/trim for each channel until the meter shows peaks around -18dB to -12dB</li>
            <li>Avoid clipping (indicated by red lights)</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "eqSettings",
        title: "EQ Settings",
        content: `
          <p>Equalization helps each instrument and vocal sit properly in the mix:</p>
          <ul>
            <li>Start with flat EQ (no boosts or cuts)</li>
            <li>Cut problematic frequencies rather than boosting good ones</li>
            <li>Use high-pass filters on most channels (except bass and kick drum)</li>
            <li>Make small adjustments and listen for changes</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "monitorMixes",
        title: "Monitor Mixes",
        content: `
          <p>Creating good monitor mixes helps musicians perform their best:</p>
          <ul>
            <li>Use pre-fader auxiliary sends for monitor mixes</li>
            <li>Start with vocals in every mix</li>
            <li>Add each musician's instrument prominently in their own mix</li>
            <li>Communicate with the worship team to adjust as needed</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "houseMix",
        title: "Creating a House Mix",
        content: `
          <p>After setting up individual channels and monitors, focus on the main mix:</p>
          <ul>
            <li>Start with vocals and build around them</li>
            <li>Balance instruments by their frequency range and role</li>
            <li>Use compression on dynamic sources</li>
            <li>Apply effects like reverb sparingly</li>
            <li>Regularly walk the room to check coverage</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "bestPractices",
        title: "Best Practices",
        content: `
          <p>Follow these guidelines for consistent results:</p>
          <ul>
            <li>Create and maintain a channel list</li>
            <li>Label channels clearly</li>
            <li>Save scene presets when possible</li>
            <li>Document successful settings</li>
            <li>Arrive early for proper setup time</li>
          </ul>
        `,
        order: 6
      }
    ],
    category: audioCategory,
    coverImage: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    author: authors[0],
    createdAt: "2023-05-10T08:00:00Z",
    updatedAt: "2023-06-15T14:30:00Z",
    featured: false,
    tags: ["audio", "worship", "mixing", "console", "setup"],
    viewCount: 1250
  },
  {
    id: 2,
    title: "Troubleshooting Wireless Microphone Issues",
    slug: "troubleshooting-wireless-microphone-issues",
    excerpt: "Common problems with wireless microphones and how to solve them quickly during live events.",
    sections: [
      {
        id: "noSound",
        title: "No Sound or Low Signal",
        content: `
          <p>If you're getting no sound or a very weak signal:</p>
          <ul>
            <li>Check that the microphone is powered on and has fresh batteries</li>
            <li>Verify that the transmitter and receiver are on the same frequency</li>
            <li>Ensure the receiver is connected properly to the sound system</li>
            <li>Check for physical obstructions between the transmitter and receiver</li>
            <li>Look for interference sources nearby</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "dropouts",
        title: "Dropouts and Intermittent Sound",
        content: `
          <p>For audio that cuts in and out:</p>
          <ul>
            <li>Check battery levels in the transmitter</li>
            <li>Reposition antennas for better line-of-sight</li>
            <li>Move receiver antennas away from metal objects</li>
            <li>Ensure proper antenna spacing (usually wavelength apart)</li>
            <li>Try a different frequency if interference is suspected</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "interference",
        title: "Interference and Noise",
        content: `
          <p>For static, pops, or unwanted noise:</p>
          <ul>
            <li>Scan for and switch to a cleaner frequency</li>
            <li>Keep transmitters away from cell phones and other RF devices</li>
            <li>Use proper frequency coordination if using multiple systems</li>
            <li>Check for damaged cables or connectors</li>
            <li>Update firmware if available</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "feedback",
        title: "Feedback Issues",
        content: `
          <p>To minimize feedback with wireless microphones:</p>
          <ul>
            <li>Position microphones away from speakers</li>
            <li>Use directional microphone elements when possible</li>
            <li>Apply appropriate EQ to reduce problematic frequencies</li>
            <li>Train users on proper microphone technique</li>
            <li>Consider using an automatic feedback suppressor</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "prevention",
        title: "Preventative Measures",
        content: `
          <p>Avoid problems before they occur:</p>
          <ul>
            <li>Always use fresh batteries and have spares ready</li>
            <li>Perform a frequency scan before each event</li>
            <li>Label each system clearly</li>
            <li>Conduct sound checks with all systems operating</li>
            <li>Keep a troubleshooting kit with spare parts</li>
          </ul>
        `,
        order: 5
      }
    ],
    category: audioCategory,
    coverImage: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    author: authors[0],
    createdAt: "2023-05-25T09:15:00Z",
    updatedAt: "2023-06-15T10:45:00Z",
    tags: ["audio", "wireless", "microphones", "troubleshooting"],
    viewCount: 980
  },
  {
    id: 3,
    title: "Setting Up In-Ear Monitoring Systems",
    slug: "setting-up-in-ear-monitoring-systems",
    excerpt: "A comprehensive guide to implementing and managing in-ear monitoring for your worship team.",
    sections: [
      {
        id: "benefits",
        title: "Benefits of In-Ear Monitoring",
        content: `
          <p>Understanding the advantages of IEMs:</p>
          <ul>
            <li>Reduced stage volume and feedback issues</li>
            <li>Consistent monitor mix regardless of position</li>
            <li>Better hearing protection for musicians</li>
            <li>Cleaner stage appearance with fewer floor monitors</li>
            <li>Potential for stereo mixes and click track integration</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "components",
        title: "System Components",
        content: `
          <p>A complete IEM system includes:</p>
          <ul>
            <li>Transmitter (connected to your mixer)</li>
            <li>Bodypack receivers (one per performer)</li>
            <li>In-ear monitors (universal or custom-molded)</li>
            <li>Antennas (for signal distribution)</li>
            <li>Optional personal mixers for individual control</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "setup",
        title: "System Setup",
        content: `
          <p>Steps for proper installation:</p>
          <ul>
            <li>Position transmitters for optimal line-of-sight to performers</li>
            <li>Coordinate frequencies to avoid interference</li>
            <li>Connect transmitters to appropriate aux sends or monitor outputs</li>
            <li>Test signal strength throughout the performance area</li>
            <li>Consider antenna distribution for multiple systems</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "mixes",
        title: "Creating Effective Mixes",
        content: `
          <p>Tips for crafting helpful monitor mixes:</p>
          <ul>
            <li>Start with a solid foundation of vocals, reference instruments, and rhythm section</li>
            <li>Create a "me plus" approach (performer's instrument/voice prominent)</li>
            <li>Use panning to create spatial awareness</li>
            <li>Include ambient mics to maintain connection with the room</li>
            <li>Balance clarity with sufficient volume</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "training",
        title: "Training Your Team",
        content: `
          <p>Help your worship team adapt to IEMs:</p>
          <ul>
            <li>Explain proper insertion techniques for ear pieces</li>
            <li>Demonstrate volume management for hearing protection</li>
            <li>Practice with the system before using it in services</li>
            <li>Establish communication signals with the sound team</li>
            <li>Consider a hybrid approach during transition</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "maintenance",
        title: "Maintenance and Troubleshooting",
        content: `
          <p>Keeping your system reliable:</p>
          <ul>
            <li>Regularly clean earpieces and bodypacks</li>
            <li>Check and replace batteries before services</li>
            <li>Inspect cables and connections routinely</li>
            <li>Store components properly when not in use</li>
            <li>Keep spare parts available for emergencies</li>
          </ul>
        `,
        order: 6
      }
    ],
    category: audioCategory,
    coverImage: "https://images.unsplash.com/photo-1570841398833-43e352e19d9e?auto=format&fit=crop&q=80&w=2925&ixlib=rb-4.0.3",
    author: authors[0],
    createdAt: "2023-04-12T11:20:00Z",
    updatedAt: "2023-05-03T13:15:00Z",
    tags: ["audio", "monitoring", "in-ear", "worship team"],
    viewCount: 842
  },
  {
    id: 4,
    title: "Understanding Audio Signal Flow",
    slug: "understanding-audio-signal-flow",
    excerpt: "Learn the basics of audio signal flow to better diagnose and solve sound system problems.",
    sections: [
      {
        id: "basics",
        title: "The Basics of Signal Flow",
        content: `
          <p>Audio signal flow follows a logical path:</p>
          <ul>
            <li>Sound source (instrument, voice, etc.)</li>
            <li>Microphone or direct input</li>
            <li>Preamp stage (gain adjustment)</li>
            <li>Processing (EQ, compression, effects)</li>
            <li>Mixing (combining multiple signals)</li>
            <li>Amplification</li>
            <li>Speakers (conversion back to sound waves)</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "input",
        title: "Input Stage",
        content: `
          <p>Where the signal enters your system:</p>
          <ul>
            <li>Microphone inputs (XLR) for low-level signals</li>
            <li>Line inputs (TRS/TS) for electronic instruments</li>
            <li>Direct boxes for instrument-to-mixer connections</li>
            <li>Digital inputs (USB, Dante, AES) in modern systems</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "processing",
        title: "Processing Stage",
        content: `
          <p>Shaping and enhancing the signal:</p>
          <ul>
            <li>Channel EQ for tonal adjustments</li>
            <li>Dynamics processing (compression, gating)</li>
            <li>Insert points for external processors</li>
            <li>Auxiliary sends for effects and monitors</li>
            <li>Groups and VCAs for organizational control</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "output",
        title: "Output Stage",
        content: `
          <p>Routing signals to their destinations:</p>
          <ul>
            <li>Main L/R outputs for primary speakers</li>
            <li>Matrix outputs for additional zones</li>
            <li>Monitor sends for stage monitoring</li>
            <li>Recording outputs</li>
            <li>Broadcast feeds</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "digitalAnalog",
        title: "Digital vs. Analog Signal Flow",
        content: `
          <p>Important differences to understand:</p>
          <ul>
            <li>Analog: continuous electrical representation of sound</li>
            <li>Digital: sampled and quantized data representation</li>
            <li>Conversion points (A/D and D/A) can introduce latency</li>
            <li>Digital systems offer more routing flexibility</li>
            <li>Both require proper gain structure throughout</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting Using Signal Flow",
        content: `
          <p>Systematic problem-solving approach:</p>
          <ul>
            <li>Start at the source and follow the signal path</li>
            <li>Check each connection point sequentially</li>
            <li>Use PFL/Solo to isolate channel issues</li>
            <li>Monitor signal levels at various stages</li>
            <li>Understand signal flow diagrams for your specific equipment</li>
          </ul>
        `,
        order: 6
      }
    ],
    category: audioCategory,
    coverImage: "https://images.unsplash.com/photo-1574791418059-710d88813e35?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3",
    author: authors[0],
    createdAt: "2023-03-05T14:30:00Z",
    updatedAt: "2023-04-18T09:20:00Z",
    tags: ["audio", "signal flow", "troubleshooting", "sound system"],
    viewCount: 1025
  },
  {
    id: 5,
    title: "Improving Room Acoustics on a Budget",
    slug: "improving-room-acoustics-budget",
    excerpt: "Cost-effective solutions to enhance the acoustic properties of your worship space.",
    sections: [
      {
        id: "understanding",
        title: "Understanding Your Space",
        content: `
          <p>Before making changes, assess your current situation:</p>
          <ul>
            <li>Identify problem areas (echo, reverb, dead spots)</li>
            <li>Determine if you need absorption, diffusion, or both</li>
            <li>Consider the primary use of the space (speech, music, or both)</li>
            <li>Measure room dimensions and calculate critical frequencies</li>
            <li>Record and listen to test recordings in different positions</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "diyPanels",
        title: "DIY Acoustic Panels",
        content: `
          <p>Create effective absorption panels:</p>
          <ul>
            <li>Build frames from 1x4 lumber</li>
            <li>Fill with Rockwool or Owens Corning 703/705 insulation</li>
            <li>Cover with breathable fabric (not vinyl or plastic)</li>
            <li>Mount at reflection points (identify with a mirror)</li>
            <li>Target first reflection points for greatest impact</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "lowCostDiffusion",
        title: "Low-Cost Diffusion",
        content: `
          <p>Create acoustic diffusion without breaking the bank:</p>
          <ul>
            <li>Repurpose bookshelves with varying depths of books</li>
            <li>Install wooden slats at varying depths</li>
            <li>Use irregular surfaces like decorative wooden panels</li>
            <li>Arrange plants of different sizes</li>
            <li>Consider geometric wall decorations with varying depths</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "furniture",
        title: "Strategic Furniture Placement",
        content: `
          <p>Use existing items to improve acoustics:</p>
          <ul>
            <li>Position soft furniture to absorb sound in problem areas</li>
            <li>Use modular pieces that can be rearranged as needed</li>
            <li>Place bookshelves along problematic walls</li>
            <li>Add cushioned seating to reduce reflections</li>
            <li>Consider room dividers with acoustic properties</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "fabric",
        title: "Fabric and Textile Solutions",
        content: `
          <p>Soft materials can make a big difference:</p>
          <ul>
            <li>Hang heavy curtains on walls or as room dividers</li>
            <li>Use acoustic curtains for more effective treatment</li>
            <li>Install carpet or area rugs in strategic areas</li>
            <li>Add fabric banners or tapestries to walls</li>
            <li>Consider acoustic ceiling clouds from fabric and insulation</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "measuring",
        title: "Measuring Results",
        content: `
          <p>Verify your improvements:</p>
          <ul>
            <li>Record before and after audio samples</li>
            <li>Use a simple RT60 measurement app</li>
            <li>Gather feedback from congregation and team members</li>
            <li>Make incremental changes and test results</li>
            <li>Document what works for future reference</li>
          </ul>
        `,
        order: 6
      }
    ],
    category: audioCategory,
    coverImage: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
    author: authors[0],
    createdAt: "2023-02-20T10:15:00Z",
    updatedAt: "2023-03-22T16:45:00Z",
    tags: ["audio", "acoustics", "room treatment", "budget"],
    viewCount: 763
  },
  {
    id: 6,
    title: "Essential Lighting Concepts for Worship Spaces",
    slug: "essential-lighting-concepts-worship",
    excerpt: "Learn the fundamentals of lighting design for creating meaningful worship environments.",
    sections: [
      {
        id: "purpose",
        title: "The Purpose of Worship Lighting",
        content: `
          <p>Understanding the goals of lighting in worship:</p>
          <ul>
            <li>Creating atmosphere that supports the message</li>
            <li>Guiding attention to important elements</li>
            <li>Ensuring visibility for participants and leaders</li>
            <li>Supporting video capture requirements</li>
            <li>Enhancing the architectural features of your space</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "fixtures",
        title: "Types of Lighting Fixtures",
        content: `
          <p>Common fixtures and their applications:</p>
          <ul>
            <li>PAR cans: Versatile, directional wash lighting</li>
            <li>LED panels: Energy-efficient, color-changing washes</li>
            <li>Ellipsoidals/Profile spots: Precise, focusable beams</li>
            <li>Moving heads: Dynamic, repositionable fixtures</li>
            <li>Strip/Batten lights: Even washes for backdrops</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "positions",
        title: "Basic Lighting Positions",
        content: `
          <p>Strategic fixture placement for effective coverage:</p>
          <ul>
            <li>Front lighting: Illuminates subjects from the audience perspective</li>
            <li>Back lighting: Creates separation and depth</li>
            <li>Side lighting: Adds dimension and modeling</li>
            <li>Down lighting: Provides general illumination</li>
            <li>Uplighting: Creates dramatic effects and highlights architecture</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "colorTheory",
        title: "Color Theory for Worship",
        content: `
          <p>Using color effectively in your lighting design:</p>
          <ul>
            <li>Warm colors (reds, ambers) create intimate, energetic feelings</li>
            <li>Cool colors (blues, purples) evoke calm, reflective moods</li>
            <li>Complementary colors create visual impact</li>
            <li>Color temperature affects the appearance of people and objects</li>
            <li>Consider liturgical colors for special services</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "scenes",
        title: "Creating Lighting Scenes",
        content: `
          <p>Building effective lighting looks:</p>
          <ul>
            <li>Design specific scenes for different parts of your service</li>
            <li>Balance practical visibility with atmospheric elements</li>
            <li>Create contrast to direct attention</li>
            <li>Consider transitions between scenes</li>
            <li>Document successful designs for future reference</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "video",
        title: "Lighting for Video",
        content: `
          <p>Special considerations for recorded or streamed services:</p>
          <ul>
            <li>Provide adequate light levels for cameras</li>
            <li>Avoid extreme contrast that cameras struggle to capture</li>
            <li>Be cautious with saturated colors</li>
            <li>Test lighting with your actual cameras</li>
            <li>Consider separate lighting settings for in-person vs. broadcast</li>
          </ul>
        `,
        order: 6
      }
    ],
    category: lightingCategory,
    coverImage: "https://images.unsplash.com/photo-1503424886307-b090f3d73c95?auto=format&fit=crop&q=80&w=2376&ixlib=rb-4.0.3",
    author: authors[1],
    createdAt: "2023-05-05T09:30:00Z",
    updatedAt: "2023-06-10T11:15:00Z",
    featured: true,
    tags: ["lighting", "worship", "design", "basics"],
    viewCount: 890
  },
  {
    id: 7,
    title: "Programming Your Lighting Console",
    slug: "programming-lighting-console",
    excerpt: "A step-by-step guide to programming and operating lighting consoles for worship services.",
    sections: [
      {
        id: "basics",
        title: "Understanding Console Basics",
        content: `
          <p>Familiarize yourself with key concepts:</p>
          <ul>
            <li>Channels: Individual control addresses for fixtures</li>
            <li>Groups: Collections of channels for easier selection</li>
            <li>Presets/Palettes: Stored lighting parameter values</li>
            <li>Cues: Complete lighting states that can be recalled</li>
            <li>Playbacks: Physical faders or buttons that trigger cues</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "patch",
        title: "Patch and Setup",
        content: `
          <p>Before programming, configure your console:</p>
          <ul>
            <li>Identify each fixture's DMX address</li>
            <li>Patch fixtures to console channels</li>
            <li>Set fixture profiles/personalities</li>
            <li>Arrange fixture layout to match your stage</li>
            <li>Test each fixture to confirm correct patching</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "groups",
        title: "Creating Useful Groups",
        content: `
          <p>Organize fixtures for efficient programming:</p>
          <ul>
            <li>Group by fixture type (all LED pars, all spots, etc.)</li>
            <li>Group by position (front lights, back lights, etc.)</li>
            <li>Group by purpose (stage wash, audience lights, etc.)</li>
            <li>Create special purpose groups (soloists, band, etc.)</li>
            <li>Label groups clearly for easy identification</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "presets",
        title: "Building Presets/Palettes",
        content: `
          <p>Create reusable lighting elements:</p>
          <ul>
            <li>Position presets for common focus areas</li>
            <li>Color presets for frequently used colors</li>
            <li>Beam presets for size and shape configurations</li>
            <li>Effect presets for movement patterns</li>
            <li>Use descriptive names that make sense to all operators</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "cues",
        title: "Programming Cues",
        content: `
          <p>Create complete lighting scenes:</p>
          <ul>
            <li>Start with a basic lighting state</li>
            <li>Adjust intensity, color, position, and beam as needed</li>
            <li>Set appropriate fade times between cues</li>
            <li>Create cues for each distinct part of your service</li>
            <li>Consider using preset references for easier updates</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "organizing",
        title: "Organizing for Service Operation",
        content: `
          <p>Make the console user-friendly during services:</p>
          <ul>
            <li>Arrange cues in service order</li>
            <li>Create labeled playback pages for different types of services</li>
            <li>Program "panic button" states for unexpected situations</li>
            <li>Set up simple controls for volunteer operators</li>
            <li>Document your programming for future reference</li>
          </ul>
        `,
        order: 6
      },
      {
        id: "backup",
        title: "Backing Up Your Programming",
        content: `
          <p>Protect your work:</p>
          <ul>
            <li>Save show files regularly while programming</li>
            <li>Create backups on external media</li>
            <li>Export show data in multiple formats when possible</li>
            <li>Store backups in multiple locations</li>
            <li>Update backups after significant changes</li>
          </ul>
        `,
        order: 7
      }
    ],
    category: lightingCategory,
    coverImage: "https://images.unsplash.com/photo-1588611660387-42afc9a71729?auto=format&fit=crop&q=80&w=2728&ixlib=rb-4.0.3",
    author: authors[1],
    createdAt: "2023-04-08T13:45:00Z",
    updatedAt: "2023-05-12T15:20:00Z",
    tags: ["lighting", "console", "programming", "dmx"],
    viewCount: 720
  },
  {
    id: 8,
    title: "LED Lighting Systems: Selection and Maintenance",
    slug: "led-lighting-systems-selection-maintenance",
    excerpt: "How to choose, install, and maintain LED lighting fixtures for efficient operation in worship spaces.",
    sections: [
      {
        id: "advantages",
        title: "Advantages of LED Lighting",
        content: `
          <p>Why LED systems are ideal for worship spaces:</p>
          <ul>
            <li>Energy efficiency (80-90% more efficient than conventional fixtures)</li>
            <li>Low heat output (safer operation, less HVAC impact)</li>
            <<li>Long lifespan (typically 20,000-50,000 hours)</li>
            <li>Color changing capabilities without gels</li>
            <li>Flexibility in fixture design and installation</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "types",
        title: "Types of LED Fixtures",
        content: `
          <p>Common fixture types and their applications:</p>
          <ul>
            <li>LED PAR/Wash fixtures: General illumination and color washes</li>
            <li>LED strip/batten lights: Even backdrop and architectural lighting</li>
            <li>LED moving heads: Dynamic effects and spotlighting</li>
            <li>LED ellipsoidals: Focused highlighting with pattern capability</li>
            <li>LED house lights: Congregation area illumination</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "selection",
        title: "Selecting Quality Fixtures",
        content: `
          <p>Features to consider when purchasing LED lighting:</p>
          <ul>
            <li>Color rendering index (CRI) - higher is better for accurate colors</li>
            <li>Color temperature options and consistency</li>
            <li>Dimming curve and smoothness at low levels</li>
            <li>Noise levels (fans can be disruptive in quiet moments)</li>
            <li>Build quality and warranty support</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "installation",
        title: "Installation Considerations",
        content: `
          <p>Planning for successful LED implementation:</p>
          <ul>
            <li>Power requirements and distribution</li>
            <li>Data signal reliability over distance</li>
            <li>Heat dissipation in enclosed spaces</li>
            <li>Mounting options and structural support</li>
            <li>Future expansion capabilities</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "maintenance",
        title: "Maintaining LED Systems",
        content: `
          <p>Keeping your LED fixtures performing optimally:</p>
          <ul>
            <li>Regular dusting and exterior cleaning</li>
            <li>Check and secure connections periodically</li>
            <li>Verify cooling fan operation</li>
            <li>Update firmware when available</li>
            <li>Inspect mounting hardware for security</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting Common LED Issues",
        content: `
          <p>Solutions to frequent problems:</p>
          <ul>
            <li>Flickering: Check data connections and termination</li>
            <li>Color inconsistency: Recalibrate fixtures or check mode settings</li>
            <li>Partial function: Verify DMX addressing and mode configuration</li>
            <li>Overheating: Ensure adequate ventilation and check fans</li>
            <li>DMX control issues: Test cables and consider signal amplification</li>
          </ul>
        `,
        order: 6
      }
    ],
    category: lightingCategory,
    coverImage: "https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?auto=format&fit=crop&q=80&w=2680&ixlib=rb-4.0.3",
    author: authors[1],
    createdAt: "2023-03-18T11:30:00Z",
    updatedAt: "2023-04-22T08:45:00Z",
    tags: ["lighting", "LED", "equipment", "maintenance"],
    viewCount: 640
  },
  {
    id: 9,
    title: "Livestreaming Basics for Church Services",
    slug: "livestreaming-basics-church-services",
    excerpt: "Everything you need to know to set up and manage successful livestreams for your worship services.",
    sections: [
      {
        id: "platforms",
        title: "Selecting Your Streaming Platform",
        content: `
          <p>Options and considerations for where to stream:</p>
          <ul>
            <li>Social platforms (YouTube, Facebook) for wide reach and accessibility</li>
            <li>Church-focused platforms for additional ministry tools</li>
            <li>Multi-streaming services to reach multiple platforms simultaneously</li>
            <li>Self-hosted options for maximum control</li>
            <li>Consider your audience's technical capabilities</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "equipment",
        title: "Essential Equipment",
        content: `
          <p>Building a reliable streaming setup:</p>
          <ul>
            <li>Camera(s): From simple webcams to professional PTZ or DSLR cameras</li>
            <li>Audio input: Direct feed from sound board or dedicated microphones</li>
            <li>Capture device: To bring video/audio into your computer</li>
            <li>Computer: With sufficient processing power for encoding</li>
            <li>Streaming software: OBS Studio, vMix, or dedicated hardware encoders</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "internet",
        title: "Internet Requirements",
        content: `
          <p>Ensuring a stable connection:</p>
          <ul>
            <li>Minimum upload speed: 5-10 Mbps for HD streaming</li>
            <li>Wired connections preferred over WiFi</li>
            <li>Dedicated line for streaming if possible</li>
            <li>Backup connection option for emergencies</li>
            <li>Test bandwidth at the time you'll be streaming</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "setup",
        title: "Setting Up Your Stream",
        content: `
          <p>Configuring your software for optimal results:</p>
          <ul>
            <li>Resolution: 1080p or 720p depending on your bandwidth</li>
            <li>Frame rate: 30fps is standard (60fps for smoother motion)</li>
            <li>Bitrate: 4-6 Mbps for 1080p, 2.5-4 Mbps for 720p</li>
            <li>Audio: 128-256 Kbps stereo AAC encoding</li>
            <li>Create scenes for different parts of your service</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "audio",
        title: "Audio Considerations",
        content: `
          <p>The most important aspect of your stream:</p>
          <ul>
            <li>Connect directly to your sound board when possible</li>
            <li>Use a separate mix optimized for streaming</li>
            <li>Monitor audio levels to prevent distortion</li>
            <li>Consider a compressor/limiter for consistent levels</li>
            <li>Test audio on different devices before going live</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "team",
        title: "Building Your Stream Team",
        content: `
          <p>Roles and responsibilities:</p>
          <ul>
            <li>Technical Director: Oversees the entire operation</li>
            <li>Camera Operator(s): Controls camera movement and framing</li>
            <li>Switcher: Selects which camera feed to broadcast</li>
            <li>Graphics Operator: Manages titles, slides, and overlays</li>
            <li>Engagement Coordinator: Monitors comments and engages viewers</li>
          </ul>
        `,
        order: 6
      },
      {
        id: "legal",
        title: "Legal Considerations",
        content: `
          <p>Important factors to address:</p>
          <ul>
            <li>Music licensing for online broadcasts (CCLI streaming license)</li>
            <li>Permission from anyone featured prominently</li>
            <li>Copyright considerations for displayed materials</li>
            <li>Privacy policies and viewer data handling</li>
            <li>Accessibility features like closed captions</li>
          </ul>
        `,
        order: 7
      }
    ],
    category: videoCategory,
    coverImage: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    author: authors[2],
    createdAt: "2023-06-01T10:00:00Z",
    updatedAt: "2023-06-12T08:30:00Z",
    featured: true,
    tags: ["video", "livestreaming", "online", "broadcast"],
    viewCount: 1150
  },
  {
    id: 10,
    title: "Multi-Camera Setup for Worship Services",
    slug: "multi-camera-setup-worship-services",
    excerpt: "How to design, install, and operate a multi-camera system for capturing worship services effectively.",
    sections: [
      {
        id: "planning",
        title: "Planning Your Camera System",
        content: `
          <p>Considerations before purchasing equipment:</p>
          <ul>
            <li>Determine the number of cameras needed for your space</li>
            <li>Identify key shot positions and angles</li>
            <li>Decide between manned or remote-operated cameras</li>
            <li>Establish your budget constraints</li>
            <li>Consider future expansion possibilities</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "cameraTypes",
        title: "Camera Types and Selection",
        content: `
          <p>Options for worship environments:</p>
          <ul>
            <li>PTZ (Pan-Tilt-Zoom): Remote-controlled, space-efficient</li>
            <li>Camcorders: Affordable, versatile operation</li>
            <li>DSLR/Mirrorless: Excellent image quality, limited recording time</li>
            <li>Broadcast cameras: Professional features, higher cost</li>
            <li>Consider lens options, zoom range, and low-light performance</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "positioning",
        title: "Camera Positioning and Mounting",
        content: `
          <p>Creating effective angles and coverage:</p>
          <ul>
            <li>Center front position for primary wide shots</li>
            <li>Side angles for dimensional coverage and speaking positions</li>
            <li>Stage-level cameras for immersive worship team shots</li>
            <li>Rear camera for speaker reactions and audience perspective</li>
            <li>Secure mounting options (tripods, wall mounts, ceiling mounts)</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "routing",
        title: "Video Routing and Switching",
        content: `
          <p>Connecting your camera system:</p>
          <ul>
            <li>Determine signal format (SDI, HDMI, NDI)</li>
            <li>Select appropriate video switcher for your needs</li>
            <li>Consider converter needs between different formats</li>
            <li>Plan cable routes and lengths</li>
            <li>Include multiviewers for monitoring multiple cameras</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "communication",
        title: "Communication Systems",
        content: `
          <p>Essential for coordinated operation:</p>
          <ul>
            <li>Intercom systems for director and camera operators</li>
            <li>Clear terminology for shot calling</li>
            <li>Consider wireless options for moving camera operators</li>
            <li>Establish backup communication methods</li>
            <li>Develop standard hand signals when audio communication isn't possible</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "operation",
        title: "Camera Operation Techniques",
        content: `
          <p>Guidelines for capturing worship effectively:</p>
          <ul>
            <li>Maintain steady shots (use tripods with fluid heads)</li>
            <li>Follow the rule of thirds for composition</li>
            <li>Anticipate movement and action</li>
            <li>Use slow, deliberate movements for transitions</li>
            <li>Create a shot list for typical service elements</li>
          </ul>
        `,
        order: 6
      },
      {
        id: "training",
        title: "Training Your Camera Team",
        content: `
          <p>Developing skilled operators:</p>
          <ul>
            <li>Create simple operational guides for each position</li>
            <li>Practice during rehearsals, not just services</li>
            <li>Review recordings to identify improvement areas</li>
            <li>Rotate positions to build system-wide understanding</li>
            <li>Encourage creative input while maintaining consistency</li>
          </ul>
        `,
        order: 7
      }
    ],
    category: videoCategory,
    coverImage: "https://images.unsplash.com/photo-1576048252570-8f968e8e7022?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3",
    author: authors[2],
    createdAt: "2023-05-02T16:15:00Z",
    updatedAt: "2023-05-18T11:40:00Z",
    tags: ["video", "cameras", "production", "multi-camera"],
    viewCount: 935
  },
  {
    id: 11,
    title: "Video Editing Basics for Ministry Content",
    slug: "video-editing-basics-ministry",
    excerpt: "Learn the fundamentals of editing videos for sermons, announcements, testimonials, and other ministry content.",
    sections: [
      {
        id: "software",
        title: "Choosing Editing Software",
        content: `
          <p>Options for different skill levels and budgets:</p>
          <ul>
            <li>Entry-level: iMovie, Windows Video Editor, Shotcut (free)</li>
            <li>Mid-range: Adobe Premiere Elements, Filmora, DaVinci Resolve (free version)</li>
            <li>Professional: Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve Studio</li>
            <li>Consider learning curve, computer requirements, and feature needs</li>
            <li>Many offer free trials to test before committing</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "organizing",
        title: "Organizing Your Projects",
        content: `
          <p>Establishing an efficient workflow:</p>
          <ul>
            <li>Create consistent folder structures for all projects</li>
            <li>Separate raw footage, audio, graphics, and exports</li>
            <li>Use descriptive file naming conventions</li>
            <li>Back up projects regularly to external drives or cloud storage</li>
            <li>Log key moments in longer recordings for easier editing</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "techniques",
        title: "Basic Editing Techniques",
        content: `
          <p>Essential skills for clean, professional edits:</p>
          <ul>
            <li>Cutting: Removing unwanted sections and combining best takes</li>
            <li>Transitions: Smooth movement between scenes (cuts, dissolves, fades)</li>
            <li>J and L cuts: Offsetting audio and video for natural flow</li>
            <li>Pacing: Adjusting clip length for engagement and clarity</li>
            <li>B-roll: Adding supplementary footage over primary content</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "audio",
        title: "Audio Editing",
        content: `
          <p>Perfecting the sound of your videos:</p>
          <ul>
            <li>Normalize volume levels across all content</li>
            <li>Remove background noise and unwanted sounds</li>
            <li>Add music that enhances but doesn't overpower content</li>
            <li>Use crossfades to smooth audio transitions</li>
            <li>Consider adding subtle ambient sound for natural feel</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "graphics",
        title: "Graphics and Text",
        content: `
          <p>Enhancing your message with visual elements:</p>
          <ul>
            <li>Lower thirds: Names and titles for speakers</li>
            <li>Scripture references: Text overlays for Bible verses</li>
            <li>Call-to-action graphics: Web addresses, event details</li>
            <li>Consistent branding elements (logos, color schemes)</li>
            <li>Ensure text is readable on all screen sizes</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "types",
        title: "Common Ministry Video Types",
        content: `
          <p>Editing approaches for specific content:</p>
          <ul>
            <li>Sermon edits: Focus on clarity, include reaction shots, add graphics</li>
            <li>Announcements: Keep brief, upbeat, with clear call-to-action</li>
            <li>Testimonials: Emotional impact, authentic delivery, music underscore</li>
            <li>Event recaps: Fast-paced, highlight best moments, energetic music</li>
            <li>Teaching content: Organized sections, visual aids, clear audio</li>
          </ul>
        `,
        order: 6
      },
      {
        id: "exporting",
        title: "Exporting and Sharing",
        content: `
          <p>Optimizing your final video:</p>
          <ul>
            <li>Choose resolution based on destination (1080p standard, 4K for future-proofing)</li>
            <li>Select appropriate file format (MP4/H.264 most compatible)</li>
            <li>Adjust bitrate for quality vs. file size balance</li>
            <li>Include proper metadata and thumbnails</li>
            <li>Create platform-specific versions (horizontal for YouTube, square for Instagram)</li>
          </ul>
        `,
        order: 7
      }
    ],
    category: videoCategory,
    coverImage: "https://images.unsplash.com/photo-1574717024453-354056adc482?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    author: authors[2],
    createdAt: "2023-04-12T09:20:00Z",
    updatedAt: "2023-05-05T14:10:00Z",
    tags: ["video", "editing", "post-production", "ministry content"],
    viewCount: 820
  },
  {
    id: 12,
    title: "Creating Effective Worship Presentation Slides",
    slug: "effective-worship-presentation-slides",
    excerpt: "Best practices for designing clear, engaging, and distraction-free worship slides for your congregation.",
    sections: [
      {
        id: "purpose",
        title: "The Purpose of Worship Slides",
        content: `
          <p>Understanding the role of presentation graphics:</p>
          <ul>
            <li>Support congregational participation, not entertain</li>
            <li>Provide clear information at the right time</li>
            <li>Minimize distractions from worship</li>
            <li>Maintain consistency with your overall environment</li>
            <li>Enhance, not compete with, the worship experience</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "text",
        title: "Text Clarity and Readability",
        content: `
          <p>Ensuring everyone can read your slides:</p>
          <ul>
            <li>Use large, readable fonts (minimum 30pt)</li>
            <li>Choose sans-serif fonts for better screen legibility</li>
            <li>Maintain high contrast between text and background</li>
            <li>Limit each slide to 4-5 lines maximum</li>
            <li>Break text at natural phrase breaks, not mid-sentence</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "background",
        title: "Background Selection",
        content: `
          <p>Creating effective slide foundations:</p>
          <ul>
            <li>Use simple, non-distracting backgrounds</li>
            <li>Ensure backgrounds don't overwhelm text</li>
            <li>Consider subtle motion backgrounds for contemporary settings</li>
            <li>Use darker backgrounds in low-light environments</li>
            <li>Match background style to service tone and theme</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "consistency",
        title: "Consistent Design Elements",
        content: `
          <p>Creating a cohesive presentation:</p>
          <ul>
            <li>Develop a consistent template system</li>
            <li>Use the same font family throughout</li>
            <li>Maintain consistent positioning of elements</li>
            <li>Create standard slide types (lyrics, scripture, announcements)</li>
            <li>Use church branding elements appropriately</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "lyrics",
        title: "Lyric Slide Best Practices",
        content: `
          <p>Helping your congregation follow along:</p>
          <ul>
            <li>Include 2-4 lines per slide (1 verse or half a chorus)</li>
            <li>Show the next slide before singers reach it</li>
            <li>Consider adding subtle footer indicators for song section (V1, C, etc.)</li>
            <li>Double-check all spelling and punctuation</li>
            <li>Include copyright information on the final slide</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "scripture",
        title: "Scripture Presentation",
        content: `
          <p>Displaying Bible verses effectively:</p>
          <ul>
            <li>Include reference at top or bottom of each slide</li>
            <li>Break verses at natural pauses, not mid-sentence</li>
            <li>Consider including translation information</li>
            <li>Highlight key phrases sparingly, if appropriate</li>
            <li>Allow sufficient display time for comprehension</li>
          </ul>
        `,
        order: 6
      },
      {
        id: "workflow",
        title: "Practical Workflow Tips",
        content: `
          <p>Streamlining your presentation creation:</p>
          <ul>
            <li>Build a master template file with standardized slides</li>
            <li>Prepare slides well in advance when possible</li>
            <li>Use planning center or similar tools for integration</li>
            <li>Create emergency slides for unexpected moments</li>
            <li>Have backup systems ready for technical failures</li>
          </ul>
        `,
        order: 7
      }
    ],
    category: graphicsCategory,
    coverImage: "https://images.unsplash.com/photo-1616949755610-8b4defa1b577?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    author: authors[3],
    createdAt: "2023-05-20T08:45:00Z",
    updatedAt: "2023-06-05T13:25:00Z",
    featured: true,
    tags: ["graphics", "presentation", "worship", "slides"],
    viewCount: 1050
  },
  {
    id: 13,
    title: "Social Media Graphics for Ministry",
    slug: "social-media-graphics-ministry",
    excerpt: "Learn to create engaging and effective graphics for your ministry's social media platforms.",
    sections: [
      {
        id: "platforms",
        title: "Understanding Platform Requirements",
        content: `
          <p>Each social platform has unique specifications:</p>
          <ul>
            <li>Instagram: Square (1080x1080px) and Story (1080x1920px)</li>
            <li>Facebook: Feed (1200x630px), Cover (820x312px), Event (1920x1080px)</li>
            <li>Twitter: Post (1200x675px), Header (1500x500px)</li>
            <li>YouTube: Thumbnail (1280x720px), Channel Art (2560x1440px)</li>
            <li>Consider creating templates for each size you regularly use</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "principles",
        title: "Design Principles for Ministry Graphics",
        content: `
          <p>Creating visuals that resonate:</p>
          <ul>
            <li>Simplicity: Clear message without visual clutter</li>
            <li>Hierarchy: Guide the eye to the most important information first</li>
            <li>Consistency: Use recognizable brand elements across all graphics</li>
            <li>Authenticity: Reflect your ministry's unique voice and character</li>
            <li>Accessibility: Ensure text is readable and colors have sufficient contrast</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "tools",
        title: "Essential Design Tools",
        content: `
          <p>Software options for creating graphics:</p>
          <ul>
            <li>Canva: User-friendly, template-based, free and paid versions</li>
            <li>Adobe Creative Cloud: Professional tools (Photoshop, Illustrator)</li>
            <li>Over: Mobile app for quick, on-the-go graphics</li>
            <li>ProPresenter Media: Create social graphics from presentation content</li>
            <li>Church Media Kit: Pre-designed templates specifically for ministries</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "typography",
        title: "Typography Best Practices",
        content: `
          <p>Using text effectively in social graphics:</p>
          <ul>
            <li>Limit to 1-2 font families per graphic</li>
            <li>Ensure readability on small screens (avoid overly decorative fonts)</li>
            <li>Create contrast between headline and body text</li>
            <li>Keep text concise — 3-5 words for headlines, minimal body text</li>
            <li>Check readability against backgrounds before publishing</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "color",
        title: "Color Usage",
        content: `
          <p>Effective color strategies:</p>
          <ul>
            <li>Use your ministry's established color palette for recognition</li>
            <li>Limit each graphic to 2-3 colors plus black/white</li>
            <li>Consider color psychology for different content types</li>
            <li>Ensure sufficient contrast for text legibility</li>
            <li>Use color consistently to indicate content categories</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "images",
        title: "Image Selection",
        content: `
          <p>Choosing visuals that enhance your message:</p>
          <ul>
            <li>Use authentic photos of your community when possible</li>
            <li>Select stock photos that feel natural, not staged</li>
            <li>Ensure images align with your message and values</li>
            <li>Consider diversity and representation in your selections</li>
            <li>Maintain consistent visual style across your graphics</li>
          </ul>
        `,
        order: 6
      },
      {
        id: "content",
        title: "Content Types and Graphics",
        content: `
          <p>Tailoring designs to specific purposes:</p>
          <ul>
            <li>Sermon series: Cohesive graphics with series branding</li>
            <li>Events: Clear date, time, location, and call-to-action</li>
            <li>Scripture: Focus on readability, consider verse context</li>
            <li>Announcements: Concise information with next steps</li>
            <li>Testimonials: Authentic photos with brief, impactful quotes</li>
          </ul>
        `,
        order: 7
      }
    ],
    category: graphicsCategory,
    coverImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3",
    author: authors[3],
    createdAt: "2023-04-25T15:30:00Z",
    updatedAt: "2023-05-18T09:20:00Z",
    tags: ["graphics", "social media", "design", "digital"],
    viewCount: 875
  },
  {
    id: 14,
    title: "Video Lower Thirds and Graphics",
    slug: "video-lower-thirds-graphics",
    excerpt: "How to create professional-looking titles, lower thirds, and graphic elements for your ministry videos.",
    sections: [
      {
        id: "types",
        title: "Understanding Video Graphic Types",
        content: `
          <p>Common elements used in ministry videos:</p>
          <ul>
            <li>Lower thirds: Name and title identification for speakers</li>
            <li>Title cards: Introductory screens that establish content</li>
            <li>Bumpers: Short animated segments for transitions</li>
            <li>Call-to-action graphics: Contact information, next steps</li>
            <li>Scripture graphics: Bible verses and references</li>
          </ul>
        `,
        order: 1
      },
      {
        id: "principles",
        title: "Design Principles for Video Graphics",
        content: `
          <p>Creating effective on-screen elements:</p>
          <ul>
            <li>Simplicity: Clean designs that don't distract from content</li>
            <li>Legibility: Text must be easily readable, even on small screens</li>
            <li>Safe areas: Keep essential elements away from screen edges</li>
            <li>Duration: Display long enough to read, not longer</li>
            <li>Consistency: Maintain unified style throughout your video</li>
          </ul>
        `,
        order: 2
      },
      {
        id: "lowerThirds",
        title: "Lower Thirds Best Practices",
        content: `
          <p>Identifying speakers effectively:</p>
          <ul>
            <li>Position in lower third of screen, aligned left or centered</li>
            <li>Include name and relevant title/role</li>
            <li>Use clean, sans-serif fonts at appropriate sizes</li>
            <li>Create subtle entrance/exit animations</li>
            <li>Display for 5-7 seconds initially, then remove</li>
          </ul>
        `,
        order: 3
      },
      {
        id: "branding",
        title: "Color and Branding",
        content: `
          <p>Visual consistency in your graphics:</p>
          <ul>
            <li>Use your ministry's established color palette</li>
            <li>Ensure sufficient contrast with varying video backgrounds</li>
            <li>Consider adding a semi-transparent background behind text</li>
            <li>Integrate subtle logo elements where appropriate</li>
            <li>Create templates with consistent styling</li>
          </ul>
        `,
        order: 4
      },
      {
        id: "software",
        title: "Creating Graphics in Different Software",
        content: `
          <p>Tool options for various skill levels:</p>
          <ul>
            <li>Video editing software: Built-in title tools (Premiere Pro, Final Cut, DaVinci)</li>
            <li>Motion graphics: After Effects, Apple Motion</li>
            <li>Template-based: Canva Pro, Adobe Premiere Rush</li>
            <li>Dedicated tools: NewBlue Titler Pro, ProPresenter</li>
            <li>Online services: Storyblocks, Church Media Kit</li>
          </ul>
        `,
        order: 5
      },
      {
        id: "animation",
        title: "Animation Considerations",
        content: `
          <p>Adding movement to your graphics:</p>
          <ul>
            <li>Keep animations subtle and professional</li>
            <li>Use simple transitions (fade, slide, scale)</li>
            <li>Maintain readability throughout the animation</li>
            <li>Consider timing with content and music</li>
            <li>Use motion to draw attention, notdistract</li>
          </ul>
        `,
        order: 6
      },
      {
        id: "technical",
        title: "Technical Specifications",
        content: `
          <p>Ensuring quality output:</p>
          <ul>
            <li>Create at your video's resolution (typically 1920x1080)</li>
            <li>Use vector graphics when possible for scalability</li>
            <li>Export with alpha channels for transparency</li>
            <li>Consider rendering as ProRes 4444 or similar quality codec</li>
            <li>Test readability on multiple screen sizes</li>
          </ul>
        `,
        order: 7
      },
      {
        id: "organizing",
        title: "Organizing Your Graphics Library",
        content: `
          <p>Managing assets efficiently:</p>
          <ul>
            <li>Create standardized templates for recurring elements</li>
            <li>Develop a naming convention for easy retrieval</li>
            <li>Organize by type, event, or series</li>
            <li>Maintain source files for future editing</li>
            <li>Consider creating a style guide for consistency</li>
          </ul>
        `,
        order: 8
      }
    ],
    category: graphicsCategory,
    coverImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3",
    author: authors[3],
    createdAt: "2023-03-30T10:45:00Z",
    updatedAt: "2023-04-15T13:30:00Z",
    tags: ["graphics", "video", "lower thirds", "titles"],
    viewCount: 705
  },
  {
    id: 15,
    title: "MXBus App Set-Up Guide",
    slug: "setting-up-MXBus-App",
    excerpt: "Learn how to properly Download and Install the MXBus App",
    sections: [
      {
        id: "downloadInstall",
        title: "Download / Install",
        content: `
          <p>
          <a href="https://apps.apple.com/us/app/mxbus/id1530411157/"> Click Here To Download From The App Store. </a>
          </p> 
          <p>-You will need to connect to the same wifi network as the Audio Mixer.<br>-You will need to ask for the Audio Mixer IP address in order to connect the app to the Mixer.</p>
          <ul>
            <li>Connected to the same WIFI</li>
            <li>Audio Mixer IP Address</li>
            <li>Select Manual connection and enter the IP address</li>
          </ul>
        `,
        order: 1
      }
    ],
    category: audioCategory,
    coverImage: "https://www.keldenich.net/images/mxbus-mixer",
    author: authors[4],
    createdAt: "2025-03-21T08:00:00Z",
    updatedAt: "2025-03-21T14:30:00Z",
    tags: [],
    featured: true,
    viewCount: 720
  }
];

export const categories = [audioCategory, lightingCategory, videoCategory, graphicsCategory];