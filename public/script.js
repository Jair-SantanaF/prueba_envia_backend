document.addEventListener('DOMContentLoaded', () => {
  const socket = io();
  const sendData = {
    "origin": {
      "number": "111",
      "postalCode": "41100",
      "type": "origin",
      "company": "postulación ",
      "name": "Jair Santana",
      "email": "yir0502@gmail.com",
      "phone": "2227342492",
      "country": "MX",
      "street": "calle 1",
      "district": "Chilapa de Álvarez Centro",
      "city": "Chilapa de Álvarez",
      "state": "GR",
      "reference": "ejemplo de referencia",
      "address_id": 3817508,
      "identificationNumber": "ejemploderfc"
    },
    "destination": {
      "number": "222",
      "postalCode": "41100",
      "type": "destination",
      "company": "santana",
      "name": "jair 2",
      "email": "yir0502@gmail.com",
      "phone": "2227342492",
      "country": "MX",
      "street": "calle 2",
      "district": "Chilapa de Álvarez Centro",
      "city": "Chilapa de Álvarez",
      "state": "GR",
      "reference": "ejemplo de referencia",
      "address_id": 3817509,
      "identificationNumber": "ejemplodderfc"
    },
    "packages": [
      {
        "type": "box",
        "content": "Electrónicos",
        "amount": 1,
        "name": "Electrónicos",
        "declaredValue": 198,
        "lengthUnit": "CM",
        "weightUnit": "KG",
        "weight": 3,
        "dimensions": {
          "length": 60,
          "width": 30,
          "height": 20
        }
      }
    ],
    "settings": {
      "currency": "MXN",
      "printFormat": "ZPL",
      "printSize": "STOCK_4X6"
    },
    "shipment": {
      "carrier": "bigLogistics",
      "service": "same_day",
      "reverse_pickup": 0,
      "type": 1
    }
  }
  document.getElementById('generateGuideBtn').addEventListener('click', () => {
    socket.emit('generateGuide', sendData);
  });

  socket.on('updateCounter', (data) => {
    document.getElementById('counter').textContent = `Contador: ${data}`;
  });
});