import Location from '../models/location';
import vm from "v-response";

exports.getLocation = (req, res, next) => {
    let locationBody = req.body;
    const newLocation = new Location_model(locationBody);
    newLocation.save()
        .then(saved => {
            if (!saved) {
                return res.status(400)
                .json(vm.APIResponse(false, 400, "unable to save"))
            }
            if (saved) {
                return res.status(201)
                .json(vm.APIResponse(true, 200, "Success!", saved))
            }
        })
        .catch (error => {
            return res.status(500)
            .json(vm.APIResponse(false, 500, "error!", undefined, error))
        });
};