export type ProjectLink = {
  label: string;
  href: string;
};

export type DetailSection = {
  heading: string;
  content?: string;
  table?: { headers: string[]; rows: string[][] };
  code?: string;
  list?: string | string[];
  note?: string;
};

export type ProjectDetail = {
  subtitle: string;
  category: string;
  status?: string;
  heroVideo?: string;
  stats: { label: string; value: string }[];
  overview: string;
  architecture?: string;
  sections: DetailSection[];
  links: ProjectLink[];
};

export type Project = {
  id: string;
  title: string;
  publisher?: string;
  publisherHref?: string;
  eyebrow?: string;
  image?: string;
  tag?: string;
  stack: string[];
  tldr: string;
  bullets: string[];
  links: ProjectLink[];
  slug?: string;
  detail?: ProjectDetail;
};

// Add a new project by pushing an object here — the UI updates automatically.
export const projects: Project[] = [
  {
    id: "vieon-16axis",
    title: "16-Axis VIEON Humanoid Robot",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Introducing",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785943579/siddharth_kumar_rai_Robot_Hardware_image_e1hbar.jpg",
    tag: "In Progress",
    stack: ["ESP32", "Arduino", "Python", "WebSocket", "OpenCV", "Gemini API", "Cardboard", "Servo Motors", "PCA9685", "MPU6050"],
    tldr:
      "A 16-DoF bipedal humanoid robot built from scratch for ₹4,500 — cardboard structure, offline AI voice, WiFi control, and a full phase-by-phase assembly guide.",
    bullets: [
      "Designed and built a 16-servo humanoid with custom kinematic chain, PCA9685 driver, and ESP32-CAM brain.",
      "Integrated offline voice control (VC-02), gyro balance (MPU6050), and cliff detection sensors.",
      "Created a complete build guide with wiring diagrams, servo maps, budget breakdown, and firmware code."
    ],
    links: [
      { label: "GitHub Build Log", href: "https://github.com/siddharthkumarrai/16-Axis-Humanoid-Robot-WiFi-Ambient-Lamp-Build-Log" },
      { label: "SiddJarviz Portfolio", href: "https://siddjarviz.netlify.app/" }
    ],
    slug: "vieon-16axis-humanoid",
    detail: {
      subtitle: "16-DoF Humanoid Robot from scratch — ₹4,500",
      category: "ROBOTICS",
      status: "Complete",
      stats: [
        { label: "Height", value: "~30cm" },
        { label: "Servos (DoF)", value: "16" },
        { label: "Total Budget", value: "₹4,500" },
        { label: "Build Phases", value: "5" },
        { label: "Target Weight", value: "500g" },
        { label: "Battery Life", value: "2.5hr" },
      ],
      overview: "Full blueprint, wiring diagrams, servo maps, dimensions, cardboard structure guide, software stack, and phase-by-phase assembly for a beginner-friendly bipedal humanoid with offline AI voice.",
      architecture: `┌─────────────────────────────────────────────────────┐
│            INTELLIGENCE LAYERS (Wi-Fi)              │
│  [Gemini API free]  [Mobile Phi-3]  [Laptop LLaMA]  │
└───────────────────────┬─────────────────────────────┘
                        │ WebSocket / HTTP
                        ▼
┌─────────────────────────────────────────────────────┐
│                 HEAD / CAMERA NODE                  │
│   ESP32-CAM · VC-02 voice AI · 0.96" OLED face       │
│   2× MG90S neck servos  ← ch 0 (pan) · ch 1 (tilt) │
└───────────────────────┬─────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│                     TORSO BLOCK                     │
│  PCA9685 (16-ch driver) · MPU6050 (gyro) · MB102 (pwr) │
│  Battery pack · TP4056 charger module               │
└──────────┬──────────────────────────────┬───────────┘
           │                              │
  ┌────────┴──────┐              ┌────────┴──────┐
  │   LEFT ARM    │              │   RIGHT ARM   │
  │ ch2 Shoulder  │              │ ch5 Shoulder  │
  │ ch3 Elbow     │              │ ch6 Elbow     │
  │ ch4 Gripper   │              │ ch7 Gripper   │
  │ (3× MG90S)    │              │ (3× MG90S)    │
  └───────────────┘              └───────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│                  PELVIS HIP FRAME                   │
│    ch8 Hip-Roll LEFT (MG996R)                       │
│    ch9 Hip-Roll RIGHT (MG996R)                      │
└──────────┬──────────────────────────────┬───────────┘
           │                              │
  ┌────────┴──────┐              ┌────────┴──────┐
  │  LEFT LEG     │              │  RIGHT LEG    │
  │ ch10 Hip Pitch│              │ ch13 Hip Pitch│
  │ (MG996R)      │              │ (MG996R)      │
  │ ch11 Knee     │              │ ch14 Knee     │
  │ (MG90S)       │              │ (MG90S)       │
  │ ch12 Ankle    │              │ ch15 Ankle    │
  │ (MG90S)       │              │ (MG90S)       │
  │               │              │               │
  │ ▓▓▓▓▓▓▓▓▓▓▓▓ │              │ ▓▓▓▓▓▓▓▓▓▓▓▓ │
  │ 10cm×6cm FOOT │              │ 10cm×6cm FOOT │
  │ IR sensor ↓   │              │ IR sensor ↓   │
  └───────────────┘              └───────────────┘

SAFETY: HC-SR04 ultrasonic (front) · 2× IR cliff (feet)`,
      sections: [
        {
          heading: "Brain Stack",
          list: [
            "ESP32-CAM — main MCU + Wi-Fi + camera",
            "VC-02 — offline speech recognition",
            "MPU6050 — 6-axis gyro/accelerometer",
            "PCA9685 — I2C 16-channel servo driver",
            "0.96\" OLED — face expressions",
          ],
        },
        {
          heading: "Actuators",
          list: [
            "4× MG996R — high-torque hips (11 kg/cm)",
            "12× MG90S — all other joints (metal gear)",
            "Total: 16 servos, 16 DoF",
          ],
        },
        {
          heading: "Power",
          list: [
            "2× 18650 Li-ion cells (series = 7.4V)",
            "TP4056 USB-C charging module",
            "MB102 → 5V/3.3V logic rail",
            "Motor rail: direct from battery",
            "~2.5 hr normal operation",
          ],
        },
        {
          heading: "Physical Dimensions",
          content: "Scale reference: Jarvis is approximately 2× OnePlus Nord CE in height (~30–32 cm). All measurements are for cardboard/tin sandwich construction.",
          table: {
            headers: ["Body Part", "Width", "Height/Length", "Depth"],
            rows: [
              ["Head box", "6 cm", "5 cm", "4 cm"],
              ["Neck bracket", "3 cm", "1.5 cm", "3 cm"],
              ["Torso block", "9 cm", "8 cm", "5 cm"],
              ["Hip frame", "12 cm", "4 cm", "5 cm"],
              ["Thigh (each)", "3 cm", "7 cm", "2.5 cm"],
              ["Shin (each)", "2.5 cm", "7 cm", "2 cm"],
              ["Foot plate (each)", "10 cm", "6 cm", "0.5 cm"],
              ["Upper arm (each)", "2 cm", "5 cm", "2 cm"],
              ["Lower arm (each)", "2 cm", "5 cm", "2 cm"],
              ["Gripper (each)", "4 cm", "3 cm", "1.5 cm"],
            ],
          },
          note: "Cardboard sandwich rule: Every structural piece = 3–4 layers of cardboard glued together. Single layer will flex and fail under servo torque.",
        },
        {
          heading: "Weight Budget",
          table: {
            headers: ["Part", "Weight"],
            rows: [
              ["Head + neck", "~60g"],
              ["Torso + electronics", "~120g"],
              ["Hip frame + 2 MG996R", "~130g"],
              ["Each leg", "~50g × 2 = 100g"],
              ["Each arm", "~20g × 2 = 40g"],
              ["Total target", "≤ 550g"],
            ],
          },
        },
        {
          heading: "Full Component Specifications",
          table: {
            headers: ["Component", "Model", "Qty", "Key Specs", "Price"],
            rows: [
              ["MCU + Camera", "ESP32-CAM", "1", "240MHz dual-core · 4MB flash · OV2640 · Wi-Fi", "₹600"],
              ["Voice AI", "AI-Thinker VC-02 Kit", "1", "US516P6 32-bit · 150+ offline cmds · UART", "₹700"],
              ["Servo driver", "PCA9685", "1", "I2C · 16 channels · 12-bit PWM", "₹220"],
              ["Gyro/IMU", "MPU6050", "1", "6-axis (accel + gyro) · I2C · addr 0x68", "₹110"],
              ["OLED face", "SSD1306 0.96\"", "1", "128×64 px · I2C · addr 0x3C", "₹200"],
              ["Hip servo ×4", "MG996R TowerPro", "4", "11 kg/cm · Metal gear · 55g", "₹1,016"],
              ["Body servo ×12", "MG90S (metal gear)", "12", "2.2 kg/cm · Metal gear · 13.4g", "₹1,080"],
              ["Power module", "MB102", "1", "5V / 3.3V dual rail · AMS1117", "₹70"],
              ["Battery", "18650 Li-ion × 2", "2", "2600–3000mAh · 3.7V each", "₹220"],
              ["Charger", "TP4056 (Type-C)", "1", "1A charge · overvoltage protect", "₹30"],
              ["Cliff sensor", "IR obstacle ×2", "2", "2–30cm · Digital output", "₹70"],
              ["Front sensor", "HC-SR04", "1", "2–400cm · ±3mm accuracy · 5V", "₹50"],
            ],
          },
          note: "MG996R buying test: Lift the motor — genuine 11 kg/cm metal gear should feel heavy (~55–60g). Rotate the shaft manually — it should resist strongly. If it spins easily, it's a fake.",
        },
        {
          heading: "PCA9685 Servo Channel Mapping",
          content: "All 16 channels mapped. PCA9685 default I2C address is 0x40. Set PWM frequency to 50Hz for servos.",
          table: {
            headers: ["CH", "Joint", "Servo", "Function"],
            rows: [
              ["00", "Neck Pan / Yaw", "MG90S", "Left/Right head turn"],
              ["01", "Neck Tilt / Pitch", "MG90S", "Up/Down head nod"],
              ["02", "Left Shoulder", "MG90S", "Arm forward/back"],
              ["03", "Left Elbow", "MG90S", "Arm bend"],
              ["04", "Left Gripper", "MG90S", "Claw open/close"],
              ["05", "Right Shoulder", "MG90S", "Arm forward/back"],
              ["06", "Right Elbow", "MG90S", "Arm bend"],
              ["07", "Right Gripper", "MG90S", "Claw open/close"],
              ["08", "Left Hip Roll", "MG996R", "Lateral balance (pelvis)"],
              ["09", "Right Hip Roll", "MG996R", "Lateral balance (pelvis)"],
              ["10", "Left Hip Pitch", "MG996R", "Thigh forward/back swing"],
              ["11", "Left Knee", "MG90S", "Lower leg bend"],
              ["12", "Left Ankle", "MG90S", "Foot angle / floor contact"],
              ["13", "Right Hip Pitch", "MG996R", "Thigh forward/back swing"],
              ["14", "Right Knee", "MG90S", "Lower leg bend"],
              ["15", "Right Ankle", "MG90S", "Foot angle / floor contact"],
            ],
          },
          note: "PWM values for MG90S/MG996R: 0° = 150 counts (0.5ms), 90° = 375 counts (1.5ms), 180° = 600 counts (2.5ms). Set frequency to exactly 50Hz.",
        },
        {
          heading: "Power System Design",
          content: "Power flow: 18650×2 series (7.4V) → PCA9685 V+ (motor rail) + MB102 → 5V/3.3V (logic rail). Motors and logic MUST share GND but NOT share +V.",
          table: {
            headers: ["Usage", "Current Draw", "Battery Life"],
            rows: [
              ["Normal operation", "~1000mA", "~2.6 hours"],
              ["Light use (standing)", "~400mA", "~6.5 hours"],
              ["Heavy walking", "~1800mA", "~1.4 hours"],
            ],
          },
          note: "Safety: Never short Li-ion cells. TP4056 auto-cuts at 4.2V per cell. Never discharge below 3.0V per cell (2 cells = 6.0V cutoff). Use XT30 connectors for battery leads.",
        },
        {
          heading: "Wiring — I2C Bus",
          content: "ESP32-CAM GPIO21 (SDA) and GPIO22 (SCL) shared across PCA9685 (0x40), MPU6050 (0x68), and OLED SSD1306 (0x3C). Add 4.7kΩ pull-up resistors on SDA and SCL to 3.3V.",
        },
        {
          heading: "Wiring — UART (VC-02 Voice)",
          content: "ESP32-CAM GPIO1 (TX) → VC-02 RX. ESP32-CAM GPIO3 (RX) → VC-02 TX. Cross-connect TX→RX. VC-02 powered from MB102 5V.",
        },
        {
          heading: "Wiring — GPIO Pins",
          list: [
            "GPIO4 → IR sensor LEFT FOOT (digital in)",
            "GPIO13 → IR sensor RIGHT FOOT (digital in)",
            "GPIO14 → HC-SR04 TRIGGER",
            "GPIO15 → HC-SR04 ECHO (use 1kΩ+2kΩ voltage divider — ECHO is 5V, ESP32 is 3.3V)",
            "GPIO0 → Boot mode (leave HIGH during operation)",
          ],
          note: "GPIO16 is not usable on ESP32-CAM (connected to PSRAM). GPIO12 must be LOW at boot. Flash LED is on GPIO4 — avoid for IR sensor if using flash.",
        },
        {
          heading: "Software Stack",
          list: [
            "ESP32 firmware (C++) — Arduino IDE + ESP32 board package",
            "Libraries: Adafruit PCA9685, MPU6050, Wire, SSD1306, WebSocket",
            "FreeRTOS for multitasking (Core 0 = net, Core 1 = motors)",
            "Laptop server (Python/Node) — FastAPI or Express",
            "WebSocket server for real-time motor commands",
            "OpenCV for face/object detection",
            "Gemini API for AI responses",
            "Dashboard (Next.js) — live servo sliders, camera feed, gait editor",
          ],
        },
        {
          heading: "ESP32 Firmware Skeleton",
          code: `// jarvis_firmware.ino — Phase 1 starter
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>
#include <Adafruit_MPU6050.h>
#include <Adafruit_SSD1306.h>
#include <WiFi.h>
#include <WebSocketsServer.h>

// Servo PWM constants
#define SERVO_MIN 150  // 0.5ms → 0°
#define SERVO_MID 375  // 1.5ms → 90°
#define SERVO_MAX 600  // 2.5ms → 180°

// Channel assignments
#define CH_NECK_PAN 0    #define CH_NECK_TILT 1
#define CH_LSHOULDER 2   #define CH_LELBOW 3
#define CH_LGRIPPER 4    #define CH_RSHOULDER 5
#define CH_RELBOW 6      #define CH_RGRIPPER 7
#define CH_LHIP_ROLL 8   #define CH_RHIP_ROLL 9
#define CH_LHIP_PITCH 10 #define CH_LKNEE 11
#define CH_LANKLE 12     #define CH_RHIP_PITCH 13
#define CH_RKNEE 14      #define CH_RANKLE 15

Adafruit_PWMServoDriver pca = Adafruit_PWMServoDriver(0x40);
Adafruit_MPU6050 mpu;
Adafruit_SSD1306 oled(128, 64, &Wire);
WebSocketsServer ws(81);

void setServo(uint8_t ch, int angleDeg) {
  angleDeg = constrain(angleDeg, 0, 180);
  int pulse = map(angleDeg, 0, 180, SERVO_MIN, SERVO_MAX);
  pca.setPWM(ch, 0, pulse);
}

void standNeutral() {
  for (int i = 0; i < 16; i++) setServo(i, 90);
}

bool isSafeGround() {
  return digitalRead(4) && digitalRead(13);
}

void setup() {
  Serial.begin(115200);
  Serial2.begin(115200);  // VC-02 UART
  Wire.begin(21, 22);     // SDA=21, SCL=22
  pca.begin();
  pca.setPWMFreq(50);
  mpu.begin();
  oled.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  standNeutral();
  delay(1000);
  WiFi.begin("YourSSID", "YourPassword");
  ws.begin();
}

void loop() {
  ws.loop();
  if (!isSafeGround()) standNeutral();
}`,
        },
        {
          heading: "Assembly Sequence",
          list: [
            "Day 1–2: Breadboard test — ESP32 blink, PCA9685 I2C scan, one servo sweep, MPU6050 values, OLED text, VC-02 voice echo",
            "Day 3–4: Head build — 6×5×4cm box, eye holes, OLED mount, ESP32-CAM inside, L-bracket neck, pan+tilt test",
            "Day 5–6: Torso + voice — 9×8×5cm box, foam-tape all boards, VC-02 speaker grille, full voice test, attach head",
            "Day 7–8: Arms — calibrate CH2–CH7 to 90°, upper/lower arm strips, shoulder/elbow slots, gripper build, wave test",
            "Day 9–11: Hip frame + legs — tin+cardboard hybrid, 2× MG996R Roll slots, thigh/shin pieces, foot plates, IR sensors, PID balance",
            "Day 12+: Walking + AI — 4-phase gait cycle, PID tuning, WebSocket server, Gemini API, ArUco navigation, dashboard",
          ],
        },
        {
          heading: "Build Phases",
          table: {
            headers: ["Phase", "Milestone", "Timeline"],
            rows: [
              ["P1", "Head + Voice — speaks, listens offline, shows expressions", "Week 1–2"],
              ["P2", "Arms + Grippers — waves, extends, grasps objects", "Week 3"],
              ["P3", "Legs — Static Balance — stands upright, PID loop working", "Week 4–5"],
              ["P4", "Walking + Navigation — walks, turns, camera + markers", "Week 6–8"],
              ["P5", "AI + Autonomous — sees, thinks, acts, trash pickup", "Week 9+"],
            ],
          },
        },
        {
          heading: "Complete Budget Breakdown",
          table: {
            headers: ["Item", "Qty", "Unit Price", "Total"],
            rows: [
              ["AI-Thinker VC-02 Kit", "1", "₹700", "₹700"],
              ["ESP32-CAM with OV2640", "1", "₹600", "₹600"],
              ["PCA9685 16-ch I2C driver", "1", "₹220", "₹220"],
              ["MPU6050 6-axis IMU", "1", "₹110", "₹110"],
              ["0.96\" OLED SSD1306", "1", "₹200", "₹200"],
              ["MG996R TowerPro ×4", "4", "₹254", "₹1,016"],
              ["MG90S Metal Gear ×12", "12", "₹90", "₹1,080"],
              ["MB102 dual power module", "1", "₹70", "₹70"],
              ["18650 Li-ion cells ×2", "2", "₹110", "₹220"],
              ["TP4056 Type-C charger", "1", "₹30", "₹30"],
              ["IR obstacle sensor ×2", "2", "₹35", "₹70"],
              ["HC-SR04 ultrasonic", "1", "₹50", "₹50"],
              ["Jumper wires (2 packs)", "2", "₹50", "₹100"],
              ["Header pins (3 strips)", "3", "₹10", "₹30"],
              ["Dotted PCB ×3", "3", "₹15", "₹45"],
              ["Resistors pack", "1", "₹30", "₹30"],
              ["Electrical tape", "1", "₹15", "₹15"],
              ["Foam tape", "1", "₹40", "₹40"],
            ],
          },
          note: "Total hardware cost: ₹4,626. Phase 1 minimum spend: ₹1,400 — ESP32-CAM + PCA9685 + OLED + 2 MG90S + wires.",
        },
        {
          heading: "Tools (One-time Investment)",
          table: {
            headers: ["Tool", "Price"],
            rows: [
              ["Soldron 25W soldering iron", "₹250–280"],
              ["XL830L digital multimeter", "₹180–220"],
              ["Solder wire 50g + paste", "₹100"],
              ["Hot glue gun 20W + 5 sticks", "₹120"],
              ["Wire cutter + stripper", "₹50"],
              ["ESD-safe tweezers set", "₹45"],
              ["Desoldering wick + stand", "₹70"],
              ["Heavy utility cutter", "₹35"],
            ],
          },
          note: "Tools total: ~₹870",
        },
      ],
      links: [
        { label: "GitHub Build Log", href: "https://github.com/siddharthkumarrai/16-Axis-Humanoid-Robot-WiFi-Ambient-Lamp-Build-Log" },
        { label: "SiddJarviz Portfolio", href: "https://siddjarviz.netlify.app/" },
      ],
    },
  },
  {
    id: "vieon-software-brain",
    title: "VIEON Humanoid Robot — Software Brain",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "New",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785859969/Screenshot_2026-08-04_214145_n3kurq.png",
    tag: "Featured",
    stack: ["ESP32", "Python", "FastAPI", "WebSocket", "OpenCV", "Gemini API", "FreeRTOS"],
    tldr:
      "The AI software stack powering the VIEON humanoid — offline voice, real-time gait control, camera-based navigation, and Gemini-powered reasoning.",
    bullets: [
      "Built the real-time control layer on ESP32 with FreeRTOS — dual-core split between network (Core 0) and motor control (Core 1).",
      "Designed a Python FastAPI server for WebSocket-based motor commands, OpenCV face tracking, and Gemini API integration.",
      "Implemented offline voice control via VC-02 module and gyro-based PID balance loop using MPU6050 feedback."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/siddharthkumarrai" },
    ],
    slug: "vieon-software-brain",
    detail: {
      subtitle: "AI software stack for real-time humanoid control",
      category: "ROBOTICS / AI",
      status: "Ongoing",
      heroVideo: "https://res.cloudinary.com/dombv2xju/video/upload/v1785859164/vieon1_hq1azs.mp4",
      stats: [
        { label: "MCU", value: "ESP32-CAM" },
        { label: "Framework", value: "FreeRTOS" },
        { label: "Servos", value: "16 ch" },
        { label: "Latency", value: "<50ms" },
      ],
      overview: "The software brain handles everything from low-level servo PWM control to high-level AI reasoning. The ESP32 runs FreeRTOS with a dual-core task split — Core 0 handles Wi-Fi, WebSocket, and camera streaming while Core 1 manages the PCA9685 servo driver, MPU6050 PID loop, and sensor fusion. A laptop-based Python server provides Gemini API access, OpenCV vision, and a Next.js dashboard for manual control.",
      sections: [
        {
          heading: "Architecture Layers",
          list: [
            "Layer 1 (On-device): ESP32 firmware — servo control, sensor reading, cliff detection, voice command parsing",
            "Layer 2 (Local network): Python FastAPI server — WebSocket motor commands, OpenCV face/object detection, Gemini API proxy",
            "Layer 3 (Cloud optional): Gemini API free tier — natural language reasoning, object recognition, task planning",
          ],
        },
        {
          heading: "ESP32 Firmware Tasks",
          table: {
            headers: ["Task", "Core", "Priority", "Function"],
            rows: [
              ["MotorCtrl", "Core 1", "High", "PCA9685 servo sequencing, gait execution"],
              ["SensorFusion", "Core 1", "Medium", "MPU6050 PID balance, cliff detection"],
              ["VoiceHandler", "Core 0", "Medium", "VC-02 UART command parsing"],
              ["WiFiManager", "Core 0", "Low", "WebSocket server, camera streaming"],
              ["OLEDFace", "Core 1", "Low", "Expression updates on SSD1306"],
            ],
          },
        },
        {
          heading: "Python Server Stack",
          list: [
            "FastAPI — async HTTP + WebSocket server",
            "OpenCV — face detection, ArUco marker tracking, object recognition",
            "Gemini API — natural language task planning, vision queries",
            "uvicorn — ASGI server for production",
            "Next.js dashboard — live servo sliders, camera feed, gait sequence editor",
          ],
        },
        {
          heading: "Gait Control Algorithm",
          content: "The 4-phase bipedal gait cycle coordinates all 8 leg servos (CH8–CH15) with timed sequences. MPU6050 provides real-time tilt feedback for the PID balance loop that corrects hip roll during each phase.",
          list: [
            "Phase 1: Shift weight left — Hip Roll LEFT (CH8) tilts pelvis",
            "Phase 2: Lift right leg — Hip Pitch RIGHT (CH13) + Knee RIGHT (CH14) raise foot",
            "Phase 3: Swing forward — Hip Pitch RIGHT (CH13) advances leg",
            "Phase 4: Place foot, shift right — Hip Roll RIGHT (CH9) rebalances, cycle repeats",
          ],
        },
        {
          heading: "Voice Command Map",
          table: {
            headers: ["Command", "VC-02 Byte", "Action"],
            rows: [
              ["Jarvis stand", "0x01", "All servos → 90° (neutral stance)"],
              ["Jarvis walk", "0x02", "Start 4-phase gait loop"],
              ["Jarvis dance", "0x03", "Play pre-programmed dance sequence"],
              ["Jarvis grab", "0x04", "Close grippers (CH4, CH7 → 45°)"],
              ["Jarvis stop", "0x05", "Freeze all servos at current position"],
              ["Jarvis home", "0x06", "Return to neutral + sit down sequence"],
            ],
          },
        },
        {
          heading: "PID Balance Constants",
          content: "Tuned empirically with MPU6050 tilt feedback at 100Hz. The PID loop adjusts Hip Roll (CH8/CH9) to maintain upright posture during walking.",
          table: {
            headers: ["Parameter", "Value", "Description"],
            rows: [
              ["Kp", "2.5", "Proportional — reacts to current tilt error"],
              ["Ki", "0.01", "Integral — corrects sustained drift"],
              ["Kd", "1.2", "Damping — smooths oscillation"],
              ["Setpoint", "0°", "Target tilt angle (perfectly upright)"],
              ["Sample rate", "100Hz", "MPU6050 read + PID compute frequency"],
            ],
          },
        },
        {
          heading: "WebSocket Protocol",
          content: "Real-time bidirectional communication between ESP32 and laptop server. JSON messages for motor commands, sensor telemetry, and AI responses.",
          code: `// Client → ESP32 (motor command)
{"type":"servo","ch":10,"angle":45}
{"type":"gait","sequence":"walk_forward","steps":5}
{"type":"pose","name":"wave","duration":2000}

// ESP32 → Client (telemetry)
{"type":"imu","roll":1.2,"pitch":-0.5,"yaw":0.0}
{"type":"cliff","left":true,"right":false}
{"type":"voice","cmd":"0x02","label":"walk"}`,
        },
        {
          heading: "Camera Pipeline",
          list: "ESP32-CAM streams MJPEG over HTTP (320×240 @ 10fps) → Python server captures frames → OpenCV processes for face detection / ArUco markers → Results sent back via WebSocket → ESP32 executes navigation commands",
        },
      ],
      links: [
        { label: "GitHub", href: "https://github.com/siddharthkumarrai" },
      ],
    },
  },
  {
    id: "skillslms",
    title: "SkillsLMS — Agentic AI Learning Management System",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Introducing",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785866199/Screenshot_2026-08-04_232601_rvrt8f.png",
    tag: "Featured",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "LangGraph", "RAG", "MongoDB", "Razorpay"],
    tldr:
      "A full-stack learning management system with a multi-agent GenAI tutor and a clean product shell that scales across student and instructor workflows.",
    bullets: [
      "Built the LMS front end around reusable Next.js components so new sections, dashboards, and product pages can be added without changing the overall shell.",
      "Designed the AI tutor service in Python and FastAPI with LangGraph orchestration and RAG-style retrieval so the assistant can evolve independently from the main app.",
      "Integrated auth, payments, and media handling in a way that keeps the product maintainable as features expand."
    ],
    links: [
      { label: "Live Demo", href: "https://skillslms.vercel.app/" },
      { label: "GitHub", href: "https://github.com/siddharthkumarrai/LMS" }
    ],
    slug: "skillslms",
    detail: {
      subtitle: "Full-stack agentic LMS with AI-powered tutoring",
      category: "WEB DEVELOPMENT",
      status: "Completed",
      stats: [
        { label: "Framework", value: "Next.js" },
        { label: "AI Engine", value: "LangGraph + RAG" },
        { label: "Database", value: "MongoDB" },
        { label: "Payments", value: "Razorpay" },
      ],
      overview: "SkillsLMS combines a traditional learning management system with an AI tutoring layer. The LangGraph agent fetches relevant course content via RAG, generates personalized explanations, and adapts to each learner's progress.",
      sections: [
        {
          heading: "How It Works",
          content: "Students can ask questions in natural language and receive contextual answers pulled from their course materials. The AI tutor uses RAG to retrieve relevant documents and LangGraph to orchestrate multi-step reasoning.",
        },
        {
          heading: "Tech Stack",
          list: [
            "Next.js — frontend and API routes",
            "TypeScript — type safety across the stack",
            "Python + FastAPI — AI tutor service",
            "LangGraph — agent orchestration",
            "RAG pipeline — document retrieval",
            "MongoDB — data storage",
            "Razorpay — payment integration",
            "Vercel — deployment",
          ],
        },
      ],
      links: [
        { label: "Live Demo", href: "https://skillslms.vercel.app/" },
        { label: "GitHub", href: "https://github.com/siddharthkumarrai/LMS" },
      ],
    },
  },
  {
    id: "lumenskart",
    title: "Lumenskart — Commerce Storefront with CMS",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Introducing",
    image: "https://res.cloudinary.com/dombv2xju/image/upload/v1785866439/Screenshot_2026-08-04_233009_blxwd2.png",
    tag: "Featured",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity"],
    tldr:
      "A polished ecommerce storefront with product browsing, content-managed pages, and a checkout-ready frontend designed to feel production-native.",
    bullets: [
      "Built the storefront in Next.js with reusable UI sections so catalog, landing, and content pages stay consistent as products grow.",
      "Modeled the content flow around CMS-driven updates so merchandised pages can be changed without redeploying the core app."
    ],
    links: [
      { label: "Live Demo", href: "https://lumenskart.vercel.app/" },
      { label: "GitHub", href: "https://github.com/siddharthkumarrai" }
    ],
    slug: "lumenskart",
    detail: {
      subtitle: "Production-style Next.js ecommerce storefront with admin CMS",
      category: "WEB DEVELOPMENT",
      status: "Completed",
      stats: [
        { label: "Framework", value: "Next.js 14" },
        { label: "Payments", value: "Stripe" },
        { label: "CMS", value: "Sanity" },
        { label: "Styling", value: "Tailwind CSS" },
      ],
      overview: "A fully functional ecommerce storefront with product listing, cart, checkout, and order management. The admin CMS allows managing products, categories, and orders without code changes.",
      sections: [
        {
          heading: "How It Works",
          content: "Server-side rendering ensures fast page loads and SEO optimization. The CMS-driven content flow means merchandised pages can be changed without redeploying the core app.",
        },
        {
          heading: "Tech Stack",
          list: [
            "Next.js 14 with App Router",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL with Prisma ORM",
            "NextAuth.js for authentication",
            "Stripe for payments",
            "Cloudinary for image hosting",
          ],
        },
      ],
      links: [
        { label: "Live Demo", href: "https://lumenskart.vercel.app/" },
        { label: "GitHub", href: "https://github.com/siddharthkumarrai" },
      ],
    },
  },
  {
    id: "weather-app",
    title: "Weather Web Application",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Featured",
    image: "/projects/demo-project.svg",
    tag: "Website",
    stack: ["React", "Vite", "JavaScript", "Weather API"],
    tldr:
      "A lightweight weather dashboard for checking current conditions and forecasts with a clean, fast interface optimized for quick lookups.",
    bullets: [
      "Kept the interface intentionally compact so the core weather state is visible immediately on load.",
      "Used a simple API-driven render path that is easy to extend with location search, alerts, or saved cities."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/siddharthkumarrai/weather_web_application" }
    ],
    slug: "weather-app",
  },
  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    publisher: "Siddharth Kumar Rai",
    publisherHref: "https://github.com/siddharthkumarrai",
    eyebrow: "Featured",
    image: "/projects/demo-project.svg",
    tag: "Framework",
    stack: ["JavaScript", "UI Design", "Responsive Layout"],
    tldr:
      "A booking-style clone focused on layout fidelity, card density, and reservation-flow practice for production-like frontend work.",
    bullets: [
      "Recreated the visual structure of a rental marketplace with a strong emphasis on spacing and component consistency.",
      "Kept the experience responsive so the browsing flow remains usable across mobile and desktop screens."
    ],
    links: [
      { label: "GitHub", href: "https://github.com/siddharthkumarrai/siddharth_Airbnb_Clone" }
    ],
    slug: "airbnb-clone",
  },
];
