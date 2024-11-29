import mongoose from "mongoose";

const planetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Planet name is required."],
    },
    circumference: {
      type: Number,
      required: [true, "Circumference is required."],
    },
    distanceFromSunKm: {
      type: Number,
      required: [true, "Distance from the Sun is required."],
    },
    distanceFromEarthKm: {
      type: Number,
      required: [true, "Distance from Earth is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL is required."],
    },
  },
  { timestamps: true }
);

const Planet = mongoose.model("planet", planetSchema);

export default Planet;
