const Sequelize = require('sequelize');
const moment = require('moment');
const dbConnect = require('../connect/index');

export class TicketBookingService {

  async TicketPlan() {
    const query = `SELECT * FROM ticketplan`;
    const result = await dbConnect.query(query, {
      type: Sequelize.QueryTypes.SELECT,
    });
    return result;
  }

 
  async AddBooking(data: any) {
    const query = `SELECT * FROM public.upsertbooking(:varjsondata)`;
    const result = await dbConnect.query(query, {
        replacements: { varjsondata: JSON.stringify(data) },
        type: Sequelize.QueryTypes.SELECT
    });
    return result;
  }
}
