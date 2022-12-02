import http from '../http-common';

class shippingServices {
    create(data) {
        return http.post("/shipping/insert", data);
    }

    getAll() {
        return http.get("/shipping/getAll");
    }
}

export default new shippingServices();