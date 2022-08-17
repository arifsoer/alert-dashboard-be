import { Router } from "express";

import alert from "./modules/alert/alert.router.js";

const router = Router();

router.use("/alert", alert);

export default router;
