"use strict";

class PaymentRequest {
  beforeRegister() {
    this.is = 'payment-request';
    this.properties = {
      title: {
        type: String,
        value: document.title,
      },
      subtitle: {
        type: String,
        value: document.location.host,
      }
    }
  }
}

Polymer(PaymentRequest);