"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Smartphone,
  Globe,
  CheckCircle2,
  Layers,
  Sparkles,
  Play,
  Apple,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { projects } from "@/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = params as any;
  const projectId = resolvedParams.id;
  const project = projects.find(p => p.id === projectId);

  const router = useRouter();
  const [downloading, setDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(false);
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050510] flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-black text-white mb-4">404</p>
          <h1 className="text-2xl font-bold text-white/60 mb-8">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push("/?section=project")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const handleAPKDownload = async () => {
    setDownloading(true);
    try {
      if (!project.apkUrl) throw new Error('APK URL not found');
      const response = await fetch(project.apkUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${project.title}.apk`);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
      setDownloadDone(true);
      setTimeout(() => setDownloadDone(false), 3000);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download APK. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const accent = project.accentColor || "#6366f1";
  const accentSecondary = project.accentColorSecondary || "#818cf8";

  return (
    <div
      className="min-h-screen bg-[#050510] text-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}
    >
      {/* Sticky Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(5,5,16,0.75)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <motion.button
          onClick={() => router.back()}
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white/70 hover:text-white transition-colors text-sm font-medium"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>

        <div className="flex items-center gap-2">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: `${accent}22`,
              color: accent,
              border: `1px solid ${accent}44`,
            }}
          >
            {project.category}
          </span>
        </div>

        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{ background: accent, color: "#fff" }}
          >
            <ExternalLink size={14} />
            Live Demo
          </motion.a>
        )}
      </motion.nav>

      {/* Hero */}
      <div
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-end overflow-hidden"
      >
        {/* Background image with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          {/* Deep dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,5,16,0.3) 0%, rgba(5,5,16,0.6) 50%, rgba(5,5,16,1) 100%)",
            }}
          />
          {/* Color tint */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${accent}22 0%, transparent 60%)`,
              mixBlendMode: "screen",
            }}
          />
        </motion.div>

        {/* Decorative orb */}
        <div
          className="absolute top-24 right-12 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-30"
          style={{
            background: `radial-gradient(circle, ${accent}, transparent)`,
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full px-6 md:px-16 pb-20 max-w-7xl mx-auto"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {project.type === "mobile" && (
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: `${accent}22`,
                    color: accent,
                    border: `1px solid ${accent}44`,
                  }}
                >
                  <Smartphone size={12} />
                  Mobile App
                </div>
                {project.platforms?.map((p: string) => (
                  <span
                    key={p}
                    className="px-2 py-1 rounded-full text-xs text-white/50"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
              style={{ textShadow: "0 4px 60px rgba(0,0,0,0.5)" }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10"
            >
              {project.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm shadow-2xl"
                  style={{
                    background: accent,
                    boxShadow: `0 8px 30px ${accent}50`,
                  }}
                >
                  <Globe size={16} />
                  View Live Project
                </motion.a>
              )}
              {project.type === "mobile" && project.apkUrl && (
                <motion.button
                  onClick={handleAPKDownload}
                  disabled={downloading}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm border border-white/20 transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {downloadDone ? (
                      <motion.span
                        key="done"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 size={16} className="text-green-400" />{" "}
                        Downloaded!
                      </motion.span>
                    ) : downloading ? (
                      <motion.span
                        key="loading"
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                          }}
                        >
                          <Download size={16} />
                        </motion.div>
                        Downloading...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        className="flex items-center gap-2"
                      >
                        <Download size={16} /> Download APK
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/30"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-24 space-y-24">
        {/* Ambient background blobs */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
          <div
            className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
            style={{ background: accent }}
          />
          <div
            className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10"
            style={{ background: accentSecondary }}
          />
        </div>

        {/* Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-5 gap-12 items-start"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-[2px] rounded-full"
                style={{ background: accent }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: accent }}
              >
                Overview
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-snug">
              About the Project
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              {project.longDescription}
            </p>
            <p className="text-white/40 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-4"
          >
            {/* Stats */}
            <div
              className="rounded-3xl p-6 space-y-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="flex items-center gap-3 pb-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}22` }}
                >
                  <Layers size={18} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">
                    Category
                  </p>
                  <p className="font-bold text-white">{project.category}</p>
                </div>
              </div>

              <div
                className="flex items-center gap-3 pb-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}22` }}
                >
                  {project.type === "mobile" ? (
                    <Smartphone size={18} style={{ color: accent }} />
                  ) : (
                    <Globe size={18} style={{ color: accent }} />
                  )}
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">
                    Platform
                  </p>
                  <p className="font-bold text-white capitalize">
                    {project.type === "mobile"
                      ? project.platforms?.join(", ") || "Mobile"
                      : "Web"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}22` }}
                >
                  <Sparkles size={18} style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">
                    Stack Size
                  </p>
                  <p className="font-bold text-white">
                    {project.techStack.length} Technologies
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features */}
        {project.features && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-12"
            >
              <div
                className="w-8 h-[2px] rounded-full"
                style={{ background: accent }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: accent }}
              >
                Features
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-black text-white mb-12"
            >
              Key Capabilities
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative rounded-2xl p-5 transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${accent}0a, transparent)`,
                    }}
                  />
                  <div className="relative flex items-start gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.05, type: "spring" }}
                      viewport={{ once: true }}
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${accent}22` }}
                    >
                      <CheckCircle2 size={16} style={{ color: accent }} />
                    </motion.div>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors font-medium leading-snug">
                      {feature}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="w-8 h-[2px] rounded-full"
              style={{ background: accent }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: accent }}
            >
              Stack
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-black text-white mb-10"
          >
            Technologies Used
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {project.techStack.map((tech: string, index: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-xl text-sm font-semibold cursor-default transition-all"
                style={{
                  background: `${accent}15`,
                  border: `1px solid ${accent}30`,
                  color: accentSecondary,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile Download Section - only for mobile type */}
        {project.type === "mobile" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="w-8 h-[2px] rounded-full"
                style={{ background: accent }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: accent }}
              >
                Download
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-black text-white mb-10"
            >
              Get the App
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Decorative gradient streak */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                }}
              />
              <div
                className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[100px] opacity-20 pointer-events-none"
                style={{ background: accent }}
              />

              <div className="relative p-8 md:p-12 space-y-8">
                {/* Platform Tabs */}
                <div className="flex gap-2 mb-8">
                  <motion.button
                    onClick={() => setPlatform('android')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                    style={{
                      background: platform === 'android' ? `${accent}` : 'rgba(255,255,255,0.08)',
                      color: platform === 'android' ? '#fff' : 'rgba(255,255,255,0.6)',
                      border: platform === 'android' ? `1px solid ${accent}` : '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Smartphone size={16} />
                      Android
                    </div>
                  </motion.button>

                  <motion.button
                    onClick={() => setPlatform('ios')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                    style={{
                      background: platform === 'ios' ? `${accent}` : 'rgba(255,255,255,0.08)',
                      color: platform === 'ios' ? '#fff' : 'rgba(255,255,255,0.6)',
                      border: platform === 'ios' ? `1px solid ${accent}` : '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Apple size={16} />
                      iOS
                    </div>
                  </motion.button>
                </div>

                {/* Android Downloads */}
                <AnimatePresence mode="wait">
                  {platform === 'android' && (
                    <motion.div
                      key="android"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      {/* APK Download */}
                      {project.apkUrl ? (
                        <motion.button
                          onClick={handleAPKDownload}
                          disabled={downloading}
                          whileHover={{ scale: 1.03, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          className="relative group flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-300 disabled:opacity-50"
                          style={{
                            background: `${accent}18`,
                            border: `1px solid ${accent}40`,
                          }}
                        >
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ background: `${accent}12` }}
                          />
                          <div
                            className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                            style={{
                              background: accent,
                              boxShadow: `0 8px 30px ${accent}50`,
                            }}
                          >
                            <AnimatePresence mode="wait">
                              {downloadDone ? (
                                <motion.div
                                  key="done"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  <CheckCircle2 size={28} className="text-white" />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="dl"
                                  animate={downloading ? { rotate: 360 } : {}}
                                  transition={
                                    downloading
                                      ? {
                                          repeat: Infinity,
                                          duration: 1,
                                          ease: "linear",
                                        }
                                      : {}
                                  }
                                >
                                  <Download size={28} className="text-white" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className="relative text-center">
                            <p className="font-black text-white text-lg">
                              {downloadDone
                                ? "Downloaded!"
                                : downloading
                                  ? "Downloading..."
                                  : "Download APK"}
                            </p>
                            <p className="text-white/40 text-sm mt-1">
                              Direct Install
                            </p>
                          </div>
                          {project.apkSize && (
                            <p className="text-white/40 text-sm mt-1">
                              {project.apkSize} MB
                            </p>
                          )}
                        </motion.button>
                      ) : (
                        <div
                          className="flex flex-col items-center gap-4 p-8 rounded-2xl opacity-60 cursor-not-allowed"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-700">
                            <Download size={28} className="text-gray-400" />
                          </div>
                          <div className="text-center">
                            <p className="font-black text-white text-lg">APK</p>
                            <p className="text-white/40 text-sm mt-1">
                              Coming Soon
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Play Store */}
                      {project.playStoreLink ? (
                        <motion.a
                          href={project.playStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          className="group flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-300"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                            style={{
                              background: "#34a853",
                              boxShadow: "0 8px 30px #34a85350",
                            }}
                          >
                            <Play size={28} className="text-white" />
                          </div>
                          <div className="text-center">
                            <p className="font-black text-white text-lg">
                              Google Play
                            </p>
                            <p className="text-white/40 text-sm mt-1">
                              Store Link
                            </p>
                          </div>
                        </motion.a>
                      ) : (
                        <div
                          className="flex flex-col items-center gap-4 p-8 rounded-2xl opacity-60 cursor-not-allowed"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#34a853]/20">
                            <Play size={28} className="text-[#34a853]/50" />
                          </div>
                          <div className="text-center">
                            <p className="font-black text-white text-lg">
                              Google Play
                            </p>
                            <p className="text-white/40 text-sm mt-1">
                              Coming Soon
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* iOS Downloads */}
                <AnimatePresence mode="wait">
                  {platform === 'ios' && (
                    <motion.div
                      key="ios"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center"
                    >
                      {project.appStoreLink ? (
                        <motion.a
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03, y: -3 }}
                          whileTap={{ scale: 0.97 }}
                          className="group flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-300 max-w-md w-full"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl"
                            style={{
                              background: "#000",
                              boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                              border: "1px solid rgba(255,255,255,0.2)",
                            }}
                          >
                            <Apple size={28} className="text-white" />
                          </div>
                          <div className="text-center">
                            <p className="font-black text-white text-lg">
                              Apple App Store
                            </p>
                            <p className="text-white/40 text-sm mt-1">
                              Download for iPhone & iPad
                            </p>
                          </div>
                        </motion.a>
                      ) : (
                        <div
                          className="flex flex-col items-center gap-4 p-8 rounded-2xl opacity-60 cursor-not-allowed max-w-md w-full"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-black/20 border border-white/10">
                            <Apple size={28} className="text-gray-400" />
                          </div>
                          <div className="text-center">
                            <p className="font-black text-white text-lg">
                              App Store
                            </p>
                            <p className="text-white/40 text-sm mt-1">
                              Coming Soon
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="px-8 md:px-12 pb-8 text-white/30 text-sm">
                  <p>
                    ⚠️ For Android APK: enable &quot;Install from unknown
                    sources&quot; in your device settings before installing.
                  </p>
                </div>
                </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center py-12"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-white/40 text-lg">Want to see more work?</p>
            <motion.button
              onClick={() => router.push("/?section=project")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              ← All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

