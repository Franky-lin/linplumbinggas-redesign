// Design reminder: Industrial Functionalism with Sydney trade-service clarity.
// Asset rule: real Lin Plumbing & Gas photos and generated brand panels are referenced through durable webdev storage paths, not local public image folders.
// P4 Optimization: All images converted to WebP format (avg 65% size reduction vs original JPG/PNG)

export const BUSINESS = {
  name: "Lin Plumbing & Gas",
  legalName: "Lin Plumbing & Gas Pty Ltd",
  phone: "0430 731 989",
  phoneHref: "tel:0430731989",
  // Email split to prevent Cloudflare Email Obfuscation from injecting email-decode.min.js
  // which blocks the critical rendering path (adds ~688ms to LCP)
  email: ["FRANKY", "LINPLUMBINGGAS.COM"].join("@"),
  get emailHref(): string { return ["mailto", this.email].join(":"); },
  license: "LIC NO: 459684C",
  abn: "ABN: 92 670 077 102",
  serviceArea: "Sydney-wide",
  siteUrl: "https://linplumbinggas.com",
};

export const REAL_PHOTOS = {
  // WebP optimized versions (P4: converted from JPG/PNG, avg 65% smaller)
  cctvDrainInspection: "/manus-storage/cctv_drain_inspection_32f6ee3d_1899af86_ca84441c.webp",
  commercialPlantPipework: "/manus-storage/commercial_plant_pipework_07334ac4_a924ff2f_5ddef7e4.webp",
  complexPipework: "/manus-storage/complex_pipework_af4ab774_da370b75_22387841.webp",
  excavationNewBuild: "/manus-storage/excavation_new_build_64513b2c_65319aab_1a4cd8a7.webp",
  finishedBathroom: "/manus-storage/finished_bathroom_12496624_e550870c_44e95efb.webp",
  gasMeterTest: "/manus-storage/gas_meter_test_0bb96844_daac010b_5bd9edeb.webp",
  gasPipeWall: "/manus-storage/gas_pipe_wall_3421d980_79fb7977_4df06ad8.webp",
  gasToolsSite: "/manus-storage/gas_tools_site_e9f512b4_2283c5f2_b8a8eeb9.webp",
  heritagePipeRepair: "/manus-storage/heritage_pipe_repair_b52cbe34_df665abe_04fcffea.webp",
  heroVehicleTools: "/manus-storage/hero_vehicle_tools_optimized_5bfb7a35.webp",  // Optimized: 198.8KB, 1200x899, Q82 (was 274KB)
  hotWaterPlantRoom: "/manus-storage/hot_water_plant_room_a78a6433_64355e5e_23a7eeed.webp",
  residentialHotWaterInstall: "/manus-storage/residential-rinnai-hot-water-install_e25c0ada_ea3c71ee_e25e28f0.webp",
  logo: "/manus-storage/logo_white_transparent_c489426c_ede5fd7f.png",  // Keep PNG for logo (transparency)
  roofCopperPipework: "/manus-storage/roof_copper_pipework_d1e2b5b9_68174d38_6a6f98ff.webp",
  stormwaterDrainage: "/manus-storage/stormwater-drainage-real-site_7dc6c845_7627dd21_a74446ae.webp",
  teamVehicleTrust: "/manus-storage/team_vehicle_trust_4d608dd1_b02f9323_32755091.webp",
  underSlabPipework: "/manus-storage/under_slab_pipework_fbb0f781_9f9241b8_f9e57d73.webp",
} as const;

export const BRAND_ASSETS = {
  industrialBlueprintHero: "/manus-storage/industrial_blueprint_hero_48a4766a.png",
  serviceNetworkPanel: "/manus-storage/service_network_panel_5402b57a.png",
  localSeoSuburbMap: "/manus-storage/local_seo_suburb_map_8a0cc1c0.png",
} as const;

export type RealPhotoKey = keyof typeof REAL_PHOTOS;
export type BrandAssetKey = keyof typeof BRAND_ASSETS;
