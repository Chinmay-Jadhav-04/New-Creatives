// This script ensures Vanta.js is properly initialized
document.addEventListener('DOMContentLoaded', function() {
  // Check if Vanta.js container exists
  const vantaContainer = document.getElementById('vanta-waves-bg');
  if (!vantaContainer) return;

  // Function to load scripts
  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }

  // Load Three.js first, then Vanta.js
  loadScript('/assets/js/three.r134.min.js', function() {
    loadScript('/assets/js/vanta.waves.min.js', function() {
      // Initialize Vanta.js
      if (window.VANTA) {
        window.vantaEffect = window.VANTA.WAVES({
          el: vantaContainer,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight * 2,
          minWidth: window.innerWidth,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0033aa,
          shininess: 60,
          waveHeight: 20,
          waveSpeed: 0.6,
          zoom: 0.65,
          forceAnimate: true,
          wireframe: false
        });

        // Handle resize
        window.addEventListener('resize', function() {
          if (window.vantaEffect) {
            // Update dimensions
            window.vantaEffect.setOptions({
              minHeight: window.innerHeight * 2,
              minWidth: window.innerWidth
            });
            window.vantaEffect.resize();
          }
        });
      }
    });
  });
});
