import { model, Schema } from "mongoose";

export const FoodSchema = new Schema(
    {
        name: { type: String, require: true },
        price: { type: Number, require: true },
        tags: { type: [String] },
        favorite: { type: Boolean, default: false },
        stars: { type: Number, default: 3 },
        imageUrl: { type: String, require: true },
        origin: { type: [String], require: true },
        cookTime: { type: String, require: true },
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    }
);

export const FoodModel = model('food', FoodSchema)