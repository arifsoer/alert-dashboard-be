import Action from "../models/action.model.js";
import Reason from "../models/reason.model.js";
import Machine from "../models/machine.model.js";

const getActions = async (_, res, next) => {
  try {
    const actions = await Action.findAll();

    res.status(200).json({
      message: "success",
      data: actions,
    });
  } catch (error) {
    next(error);
  }
};

const getMachines = async (_, res, next) => {
  try {
    const machines = await Machine.findAll();

    res.status(200).json({
      message: "success",
      data: machines,
    });
  } catch (error) {
    next(error);
  }
};

const getReasons = async (_, res, next) => {
  try {
    const reasons = await Reason.findAll();

    res.status(200).json({
      message: "success",
      data: reasons,
    });
  } catch (error) {
    next(error);
  }
};

const getReasonsByMachine = async (req, res, next) => {
  try {
    const { machineId } = req.params;

    const reasons = await Reason.findAll({
      where: { machineId },
      include: ["machine"],
    });

    res.status(200).json({
      message: "success",
      data: reasons,
    });
  } catch (error) {
    next(error);
  }
};

export { getActions, getReasons, getMachines, getReasonsByMachine };
