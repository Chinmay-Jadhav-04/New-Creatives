'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Arrow from './Arrow';
import Header from './Header';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const HeroSection = () => {
  const modelContainerRef = useRef(null);

  useEffect(() => {
    if (!modelContainerRef.current) return;

    // Setup Three.js scene
    const container = modelContainerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f1729);

    // Camera positioned farther back with a wider field of view
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
    camera.position.set(0, 5, 80); // Adjusted position for better visibility
    camera.lookAt(0, 0, 0); // Ensure camera is looking at the center

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Enhanced lighting setup for the studio background
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 1.2);
    frontLight.position.set(0, 5, 15);
    scene.add(frontLight);

    const overheadLight = new THREE.DirectionalLight(0xffffff, 0.8);
    overheadLight.position.set(0, 10, 0);
    scene.add(overheadLight);

    const leftLight = new THREE.DirectionalLight(0xffffff, 0.5);
    leftLight.position.set(-10, 5, 5);
    scene.add(leftLight);

    const rightLight = new THREE.DirectionalLight(0xffffff, 0.5);
    rightLight.position.set(10, 5, 5);
    scene.add(rightLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0; // Faster rotation
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 2;

    // Set target to keep focus on center
    controls.target.set(0, 0, 0);
    controls.update();

    // Load the 3D model
    const loader = new GLTFLoader();

    console.log('Starting to load 3D model...');

    // Load the model with absolute path to avoid any path issues
    loader.load(
      '/assets/models/CreativesKa3D.glb',
      (gltf) => {
        console.log('Model loaded successfully!');

        if (!gltf || !gltf.scene) {
          console.error('Model loaded but scene is missing or invalid:', gltf);
          return;
        }

        const model = gltf.scene;

        // Log model details for debugging
        console.log('Model details:', {
          children: model.children.length,
          position: model.position,
          rotation: model.rotation,
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const maxDimension = Math.max(size.x, size.y, size.z);

        console.log('Model size:', size);
        console.log('Max dimension:', maxDimension);

        // Use a smaller scale for the new model
        const scale = Math.min(width, height) / maxDimension / 2.5;
        model.scale.set(scale, scale, scale);

        // Center the model
        const center = box.getCenter(new THREE.Vector3());
        model.position.set(-center.x, -center.y, -center.z);

        // Position the model for optimal viewing
        model.position.set(0, -45, 0);
        model.rotation.y = Math.PI / 6; // Rotate for better perspective

        scene.add(model);
        console.log('Model added to scene');

        // Force a render to ensure the model appears
        renderer.render(scene, camera);
      },
      (xhr) => {
        // Progress callback
        if (xhr.lengthComputable) {
          const progress = (xhr.loaded / xhr.total) * 100;
          console.log(`Loading progress: ${progress.toFixed(2)}%`);
        }
      },
      (error) => {
        console.error('An error occurred loading the model:', error);
        console.error('Error details:', error.message);

        // Try loading the non-transformed version as a fallback
        console.log('Attempting to load original model as fallback...');
        loader.load(
          '/assets/models/CreativesKa3D.glb',
          (gltf) => {
            console.log('Fallback model loaded successfully!');
            const model = gltf.scene;

            // Use a smaller scale for the fallback model
            const box = new THREE.Box3().setFromObject(model);
            const size = box.getSize(new THREE.Vector3());
            const maxDimension = Math.max(size.x, size.y, size.z);

            const scale = Math.min(width, height) / maxDimension / 5;
            model.scale.set(scale, scale, scale);

            // Center and position the model
            const center = box.getCenter(new THREE.Vector3());
            model.position.set(-center.x, -center.y, -center.z);
            model.position.set(0, -45, 0);
            model.rotation.y = Math.PI / 6;

            scene.add(model);
            renderer.render(scene, camera);
          },
          undefined,
          (fallbackError) => console.error('Fallback model loading failed:', fallbackError)
        );
      }
    );

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* 3D Model Background */}
      <div
        ref={modelContainerRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      ></div>

      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none z-10"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-['Spartan'] skz-heading mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          SKZ-CREATIVES
        </h1>
        <p className="font-['Merriweather'] italic text-lg md:text-xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          We Build What They'll Never Forget
        </p>
        <button
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="mt-6 py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative group text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          About Us
          <Arrow className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-8 transition-all duration-300" />
        </button>
      </div>

      {/* Social Media Links */}
      <ul className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-white pointer-events-auto z-50 drop-shadow-lg">
        <li className="hover:scale-125 transition-transform duration-300 bg-black bg-opacity-30 rounded-full p-2">
          <Link href="https://www.linkedin.com" target="_blank">
            <svg
              className="w-5 sm:w-6 md:w-7 hover:text-blue-400 transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
              />
            </svg>
          </Link>
        </li>
        <li className="hover:scale-125 transition-transform duration-300 bg-black bg-opacity-30 rounded-full p-2">
          <Link href="https://twitter.com" target="_blank">
            <svg
              className="w-5 sm:w-6 md:w-7 hover:text-gray-800 transition-colors duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z"
              />
            </svg>
          </Link>
        </li>
        <li className="hover:scale-125 transition-transform duration-300 bg-black bg-opacity-30 rounded-full p-2">
        <Link href="https://www.instagram.com/skz.creative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <svg
            className="w-5 sm:w-6 md:w-7 hover:text-pink-400 transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </Link>
      </li>
      <li className="hover:scale-125 transition-transform duration-300 bg-black bg-opacity-30 rounded-full p-2">
        <Link href="https://www.gmail.com" target="_blank">
          <svg
            className="w-5 sm:w-6 md:w-7 hover:text-gray-400 transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </svg>
        </Link>
      </li>
      <li className="hover:scale-125 transition-transform duration-300 bg-black bg-opacity-30 rounded-full p-2">
        <Link href="https://www.youtube.com/@SANSKARIEZZZ" target="_blank">
          <svg
            className="w-5 sm:w-6 md:w-7 hover:text-red-500 transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
            />
          </svg>
        </Link>
      </li>
      </ul>
    </section>
  );
};

export default HeroSection;