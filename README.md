# Flow Distribution Algorithm

## Overview
This project implements a flow distribution algorithm for connecting users with astrologers.

## API Endpoints

### Toggle Top Astrologer
*POST* /astrologers/toggleTopAstrologer
- *Body:*
  ```json
  {
    "astrologerId": 1,
    "isTop": true
  }