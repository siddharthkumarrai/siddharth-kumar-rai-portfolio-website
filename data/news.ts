export type NewsDetail = {
  subtitle: string;
  category: string;
  status?: string;
  gallery: string[];
  videos: { src: string; caption: string }[];
  sections: { heading: string; content: string }[];
  links: { label: string; href: string }[];
};

export type NewsItem = {
  id: string;
  text: string;
  date: string;
  image?: string;
  href?: string;
  slug: string;
  detail?: NewsDetail;
};

// Short, dated updates. Add a new entry at the top whenever something ships.
export const news: NewsItem[] = [
  {
    id: "humanoid-robot",
    text: "Building a 16-Axis Humanoid Robot with WiFi control and Ambient Lamp — ongoing project with build log, code, and demo videos.",
    date: "Aug 2026",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785859969/Screenshot_2026-08-04_214145_n3kurq.png",
    slug: "humanoid-robot",
    detail: {
      subtitle: "WiFi-Controlled Humanoid Robot with Ambient Lamp — Work in Progress",
      category: "3D PRODUCTION",
      status: "Ongoing",
      gallery: [
        "https://res.cloudinary.com/dombv2xju/image/upload/v1785859969/Screenshot_2026-08-04_214145_n3kurq.png",
      ],
      videos: [
        { src: "https://res.cloudinary.com/dombv2xju/video/upload/v1785859164/vieon1_hq1azs.mp4", caption: "WiFi walk control demo" },
        { src: "https://res.cloudinary.com/dombv2xju/video/upload/v1785859167/vieon2_woqsgu.mp4", caption: "Ambient lamp mode" },
      ],
      sections: [
        {
          heading: "How It Works",
          content: "The robot uses 16 servo motors controlled by an ESP32 microcontroller over WiFi. A custom PCB handles power distribution and signal routing to each joint. The web-based control panel sends real-time pose commands, while the ambient lamp mode uses addressable LEDs that react to audio input.",
        },
        {
          heading: "Technology Used",
          content: "ESP32 for WiFi + Bluetooth control, SG90/MG90S servos for joint articulation, custom PCB for power distribution, WS2812B addressable LED strip for ambient lamp, 3D-printed structural frame, Arduino/PlatformIO firmware.",
        },
        {
          heading: "Why It's Better",
          content: "Unlike off-the-shelf robot kits, this is built entirely from scratch with a custom PCB and 3D-printed frame, giving full control over mechanics and electronics. The WiFi control eliminates tethering, and the ambient lamp mode adds a unique creative feature not found in standard humanoid robots.",
        },
      ],
      links: [
        { label: "GitHub Build Log", href: "https://github.com/siddharthkumarrai/16-Axis-Humanoid-Robot-WiFi-Ambient-Lamp-Build-Log" },
        { label: "SiddJarviz Portfolio", href: "https://siddjarviz.netlify.app/" },
      ],
    },
  },
  {
    id: "sidd-ai",
    text: "Building Sidd AI, a fully offline personal AI assistant for Android running Gemma 4 INT2 locally with Whisper STT and TTS.",
    date: "Mar 2025",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785940493/WhatsApp_Image_2026-08-05_at_20.03.49_r0dr5s.jpg",
    slug: "sidd-ai",
    detail: {
      subtitle: "Fully offline AI assistant on Android — Gemma 4 INT2, Whisper STT, local TTS",
      category: "MOBILE DEVELOPMENT",
      status: "Ongoing",
      gallery: [
        "https://res.cloudinary.com/dombv2xju/image/upload/v1785940493/WhatsApp_Image_2026-08-05_at_20.03.49_r0dr5s.jpg",
      ],
      videos: [
        { src: "https://res.cloudinary.com/dombv2xju/video/upload/v1785941879/sidd_AI_DEMO_1_hze1x9.mp4", caption: "Sidd AI — voice conversation demo" },
        { src: "https://res.cloudinary.com/dombv2xju/video/upload/v1785941879/sidd_ai_demo_2_siu9rg.mp4", caption: "Sidd AI — productivity automation demo" },
      ],
      sections: [
        {
          heading: "How It Works",
          content: "Sidd AI runs entirely on-device with no internet required. Speech is captured and transcribed locally using Google Whisper (STT). The transcribed text is sent to a Gemma 4 INT2 quantized model that runs inference directly on the phone's GPU/NPU via GGML. The model's response is then converted back to speech using an on-device TTS engine, creating a fully offline voice conversation loop. All processing stays on the device — no data ever leaves the phone.",
        },
        {
          heading: "Technology Used",
          content: "Gemma 4 INT2 quantized model for on-device LLM inference, Google Whisper for offline speech-to-text (STT), on-device TTS engine for text-to-speech, Kotlin + Jetpack Compose for the Android UI, GGML/llama.cpp for quantized model execution, Android NNAPI for hardware-accelerated inference, and Room database for local conversation history.",
        },
        {
          heading: "Why It's Better",
          content: "Unlike cloud-based AI assistants (Google Assistant, Siri, ChatGPT), Sidd AI requires zero internet connectivity and processes everything locally. This means complete privacy — no voice data or conversations are sent to any server. The INT2 quantized Gemma 4 model delivers surprisingly capable reasoning while fitting within mobile memory constraints. Running Whisper STT and TTS on-device eliminates the latency of network round-trips, making conversations feel instant and natural.",
        },
      ],
      links: [],
    },
  },
  {
    id: "skillslms-launch",
    text: "Shipped SkillsLMS, a full-stack agentic LMS with a LangGraph + RAG tutoring service.",
    date: "Jul 2026",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785866199/Screenshot_2026-08-04_232601_rvrt8f.png",
    slug: "skillslms-launch",
    detail: {
      subtitle: "A full-stack agentic LMS with AI-powered tutoring",
      category: "WEB DEVELOPMENT",
      status: "Completed",
      gallery: [
        "https://res.cloudinary.com/dombv2xju/image/upload/v1785866199/Screenshot_2026-08-04_232601_rvrt8f.png",
      ],
      videos: [],
      sections: [
        {
          heading: "How It Works",
          content: "SkillsLMS combines a traditional learning management system with an AI tutoring layer. The LangGraph agent fetches relevant course content via RAG, generates personalized explanations, and adapts to each learner's progress. Students can ask questions in natural language and receive contextual answers pulled from their course materials.",
        },
        {
          heading: "Technology Used",
          content: "Next.js for the frontend and API routes, PostgreSQL for data storage, LangGraph for agent orchestration, RAG pipeline for document retrieval, OpenAI embeddings for semantic search, and Vercel for deployment.",
        },
        {
          heading: "Why It's Better",
          content: "Traditional LMS platforms are static content repositories. SkillsLMS adds an intelligent tutoring layer that actively helps students understand material, answers questions contextually, and adapts to individual learning patterns — making online education more interactive and effective.",
        },
      ],
      links: [
        { label: "Live Demo", href: "https://skillslms.vercel.app/" },
      ],
    },
  },
  {
    id: "lumenskart-launch",
    text: "Built and deployed Lumenskart, a production-style Next.js ecommerce storefront with an admin CMS.",
    date: "Jun 2026",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785866439/Screenshot_2026-08-04_233009_blxwd2.png",
    slug: "lumenskart-launch",
    detail: {
      subtitle: "Production-style Next.js ecommerce storefront with admin CMS",
      category: "WEB DEVELOPMENT",
      status: "Completed",
      gallery: [
        "https://res.cloudinary.com/dombv2xju/image/upload/v1785866439/Screenshot_2026-08-04_233009_blxwd2.png",
      ],
      videos: [],
      sections: [
        {
          heading: "How It Works",
          content: "Lumenskart is a fully functional ecommerce storefront with product listing, cart, checkout, and order management. The admin CMS allows managing products, categories, and orders without code changes. Server-side rendering ensures fast page loads and SEO optimization.",
        },
        {
          heading: "Technology Used",
          content: "Next.js 14 with App Router, TypeScript, Tailwind CSS, PostgreSQL with Prisma ORM, NextAuth.js for authentication, Stripe for payments, and Cloudinary for image hosting.",
        },
        {
          heading: "Why It's Better",
          content: "Built with modern Next.js patterns including server components and streaming, Lumenskart achieves near-instant page loads while maintaining full functionality. The integrated admin CMS eliminates the need for third-party tools, giving complete control over the store.",
        },
      ],
      links: [],
    },
  },
  {
    id: "iot-freelance",
    text: "Started freelancing on Electronics & IoT product systems at acreativestudios.",
    date: "Feb 2025",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785939361/WhatsApp_Image_2026-08-05_at_11.51.47_lcuauv.jpg",
    slug: "iot-freelance",
    detail: {
      subtitle: "Electronics & IoT product systems freelancing",
      category: "IOT & ELECTRONICS",
      status: "Ongoing",
      gallery: [
        "https://res.cloudinary.com/dombv2xju/image/upload/v1785939361/WhatsApp_Image_2026-08-05_at_11.51.47_lcuauv.jpg",
      ],
      videos: [],
      sections: [
        {
          heading: "How It Works",
          content: "Freelancing engagement focused on designing and developing IoT product systems. This includes circuit design, firmware development, sensor integration, and cloud connectivity for real-time data monitoring and control.",
        },
        {
          heading: "Technology Used",
          content: "ESP32/ESP8266 microcontrollers, Arduino ecosystem, MQTT protocol, cloud IoT platforms, PCB design with KiCad, and custom firmware in C/C++.",
        },
        {
          heading: "Why It's Better",
          content: "Custom IoT solutions tailored to specific business needs, rather than relying on generic off-the-shelf products. This approach gives clients full ownership of their hardware and software stack with no recurring platform fees.",
        },
      ],
      links: [],
    },
  },
  {
    id: "arista-vault",
    text: "Joined Arivation Fashiontech (Arista Vault) as a Web Development Intern via the IIIT Delhi Incubation Centre.",
    date: "Mar 2025",
    image: "/avatar.jpg",
    slug: "arista-vault",
    detail: {
      subtitle: "Web Development Intern at Arivation Fashiontech via IIIT Delhi Incubation Centre",
      category: "WEB DEVELOPMENT",
      status: "Completed",
      gallery: [
        "/avatar.jpg",
      ],
      videos: [],
      sections: [
        {
          heading: "How It Works",
          content: "Internship at Arivation Fashiontech (Arista Vault), working on web development projects for their fashion-tech platform. Responsibilities included building and maintaining web features, optimizing performance, and collaborating with the design team.",
        },
        {
          heading: "Technology Used",
          content: "React.js, Next.js, Node.js, MongoDB, REST APIs, Git version control, and agile development practices.",
        },
        {
          heading: "Why It's Better",
          content: "Gained hands-on experience in a fast-paced startup environment, working on production code that serves real users. The IIIT Delhi Incubation Centre connection provided mentorship and exposure to the broader startup ecosystem.",
        },
      ],
      links: [],
    },
  },
];
