import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum VoteOrderByProperty {
  ORDER_BY_PROPERTY_VOTER = 0,
  UNRECOGNIZED = -1,
}
export const VoteOrderByPropertySDKType = VoteOrderByProperty;
export const VoteOrderByPropertyAmino = VoteOrderByProperty;
export function voteOrderByPropertyFromJSON(object: any): VoteOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_VOTER":
      return VoteOrderByProperty.ORDER_BY_PROPERTY_VOTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOrderByProperty.UNRECOGNIZED;
  }
}
export function voteOrderByPropertyToJSON(object: VoteOrderByProperty): string {
  switch (object) {
    case VoteOrderByProperty.ORDER_BY_PROPERTY_VOTER:
      return "ORDER_BY_PROPERTY_VOTER";
    case VoteOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface VoteOrderBy {
  property: VoteOrderByProperty;
  descending: boolean;
}
export interface VoteOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.pgov.VoteOrderBy";
  value: Uint8Array;
}
export interface VoteOrderByAmino {
  property?: VoteOrderByProperty;
  descending?: boolean;
}
export interface VoteOrderByAminoMsg {
  type: "/pryzmatics.database.pgov.VoteOrderBy";
  value: VoteOrderByAmino;
}
export interface VoteOrderBySDKType {
  property: VoteOrderByProperty;
  descending: boolean;
}
function createBaseVoteOrderBy(): VoteOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const VoteOrderBy = {
  typeUrl: "/pryzmatics.database.pgov.VoteOrderBy",
  is(o: any): o is VoteOrderBy {
    return o && (o.$typeUrl === VoteOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is VoteOrderBySDKType {
    return o && (o.$typeUrl === VoteOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is VoteOrderByAmino {
    return o && (o.$typeUrl === VoteOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: VoteOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): VoteOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteOrderBy();
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
  fromJSON(object: any): VoteOrderBy {
    return {
      property: isSet(object.property) ? voteOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: VoteOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = voteOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<VoteOrderBy>): VoteOrderBy {
    const message = createBaseVoteOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: VoteOrderByAmino): VoteOrderBy {
    const message = createBaseVoteOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: VoteOrderBy, useInterfaces: boolean = true): VoteOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: VoteOrderByAminoMsg): VoteOrderBy {
    return VoteOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteOrderByProtoMsg, useInterfaces: boolean = true): VoteOrderBy {
    return VoteOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: VoteOrderBy): Uint8Array {
    return VoteOrderBy.encode(message).finish();
  },
  toProtoMsg(message: VoteOrderBy): VoteOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.pgov.VoteOrderBy",
      value: VoteOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VoteOrderBy.typeUrl, VoteOrderBy);