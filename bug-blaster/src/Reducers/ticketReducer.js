export default function ticketReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "DELETE_TICKET":
      return {
        ...state,
        tickets: state.tickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    case "UPDATE_TICKET":
      return state.map((ticket) =>
        ticket.id === action.payload.id
          ? { ...ticket, ...action.payload }
          : ticket
      );
    case "CLEAR_TICKETS":
      return { ...state, tickets: [] };
    default:
      return state;
  }
}
