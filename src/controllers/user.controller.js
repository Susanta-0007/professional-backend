import { asyncHandler } from "../utils/asyncHandeler.util.js";
import { ApiError } from "../utils/ApiError.utils.js";
import { ApiResponse } from "../utils/ApiResponse.util.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.util.js"

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontened
    // Validation - not Empty
    // check if user already exists : username,email
    // check for images, check for avtars 
    // upload to cloudinary , avatar
    // create user object - create entry in DB
    // remove password and refresh token field in the response 
    // check for user creation 
    // return res .

    const { fullName, email, username, password } = req.body;

    if (!fullName || !email || !username || !password) {
        throw new ApiError(400, "All Field are required !");
    }

    const existingUser = User.findOne({
        $or: [{ username }, { email }]
    });

    if (existingUser) {
        throw new ApiError(409, "User Already Exist");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0].path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar Fileld is Required");
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Avatar Fileld is Required");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (createdUser) {
        throw new ApiError(500, "Something Went wrong while registering the user");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User register Sucessfuly"),
    )
});

export { registerUser };