import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum UserPulseTradeVolumeOrderByProperty {
  ORDER_BY_PROPERTY_TOTAL_VOLUME = 0,
  ORDER_BY_PROPERTY_VOLUME_24H = 1,
  ORDER_BY_PROPERTY_VOLUME_7D = 2,
  ORDER_BY_PROPERTY_VOLUME_30D = 3,
  UNRECOGNIZED = -1,
}
export const UserPulseTradeVolumeOrderByPropertySDKType = UserPulseTradeVolumeOrderByProperty;
export const UserPulseTradeVolumeOrderByPropertyAmino = UserPulseTradeVolumeOrderByProperty;
export function userPulseTradeVolumeOrderByPropertyFromJSON(object: any): UserPulseTradeVolumeOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_TOTAL_VOLUME":
      return UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_TOTAL_VOLUME;
    case 1:
    case "ORDER_BY_PROPERTY_VOLUME_24H":
      return UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_VOLUME_24H;
    case 2:
    case "ORDER_BY_PROPERTY_VOLUME_7D":
      return UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_VOLUME_7D;
    case 3:
    case "ORDER_BY_PROPERTY_VOLUME_30D":
      return UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_VOLUME_30D;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserPulseTradeVolumeOrderByProperty.UNRECOGNIZED;
  }
}
export function userPulseTradeVolumeOrderByPropertyToJSON(object: UserPulseTradeVolumeOrderByProperty): string {
  switch (object) {
    case UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_TOTAL_VOLUME:
      return "ORDER_BY_PROPERTY_TOTAL_VOLUME";
    case UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_VOLUME_24H:
      return "ORDER_BY_PROPERTY_VOLUME_24H";
    case UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_VOLUME_7D:
      return "ORDER_BY_PROPERTY_VOLUME_7D";
    case UserPulseTradeVolumeOrderByProperty.ORDER_BY_PROPERTY_VOLUME_30D:
      return "ORDER_BY_PROPERTY_VOLUME_30D";
    case UserPulseTradeVolumeOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface UserPulseTradeVolumeOrderBy {
  property: UserPulseTradeVolumeOrderByProperty;
  descending: boolean;
}
export interface UserPulseTradeVolumeOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.trade.UserPulseTradeVolumeOrderBy";
  value: Uint8Array;
}
export interface UserPulseTradeVolumeOrderByAmino {
  property?: UserPulseTradeVolumeOrderByProperty;
  descending?: boolean;
}
export interface UserPulseTradeVolumeOrderByAminoMsg {
  type: "/pryzmatics.database.trade.UserPulseTradeVolumeOrderBy";
  value: UserPulseTradeVolumeOrderByAmino;
}
export interface UserPulseTradeVolumeOrderBySDKType {
  property: UserPulseTradeVolumeOrderByProperty;
  descending: boolean;
}
function createBaseUserPulseTradeVolumeOrderBy(): UserPulseTradeVolumeOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const UserPulseTradeVolumeOrderBy = {
  typeUrl: "/pryzmatics.database.trade.UserPulseTradeVolumeOrderBy",
  is(o: any): o is UserPulseTradeVolumeOrderBy {
    return o && (o.$typeUrl === UserPulseTradeVolumeOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is UserPulseTradeVolumeOrderBySDKType {
    return o && (o.$typeUrl === UserPulseTradeVolumeOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is UserPulseTradeVolumeOrderByAmino {
    return o && (o.$typeUrl === UserPulseTradeVolumeOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: UserPulseTradeVolumeOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserPulseTradeVolumeOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPulseTradeVolumeOrderBy();
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
  fromJSON(object: any): UserPulseTradeVolumeOrderBy {
    return {
      property: isSet(object.property) ? userPulseTradeVolumeOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: UserPulseTradeVolumeOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = userPulseTradeVolumeOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<UserPulseTradeVolumeOrderBy>): UserPulseTradeVolumeOrderBy {
    const message = createBaseUserPulseTradeVolumeOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: UserPulseTradeVolumeOrderByAmino): UserPulseTradeVolumeOrderBy {
    const message = createBaseUserPulseTradeVolumeOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: UserPulseTradeVolumeOrderBy, useInterfaces: boolean = true): UserPulseTradeVolumeOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: UserPulseTradeVolumeOrderByAminoMsg): UserPulseTradeVolumeOrderBy {
    return UserPulseTradeVolumeOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPulseTradeVolumeOrderByProtoMsg, useInterfaces: boolean = true): UserPulseTradeVolumeOrderBy {
    return UserPulseTradeVolumeOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserPulseTradeVolumeOrderBy): Uint8Array {
    return UserPulseTradeVolumeOrderBy.encode(message).finish();
  },
  toProtoMsg(message: UserPulseTradeVolumeOrderBy): UserPulseTradeVolumeOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.trade.UserPulseTradeVolumeOrderBy",
      value: UserPulseTradeVolumeOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserPulseTradeVolumeOrderBy.typeUrl, UserPulseTradeVolumeOrderBy);