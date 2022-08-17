import { Router } from "express";

import {
  getActions,
  getReasons,
  getMachines,
} from "./controllers/master.controller";
import { getAnomaly, updateAnomaly } from "./controllers/alert.controller";

const router = Router();

router.get("/actions", getActions);
router.get("/reaons", getReasons);
router.get("/machines", getMachines);

router.get("/anomalies", getAnomaly);
router.patch("/anomalies/:id", updateAnomaly);

export default router;
