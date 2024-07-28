const flightData = require("../data/flights.json");

module.exports.hello = async (req, res) => {
    return res.send("Hello Flights!!");
};

module.exports.getFlights = async (req, res) => {
    // req.body = {
    //     to: "Lahore",
    //     from: "Islamabad",
    //     date: "2023-12-10T05:45:00",
    // }

    res.send({
        flights: flightData.map((f) => {
            f.departure_time = new Date(f.departure_time);
            f.arrival_time = new Date(f.arrival_time);
            let depDate = new Date(req.body.date);
            depDate.setHours(f.departure_time.getHours());
            depDate.setMinutes(f.departure_time.getMinutes());
            const diff = f.arrival_time-f.departure_time;
            let arrDate = new Date(depDate.getTime() + diff);

            return {
                ...f,
                departure_city: req.body.from,
                destination_city: req.body.to,
                departure_time: depDate,
                arrival_time: arrDate,
            }
        })
    })
};
