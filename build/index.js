"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const TicketBookingController_1 = require("./controller/TicketBookingController");
const sequelize = require("./connect/index");
const app = (0, express_1.default)();
const port = 3000;
const router = express_1.default.Router();
app.use(body_parser_1.default.json({ limit: '2mb' }));
router.get("/ping", (req, res) => { res.send("Ticket Booking System !"); });
router.get("/ticketplans", (req, res) => new TicketBookingController_1.TicketBookingController().TicketPlan(req, res));
router.post("/ticketplans", (req, res) => new TicketBookingController_1.TicketBookingController().AddBooking(req, res));
app.use("/", router);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map