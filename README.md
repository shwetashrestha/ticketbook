# Ticket Booking API
This repository contains a simple Ticket Booking Backend API built to manage ticket plans and allow users to book tickets securely.

The project exposes two main APIs:

GET API – View available ticket plans

POST API – Book tickets for a selected ticket plan (with email validation per ticket plan ID)

🚀Features

1)Fetch all available ticket plans

2)Book tickets using a specific ticketPlanId

3)Email address validation during ticket booking

4)Prevents invalid bookings

5)Transaction-safe ticket booking (recommended for concurrency)
🛠️ Tech Stack

Backend: Node.js + TypeScript

Framework: Express.js

Database: PostgreSQL

ORM / Query Layer: Sequelize / pg (depending on implementation)
