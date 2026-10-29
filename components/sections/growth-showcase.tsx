
"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Code2,
  HeartHandshake,
  Megaphone,
  MousePointerClick,
  Search,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "More visibility",
    description: "Reach the right people.",
  },
  {
    icon: HeartHandshake,
    title: "Better engagement",
    description: "Build real connections.",
  },
  {
    icon: BarChart3,
    title: "Sustainable growth",
    description: "Turn attention into revenue.",
  },
];

const channels = [
  { icon: Search, label: "Search", color: "text-emerald-500" },
  { icon: Megaphone, label: "Campaigns", color: "text-orange-500" },
  { icon: Share2, label: "Social", color: "text-blue-500" },
  { icon: Users, label: "Audience", color: "text-violet-500" },
];

function FloatingIcon({
  children,
  className,
  delay = 0,
  reduceMotion = false,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
  reduceMotion?: boolean;
}) {
  return (
    <motion.div
      className={`absolute z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-card/90 text-foreground shadow-xl backdrop-blur-xl sm:h-14 sm:w-14 ${className}`}
      animate={
        reduceMotion
          ? undefined
          : { y: [0, -10, 0], rotate: [0, 3, 0] }
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function GrowthShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.7],
    reduceMotion ? [0, 0] : [19, 0],
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.7],
    reduceMotion ? [0, 0] : [-7, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.7],
    reduceMotion ? [1, 1] : [0.86, 1],
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.7],
    reduceMotion ? [0, 0] : [65, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="less-management"
      aria-labelledby="growth-heading"
      className="relative isolate min-h-[175vh] overflow-clip bg-background text-foreground"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12rem] top-24 h-96 w-96 rounded-full bg-emerald-500/[0.08] blur-[110px]" />
        <div className="absolute right-[-10rem] top-[35%] h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.06] blur-[120px]" />
      </div>

      <div className="sticky top-0 flex min-h-screen items-center py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-12">
          {/* Copy and benefits */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/65 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
              Less management. More growth.
            </div>

            <h2
              id="growth-heading"
              className="max-w-2xl text-4xl font-bold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Less management.
              <span className="mt-1 block bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500 bg-clip-text pb-1 text-transparent">
                More growth.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-foreground/65 sm:text-lg sm:leading-8">
              Echospread takes the stress of digital marketing and management
              off your shoulders, so you can focus on what matters.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="/sign-in"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition hover:opacity-85"
              >
                Let's grow together
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <span className="text-xs text-foreground/45">
                Strategy to execution.
              </span>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 border-t border-border pt-7 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 12 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: reduceMotion ? 0 : index * 0.12,
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-foreground/55">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Scroll-responsive dashboard */}
          <div
            className="relative mx-auto w-full max-w-[680px]"
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                scale,
                y: translateY,
                transformPerspective: 1200,
                transformOrigin: "center center",
              }}
              className="relative"
            >
              {/* Ambient glow */}
              <div className="absolute inset-[12%] rounded-[3rem] bg-emerald-500/15 blur-[65px]" />

              {/* Floating channel icons */}
              <FloatingIcon
                className="-left-2 top-[13%] sm:-left-5"
                delay={0}
                reduceMotion={!!reduceMotion}
              >
                <Code2 className="h-6 w-6 text-emerald-500" />
              </FloatingIcon>

              <FloatingIcon
                className="right-[20%] top-[-5%]"
                delay={0.6}
                reduceMotion={!!reduceMotion}
              >
                <BarChart3 className="h-6 w-6 text-emerald-500" />
              </FloatingIcon>

              <FloatingIcon
                className="-right-1 top-[33%] sm:-right-5"
                delay={1.1}
                reduceMotion={!!reduceMotion}
              >
                <Megaphone className="h-6 w-6 text-blue-500" />
              </FloatingIcon>

              <FloatingIcon
                className="bottom-[15%] -left-1 sm:-left-6"
                delay={1.5}
                reduceMotion={!!reduceMotion}
              >
                <MousePointerClick className="h-6 w-6 text-orange-500" />
              </FloatingIcon>

              {/* Main glass dashboard */}
              <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/85 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.09] via-transparent to-blue-500/[0.06]" />

                <div className="relative">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between border-b border-border/70 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
                        <Share2 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-tight">
                          Echospread
                        </p>
                        <p className="mt-0.5 text-[10px] text-foreground/50">
                          Growth workspace
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      All systems connected
                    </span>
                  </div>

                  {/* Main dashboard content */}
                  <div className="mt-5 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="flex min-h-[190px] flex-col justify-between rounded-2xl border border-border/70 bg-background/75 p-5 sm:min-h-[235px]">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/45">
                          Your next big move
                        </p>
                        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                          We handle the
                          <span className="block text-emerald-600 dark:text-emerald-400">
                            moving parts.
                          </span>
                        </h3>
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-xs text-foreground/55">
                        <Sparkles className="h-4 w-4 text-emerald-500" />
                        Strategy, content & execution
                      </div>
                    </div>

                    {/* Animated chart */}
                    <div className="rounded-2xl border border-border/70 bg-background/75 p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-foreground/55">
                          Audience reach
                        </p>
                        <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                      </div>

                      <p className="mt-3 text-3xl font-bold tracking-tight">
                        <span className="text-emerald-600 dark:text-emerald-400">
                          Growing
                        </span>
                      </p>
                      <p className="mt-1 text-[10px] text-foreground/45">
                        Visibility that compounds
                      </p>

                      <div className="mt-6 h-[94px] overflow-hidden">
                        <svg
                          viewBox="0 0 240 90"
                          className="h-full w-full overflow-visible"
                          role="img"
                          aria-label="Illustrative upward growth curve"
                        >
                          <defs>
                            <linearGradient
                              id="growthFill"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#22c55e"
                                stopOpacity="0.25"
                              />
                              <stop
                                offset="100%"
                                stopColor="#22c55e"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>

                          {[20, 45, 70].map((y) => (
                            <line
                              key={y}
                              x1="0"
                              y1={y}
                              x2="240"
                              y2={y}
                              stroke="currentColor"
                              strokeOpacity="0.09"
                              strokeDasharray="3 5"
                            />
                          ))}

                          <motion.path
                            d="M0 76 C22 70 25 58 48 63 S76 42 96 48 S123 32 143 39 S168 22 188 29 S218 11 240 5 L240 90 L0 90 Z"
                            fill="url(#growthFill)"
                            initial={reduceMotion ? false : { opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                          />

                          <motion.path
                            d="M0 76 C22 70 25 58 48 63 S76 42 96 48 S123 32 143 39 S168 22 188 29 S218 11 240 5"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            pathLength={1}
                            initial={
                              reduceMotion ? false : { pathLength: 0 }
                            }
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.6,
                              ease: "easeOut",
                            }}
                          />

                          <circle cx="240" cy="5" r="4" fill="#22c55e" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-4 grid grid-cols-3 gap-2.5">
                    {[
                      {
                        label: "Content",
                        value: "Planned",
                        icon: Sparkles,
                      },
                      {
                        label: "Engagement",
                        value: "Connected",
                        icon: HeartHandshake,
                      },
                      {
                        label: "Campaigns",
                        value: "Optimised",
                        icon: Megaphone,
                      },
                    ].map((metric, index) => {
                      const Icon = metric.icon;

                      return (
                        <motion.div
                          key={metric.label}
                          initial={
                            reduceMotion ? false : { opacity: 0, y: 12 }
                          }
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.45,
                            delay: reduceMotion ? 0 : 0.15 * index,
                          }}
                          className="min-w-0 rounded-xl border border-border/70 bg-background/65 p-3 sm:p-4"
                        >
                          <Icon className="h-4 w-4 text-emerald-500" />
                          <p className="mt-3 truncate text-xs font-semibold sm:text-sm">
                            {metric.value}
                          </p>
                          <p className="mt-1 truncate text-[9px] text-foreground/50 sm:text-[10px]">
                            {metric.label}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Workflow */}
                  <div className="mt-4 rounded-xl border border-border/70 bg-background/60 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-foreground/50">
                        Your growth ecosystem
                      </p>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                        Connected
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {channels.map((channel, index) => {
                        const Icon = channel.icon;

                        return (
                          <motion.div
                            key={channel.label}
                            initial={
                              reduceMotion ? false : { opacity: 0, y: 8 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: reduceMotion ? 0 : 0.12 * index,
                            }}
                            className="flex flex-col items-center gap-2 text-center"
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card">
                              <Icon className={`h-4 w-4 ${channel.color}`} />
                            </div>
                            <span className="text-[9px] text-foreground/55 sm:text-[10px]">
                              {channel.label}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                animate={
                  reduceMotion ? undefined : { y: [0, -5, 0] }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 right-3 z-30 flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 shadow-2xl backdrop-blur-xl sm:right-7 sm:p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <ArrowDownRight className="h-5 w-5 rotate-[-45deg]" />
                </div>
                <div>
                  <p className="text-xs font-semibold">
                    Less on your plate.
                  </p>
                  <p className="mt-1 text-[10px] text-foreground/50">
                    More room for what matters.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
