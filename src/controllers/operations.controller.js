var result;

class OperationsController {
    Sum(req, res) {
        const {
            nums
        } = req.body;
        result = 0;
        for (var item in nums) {
            result += nums[item];
        }
        res.json({
            respuesta: result
        });
    }

    Subtraction(req, res) {
        const {
            numToSubs,
            nums
        } = req.body;
        result = numToSubs;
        for (var item in nums) {
            result -= nums[item];
        }
        res.json({
            respuesta: result
        });
    }

    Multiply(req, res) {
        const {
            nums
        } = req.body;
        var result = 1;

        for (var item in nums) {
            result *= nums[item];
        }
        res.json({
            respuesta: result
        });
    }

    Divide(req, res) {
        const {
            numToDiv,
            nums
        } = req.body;
        result = numToDiv;
        for (var item in nums) {
            result = result / nums[item];
        }
        res.json({
            respuesta: result
        });
    }


    Free(req, res) {
        const {
            operation
        }  = req.body;
        result = 0;
        var array1 = operation.split(" ");

        for(var item in array1) {
            console.log(array1[item]);
        }

        res.json({
            respuesta: result
        });
    }
}

module.exports = new OperationsController();