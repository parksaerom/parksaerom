import * as THREE from 'three';

export function getGeometryFromGLTFNodes(nodes: any['nodes']) {
  const vertices: THREE.Vector3[] = [];
  const faces: number[][] = [];
  const normals: THREE.Vector3[] = [];
  const axes: THREE.Vector3[] = [];
  let boundingSphereRadius = 0;

  for (const nodeName in nodes) {
    if (nodes.hasOwnProperty(nodeName)) {
      const node = nodes[nodeName];

      if (node instanceof THREE.Mesh) {
        const geometry = node.geometry as THREE.BufferGeometry;

        if (geometry && geometry.attributes.position) {
          const positionArray = geometry.attributes.position.array;
          const indexArray = geometry.index ? geometry.index.array : null;

          for (let i = 0; i < positionArray.length; i += 3) {
            const x = positionArray[i] - 0.25;
            const y = positionArray[i + 1] - 3.85;
            const z = positionArray[i + 2] - 0.1;
            vertices.push(new THREE.Vector3(x, y, z));
          }

          if (indexArray) {
            for (let i = 0; i < indexArray.length; i += 3) {
              const a = indexArray[i];
              const b = indexArray[i + 1];
              const c = indexArray[i + 2];
              faces.push([a, b, c]);
            }
          }

          // 법선 벡터, 축, 및 경계 구 형태 반지름을 계산
          geometry.computeVertexNormals();

          if (geometry.attributes.normal) {
            const normalArray = geometry.attributes.normal.array;
            for (let i = 0; i < normalArray.length; i += 3) {
              const x = normalArray[i];
              const y = normalArray[i + 1];
              const z = normalArray[i + 2];
              normals.push(new THREE.Vector3(x, y, z));
            }
          }

          // 정규화된 축은 일반적으로 단위 행렬
          axes.push(new THREE.Vector3(1, 0, 0));
          axes.push(new THREE.Vector3(0, 1, 0));
          axes.push(new THREE.Vector3(0, 0, 1));

          boundingSphereRadius = Math.max(
            boundingSphereRadius,
            geometry.boundingSphere!.radius,
          );
        }
      }
    }
  }

  return {vertices, faces, normals, axes, boundingSphereRadius};
}
