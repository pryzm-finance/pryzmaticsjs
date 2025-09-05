import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum SealReservationOrderByProperty {
  ORDER_BY_PROPERTY_RESERVATION_ID = 0,
  UNRECOGNIZED = -1,
}
export const SealReservationOrderByPropertySDKType = SealReservationOrderByProperty;
export const SealReservationOrderByPropertyAmino = SealReservationOrderByProperty;
export function sealReservationOrderByPropertyFromJSON(object: any): SealReservationOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_RESERVATION_ID":
      return SealReservationOrderByProperty.ORDER_BY_PROPERTY_RESERVATION_ID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SealReservationOrderByProperty.UNRECOGNIZED;
  }
}
export function sealReservationOrderByPropertyToJSON(object: SealReservationOrderByProperty): string {
  switch (object) {
    case SealReservationOrderByProperty.ORDER_BY_PROPERTY_RESERVATION_ID:
      return "ORDER_BY_PROPERTY_RESERVATION_ID";
    case SealReservationOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface SealReservationOrderBy {
  property: SealReservationOrderByProperty;
  descending: boolean;
}
export interface SealReservationOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.seal.SealReservationOrderBy";
  value: Uint8Array;
}
export interface SealReservationOrderByAmino {
  property?: SealReservationOrderByProperty;
  descending?: boolean;
}
export interface SealReservationOrderByAminoMsg {
  type: "/pryzmatics.database.seal.SealReservationOrderBy";
  value: SealReservationOrderByAmino;
}
export interface SealReservationOrderBySDKType {
  property: SealReservationOrderByProperty;
  descending: boolean;
}
function createBaseSealReservationOrderBy(): SealReservationOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const SealReservationOrderBy = {
  typeUrl: "/pryzmatics.database.seal.SealReservationOrderBy",
  is(o: any): o is SealReservationOrderBy {
    return o && (o.$typeUrl === SealReservationOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is SealReservationOrderBySDKType {
    return o && (o.$typeUrl === SealReservationOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is SealReservationOrderByAmino {
    return o && (o.$typeUrl === SealReservationOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: SealReservationOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SealReservationOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSealReservationOrderBy();
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
  fromJSON(object: any): SealReservationOrderBy {
    return {
      property: isSet(object.property) ? sealReservationOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: SealReservationOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = sealReservationOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<SealReservationOrderBy>): SealReservationOrderBy {
    const message = createBaseSealReservationOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: SealReservationOrderByAmino): SealReservationOrderBy {
    const message = createBaseSealReservationOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: SealReservationOrderBy, useInterfaces: boolean = true): SealReservationOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: SealReservationOrderByAminoMsg): SealReservationOrderBy {
    return SealReservationOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: SealReservationOrderByProtoMsg, useInterfaces: boolean = true): SealReservationOrderBy {
    return SealReservationOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SealReservationOrderBy): Uint8Array {
    return SealReservationOrderBy.encode(message).finish();
  },
  toProtoMsg(message: SealReservationOrderBy): SealReservationOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.seal.SealReservationOrderBy",
      value: SealReservationOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SealReservationOrderBy.typeUrl, SealReservationOrderBy);