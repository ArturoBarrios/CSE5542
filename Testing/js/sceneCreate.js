(function() {
  'use strict';
  // link to, or create, namespace
  window.sceneNS = window.sceneNS || {};
  // scene creation function
  window.sceneNS.sceneCreate =
    /**
     * Create a Scene instance and return it
     * @param  {Canvas} canvas [canvas element which will display the new Scene]
     * @param  {Engine} engine [Engine class instance used to create the Scene]
     * @return {Scene}         [newly created Scene instance]
     */

    function sceneCreate(canvas, engine) {
      // convenience alias for BABYLON namespace
      let BABYLON = window.BABYLON;
      // create scene object
      let scene = new BABYLON.Scene(engine);
      // create a FreeCamera, and set position to x:0, x:5, z:-10
      let camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 16, -20), scene);
      // point the camera at the scene origin
      camera.setTarget(BABYLON.Vector3.Zero());
      // attach the camera to the canvas
      camera.attachControl(canvas, false);
      // create a basic light, and aim it straight up
      let light = new BABYLON.HemisphericLight(
        'light1', new BABYLON.Vector3(0, 1, 0), scene);

      var material = new BABYLON.StandardMaterial("texture1", scene);


      //end of cylinder at Y=.5
      var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop:0, height: .5, tessellation: 16}, scene);
      //width and length of 1
      var plane = BABYLON.Mesh.CreateGround('ground1', 1, 1, 10, scene);

      //plane
      plane.position.x = -.5;
      plane.position.y = 0;
      plane.material = material;

      //cone
     cone.position.y = 0;
     cone.position.x = -.5;
     cone.material = material;


  //sphere array
  var sphere_array = [];
  //cube array
  var cube_array = [];
  //cylinder array
  var cylinder_array = [];

  //create spheres
  for (var i = 0; i<9;i++){
    var sphere = BABYLON.Mesh.CreateSphere('sphere',4,1, scene);
    sphere.position.y = 0;
    sphere.position.x = -.5
    sphere.material = material;
    sphere_array.push(sphere);
  }
  //create cubes
  for (var i = 0; i<5;i++){
    //height of 1
    var box = BABYLON.Mesh.CreateBox('box', 1, scene);
    box.position.y = 0;
    box.position.x = -.5;
    box.material = material;
    cube_array.push(box);
  }
  //create cylinders
  for (var i = 0; i<8;i++){
    //height and diameter of 1
    var cylinder = BABYLON.MeshBuilder.CreateCylinder("cylinder", {diameterTop:1, height: 1, tessellation: 16}, scene);
    cylinder.position.y = 0;
    cylinder.position.x = -.5
    cylinder.material = material;
    cylinder_array.push(cylinder);
  }

  //feet
  cube_array[0].translate(BABYLON.Axis.X,-1.5,BABYLON.Space.WORLD)
  cube_array[0].translate(BABYLON.Axis.Y,.5,BABYLON.Space.WORLD)
  cube_array[1].translate(BABYLON.Axis.X,1.5,BABYLON.Space.WORLD)
  cube_array[1].translate(BABYLON.Axis.Y,.5,BABYLON.Space.WORLD)
  //shins
  cylinder_array[0].translate(BABYLON.Axis.X,-1.5,BABYLON.Space.WORLD)
  cylinder_array[0].translate(BABYLON.Axis.Y,1.7,BABYLON.Space.WORLD)
  cylinder_array[0].scaling.y = 1.4;
  cylinder_array[1].translate(BABYLON.Axis.X,1.5,BABYLON.Space.WORLD)
  cylinder_array[1].translate(BABYLON.Axis.Y,1.7,BABYLON.Space.WORLD)
  cylinder_array[1].scaling.y = 1.4;
  //knees
  sphere_array[0].translate(BABYLON.Axis.X,-1.5,BABYLON.Space.WORLD)
  sphere_array[0].translate(BABYLON.Axis.Y,2.5125,BABYLON.Space.WORLD)
  sphere_array[0].scaling.y = .225;
  sphere_array[1].translate(BABYLON.Axis.X,1.5,BABYLON.Space.WORLD)
  sphere_array[1].translate(BABYLON.Axis.Y,2.5125,BABYLON.Space.WORLD)
  sphere_array[1].scaling.y = .225;
  //thigs
  cylinder_array[2].translate(BABYLON.Axis.X,-1.5,BABYLON.Space.WORLD)
  cylinder_array[2].translate(BABYLON.Axis.Y,3.325,BABYLON.Space.WORLD)
  cylinder_array[2].scaling.y = 1.4;
  cylinder_array[3].translate(BABYLON.Axis.X,1.5,BABYLON.Space.WORLD)
  cylinder_array[3].translate(BABYLON.Axis.Y,3.325,BABYLON.Space.WORLD)
  cylinder_array[3].scaling.y = 1.4;
  //thigh-hip connectors
  sphere_array[2].translate(BABYLON.Axis.X,-1.5,BABYLON.Space.WORLD)
  sphere_array[2].translate(BABYLON.Axis.Y,4.1375,BABYLON.Space.WORLD)
  sphere_array[2].scaling.y = .225;
  sphere_array[3].translate(BABYLON.Axis.X,1.5,BABYLON.Space.WORLD)
  sphere_array[3].translate(BABYLON.Axis.Y,4.1375,BABYLON.Space.WORLD)
  sphere_array[3].scaling.y = .225;
  //hips
  cube_array[2].translate(BABYLON.Axis.Y,4.75,BABYLON.Space.WORLD)
  cube_array[2].scaling.x = 4;
  //stomach
  cube_array[3].translate(BABYLON.Axis.Y,5.75,BABYLON.Space.WORLD)
  cube_array[3].scaling.x = 2;
  //shoulders
  cube_array[4].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  cube_array[4].scaling.x = 3;
  cube_array[4].scaling.y = 1.25;
  //head
  sphere_array[4].translate(BABYLON.Axis.Y,8.5,BABYLON.Space.WORLD)
  sphere_array[4].scaling.y = 2;
  sphere_array[4].scaling.x = 2;
  //hat
  cone.translate(BABYLON.Axis.Y,10,BABYLON.Space.WORLD);
  cone.scaling.x = 1.5;
  cone.scaling.y = 1.5;

  //shoulder joints
  sphere_array[5].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  sphere_array[5].translate(BABYLON.Axis.X,-1.6125,BABYLON.Space.WORLD)
  sphere_array[5].scaling.x = .225;
  sphere_array[6].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  sphere_array[6].translate(BABYLON.Axis.X,1.6125,BABYLON.Space.WORLD)
  sphere_array[6].scaling.x = .225;
  //upper arm
  cylinder_array[4].translate(BABYLON.Axis.X,-2.375,BABYLON.Space.WORLD)
  cylinder_array[4].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  cylinder_array[4].rotation.z = Math.PI/2;
  cylinder_array[4].scaling.x = .5;
  cylinder_array[4].scaling.y = 1.25;
  cylinder_array[5].translate(BABYLON.Axis.X,2.375,BABYLON.Space.WORLD)
  cylinder_array[5].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  cylinder_array[5].rotation.z = Math.PI/2;
  cylinder_array[5].scaling.x = .5;
  cylinder_array[5].scaling.y = 1.25;
  //elbow
  sphere_array[7].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  sphere_array[7].translate(BABYLON.Axis.X,-3.0875,BABYLON.Space.WORLD)
  sphere_array[7].scaling.x = .225;
  sphere_array[8].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  sphere_array[8].translate(BABYLON.Axis.X,3.0875,BABYLON.Space.WORLD)
  sphere_array[8].scaling.x = .225;
  //lower arm
  cylinder_array[6].translate(BABYLON.Axis.X,-3.825,BABYLON.Space.WORLD)
  cylinder_array[6].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  cylinder_array[6].rotation.z = Math.PI/2;
  cylinder_array[6].scaling.x = .5;
  cylinder_array[6].scaling.y = 1.25;
  cylinder_array[7].translate(BABYLON.Axis.X,3.825,BABYLON.Space.WORLD)
  cylinder_array[7].translate(BABYLON.Axis.Y,6.875,BABYLON.Space.WORLD)
  cylinder_array[7].rotation.z = Math.PI/2;
  cylinder_array[7].scaling.x = .5;
  cylinder_array[7].scaling.y = 1.25;

//plane
plane.scaling.x = 10;
plane.scaling.z = 10;



  material.wireframe = true;




      return scene;
    };
}());
