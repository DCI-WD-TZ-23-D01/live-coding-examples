import { Router } from "express";
import { Coupon } from "../models/Coupon.js";

export const couponsRouter = Router();

couponsRouter.get("/", async (req, res, next) => {
  try {
    const coupons = await Coupon.find({ deletedAt: { $exists: false } });
    return res.json(coupons);
  } catch (e) {
    next(e);
  }
});

couponsRouter.get("/:code", async (req, res, next) => {
  const code = req.params.code;
  try {
    const coupon = await Coupon.findOne({
      code,
      deletedAt: { $exists: false },
    });
    return res.json(coupon);
  } catch (e) {
    next(e);
  }
});

couponsRouter.post("/", async (req, res, next) => {
  try {
    await Coupon.create(req.body);
    return res.sendStatus(201);
  } catch (e) {
    next(e);
  }
});

couponsRouter.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const coupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true, // Wir möchten den neuen Coupon erhalten
      runValidators: true, // erneute Überprüfung der Daten
    });
    return res.json(coupon);
  } catch (e) {
    next(e);
  }
});

couponsRouter.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Coupon.findByIdAndUpdate(id, { deletedAt: new Date() });
    return res.sendStatus(204);
  } catch (e) {
    next(e);
  }
});
