import { Router } from "express";
import contactModel from "../lib/models/contactModel.js";
import connectDB from "../lib/config/db.js";
import leadModel from "../lib/models/leadModel.js";

const router = Router();
// contact
router.get("/contacts12f", async (req, res) => {
    await connectDB()

  try {
    const contacts = await contactModel.find({});
    res.send(contacts);
  } catch (error) {
    res.status(500).send({ msg: "an error occured: " + error.message });
  }
});

router.post("/contacts12f", async (req, res) => {
    await connectDB()
  const { name, email, companyName, otherDetails } = req.body;
  if (
    !name ||
    typeof name != "string" ||
    !email ||
    typeof email != "string" ||
    !companyName ||
    typeof companyName != "string"
  ) {
    return res.status(400).send({ msg: "invalid request" });
  }

  try {
    const contact = await contactModel.create({
      name,
      email,
      companyName,
      otherDetails,
    });

    await leadModel.create({
        name, email, companyName
    })

    res.status(201).send({ msg: "message recieved: we will get back to you soon" });
  } catch (error) {
    return res.status(500).send({ msg: "an error occured: " + error.message });
  }
});


// lead

router.get("/leads12f", async (req, res) => {
    await connectDB()

  try {
    const leads = await leadModel.find({});
    res.send(leads);
  } catch (error) {
    res.status(500).send({ msg: "an error occured: " + error.message });
  }
});

router.post("/leads12f", async (req, res) => {
    await connectDB()
  const { name, email, companyName } = req.body;
  if (
    !name ||
    typeof name != "string" ||
    !email ||
    typeof email != "string"
  ) {
    return res.status(400).send({ msg: "invalid request" });
  }

  try {
    const lead = await leadModel.create({
      name,
      email,
      companyName,
    });

    await leadModel.create({
        name, email, companyName
    })

    res.status(201).send({ msg: "lead created successfully",  });
  } catch (error) {
    return res.status(500).send({ msg: "an error occured: " + error.message });
  }
});


export default router;
