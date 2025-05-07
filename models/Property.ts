import { Schema, model, models, Types, Document } from 'mongoose';

export interface IPropertyModel extends Document {
    owner: Types.ObjectId;
    name: string;
    type: string;
    description: string;
    location: {
        street?: string;
        city?: string;
        state?: string;
        zipcode?: string;
    };
    beds: number;
    baths: number;
    square_feet: number;
    amenities?: string[];
    rates?: {
        nightly?: number;
        weekly?: number;
        monthly?: number;
    };
    seller?: {
        name?: string;
        phone?: string;
        email?: string;
    };
    images?: string[];
    is_features?: boolean;
}

const PropertySchema = new Schema<IPropertyModel>({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Owner is required'],
    },
    name: {
        type: String,
        required: [true, 'Property name is required'],
    },
    type: {
        type: String,
        required: [true, 'Property type is required'],
    },
    description: {
        type: String,
        required: [true, 'Property type is required'],
    },
    location: {
        street: String,
        city: String,
        state: String,
        zipcode: String
    },
    beds: {
        type: Number,
        required: [true, 'Number of beds is required'],
    },
    baths: {
        type: Number,
        required: [true, 'Number of baths is required'],
    },
    square_feet: {
        type: Number,
        required: [true, 'Square feet is required'],
    },
    amenities: [
        {
            type: String,
        }
    ],
    rates: {
        nightly: Number,
        weekly: Number,
        monthly: Number,
    },
    seller: {
        name: String,
        phone: String,
        email: String,
    },
    images: [
        {
            type: String,
        }
    ],
    is_features:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Property = models.Property || model<IPropertyModel>('Property', PropertySchema);
export default Property;