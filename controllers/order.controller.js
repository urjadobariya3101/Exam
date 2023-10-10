const { orderService } = require("../services");
const nodemailer = require("nodemailer");

/**create order */
const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;

    const order = await orderService.createOrder(reqBody);
    if (!order) {
      throw new Error("Something went wrong, please try again or later!");
    }

    // Send an email confirmation
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "your@gmail.com",
        pass: "your_password",
      },
    });

    const mailOptions = {
      from: "urjadobariya3101@gmail.com",
      to: "urja3114@example.com",
      subject: "Order Confirmation",
      text: `Your order 1234 has been placed. Total Price: 200000`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send("Email could not be sent.");
      } else {
        console.log(`Email sent: ${info.response}`);
        res.status(200).json({
          success: true,
          message: "Order created successfully and email sent!",
          data: { order },
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Get order list */
const getOrderList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [];
    }

    const getList = await orderService.getOrderList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get order list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete order */
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getorderById(orderId);
    if (!orderExists) {
      throw new Error("Order not found!");
    }

    await orderService.deleteOrder(orderId);
    res.status(200).json({
      success: true,
      message: "Order delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/**order update by id */
const updateDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getorderById(orderId);
    if (!orderExists) {
      throw new Error("Order not found...");
    }

    await orderService.updateDetails(orderId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Order details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error, message });
  }
};

/** Get order details by id */
const getOrderDetails = async (req, res) => {
  try {
    const getDetails = await orderService.getOrderById(req.params.orderId);
    if (!getDetails) {
      throw new Error("Order not found!");
    }

    res.status(200).json({
      success: true,
      message: "Order details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrderList,
  deleteOrder,
  updateDetails,
  getOrderDetails,
};
