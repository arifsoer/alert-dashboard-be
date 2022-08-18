import { Router } from "express";

import {
  getActions,
  getReasons,
  getMachines,
  getReasonsByMachine,
} from "./controllers/master.controller.js";
import {
  getAnomaly,
  updateAnomaly,
  getAnomalyByMachine,
  updateReadAlert,
} from "./controllers/alert.controller.js";

const router = Router();

router.get("/actions", getActions);
router.get("/reasons", getReasons);
router.get("/reasons/bymachine/:machineId", getReasonsByMachine);
router.get("/machines", getMachines);

router.get("/anomalies", getAnomaly);
router.get("/anomalies/bymachine/:machineId", getAnomalyByMachine);
router.patch("/anomalies/:id", updateAnomaly);
router.patch("/anomalies/updateread/:id", updateReadAlert);

export default router;
