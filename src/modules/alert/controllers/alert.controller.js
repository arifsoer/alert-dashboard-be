import Anomaly from "../models/anomaly.model.js";

const getAnomaly = async (_, res, next) => {
  try {
    const anomalies = await Anomaly.findAll();

    res.status(200).json({
      message: "success",
      data: anomalies,
    });
  } catch (error) {
    next(error);
  }
};

const getAnomalyByMachine = async (req, res, next) => {
  try {
    const { machineId } = req.params;

    const anomalies = await Anomaly.findAll({
      where: { machineId },
      include: ["machine", "reason"],
      order: [['id', 'ASC']]
    });

    const mapedAnomaly = anomalies.map((aml) => {
      const generatedId = String(aml.id + 13210).padStart(8, "0");
      const reason =
        aml.reason === null ? { name: "Unknown Anomally" } : aml.reason;
      return {
        ...aml.dataValues,
        generatedId,
        reason,
      };
    });

    res.status(200).json({
      message: "success",
      data: mapedAnomaly,
    });
  } catch (error) {
    next(error);
  }
};

const updateAnomaly = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAnomaly = req.body;

    const anomaly = await Anomaly.findOne({ where: { id } });

    anomaly.reasonId = newAnomaly.reasonId;
    anomaly.actionId = newAnomaly.actionId;
    anomaly.comment = newAnomaly.comment;

    await anomaly.save();

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

const updateReadAlert = async (req, res, next) => {
  try {
    const { id } = req.params;

    const alert = await Anomaly.findOne({ where: { id } });

    alert.isAlreadyOpen = true;

    await alert.save();

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

export { getAnomaly, updateAnomaly, getAnomalyByMachine, updateReadAlert };
