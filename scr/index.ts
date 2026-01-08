import express from "express";

import bodyParser from "body-parser";
import { TicketBookingController } from "./controller/TicketBookingController";
import config from "./config/index";

const sequelize = require("./connect/index");
const app = express();
const port = 3000;
const router = express.Router();

app.use(bodyParser.json({ limit: '2mb' }));




router.get("/ping", (req, res) => { res.send("Ticket Booking System !");});

router.get("/ticketplans",  (req, res) =>  new TicketBookingController().TicketPlan(req, res));
router.post("/ticketplans",  (req, res) =>  new TicketBookingController().AddBooking(req, res));



app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



