# 🩺 MED-PATIENT-CARD

Fast microservice for generating an electronic patient card.

## Features
- One request → one patient card
- JSON + PDF output 
- No database
- No data storage

## API

### POST /patient-card
```json
{
  "patient": {
    "lastName": "Иванов",
    "firstName": "Иван",
    "birthDate": "1989-12-01"
  }
}
