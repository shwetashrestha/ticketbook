import { TicketBookingService } from '../services/TicketBookingService';
import { TicketBookingMapper } from '../TicketBookingMapper';

export class TicketBookingController {

  async TicketPlan(req, res) {
    try {
      const ticketBookingService = new TicketBookingService();
      const results = await ticketBookingService.TicketPlan();

      const ticketBookingMapper = new TicketBookingMapper();
      const mapper = ticketBookingMapper.ModelToDto(results);

      res.status(200).json(mapper);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  }
  async AddBooking(req, res) {
    try {

      const data = req.body;

      const ticketBookingMapper = new TicketBookingMapper();
      const mapped = ticketBookingMapper.DtoToModel(data);

      const ticketBookingService = new TicketBookingService();
      const results = await ticketBookingService.AddBooking(mapped);

      if (results[0].result == 'email already exists for this ticket plan') {
          res.status(409).json({error:'email already exists for this ticket plan'});
          return;
      };

    res.status(200).json({Id:results[0].result});

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }

  }
}
