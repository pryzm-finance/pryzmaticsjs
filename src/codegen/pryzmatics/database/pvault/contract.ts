import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum PVaultContractOrderByProperty {
  ORDER_BY_PROPERTY_CONTRACT_ADDRESS = 0,
  UNRECOGNIZED = -1,
}
export const PVaultContractOrderByPropertySDKType = PVaultContractOrderByProperty;
export const PVaultContractOrderByPropertyAmino = PVaultContractOrderByProperty;
export function pVaultContractOrderByPropertyFromJSON(object: any): PVaultContractOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_CONTRACT_ADDRESS":
      return PVaultContractOrderByProperty.ORDER_BY_PROPERTY_CONTRACT_ADDRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PVaultContractOrderByProperty.UNRECOGNIZED;
  }
}
export function pVaultContractOrderByPropertyToJSON(object: PVaultContractOrderByProperty): string {
  switch (object) {
    case PVaultContractOrderByProperty.ORDER_BY_PROPERTY_CONTRACT_ADDRESS:
      return "ORDER_BY_PROPERTY_CONTRACT_ADDRESS";
    case PVaultContractOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface PVaultContractOrderBy {
  property: PVaultContractOrderByProperty;
  descending: boolean;
}
export interface PVaultContractOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.pvault.PVaultContractOrderBy";
  value: Uint8Array;
}
export interface PVaultContractOrderByAmino {
  property?: PVaultContractOrderByProperty;
  descending?: boolean;
}
export interface PVaultContractOrderByAminoMsg {
  type: "/pryzmatics.database.pvault.PVaultContractOrderBy";
  value: PVaultContractOrderByAmino;
}
export interface PVaultContractOrderBySDKType {
  property: PVaultContractOrderByProperty;
  descending: boolean;
}
function createBasePVaultContractOrderBy(): PVaultContractOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const PVaultContractOrderBy = {
  typeUrl: "/pryzmatics.database.pvault.PVaultContractOrderBy",
  is(o: any): o is PVaultContractOrderBy {
    return o && (o.$typeUrl === PVaultContractOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is PVaultContractOrderBySDKType {
    return o && (o.$typeUrl === PVaultContractOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is PVaultContractOrderByAmino {
    return o && (o.$typeUrl === PVaultContractOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: PVaultContractOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PVaultContractOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePVaultContractOrderBy();
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
  fromJSON(object: any): PVaultContractOrderBy {
    return {
      property: isSet(object.property) ? pVaultContractOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: PVaultContractOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = pVaultContractOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<PVaultContractOrderBy>): PVaultContractOrderBy {
    const message = createBasePVaultContractOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: PVaultContractOrderByAmino): PVaultContractOrderBy {
    const message = createBasePVaultContractOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: PVaultContractOrderBy, useInterfaces: boolean = true): PVaultContractOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: PVaultContractOrderByAminoMsg): PVaultContractOrderBy {
    return PVaultContractOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: PVaultContractOrderByProtoMsg, useInterfaces: boolean = true): PVaultContractOrderBy {
    return PVaultContractOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PVaultContractOrderBy): Uint8Array {
    return PVaultContractOrderBy.encode(message).finish();
  },
  toProtoMsg(message: PVaultContractOrderBy): PVaultContractOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.pvault.PVaultContractOrderBy",
      value: PVaultContractOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PVaultContractOrderBy.typeUrl, PVaultContractOrderBy);