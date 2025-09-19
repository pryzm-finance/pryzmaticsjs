import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum SealPairOrderByProperty {
  ORDER_BY_PROPERTY_PAIR_TOTAL_COUNT = 0,
  UNRECOGNIZED = -1,
}
export const SealPairOrderByPropertySDKType = SealPairOrderByProperty;
export const SealPairOrderByPropertyAmino = SealPairOrderByProperty;
export function sealPairOrderByPropertyFromJSON(object: any): SealPairOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_PAIR_TOTAL_COUNT":
      return SealPairOrderByProperty.ORDER_BY_PROPERTY_PAIR_TOTAL_COUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SealPairOrderByProperty.UNRECOGNIZED;
  }
}
export function sealPairOrderByPropertyToJSON(object: SealPairOrderByProperty): string {
  switch (object) {
    case SealPairOrderByProperty.ORDER_BY_PROPERTY_PAIR_TOTAL_COUNT:
      return "ORDER_BY_PROPERTY_PAIR_TOTAL_COUNT";
    case SealPairOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface SealPairOrderBy {
  property: SealPairOrderByProperty;
  descending: boolean;
}
export interface SealPairOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.seal.SealPairOrderBy";
  value: Uint8Array;
}
export interface SealPairOrderByAmino {
  property?: SealPairOrderByProperty;
  descending?: boolean;
}
export interface SealPairOrderByAminoMsg {
  type: "/pryzmatics.database.seal.SealPairOrderBy";
  value: SealPairOrderByAmino;
}
export interface SealPairOrderBySDKType {
  property: SealPairOrderByProperty;
  descending: boolean;
}
function createBaseSealPairOrderBy(): SealPairOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const SealPairOrderBy = {
  typeUrl: "/pryzmatics.database.seal.SealPairOrderBy",
  is(o: any): o is SealPairOrderBy {
    return o && (o.$typeUrl === SealPairOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is SealPairOrderBySDKType {
    return o && (o.$typeUrl === SealPairOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is SealPairOrderByAmino {
    return o && (o.$typeUrl === SealPairOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: SealPairOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SealPairOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSealPairOrderBy();
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
  fromJSON(object: any): SealPairOrderBy {
    return {
      property: isSet(object.property) ? sealPairOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: SealPairOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = sealPairOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<SealPairOrderBy>): SealPairOrderBy {
    const message = createBaseSealPairOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: SealPairOrderByAmino): SealPairOrderBy {
    const message = createBaseSealPairOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: SealPairOrderBy, useInterfaces: boolean = true): SealPairOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: SealPairOrderByAminoMsg): SealPairOrderBy {
    return SealPairOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: SealPairOrderByProtoMsg, useInterfaces: boolean = true): SealPairOrderBy {
    return SealPairOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SealPairOrderBy): Uint8Array {
    return SealPairOrderBy.encode(message).finish();
  },
  toProtoMsg(message: SealPairOrderBy): SealPairOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.seal.SealPairOrderBy",
      value: SealPairOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SealPairOrderBy.typeUrl, SealPairOrderBy);