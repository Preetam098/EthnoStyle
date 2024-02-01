const { z } = require("zod");

// Register Validate
const registerValidate = z.object({
  body: z.object({
    username: z.string().min({ message: "Username is required" }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password is required" }),
    mobileNo: z.string().min(10, { message: "Mobile number is required" }),
    dob: z.string().min({ message: "Date of birth is required" }),
  }),
});

const loginValidate = z.object({
  body: z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password is required" }),
  }),
});

const productValidate = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
      invalid_type_error: "Name must be a string",
    }),
    price: z.string({
      required_error: "Price is required",
      invalid_type_error: "Name must be a string",
    }),
    category: z.string({
      required_error: "Category is required",
      invalid_type_error: "Name must be a string",
    }),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Name must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Name must be a string",
    }),
  }),
});

const validate = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({ body: req.body });
    return next();
  } catch (error) {
    res.status(400).json({ error: error.errors[0]?.message });
  }
};

module.exports = { registerValidate, validate, loginValidate, productValidate };
