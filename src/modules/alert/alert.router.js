import { Router } from "express";

import {
  getActions,
  getReasons,
  getMachines,
} from "./controllers/master.controller.js";
import { getAnomaly, updateAnomaly, getAnomalyByMachine } from "./controllers/alert.controller.js";

const router = Router();

router.get("/actions", getActions);
router.get("/reaons", getReasons);
router.get("/machines", getMachines);

router.get("/anomalies", getAnomaly);
router.get("/anomalies/bymachine/:machineId", getAnomalyByMachine)
router.patch("/anomalies/:id", updateAnomaly);

export default router;
