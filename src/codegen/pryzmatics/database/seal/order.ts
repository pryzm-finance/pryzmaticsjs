import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum SealOrderOrderByProperty {
  ORDER_BY_PROPERTY_ORDER_ID = 0,
  ORDER_BY_PROPERTY_ORDER_CREATION_TIME = 1,
  ORDER_BY_PROPERTY_ORDER_PRICE = 2,
  UNRECOGNIZED = -1,
}
export const SealOrderOrderByPropertySDKType = SealOrderOrderByProperty;
export const SealOrderOrderByPropertyAmino = SealOrderOrderByProperty;
export function sealOrderOrderByPropertyFromJSON(object: any): SealOrderOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_ORDER_ID":
      return SealOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_ID;
    case 1:
    case "ORDER_BY_PROPERTY_ORDER_CREATION_TIME":
      return SealOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_CREATION_TIME;
    case 2:
    case "ORDER_BY_PROPERTY_ORDER_PRICE":
      return SealOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_PRICE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SealOrderOrderByProperty.UNRECOGNIZED;
  }
}
export function sealOrderOrderByPropertyToJSON(object: SealOrderOrderByProperty): string {
  switch (object) {
    case SealOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_ID:
      return "ORDER_BY_PROPERTY_ORDER_ID";
    case SealOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_CREATION_TIME:
      return "ORDER_BY_PROPERTY_ORDER_CREATION_TIME";
    case SealOrderOrderByProperty.ORDER_BY_PROPERTY_ORDER_PRICE:
      return "ORDER_BY_PROPERTY_ORDER_PRICE";
    case SealOrderOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface SealOrderOrderBy {
  property: SealOrderOrderByProperty;
  descending: boolean;
}
export interface SealOrderOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.seal.SealOrderOrderBy";
  value: Uint8Array;
}
export interface SealOrderOrderByAmino {
  property?: SealOrderOrderByProperty;
  descending?: boolean;
}
export interface SealOrderOrderByAminoMsg {
  type: "/pryzmatics.database.seal.SealOrderOrderBy";
  value: SealOrderOrderByAmino;
}
export interface SealOrderOrderBySDKType {
  property: SealOrderOrderByProperty;
  descending: boolean;
}
function createBaseSealOrderOrderBy(): SealOrderOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const SealOrderOrderBy = {
  typeUrl: "/pryzmatics.database.seal.SealOrderOrderBy",
  is(o: any): o is SealOrderOrderBy {
    return o && (o.$typeUrl === SealOrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is SealOrderOrderBySDKType {
    return o && (o.$typeUrl === SealOrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is SealOrderOrderByAmino {
    return o && (o.$typeUrl === SealOrderOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: SealOrderOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SealOrderOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSealOrderOrderBy();
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
  fromJSON(object: any): SealOrderOrderBy {
    return {
      property: isSet(object.property) ? sealOrderOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: SealOrderOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = sealOrderOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<SealOrderOrderBy>): SealOrderOrderBy {
    const message = createBaseSealOrderOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: SealOrderOrderByAmino): SealOrderOrderBy {
    const message = createBaseSealOrderOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: SealOrderOrderBy, useInterfaces: boolean = true): SealOrderOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: SealOrderOrderByAminoMsg): SealOrderOrderBy {
    return SealOrderOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: SealOrderOrderByProtoMsg, useInterfaces: boolean = true): SealOrderOrderBy {
    return SealOrderOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SealOrderOrderBy): Uint8Array {
    return SealOrderOrderBy.encode(message).finish();
  },
  toProtoMsg(message: SealOrderOrderBy): SealOrderOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.seal.SealOrderOrderBy",
      value: SealOrderOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SealOrderOrderBy.typeUrl, SealOrderOrderBy);