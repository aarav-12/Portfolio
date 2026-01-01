import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadModelWithErrorHandling(scene, renderer, modelUrl, onSuccess, onError) {
  const loader = new GLTFLoader();
  const canvas = renderer.domElement;

  // Show loading spinner
  canvas.classList.add('hidden-on-error');
  // document.querySelector('.loading-spinner').classList.remove('hidden');

  // Handle WebGL context loss
  renderer.domElement.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    canvas.classList.add('context-lost');
    canvas.classList.add('hidden-on-error');
    // Append context lost message
    const message = document.createElement('div');
    message.className = 'context-lost-message';
    message.textContent = 'WebGL Context Lost';
    const subtext = document.createElement('div');
    subtext.className = 'context-lost-subtext';
    subtext.textContent = 'Please refresh the page.';
    document.body.appendChild(message);
    document.body.appendChild(subtext);
  });

  // Load model with error handling
  loader.load(
    modelUrl,
    (gltf) => {
      scene.add(gltf.scene);
      // Hide loading, show canvas
      canvas.classList.remove('hidden-on-error');
      // document.querySelector('.loading-spinner').classList.add('hidden');
      if (onSuccess) onSuccess(gltf);
    },
    undefined, // onProgress
    (error) => {
      console.error('Error loading GLTF:', error);
      canvas.classList.add('hidden-on-error');
      // Show error overlay
      const overlay = document.createElement('div');
      overlay.className = 'error-overlay';
      overlay.innerHTML = `
        <div>
          <div class="error-message">Failed to Load Model</div>
          <div class="fallback-text">Please check your connection or try again later.</div>
        </div>
      `;
      document.body.appendChild(overlay);
      if (onError) onError(error);
    }
  );
}
