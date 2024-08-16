import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum UserStakeOrderByProperty {
  ORDER_BY_PROPERTY_ID = 0,
  ORDER_BY_PROPERTY_ADDRESS = 1,
  UNRECOGNIZED = -1,
}
export const UserStakeOrderByPropertySDKType = UserStakeOrderByProperty;
export const UserStakeOrderByPropertyAmino = UserStakeOrderByProperty;
export function userStakeOrderByPropertyFromJSON(object: any): UserStakeOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_ID":
      return UserStakeOrderByProperty.ORDER_BY_PROPERTY_ID;
    case 1:
    case "ORDER_BY_PROPERTY_ADDRESS":
      return UserStakeOrderByProperty.ORDER_BY_PROPERTY_ADDRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserStakeOrderByProperty.UNRECOGNIZED;
  }
}
export function userStakeOrderByPropertyToJSON(object: UserStakeOrderByProperty): string {
  switch (object) {
    case UserStakeOrderByProperty.ORDER_BY_PROPERTY_ID:
      return "ORDER_BY_PROPERTY_ID";
    case UserStakeOrderByProperty.ORDER_BY_PROPERTY_ADDRESS:
      return "ORDER_BY_PROPERTY_ADDRESS";
    case UserStakeOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface UserStakeOrderBy {
  property: UserStakeOrderByProperty;
  descending: boolean;
}
export interface UserStakeOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.ystaking.UserStakeOrderBy";
  value: Uint8Array;
}
export interface UserStakeOrderByAmino {
  property?: UserStakeOrderByProperty;
  descending?: boolean;
}
export interface UserStakeOrderByAminoMsg {
  type: "/pryzmatics.database.ystaking.UserStakeOrderBy";
  value: UserStakeOrderByAmino;
}
export interface UserStakeOrderBySDKType {
  property: UserStakeOrderByProperty;
  descending: boolean;
}
function createBaseUserStakeOrderBy(): UserStakeOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const UserStakeOrderBy = {
  typeUrl: "/pryzmatics.database.ystaking.UserStakeOrderBy",
  is(o: any): o is UserStakeOrderBy {
    return o && (o.$typeUrl === UserStakeOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is UserStakeOrderBySDKType {
    return o && (o.$typeUrl === UserStakeOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is UserStakeOrderByAmino {
    return o && (o.$typeUrl === UserStakeOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: UserStakeOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserStakeOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserStakeOrderBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = (reader.int32() as any);
          break;
        case 2:
          message.descending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserStakeOrderBy {
    return {
      property: isSet(object.property) ? userStakeOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: UserStakeOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = userStakeOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<UserStakeOrderBy>): UserStakeOrderBy {
    const message = createBaseUserStakeOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: UserStakeOrderByAmino): UserStakeOrderBy {
    const message = createBaseUserStakeOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: UserStakeOrderBy, useInterfaces: boolean = true): UserStakeOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: UserStakeOrderByAminoMsg): UserStakeOrderBy {
    return UserStakeOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: UserStakeOrderByProtoMsg, useInterfaces: boolean = true): UserStakeOrderBy {
    return UserStakeOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserStakeOrderBy): Uint8Array {
    return UserStakeOrderBy.encode(message).finish();
  },
  toProtoMsg(message: UserStakeOrderBy): UserStakeOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.ystaking.UserStakeOrderBy",
      value: UserStakeOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserStakeOrderBy.typeUrl, UserStakeOrderBy);