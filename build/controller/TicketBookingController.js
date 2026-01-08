"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketBookingController = void 0;
const TicketBookingService_1 = require("../services/TicketBookingService");
const TicketBookingMapper_1 = require("../TicketBookingMapper");
class TicketBookingController {
    TicketPlan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ticketBookingService = new TicketBookingService_1.TicketBookingService();
                const results = yield ticketBookingService.TicketPlan();
                const ticketBookingMapper = new TicketBookingMapper_1.TicketBookingMapper();
                const mapper = ticketBookingMapper.ModelToDto(results);
                res.status(200).json(mapper);
            }
            catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    AddBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const ticketBookingMapper = new TicketBookingMapper_1.TicketBookingMapper();
                const mapped = ticketBookingMapper.DtoToModel(data);
                const ticketBookingService = new TicketBookingService_1.TicketBookingService();
                const results = yield ticketBookingService.AddBooking(mapped);
                if (results[0].result == 'email already exists for this ticket plan') {
                    res.status(409).json({ error: 'email already exists for this ticket plan' });
                    return;
                }
                ;
                res.status(200).json({ Id: results[0].result });
            }
            catch (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.TicketBookingController = TicketBookingController;
//# sourceMappingURL=TicketBookingController.js.map