(function(){
    var script = {
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_t.jpg",
 "label": "lab2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
 "overlays": [
  "this.overlay_6057515A_6FF2_E3D6_41CB_9577DD48D455",
  "this.overlay_7FE3BEF8_6FF3_9ED2_41CA_F4E9C9BAB020"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 5.46,
   "distance": 1,
   "backwardYaw": 39.26,
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": -2.42,
 "partial": false,
 "hfov": 360,
 "vfov": 81.68,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 154.94,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81A062B2_8E3A_F2C5_41C4_4EAF4E2A6E33",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -3.51,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E62A409_8E3A_F5C7_41C2_A0F4EC7AF2D7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -115.73,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_814E126B_8E3A_F25B_41CF_C9352C4738A4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_t.jpg",
 "label": "168",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7",
 "overlays": [
  "this.overlay_953A215D_8132_22C5_41CF_FD7BB5A2148D"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 47.25,
   "distance": 1,
   "backwardYaw": 123.58,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "vfov": 60.5,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -100.34,
  "pitch": -1.21,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_t.jpg",
 "label": "rightcooridoor",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
 "overlays": [
  "this.overlay_6854E312_78CE_5A84_41DC_30A4C479169B",
  "this.overlay_6803A47B_78C6_5F7B_41C1_6A052BD688F2",
  "this.overlay_69AFD036_78CA_568C_41BF_B01840300243",
  "this.overlay_94935385_8316_2645_41CB_96A355BE371C",
  "this.overlay_946C7F8E_8316_7E46_41D7_70F5CE35512A"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -64.87,
   "distance": 1,
   "backwardYaw": 69.01,
   "panorama": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -127.2,
   "distance": 1,
   "backwardYaw": -109.56,
   "panorama": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -94.24,
   "distance": 1,
   "backwardYaw": 68.4,
   "panorama": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 84.35,
   "distance": 1,
   "backwardYaw": -106.4,
   "panorama": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 3.15,
   "distance": 1,
   "backwardYaw": -113.24,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": -7.99,
 "partial": true,
 "hfov": 263.39,
 "vfov": 62.1,
 "hfovMax": 130
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9A0D356F_8B22_D770_41C4_E25F69FBC9A9",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9A0D6570_8B22_D750_41BE_D81891BE9E5B"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window11207"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_t.jpg",
 "label": "leftroom",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
 "overlays": [
  "this.overlay_6AA92E5C_78C9_EABC_41C1_C794B9FFD48E",
  "this.overlay_6AF5D2A2_78CE_BB85_41D1_D188597B1E20"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -109.56,
   "distance": 1,
   "backwardYaw": -127.2,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -43.21,
   "distance": 1,
   "backwardYaw": -127.2,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -5.76,
 "partial": false,
 "vfov": 63.91,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 150.19,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D659165_8E3A_CE4F_41DC_87406F95A54E",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_t.jpg",
 "label": "firstfloorcoridoooe",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_63584076_72C4_C225_41D9_7003B7355FB0",
 "overlays": [
  "this.overlay_612CC06F_72CD_C223_41C2_56DE8B6299F2",
  "this.overlay_62C7CA2E_72CC_C625_41D6_44B5A63D6A34",
  "this.overlay_65923DA3_7245_C223_41D1_FE1BFE70C46D"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -106.82,
   "distance": 1,
   "backwardYaw": 84.94,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 159.11,
   "distance": 1,
   "backwardYaw": 78.87,
   "panorama": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -85.39,
   "distance": 1,
   "backwardYaw": 90.85,
   "panorama": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -4.6,
 "partial": false,
 "vfov": 67.85,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 161.37,
  "pitch": -6.55,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_63584076_72C4_C225_41D9_7003B7355FB0_camera",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9ADDE73B_8AE5_34D0_41B4_7A9F7AE196CB",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9ADC173B_8AE5_34D0_41DA_8427FD200960"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window5013"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_t.jpg",
 "label": "left",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
 "overlays": [
  "this.overlay_62A03976_6FD3_E3DE_41C1_FDC5CDF26976",
  "this.overlay_620CCBA2_702F_E776_41C1_50B308F2F3C6",
  "this.overlay_7DF4AF74_6DC5_FE25_41CB_C3D88A6FA1A8",
  "this.overlay_8EAA60C8_80F2_23CB_41DA_7B476039300E",
  "this.overlay_8F5B5199_80F6_224A_41AC_8DD7589ACFB7",
  "this.overlay_84FFE94D_8B65_7CB0_41C5_7919F36BE326",
  "this.overlay_9B3442C2_8B63_4DB0_41D2_77EAA00990C6",
  "this.overlay_9B697C42_8B5F_34B3_41D5_D6888052EC6C"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -85.62,
   "distance": 1,
   "backwardYaw": -25.06,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 179.23,
   "distance": 1,
   "backwardYaw": 21.03,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -63.22,
   "distance": 1,
   "backwardYaw": 29.69,
   "panorama": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -15.87,
   "distance": 1,
   "backwardYaw": 58.98,
   "panorama": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -7.56,
 "partial": false,
 "vfov": 64.86,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 96.25,
  "pitch": -5.73,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_924072FC_8132_27CA_41C3_10021807C8E4_camera",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_998C32E5_8B25_4D70_41D9_97BA619E7A5F",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_99B6C2EA_8B25_4D70_41BC_D0072CFF3553"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window19432"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_t.jpg",
 "label": "smartlab",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
 "overlays": [
  "this.overlay_61118D3D_7037_E352_41DB_D9CAFC4E92D4",
  "this.overlay_611F8621_7035_6172_41D7_6BFE4C4F7884"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 60.76,
   "distance": 1,
   "backwardYaw": -125.17,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -172.48,
   "distance": 1,
   "backwardYaw": 93.93,
   "panorama": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -5.86,
 "partial": false,
 "vfov": 63.46,
 "hfovMax": 130
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_91F7DFD7_8112_7DC5_41B9_4AB894ED5BF1",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_91F3EFD7_8112_7DC5_41B9_67DB4264CEAF"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window10259"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 170.62,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FA965D0_8E3A_F645_41D9_3B07F496B2CB",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 97.86,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8186B317_8E3A_F3CB_41D0_93AF3C33E738",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -9.56,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D53C177_8E3A_CE4B_41DE_AF9C2A9EB88B",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_t.jpg",
 "label": "164",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
 "overlays": [
  "this.overlay_755DB10D_65B5_772B_41C4_00F2A279D95A",
  "this.overlay_74FCDDDB_65B2_AF2F_41D4_69CA87397091"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -82.14,
   "distance": 1,
   "backwardYaw": 50.86,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -144.95,
   "distance": 1,
   "backwardYaw": 50.86,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false,
 "vfov": 85.11,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 51.91,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81E15349_8E3A_F247_41BF_41C8ECD27AAA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -121.02,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_819072E4_8E3A_F24D_41DA_546A3B20841F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6579408D_7247_42E7_41BC_2A988AD9953C_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_t.jpg",
 "label": "staira",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
 "overlays": [
  "this.overlay_2E1CDA60_27CE_AFB4_41A5_F7426B7FECE0",
  "this.overlay_58B8AED6_5546_AC6F_41B6_7E26E95B3B8B"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -23.38,
   "distance": 1,
   "backwardYaw": 25.19,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 64.27,
   "distance": 1,
   "backwardYaw": 104.17,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -2.02,
 "partial": false,
 "vfov": 72.9,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 164.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E7753F5_8E3A_F24C_41D7_858D91231A6F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 50.53,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9DAD01D4_8E3A_CE4D_41C5_9E5235CD6B13",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -31.12,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81BEB29E_8E3A_F2FD_41D8_597183E00EBA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -158.09,
  "pitch": -15.13,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 66.76,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CAE2726_8E3A_F3CD_4198_393EF9C4741D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -111.6,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C4E3706_8E3A_F3CD_41C8_3C7E3322CF76",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_t.jpg",
 "label": "165",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
 "overlays": [
  "this.overlay_330B46B1_2096_C79E_414D_EE196269949D",
  "this.overlay_34F412D5_209B_5F87_41B7_5D443005399A"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -128.09,
   "distance": 1,
   "backwardYaw": 137.87,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -50.95,
   "distance": 1,
   "backwardYaw": 137.87,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -11.07,
 "partial": false,
 "vfov": 78.05,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_t.jpg",
 "label": "rightcoridorr",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
 "overlays": [
  "this.overlay_6A97DFD8_65BF_AB2A_41C3_3E50220C5DA6",
  "this.overlay_6A36C49D_65BD_DD2A_41C4_B37802ADF778",
  "this.overlay_6A77C71E_65B3_7B26_41D2_00F45DD39300",
  "this.overlay_778A81BE_65D5_7766_41C5_A6B5B445518E",
  "this.overlay_77AC7450_65D6_DD39_4194_F5631E76AD62",
  "this.overlay_93B90AB1_8112_265A_41C4_6131B4DE8977",
  "this.overlay_91D3D869_811E_E2CA_41A8_A017BDE58671",
  "this.overlay_93036C95_811F_E25A_41CD_F1911FDFB525",
  "this.overlay_9185B75D_811E_6ECA_41B3_20BE41C05B02",
  "this.overlay_9091F2C0_812E_663A_41DD_7F9ECB63A616"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 115.61,
   "distance": 1,
   "backwardYaw": 45.26,
   "panorama": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 90.97,
   "distance": 1,
   "backwardYaw": -175.76,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 50.86,
   "distance": 1,
   "backwardYaw": -82.14,
   "panorama": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -87.18,
   "distance": 1,
   "backwardYaw": -82.14,
   "panorama": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 137.87,
   "distance": 1,
   "backwardYaw": -128.09,
   "panorama": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -136.74,
   "distance": 1,
   "backwardYaw": -128.09,
   "panorama": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "vfov": 69.06,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 140.4,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D119105_8E3A_CFCF_41CA_402537A125B4",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -129.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F5E957F_8E3A_F63B_41E1_08F5860F128E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 159.53,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EB98450_8E3A_F645_41D5_7203A9D92758",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 54.83,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D72713C_8E3A_CE3D_41A8_B403A4B85D2C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_t.jpg",
 "label": "smartlab2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
 "overlays": [
  "this.overlay_61BB297B_7032_E3D6_41D3_E7B64B6A14DE"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 93.93,
   "distance": 1,
   "backwardYaw": -172.48,
   "panorama": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -6.76,
 "partial": false,
 "vfov": 64.87,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -95.65,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C72D6C2_8E3A_F245_41DA_01424B9DAB0F",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_t.jpg",
 "label": "13",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE",
 "overlays": [
  "this.overlay_95125FF4_831E_1DDA_41BF_BE87B4B04A2C",
  "this.overlay_9569899C_8312_224A_41DA_9C6E5EAF6507"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -106.4,
   "distance": 1,
   "backwardYaw": 84.35,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -43.54,
   "distance": 1,
   "backwardYaw": 84.35,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "vfov": 63.89,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_t.jpg",
 "label": "labcoridoor1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
 "overlays": [
  "this.overlay_618446F2_6FF2_EED6_41BB_34A5952BEDF6",
  "this.overlay_6176939F_6FFF_A74E_41D0_8D9F295097C2",
  "this.overlay_60C9DA1B_6FF3_A156_41B4_A22292FB47BC",
  "this.overlay_8F56D9CD_80F2_E5CA_41DF_E2E4BF90FA4B"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 170.44,
   "distance": 1,
   "backwardYaw": 168.74,
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -125.17,
   "distance": 1,
   "backwardYaw": 60.76,
   "panorama": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 21.03,
   "distance": 1,
   "backwardYaw": 179.23,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -8.24,
 "partial": false,
 "vfov": 65.55,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 180,
  "pitch": -8.19,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 70.44,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C5C56F4_8E3A_F24D_41E0_63A7EEC6C85D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 64.67,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FD59653_8E3A_F24B_41DE_349729C41318",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -35,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E9AF46E_8E3A_F65D_41C1_525F328A589E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -38.38,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EF57496_8E3A_F6CD_41C7_7E85BBBD9553",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "id": "window_8E966203_80FE_263E_41B1_694812EFF1F6",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "closeButtonRollOverIconLineWidth": 1,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_8E963203_80FE_263E_41D4_06402CC4A65A"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "horizontal",
 "layout": "vertical",
 "data": {
  "name": "Window3809"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 9.63,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E53741D_8E3A_F5FF_41B3_6118FF2BD834",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_t.jpg",
 "vfov": 63.39,
 "label": "room9",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_6579408D_7247_42E7_41BC_2A988AD9953C",
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "pitch": -5.4,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -119.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C8F474D_8E3A_F25C_41D7_6EDA56CF9B12",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -16.99,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C9F573B_8E3A_F3C4_41DA_AADAA7B38F62",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -110.99,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C6C56E0_8E3A_F245_4196_475EAADB5D3D",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_99D47374_8B2D_5357_41D6_6F850F6E5767",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_99D67374_8B2D_5357_41D7_50A9995C46C8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window21950"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -86.07,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D78F151_8E3A_CE47_41C5_89653E7B18F9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -119.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CF8F759_8E3A_F244_41E0_BC440153444F",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_93065083_8116_623E_41B6_8DC2B5569A6D",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_93074083_8116_623E_41D8_71C93AB6BA46"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window11391"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -56.42,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81C0737C_8E3A_F23D_41D1_39BC4852B01D",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_t.jpg",
 "vfov": 63.91,
 "overlays": [
  "this.overlay_70307665_7DA6_1404_41BD_E3D3BBA20DC6"
 ],
 "label": "leftroom",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "pitch": -5.76,
 "partial": false
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_847C1B42_8AE3_3CB0_41BD_6BE3A132A323",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_847C0B46_8AE3_3CB0_41E0_DCE9CA457047"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window3028"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 115.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9ED774B5_8E3A_F6CF_41C6_F0B73C8D3613",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -20.89,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81A8A7BD_8E3A_F23F_41C0_83334EF7DE5E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 73.6,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9CBE3712_8E3A_F3C5_41E1_5C2FD5C52C88",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9A785B24_8AE7_5CF0_41A7_0D68A5869852",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9A798B2C_8AE7_5CF0_41C8_CD820ADF03D8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window5013"
 },
 "titleFontFamily": "Arial"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9AC5E6B9_8B2F_35D0_41C5_EB5BBA2C386B",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9AC326BD_8B2F_35D0_41E1_1A8560F0C5DC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window21950"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_t.jpg",
 "label": "room1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/0/{row}_{column}.jpg",
      "colCount": 15,
      "class": "TiledImageResourceLevel",
      "width": 7680,
      "tags": "ondemand",
      "rowCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/1/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
 "overlays": [
  "this.overlay_7D6F2A04_6DFF_41E5_41C2_8816C37AFAA2"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 58.98,
   "distance": 1,
   "backwardYaw": -15.87,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -9.44,
 "partial": false,
 "vfov": 62.01,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 52.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E19F3D6_8E3A_F24D_41C1_32441A579C72",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_t.jpg",
 "label": "conference",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
 "overlays": [
  "this.overlay_7749B0BD_65D6_D56B_41C7_7ABEA5F55642",
  "this.overlay_7731F521_65D2_DF1A_41C2_F3E7CF28AB5D"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 45.26,
   "distance": 1,
   "backwardYaw": 115.61,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -17.81,
   "distance": 1,
   "backwardYaw": 115.61,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -6.75,
 "partial": false,
 "vfov": 76.89,
 "hfovMax": 130
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_93781399_8112_264D_41B4_F8F1B66BD413",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_937A039D_8112_2645_41CD_7183A7E1C312"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window13827"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 176.32,
  "pitch": -5.71,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 115.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EE714A9_8E3A_F6C4_41CB_666F01943DDC",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_91C357FE_811E_EDC6_41D7_215DACA0E05F",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_91C767FA_811E_EDCE_41CF_65993588ACB5"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window13827"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 94.38,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C118699_8E3A_F2C7_41D6_6B0F9DA897D2",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_90E07BEC_811F_E5CA_41D0_BD62A705D18A",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_90E1DBE5_811F_E5C5_41CE_CCF678CC563E"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window13827"
 },
 "titleFontFamily": "Arial"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9A67F38A_8B2D_53B0_41B9_6C85EE6C5FC4",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9A66338B_8B2D_53B0_41C6_9B971507FB42"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window17822"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 156.62,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FC71667_8E3A_F24B_41D7_58E8484E2745",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_930A9FED_8116_7DCA_41D6_95238BB60789",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_930A7FED_8116_7DCA_41CC_FFC200A7DF91"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window11391"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_t.jpg",
 "label": "MAB CR 166",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328",
 "overlays": [
  "this.overlay_925B6DE7_8136_3DC6_41B4_EA198C47EA46"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 90.85,
   "distance": 1,
   "backwardYaw": -85.39,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "vfov": 71.38,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_t.jpg",
 "label": "12",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173",
 "overlays": [
  "this.overlay_95D004F3_831E_E3DD_41A4_751587969106",
  "this.overlay_9A2E427F_831F_E6C6_41D2_558351D2B508"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 69.01,
   "distance": 1,
   "backwardYaw": -64.87,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 142.73,
   "distance": 1,
   "backwardYaw": -64.87,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "vfov": 62.88,
 "hfovMax": 130
},
{
 "thumbnailUrl": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_t.jpg",
 "label": "lab102",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/0/{row}_{column}.jpg",
      "colCount": 13,
      "class": "TiledImageResourceLevel",
      "width": 6656,
      "tags": "ondemand",
      "rowCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
 "overlays": [
  "this.overlay_63E529C5_72C3_4267_41D8_62C5880B7C03",
  "this.overlay_6432FAD2_72C3_467D_41D4_9CF6239DAB9A"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 60.58,
   "distance": 1,
   "backwardYaw": -79.25,
   "panorama": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 176.49,
   "distance": 1,
   "backwardYaw": -9.38,
   "panorama": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -5.15,
 "partial": false,
 "vfov": 64.88,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -176.85,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F13A4FC_8E3A_F63C_41D6_89987A8FC126",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_t.jpg",
 "label": "labcoridoor",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
 "overlays": [
  "this.overlay_62A9550E_72C4_C3E5_41CA_485470CFFD35",
  "this.overlay_637C86D9_72C4_CE6F_41D0_A8AEB8F2290F",
  "this.overlay_9945CEA8_8B23_D5FF_41D8_3D65598F7B91",
  "this.overlay_9A148AC1_8B22_DDB0_41D8_8934EF2A6CCC",
  "this.overlay_9A5113D4_8B25_5350_41C5_CB171ECE712C"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -79.25,
   "distance": 1,
   "backwardYaw": 60.58,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -114.88,
   "distance": 1,
   "backwardYaw": 60.58,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 78.87,
   "distance": 1,
   "backwardYaw": 159.11,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -3.79,
 "partial": false,
 "vfov": 61.06,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -89.15,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9DA3A1C0_8E3A_CE45_4189_4986224514B0",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_t.jpg",
 "label": "f1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
 "overlays": [
  "this.overlay_A67546E7_AB8C_4ED4_41CA_09A559A3AF75",
  "this.overlay_581356E7_5543_BC2D_41D3_1067E1CAA752",
  "this.overlay_6155A733_72C3_CE23_41CA_96783A0F5A35",
  "this.overlay_6768CCFD_72DC_C227_41D0_30ABBF7555DC",
  "this.overlay_6955A86A_72C5_C22D_41DC_240C10260780",
  "this.overlay_9A950EB0_8B2D_35EF_41DE_2E9BAD5F58D1",
  "this.overlay_9AFBA737_8B2F_34D1_41E0_13CF7F50098A"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -39.6,
   "distance": 1,
   "backwardYaw": -129.47,
   "panorama": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 104.17,
   "distance": 1,
   "backwardYaw": 64.27,
   "panorama": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 84.94,
   "distance": 1,
   "backwardYaw": -106.82,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -115.33,
   "distance": 1,
   "backwardYaw": 154.2,
   "panorama": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -90.51,
   "distance": 1,
   "backwardYaw": 148.88,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -7.68,
 "partial": false,
 "vfov": 65.29,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 35.22,
  "pitch": -4.91,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_9CF4C929_876E_624D_41DC_0769C9491F92_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 7.52,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FE5463F_8E3A_F23C_41D1_4E203DB1F20E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -42.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81CDC390_8E3A_F2C5_41DF_1189E3DAF9B0",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_t.jpg",
 "label": "lab3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
 "overlays": [
  "this.overlay_7FA80A1D_6FED_6152_41D0_915457C0472D"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": -5.12,
 "partial": false,
 "hfov": 360,
 "vfov": 74.17,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -150.31,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81AD02D0_8E3A_F245_41D3_9AB74BDCC911",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_t.jpg",
 "label": "167",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_924072FC_8132_27CA_41C3_10021807C8E4",
 "overlays": [
  "this.overlay_94FA217B_8136_22CE_41DF_978D12B255E8"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -64.72,
   "distance": 1,
   "backwardYaw": 133.26,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "vfov": 53.49,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_t.jpg",
 "label": "belconi",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
 "overlays": [
  "this.overlay_A5F03DCD_AB8C_42D4_41E3_EF335D747B4B"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -129.47,
   "distance": 1,
   "backwardYaw": -39.6,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": -2.95,
 "partial": false,
 "hfov": 360,
 "vfov": 84.12,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -158.21,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C37B67B_8E3A_F23B_41D4_06C2AC799841",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 85.76,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D05711F_8E3A_CFFC_41DC_662DBA3F8A5E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 89.49,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F63A54D_8E3A_F65F_4186_1E286022952C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 51.91,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81F47335_8E3A_F3CF_41D1_4E67E42CBF20",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -101.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9DB2F1AD_8E3A_CEDF_41D5_30443FD6C8F9",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -158.97,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81ABA2C4_8E3A_F24D_41D9_4E77D4EC7AAD",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 61.43,
  "pitch": -5.73,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 52.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E0513E9_8E3A_F244_41A3_83523F26DA33",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -42.13,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E3A13A3_8E3A_F2CB_41D0_8E1F875F9FE7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_t.jpg",
 "label": "room2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
 "overlays": [
  "this.overlay_62660C43_6DC4_C263_41D3_3E8F8E668547"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 29.69,
   "distance": 1,
   "backwardYaw": -63.22,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": -2.81,
 "partial": false,
 "hfov": 360,
 "vfov": 84.7,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -11.26,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EC744C9_8E3A_F647_41DD_3D55904E6621",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -0.77,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F21A4E7_8E3A_F64B_41CA_F0725B0C53EA",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -95.65,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C01B6AE_8E3A_F2DC_41D2_C694CE1B258C",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_t.jpg",
 "label": "lab",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
 "overlays": [
  "this.overlay_60A0DC6E_6FF6_E1CE_41BC_3DAF4075F002",
  "this.overlay_6055C2F0_6FF6_A6D2_41C6_D0504FFB7E8E"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 168.74,
   "distance": 1,
   "backwardYaw": 170.44,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 39.26,
   "distance": 1,
   "backwardYaw": 5.46,
   "panorama": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": -5,
 "partial": false,
 "hfov": 360,
 "vfov": 84.29,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -129.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F4F659D_8E3A_F6FF_41AD_DAEAC02DA32F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -85.68,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C21068D_8E3A_F2DF_41D5_BFA13BFBC1DB",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_t.jpg",
 "label": "163",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
 "overlays": [
  "this.overlay_302D5BD4_20AD_4D85_41B8_F9DD191D9F97"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 141.62,
   "distance": 1,
   "backwardYaw": 163.01,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -9.31,
 "partial": false,
 "vfov": 74.76,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -134.74,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_819982F6_8E3A_F24D_41D9_524176F44D5F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_t.jpg",
 "label": "2ndfloorcoridoor",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
 "overlays": [
  "this.overlay_67D9CD83_72C3_C2E3_41D2_98E01CCB813D",
  "this.overlay_9B312B34_8B2D_3CD0_41D0_5EEFBB2DF4DF",
  "this.overlay_84B384A9_8B2D_D5F1_41D6_45F3BDAC433D",
  "this.overlay_84E76BA7_8B2D_33F0_41C6_8721806B2A43"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 154.2,
   "distance": 1,
   "backwardYaw": -115.33,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": -1.49,
 "partial": false,
 "hfov": 360,
 "vfov": 94.2,
 "hfovMax": 130
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9BCA6D39_8B23_F4D1_41D9_0394666A9A47",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9BCB9D39_8B23_F4D1_41D6_77321FE5A33F"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window10549"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -75.83,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81D43368_8E3A_F245_41D5_2D9EE0795BA3",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_t.jpg",
 "hfovMin": "150%",
 "vfov": 84.7,
 "label": "room2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3",
 "hfovMax": 130,
 "class": "Panorama",
 "hfov": 360,
 "pitch": -2.81,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -64.39,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F8B760C_8E3A_F5DD_41E0_BD37D753BADE",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 4.24,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81837303_8E3A_F3C4_41C2_CC4C94C0A024",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -176.11,
  "pitch": -0.41,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_60C35C53_7035_61D6_41D1_96B6807993FF_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -96.63,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E4F243B_8E3A_F63B_41D6_4FB0FE40D2BD",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 116.78,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FFBB628_8E3A_F5C5_41BB_1627E9A98F84",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_8F61F791_80F2_2E5A_41DE_9E8D5C2A8B81",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_8F63A791_80F2_2E5A_41A9_39698F3758E0"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window7052"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -95.06,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D454198_8E3A_CEC4_41DD_D7B7068F8A83",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9B051F92_8B3D_33D3_41D8_931FAB5D9E75",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9B036F93_8B3D_33D1_41E0_5138BD24631E"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window9882"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -89.03,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E852482_8E3A_F6C5_41DC_6518C0627333",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_t.jpg",
 "label": "G-right",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
 "overlays": [
  "this.overlay_2D8B8F0D_27CE_A58C_41C1_EFF6C48936DD",
  "this.overlay_7376A1CF_7DAA_6C05_41CC_41AE122D490D",
  "this.overlay_2F9AE2D0_2097_5F9E_417F_7C0822DCC9FC",
  "this.overlay_2F7F3A1E_20B6_CE85_41BB_8ECBCD786C87",
  "this.overlay_305E4CEA_2096_CB82_41B7_7E68997D1CF0",
  "this.overlay_910E08EC_8112_63CA_41AD_908057F90911",
  "this.overlay_8EF90182_8112_223F_4196_7ECEC51DA8E5",
  "this.overlay_9333B114_8116_625A_41B8_CB4E512C11C2",
  "this.overlay_855693B3_8ADE_D3D1_41CE_E5D183FB472A"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -29.81,
   "distance": 1,
   "backwardYaw": -20.47,
   "panorama": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 83.37,
   "distance": 1,
   "backwardYaw": 75.91,
   "panorama": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 94.32,
   "distance": 1,
   "backwardYaw": 145,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -175.76,
   "distance": 1,
   "backwardYaw": 90.97,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 163.01,
   "distance": 1,
   "backwardYaw": 141.62,
   "panorama": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -8.38,
 "partial": false,
 "vfov": 63.82,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 115.28,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F03A510_8E3A_F7C5_41C7_F107BDD952F2",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9E631318_8E2B_53C5_41DC_2315BE7AD61B",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9E64F317_8E2B_53CB_41B4_0CC0D1591F40"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window3121"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_t.jpg",
 "label": "lab102.2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
 "overlays": [
  "this.overlay_64E823A1_723F_C6DF_41AE_AC9001E868AA"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -9.38,
   "distance": 1,
   "backwardYaw": 176.49,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -5.16,
 "partial": false,
 "vfov": 65.17,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -174.88,
  "pitch": -8.18,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 97.86,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_818DF329_8E3A_F3C7_41E0_98B38566390B",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_t.jpg",
 "label": "right room",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
 "overlays": [
  "this.overlay_6BD3DF15_78CF_EA8C_41D5_6EBD41E4832C",
  "this.overlay_6A8CE6AE_78CE_BB9C_41DB_EB9AD1803C48"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 68.4,
   "distance": 1,
   "backwardYaw": -94.24,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 140.48,
   "distance": 1,
   "backwardYaw": -94.24,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -5.8,
 "partial": false,
 "vfov": 62.89,
 "hfovMax": 130
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9AED1D6E_8B25_7770_41A3_D352F6C47707",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9AEF5D6E_8B25_7770_41D7_768CE607F4A2"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window19432"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 94.61,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E2C33C2_8E3A_F245_41D2_3DDDC63C3029",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -175.29,
  "pitch": -4.49,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_t.jpg",
 "label": "2ndrightcoridoor",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
 "overlays": [
  "this.overlay_66625856_72CD_C265_41D7_3F8701B00E2D",
  "this.overlay_65369CD6_765C_C265_41D1_54E96BF7AF00",
  "this.overlay_920B99C8_813E_E5CB_41BF_C3BDC0EA19D7",
  "this.overlay_923862F3_813E_27DE_41D7_7CEF8F4B56A6",
  "this.overlay_80BEA872_8E2A_BE45_41C0_F259E5595CDA",
  "this.overlay_9E5E2373_8E2B_524B_41DD_3C673C6B4ECA"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -113.24,
   "distance": 1,
   "backwardYaw": 3.15,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 133.26,
   "distance": 1,
   "backwardYaw": -64.72,
   "panorama": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 123.58,
   "distance": 1,
   "backwardYaw": 47.25,
   "panorama": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 148.88,
   "distance": 1,
   "backwardYaw": -90.51,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": -2.7,
 "partial": false,
 "hfov": 360,
 "vfov": 89.94,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -140.74,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9C6306CC_8E3A_F25D_41BB_3549C57033F3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -104.09,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9EAAB462_8E3A_F645_41BF_646982FD8F9F",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_camera"
  },
  {
   "media": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_camera"
  },
  {
   "media": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_camera"
  },
  {
   "media": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_camera"
  },
  {
   "media": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_camera"
  },
  {
   "media": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_camera"
  },
  {
   "media": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_camera"
  },
  {
   "media": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_camera"
  },
  {
   "media": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_camera"
  },
  {
   "media": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_camera"
  },
  {
   "media": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_camera"
  },
  {
   "media": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_camera"
  },
  {
   "media": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF_camera"
  },
  {
   "media": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_camera"
  },
  {
   "media": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_camera"
  },
  {
   "media": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_camera"
  },
  {
   "media": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_camera"
  },
  {
   "media": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_camera"
  },
  {
   "media": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_camera"
  },
  {
   "media": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_camera"
  },
  {
   "media": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_camera"
  },
  {
   "media": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_camera"
  },
  {
   "media": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_camera"
  },
  {
   "media": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_camera"
  },
  {
   "media": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0_camera"
  },
  {
   "media": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_camera"
  },
  {
   "media": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_camera"
  },
  {
   "media": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_camera"
  },
  {
   "media": "this.panorama_6579408D_7247_42E7_41BC_2A988AD9953C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6579408D_7247_42E7_41BC_2A988AD9953C_camera"
  },
  {
   "media": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_camera"
  },
  {
   "media": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_camera"
  },
  {
   "media": "this.panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_camera"
  },
  {
   "media": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_camera"
  },
  {
   "media": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_camera"
  },
  {
   "media": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_camera"
  },
  {
   "media": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4_camera"
  },
  {
   "media": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_camera"
  },
  {
   "media": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_camera"
  },
  {
   "media": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_camera"
  },
  {
   "media": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_camera"
  },
  {
   "media": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -132.75,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F72C52F_8E3A_F7DC_41C6_9C5CAB6239E2",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -172.42,
  "pitch": 4.85,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 85.76,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 3.75,
    "targetYaw": 4.83,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 81.68,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "linear"
   },
   {
    "yawSpeed": 3.75,
    "targetYaw": 86.51,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D1ED116_8E3A_CFCC_41D6_4BDEE5B5710C",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -115.92,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E27F3AE_8E3A_F2DD_41D9_978296C8161D",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_9052A38B_8116_264E_41D3_EF74C49C4C18",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9050438B_8116_264E_41D9_DD601C32EFF1"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window10259"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_camera",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "id": "window_8F73D14F_80F6_22C5_41B3_51D4F9E9A910",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "closeButtonRollOverIconLineWidth": 1,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_8F7E114F_80F6_22C5_41C0_E53AAC09295F"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "horizontal",
 "layout": "vertical",
 "data": {
  "name": "Window3809"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 73.18,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81B1327E_8E3A_F23C_41D0_C66E1472713E",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -171.6,
  "pitch": -19.22,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -170.34,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9E5E1427_8E3A_F5CB_4197_F79069DF3F39",
 "class": "PanoramaCamera"
},
{
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "thumbnailUrl": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_t.jpg",
 "label": "Entrance1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
 "overlays": [
  "this.overlay_2E0F5BBC_27CE_AC93_4188_ECB314955772"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -170.37,
   "distance": 1,
   "backwardYaw": 9.66,
   "panorama": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 4.85,
 "partial": false,
 "vfov": 81.61,
 "hfovMax": 130
},
{
 "closeButtonBackgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "id": "window_9A1661E3_8B63_4F71_41DA_0C108637127E",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "closeButtonRollOverIconLineWidth": 1,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_9A10A1EB_8B63_4F71_41D0_67DBDEA63BE8"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "horizontal",
 "layout": "vertical",
 "data": {
  "name": "Window3809"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -46.74,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F6C4569_8E3A_F647_41CC_BB0E498F5EF7",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 100.75,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9FB935B1_8E3A_F6C7_41DD_2A8E1FD3AFD0",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_85B8F0B0_8AE5_CDD0_41DC_7F2F78C507E6",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_85BEE0B4_8AE5_CDD0_4186_A3362FAE120B"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window5013"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": 56.11,
  "pitch": -3.68,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": -119.24,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F3164DB_8E3A_F67B_41D0_F4B10F21BEAA",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_91751701_811E_6E3A_41B5_BC02B3447475",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_917546FD_811E_6FCA_41C4_485076B5204A"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window13827"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -174.54,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9D58F183_8E3A_CECB_41DE_59288C84EFB3",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_t.jpg",
 "label": "corridor1",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
 "overlays": [
  "this.overlay_2E01E13C_27CE_FD93_41B0_E300E032BAE9",
  "this.overlay_2E01913D_27CE_FD8D_41B0_F4A692BC5FD2",
  "this.overlay_9495A4E7_8112_23C6_41D9_C30E13F341D4",
  "this.overlay_949BA3B9_8112_E64A_41B7_69393FF5C01E",
  "this.overlay_9C32118D_876E_2245_410D_913B539FFF40",
  "this.overlay_9A662754_8B2D_D350_41B7_F2481D85F6B3"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 25.19,
   "distance": 1,
   "backwardYaw": -23.38,
   "panorama": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 64.08,
   "distance": 1,
   "backwardYaw": 21.79,
   "panorama": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 145,
   "distance": 1,
   "backwardYaw": 94.32,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -25.06,
   "distance": 1,
   "backwardYaw": -85.62,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -0.28,
 "partial": false,
 "vfov": 83.14,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -25.8,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81BB128A_8E3A_F2C5_41C7_CCDFA7F6CDDE",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_t.jpg",
 "label": "room3",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/0/{row}_{column}.jpg",
      "colCount": 17,
      "class": "TiledImageResourceLevel",
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/1/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/2/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/3/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/4/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/5/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/0/{row}_{column}.jpg",
      "colCount": 17,
      "class": "TiledImageResourceLevel",
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/1/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/2/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/3/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/4/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/5/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/0/{row}_{column}.jpg",
      "colCount": 17,
      "class": "TiledImageResourceLevel",
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/1/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/2/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/3/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/4/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/5/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/0/{row}_{column}.jpg",
      "colCount": 17,
      "class": "TiledImageResourceLevel",
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/1/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/2/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/3/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/4/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/5/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/0/{row}_{column}.jpg",
      "colCount": 17,
      "class": "TiledImageResourceLevel",
      "width": 8704,
      "tags": "ondemand",
      "rowCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/1/{row}_{column}.jpg",
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/2/{row}_{column}.jpg",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/3/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/4/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/5/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
 "overlays": [
  "this.overlay_8D9C4032_8348_DCE6_41C9_15041FDC3BEA"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 75.91,
   "distance": 1,
   "backwardYaw": 83.37,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -14.82,
 "partial": false,
 "vfov": 64.97,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -145.8,
  "pitch": -4.87,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_camera",
 "class": "PanoramaCamera"
},
{
 "closeButtonBackgroundColor": [],
 "closeButtonBorderColor": "#000000",
 "id": "window_8488D8C1_8B65_7DB3_4185_C4CCB0AE683B",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "closeButtonRollOverIconLineWidth": 1,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0,
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "title": "",
 "borderSize": 0,
 "titleFontStyle": "normal",
 "closeButtonPressedBackgroundOpacity": 1,
 "headerPaddingRight": 10,
 "bodyBackgroundOpacity": 1,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_848E98C5_8B65_7DB0_41B2_45084EAA07FC"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonBackgroundOpacity": 1,
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "closeButtonBorderSize": 0,
 "closeButtonPaddingBottom": 0,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedBorderColor": "#000000",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonPaddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyPaddingRight": 5,
 "closeButtonPressedBorderSize": 0,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "horizontal",
 "layout": "vertical",
 "data": {
  "name": "Window3809"
 },
 "titleFontFamily": "Arial"
},
{
 "initialPosition": {
  "yaw": -64.39,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_9F9B35EE_8E3A_F65D_41DC_67148CB3278C",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_t.jpg",
 "label": "Entrance2",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
 "overlays": [
  "this.overlay_2D623BF2_27CE_EC97_41B8_69B15940F49C",
  "this.overlay_2D622BF2_27CE_EC97_41B7_707F7B7133BB",
  "this.overlay_8703B6CA_8AE3_55B3_41DC_E8A69D16418F"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 9.66,
   "distance": 1,
   "backwardYaw": -170.37,
   "panorama": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -0.13,
 "partial": false,
 "vfov": 81.06,
 "hfovMax": 130
},
{
 "closeButtonBackgroundColor": [],
 "id": "window_8144ADA3_8E2A_D6CB_41D2_A7B8B835C7B6",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "scrollBarMargin": 2,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "titlePaddingRight": 5,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "headerBorderSize": 0,
 "minHeight": 20,
 "titlePaddingTop": 5,
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "height": 600,
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "titleFontColor": "#000000",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "backgroundColor": [],
 "shadowHorizontalLength": 3,
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "headerPaddingRight": 10,
 "title": "",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "headerPaddingLeft": 10,
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "footerHeight": 5,
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "bodyBorderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBorderRadius": 11,
 "children": [
  "this.htmlText_81446DA3_8E2A_D6CB_41DD_A4BE01FCF0BB"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "borderRadius": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingTop": 10,
 "titleFontSize": "1.29vmin",
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "headerPaddingBottom": 10,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "titlePaddingLeft": 5,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "bodyBorderSize": 0,
 "shadowSpread": 1,
 "headerBackgroundColorDirection": "vertical",
 "layout": "vertical",
 "data": {
  "name": "Window3121"
 },
 "titleFontFamily": "Arial"
},
{
 "thumbnailUrl": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_t.jpg",
 "label": "162",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/0/{row}_{column}.jpg",
      "colCount": 14,
      "class": "TiledImageResourceLevel",
      "width": 7168,
      "tags": "ondemand",
      "rowCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/1/{row}_{column}.jpg",
      "colCount": 7,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/2/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
 "overlays": [
  "this.overlay_2E47963C_209B_C686_41BF_A176F5C8EEDB"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": -20.47,
   "distance": 1,
   "backwardYaw": -29.81,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": -7.96,
 "partial": false,
 "vfov": 74.52,
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -154.81,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_81EFE35E_8E3A_F27C_41D5_619EAE81B7C3",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_t.jpg",
 "label": "ground coridoor stairs",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_9CF4C929_876E_624D_41DC_0769C9491F92",
 "overlays": [
  "this.overlay_9D9EF786_8776_6E47_4194_18CD109E014E",
  "this.overlay_85D472E3_8AE5_4D70_41D6_FCCA8670A9A3",
  "this.overlay_9A668BAE_8AE7_53F0_4191_B174BE73E392",
  "this.overlay_85AC9137_8AE5_CCD0_41BC_148E9963C030"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "yaw": 21.79,
   "distance": 1,
   "backwardYaw": 64.08,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "vfov": 64.38,
 "hfovMax": 130
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 1900,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -173.51,
   "hfov": 15.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD542DB_6FEF_66D6_41BC_64852276CDD4",
   "pitch": -9.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -173.51,
   "hfov": 15.2,
   "distance": 100
  }
 ],
 "id": "overlay_6057515A_6FF2_E3D6_41CB_9577DD48D455",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 5.46,
   "hfov": 16.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7CD4B2DB_6FEF_66D6_41CC_715E40B0D18D",
   "pitch": -15.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.46,
   "hfov": 16.83,
   "distance": 100
  }
 ],
 "id": "overlay_7FE3BEF8_6FF3_9ED2_41CA_F4E9C9BAB020",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C, this.camera_9C6306CC_8E3A_F25D_41BB_3549C57033F3); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 47.25,
   "hfov": 12.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_999A6408_8136_224B_41D6_D6717CF937AA",
   "pitch": -6.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 47.25,
   "hfov": 12.91,
   "distance": 100
  }
 ],
 "id": "overlay_953A215D_8132_22C5_41CF_FD7BB5A2148D",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_81C0737C_8E3A_F23D_41D1_39BC4852B01D); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 3.15,
   "hfov": 16.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602022CA_78CA_5B84_41D8_0E85F119521B",
   "pitch": -26.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.15,
   "hfov": 16.11,
   "distance": 100
  }
 ],
 "id": "overlay_6854E312_78CE_5A84_41DC_30A4C479169B",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_9CAE2726_8E3A_F3CD_4198_393EF9C4741D); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -94.24,
   "hfov": 7.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6021A2CA_78CA_5B84_41D9_D7485563227F",
   "pitch": -4.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -94.24,
   "hfov": 7.17,
   "distance": 100
  }
 ],
 "id": "overlay_6803A47B_78C6_5F7B_41C1_6A052BD688F2",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4, this.camera_9C4E3706_8E3A_F3CD_41C8_3C7E3322CF76); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -127.2,
   "hfov": 7.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6021D2CA_78CA_5B84_41BA_BE06E010CEAA",
   "pitch": -5.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -127.2,
   "hfov": 7.16,
   "distance": 100
  }
 ],
 "id": "overlay_69AFD036_78CA_568C_41BF_B01840300243",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53, this.camera_9C5C56F4_8E3A_F24D_41E0_63A7EEC6C85D); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -64.87,
   "hfov": 7.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9E2DBB58_8312_66CA_41BF_56F1EABB02F5",
   "pitch": -4.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -64.87,
   "hfov": 7.17,
   "distance": 100
  }
 ],
 "id": "overlay_94935385_8316_2645_41CB_96A355BE371C",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173, this.camera_9C6C56E0_8E3A_F245_4196_475EAADB5D3D); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 84.35,
   "hfov": 7.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9E2D0B59_8312_66CA_41BD_253DE246B04B",
   "pitch": -6.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.35,
   "hfov": 7.15,
   "distance": 100
  }
 ],
 "id": "overlay_946C7F8E_8316_7E46_41D7_70F5CE35512A",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE, this.camera_9CBE3712_8E3A_F3C5_41E1_5C2FD5C52C88); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9A0D6570_8B22_D750_41BE_D81891BE9E5B",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Faculty Office</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText11208"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -109.56,
   "hfov": 12.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602142CA_78CA_5B84_41B7_8BBDCC794071",
   "pitch": -5.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -109.56,
   "hfov": 12.23,
   "distance": 100
  }
 ],
 "id": "overlay_6AA92E5C_78C9_EABC_41C1_C794B9FFD48E",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9E19F3D6_8E3A_F24D_41C1_32441A579C72); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -43.21,
   "hfov": 9.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602EC2CA_78CA_5B84_4193_909C86471BC6",
   "pitch": -2.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.21,
   "hfov": 9.82,
   "distance": 100
  }
 ],
 "id": "overlay_6AF5D2A2_78CE_BB85_41D1_D188597B1E20",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9E0513E9_8E3A_F244_41A3_83523F26DA33); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 159.11,
   "hfov": 21.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C26848_7244_C26D_41C1_B3A2C3F7384D",
   "pitch": -21.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.11,
   "hfov": 21.32,
   "distance": 100
  }
 ],
 "id": "overlay_612CC06F_72CD_C223_41C2_56DE8B6299F2",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2, this.camera_9DB2F1AD_8E3A_CEDF_41D5_30443FD6C8F9); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -106.82,
   "hfov": 17.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C2D848_7244_C26D_418C_EBE7E276B59C",
   "pitch": -23.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -106.82,
   "hfov": 17.07,
   "distance": 100
  }
 ],
 "id": "overlay_62C7CA2E_72CC_C625_41D6_44B5A63D6A34",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_9D454198_8E3A_CEC4_41DD_D7B7068F8A83); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -85.39,
   "hfov": 12.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6677999B_7243_C2E3_41A2_AE213968F862",
   "pitch": -19.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.39,
   "hfov": 12.38,
   "distance": 100
  }
 ],
 "id": "overlay_65923DA3_7245_C223_41D1_FE1BFE70C46D",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328, this.camera_9DA3A1C0_8E3A_CE45_4189_4986224514B0); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9ADC173B_8AE5_34D0_41DA_8427FD200960",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>This is admin office.</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText5014"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 179.23,
   "hfov": 6.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_604AA761_6FD2_EFF2_41C2_16AD244CB609",
   "pitch": -17.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.23,
   "hfov": 6.19,
   "distance": 100
  }
 ],
 "id": "overlay_62A03976_6FD3_E3DE_41C1_FDC5CDF26976",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_81ABA2C4_8E3A_F24D_41D9_4E77D4EC7AAD); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -63.22,
   "hfov": 7.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6257BD30_702E_A352_41B3_607E6A8F1721",
   "pitch": -21.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.22,
   "hfov": 7.66,
   "distance": 100
  }
 ],
 "id": "overlay_620CCBA2_702F_E776_41C1_50B308F2F3C6",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0, this.camera_81AD02D0_8E3A_F245_41D3_9AB74BDCC911); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -15.87,
   "hfov": 16.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E0DF243_6DFC_C663_41D8_D022C3A2240D",
   "pitch": -0.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -15.87,
   "hfov": 16.53,
   "distance": 100
  }
 ],
 "id": "overlay_7DF4AF74_6DC5_FE25_41CB_C3D88A6FA1A8",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613, this.camera_819072E4_8E3A_F24D_41DA_546A3B20841F); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 2.25,
   "hfov": 6.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 2.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_4_0.png",
      "width": 67,
      "height": 64,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.95
  }
 ],
 "id": "overlay_8EAA60C8_80F2_23CB_41DA_7B476039300E",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_8E966203_80FE_263E_41B1_694812EFF1F6, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -53.8,
   "hfov": 5.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -53.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_5_0.png",
      "width": 51,
      "height": 60,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.32
  }
 ],
 "id": "overlay_8F5B5199_80F6_224A_41AC_8DD7589ACFB7",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_8F73D14F_80F6_22C5_41B3_51D4F9E9A910, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 109.7,
   "hfov": 6.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 109.7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_6_0.png",
      "width": 67,
      "height": 64,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.95
  }
 ],
 "id": "overlay_84FFE94D_8B65_7CB0_41C5_7919F36BE326",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_8488D8C1_8B65_7DB3_4185_C4CCB0AE683B, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 134.26,
   "hfov": 6.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 134.26,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_7_0.png",
      "width": 67,
      "height": 64,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.95
  }
 ],
 "id": "overlay_9B3442C2_8B63_4DB0_41D2_77EAA00990C6",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9A1661E3_8B63_4F71_41DA_0C108637127E, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -85.62,
   "hfov": 9.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_8_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_83B8F544_8E2A_D64C_41B6_2ED8CFA2BA28",
   "pitch": -15.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.62,
   "hfov": 9.94,
   "distance": 100
  }
 ],
 "id": "overlay_9B697C42_8B5F_34B3_41D5_D6888052EC6C",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_81A062B2_8E3A_F2C5_41C4_4EAF4E2A6E33); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_99B6C2EA_8B25_4D70_41BC_D0072CFF3553",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Exam Office </B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText19433"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 60.76,
   "hfov": 16.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_658895FF_7033_A2CE_41B5_5686CE0997A5",
   "pitch": -20.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 60.76,
   "hfov": 16.8,
   "distance": 100
  }
 ],
 "id": "overlay_61118D3D_7037_E352_41DB_D9CAFC4E92D4",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_9D72713C_8E3A_CE3D_41A8_B403A4B85D2C); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -172.48,
   "hfov": 20.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_659745FF_7033_A2CE_41D2_FC9AB5CE0BDC",
   "pitch": -16.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.48,
   "hfov": 20.72,
   "distance": 100
  }
 ],
 "id": "overlay_611F8621_7035_6172_41D7_6BFE4C4F7884",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA, this.camera_9D78F151_8E3A_CE47_41C5_89653E7B18F9); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_91F3EFD7_8112_7DC5_41B9_67DB4264CEAF",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>FACULTY OFFICE</B></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Sr Waseem Ahmed</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Mudassar Ali</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Hassan Zaidi</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Muhammad Fahad</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText10260"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -82.14,
   "hfov": 6.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_74EBF32A_65B3_BB6E_41B7_2D785927695F",
   "pitch": 9.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -82.14,
   "hfov": 6.41,
   "distance": 100
  }
 ],
 "id": "overlay_755DB10D_65B5_772B_41C4_00F2A279D95A",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_9F5E957F_8E3A_F63B_41E1_08F5860F128E); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -144.95,
   "hfov": 5.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_74EA232A_65B3_BB6E_419F_527EFEA376BE",
   "pitch": 9.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -144.95,
   "hfov": 5.71,
   "distance": 100
  }
 ],
 "id": "overlay_74FCDDDB_65B2_AF2F_41D4_69CA87397091",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_9F4F659D_8E3A_F6FF_41AD_DAEAC02DA32F); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 64.27,
   "hfov": 7.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_0_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB4636_27CE_679C_41B5_D2D577829786",
   "pitch": -4.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 64.27,
   "hfov": 7.62,
   "distance": 50
  }
 ],
 "id": "overlay_2E1CDA60_27CE_AFB4_41A5_F7426B7FECE0",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_81D43368_8E3A_F245_41D5_2D9EE0795BA3); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -23.38,
   "hfov": 4.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B57531C_5541_95E3_41AF_0DD511DB92A6",
   "pitch": -35.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -23.38,
   "hfov": 4.56,
   "distance": 100
  }
 ],
 "id": "overlay_58B8AED6_5546_AC6F_41B6_7E26E95B3B8B",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_81EFE35E_8E3A_F27C_41D5_619EAE81B7C3); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -128.09,
   "hfov": 8.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_330BC3FC_209F_5D86_41AE_F461D94B2853",
   "pitch": -1.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -128.09,
   "hfov": 8.23,
   "distance": 100
  }
 ],
 "id": "overlay_330B46B1_2096_C79E_414D_EE196269949D",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_81CDC390_8E3A_F2C5_41DF_1189E3DAF9B0); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -50.95,
   "hfov": 8.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_330BA3FC_209F_5D86_41A1_C6271D6C346D",
   "pitch": 0.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -50.95,
   "hfov": 8.31,
   "distance": 100
  }
 ],
 "id": "overlay_34F412D5_209B_5F87_41B7_5D443005399A",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_9E3A13A3_8E3A_F2CB_41D0_8E1F875F9FE7); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 115.61,
   "hfov": 8.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73F773D8_65DE_DB29_41D6_5DECD0CA123C",
   "pitch": 0.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.61,
   "hfov": 8.79,
   "distance": 100
  }
 ],
 "id": "overlay_6A97DFD8_65BF_AB2A_41C3_3E50220C5DA6",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A, this.camera_819982F6_8E3A_F24D_41D9_524176F44D5F); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 137.87,
   "hfov": 13.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7388F3D8_65DE_DB29_41D3_E661C0F6773E",
   "pitch": 0.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 137.87,
   "hfov": 13.62,
   "distance": 100
  }
 ],
 "id": "overlay_6A36C49D_65BD_DD2A_41C4_B37802ADF778",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965, this.camera_81F47335_8E3A_F3CF_41D1_4E67E42CBF20); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 50.86,
   "hfov": 14.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_738883D8_65DE_DB29_41D8_0BD42A5DFC3C",
   "pitch": 0.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 50.86,
   "hfov": 14.03,
   "distance": 100
  }
 ],
 "id": "overlay_6A77C71E_65B3_7B26_41D2_00F45DD39300",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6, this.camera_8186B317_8E3A_F3CB_41D0_93AF3C33E738); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -87.18,
   "hfov": 10.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_738833D8_65DE_DB29_41D8_13C704DE6E4B",
   "pitch": -0.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.18,
   "hfov": 10.34,
   "distance": 100
  }
 ],
 "id": "overlay_778A81BE_65D5_7766_41C5_A6B5B445518E",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6, this.camera_818DF329_8E3A_F3C7_41E0_98B38566390B); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -136.74,
   "hfov": 8.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7389C3D8_65DE_DB29_41D6_08F78DF82023",
   "pitch": -5.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -136.74,
   "hfov": 8.67,
   "distance": 100
  }
 ],
 "id": "overlay_77AC7450_65D6_DD39_4194_F5631E76AD62",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965, this.camera_81E15349_8E3A_F247_41BF_41C8ECD27AAA); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 149.15,
   "hfov": 6.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 149.15,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_5_0.png",
      "width": 77,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.92,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.74
  }
 ],
 "id": "overlay_93B90AB1_8112_265A_41C4_6131B4DE8977",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_93781399_8112_264D_41B4_F8F1B66BD413, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 33.34,
   "hfov": 6.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 33.34,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_6_0.png",
      "width": 77,
      "height": 85,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.74
  }
 ],
 "id": "overlay_91D3D869_811E_E2CA_41A8_A017BDE58671",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_91C357FE_811E_EDC6_41D7_215DACA0E05F, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 107.98,
   "hfov": 4.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 107.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_7_0.png",
      "width": 52,
      "height": 64,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.54
  }
 ],
 "id": "overlay_93036C95_811F_E25A_41CD_F1911FDFB525",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_90E07BEC_811F_E5CA_41D0_BD62A705D18A, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 75.24,
   "hfov": 4.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 75.24,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_8_0.png",
      "width": 52,
      "height": 64,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.54
  }
 ],
 "id": "overlay_9185B75D_811E_6ECA_41B3_20BE41C05B02",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_91751701_811E_6E3A_41B5_BC02B3447475, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 90.97,
   "hfov": 14.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_9_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9593FA4E_816F_E6C6_41D7_975389A24AB6",
   "pitch": -20.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90.97,
   "hfov": 14.28,
   "distance": 100
  }
 ],
 "id": "overlay_9091F2C0_812E_663A_41DD_7F9ECB63A616",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_81837303_8E3A_F3C4_41C2_CC4C94C0A024); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 93.93,
   "hfov": 19.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_618A54DB_7033_E2D7_41D2_0835F93B2AFC",
   "pitch": -13.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.93,
   "hfov": 19.82,
   "distance": 100
  }
 ],
 "id": "overlay_61BB297B_7032_E3D6_41D3_E7B64B6A14DE",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF, this.camera_9FE5463F_8E3A_F23C_41D1_4E203DB1F20E); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -106.4,
   "hfov": 14.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.76,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_951D0689_8312_2E4D_41C8_79BF60528510",
   "pitch": 1.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -106.4,
   "hfov": 14.49,
   "distance": 100
  }
 ],
 "id": "overlay_95125FF4_831E_1DDA_41BF_BE87B4B04A2C",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9C01B6AE_8E3A_F2DC_41D2_C694CE1B258C); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -43.54,
   "hfov": 13.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_951D668A_8312_2E4F_41C9_33E2523F64DC",
   "pitch": 2.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.54,
   "hfov": 13.25,
   "distance": 100
  }
 ],
 "id": "overlay_9569899C_8312_224A_41DA_9C6E5EAF6507",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9C72D6C2_8E3A_F245_41DA_01424B9DAB0F); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -125.17,
   "hfov": 20.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6184AFB6_6FF6_BF5E_41A1_EB310FF5615A",
   "pitch": -34.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -125.17,
   "hfov": 20.75,
   "distance": 100
  }
 ],
 "id": "overlay_618446F2_6FF2_EED6_41BB_34A5952BEDF6",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF, this.camera_9F3164DB_8E3A_F67B_41D0_F4B10F21BEAA); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 170.44,
   "hfov": 13.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_61273346_6FFE_A73E_41D1_A23BB5C8F892",
   "pitch": -36.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 170.44,
   "hfov": 13.57,
   "distance": 100
  }
 ],
 "id": "overlay_6176939F_6FFF_A74E_41D0_8D9F295097C2",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C, this.camera_9EC744C9_8E3A_F647_41DD_3D55904E6621); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 21.03,
   "hfov": 17.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_2_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_613B096B_6FF2_A3F6_41D3_D4564C949377",
   "pitch": -16.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 21.03,
   "hfov": 17.21,
   "distance": 100
  }
 ],
 "id": "overlay_60C9DA1B_6FF3_A156_41B4_A22292FB47BC",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_9F21A4E7_8E3A_F64B_41CA_F0725B0C53EA); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -153.99,
   "hfov": 6.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -153.99,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_3_0.png",
      "width": 450,
      "height": 582,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.92
  }
 ],
 "id": "overlay_8F56D9CD_80F2_E5CA_41DF_E2E4BF90FA4B",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_8F61F791_80F2_2E5A_41DE_9E8D5C2A8B81, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_8E963203_80FE_263E_41D4_06402CC4A65A",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is Gaming Lab for students</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3810"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_99D67374_8B2D_5357_41D7_50A9995C46C8",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Girls Common Room</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText21951"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_93074083_8116_623E_41D8_71C93AB6BA46",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 163</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText11392"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -112.69,
   "hfov": 10.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91D99840_86AB_FC7B_41DF_A6C5BA796AC4",
   "pitch": -24.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -112.69,
   "hfov": 10.69,
   "distance": 100
  }
 ],
 "id": "overlay_70307665_7DA6_1404_41BD_E3D3BBA20DC6",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_847C0B46_8AE3_3CB0_41E0_DCE9CA457047",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is Department of CS &amp; IT. Ground floor is for Computer Science and 1st for Information technology . CS contains 3 labs and 6 rooms. IT contains also 3 labs and 7 rooms. Every department have separate Exam office,staff offices, common room and refreshment rooms</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3029"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9A798B2C_8AE7_5CF0_41C8_CD820ADF03D8",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Dr Hafiz Faisal ( Chairman of the CS Department)</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText5014"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9AC326BD_8B2F_35D0_41E1_1A8560F0C5DC",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB LAB 101 </B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB LAB 102</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText21951"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 58.98,
   "hfov": 7.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7D6FE93F_6DC3_4223_41D5_DB630CB04F32",
   "pitch": -3.83,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 58.98,
   "hfov": 7.76,
   "distance": 100
  }
 ],
 "id": "overlay_7D6F2A04_6DFF_41E5_41C2_8816C37AFAA2",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_9E7753F5_8E3A_F24C_41D7_858D91231A6F); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 45.26,
   "hfov": 9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73F603D4_65DE_DB39_41D8_B97831B22AB7",
   "pitch": 2.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 45.26,
   "hfov": 9,
   "distance": 100
  }
 ],
 "id": "overlay_7749B0BD_65D6_D56B_41C7_7ABEA5F55642",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_9F9B35EE_8E3A_F65D_41DC_67148CB3278C); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -17.81,
   "hfov": 3.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73F7D3D4_65DE_DB39_41CE_AAE5E6855923",
   "pitch": 0.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.81,
   "hfov": 3.49,
   "distance": 100
  }
 ],
 "id": "overlay_7731F521_65D2_DF1A_41C2_F3E7CF28AB5D",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_9F8B760C_8E3A_F5DD_41E0_BD37D753BADE); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_937A039D_8112_2645_41CD_7183A7E1C312",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 165</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText13828"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_91C767FA_811E_EDCE_41CF_65993588ACB5",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 164</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText13828"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_90E1DBE5_811F_E5C5_41CE_CCF678CC563E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB CONFERENCE ROOM</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText13828"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9A66338B_8B2D_53B0_41C6_9B971507FB42",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">On the right side MAB CR 161 to MAB-CR 165</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText17823"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_930A7FED_8116_7DCA_41CC_FFC200A7DF91",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 162</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText11392"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 90.85,
   "hfov": 15.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_97ED9480_8136_623B_41D7_FEFEBEE93093",
   "pitch": 14.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90.85,
   "hfov": 15.32,
   "distance": 100
  }
 ],
 "id": "overlay_925B6DE7_8136_3DC6_41B4_EA198C47EA46",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_9E2C33C2_8E3A_F245_41D2_3DDDC63C3029); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 69.01,
   "hfov": 8.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_951A9688_8312_2E4B_41BD_84C686278BE2",
   "pitch": 2.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 69.01,
   "hfov": 8.18,
   "distance": 100
  }
 ],
 "id": "overlay_95D004F3_831E_E3DD_41A4_751587969106",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9EE714A9_8E3A_F6C4_41CB_666F01943DDC); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 142.73,
   "hfov": 8.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_951AC688_8312_2E4B_4192_A4BA8A2994F4",
   "pitch": 2.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 142.73,
   "hfov": 8.19,
   "distance": 100
  }
 ],
 "id": "overlay_9A2E427F_831F_E6C6_41D2_558351D2B508",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9ED774B5_8E3A_F6CF_41C6_F0B73C8D3613); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 60.58,
   "hfov": 13.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66CCB848_7244_C26D_41BB_FEC240383672",
   "pitch": -29.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 60.58,
   "hfov": 13.82,
   "distance": 100
  }
 ],
 "id": "overlay_63E529C5_72C3_4267_41D8_62C5880B7C03",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2, this.camera_9FB935B1_8E3A_F6C7_41DD_2A8E1FD3AFD0); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 176.49,
   "hfov": 15.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66CD2848_7244_C26D_41BA_9141058AC125",
   "pitch": -29.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 176.49,
   "hfov": 15.92,
   "distance": 100
  }
 ],
 "id": "overlay_6432FAD2_72C3_467D_41D4_9CF6239DAB9A",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1, this.camera_9FA965D0_8E3A_F645_41D9_3B07F496B2CB); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 78.87,
   "hfov": 16.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C32848_7244_C26D_41D0_D33553A197BC",
   "pitch": -26.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 78.87,
   "hfov": 16.88,
   "distance": 100
  }
 ],
 "id": "overlay_62A9550E_72C4_C3E5_41CA_485470CFFD35",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_81A8A7BD_8E3A_F23F_41C0_83334EF7DE5E); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -79.25,
   "hfov": 12.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C39848_7244_C26D_41DB_085476A99441",
   "pitch": -1.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -79.25,
   "hfov": 12.28,
   "distance": 100
  }
 ],
 "id": "overlay_637C86D9_72C4_CE6F_41D0_A8AEB8F2290F",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_9C8F474D_8E3A_F25C_41D7_6EDA56CF9B12); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -114.88,
   "hfov": 12.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_83B6355D_8E2A_D67F_41D0_2A4CB97EC859",
   "pitch": -1.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -114.88,
   "hfov": 12.28,
   "distance": 100
  }
 ],
 "id": "overlay_9945CEA8_8B23_D5FF_41D8_3D65598F7B91",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_9CF8F759_8E3A_F244_41E0_BC440153444F); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -16.38,
   "hfov": 8.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_4_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -16.38,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_4_0.png",
      "width": 507,
      "height": 459,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.6
  }
 ],
 "id": "overlay_9A148AC1_8B22_DDB0_41D8_8934EF2A6CCC",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9AED1D6E_8B25_7770_41A3_D352F6C47707, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -164.64,
   "hfov": 8.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_5_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -164.64,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_5_0.png",
      "width": 507,
      "height": 459,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.57
  }
 ],
 "id": "overlay_9A5113D4_8B25_5350_41C5_CB171ECE712C",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_998C32E5_8B25_4D70_41D9_97BA619E7A5F, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -39.6,
   "hfov": 14.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA0E1744_AB8C_CFCB_41AF_4BE2DAD80CD8",
   "pitch": -16.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.6,
   "hfov": 14.5,
   "distance": 100
  }
 ],
 "id": "overlay_A67546E7_AB8C_4ED4_41CA_09A559A3AF75",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47, this.camera_9DAD01D4_8E3A_CE4D_41C5_9E5235CD6B13); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 104.17,
   "hfov": 15.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B57D31C_5541_95E3_41CD_B3D801DEC717",
   "pitch": -18.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 104.17,
   "hfov": 15.43,
   "distance": 100
  }
 ],
 "id": "overlay_581356E7_5543_BC2D_41D3_1067E1CAA752",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E, this.camera_814E126B_8E3A_F25B_41CF_C9352C4738A4); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 84.94,
   "hfov": 18.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_99F223DD_8136_25CA_41DF_1E9EBA38A755",
   "pitch": -11.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.94,
   "hfov": 18.43,
   "distance": 100
  }
 ],
 "id": "overlay_6155A733_72C3_CE23_41CA_96783A0F5A35",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_81B1327E_8E3A_F23C_41D0_C66E1472713E); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -90.51,
   "hfov": 13.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66F2BF21_72C7_7FDF_41BC_B2E06D4108CB",
   "pitch": -12.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90.51,
   "hfov": 13.97,
   "distance": 100
  }
 ],
 "id": "overlay_6768CCFD_72DC_C227_41D0_30ABBF7555DC",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_81BEB29E_8E3A_F2FD_41D8_597183E00EBA); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -115.33,
   "hfov": 17.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_4_0_0_map.gif",
      "width": 29,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66F22F21_72C7_7FDF_41C7_1B515F89D7AB",
   "pitch": -28.98,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -115.33,
   "hfov": 17.12,
   "distance": 50
  }
 ],
 "id": "overlay_6955A86A_72C5_C22D_41DC_240C10260780",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922, this.camera_81BB128A_8E3A_F2C5_41C7_CCDFA7F6CDDE); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -63.47,
   "hfov": 6.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -63.47,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_5_0.png",
      "width": 59,
      "height": 63,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.14
  }
 ],
 "id": "overlay_9A950EB0_8B2D_35EF_41DE_2E9BAD5F58D1",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_99D47374_8B2D_5357_41D6_6F850F6E5767, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 99.54,
   "hfov": 6.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 99.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_6_0.png",
      "width": 59,
      "height": 63,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.17
  }
 ],
 "id": "overlay_9AFBA737_8B2F_34D1_41E0_13CF7F50098A",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9AC5E6B9_8B2F_35D0_41C5_EB5BBA2C386B, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -45.26,
   "hfov": 7.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E3C41E5_6FD2_A2F3_41C5_5528FA74BA28",
   "pitch": -7.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -45.26,
   "hfov": 7.08,
   "distance": 100
  }
 ],
 "id": "overlay_7FA80A1D_6FED_6152_41D0_915457C0472D",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -64.72,
   "hfov": 13.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_999AC408_8136_224B_41DD_392C9B7107A6",
   "pitch": 0.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -64.72,
   "hfov": 13.5,
   "distance": 100
  }
 ],
 "id": "overlay_94FA217B_8136_22CE_41DF_978D12B255E8",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_9F6C4569_8E3A_F647_41CC_BB0E498F5EF7); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -129.47,
   "hfov": 13.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_1_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_BA0F6745_AB8C_CFD5_41E5_3958CE687D57",
   "pitch": -12.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -129.47,
   "hfov": 13.19,
   "distance": 100
  }
 ],
 "id": "overlay_A5F03DCD_AB8C_42D4_41E3_EF335D747B4B",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_9D119105_8E3A_CFCF_41CA_402537A125B4); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 29.69,
   "hfov": 12.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_623D6446_6DC5_4265_41D8_D156A0ECF425",
   "pitch": -2.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 29.69,
   "hfov": 12.28,
   "distance": 100
  }
 ],
 "id": "overlay_62660C43_6DC4_C263_41D3_3E8F8E668547",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_9FFBB628_8E3A_F5C5_41BB_1627E9A98F84); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 39.26,
   "hfov": 19.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7EDB20AA_6FF2_A176_41D6_3C14DF671036",
   "pitch": -21.6,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 39.26,
   "hfov": 19.31,
   "distance": 100
  }
 ],
 "id": "overlay_60A0DC6E_6FF6_E1CE_41BC_3DAF4075F002",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6, this.camera_9D58F183_8E3A_CECB_41DE_59288C84EFB3); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 168.74,
   "hfov": 12.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7EDAF0AA_6FF2_A176_4135_F456FF20AC30",
   "pitch": -26.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 168.74,
   "hfov": 12.15,
   "distance": 100
  }
 ],
 "id": "overlay_6055C2F0_6FF6_A6D2_41C6_D0504FFB7E8E",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_9D53C177_8E3A_CE4B_41DE_AF9C2A9EB88B); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 141.62,
   "hfov": 11.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_300B3A44_20AB_CE85_415F_5C619EF42DC6",
   "pitch": -3.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 141.62,
   "hfov": 11.28,
   "distance": 100
  }
 ],
 "id": "overlay_302D5BD4_20AD_4D85_41B8_F9DD191D9F97",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_9C9F573B_8E3A_F3C4_41DA_AADAA7B38F62); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 154.2,
   "hfov": 15.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6B8D57FE_72CF_4E25_419F_E56C3EE4BE0F",
   "pitch": -29.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 154.2,
   "hfov": 15.65,
   "distance": 100
  }
 ],
 "id": "overlay_67D9CD83_72C3_C2E3_41D2_98E01CCB813D",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_9FD59653_8E3A_F24B_41DE_349729C41318); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 92.76,
   "hfov": 12.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 92.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_1_0.png",
      "width": 218,
      "height": 218,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.29
  }
 ],
 "id": "overlay_9B312B34_8B2D_3CD0_41D0_5EEFBB2DF4DF",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9B051F92_8B3D_33D3_41D8_931FAB5D9E75, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 6.14,
   "hfov": 11.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 6.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_2_0.png",
      "width": 196,
      "height": 181,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.05
  }
 ],
 "id": "overlay_84B384A9_8B2D_D5F1_41D6_45F3BDAC433D",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9BCA6D39_8B23_F4D1_41D9_0394666A9A47, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -86.21,
   "hfov": 9.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -86.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_3_0.png",
      "width": 174,
      "height": 188,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.8
  }
 ],
 "id": "overlay_84E76BA7_8B2D_33F0_41C6_8721806B2A43",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9A0D356F_8B22_D770_41C4_E25F69FBC9A9, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9BCB9D39_8B23_F4D1_41D6_77321FE5A33F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Head of Department Office</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText10550"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_8F63A791_80F2_2E5A_41A9_39698F3758E0",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">MAB-Smart Lab is on the right side </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">MAB-Lab 1 is on the left side</SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText7053"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9B036F93_8B3D_33D1_41E0_5138BD24631E",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Admin office of IT Department</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText9883"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 94.32,
   "hfov": 5.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB6637_27CE_679C_41BB_1B15208287E2",
   "pitch": -2.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 94.32,
   "hfov": 5.3,
   "distance": 100
  }
 ],
 "id": "overlay_2D8B8F0D_27CE_A58C_41C1_EFF6C48936DD",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_9E9AF46E_8E3A_F65D_41C1_525F328A589E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 83.37,
   "hfov": 5.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_3_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_91DD483D_86AB_FC05_41BB_FAD345916D60",
   "pitch": -9.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 83.37,
   "hfov": 5.68,
   "distance": 100
  }
 ],
 "id": "overlay_7376A1CF_7DAA_6C05_41CC_41AE122D490D",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -29.81,
   "hfov": 20.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31AF709F_2095_DB82_41A0_08A1BFA42A8E",
   "pitch": -6.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -29.81,
   "hfov": 20.33,
   "distance": 100
  }
 ],
 "id": "overlay_2F9AE2D0_2097_5F9E_417F_7C0822DCC9FC",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453, this.camera_9EB98450_8E3A_F645_41D5_7203A9D92758); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 163.01,
   "hfov": 14.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_5_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_31EE65DA_20B7_C58D_41B4_8A3334FDFA98",
   "pitch": -28.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 163.01,
   "hfov": 14.22,
   "distance": 100
  }
 ],
 "id": "overlay_2F7F3A1E_20B6_CE85_41BB_8ECBCD786C87",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB, this.camera_9EF57496_8E3A_F6CD_41C7_7E85BBBD9553); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -175.76,
   "hfov": 13.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_6_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3208D456_2095_FA85_41BD_923A8DF60131",
   "pitch": -20.44,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.76,
   "hfov": 13.32,
   "distance": 100
  }
 ],
 "id": "overlay_305E4CEA_2096_CB82_41B7_7E68997D1CF0",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_9E852482_8E3A_F6C5_41DC_6518C0627333); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -11.47,
   "hfov": 6.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 18,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -11.47,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_7_0.png",
      "width": 68,
      "height": 80,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.92
  }
 ],
 "id": "overlay_910E08EC_8112_63CA_41AD_908057F90911",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9052A38B_8116_264E_41D3_EF74C49C4C18, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 77.61,
   "hfov": 5.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 77.61,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_8_0.png",
      "width": 56,
      "height": 76,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.73
  }
 ],
 "id": "overlay_8EF90182_8112_223F_4196_7ECEC51DA8E5",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_930A9FED_8116_7DCA_41D6_95238BB60789, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 150.1,
   "hfov": 5.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 21,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 150.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_9_0.png",
      "width": 56,
      "height": 76,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.72
  }
 ],
 "id": "overlay_9333B114_8116_625A_41B8_CB4E512C11C2",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_93065083_8116_623E_41B6_8DC2B5569A6D, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -150.1,
   "hfov": 6.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 19,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -150.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_11_0.png",
      "width": 64,
      "height": 76,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.54
  }
 ],
 "id": "overlay_855693B3_8ADE_D3D1_41CE_E5D183FB472A",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_91F7DFD7_8112_7DC5_41B9_4AB894ED5BF1, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9E64F317_8E2B_53CB_41B4_0CC0D1591F40",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Faculty Office</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3122"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -9.38,
   "hfov": 16.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66CC2848_7244_C26D_41C8_A62BE351C742",
   "pitch": -26.66,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -9.38,
   "hfov": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_64E823A1_723F_C6DF_41AE_AC9001E868AA",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_9E62A409_8E3A_F5C7_41C2_A0F4EC7AF2D7); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 68.4,
   "hfov": 9.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602E72CA_78CA_5B84_41A5_0791443B885C",
   "pitch": -3.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 68.4,
   "hfov": 9.4,
   "distance": 100
  }
 ],
 "id": "overlay_6BD3DF15_78CF_EA8C_41D5_6EBD41E4832C",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9D1ED116_8E3A_CFCC_41D6_4BDEE5B5710C); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 140.48,
   "hfov": 9.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_602FC2CA_78CA_5B84_41BD_4191C6E93176",
   "pitch": -2.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 140.48,
   "hfov": 9.41,
   "distance": 100
  }
 ],
 "id": "overlay_6A8CE6AE_78CE_BB9C_41DB_EB9AD1803C48",
 "data": {
  "label": "Circle Door 01"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9D05711F_8E3A_CFFC_41DC_662DBA3F8A5E); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9AEF5D6E_8B25_7770_41D7_768CE607F4A2",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Discussion Room</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText19433"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 148.88,
   "hfov": 17.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_99E6F400_8136_223B_41D7_ABDBEF531434",
   "pitch": -18.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 148.88,
   "hfov": 17.49,
   "distance": 100
  }
 ],
 "id": "overlay_66625856_72CD_C265_41D7_3F8701B00E2D",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_9F63A54D_8E3A_F65F_4186_1E286022952C); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -113.24,
   "hfov": 18.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_73571A63_78BA_AA84_41DC_53C532975B47",
   "pitch": -29.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -113.24,
   "hfov": 18.52,
   "distance": 100
  }
 ],
 "id": "overlay_65369CD6_765C_C265_41D1_54E96BF7AF00",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9F13A4FC_8E3A_F63C_41D6_89987A8FC126); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 123.58,
   "hfov": 9.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_99E66400_8136_223B_41D3_519AE8A46232",
   "pitch": -17.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 123.58,
   "hfov": 9.09,
   "distance": 100
  }
 ],
 "id": "overlay_920B99C8_813E_E5CB_41BF_C3BDC0EA19D7",
 "data": {
  "label": "Circle 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7, this.camera_9F72C52F_8E3A_F7DC_41C6_9C5CAB6239E2); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 133.26,
   "hfov": 8.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_3_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_99E7D404_8136_223B_41C5_A0F1CE02810F",
   "pitch": -11.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 133.26,
   "hfov": 8.87,
   "distance": 100
  }
 ],
 "id": "overlay_923862F3_813E_27DE_41D7_7CEF8F4B56A6",
 "data": {
  "label": "Circle 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_924072FC_8132_27CA_41C3_10021807C8E4, this.camera_9F03A510_8E3A_F7C5_41C7_F107BDD952F2); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -93.67,
   "hfov": 3.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -93.67,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_4_0.png",
      "width": 64,
      "height": 82,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.53
  }
 ],
 "id": "overlay_80BEA872_8E2A_BE45_41C0_F259E5595CDA",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_8144ADA3_8E2A_D6CB_41D2_A7B8B835C7B6, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -138.09,
   "hfov": 3.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 20,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -138.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_5_0.png",
      "width": 64,
      "height": 82,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.52
  }
 ],
 "id": "overlay_9E5E2373_8E2B_524B_41DD_3C673C6B4ECA",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9E631318_8E2B_53C5_41DC_2315BE7AD61B, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9050438B_8116_264E_41D9_DD601C32EFF1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 161</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText10260"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_8F7E114F_80F6_22C5_41C0_E53AAC09295F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 160</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3810"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -170.37,
   "hfov": 5.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDD962D_27CE_678C_41A9_68D9C4CAEA47",
   "pitch": -5.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.37,
   "hfov": 5.5,
   "distance": 100
  }
 ],
 "id": "overlay_2E0F5BBC_27CE_AC93_4188_ECB314955772",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784, this.camera_9E5E1427_8E3A_F5CB_4197_F79069DF3F39); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_9A10A1EB_8B63_4F71_41D0_67DBDEA63BE8",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Exam office</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3810"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_85BEE0B4_8AE5_CDD0_4186_A3362FAE120B",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Dr . Muhammad ilyas Office (Dean Office)</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText5014"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_917546FD_811E_6FCA_41C4_485076B5204A",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>FACULTY OFFICE</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText13828"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 145,
   "hfov": 4.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDCA633_27CE_6794_41C2_481AAE50FED9",
   "pitch": -4.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 145,
   "hfov": 4.6,
   "distance": 100
  }
 ],
 "id": "overlay_2E01E13C_27CE_FD93_41B0_E300E032BAE9",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_9C21068D_8E3A_F2DF_41D5_BFA13BFBC1DB); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -25.06,
   "hfov": 4.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_2_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDCF634_27CE_679C_41B3_2D6F6A66500C",
   "pitch": -4.29,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -25.06,
   "hfov": 4.91,
   "distance": 100
  }
 ],
 "id": "overlay_2E01913D_27CE_FD8D_41B0_F4A692BC5FD2",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_9C118699_8E3A_F2C7_41D6_6B0F9DA897D2); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -127.17,
   "hfov": 14.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9690C25C_8112_26CA_41DC_462486DAABD0",
   "pitch": -32.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -127.17,
   "hfov": 14.45,
   "distance": 100
  }
 ],
 "id": "overlay_9495A4E7_8112_23C6_41D9_C30E13F341D4",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 25.19,
   "hfov": 10.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_4_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9690125C_8112_26CA_41D5_9022AAB2E2FC",
   "pitch": -22.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.19,
   "hfov": 10.69,
   "distance": 100
  }
 ],
 "id": "overlay_949BA3B9_8112_E64A_41B7_69393FF5C01E",
 "data": {
  "label": "stairs"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E, this.camera_9FC71667_8E3A_F24B_41D7_58E8484E2745); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 64.08,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_5_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_9CE79B2F_876E_2646_41AE_CB5D2A70EC5C",
   "pitch": -20.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 64.08,
   "hfov": 10.84,
   "distance": 100
  }
 ],
 "id": "overlay_9C32118D_876E_2245_410D_913B539FFF40",
 "data": {
  "label": "stairs"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92, this.camera_9C37B67B_8E3A_F23B_41D4_06C2AC799841); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 103.6,
   "hfov": 7.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": 103.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_6_0.png",
      "width": 66,
      "height": 69,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.72
  }
 ],
 "id": "overlay_9A662754_8B2D_D350_41B7_F2481D85F6B3",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9A67F38A_8B2D_53B0_41B9_6C85EE6C5FC4, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 75.91,
   "hfov": 13.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0_HS_0_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8D852B71_8348_2362_41D8_2263BA7E52F6",
   "pitch": -30.87,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 75.91,
   "hfov": 13.26,
   "distance": 100
  }
 ],
 "id": "overlay_8D9C4032_8348_DCE6_41C9_15041FDC3BEA",
 "data": {
  "label": "Circle 01c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_9E4F243B_8E3A_F63B_41D6_4FB0FE40D2BD); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_848E98C5_8B65_7DB0_41B2_45084EAA07FC",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Toilet for boys</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3810"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -175.71,
   "hfov": 8.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_0_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB1635_27CE_679C_41AB_B9D5D513632C",
   "pitch": -17.72,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.71,
   "hfov": 8.3,
   "distance": 100
  }
 ],
 "id": "overlay_2D623BF2_27CE_EC97_41B8_69B15940F49C",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 9.66,
   "hfov": 8.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_1_0_0_map.gif",
      "width": 72,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2CDB3636_27CE_679C_41C2_675370C71252",
   "pitch": -10.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 9.66,
   "hfov": 8.58,
   "distance": 100
  }
 ],
 "id": "overlay_2D622BF2_27CE_EC97_41B7_707F7B7133BB",
 "data": {
  "label": "Circle 02c"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A, this.camera_9E53741D_8E3A_F5FF_41B3_6118FF2BD834); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -142.63,
   "hfov": 6.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -142.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0_HS_2_0.png",
      "width": 58,
      "height": 55,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.73
  }
 ],
 "id": "overlay_8703B6CA_8AE3_55B3_41DC_E8A69D16418F",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_847C1B42_8AE3_3CB0_41BD_6BE3A132A323, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_81446DA3_8E2A_D6CB_41DD_A4BE01FCF0BB",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 0,
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Faculty Office</B></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText3122"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -20.47,
   "hfov": 12.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2F0C29F3_209A_CD83_41BB_3FACFD6D1478",
   "pitch": -4.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -20.47,
   "hfov": 12.48,
   "distance": 100
  }
 ],
 "id": "overlay_2E47963C_209B_C686_41BF_A176F5C8EEDB",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_9D659165_8E3A_CE4F_41DC_87406F95A54E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": 21.79,
   "hfov": 9.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_8BB0711A_8587_AE7E_41DE_F2C9688EE780",
   "pitch": -27.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 21.79,
   "hfov": 9.94,
   "distance": 100
  }
 ],
 "id": "overlay_9D9EF786_8776_6E47_4194_18CD109E014E",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_9E27F3AE_8E3A_F2DD_41D9_978296C8161D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -123.91,
   "hfov": 8.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -123.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_3_0.png",
      "width": 94,
      "height": 99,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.08
  }
 ],
 "id": "overlay_85D472E3_8AE5_4D70_41D6_FCCA8670A9A3",
 "data": {
  "label": "Arrow 07"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9ADDE73B_8AE5_34D0_41B4_7A9F7AE196CB, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -142.75,
   "hfov": 8.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -142.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_4_0.png",
      "width": 94,
      "height": 99,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.04
  }
 ],
 "id": "overlay_9A668BAE_8AE7_53F0_4191_B174BE73E392",
 "data": {
  "label": "Arrow 07"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_9A785B24_8AE7_5CF0_41A7_0D68A5869852, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "useHandCursor": true,
 "maps": [
  {
   "yaw": -179.81,
   "hfov": 6.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "yaw": -179.81,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_5_0.png",
      "width": 80,
      "height": 80,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.88
  }
 ],
 "id": "overlay_85AC9137_8AE5_CCD0_41BC_148E9963C030",
 "data": {
  "label": "Arrow 07"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_85B8F0B0_8AE5_CDD0_41DC_7F2F78C507E6, null, false)",
   "mapColor": "#FF0000"
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7CD542DB_6FEF_66D6_41BC_64852276CDD4",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7CD4B2DB_6FEF_66D6_41CC_715E40B0D18D",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_999A6408_8136_224B_41D6_D6717CF937AA",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_602022CA_78CA_5B84_41D8_0E85F119521B",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6021A2CA_78CA_5B84_41D9_D7485563227F",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6021D2CA_78CA_5B84_41BA_BE06E010CEAA",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9E2DBB58_8312_66CA_41BF_56F1EABB02F5",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9E2D0B59_8312_66CA_41BD_253DE246B04B",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_602142CA_78CA_5B84_41B7_8BBDCC794071",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_602EC2CA_78CA_5B84_4193_909C86471BC6",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66C26848_7244_C26D_41C1_B3A2C3F7384D",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66C2D848_7244_C26D_418C_EBE7E276B59C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6677999B_7243_C2E3_41A2_AE213968F862",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_604AA761_6FD2_EFF2_41C2_16AD244CB609",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_2_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6257BD30_702E_A352_41B3_607E6A8F1721",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7E0DF243_6DFC_C663_41D8_D022C3A2240D",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_8_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_83B8F544_8E2A_D64C_41B6_2ED8CFA2BA28",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_658895FF_7033_A2CE_41B5_5686CE0997A5",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_659745FF_7033_A2CE_41D2_FC9AB5CE0BDC",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_74EBF32A_65B3_BB6E_41B7_2D785927695F",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_74EA232A_65B3_BB6E_419F_527EFEA376BE",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_0_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_2CDB4636_27CE_679C_41B5_D2D577829786",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5B57531C_5541_95E3_41AF_0DD511DB92A6",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_330BC3FC_209F_5D86_41AE_F461D94B2853",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_330BA3FC_209F_5D86_41A1_C6271D6C346D",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_73F773D8_65DE_DB29_41D6_5DECD0CA123C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7388F3D8_65DE_DB29_41D3_E661C0F6773E",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_738883D8_65DE_DB29_41D8_0BD42A5DFC3C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_738833D8_65DE_DB29_41D8_13C704DE6E4B",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7389C3D8_65DE_DB29_41D6_08F78DF82023",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_9_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9593FA4E_816F_E6C6_41D7_975389A24AB6",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_618A54DB_7033_E2D7_41D2_0835F93B2AFC",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_951D0689_8312_2E4D_41C8_79BF60528510",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_951D668A_8312_2E4F_41C9_33E2523F64DC",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6184AFB6_6FF6_BF5E_41A1_EB310FF5615A",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_61273346_6FFE_A73E_41D1_A23BB5C8F892",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_2_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_613B096B_6FF2_A3F6_41D3_D4564C949377",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_91D99840_86AB_FC7B_41DF_A6C5BA796AC4",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7D6FE93F_6DC3_4223_41D5_DB630CB04F32",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_73F603D4_65DE_DB39_41D8_B97831B22AB7",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_73F7D3D4_65DE_DB39_41CE_AAE5E6855923",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_97ED9480_8136_623B_41D7_FEFEBEE93093",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_951A9688_8312_2E4B_41BD_84C686278BE2",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_951AC688_8312_2E4B_4192_A4BA8A2994F4",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66CCB848_7244_C26D_41BB_FEC240383672",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66CD2848_7244_C26D_41BA_9141058AC125",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66C32848_7244_C26D_41D0_D33553A197BC",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66C39848_7244_C26D_41DB_085476A99441",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_83B6355D_8E2A_D67F_41D0_2A4CB97EC859",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_BA0E1744_AB8C_CFCB_41AF_4BE2DAD80CD8",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5B57D31C_5541_95E3_41CD_B3D801DEC717",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_99F223DD_8136_25CA_41DF_1E9EBA38A755",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_3_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66F2BF21_72C7_7FDF_41BC_B2E06D4108CB",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_4_0.png",
   "width": 520,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66F22F21_72C7_7FDF_41C7_1B515F89D7AB",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7E3C41E5_6FD2_A2F3_41C5_5528FA74BA28",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_999AC408_8136_224B_41DD_392C9B7107A6",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_1_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_BA0F6745_AB8C_CFD5_41E5_3958CE687D57",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_623D6446_6DC5_4265_41D8_D156A0ECF425",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7EDB20AA_6FF2_A176_41D6_3C14DF671036",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_1_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_7EDAF0AA_6FF2_A176_4135_F456FF20AC30",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_300B3A44_20AB_CE85_415F_5C619EF42DC6",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6B8D57FE_72CF_4E25_419F_E56C3EE4BE0F",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_2CDB6637_27CE_679C_41BB_1B15208287E2",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_3_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_91DD483D_86AB_FC05_41BB_FAD345916D60",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_31AF709F_2095_DB82_41A0_08A1BFA42A8E",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_5_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_31EE65DA_20B7_C58D_41B4_8A3334FDFA98",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_6_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_3208D456_2095_FA85_41BD_923A8DF60131",
 "frameCount": 21,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_1_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_66CC2848_7244_C26D_41C8_A62BE351C742",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_602E72CA_78CA_5B84_41A5_0791443B885C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_602FC2CA_78CA_5B84_41BD_4191C6E93176",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_0_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_99E6F400_8136_223B_41D7_ABDBEF531434",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_1_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_73571A63_78BA_AA84_41DC_53C532975B47",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_2_0.png",
   "width": 1080,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_99E66400_8136_223B_41D3_519AE8A46232",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_3_0.png",
   "width": 1080,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_99E7D404_8136_223B_41C5_A0F1CE02810F",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_2CDD962D_27CE_678C_41A9_68D9C4CAEA47",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_2CDCA633_27CE_6794_41C2_481AAE50FED9",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_2_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_2CDCF634_27CE_679C_41B3_2D6F6A66500C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_3_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9690C25C_8112_26CA_41DC_462486DAABD0",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_4_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9690125C_8112_26CA_41D5_9022AAB2E2FC",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_5_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_9CE79B2F_876E_2646_41AE_CB5D2A70EC5C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0_HS_0_0.png",
   "width": 1080,
   "height": 350,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_8D852B71_8348_2362_41D8_2263BA7E52F6",
 "frameCount": 20,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_0_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_2CDB1635_27CE_679C_41AB_B9D5D513632C",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_1_0.png",
   "width": 1080,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_2CDB3636_27CE_679C_41C2_675370C71252",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_2F0C29F3_209A_CD83_41BB_3FACFD6D1478",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_2_0.png",
   "width": 480,
   "height": 360,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_8BB0711A_8587_AE7E_41DE_F2C9688EE780",
 "frameCount": 24,
 "class": "AnimatedImageResource"
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "Player",
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player445"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
