import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum SealOrderActivityOrderByProperty {
  ORDER_BY_PROPERTY_ORDER_ACTIVITY_ID = 0,
  ORDER_BY_PROPERTY_ORDER_ACTIVITY_TIME = 1,
  UNRECOGNIZED = -1,
}
export const SealOrderActivityOrderByPropertySDKType = SealOrderActivityOrderByProperty;
export const SealOrderActivityOrderByPropertyAmino = SealOrderActivityOrderByProperty;
export function sealOrderActivityOrderByPropertyFromJSON(object: any): SealOrderActivityOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_ORDER_ACTIVITY_ID":
      return SealOrderActivityOrderByProperty.ORDER_BY_PROPERTY_ORDER_ACTIVITY_ID;
    case 1:
    case "ORDER_BY_PROPERTY_ORDER_ACTIVITY_TIME":
      return SealOrderActivityOrderByProperty.ORDER_BY_PROPERTY_ORDER_ACTIVITY_TIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SealOrderActivityOrderByProperty.UNRECOGNIZED;
  }
}
export function sealOrderActivityOrderByPropertyToJSON(object: SealOrderActivityOrderByProperty): string {
  switch (object) {
    case SealOrderActivityOrderByProperty.ORDER_BY_PROPERTY_ORDER_ACTIVITY_ID:
      return "ORDER_BY_PROPERTY_ORDER_ACTIVITY_ID";
    case SealOrderActivityOrderByProperty.ORDER_BY_PROPERTY_ORDER_ACTIVITY_TIME:
      return "ORDER_BY_PROPERTY_ORDER_ACTIVITY_TIME";
    case SealOrderActivityOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface SealOrderActivityOrderBy {
  property: SealOrderActivityOrderByProperty;
  descending: boolean;
}
export interface SealOrderActivityOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.seal.SealOrderActivityOrderBy";
  value: Uint8Array;
}
export interface SealOrderActivityOrderByAmino {
  property?: SealOrderActivityOrderByProperty;
  descending?: boolean;
}
export interface SealOrderActivityOrderByAminoMsg {
  type: "/pryzmatics.database.seal.SealOrderActivityOrderBy";
  value: SealOrderActivityOrderByAmino;
}
export interface SealOrderActivityOrderBySDKType {
  property: SealOrderActivityOrderByProperty;
  descending: boolean;
}
function createBaseSealOrderActivityOrderBy(): SealOrderActivityOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const SealOrderActivityOrderBy = {
  typeUrl: "/pryzmatics.database.seal.SealOrderActivityOrderBy",
  is(o: any): o is SealOrderActivityOrderBy {
    return o && (o.$typeUrl === SealOrderActivityOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is SealOrderActivityOrderBySDKType {
    return o && (o.$typeUrl === SealOrderActivityOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is SealOrderActivityOrderByAmino {
    return o && (o.$typeUrl === SealOrderActivityOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: SealOrderActivityOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SealOrderActivityOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSealOrderActivityOrderBy();
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
  fromJSON(object: any): SealOrderActivityOrderBy {
    return {
      property: isSet(object.property) ? sealOrderActivityOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: SealOrderActivityOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = sealOrderActivityOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<SealOrderActivityOrderBy>): SealOrderActivityOrderBy {
    const message = createBaseSealOrderActivityOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: SealOrderActivityOrderByAmino): SealOrderActivityOrderBy {
    const message = createBaseSealOrderActivityOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: SealOrderActivityOrderBy, useInterfaces: boolean = true): SealOrderActivityOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: SealOrderActivityOrderByAminoMsg): SealOrderActivityOrderBy {
    return SealOrderActivityOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: SealOrderActivityOrderByProtoMsg, useInterfaces: boolean = true): SealOrderActivityOrderBy {
    return SealOrderActivityOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SealOrderActivityOrderBy): Uint8Array {
    return SealOrderActivityOrderBy.encode(message).finish();
  },
  toProtoMsg(message: SealOrderActivityOrderBy): SealOrderActivityOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.seal.SealOrderActivityOrderBy",
      value: SealOrderActivityOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SealOrderActivityOrderBy.typeUrl, SealOrderActivityOrderBy);