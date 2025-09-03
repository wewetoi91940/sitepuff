<script>
  // 1. Scene
  const scene = new THREE.Scene();

  // 2. Caméra
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  // 3. Renderer
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('puff3D'), alpha: true });
  renderer.setSize(300, 300);

  // 4. Objet 3D (cube pour test)
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // 5. Animation (rotation infinie)
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.005;
    renderer.render(scene, camera);
  }
  animate();
</script>
