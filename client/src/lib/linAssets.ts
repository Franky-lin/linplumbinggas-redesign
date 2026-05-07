// Design reminder: Industrial Functionalism with Sydney trade-service clarity.
// Asset rule: real Lin Plumbing & Gas photos and generated brand panels are referenced through durable webdev storage paths, not local public image folders.

export const BUSINESS = {
  name: "Lin Plumbing & Gas",
  legalName: "Lin Plumbing & Gas Pty Ltd",
  phone: "0430 731 989",
  phoneHref: "tel:0430731989",
  email: "FRANKY@LINPLUMBINGGAS.COM",
  emailHref: "mailto:FRANKY@LINPLUMBINGGAS.COM",
  license: "LIC NO: 459684C",
  abn: "ABN: 92 670 077 102",
  serviceArea: "Sydney-wide",
  siteUrl: "https://linplumbinggas.com",
};

export const REAL_PHOTOS = {
  cctvDrainInspection: "/manus-storage/cctv_drain_inspection_32f6ee3d_1899af86.jpg",
  commercialPlantPipework: "/manus-storage/commercial_plant_pipework_07334ac4_a924ff2f.jpg",
  complexPipework: "/manus-storage/complex_pipework_af4ab774_da370b75.jpg",
  excavationNewBuild: "/manus-storage/excavation_new_build_64513b2c_65319aab.jpg",
  finishedBathroom: "/manus-storage/finished_bathroom_12496624_e550870c.jpg",
  gasMeterTest: "/manus-storage/gas_meter_test_0bb96844_daac010b.jpg",
  gasPipeWall: "/manus-storage/gas_pipe_wall_3421d980_79fb7977.jpg",
  gasToolsSite: "/manus-storage/gas_tools_site_e9f512b4_2283c5f2.jpg",
  heritagePipeRepair: "/manus-storage/heritage_pipe_repair_b52cbe34_df665abe.jpg",
  heroVehicleTools: "/manus-storage/hero_vehicle_tools_ecfe0156_17b886fd.jpg",
  hotWaterPlantRoom: "/manus-storage/hot_water_plant_room_a78a6433_64355e5e.jpg",
  residentialHotWaterInstall: "/manus-storage/residential-rinnai-hot-water-install_e25c0ada_ea3c71ee.jpeg",
  logo: "/manus-storage/logo_white_transparent_c489426c_ede5fd7f.png",
  roofCopperPipework: "/manus-storage/roof_copper_pipework_d1e2b5b9_68174d38.jpg",
  stormwaterDrainage: "/manus-storage/stormwater-drainage-real-site_7dc6c845_7627dd21.webp",
  teamVehicleTrust: "/manus-storage/team_vehicle_trust_4d608dd1_b02f9323.jpg",
  underSlabPipework: "/manus-storage/under_slab_pipework_fbb0f781_9f9241b8.jpg",
} as const;

export const BRAND_ASSETS = {
  industrialBlueprintHero: "/manus-storage/industrial_blueprint_hero_48a4766a.png",
  serviceNetworkPanel: "/manus-storage/service_network_panel_5402b57a.png",
  localSeoSuburbMap: "/manus-storage/local_seo_suburb_map_8a0cc1c0.png",
} as const;

export type RealPhotoKey = keyof typeof REAL_PHOTOS;
export type BrandAssetKey = keyof typeof BRAND_ASSETS;
