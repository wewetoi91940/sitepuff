<!-- Canvas pour afficher la puff -->
<canvas id="puff3D"></canvas>

<!-- Three.js + loader pour .glb -->
<script src="https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.152.2/examples/js/loaders/GLTFLoader.js"></script>

<script>
  // 1. Scene
  const scene = new THREE.Scene();

  // 2. Camera
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 3;

  // 3. Renderer
  const renderer = new THREE.WebGLRenderer({ 
    canvas: document.getElementById('puff3D'), 
    alpha: true 
  });
  renderer.setSize(300, 300);

  // 4. Lumière
  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  light.position.set(0, 20, 0);
  scene.add(light);

  // 5. Chargement de la puff 3D
  const loader = new THREE.GLTFLoader();
  loader.load(
    'puff.glb', // <-- quand tu auras ton fichier, mets-le à la racine du projet
    function (gltf) {
      const puff = gltf.scene;
      puff.scale.set(1, 1, 1);
      scene.add(puff);

      // Animation
      function animate() {
        requestAnimationFrame(animate);
        puff.rotation.y += 0.01; // rotation infinie
        renderer.render(scene, camera);
      }
      animate();
    },
    undefined,
    function (error) {
      console.error('Erreur de chargement du modèle :', error);
    }
  );
</script>