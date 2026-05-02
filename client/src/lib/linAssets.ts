// Design reminder: Utility Modernism with Australian Trade Vernacular.
// Asset rule: only user-provided real Lin Plumbing & Gas photos are referenced here. Images are local static files under client/public/images for Vercel portability.

export const BUSINESS = {
  name: "Lin Plumbing & Gas",
  phone: "0430 731 989",
  phoneHref: "tel:0430731989",
  email: "FRANKY@LINPLUMBINGGAS.COM",
  emailHref: "mailto:FRANKY@LINPLUMBINGGAS.COM",
  license: "LIC NO: 459684C",
  abn: "ABN: 92 670 077 102",
  serviceArea: "Sydney-wide",
};

export const REAL_PHOTOS = {
  cctvDrainInspection: "/images/cctv_drain_inspection_32f6ee3d.jpg",
  commercialPlantPipework: "/images/commercial_plant_pipework_07334ac4.jpg",
  complexPipework: "/images/complex_pipework_af4ab774.jpg",
  excavationNewBuild: "/images/excavation_new_build_64513b2c.jpg",
  finishedBathroom: "/images/finished_bathroom_12496624.jpg",
  gasMeterTest: "/images/gas_meter_test_0bb96844.jpg",
  gasPipeWall: "/images/gas_pipe_wall_3421d980.jpg",
  gasToolsSite: "/images/gas_tools_site_e9f512b4.jpg",
  heritagePipeRepair: "/images/heritage_pipe_repair_b52cbe34.jpg",
  heroVehicleTools: "/images/hero_vehicle_tools_ecfe0156.jpg",
  hotWaterPlantRoom: "/images/hot_water_plant_room_a78a6433.jpg",
  residentialHotWaterInstall: "/images/residential-rinnai-hot-water-install_e25c0ada.jpeg",
  logo: "/images/logo_white_transparent_c489426c.png",
  roofCopperPipework: "/images/roof_copper_pipework_d1e2b5b9.jpg",
  stormwaterDrainage: "/images/stormwater-drainage-real-site_7dc6c845.webp",
  teamVehicleTrust: "/images/team_vehicle_trust_4d608dd1.jpg",
  underSlabPipework: "/images/under_slab_pipework_fbb0f781.jpg",
} as const;

export type RealPhotoKey = keyof typeof REAL_PHOTOS;
