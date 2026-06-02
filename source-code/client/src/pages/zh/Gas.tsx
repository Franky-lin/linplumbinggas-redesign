/*
Design philosophy: Utility Modernism with Australian Trade Vernacular.
This Chinese gas-fitting page keeps a practical Sydney trade identity: deep navy structure, safety-yellow CTAs, sandstone warmth, copper details, engineering typography, and user-provided Lin Plumbing & Gas site imagery.
Question for every style decision: Does this choice reinforce or dilute our design philosophy?
*/

import { ChineseServicePage, serviceConfigs } from "./ServicePage";

export default function Gas() {
  return <ChineseServicePage config={serviceConfigs.gas} />;
}
