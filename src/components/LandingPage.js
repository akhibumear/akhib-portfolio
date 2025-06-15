import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCode, FaRocket, FaBrain } from 'react-icons/fa';

// Simple animated sphere
function FloatingSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]} scale={0.8}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#3b82f6"
        roughness={0.4}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}

// Interactive background cubes
function FloatingCubes() {
  const cubesRef = useRef();

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      cubesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={cubesRef}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 2) * 3,
            Math.cos(i * 2) * 2,
            Math.sin(i) * -2
          ]}
          rotation={[i * 0.5, i * 0.5, 0]}
        >
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#8b5cf6" : "#3b82f6"}
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating particles
function Stars() {
  const particlesRef = useRef();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particlePositions = [];
  for (let i = 0; i < 100; i++) {
    particlePositions.push(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={new Float32Array(particlePositions)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#8b5cf6" size={0.02} transparent opacity={0.8} />
    </points>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading 3D Experience...</p>
      </div>
    </div>
  );
}

// 3D Scene Component
function Scene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <FloatingSphere />
      <FloatingCubes />
    </Canvas>
  );
}

const LandingPage = () => {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline-section');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 3D Background with Error Boundary */}
      <div className="absolute inset-0">
        <Suspense fallback={<LoadingFallback />}>
          <Scene />
        </Suspense>
      </div>

      {/* Animated background elements (CSS fallback) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-cyan-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Akhib Umear
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Full Stack Developer & AI/ML Engineer crafting digital experiences 
              that bridge innovation with functionality
            </motion.p>
          </motion.div>

          {/* Skills showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          >
            {[
              {
                icon: FaCode,
                title: "Frontend Mastery",
                description: "React.js, Next.js, TailwindCSS",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: FaBrain,
                title: "AI/ML Innovation",
                description: "Python, TensorFlow, Scikit-learn",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FaRocket,
                title: "Full-Stack Solutions",
                description: "Node.js, Flask, PostgreSQL",
                color: "from-orange-500 to-red-500"
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative glass p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-white font-heading font-semibold text-lg mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTimeline}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl glow-on-hover"
            >
              <span>Explore My Journey</span>
              <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-gray-400 text-sm"
            >
              Scroll down to see my career timeline
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          onClick={scrollToTimeline}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage; 