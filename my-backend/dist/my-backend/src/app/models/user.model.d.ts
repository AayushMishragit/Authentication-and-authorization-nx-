import { Schema } from 'mongoose';
export declare const User: import("mongoose").Model<{
    email: string;
    fullName: string;
    password: string;
    createdAt: NativeDate;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    email: string;
    fullName: string;
    password: string;
    createdAt: NativeDate;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    email: string;
    fullName: string;
    password: string;
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    email: string;
    fullName: string;
    password: string;
    createdAt: NativeDate;
}, import("mongoose").Document<unknown, {}, {
    email: string;
    fullName: string;
    password: string;
    createdAt: NativeDate;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    email: string;
    fullName: string;
    password: string;
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        email: string;
        fullName: string;
        password: string;
        createdAt: NativeDate;
    }, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<{
        email: string;
        fullName: string;
        password: string;
        createdAt: NativeDate;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    email: string;
    fullName: string;
    password: string;
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    email: string;
    fullName: string;
    password: string;
    createdAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.model.d.ts.map