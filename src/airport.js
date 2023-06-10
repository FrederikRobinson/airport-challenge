let airport = {
    listOfPlanes: [],
    airportCapacity: 3,
    getPlaneIndex: function (plane) {
        return this.listOfPlanes.findIndex(landedPlane => landedPlane.planeId === plane.planeId)
    },
    landPlane: function (plane) {
        if (plane?.planeId && !this.isAirportFull() && !this.isPlaneInAirport(plane)) {
            this.listOfPlanes.push(plane);
        }
    },
    changeAirportCapacity: function (newCapacity) {
        if (typeof newCapacity === "number" && Number.isInteger(newCapacity)) {
            this.airportCapacity = newCapacity;
        }
    },
    isAirportFull: function () {
        return this.airportCapacity <= this.listOfPlanes.length;
    },
    takeOff: function (plane) {
        if (this.isPlaneInAirport(plane)) {
            this.listOfPlanes.splice(this.getPlaneIndex(plane), 1);
        }
    },
    isPlaneInAirport: function (plane) {
        return this.getPlaneIndex(plane) !== -1;
    },
};
module.exports = airport;
