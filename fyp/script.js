(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -158.09,
  "class": "PanoramaCameraPosition",
  "pitch": -15.13
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 45.26,
   "yaw": 115.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A"
  },
  {
   "backwardYaw": -175.76,
   "yaw": 90.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D"
  },
  {
   "backwardYaw": -82.14,
   "yaw": 50.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6"
  },
  {
   "backwardYaw": -82.14,
   "yaw": -87.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6"
  },
  {
   "backwardYaw": -128.09,
   "yaw": 137.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965"
  },
  {
   "backwardYaw": -128.09,
   "yaw": -136.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_t.jpg",
 "label": "rightcoridorr",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_t.jpg"
  }
 ],
 "vfov": 69.06,
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
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 137.87,
   "yaw": -128.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522"
  },
  {
   "backwardYaw": 137.87,
   "yaw": -50.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
 "thumbnailUrl": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_t.jpg",
 "label": "165",
 "pitch": -11.07,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_t.jpg"
  }
 ],
 "vfov": 78.05,
 "overlays": [
  "this.overlay_330B46B1_2096_C79E_414D_EE196269949D",
  "this.overlay_34F412D5_209B_5F87_41B7_5D443005399A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.6,
  "class": "PanoramaCameraPosition",
  "pitch": -19.22
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 150.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_90B169B6_9B56_3D00_41DB_E61861442565",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6579408D_7247_42E7_41BC_2A988AD9953C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_6579408D_7247_42E7_41BC_2A988AD9953C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 0)",
   "camera": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92_camera",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -63.22,
   "yaw": 29.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "room2",
 "id": "panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_t.jpg",
 "pitch": -2.81,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_t.jpg"
  }
 ],
 "vfov": 84.7,
 "overlays": [
  "this.overlay_62660C43_6DC4_C263_41D3_3E8F8E668547"
 ]
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9A5A28C5_94BE_E65C_41E0_3C397623311B",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9A5A38C5_94BE_E65C_41C4_24A621E0CCD6"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window3168"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 35.22,
  "class": "PanoramaCameraPosition",
  "pitch": -4.91
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_9CF4C929_876E_624D_41DC_0769C9491F92_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -158.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96982BA8_9B56_3D00_41DC_777485C87168",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 123.58,
   "yaw": 47.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_t.jpg",
 "label": "168",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_t.jpg"
  }
 ],
 "vfov": 60.5,
 "overlays": [
  "this.overlay_953A215D_8132_22C5_41CF_FD7BB5A2148D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -38.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95183C58_9B56_3B01_41D8_5037AE6A6CB1",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9A0D356F_8B22_D770_41C4_E25F69FBC9A9",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9A0D6570_8B22_D750_41BE_D81891BE9E5B"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window11207"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_91C357FE_811E_EDC6_41D7_215DACA0E05F",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_91C767FA_811E_EDCE_41CF_65993588ACB5"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window13827"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -129.47,
   "yaw": -39.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47"
  },
  {
   "backwardYaw": 64.27,
   "yaw": 104.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E"
  },
  {
   "backwardYaw": -106.82,
   "yaw": 84.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0"
  },
  {
   "backwardYaw": 154.2,
   "yaw": -115.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922"
  },
  {
   "backwardYaw": 148.88,
   "yaw": -90.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3",
 "thumbnailUrl": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_t.jpg",
 "label": "f1",
 "pitch": -7.68,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_t.jpg"
  }
 ],
 "vfov": 65.29,
 "overlays": [
  "this.overlay_A67546E7_AB8C_4ED4_41CA_09A559A3AF75",
  "this.overlay_581356E7_5543_BC2D_41D3_1067E1CAA752",
  "this.overlay_6155A733_72C3_CE23_41CA_96783A0F5A35",
  "this.overlay_6768CCFD_72DC_C227_41D0_30ABBF7555DC",
  "this.overlay_6955A86A_72C5_C22D_41DC_240C10260780",
  "this.overlay_9A950EB0_8B2D_35EF_41DE_2E9BAD5F58D1",
  "this.overlay_9AFBA737_8B2F_34D1_41E0_13CF7F50098A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_94405CF7_9B56_3B00_41E3_25BBF426C770",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_91751701_811E_6E3A_41B5_BC02B3447475",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_917546FD_811E_6FCA_41C4_485076B5204A"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window13827"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_958D6CC4_9B56_3B01_41E0_18A8B4BDD561",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -145.8,
  "class": "PanoramaCameraPosition",
  "pitch": -4.87
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_camera",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9A785B24_8AE7_5CF0_41A7_0D68A5869852",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9A798B2C_8AE7_5CF0_41C8_CD820ADF03D8"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window5013"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9671CADD_9B56_3F00_41A4_3D003DAA2BEC",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 83.37,
   "yaw": 75.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_882F48DF_8338_ED5E_41DF_4F65530589AE",
 "thumbnailUrl": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_t.jpg",
 "label": "room3",
 "pitch": -14.82,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/0/{row}_{column}.jpg",
      "rowCount": 17,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/1/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/2/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/3/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/4/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/f/5/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/0/{row}_{column}.jpg",
      "rowCount": 17,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/1/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/2/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/3/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/4/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/r/5/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/0/{row}_{column}.jpg",
      "rowCount": 17,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/1/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/2/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/3/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/4/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/b/5/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/0/{row}_{column}.jpg",
      "rowCount": 17,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/1/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/2/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/3/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/4/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/d/5/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/0/{row}_{column}.jpg",
      "rowCount": 17,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 8704,
      "colCount": 17,
      "height": 8704
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/1/{row}_{column}.jpg",
      "rowCount": 9,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/2/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/3/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/4/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0/l/5/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_t.jpg"
  }
 ],
 "vfov": 64.97,
 "overlays": [
  "this.overlay_8D9C4032_8348_DCE6_41C9_15041FDC3BEA"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 168.74,
   "yaw": 170.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C"
  },
  {
   "backwardYaw": 60.76,
   "yaw": -125.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF"
  },
  {
   "backwardYaw": 179.23,
   "yaw": 21.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D",
 "thumbnailUrl": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_t.jpg",
 "label": "labcoridoor1",
 "pitch": -8.24,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_t.jpg"
  }
 ],
 "vfov": 65.55,
 "overlays": [
  "this.overlay_618446F2_6FF2_EED6_41BB_34A5952BEDF6",
  "this.overlay_6176939F_6FFF_A74E_41D0_8D9F295097C2",
  "this.overlay_60C9DA1B_6FF3_A156_41B4_A22292FB47BC",
  "this.overlay_8F56D9CD_80F2_E5CA_41DF_E2E4BF90FA4B"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -42.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97BB8AAA_9B56_3F00_41C8_F001721641E4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97E58A77_9B56_3F0F_41E1_5224BD21BE75",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -39.6,
   "yaw": -129.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "belconi",
 "id": "panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_t.jpg",
 "pitch": -2.95,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_t.jpg"
  }
 ],
 "vfov": 84.12,
 "overlays": [
  "this.overlay_A5F03DCD_AB8C_42D4_41E3_EF335D747B4B"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_t.jpg"
  }
 ],
 "vfov": 63.39,
 "hfov": 360,
 "label": "room9",
 "id": "panorama_6579408D_7247_42E7_41BC_2A988AD9953C",
 "thumbnailUrl": "media/panorama_6579408D_7247_42E7_41BC_2A988AD9953C_t.jpg",
 "pitch": -5.4
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -115.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97635A07_9B56_3F0F_41D3_89FF17772D60",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 115.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_9539EC73_9B56_3B00_41CB_9F62AED42B2B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_95BD7CD7_9B56_3B00_41C2_6B8B1668A508",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9749E9F3_9B56_3D00_41BF_0054EF6A45F4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -9.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_90A5A9C1_9B56_3D03_41DB_48DDDDDEAC42",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -170.37,
   "yaw": 9.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784",
 "thumbnailUrl": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_t.jpg",
 "label": "Entrance2",
 "pitch": -0.13,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_t.jpg"
  }
 ],
 "vfov": 81.06,
 "overlays": [
  "this.overlay_2D623BF2_27CE_EC97_41B8_69B15940F49C",
  "this.overlay_2D622BF2_27CE_EC97_41B7_707F7B7133BB",
  "this.overlay_8703B6CA_8AE3_55B3_41DC_E8A69D16418F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -154.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97E81A8A_9B56_3F00_41D1_586D44AC2055",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96254B1A_9B56_3D00_41A0_8436B718DAD2",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_930A9FED_8116_7DCA_41D6_95238BB60789",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_930A7FED_8116_7DCA_41CC_FFC200A7DF91"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window11391"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.29,
  "class": "PanoramaCameraPosition",
  "pitch": -4.49
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_camera",
 "automaticZoomSpeed": 10
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9A1661E3_8B63_4F71_41DA_0C108637127E",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "title": "",
 "titleFontWeight": "normal",
 "veilColorDirection": "horizontal",
 "closeButtonPressedIconLineWidth": 1,
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconLineWidth": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9A10A1EB_8B63_4F71_41D0_67DBDEA63BE8"
 ],
 "layout": "vertical",
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "closeButtonPaddingBottom": 0,
 "data": {
  "name": "Window3809"
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -115.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97ADAABC_9B56_3F01_41D9_7615C2261645",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -95.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_974F4DB0_9B56_3501_41E1_CF4E0D250F6D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -119.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_945EFCED_9B56_3B00_41CD_5F80B9CB4534",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -125.17,
   "yaw": 60.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D"
  },
  {
   "backwardYaw": 93.93,
   "yaw": -172.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_60C35C53_7035_61D6_41D1_96B6807993FF",
 "thumbnailUrl": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_t.jpg",
 "label": "smartlab",
 "pitch": -5.86,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_t.jpg"
  }
 ],
 "vfov": 63.46,
 "overlays": [
  "this.overlay_61118D3D_7037_E352_41DB_D9CAFC4E92D4",
  "this.overlay_611F8621_7035_6172_41D7_6BFE4C4F7884"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -42.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_978B4AA0_9B56_3F00_41D0_54C13C15F4FD",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -25.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9719BA26_9B56_3F00_41B9_8B33563766FB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -150.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97D23A57_9B56_3F00_41DD_9C90AE3CE70A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97F52A6E_9B56_3F01_41DC_B1B188194555",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -16.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9723CE15_9B56_3700_41D1_AFB58CD54AE1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.11,
  "class": "PanoramaCameraPosition",
  "pitch": -0.41
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_60C35C53_7035_61D6_41D1_96B6807993FF_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -85.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96887BC2_9B56_3D01_41C7_59430621E094",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96B84BDC_9B56_3D01_41D3_E330318BB196",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -119.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_90A17D5F_9B56_353F_41D6_E98082718400",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96.25,
  "class": "PanoramaCameraPosition",
  "pitch": -5.73
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -172.42,
  "class": "PanoramaCameraPosition",
  "pitch": 4.85
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -46.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95CAFC99_9B56_3B03_41D9_2CB4189F7F4A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -95.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_97773DB9_9B56_3503_41AE_BBC2E42B9DAC",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.25,
   "yaw": 60.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2"
  },
  {
   "backwardYaw": -9.38,
   "yaw": 176.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18",
 "thumbnailUrl": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_t.jpg",
 "label": "lab102",
 "pitch": -5.15,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_t.jpg"
  }
 ],
 "vfov": 64.88,
 "overlays": [
  "this.overlay_63E529C5_72C3_4267_41D8_62C5880B7C03",
  "this.overlay_6432FAD2_72C3_467D_41D4_9CF6239DAB9A"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 64.08,
   "yaw": 21.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_9CF4C929_876E_624D_41DC_0769C9491F92",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_t.jpg",
 "label": "ground coridoor stairs",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_t.jpg"
  }
 ],
 "vfov": 64.38,
 "overlays": [
  "this.overlay_9D9EF786_8776_6E47_4194_18CD109E014E",
  "this.overlay_85D472E3_8AE5_4D70_41D6_FCCA8670A9A3",
  "this.overlay_9A668BAE_8AE7_53F0_4191_B174BE73E392",
  "this.overlay_85AC9137_8AE5_CCD0_41BC_148E9963C030"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -134.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_965ECAC6_9B56_3F01_41D4_46A0AE0EE813",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_99D47374_8B2D_5357_41D6_6F850F6E5767",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_99D67374_8B2D_5357_41D7_50A9995C46C8"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window21950"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -111.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_971BCDEC_9B56_3501_41AA_E8CE09B84EB5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95AEECE3_9B56_3B00_41D6_B1422F663A46",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -23.38,
   "yaw": 25.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E"
  },
  {
   "backwardYaw": 21.79,
   "yaw": 64.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92"
  },
  {
   "backwardYaw": 94.32,
   "yaw": 145,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D"
  },
  {
   "backwardYaw": -85.62,
   "yaw": -25.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97",
 "thumbnailUrl": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_t.jpg",
 "label": "corridor1",
 "pitch": -0.28,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_t.jpg"
  }
 ],
 "vfov": 83.14,
 "overlays": [
  "this.overlay_2E01E13C_27CE_FD93_41B0_E300E032BAE9",
  "this.overlay_2E01913D_27CE_FD8D_41B0_F4A692BC5FD2",
  "this.overlay_9495A4E7_8112_23C6_41D9_C30E13F341D4",
  "this.overlay_949BA3B9_8112_E64A_41B7_69393FF5C01E",
  "this.overlay_9C32118D_876E_2245_410D_913B539FFF40",
  "this.overlay_9A662754_8B2D_D350_41B7_F2481D85F6B3"
 ]
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_8E966203_80FE_263E_41B1_694812EFF1F6",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "title": "",
 "titleFontWeight": "normal",
 "veilColorDirection": "horizontal",
 "closeButtonPressedIconLineWidth": 1,
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconLineWidth": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_8E963203_80FE_263E_41D4_06402CC4A65A"
 ],
 "layout": "vertical",
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "closeButtonPaddingBottom": 0,
 "data": {
  "name": "Window3809"
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 154.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9720BA45_9B56_3F00_41CC_17DB4A625A83",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 133.26,
   "yaw": -64.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_924072FC_8132_27CA_41C3_10021807C8E4",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_t.jpg",
 "label": "167",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_t.jpg"
  }
 ],
 "vfov": 53.49,
 "overlays": [
  "this.overlay_94FA217B_8136_22CE_41DF_978D12B255E8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -86.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_908B59AA_9B56_3D00_41D9_887F7CB8FF6C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -95.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_975009D5_9B56_3D00_41D4_672C8FED2326",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -85.39,
   "yaw": 90.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_t.jpg",
 "label": "MAB CR 166",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_t.jpg"
  }
 ],
 "vfov": 71.38,
 "overlays": [
  "this.overlay_925B6DE7_8136_3DC6_41B4_EA198C47EA46"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 164.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9634AB10_9B56_3D00_41DB_F3DD1DA444CA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95598C0E_9B56_3B00_41DD_AB102127C5CC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_camera",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_998C32E5_8B25_4D70_41D9_97BA619E7A5F",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_99B6C2EA_8B25_4D70_41BC_D0072CFF3553"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window19432"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_847C1B42_8AE3_3CB0_41BD_6BE3A132A323",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_847C0B46_8AE3_3CB0_41E0_DCE9CA457047"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window3028"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95FC2CA5_9B56_3B03_41C0_0DBBFCE2FF18",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_93065083_8116_623E_41B6_8DC2B5569A6D",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_93074083_8116_623E_41D8_71C93AB6BA46"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window11391"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_90E07BEC_811F_E5CA_41D0_BD62A705D18A",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_90E1DBE5_811F_E5C5_41CE_CCF678CC563E"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window13827"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 145,
   "yaw": 94.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97"
  },
  {
   "backwardYaw": 75.91,
   "yaw": 83.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_882F48DF_8338_ED5E_41DF_4F65530589AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_66F48F21_7053_FF72_41CC_338C0456A8D8"
  },
  {
   "backwardYaw": -20.47,
   "yaw": -29.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453"
  },
  {
   "backwardYaw": 90.97,
   "yaw": -175.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522"
  },
  {
   "backwardYaw": 141.62,
   "yaw": 163.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D",
 "thumbnailUrl": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_t.jpg",
 "label": "G-right",
 "pitch": -8.38,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_t.jpg"
  }
 ],
 "vfov": 63.82,
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
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 84.94,
   "yaw": -106.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3"
  },
  {
   "backwardYaw": 78.87,
   "yaw": 159.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2"
  },
  {
   "backwardYaw": 90.85,
   "yaw": -85.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_63584076_72C4_C225_41D9_7003B7355FB0",
 "thumbnailUrl": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_t.jpg",
 "label": "firstfloorcoridoooe",
 "pitch": -4.6,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_t.jpg"
  }
 ],
 "vfov": 67.85,
 "overlays": [
  "this.overlay_612CC06F_72CD_C223_41C2_56DE8B6299F2",
  "this.overlay_62C7CA2E_72CC_C625_41D6_44B5A63D6A34",
  "this.overlay_65923DA3_7245_C223_41D1_FE1BFE70C46D",
  "this.overlay_85D57C05_94BA_3DDD_41BC_29B0A6650DEA"
 ]
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9ADDE73B_8AE5_34D0_41B4_7A9F7AE196CB",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9ADC173B_8AE5_34D0_41DA_8427FD200960"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window5013"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0"
  },
  {
   "backwardYaw": 39.26,
   "yaw": 5.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "lab2",
 "id": "panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_t.jpg",
 "pitch": -2.42,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_t.jpg"
  }
 ],
 "vfov": 81.68,
 "overlays": [
  "this.overlay_6057515A_6FF2_E3D6_41CB_9577DD48D455",
  "this.overlay_7FE3BEF8_6FF3_9ED2_41CA_F4E9C9BAB020"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 61.43,
  "class": "PanoramaCameraPosition",
  "pitch": -5.73
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_6579408D_7247_42E7_41BC_2A988AD9953C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.34,
  "class": "PanoramaCameraPosition",
  "pitch": -1.21
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -89.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95681C4A_9B56_3B01_41D0_9F58190A3B3A",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_85B8F0B0_8AE5_CDD0_41DC_7F2F78C507E6",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_85BEE0B4_8AE5_CDD0_4186_A3362FAE120B"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window5013"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -31.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_970BDA30_9B56_3F01_41AA_58B3C2FCE370",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -15.87,
   "yaw": 58.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613",
 "thumbnailUrl": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_t.jpg",
 "label": "room1",
 "pitch": -9.44,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/0/{row}_{column}.jpg",
      "rowCount": 15,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7680,
      "colCount": 15,
      "height": 7680
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/1/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_t.jpg"
  }
 ],
 "vfov": 62.01,
 "overlays": [
  "this.overlay_7D6F2A04_6DFF_41E5_41C2_8816C37AFAA2"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_90AC59CB_9B56_3D00_41DB_71E20C343EF3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_camera",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9AC5E6B9_8B2F_35D0_41C5_EB5BBA2C386B",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9AC326BD_8B2F_35D0_41E1_1A8560F0C5DC"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window21950"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 64.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_90EF996E_9B56_3D01_41D0_FFA79DE2EDCA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 56.11,
  "class": "PanoramaCameraPosition",
  "pitch": -3.68
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 54.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_90861999_9B56_3D00_41E2_27F9B41299E2",
 "automaticZoomSpeed": 10
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_8F73D14F_80F6_22C5_41B3_51D4F9E9A910",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "title": "",
 "titleFontWeight": "normal",
 "veilColorDirection": "horizontal",
 "closeButtonPressedIconLineWidth": 1,
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconLineWidth": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_8F7E114F_80F6_22C5_41C0_E53AAC09295F"
 ],
 "layout": "vertical",
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "closeButtonPaddingBottom": 0,
 "data": {
  "name": "Window3809"
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96A9CBEC_9B56_3D00_41C4_AD4385108048",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96E77B64_9B56_3D00_41D8_13F9E60BB925",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 84.35,
   "yaw": -106.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  },
  {
   "backwardYaw": 84.35,
   "yaw": -43.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_t.jpg",
 "label": "13",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_t.jpg"
  }
 ],
 "vfov": 63.89,
 "overlays": [
  "this.overlay_95125FF4_831E_1DDA_41BF_BE87B4B04A2C",
  "this.overlay_9569899C_8312_224A_41DA_9C6E5EAF6507"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -119.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_90ACDD70_9B56_3501_41C1_9BECE80ECE45",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -56.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97994A96_9B56_3F00_41C8_E0B7F724084A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -64.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95DB4C8C_9B56_3B00_41DD_805EDEE9FAA4",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -115.33,
   "yaw": 154.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "2ndfloorcoridoor",
 "id": "panorama_64882088_72C3_C2ED_41D0_0CC0426D5922",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_t.jpg",
 "pitch": -1.49,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_t.jpg"
  }
 ],
 "vfov": 94.2,
 "overlays": [
  "this.overlay_67D9CD83_72C3_C2E3_41D2_98E01CCB813D",
  "this.overlay_9B312B34_8B2D_3CD0_41D0_5EEFBB2DF4DF",
  "this.overlay_84B384A9_8B2D_D5F1_41D6_45F3BDAC433D",
  "this.overlay_84E76BA7_8B2D_33F0_41C6_8721806B2A43"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -140.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_977E2DC4_9B56_3500_41D6_4350C82789FA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_96D48B24_9B56_3D00_41D6_FFF1BA42C40D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 116.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_90A63D4C_9B56_3501_41D7_90D775A5ADEA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 70.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97682DE2_9B56_3500_419D_4584069AE450",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_camera",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_93781399_8112_264D_41B4_F8F1B66BD413",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_937A039D_8112_2645_41CD_7183A7E1C312"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window13827"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -8.19
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_camera",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_91F7DFD7_8112_7DC5_41B9_4AB894ED5BF1",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_91F3EFD7_8112_7DC5_41B9_67DB4264CEAF"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window10259"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9AED1D6E_8B25_7770_41A3_D352F6C47707",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9AEF5D6E_8B25_7770_41D7_768CE607F4A2"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window19432"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_970DADF6_9B56_3501_41CD_BC382613CDE5",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 60.58,
   "yaw": -79.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18"
  },
  {
   "backwardYaw": 60.58,
   "yaw": -114.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18"
  },
  {
   "backwardYaw": 159.11,
   "yaw": 78.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_63584076_72C4_C225_41D9_7003B7355FB0"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_62D183DF_72CD_4663_41D0_062874C5F8E2",
 "thumbnailUrl": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_t.jpg",
 "label": "labcoridoor",
 "pitch": -3.79,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_t.jpg"
  }
 ],
 "vfov": 61.06,
 "overlays": [
  "this.overlay_62A9550E_72C4_C3E5_41CA_485470CFFD35",
  "this.overlay_637C86D9_72C4_CE6F_41D0_A8AEB8F2290F",
  "this.overlay_9945CEA8_8B23_D5FF_41D8_3D65598F7B91",
  "this.overlay_9A148AC1_8B22_DDB0_41D8_8934EF2A6CCC",
  "this.overlay_9A5113D4_8B25_5350_41C5_CB171ECE712C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 161.37,
  "class": "PanoramaCameraPosition",
  "pitch": -6.55
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_63584076_72C4_C225_41D9_7003B7355FB0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 73.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97163A1A_9B56_3F00_41E1_FE09CAC14277",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9052A38B_8116_264E_41D3_EF74C49C4C18",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9050438B_8116_264E_41D9_DD601C32EFF1"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window10259"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 159.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95674C3B_9B56_3B07_41B3_A3CE1004E15C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_909FF98E_9B56_3D00_41DB_75C6BE8A3E11",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_975ABD98_9B56_3500_41A8_29E7790057E1",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_8F61F791_80F2_2E5A_41DE_9E8D5C2A8B81",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_8F63A791_80F2_2E5A_41A9_39698F3758E0"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window7052"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.15,
   "yaw": -113.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  },
  {
   "backwardYaw": -64.72,
   "yaw": 133.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_924072FC_8132_27CA_41C3_10021807C8E4"
  },
  {
   "backwardYaw": 47.25,
   "yaw": 123.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7"
  },
  {
   "backwardYaw": -90.51,
   "yaw": 148.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "2ndrightcoridoor",
 "id": "panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_t.jpg",
 "pitch": -2.7,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_t.jpg"
  }
 ],
 "vfov": 89.94,
 "overlays": [
  "this.overlay_66625856_72CD_C265_41D7_3F8701B00E2D",
  "this.overlay_65369CD6_765C_C265_41D1_54E96BF7AF00",
  "this.overlay_920B99C8_813E_E5CB_41BF_C3BDC0EA19D7",
  "this.overlay_923862F3_813E_27DE_41D7_7CEF8F4B56A6",
  "this.overlay_9A27A66A_94BA_2A57_41D2_8DB8CBA072B9",
  "this.overlay_9BA086C2_94BE_2A57_41BD_361B7E9830C0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -104.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_954B5C21_9B56_3B03_41C0_08BCC51209DD",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_924072FC_8132_27CA_41C3_10021807C8E4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 140.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96BD8935_9B56_3D03_4195_F55F5F489782",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -121.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97C4DA64_9B56_3F00_41BE_66EEBE9F101B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 115.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_9508FC5E_9B56_3B01_41CE_017455E6C2C0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9661BAE7_9B56_3F00_41C0_3F1846F56B51",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.44,
   "yaw": 168.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D"
  },
  {
   "backwardYaw": 5.46,
   "yaw": 39.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "lab",
 "id": "panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_t.jpg",
 "pitch": -5,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_t.jpg"
  }
 ],
 "vfov": 84.29,
 "overlays": [
  "this.overlay_60A0DC6E_6FF6_E1CE_41BC_3DAF4075F002",
  "this.overlay_6055C2F0_6FF6_A6D2_41C6_D0504FFB7E8E"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "label": "lab3",
 "id": "panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_t.jpg",
 "pitch": -5.12,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_t.jpg"
  }
 ],
 "vfov": 74.17,
 "overlays": [
  "this.overlay_7FA80A1D_6FED_6152_41D0_915457C0472D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_959BACBA_9B56_3B00_41BC_8BA6B8A5FAEC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "camera_90EAC983_9B56_3D00_41E3_401B94C0A348",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9BCA6D39_8B23_F4D1_41D9_0394666A9A47",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9BCB9D39_8B23_F4D1_41D6_77321FE5A33F"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window10549"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 115.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96C66B2E_9B56_3D00_41E1_3F0B3DEDCEC8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 50.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_977DF9FE_9B56_3D01_41BB_6009D8FAA312",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "targetYaw": 4.83,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 81.68,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 86.51,
    "yawSpeed": 3.75,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ]
 },
 "id": "panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -20.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97560D7C_9B56_3500_41BE_508E4B68AC34",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97D71E20_9B56_3701_41DA_D21BCA5EDB56",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -29.81,
   "yaw": -20.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2C1A3955_2095_CA86_41BC_F803A92D6453",
 "thumbnailUrl": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_t.jpg",
 "label": "162",
 "pitch": -7.96,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_t.jpg"
  }
 ],
 "vfov": 74.52,
 "overlays": [
  "this.overlay_2E47963C_209B_C686_41BF_A176F5C8EEDB"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.32,
  "class": "PanoramaCameraPosition",
  "pitch": -5.71
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 156.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9696AB7C_9B56_3D00_4175_DA7128A8A3C2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 4.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_964F3AD3_9B56_3F00_41C3_4E8A5A584C1C",
 "automaticZoomSpeed": 10
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9BB84682_94BE_2AD7_41D6_74C6EB97E059",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9BB2B688_94BE_2AD3_41CD_6B062F936A15"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window3168"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -158.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_973D3A3A_9B56_3F01_41E3_5E1225A9CD8B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 51.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96037B03_9B56_3D07_41E1_B759E3B40D99",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.17,
   "yaw": 64.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3"
  },
  {
   "backwardYaw": 25.19,
   "yaw": -23.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E",
 "thumbnailUrl": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_t.jpg",
 "label": "staira",
 "pitch": -2.02,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_t.jpg"
  }
 ],
 "vfov": 72.9,
 "overlays": [
  "this.overlay_2E1CDA60_27CE_AFB4_41A5_F7426B7FECE0",
  "this.overlay_58B8AED6_5546_AC6F_41B6_7E26E95B3B8B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 21.03,
   "yaw": 179.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D"
  },
  {
   "backwardYaw": -25.06,
   "yaw": -85.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97"
  },
  {
   "backwardYaw": 29.69,
   "yaw": -63.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0"
  },
  {
   "backwardYaw": 58.98,
   "yaw": -15.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A",
 "thumbnailUrl": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_t.jpg",
 "label": "left",
 "pitch": -7.56,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_t.jpg"
  }
 ],
 "vfov": 64.86,
 "overlays": [
  "this.overlay_62A03976_6FD3_E3DE_41C1_FDC5CDF26976",
  "this.overlay_620CCBA2_702F_E776_41C1_50B308F2F3C6",
  "this.overlay_7DF4AF74_6DC5_FE25_41CB_C3D88A6FA1A8",
  "this.overlay_8EAA60C8_80F2_23CB_41DA_7B476039300E",
  "this.overlay_8F5B5199_80F6_224A_41AC_8DD7589ACFB7",
  "this.overlay_84FFE94D_8B65_7CB0_41C5_7919F36BE326",
  "this.overlay_9B3442C2_8B63_4DB0_41D2_77EAA00990C6",
  "this.overlay_9B697C42_8B5F_34B3_41D5_D6888052EC6C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -64.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9529EC7D_9B56_3B00_41DF_FB4A6AEF192B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_95EC5CB0_9B56_3B00_41D6_65D6BD20A998",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -132.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96F5FB4C_9B56_3D01_41D7_DEC2E6A4C9B2",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -127.2,
   "yaw": -109.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  },
  {
   "backwardYaw": -127.2,
   "yaw": -43.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_6833DF27_78C9_AA8B_41D7_218E52138C53",
 "thumbnailUrl": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_t.jpg",
 "label": "leftroom",
 "pitch": -5.76,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_t.jpg"
  }
 ],
 "vfov": 63.91,
 "overlays": [
  "this.overlay_6AA92E5C_78C9_EABC_41C1_C794B9FFD48E",
  "this.overlay_6AF5D2A2_78CE_BB85_41D1_D188597B1E20"
 ]
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9A67F38A_8B2D_53B0_41B9_6C85EE6C5FC4",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9A66338B_8B2D_53B0_41C6_9B971507FB42"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window17822"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 163.01,
   "yaw": 141.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB",
 "thumbnailUrl": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_t.jpg",
 "label": "163",
 "pitch": -9.31,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_t.jpg"
  }
 ],
 "vfov": 74.76,
 "overlays": [
  "this.overlay_302D5BD4_20AD_4D85_41B8_F9DD191D9F97"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 115.61,
   "yaw": 45.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522"
  },
  {
   "backwardYaw": 115.61,
   "yaw": -17.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A",
 "thumbnailUrl": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_t.jpg",
 "label": "conference",
 "pitch": -6.75,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_t.jpg"
  }
 ],
 "vfov": 76.89,
 "overlays": [
  "this.overlay_7749B0BD_65D6_D56B_41C7_7ABEA5F55642",
  "this.overlay_7731F521_65D2_DF1A_41C2_F3E7CF28AB5D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -110.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9762BDD8_9B56_3500_41C2_3AB05C38215C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97510D88_9B56_3500_41E2_AFE9A5253A64",
 "automaticZoomSpeed": 10
},
{
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_8488D8C1_8B65_7DB3_4185_C4CCB0AE683B",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingTop": 0,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "closeButtonBorderColor": "#000000",
 "bodyPaddingBottom": 5,
 "closeButtonBackgroundColorDirection": "vertical",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverIconColor": "#FFFFFF",
 "title": "",
 "titleFontWeight": "normal",
 "veilColorDirection": "horizontal",
 "closeButtonPressedIconLineWidth": 1,
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonRollOverIconLineWidth": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_848E98C5_8B65_7DB0_41B2_45084EAA07FC"
 ],
 "layout": "vertical",
 "closeButtonRollOverBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonPressedBackgroundOpacity": 1,
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPaddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderSize": 0,
 "closeButtonBorderRadius": 11,
 "closeButtonPressedBorderColor": "#000000",
 "gap": 10,
 "closeButtonPaddingLeft": 0,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "closeButtonPaddingBottom": 0,
 "data": {
  "name": "Window3809"
 },
 "closeButtonRollOverBackgroundOpacity": 1,
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedBorderSize": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 69.01,
   "yaw": -64.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173"
  },
  {
   "backwardYaw": -109.56,
   "yaw": -127.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53"
  },
  {
   "backwardYaw": 68.4,
   "yaw": -94.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4"
  },
  {
   "backwardYaw": -106.4,
   "yaw": 84.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE"
  },
  {
   "backwardYaw": -113.24,
   "yaw": 3.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649"
  }
 ],
 "class": "Panorama",
 "hfov": 263.39,
 "label": "rightcooridoor",
 "id": "panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_t.jpg",
 "pitch": -7.99,
 "partial": true,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_t.jpg"
  }
 ],
 "vfov": 62.1,
 "overlays": [
  "this.overlay_6854E312_78CE_5A84_41DC_30A4C479169B",
  "this.overlay_6803A47B_78C6_5F7B_41C1_6A052BD688F2",
  "this.overlay_69AFD036_78CA_568C_41BF_B01840300243",
  "this.overlay_94935385_8316_2645_41CB_96A355BE371C",
  "this.overlay_946C7F8E_8316_7E46_41D7_70F5CE35512A"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_t.jpg"
  }
 ],
 "vfov": 84.71,
 "hfov": 360,
 "label": "room2",
 "id": "panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_737D3DD2_78B9_A984_41BE_72B90A5646D3_t.jpg",
 "pitch": -2.81
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 176.49,
   "yaw": -9.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_62830609_72C7_41EF_41CB_5673A5B66BA1",
 "thumbnailUrl": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_t.jpg",
 "label": "lab102.2",
 "pitch": -5.16,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_t.jpg"
  }
 ],
 "vfov": 65.17,
 "overlays": [
  "this.overlay_64E823A1_723F_C6DF_41AE_AC9001E868AA"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 50.86,
   "yaw": -82.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522"
  },
  {
   "backwardYaw": 50.86,
   "yaw": -144.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6",
 "thumbnailUrl": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_t.jpg",
 "label": "164",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_t.jpg"
  }
 ],
 "vfov": 85.11,
 "overlays": [
  "this.overlay_755DB10D_65B5_772B_41C4_00F2A279D95A",
  "this.overlay_74FCDDDB_65B2_AF2F_41D4_69CA87397091"
 ]
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_9B051F92_8B3D_33D3_41D8_931FAB5D9E75",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_9B036F93_8B3D_33D1_41E0_5138BD24631E"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window9882"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -170.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_9745BDA5_9B56_3500_41DD_A7D113C83FD0",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_t.jpg"
  }
 ],
 "vfov": 63.91,
 "hfov": 360,
 "label": "leftroom",
 "id": "panorama_66F48F21_7053_FF72_41CC_338C0456A8D8",
 "thumbnailUrl": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_t.jpg",
 "pitch": -5.76,
 "overlays": [
  "this.overlay_70307665_7DA6_1404_41BD_E3D3BBA20DC6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.24,
   "yaw": 68.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  },
  {
   "backwardYaw": -94.24,
   "yaw": 140.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_68963652_78C9_FA84_41D3_30E9234A7AC4",
 "thumbnailUrl": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_t.jpg",
 "label": "right room",
 "pitch": -5.8,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/0/{row}_{column}.jpg",
      "rowCount": 14,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 7168,
      "colCount": 14,
      "height": 7168
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_t.jpg"
  }
 ],
 "vfov": 62.89,
 "overlays": [
  "this.overlay_6BD3DF15_78CF_EA8C_41D5_6EBD41E4832C",
  "this.overlay_6A8CE6AE_78CE_BB9C_41DB_EB9AD1803C48"
 ]
},
{
 "bodyBackgroundColorDirection": "vertical",
 "id": "window_858FB009_94B6_25D5_41B4_1F5FBBA663F3",
 "scrollBarColor": "#000000",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "width": 400,
 "bodyPaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "shadowHorizontalLength": 3,
 "headerVerticalAlign": "middle",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "scrollBarVisible": "rollOver",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "modal": true,
 "verticalAlign": "middle",
 "bodyBackgroundOpacity": 1,
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "titlePaddingLeft": 5,
 "titleFontSize": "1.29vmin",
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "bodyPaddingTop": 5,
 "headerBorderSize": 0,
 "title": "",
 "bodyPaddingBottom": 5,
 "titleFontWeight": "normal",
 "footerHeight": 5,
 "height": 600,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "veilColorDirection": "horizontal",
 "closeButtonBackgroundColor": [],
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "titlePaddingTop": 5,
 "propagateClick": false,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "overflow": "scroll",
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerPaddingRight": 10,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingRight": 5,
 "children": [
  "this.htmlText_858D4009_94B6_25D5_41DC_91236978DBC4"
 ],
 "layout": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonIconHeight": 12,
 "bodyBorderSize": 0,
 "borderSize": 0,
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "shadowVerticalLength": 0,
 "headerPaddingBottom": 10,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "closeButtonIconColor": "#000000",
 "headerBorderColor": "#000000",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "class": "Window",
 "closeButtonBorderRadius": 11,
 "gap": 10,
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "headerPaddingLeft": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderRadius": 5,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyPaddingLeft": 5,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "paddingBottom": 0,
 "titleTextDecoration": "none",
 "data": {
  "name": "Window4991"
 },
 "titlePaddingBottom": 5,
 "backgroundColorRatios": [],
 "closeButtonBackgroundColorRatios": [],
 "shadow": true,
 "closeButtonPressedIconColor": "#FFFFFF",
 "scrollBarWidth": 10,
 "closeButtonIconWidth": 12,
 "bodyBorderColor": "#000000"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 51.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_96131AF1_9B56_3F00_41D0_77F5DF67BDAC",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -172.48,
   "yaw": 93.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA",
 "thumbnailUrl": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_t.jpg",
 "label": "smartlab2",
 "pitch": -6.76,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/0/{row}_{column}.jpg",
      "rowCount": 13,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 6656,
      "colCount": 13,
      "height": 6656
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/1/{row}_{column}.jpg",
      "rowCount": 7,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3584,
      "colCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/2/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_t.jpg"
  }
 ],
 "vfov": 64.87,
 "overlays": [
  "this.overlay_61BB297B_7032_E3D6_41D3_E7B64B6A14DE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 9.66,
   "yaw": -170.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A",
 "thumbnailUrl": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_t.jpg",
 "label": "Entrance1",
 "pitch": 4.85,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_t.jpg"
  }
 ],
 "vfov": 81.61,
 "overlays": [
  "this.overlay_2E0F5BBC_27CE_AC93_4188_ECB314955772"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -101.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_974409E7_9B56_3D00_41CA_22E69237B1F5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.88,
  "class": "PanoramaCameraPosition",
  "pitch": -8.18
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 66.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_97312E09_9B56_3700_41C3_19A38BC9027E",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -64.87,
   "yaw": 69.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  },
  {
   "backwardYaw": -64.87,
   "yaw": 142.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F"
  }
 ],
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "id": "panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173",
 "hfovMin": "150%",
 "thumbnailUrl": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_t.jpg",
 "label": "12",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_t.jpg"
  }
 ],
 "vfov": 62.88,
 "overlays": [
  "this.overlay_95D004F3_831E_E3DD_41A4_751587969106",
  "this.overlay_9A2E427F_831F_E6C6_41D2_558351D2B508"
 ]
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "minHeight": 50,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "minWidth": 100,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 1900,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "shadow": false,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A, this.camera_965ECAC6_9B56_3F01_41D4_46A0AE0EE813); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.79,
   "image": "this.AnimatedImageResource_73F773D8_65DE_DB29_41D6_5DECD0CA123C",
   "pitch": 0.6,
   "yaw": 115.61,
   "distance": 100
  }
 ],
 "id": "overlay_6A97DFD8_65BF_AB2A_41C3_3E50220C5DA6",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.79,
   "yaw": 115.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965, this.camera_96131AF1_9B56_3F00_41D0_77F5DF67BDAC); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_7388F3D8_65DE_DB29_41D3_E661C0F6773E",
   "pitch": 0.32,
   "yaw": 137.87,
   "distance": 100
  }
 ],
 "id": "overlay_6A36C49D_65BD_DD2A_41C4_B37802ADF778",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.62,
   "yaw": 137.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6, this.camera_9671CADD_9B56_3F00_41A4_3D003DAA2BEC); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.03,
   "image": "this.AnimatedImageResource_738883D8_65DE_DB29_41D8_0BD42A5DFC3C",
   "pitch": 0.85,
   "yaw": 50.86,
   "distance": 100
  }
 ],
 "id": "overlay_6A77C71E_65B3_7B26_41D2_00F45DD39300",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.03,
   "yaw": 50.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6, this.camera_9661BAE7_9B56_3F00_41C0_3F1846F56B51); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.34,
   "image": "this.AnimatedImageResource_738833D8_65DE_DB29_41D8_13C704DE6E4B",
   "pitch": -0.95,
   "yaw": -87.18,
   "distance": 100
  }
 ],
 "id": "overlay_778A81BE_65D5_7766_41C5_A6B5B445518E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.34,
   "yaw": -87.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965, this.camera_96037B03_9B56_3D07_41E1_B759E3B40D99); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.67,
   "image": "this.AnimatedImageResource_7389C3D8_65DE_DB29_41D6_08F78DF82023",
   "pitch": -5.05,
   "yaw": -136.74,
   "distance": 100
  }
 ],
 "id": "overlay_77AC7450_65D6_DD39_4194_F5631E76AD62",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.67,
   "yaw": -136.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.05
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_93781399_8112_264D_41B4_F8F1B66BD413, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_5_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": 0.92,
   "yaw": 149.15
  }
 ],
 "id": "overlay_93B90AB1_8112_265A_41C4_6131B4DE8977",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.74,
   "yaw": 149.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 0.92
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_91C357FE_811E_EDC6_41D7_215DACA0E05F, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_6_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 85
     }
    ]
   },
   "pitch": -1.8,
   "yaw": 33.34
  }
 ],
 "id": "overlay_91D3D869_811E_E2CA_41A8_A017BDE58671",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.74,
   "yaw": 33.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -1.8
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_90E07BEC_811F_E5CA_41D0_BD62A705D18A, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_7_0.png",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ]
   },
   "pitch": 2.13,
   "yaw": 107.98
  }
 ],
 "id": "overlay_93036C95_811F_E25A_41CD_F1911FDFB525",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.54,
   "yaw": 107.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 2.13
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_91751701_811E_6E3A_41B5_BC02B3447475, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_8_0.png",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ]
   },
   "pitch": 1.5,
   "yaw": 75.24
  }
 ],
 "id": "overlay_9185B75D_811E_6ECA_41B3_20BE41C05B02",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.54,
   "yaw": 75.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 1.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_964F3AD3_9B56_3F00_41C3_4E8A5A584C1C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.28,
   "image": "this.AnimatedImageResource_9593FA4E_816F_E6C6_41D7_975389A24AB6",
   "pitch": -20.48,
   "yaw": 90.97,
   "distance": 100
  }
 ],
 "id": "overlay_9091F2C0_812E_663A_41DD_7F9ECB63A616",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.28,
   "yaw": 90.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_9_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_978B4AA0_9B56_3F00_41D0_54C13C15F4FD); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.23,
   "image": "this.AnimatedImageResource_330BC3FC_209F_5D86_41AE_F461D94B2853",
   "pitch": -1.65,
   "yaw": -128.09,
   "distance": 100
  }
 ],
 "id": "overlay_330B46B1_2096_C79E_414D_EE196269949D",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.23,
   "yaw": -128.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_97BB8AAA_9B56_3F00_41C8_F001721641E4); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.31,
   "image": "this.AnimatedImageResource_330BA3FC_209F_5D86_41A1_C6271D6C346D",
   "pitch": 0.96,
   "yaw": -50.95,
   "distance": 100
  }
 ],
 "id": "overlay_34F412D5_209B_5F87_41B7_5D443005399A",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.31,
   "yaw": -50.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_90A63D4C_9B56_3501_41D7_90D775A5ADEA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.28,
   "image": "this.AnimatedImageResource_623D6446_6DC5_4265_41D8_D156A0ECF425",
   "pitch": -2.23,
   "yaw": 29.69,
   "distance": 100
  }
 ],
 "id": "overlay_62660C43_6DC4_C263_41D3_3E8F8E668547",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.28,
   "yaw": 29.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.23
  }
 ]
},
{
 "id": "htmlText_9A5A38C5_94BE_E65C_41C4_24A621E0CCD6",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>FACULTY OFFICE</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText3169"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_97994A96_9B56_3F00_41C8_E0B7F724084A); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.91,
   "image": "this.AnimatedImageResource_999A6408_8136_224B_41D6_D6717CF937AA",
   "pitch": -6.76,
   "yaw": 47.25,
   "distance": 100
  }
 ],
 "id": "overlay_953A215D_8132_22C5_41CF_FD7BB5A2148D",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.91,
   "yaw": 47.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.76
  }
 ]
},
{
 "id": "htmlText_9A0D6570_8B22_D750_41BE_D81891BE9E5B",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Faculty Office</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText11208"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_91C767FA_811E_EDCE_41CF_65993588ACB5",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 164</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText13828"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47, this.camera_977DF9FE_9B56_3D01_41BB_6009D8FAA312); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.5,
   "image": "this.AnimatedImageResource_BA0E1744_AB8C_CFCB_41AF_4BE2DAD80CD8",
   "pitch": -16.35,
   "yaw": -39.6,
   "distance": 100
  }
 ],
 "id": "overlay_A67546E7_AB8C_4ED4_41CA_09A559A3AF75",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.5,
   "yaw": -39.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E, this.camera_97635A07_9B56_3F0F_41D3_89FF17772D60); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.43,
   "image": "this.AnimatedImageResource_5B57D31C_5541_95E3_41CD_B3D801DEC717",
   "pitch": -18.44,
   "yaw": 104.17,
   "distance": 100
  }
 ],
 "id": "overlay_581356E7_5543_BC2D_41D3_1067E1CAA752",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.43,
   "yaw": 104.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_97163A1A_9B56_3F00_41E1_FE09CAC14277); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.43,
   "image": "this.AnimatedImageResource_99F223DD_8136_25CA_41DF_1E9EBA38A755",
   "pitch": -11.96,
   "yaw": 84.94,
   "distance": 100
  }
 ],
 "id": "overlay_6155A733_72C3_CE23_41CA_96783A0F5A35",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.43,
   "yaw": 84.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_970BDA30_9B56_3F01_41AA_58B3C2FCE370); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.97,
   "image": "this.AnimatedImageResource_66F2BF21_72C7_7FDF_41BC_B2E06D4108CB",
   "pitch": -12.92,
   "yaw": -90.51,
   "distance": 100
  }
 ],
 "id": "overlay_6768CCFD_72DC_C227_41D0_30ABBF7555DC",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.97,
   "yaw": -90.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_64882088_72C3_C2ED_41D0_0CC0426D5922, this.camera_9719BA26_9B56_3F00_41B9_8B33563766FB); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.12,
   "image": "this.AnimatedImageResource_66F22F21_72C7_7FDF_41C7_1B515F89D7AB",
   "pitch": -28.98,
   "yaw": -115.33,
   "distance": 50
  }
 ],
 "id": "overlay_6955A86A_72C5_C22D_41DC_240C10260780",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.12,
   "yaw": -115.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.98
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_99D47374_8B2D_5357_41D6_6F850F6E5767, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_5_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 63
     }
    ]
   },
   "pitch": -5.36,
   "yaw": -63.47
  }
 ],
 "id": "overlay_9A950EB0_8B2D_35EF_41DE_2E9BAD5F58D1",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.14,
   "yaw": -63.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -5.36
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9AC5E6B9_8B2F_35D0_41C5_EB5BBA2C386B, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.17,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_6_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 63
     }
    ]
   },
   "pitch": 0.79,
   "yaw": 99.54
  }
 ],
 "id": "overlay_9AFBA737_8B2F_34D1_41E0_13CF7F50098A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.17,
   "yaw": 99.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": 0.79
  }
 ]
},
{
 "id": "htmlText_917546FD_811E_6FCA_41C4_485076B5204A",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>FACULTY OFFICE</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText13828"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_9A798B2C_8AE7_5CF0_41C8_CD820ADF03D8",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Dr Hafiz Faisal ( Chairman of the CS Department)</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText5014"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_96A9CBEC_9B56_3D00_41C4_AD4385108048); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.26,
   "image": "this.AnimatedImageResource_8D852B71_8348_2362_41D8_2263BA7E52F6",
   "pitch": -30.87,
   "yaw": 75.91,
   "distance": 100
  }
 ],
 "id": "overlay_8D9C4032_8348_DCE6_41C9_15041FDC3BEA",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.26,
   "yaw": 75.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF, this.camera_945EFCED_9B56_3B00_41CD_5F80B9CB4534); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.75,
   "image": "this.AnimatedImageResource_6184AFB6_6FF6_BF5E_41A1_EB310FF5615A",
   "pitch": -34.87,
   "yaw": -125.17,
   "distance": 100
  }
 ],
 "id": "overlay_618446F2_6FF2_EED6_41BB_34A5952BEDF6",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.75,
   "yaw": -125.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C, this.camera_95AEECE3_9B56_3B00_41D6_B1422F663A46); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.57,
   "image": "this.AnimatedImageResource_61273346_6FFE_A73E_41D1_A23BB5C8F892",
   "pitch": -36.71,
   "yaw": 170.44,
   "distance": 100
  }
 ],
 "id": "overlay_6176939F_6FFF_A74E_41D0_8D9F295097C2",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.57,
   "yaw": 170.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_94405CF7_9B56_3B00_41E3_25BBF426C770); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.21,
   "image": "this.AnimatedImageResource_613B096B_6FF2_A3F6_41D3_D4564C949377",
   "pitch": -16.02,
   "yaw": 21.03,
   "distance": 100
  }
 ],
 "id": "overlay_60C9DA1B_6FF3_A156_41B4_A22292FB47BC",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.21,
   "yaw": 21.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.02
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_8F61F791_80F2_2E5A_41DE_9E8D5C2A8B81, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.92,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_3_0.png",
      "width": 450,
      "class": "ImageResourceLevel",
      "height": 582
     }
    ]
   },
   "pitch": -6.19,
   "yaw": -153.99
  }
 ],
 "id": "overlay_8F56D9CD_80F2_E5CA_41DF_E2E4BF90FA4B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.92,
   "yaw": -153.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "pitch": -6.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_96BD8935_9B56_3D03_4195_F55F5F489782); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.19,
   "image": "this.AnimatedImageResource_BA0F6745_AB8C_CFD5_41E5_3958CE687D57",
   "pitch": -12.61,
   "yaw": -129.47,
   "distance": 100
  }
 ],
 "id": "overlay_A5F03DCD_AB8C_42D4_41E3_EF335D747B4B",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.19,
   "yaw": -129.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.3,
   "image": "this.AnimatedImageResource_2CDB1635_27CE_679C_41AB_B9D5D513632C",
   "pitch": -17.72,
   "yaw": -175.71,
   "distance": 100
  }
 ],
 "id": "overlay_2D623BF2_27CE_EC97_41B8_69B15940F49C",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.3,
   "yaw": -175.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A, this.camera_97F52A6E_9B56_3F01_41DC_B1B188194555); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.58,
   "image": "this.AnimatedImageResource_2CDB3636_27CE_679C_41C2_675370C71252",
   "pitch": -10.1,
   "yaw": 9.66,
   "distance": 100
  }
 ],
 "id": "overlay_2D622BF2_27CE_EC97_41B7_707F7B7133BB",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.58,
   "yaw": 9.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.1
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_847C1B42_8AE3_3CB0_41BD_6BE3A132A323, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0_HS_2_0.png",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": -4.96,
   "yaw": -142.63
  }
 ],
 "id": "overlay_8703B6CA_8AE3_55B3_41DC_E8A69D16418F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.73,
   "yaw": -142.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.96
  }
 ]
},
{
 "id": "htmlText_930A7FED_8116_7DCA_41CC_FFC200A7DF91",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 162</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText11392"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_9A10A1EB_8B63_4F71_41D0_67DBDEA63BE8",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Exam office</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText3810"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_90861999_9B56_3D00_41E2_27F9B41299E2); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.8,
   "image": "this.AnimatedImageResource_658895FF_7033_A2CE_41B5_5686CE0997A5",
   "pitch": -20.21,
   "yaw": 60.76,
   "distance": 100
  }
 ],
 "id": "overlay_61118D3D_7037_E352_41DB_D9CAFC4E92D4",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.8,
   "yaw": 60.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA, this.camera_908B59AA_9B56_3D00_41D9_887F7CB8FF6C); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.72,
   "image": "this.AnimatedImageResource_659745FF_7033_A2CE_41D2_FC9AB5CE0BDC",
   "pitch": -16.32,
   "yaw": -172.48,
   "distance": 100
  }
 ],
 "id": "overlay_611F8621_7035_6172_41D7_6BFE4C4F7884",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.72,
   "yaw": -172.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2, this.camera_95EC5CB0_9B56_3B00_41D6_65D6BD20A998); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.82,
   "image": "this.AnimatedImageResource_66CCB848_7244_C26D_41BB_FEC240383672",
   "pitch": -29.72,
   "yaw": 60.58,
   "distance": 100
  }
 ],
 "id": "overlay_63E529C5_72C3_4267_41D8_62C5880B7C03",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.82,
   "yaw": 60.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62830609_72C7_41EF_41CB_5673A5B66BA1, this.camera_959BACBA_9B56_3B00_41BC_8BA6B8A5FAEC); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.92,
   "image": "this.AnimatedImageResource_66CD2848_7244_C26D_41BA_9141058AC125",
   "pitch": -29.92,
   "yaw": 176.49,
   "distance": 100
  }
 ],
 "id": "overlay_6432FAD2_72C3_467D_41D4_9CF6239DAB9A",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.92,
   "yaw": 176.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_97ADAABC_9B56_3F01_41D9_7615C2261645); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.94,
   "image": "this.AnimatedImageResource_8BB0711A_8587_AE7E_41DE_F2C9688EE780",
   "pitch": -27.65,
   "yaw": 21.79,
   "distance": 100
  }
 ],
 "id": "overlay_9D9EF786_8776_6E47_4194_18CD109E014E",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.94,
   "yaw": 21.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.65
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9ADDE73B_8AE5_34D0_41B4_7A9F7AE196CB, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.08,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_3_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": 7.84,
   "yaw": -123.91
  }
 ],
 "id": "overlay_85D472E3_8AE5_4D70_41D6_FCCA8670A9A3",
 "data": {
  "label": "Arrow 07"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.08,
   "yaw": -123.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.84
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9A785B24_8AE7_5CF0_41A7_0D68A5869852, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_4_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": 9.89,
   "yaw": -142.75
  }
 ],
 "id": "overlay_9A668BAE_8AE7_53F0_4191_B174BE73E392",
 "data": {
  "label": "Arrow 07"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.04,
   "yaw": -142.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.89
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_85B8F0B0_8AE5_CDD0_41DC_7F2F78C507E6, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_5_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": 6.61,
   "yaw": -179.81
  }
 ],
 "id": "overlay_85AC9137_8AE5_CCD0_41BC_148E9963C030",
 "data": {
  "label": "Arrow 07"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.88,
   "yaw": -179.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.61
  }
 ]
},
{
 "id": "htmlText_99D67374_8B2D_5357_41D7_50A9995C46C8",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Girls Common Room</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText21951"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_96887BC2_9B56_3D01_41C7_59430621E094); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.6,
   "image": "this.AnimatedImageResource_2CDCA633_27CE_6794_41C2_481AAE50FED9",
   "pitch": -4.23,
   "yaw": 145,
   "distance": 100
  }
 ],
 "id": "overlay_2E01E13C_27CE_FD93_41B0_E300E032BAE9",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.6,
   "yaw": 145,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_1_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_96B84BDC_9B56_3D01_41D3_E330318BB196); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.91,
   "image": "this.AnimatedImageResource_2CDCF634_27CE_679C_41B3_2D6F6A66500C",
   "pitch": -4.29,
   "yaw": -25.06,
   "distance": 100
  }
 ],
 "id": "overlay_2E01913D_27CE_FD8D_41B0_F4A692BC5FD2",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.91,
   "yaw": -25.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.45,
   "image": "this.AnimatedImageResource_9690C25C_8112_26CA_41DC_462486DAABD0",
   "pitch": -32.84,
   "yaw": -127.17,
   "distance": 100
  }
 ],
 "id": "overlay_9495A4E7_8112_23C6_41D9_C30E13F341D4",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.45,
   "yaw": -127.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E, this.camera_9696AB7C_9B56_3D00_4175_DA7128A8A3C2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.69,
   "image": "this.AnimatedImageResource_9690125C_8112_26CA_41D5_9022AAB2E2FC",
   "pitch": -22.92,
   "yaw": 25.19,
   "distance": 100
  }
 ],
 "id": "overlay_949BA3B9_8112_E64A_41B7_69393FF5C01E",
 "data": {
  "label": "stairs"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.69,
   "yaw": 25.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_9CF4C929_876E_624D_41DC_0769C9491F92, this.camera_96982BA8_9B56_3D00_41DC_777485C87168); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.84,
   "image": "this.AnimatedImageResource_9CE79B2F_876E_2646_41AE_CB5D2A70EC5C",
   "pitch": -20.86,
   "yaw": 64.08,
   "distance": 100
  }
 ],
 "id": "overlay_9C32118D_876E_2245_410D_913B539FFF40",
 "data": {
  "label": "stairs"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.84,
   "yaw": 64.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_5_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.86
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9A67F38A_8B2D_53B0_41B9_6C85EE6C5FC4, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.72,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_6_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 69
     }
    ]
   },
   "pitch": -4.98,
   "yaw": 103.6
  }
 ],
 "id": "overlay_9A662754_8B2D_D350_41B7_F2481D85F6B3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.72,
   "yaw": 103.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.98
  }
 ]
},
{
 "id": "htmlText_8E963203_80FE_263E_41D4_06402CC4A65A",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is Gaming Lab for students</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText3810"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_95CAFC99_9B56_3B03_41D9_2CB4189F7F4A); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.5,
   "image": "this.AnimatedImageResource_999AC408_8136_224B_41DD_392C9B7107A6",
   "pitch": 0.54,
   "yaw": -64.72,
   "distance": 100
  }
 ],
 "id": "overlay_94FA217B_8136_22CE_41DF_978D12B255E8",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.5,
   "yaw": -64.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_97D71E20_9B56_3701_41DA_D21BCA5EDB56); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.32,
   "image": "this.AnimatedImageResource_97ED9480_8136_623B_41D7_FEFEBEE93093",
   "pitch": 14.47,
   "yaw": 90.85,
   "distance": 100
  }
 ],
 "id": "overlay_925B6DE7_8136_3DC6_41B4_EA198C47EA46",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.32,
   "yaw": 90.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.47
  }
 ]
},
{
 "id": "htmlText_99B6C2EA_8B25_4D70_41BC_D0072CFF3553",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Exam Office </B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19433"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_847C0B46_8AE3_3CB0_41E0_DCE9CA457047",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is Department of CS &amp; IT. Ground floor is for Computer Science and 1st for Information technology . CS contains 3 labs and 6 rooms. IT contains also 3 labs and 7 rooms. Every department have separate Exam office,staff offices, common room and refreshment rooms</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText3029"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_93074083_8116_623E_41D8_71C93AB6BA46",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 163</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText11392"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_90E1DBE5_811F_E5C5_41CE_CCF678CC563E",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB CONFERENCE ROOM</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText13828"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_95598C0E_9B56_3B00_41DD_AB102127C5CC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.3,
   "image": "this.AnimatedImageResource_2CDB6637_27CE_679C_41BB_1B15208287E2",
   "pitch": -2.74,
   "yaw": 94.32,
   "distance": 100
  }
 ],
 "id": "overlay_2D8B8F0D_27CE_A58C_41C1_EFF6C48936DD",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.3,
   "yaw": 94.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.68,
   "image": "this.AnimatedImageResource_91DD483D_86AB_FC05_41BB_FAD345916D60",
   "pitch": -9.82,
   "yaw": 83.37,
   "distance": 100
  }
 ],
 "id": "overlay_7376A1CF_7DAA_6C05_41CC_41AE122D490D",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.68,
   "yaw": 83.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2C1A3955_2095_CA86_41BC_F803A92D6453, this.camera_95674C3B_9B56_3B07_41B3_A3CE1004E15C); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.33,
   "image": "this.AnimatedImageResource_31AF709F_2095_DB82_41A0_08A1BFA42A8E",
   "pitch": -6.28,
   "yaw": -29.81,
   "distance": 100
  }
 ],
 "id": "overlay_2F9AE2D0_2097_5F9E_417F_7C0822DCC9FC",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.33,
   "yaw": -29.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB, this.camera_95183C58_9B56_3B01_41D8_5037AE6A6CB1); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.22,
   "image": "this.AnimatedImageResource_31EE65DA_20B7_C58D_41B4_8A3334FDFA98",
   "pitch": -28.41,
   "yaw": 163.01,
   "distance": 100
  }
 ],
 "id": "overlay_2F7F3A1E_20B6_CE85_41BB_8ECBCD786C87",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.22,
   "yaw": 163.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_5_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_95681C4A_9B56_3B01_41D0_9F58190A3B3A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.32,
   "image": "this.AnimatedImageResource_3208D456_2095_FA85_41BD_923A8DF60131",
   "pitch": -20.44,
   "yaw": -175.76,
   "distance": 100
  }
 ],
 "id": "overlay_305E4CEA_2096_CB82_41B7_7E68997D1CF0",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.32,
   "yaw": -175.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_6_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.44
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9052A38B_8116_264E_41D3_EF74C49C4C18, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.92,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_7_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -5.96,
   "yaw": -11.47
  }
 ],
 "id": "overlay_910E08EC_8112_63CA_41AD_908057F90911",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.92,
   "yaw": -11.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -5.96
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_930A9FED_8116_7DCA_41D6_95238BB60789, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_8_0.png",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "pitch": -0.84,
   "yaw": 77.61
  }
 ],
 "id": "overlay_8EF90182_8112_223F_4196_7ECEC51DA8E5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.73,
   "yaw": 77.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": -0.84
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_93065083_8116_623E_41B6_8DC2B5569A6D, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.72,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_9_0.png",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "pitch": 4.48,
   "yaw": 150.1
  }
 ],
 "id": "overlay_9333B114_8116_625A_41B8_CB4E512C11C2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.72,
   "yaw": 150.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "pitch": 4.48
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_91F7DFD7_8112_7DC5_41B9_4AB894ED5BF1, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_11_0.png",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "pitch": -3.3,
   "yaw": -150.1
  }
 ],
 "id": "overlay_855693B3_8ADE_D3D1_41CE_E5D183FB472A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.54,
   "yaw": -150.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": -3.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62D183DF_72CD_4663_41D0_062874C5F8E2, this.camera_974409E7_9B56_3D00_41CA_22E69237B1F5); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.32,
   "image": "this.AnimatedImageResource_66C26848_7244_C26D_41C1_B3A2C3F7384D",
   "pitch": -21.66,
   "yaw": 159.11,
   "distance": 100
  }
 ],
 "id": "overlay_612CC06F_72CD_C223_41C2_56DE8B6299F2",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.32,
   "yaw": 159.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_975009D5_9B56_3D00_41D4_672C8FED2326); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.07,
   "image": "this.AnimatedImageResource_66C2D848_7244_C26D_418C_EBE7E276B59C",
   "pitch": -23.23,
   "yaw": -106.82,
   "distance": 100
  }
 ],
 "id": "overlay_62C7CA2E_72CC_C625_41D6_44B5A63D6A34",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.07,
   "yaw": -106.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328, this.camera_9749E9F3_9B56_3D00_41BF_0054EF6A45F4); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.38,
   "image": "this.AnimatedImageResource_6677999B_7243_C2E3_41A2_AE213968F862",
   "pitch": -19.21,
   "yaw": -85.39,
   "distance": 100
  }
 ],
 "id": "overlay_65923DA3_7245_C223_41D1_FE1BFE70C46D",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.38,
   "yaw": -85.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.21
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_858FB009_94B6_25D5_41B4_1F5FBBA663F3, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_3_0.png",
      "width": 163,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ]
   },
   "pitch": -3.39,
   "yaw": 78.15
  }
 ],
 "id": "overlay_85D57C05_94BA_3DDD_41BC_29B0A6650DEA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.96,
   "yaw": 78.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.39
  }
 ]
},
{
 "id": "htmlText_9ADC173B_8AE5_34D0_41DA_8427FD200960",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>This is admin office.</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText5014"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.2,
   "image": "this.AnimatedImageResource_7CD542DB_6FEF_66D6_41BC_64852276CDD4",
   "pitch": -9.88,
   "yaw": -173.51,
   "distance": 100
  }
 ],
 "id": "overlay_6057515A_6FF2_E3D6_41CB_9577DD48D455",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.2,
   "yaw": -173.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C, this.camera_977E2DC4_9B56_3500_41D6_4350C82789FA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.83,
   "image": "this.AnimatedImageResource_7CD4B2DB_6FEF_66D6_41CC_715E40B0D18D",
   "pitch": -15.61,
   "yaw": 5.46,
   "distance": 100
  }
 ],
 "id": "overlay_7FE3BEF8_6FF3_9ED2_41CA_F4E9C9BAB020",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.83,
   "yaw": 5.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.61
  }
 ]
},
{
 "id": "htmlText_85BEE0B4_8AE5_CDD0_4186_A3362FAE120B",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Dr . Muhammad ilyas Office (Dean Office)</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText5014"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A, this.camera_9634AB10_9B56_3D00_41DB_F3DD1DA444CA); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.76,
   "image": "this.AnimatedImageResource_7D6FE93F_6DC3_4223_41D5_DB630CB04F32",
   "pitch": -3.83,
   "yaw": 58.98,
   "distance": 100
  }
 ],
 "id": "overlay_7D6F2A04_6DFF_41E5_41C2_8816C37AFAA2",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.76,
   "yaw": 58.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.83
  }
 ]
},
{
 "id": "htmlText_9AC326BD_8B2F_35D0_41E1_1A8560F0C5DC",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB LAB 101 </B></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB LAB 102</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText21951"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_8F7E114F_80F6_22C5_41C0_E53AAC09295F",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 160</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText3810"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_974F4DB0_9B56_3501_41E1_CF4E0D250F6D); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.49,
   "image": "this.AnimatedImageResource_951D0689_8312_2E4D_41C8_79BF60528510",
   "pitch": 1.76,
   "yaw": -106.4,
   "distance": 100
  }
 ],
 "id": "overlay_95125FF4_831E_1DDA_41BF_BE87B4B04A2C",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.49,
   "yaw": -106.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_97773DB9_9B56_3503_41AE_BBC2E42B9DAC); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.25,
   "image": "this.AnimatedImageResource_951D668A_8312_2E4F_41C9_33E2523F64DC",
   "pitch": 2.99,
   "yaw": -43.54,
   "distance": 100
  }
 ],
 "id": "overlay_9569899C_8312_224A_41DA_9C6E5EAF6507",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.25,
   "yaw": -43.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_90EF996E_9B56_3D01_41D0_FFA79DE2EDCA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.65,
   "image": "this.AnimatedImageResource_6B8D57FE_72CF_4E25_419F_E56C3EE4BE0F",
   "pitch": -29.74,
   "yaw": 154.2,
   "distance": 100
  }
 ],
 "id": "overlay_67D9CD83_72C3_C2E3_41D2_98E01CCB813D",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.65,
   "yaw": 154.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.74
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9B051F92_8B3D_33D3_41D8_931FAB5D9E75, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_1_0.png",
      "width": 218,
      "class": "ImageResourceLevel",
      "height": 218
     }
    ]
   },
   "pitch": -0.67,
   "yaw": 92.76
  }
 ],
 "id": "overlay_9B312B34_8B2D_3CD0_41D0_5EEFBB2DF4DF",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": 92.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.67
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9BCA6D39_8B23_F4D1_41D9_0394666A9A47, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.05,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_2_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 181
     }
    ]
   },
   "pitch": -2.1,
   "yaw": 6.14
  }
 ],
 "id": "overlay_84B384A9_8B2D_D5F1_41D6_45F3BDAC433D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.05,
   "yaw": 6.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.1
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9A0D356F_8B22_D770_41C4_E25F69FBC9A9, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_3_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ]
   },
   "pitch": -4.35,
   "yaw": -86.21
  }
 ],
 "id": "overlay_84E76BA7_8B2D_33F0_41C6_8721806B2A43",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.8,
   "yaw": -86.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -4.35
  }
 ]
},
{
 "id": "htmlText_937A039D_8112_2645_41CD_7183A7E1C312",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 165</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText13828"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_91F3EFD7_8112_7DC5_41B9_67DB4264CEAF",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>FACULTY OFFICE</B></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Sr Waseem Ahmed</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Mudassar Ali</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Hassan Zaidi</B></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Muhammad Fahad</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText10260"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_9AEF5D6E_8B25_7770_41D7_768CE607F4A2",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Discussion Room</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19433"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_63584076_72C4_C225_41D9_7003B7355FB0, this.camera_97560D7C_9B56_3500_41BE_508E4B68AC34); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.88,
   "image": "this.AnimatedImageResource_66C32848_7244_C26D_41D0_D33553A197BC",
   "pitch": -26.72,
   "yaw": 78.87,
   "distance": 100
  }
 ],
 "id": "overlay_62A9550E_72C4_C3E5_41CA_485470CFFD35",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.88,
   "yaw": 78.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_90A17D5F_9B56_353F_41D6_E98082718400); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.28,
   "image": "this.AnimatedImageResource_66C39848_7244_C26D_41DB_085476A99441",
   "pitch": -1.52,
   "yaw": -79.25,
   "distance": 100
  }
 ],
 "id": "overlay_637C86D9_72C4_CE6F_41D0_A8AEB8F2290F",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.28,
   "yaw": -79.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_90ACDD70_9B56_3501_41C1_9BECE80ECE45); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.28,
   "image": "this.AnimatedImageResource_986761FF_94B7_E62C_41E0_CD190EE0AC59",
   "pitch": -1.93,
   "yaw": -114.88,
   "distance": 100
  }
 ],
 "id": "overlay_9945CEA8_8B23_D5FF_41D8_3D65598F7B91",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.28,
   "yaw": -114.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.93
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9AED1D6E_8B25_7770_41A3_D352F6C47707, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.6,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_4_0.png",
      "width": 507,
      "class": "ImageResourceLevel",
      "height": 459
     }
    ]
   },
   "pitch": -1.72,
   "yaw": -16.38
  }
 ],
 "id": "overlay_9A148AC1_8B22_DDB0_41D8_8934EF2A6CCC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.6,
   "yaw": -16.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.72
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_998C32E5_8B25_4D70_41D9_97BA619E7A5F, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.57,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_5_0.png",
      "width": 507,
      "class": "ImageResourceLevel",
      "height": 459
     }
    ]
   },
   "pitch": -4.59,
   "yaw": -164.64
  }
 ],
 "id": "overlay_9A5113D4_8B25_5350_41C5_CB171ECE712C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.57,
   "yaw": -164.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.59
  }
 ]
},
{
 "id": "htmlText_9050438B_8116_264E_41D9_DD601C32EFF1",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>MAB ROOM 161</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText10260"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "id": "htmlText_8F63A791_80F2_2E5A_41A9_39698F3758E0",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">MAB-Smart Lab is on the right side </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">MAB-Lab 1 is on the left side</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText7053"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_96E77B64_9B56_3D00_41D8_13F9E60BB925); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.49,
   "image": "this.AnimatedImageResource_99E6F400_8136_223B_41D7_ABDBEF531434",
   "pitch": -18.33,
   "yaw": 148.88,
   "distance": 100
  }
 ],
 "id": "overlay_66625856_72CD_C265_41D7_3F8701B00E2D",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.49,
   "yaw": 148.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_96D48B24_9B56_3D00_41D6_FFF1BA42C40D); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.52,
   "image": "this.AnimatedImageResource_73571A63_78BA_AA84_41DC_53C532975B47",
   "pitch": -29.59,
   "yaw": -113.24,
   "distance": 100
  }
 ],
 "id": "overlay_65369CD6_765C_C265_41D1_54E96BF7AF00",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.52,
   "yaw": -113.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7, this.camera_96F5FB4C_9B56_3D01_41D7_DEC2E6A4C9B2); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.09,
   "image": "this.AnimatedImageResource_99E66400_8136_223B_41D3_519AE8A46232",
   "pitch": -17.88,
   "yaw": 123.58,
   "distance": 100
  }
 ],
 "id": "overlay_920B99C8_813E_E5CB_41BF_C3BDC0EA19D7",
 "data": {
  "label": "Circle 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.09,
   "yaw": 123.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_924072FC_8132_27CA_41C3_10021807C8E4, this.camera_96C66B2E_9B56_3D00_41E1_3F0B3DEDCEC8); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.87,
   "image": "this.AnimatedImageResource_99E7D404_8136_223B_41C5_A0F1CE02810F",
   "pitch": -11.27,
   "yaw": 133.26,
   "distance": 100
  }
 ],
 "id": "overlay_923862F3_813E_27DE_41D7_7CEF8F4B56A6",
 "data": {
  "label": "Circle 02b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.87,
   "yaw": 133.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.27
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9A5A28C5_94BE_E65C_41E0_3C397623311B, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_4_0.png",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 44
     }
    ]
   },
   "pitch": 2.35,
   "yaw": -93.72
  }
 ],
 "id": "overlay_9A27A66A_94BA_2A57_41D2_8DB8CBA072B9",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.38,
   "yaw": -93.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.35
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9BB84682_94BE_2AD7_41D6_74C6EB97E059, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.31,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_5_0.png",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 57
     }
    ]
   },
   "pitch": 0.73,
   "yaw": -138.92
  }
 ],
 "id": "overlay_9BA086C2_94BE_2A57_41BD_361B7E9830C0",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.31,
   "yaw": -138.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6, this.camera_90AC59CB_9B56_3D00_41DB_71E20C343EF3); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.31,
   "image": "this.AnimatedImageResource_7EDB20AA_6FF2_A176_41D6_3C14DF671036",
   "pitch": -21.6,
   "yaw": 39.26,
   "distance": 100
  }
 ],
 "id": "overlay_60A0DC6E_6FF6_E1CE_41BC_3DAF4075F002",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.31,
   "yaw": 39.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_90A5A9C1_9B56_3D03_41DB_48DDDDDEAC42); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.15,
   "image": "this.AnimatedImageResource_7EDAF0AA_6FF2_A176_4135_F456FF20AC30",
   "pitch": -26.02,
   "yaw": 168.74,
   "distance": 100
  }
 ],
 "id": "overlay_6055C2F0_6FF6_A6D2_41C6_D0504FFB7E8E",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.15,
   "yaw": 168.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.08,
   "image": "this.AnimatedImageResource_7E3C41E5_6FD2_A2F3_41C5_5528FA74BA28",
   "pitch": -7.51,
   "yaw": -45.26,
   "distance": 100
  }
 ],
 "id": "overlay_7FA80A1D_6FED_6152_41D0_915457C0472D",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.08,
   "yaw": -45.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.51
  }
 ]
},
{
 "id": "htmlText_9BCB9D39_8B23_F4D1_41D6_77321FE5A33F",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Head of Department Office</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText10550"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_90B169B6_9B56_3D00_41DB_E61861442565); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.48,
   "image": "this.AnimatedImageResource_2F0C29F3_209A_CD83_41BB_3FACFD6D1478",
   "pitch": -4.62,
   "yaw": -20.47,
   "distance": 100
  }
 ],
 "id": "overlay_2E47963C_209B_C686_41BF_A176F5C8EEDB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.48,
   "yaw": -20.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.62
  }
 ]
},
{
 "id": "htmlText_9BB2B688_94BE_2AD3_41CD_6B062F936A15",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>FACULTY OFFICE</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText3169"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3, this.camera_97E58A77_9B56_3F0F_41E1_5224BD21BE75); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.62,
   "image": "this.AnimatedImageResource_2CDB4636_27CE_679C_41B5_D2D577829786",
   "pitch": -4.2,
   "yaw": 64.27,
   "distance": 50
  }
 ],
 "id": "overlay_2E1CDA60_27CE_AFB4_41A5_F7426B7FECE0",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.62,
   "yaw": 64.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_97E81A8A_9B56_3F00_41D1_586D44AC2055); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.56,
   "image": "this.AnimatedImageResource_5B57531C_5541_95E3_41AF_0DD511DB92A6",
   "pitch": -35.56,
   "yaw": -23.38,
   "distance": 100
  }
 ],
 "id": "overlay_58B8AED6_5546_AC6F_41B6_7E26E95B3B8B",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.56,
   "yaw": -23.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D, this.camera_973D3A3A_9B56_3F01_41E3_5E1225A9CD8B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.19,
   "image": "this.AnimatedImageResource_604AA761_6FD2_EFF2_41C2_16AD244CB609",
   "pitch": -17.51,
   "yaw": 179.23,
   "distance": 100
  }
 ],
 "id": "overlay_62A03976_6FD3_E3DE_41C1_FDC5CDF26976",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.19,
   "yaw": 179.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0, this.camera_97D23A57_9B56_3F00_41DD_9C90AE3CE70A); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.66,
   "image": "this.AnimatedImageResource_6257BD30_702E_A352_41B3_607E6A8F1721",
   "pitch": -21.54,
   "yaw": -63.22,
   "distance": 100
  }
 ],
 "id": "overlay_620CCBA2_702F_E776_41C1_50B308F2F3C6",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.66,
   "yaw": -63.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613, this.camera_97C4DA64_9B56_3F00_41BE_66EEBE9F101B); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.53,
   "image": "this.AnimatedImageResource_7E0DF243_6DFC_C663_41D8_D022C3A2240D",
   "pitch": -0.78,
   "yaw": -15.87,
   "distance": 100
  }
 ],
 "id": "overlay_7DF4AF74_6DC5_FE25_41CB_C3D88A6FA1A8",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.53,
   "yaw": -15.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.78
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_8E966203_80FE_263E_41B1_694812EFF1F6, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_4_0.png",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ]
   },
   "pitch": -0.96,
   "yaw": 2.25
  }
 ],
 "id": "overlay_8EAA60C8_80F2_23CB_41DA_7B476039300E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.95,
   "yaw": 2.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.96
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_8F73D14F_80F6_22C5_41B3_51D4F9E9A910, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.32,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_5_0.png",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ]
   },
   "pitch": -0.34,
   "yaw": -53.8
  }
 ],
 "id": "overlay_8F5B5199_80F6_224A_41AC_8DD7589ACFB7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.32,
   "yaw": -53.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": -0.34
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_8488D8C1_8B65_7DB3_4185_C4CCB0AE683B, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_6_0.png",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ]
   },
   "pitch": 0.55,
   "yaw": 109.7
  }
 ],
 "id": "overlay_84FFE94D_8B65_7CB0_41C5_7919F36BE326",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.95,
   "yaw": 109.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.55
  }
 ]
},
{
 "areas": [
  {
   "click": "this.showWindow(this.window_9A1661E3_8B63_4F71_41DA_0C108637127E, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_7_0.png",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 64
     }
    ]
   },
   "pitch": -0.08,
   "yaw": 134.26
  }
 ],
 "id": "overlay_9B3442C2_8B63_4DB0_41D2_77EAA00990C6",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.95,
   "yaw": 134.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97, this.camera_9720BA45_9B56_3F00_41CC_17DB4A625A83); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.94,
   "image": "this.AnimatedImageResource_987271FF_94B7_E62C_41E1_BA7655290763",
   "pitch": -15.11,
   "yaw": -85.62,
   "distance": 100
  }
 ],
 "id": "overlay_9B697C42_8B5F_34B3_41D5_D6888052EC6C",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.94,
   "yaw": -85.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_8_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_958D6CC4_9B56_3B01_41E0_18A8B4BDD561); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.23,
   "image": "this.AnimatedImageResource_602142CA_78CA_5B84_41B7_8BBDCC794071",
   "pitch": -5.35,
   "yaw": -109.56,
   "distance": 100
  }
 ],
 "id": "overlay_6AA92E5C_78C9_EABC_41C1_C794B9FFD48E",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -109.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_95BD7CD7_9B56_3B00_41C2_6B8B1668A508); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.82,
   "image": "this.AnimatedImageResource_602EC2CA_78CA_5B84_4193_909C86471BC6",
   "pitch": -2.28,
   "yaw": -43.21,
   "distance": 100
  }
 ],
 "id": "overlay_6AF5D2A2_78CE_BB85_41D1_D188597B1E20",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": -43.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.28
  }
 ]
},
{
 "id": "htmlText_9A66338B_8B2D_53B0_41C6_9B971507FB42",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">On the right side MAB CR 161 to MAB-CR 165</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText17823"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D, this.camera_9723CE15_9B56_3700_41D1_AFB58CD54AE1); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.28,
   "image": "this.AnimatedImageResource_300B3A44_20AB_CE85_415F_5C619EF42DC6",
   "pitch": -3.97,
   "yaw": 141.62,
   "distance": 100
  }
 ],
 "id": "overlay_302D5BD4_20AD_4D85_41B8_F9DD191D9F97",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 11.28,
   "yaw": 141.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_9529EC7D_9B56_3B00_41DF_FB4A6AEF192B); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9,
   "image": "this.AnimatedImageResource_73F603D4_65DE_DB39_41D8_B97831B22AB7",
   "pitch": 2.21,
   "yaw": 45.26,
   "distance": 100
  }
 ],
 "id": "overlay_7749B0BD_65D6_D56B_41C7_7ABEA5F55642",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9,
   "yaw": 45.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_95DB4C8C_9B56_3B00_41DD_805EDEE9FAA4); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.49,
   "image": "this.AnimatedImageResource_73F7D3D4_65DE_DB39_41CE_AAE5E6855923",
   "pitch": 0.54,
   "yaw": -17.81,
   "distance": 100
  }
 ],
 "id": "overlay_7731F521_65D2_DF1A_41C2_F3E7CF28AB5D",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.49,
   "yaw": -17.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.54
  }
 ]
},
{
 "id": "htmlText_848E98C5_8B65_7DB0_41B2_45084EAA07FC",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Toilet for boys</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText3810"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649, this.camera_97312E09_9B56_3700_41C3_19A38BC9027E); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.11,
   "image": "this.AnimatedImageResource_602022CA_78CA_5B84_41D8_0E85F119521B",
   "pitch": -26.38,
   "yaw": 3.15,
   "distance": 100
  }
 ],
 "id": "overlay_6854E312_78CE_5A84_41DC_30A4C479169B",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.11,
   "yaw": 3.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_68963652_78C9_FA84_41D3_30E9234A7AC4, this.camera_971BCDEC_9B56_3501_41AA_E8CE09B84EB5); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.17,
   "image": "this.AnimatedImageResource_6021A2CA_78CA_5B84_41D9_D7485563227F",
   "pitch": -4.36,
   "yaw": -94.24,
   "distance": 100
  }
 ],
 "id": "overlay_6803A47B_78C6_5F7B_41C1_6A052BD688F2",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.17,
   "yaw": -94.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6833DF27_78C9_AA8B_41D7_218E52138C53, this.camera_97682DE2_9B56_3500_419D_4584069AE450); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.16,
   "image": "this.AnimatedImageResource_6021D2CA_78CA_5B84_41BA_BE06E010CEAA",
   "pitch": -5.56,
   "yaw": -127.2,
   "distance": 100
  }
 ],
 "id": "overlay_69AFD036_78CA_568C_41BF_B01840300243",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.16,
   "yaw": -127.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173, this.camera_9762BDD8_9B56_3500_41C2_3AB05C38215C); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.17,
   "image": "this.AnimatedImageResource_9E2DBB58_8312_66CA_41BF_56F1EABB02F5",
   "pitch": -4.66,
   "yaw": -64.87,
   "distance": 100
  }
 ],
 "id": "overlay_94935385_8316_2645_41CB_96A355BE371C",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.17,
   "yaw": -64.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE, this.camera_970DADF6_9B56_3501_41CD_BC382613CDE5); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.15,
   "image": "this.AnimatedImageResource_9E2D0B59_8312_66CA_41BD_253DE246B04B",
   "pitch": -6.16,
   "yaw": 84.35,
   "distance": 100
  }
 ],
 "id": "overlay_946C7F8E_8316_7E46_41D7_70F5CE35512A",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.15,
   "yaw": 84.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18, this.camera_96254B1A_9B56_3D00_41A0_8436B718DAD2); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.55,
   "image": "this.AnimatedImageResource_66CC2848_7244_C26D_41C8_A62BE351C742",
   "pitch": -26.66,
   "yaw": -9.38,
   "distance": 100
  }
 ],
 "id": "overlay_64E823A1_723F_C6DF_41AE_AC9001E868AA",
 "data": {
  "label": "Arrow 06b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.55,
   "yaw": -9.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_97510D88_9B56_3500_41E2_AFE9A5253A64); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.41,
   "image": "this.AnimatedImageResource_74EBF32A_65B3_BB6E_41B7_2D785927695F",
   "pitch": 9.92,
   "yaw": -82.14,
   "distance": 100
  }
 ],
 "id": "overlay_755DB10D_65B5_772B_41C4_00F2A279D95A",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.41,
   "yaw": -82.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522, this.camera_975ABD98_9B56_3500_41A8_29E7790057E1); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_74EA232A_65B3_BB6E_419F_527EFEA376BE",
   "pitch": 9.92,
   "yaw": -144.95,
   "distance": 100
  }
 ],
 "id": "overlay_74FCDDDB_65B2_AF2F_41D4_69CA87397091",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -144.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.92
  }
 ]
},
{
 "id": "htmlText_9B036F93_8B3D_33D1_41E0_5138BD24631E",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Admin office of IT Department</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText9883"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.69,
   "image": "this.AnimatedImageResource_91D99840_86AB_FC7B_41DF_A6C5BA796AC4",
   "pitch": -24.6,
   "yaw": -112.69,
   "distance": 100
  }
 ],
 "id": "overlay_70307665_7DA6_1404_41BD_E3D3BBA20DC6",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.69,
   "yaw": -112.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_90EAC983_9B56_3D00_41E3_401B94C0A348); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.4,
   "image": "this.AnimatedImageResource_602E72CA_78CA_5B84_41A5_0791443B885C",
   "pitch": -3.24,
   "yaw": 68.4,
   "distance": 100
  }
 ],
 "id": "overlay_6BD3DF15_78CF_EA8C_41D5_6EBD41E4832C",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.4,
   "yaw": 68.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_909FF98E_9B56_3D00_41DB_75C6BE8A3E11); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.41,
   "image": "this.AnimatedImageResource_602FC2CA_78CA_5B84_41BD_4191C6E93176",
   "pitch": -2.42,
   "yaw": 140.48,
   "distance": 100
  }
 ],
 "id": "overlay_6A8CE6AE_78CE_BB9C_41DB_EB9AD1803C48",
 "data": {
  "label": "Circle Door 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.41,
   "yaw": 140.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.42
  }
 ]
},
{
 "id": "htmlText_858D4009_94B6_25D5_41DC_91236978DBC4",
 "scrollBarColor": "#000000",
 "paddingLeft": 10,
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "paddingTop": 10,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>Toilet</B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText4992"
 },
 "scrollBarWidth": 10,
 "shadow": false,
 "propagateClick": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_60C35C53_7035_61D6_41D1_96B6807993FF, this.camera_95FC2CA5_9B56_3B03_41C0_0DBBFCE2FF18); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.82,
   "image": "this.AnimatedImageResource_618A54DB_7033_E2D7_41D2_0835F93B2AFC",
   "pitch": -13.23,
   "yaw": 93.93,
   "distance": 100
  }
 ],
 "id": "overlay_61BB297B_7032_E3D6_41D3_E7B64B6A14DE",
 "data": {
  "label": "Circle 01c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.82,
   "yaw": 93.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784, this.camera_9745BDA5_9B56_3500_41DD_A7D113C83FD0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.5,
   "image": "this.AnimatedImageResource_2CDD962D_27CE_678C_41A9_68D9C4CAEA47",
   "pitch": -5.89,
   "yaw": -170.37,
   "distance": 100
  }
 ],
 "id": "overlay_2E0F5BBC_27CE_AC93_4188_ECB314955772",
 "data": {
  "label": "Circle 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.5,
   "yaw": -170.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9508FC5E_9B56_3B01_41CE_017455E6C2C0); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.18,
   "image": "this.AnimatedImageResource_951A9688_8312_2E4B_41BD_84C686278BE2",
   "pitch": 2.98,
   "yaw": 69.01,
   "distance": 100
  }
 ],
 "id": "overlay_95D004F3_831E_E3DD_41A4_751587969106",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.18,
   "yaw": 69.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F, this.camera_9539EC73_9B56_3B00_41CB_9F62AED42B2B); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.19,
   "image": "this.AnimatedImageResource_951AC688_8312_2E4B_4192_A4BA8A2994F4",
   "pitch": 2.16,
   "yaw": 142.73,
   "distance": 100
  }
 ],
 "id": "overlay_9A2E427F_831F_E6C6_41D2_558351D2B508",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.19,
   "yaw": 142.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.16
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_73F773D8_65DE_DB29_41D6_5DECD0CA123C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7388F3D8_65DE_DB29_41D3_E661C0F6773E",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_738883D8_65DE_DB29_41D8_0BD42A5DFC3C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_738833D8_65DE_DB29_41D8_13C704DE6E4B",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7389C3D8_65DE_DB29_41D6_08F78DF82023",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6995ECD0_65B5_AD3A_41CC_BB19716AB522_0_HS_9_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9593FA4E_816F_E6C6_41D7_975389A24AB6",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_330BC3FC_209F_5D86_41AE_F461D94B2853",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FBC6B540_F69C_E0D1_41D4_ACC5248AD965_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_330BA3FC_209F_5D86_41A1_C6271D6C346D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62913EA0_6DC4_DEDD_41D3_64EE188FA6A0_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_623D6446_6DC5_4265_41D8_D156A0ECF425",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_90D62BA8_8132_264B_41D1_41470FE9CEF7_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_999A6408_8136_224B_41D6_D6717CF937AA",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BA0E1744_AB8C_CFCB_41AF_4BE2DAD80CD8",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B57D31C_5541_95E3_41CD_B3D801DEC717",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99F223DD_8136_25CA_41DF_1E9EBA38A755",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66F2BF21_72C7_7FDF_41BC_B2E06D4108CB",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E16D492_27CE_A497_41B1_8484D0DF59A3_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66F22F21_72C7_7FDF_41C7_1B515F89D7AB",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_882F48DF_8338_ED5E_41DF_4F65530589AE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8D852B71_8348_2362_41D8_2263BA7E52F6",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6184AFB6_6FF6_BF5E_41A1_EB310FF5615A",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_61273346_6FFE_A73E_41D1_A23BB5C8F892",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_618B5B87_6FF2_A73E_41C8_65403FCAB39D_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_613B096B_6FF2_A3F6_41D3_D4564C949377",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A5A1C9B7_AB8B_C2B4_41D5_BC79FC531F47_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BA0F6745_AB8C_CFD5_41E5_3958CE687D57",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2CDB1635_27CE_679C_41AB_B9D5D513632C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D621BF2_27CE_EC97_41C3_0A4670E41784_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2CDB3636_27CE_679C_41C2_675370C71252",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_658895FF_7033_A2CE_41B5_5686CE0997A5",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_60C35C53_7035_61D6_41D1_96B6807993FF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_659745FF_7033_A2CE_41D2_FC9AB5CE0BDC",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66CCB848_7244_C26D_41BB_FEC240383672",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62287CCA_72C4_C26C_41D1_C8D4B7158D18_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66CD2848_7244_C26D_41BA_9141058AC125",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_9CF4C929_876E_624D_41DC_0769C9491F92_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8BB0711A_8587_AE7E_41DE_F2C9688EE780",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2CDCA633_27CE_6794_41C2_481AAE50FED9",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2CDCF634_27CE_679C_41B3_2D6F6A66500C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9690C25C_8112_26CA_41DC_462486DAABD0",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9690125C_8112_26CA_41D5_9022AAB2E2FC",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E01D13C_27CE_FD93_41C0_9A1D2D4A5F97_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9CE79B2F_876E_2646_41AE_CB5D2A70EC5C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_924072FC_8132_27CA_41C3_10021807C8E4_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_999AC408_8136_224B_41DD_392C9B7107A6",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_90D7E0DB_8132_E3CE_41D7_E020B77B5328_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_97ED9480_8136_623B_41D7_FEFEBEE93093",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2CDB6637_27CE_679C_41BB_1B15208287E2",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_91DD483D_86AB_FC05_41BB_FAD345916D60",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31AF709F_2095_DB82_41A0_08A1BFA42A8E",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31EE65DA_20B7_C58D_41B4_8A3334FDFA98",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2D8B9F0D_27CE_A58C_419B_E7BD3A65CA9D_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3208D456_2095_FA85_41BD_923A8DF60131",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66C26848_7244_C26D_41C1_B3A2C3F7384D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66C2D848_7244_C26D_418C_EBE7E276B59C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_63584076_72C4_C225_41D9_7003B7355FB0_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6677999B_7243_C2E3_41A2_AE213968F862",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7CD542DB_6FEF_66D6_41BC_64852276CDD4",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61E06B55_6FFD_E7D2_41AF_C73008C94CF6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7CD4B2DB_6FEF_66D6_41CC_715E40B0D18D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62A4A4D0_6DC7_C27D_41D2_D2648581C613_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7D6FE93F_6DC3_4223_41D5_DB630CB04F32",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_951D0689_8312_2E4D_41C8_79BF60528510",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_97F99BEB_8311_E5CC_41DB_0D92242BB5EE_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_951D668A_8312_2E4F_41C9_33E2523F64DC",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_64882088_72C3_C2ED_41D0_0CC0426D5922_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6B8D57FE_72CF_4E25_419F_E56C3EE4BE0F",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66C32848_7244_C26D_41D0_D33553A197BC",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66C39848_7244_C26D_41DB_085476A99441",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62D183DF_72CD_4663_41D0_062874C5F8E2_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_986761FF_94B7_E62C_41E0_CD190EE0AC59",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99E6F400_8136_223B_41D7_ABDBEF531434",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_73571A63_78BA_AA84_41DC_53C532975B47",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99E66400_8136_223B_41D3_519AE8A46232",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_695E1F96_72C3_7EE5_41B2_4F90CBFC6649_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99E7D404_8136_223B_41C5_A0F1CE02810F",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7EDB20AA_6FF2_A176_41D6_3C14DF671036",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_7DEF966A_6FFD_E1F6_41C1_53301FBA8C9C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7EDAF0AA_6FF2_A176_4135_F456FF20AC30",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_621FE02A_6FFD_E176_41CA_36F2E503F0B0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7E3C41E5_6FD2_A2F3_41C5_5528FA74BA28",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2C1A3955_2095_CA86_41BC_F803A92D6453_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F0C29F3_209A_CD83_41BB_3FACFD6D1478",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2CDB4636_27CE_679C_41B5_D2D577829786",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E1CCA60_27CE_AFB4_41C2_D28F44B5386E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5B57531C_5541_95E3_41AF_0DD511DB92A6",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_604AA761_6FD2_EFF2_41C2_16AD244CB609",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6257BD30_702E_A352_41B3_607E6A8F1721",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7E0DF243_6DFC_C663_41D8_D022C3A2240D",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E3247F2_27CE_6497_41B6_029E0DF54D2A_0_HS_8_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_987271FF_94B7_E62C_41E1_BA7655290763",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_602142CA_78CA_5B84_41B7_8BBDCC794071",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6833DF27_78C9_AA8B_41D7_218E52138C53_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_602EC2CA_78CA_5B84_4193_909C86471BC6",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FB6FFD6C_F69C_20D2_41CC_E2B75C1A00DB_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_300B3A44_20AB_CE85_415F_5C619EF42DC6",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_73F603D4_65DE_DB39_41D8_B97831B22AB7",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_3126BE89_20FD_478F_41B0_D3907EBA4D8A_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_73F7D3D4_65DE_DB39_41CE_AAE5E6855923",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_602022CA_78CA_5B84_41D8_0E85F119521B",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6021A2CA_78CA_5B84_41D9_D7485563227F",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6021D2CA_78CA_5B84_41BA_BE06E010CEAA",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9E2DBB58_8312_66CA_41BF_56F1EABB02F5",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_77DAD9CD_78CA_A99C_41D2_0613660B077F_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9E2D0B59_8312_66CA_41BD_253DE246B04B",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_62830609_72C7_41EF_41CB_5673A5B66BA1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_66CC2848_7244_C26D_41C8_A62BE351C742",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_74EBF32A_65B3_BB6E_41B7_2D785927695F",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_FBDCD15E_F69C_E0EE_41E9_D3625580C0C6_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_74EA232A_65B3_BB6E_419F_527EFEA376BE",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_66F48F21_7053_FF72_41CC_338C0456A8D8_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_91D99840_86AB_FC7B_41DF_A6C5BA796AC4",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_602E72CA_78CA_5B84_41A5_0791443B885C",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_68963652_78C9_FA84_41D3_30E9234A7AC4_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_602FC2CA_78CA_5B84_41BD_4191C6E93176",
 "frameDuration": 41
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_7FEC534C_7036_A732_41D9_8CE0533B58FA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_618A54DB_7033_E2D7_41D2_0835F93B2AFC",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2E0F3BBC_27CE_AC93_41AD_F43BAD11452A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2CDD962D_27CE_678C_41A9_68D9C4CAEA47",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_951A9688_8312_2E4B_41BD_84C686278BE2",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_949640E7_8311_E3C6_41C3_3ECD85FD2173_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_951AC688_8312_2E4B_4192_A4BA8A2994F4",
 "frameDuration": 41
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "borderSize": 0,
 "start": "this.init()",
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "existsKey": function(key){  return key in window; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "class": "Player",
 "downloadEnabled": false,
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "Player445"
 },
 "shadow": false,
 "overflow": "visible"
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
