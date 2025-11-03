import { motion } from "framer-motion";

// Animation 1: SEO Rankings - Steigende Positionen
export function SeoRankingsAnimation() {
  const rankings = [
    { position: 1, url: "ihre-website.de", color: "#fa5219" },
    { position: 2, url: "konkurrent-a.de", color: "#94a3b8" },
    { position: 3, url: "konkurrent-b.de", color: "#cbd5e1" },
  ];

  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
      {/* Search Icon */}
      <motion.div
        className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-5 h-5 text-[#19243b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </motion.div>

      <div className="w-full max-w-sm space-y-3">
        {rankings.map((rank, index) => (
          <motion.div
            key={rank.position}
            className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileHover={{ scale: 1.05, x: 10 }}
          >
            <motion.div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: rank.color }}
              animate={index === 0 ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {rank.position}
            </motion.div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-800">{rank.url}</div>
              <div className="text-xs text-slate-500">Google Suchergebnis</div>
            </div>
            {index === 0 && (
              <motion.div
                className="text-[#fa5219]"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#fa5219] rounded-full opacity-40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animation 2: Technical SEO - Server Performance
export function TechnicalSeoAnimation() {
  const metrics = [
    { label: "Speed", value: 95, color: "#10b981" },
    { label: "Mobile", value: 88, color: "#fa5219" },
    { label: "Security", value: 100, color: "#19243b" },
  ];

  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
      {/* Server Icon */}
      <motion.div
        className="absolute top-6 right-6"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-12 h-12 bg-[#19243b] rounded-lg flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </div>
      </motion.div>

      <div className="w-full max-w-xs space-y-4">
        {metrics.map((metric, index) => (
          <div key={metric.label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-700">{metric.label}</span>
              <motion.span
                className="text-sm font-bold"
                style={{ color: metric.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 0.5 }}
              >
                {metric.value}%
              </motion.span>
            </div>
            <div className="h-3 bg-white/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: metric.color }}
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1.5, delay: index * 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}

        {/* Success Checkmark */}
        <motion.div
          className="mt-6 flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <span className="text-sm font-medium text-slate-700">Optimiert</span>
        </motion.div>
      </div>
    </div>
  );
}

// Animation 3: Keyword Research
export function KeywordResearchAnimation() {
  const keywords = [
    { text: "webdesign alzey", volume: 880, difficulty: "mittel" },
    { text: "seo optimierung", volume: 1200, difficulty: "hoch" },
    { text: "website erstellen", volume: 650, difficulty: "niedrig" },
  ];

  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
      {/* Search Bar */}
      <div className="w-full max-w-sm">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-4 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <motion.div
              className="text-slate-600 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Keywords analysieren...
            </motion.div>
          </div>
        </motion.div>

        {/* Keyword Results */}
        <div className="space-y-3">
          {keywords.map((keyword, index) => (
            <motion.div
              key={keyword.text}
              className="bg-white rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
              whileHover={{ scale: 1.03, x: 5 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-800">{keyword.text}</span>
                <motion.div
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    keyword.difficulty === "niedrig"
                      ? "bg-green-100 text-green-700"
                      : keyword.difficulty === "mittel"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-red-100 text-red-700"
                  }`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {keyword.difficulty}
                </motion.div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#19243b]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                <span className="text-xs text-slate-500">{keyword.volume} Suchanfragen/Monat</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Animation 4: Content Optimization
export function ContentOptimizationAnimation() {
  const contentElements = [
    { icon: "H1", label: "Überschrift", status: true },
    { icon: "K", label: "Keywords", status: true },
    { icon: "IMG", label: "Bilder", status: true },
    { icon: "L", label: "Links", status: false },
  ];

  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
      {/* Document Shape */}
      <motion.div
        className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Document Header */}
        <div className="mb-6">
          <motion.div
            className="h-3 bg-gradient-to-r from-[#fa5219] to-[#19243b] rounded-full mb-3"
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="h-2 bg-slate-200 rounded-full w-3/4 mb-2" />
          <div className="h-2 bg-slate-200 rounded-full w-1/2" />
        </div>

        {/* Content Elements Grid */}
        <div className="grid grid-cols-2 gap-3">
          {contentElements.map((element, index) => (
            <motion.div
              key={element.label}
              className="bg-slate-50 rounded-xl p-4 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#fa5219] to-[#ff6b35] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  {element.icon}
                </div>
                {element.status && (
                  <motion.div
                    className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="text-xs font-medium text-slate-600">{element.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Optimization Score */}
        <motion.div
          className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">SEO Score</span>
            <motion.span
              className="text-2xl font-bold text-green-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            >
              92%
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating check marks */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 text-green-500"
          style={{
            right: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// Animation 5: Local SEO - Map with Location Pins
export function LocalSeoAnimation() {
  const locations = [
    { x: 40, y: 30, name: "Alzey" },
    { x: 60, y: 50, name: "Mainz" },
    { x: 25, y: 60, name: "Worms" },
  ];

  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
      {/* Map Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#19243b" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Map Container */}
      <div className="relative w-full h-full">
        {/* Location Pins */}
        {locations.map((location, index) => (
          <motion.div
            key={location.name}
            className="absolute"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              transform: 'translate(-50%, -100%)',
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            {/* Pin */}
            <motion.div
              className="relative"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill={index === 0 ? "#fa5219" : "#19243b"}
                  stroke="white"
                  strokeWidth="2"
                />
                <circle cx="12" cy="9" r="2.5" fill="white" />
              </svg>
              
              {/* Location Label */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold"
                style={{ color: index === 0 ? "#fa5219" : "#19243b" }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5 }}
              >
                {location.name}
              </motion.div>
            </motion.div>

            {/* Pulsing Circle */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full"
              style={{
                backgroundColor: index === 0 ? "#fa5219" : "#19243b",
                opacity: 0.2,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            />
          </motion.div>
        ))}

        {/* Google My Business Card */}
        <motion.div
          className="absolute bottom-6 left-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#fa5219] to-[#ff6b35] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-sm text-slate-800">Ihr Unternehmen</div>
              <div className="text-xs text-slate-500 mb-2">Alzey, Rheinhessen</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Animation 6: SEO Monitoring - Analytics Dashboard
export function SeoMonitoringAnimation() {
  const chartData = [40, 65, 55, 80, 70, 90, 85];
  
  // Data points for line graph
  const lineData = [
    { x: 10, y: 80 },
    { x: 25, y: 65 },
    { x: 40, y: 70 },
    { x: 55, y: 50 },
    { x: 70, y: 35 },
    { x: 85, y: 20 },
    { x: 95, y: 10 },
  ];

  // Create SVG path
  const createPath = () => {
    return lineData.map((point, i) => {
      if (i === 0) return `M ${point.x} ${point.y}`;
      return `L ${point.x} ${point.y}`;
    }).join(' ');
  };

  return (
    <div className="h-full min-h-[300px] bg-gradient-to-br from-orange-50 to-slate-100 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
      {/* Dashboard Container */}
      <div className="w-full max-w-md">
        {/* Header Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Traffic", value: "+48%", color: "#fa5219" },
            { label: "Rankings", value: "+12", color: "#19243b" },
            { label: "CTR", value: "5.2%", color: "#10b981" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl p-3 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xs text-slate-500 mb-1">{stat.label}</div>
              <motion.div
                className="text-lg font-bold"
                style={{ color: stat.color }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.value}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          className="bg-white rounded-2xl p-6 shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-sm font-semibold text-slate-700 mb-4 flex items-center justify-between">
            <span>Sichtbarkeit</span>
            <motion.div
              className="flex items-center gap-1 text-green-600"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-medium">Steigend</span>
            </motion.div>
          </div>

          {/* Line Graph Container */}
          <div className="relative h-32 mb-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-4">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="100"
                  y2={y}
                  stroke="#e2e8f0"
                  strokeWidth="0.5"
                />
              ))}
              
              {/* Animated gradient area under line */}
              <motion.path
                d={`${createPath()} L 95 100 L 10 100 Z`}
                fill="url(#lineGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 1 }}
              />
              
              {/* Main line */}
              <motion.path
                d={createPath()}
                fill="none"
                stroke="#fa5219"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              />
              
              {/* Data points */}
              {lineData.map((point, index) => (
                <motion.circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="2"
                  fill="#fa5219"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
                />
              ))}
              
              {/* Moving indicator dot */}
              <motion.circle
                cx={lineData[lineData.length - 1].x}
                cy={lineData[lineData.length - 1].y}
                r="4"
                fill="#fa5219"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 2.5,
                }}
              />
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fa5219" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#fa5219" stopOpacity="0.05" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Upward arrow indicator */}
            <motion.div
              className="absolute top-2 right-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end justify-between h-24 gap-2">
            {chartData.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  className="w-full rounded-t-lg"
                  style={{
                    background: `linear-gradient(to top, ${index === chartData.length - 1 ? "#fa5219" : "#19243b"}, ${index === chartData.length - 1 ? "#ff9966" : "#1a5490"})`,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.8, ease: "easeOut" }}
                  whileHover={{ opacity: 0.8 }}
                />
                <div className="text-[10px] text-slate-400">W{index + 1}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Live Indicator */}
        <motion.div
          className="mt-4 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs text-slate-600 font-medium">Live-Monitoring aktiv</span>
        </motion.div>
      </div>
    </div>
  );
}
