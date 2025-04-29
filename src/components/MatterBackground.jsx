'use client';

import React, { useEffect, useRef } from 'react';

const MatterBackground = () => {
  const wrapperRef = useRef(null);
  const matterInstanceRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Import Matter.js dynamically to avoid SSR issues
    const importMatter = async () => {
      try {
        const Matter = await import('matter-js');
        const MatterAttractors = await import('matter-attractors');
        const MatterWrap = await import('matter-wrap');

        // Use the plugins
        Matter.use(MatterAttractors);
        Matter.use(MatterWrap);

        // Initialize Matter.js with the exact implementation from matter.jsx
        initMatter(Matter);
      } catch (error) {
        console.error("Error loading Matter.js:", error);
      }
    };

    importMatter();

    // Clean up function
    return () => {
      if (matterInstanceRef.current) {
        matterInstanceRef.current.stop();
        matterInstanceRef.current = null;
      }
    };
  }, []);

  const initMatter = (Matter) => {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    wrapperRef.current.appendChild(canvas);

    // Set dimensions
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // module aliases - exactly as in the original matter.jsx
    const Engine = Matter.Engine;
    const Events = Matter.Events;
    const Runner = Matter.Runner;
    const Render = Matter.Render;
    const World = Matter.World;
    const Body = Matter.Body;
    const Mouse = Matter.Mouse;
    const Common = Matter.Common;
    const Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    // create renderer
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    // create runner
    const runner = Runner.create();

    // create demo scene
    const world = engine.world;
    world.gravity.scale = 0;

    // create a body with an attractor
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        render: {
          fillStyle: `#000`,
          strokeStyle: `#000`,
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    // add some bodies that to be attracted - exactly as in the original matter.jsx
    for (let i = 0; i < 60; i += 1) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      let polygonNumber = Common.random(3, 6);

      const body = Bodies.polygon(
        x,
        y,
        polygonNumber,
        s,
        {
          mass: s / 20,
          friction: 0,
          frictionAir: 0.02,
          angle: Math.round(Math.random() * 360),
          render: {
            fillStyle: "#222222",
            strokeStyle: `#000000`,
            lineWidth: 2,
          },
        }
      );

      World.add(world, body);

      let r = Common.random(0, 1);

      // Small circle
      const smallCircle = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: r > 0.3 ? `#27292d` : `#444444`,
          strokeStyle: `#000000`,
          lineWidth: 2,
        },
      });

      World.add(world, smallCircle);

      // Medium circle
      const mediumCircle = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3 ? `#334443` : `#222222`,
          strokeStyle: `#111111`,
          lineWidth: 4,
        },
      });

      World.add(world, mediumCircle);

      // Large circle
      const largeCircle = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: `#191919`,
          strokeStyle: `#111111`,
          lineWidth: 3,
        },
      });

      World.add(world, largeCircle);
    }

    // add mouse control with proper settings
    const mouse = Mouse.create(render.canvas);

    // Create mouse constraint for direct interaction
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    // Add the mouse constraint to the world
    World.add(world, mouseConstraint);

    // Make sure the canvas captures mouse events
    render.canvas.style.pointerEvents = 'auto';

    // Add touch support for mobile devices
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.position.x = e.touches[0].clientX;
        mouse.position.y = e.touches[0].clientY;
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.position.x = e.touches[0].clientX;
        mouse.position.y = e.touches[0].clientY;
      }
    };

    // Handle scroll events for touch scrolling on mobile
    const handleScroll = () => {
      // If we have a last touch position, update it based on scroll
      if (mouse.position.x && mouse.position.y) {
        // Adjust y position based on scroll
        mouse.position.y = mouse.position.y + window.scrollY;
      }
    };

    // Add touch and scroll event listeners
    render.canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    render.canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Add document-level mouse move listener to ensure we capture all mouse movements
    const handleMouseMove = (e) => {
      mouse.position.x = e.clientX;
      mouse.position.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Update attractor position based on mouse/touch movement
    Events.on(engine, "afterUpdate", function () {
      if (!mouse.position.x) return;
      // smoothly move the attractor body towards the mouse/touch position
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.25, // Increased speed for more responsiveness
        y: (mouse.position.y - attractiveBody.position.y) * 0.25, // Increased speed for more responsiveness
      });
    });

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      render.canvas.width = width;
      render.canvas.height = height;
      render.options.width = width;
      render.options.height = height;
    };

    // Debounce function for resize - exactly as in the original matter.jsx
    const debounce = (func, wait, immediate) => {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    // Add resize listener
    window.addEventListener('resize', debounce(handleResize, 250));

    // Start the engine and renderer
    Runner.run(runner, engine);
    Render.run(render);

    // Store instance for cleanup - similar to the original matter.jsx
    matterInstanceRef.current = {
      engine,
      runner,
      render,
      canvas: render.canvas,
      stop: function() {
        window.removeEventListener('resize', debounce(handleResize, 250));
        document.removeEventListener('mousemove', handleMouseMove);
        if (render.canvas) {
          render.canvas.removeEventListener('touchmove', handleTouchMove, { passive: true });
          render.canvas.removeEventListener('touchstart', handleTouchStart, { passive: true });
        }
        window.removeEventListener('scroll', handleScroll, { passive: true });
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
        if (canvas && canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      }
    };
  };

  return (
    <div
      ref={wrapperRef}
      id="wrapper-canvas"
      className="absolute inset-0 z-0"
      style={{
        pointerEvents: 'auto',
        zIndex: 0
      }}
    />
  );
};

export default MatterBackground;
