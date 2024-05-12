import { ApiResponse } from "../utils/ApiResponse.util.js"
import { asyncHandler } from "../utils/asyncHandeler.util.js"


const healthcheck = asyncHandler(async (req, res) => {
    //TODO: build a healthcheck response that simply returns the OK status as json with a message
    return res.json(
        new ApiResponse(200,
            {

            },
            "Server is Ok"

        )
    )
})

export {
    healthcheck
}
