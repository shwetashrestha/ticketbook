"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketBookingMapper = void 0;
class TicketBookingMapper {
    ModelToDto(data) {
        const mappedData = data.map((result) => {
            const mapped = {
                Id: result.id,
                Name: result.name ? result.name : null,
                Price: result.price ? result.price : null,
                TotalQty: result.totalqty ? result.totalqty : null,
                AvailableQty: result.availableqty ? result.availableqty : null,
                Created: result.created ? result.created : null,
                Modified: result.modified ? result.modified : null
            };
            return mapped;
        });
        return mappedData;
    }
    DtoToModel(data) {
        const mapped = {
            id: data.Id ? data.Id : null,
            name: data.Name ? data.Name : null,
            quantity: data.Quantity ? data.Quantity : null,
            status: data.Status ? data.Status : null,
            emailaddress: data.EmailAddress ? data.EmailAddress : null,
        };
        return mapped;
    }
}
exports.TicketBookingMapper = TicketBookingMapper;
//# sourceMappingURL=TicketBookingMapper.js.map