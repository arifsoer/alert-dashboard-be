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

const updateAnomaly = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newAnomaly = req.body;

    await Anomaly.update({ id }, newAnomaly);

    res.status(200).json({
      message: "success",
    });
  } catch (error) {
    next(error);
  }
};

export { getAnomaly, updateAnomaly };
