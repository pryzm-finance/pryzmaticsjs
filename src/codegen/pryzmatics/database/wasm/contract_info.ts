import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ContractInfoOrderByProperty {
  ORDER_BY_PROPERTY_CONTRACT_ADDRESS = 0,
  UNRECOGNIZED = -1,
}
export const ContractInfoOrderByPropertySDKType = ContractInfoOrderByProperty;
export const ContractInfoOrderByPropertyAmino = ContractInfoOrderByProperty;
export function contractInfoOrderByPropertyFromJSON(object: any): ContractInfoOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_PROPERTY_CONTRACT_ADDRESS":
      return ContractInfoOrderByProperty.ORDER_BY_PROPERTY_CONTRACT_ADDRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractInfoOrderByProperty.UNRECOGNIZED;
  }
}
export function contractInfoOrderByPropertyToJSON(object: ContractInfoOrderByProperty): string {
  switch (object) {
    case ContractInfoOrderByProperty.ORDER_BY_PROPERTY_CONTRACT_ADDRESS:
      return "ORDER_BY_PROPERTY_CONTRACT_ADDRESS";
    case ContractInfoOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface ContractInfoOrderBy {
  property: ContractInfoOrderByProperty;
  descending: boolean;
}
export interface ContractInfoOrderByProtoMsg {
  typeUrl: "/pryzmatics.database.wasm.ContractInfoOrderBy";
  value: Uint8Array;
}
export interface ContractInfoOrderByAmino {
  property?: ContractInfoOrderByProperty;
  descending?: boolean;
}
export interface ContractInfoOrderByAminoMsg {
  type: "/pryzmatics.database.wasm.ContractInfoOrderBy";
  value: ContractInfoOrderByAmino;
}
export interface ContractInfoOrderBySDKType {
  property: ContractInfoOrderByProperty;
  descending: boolean;
}
function createBaseContractInfoOrderBy(): ContractInfoOrderBy {
  return {
    property: 0,
    descending: false
  };
}
export const ContractInfoOrderBy = {
  typeUrl: "/pryzmatics.database.wasm.ContractInfoOrderBy",
  is(o: any): o is ContractInfoOrderBy {
    return o && (o.$typeUrl === ContractInfoOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isSDK(o: any): o is ContractInfoOrderBySDKType {
    return o && (o.$typeUrl === ContractInfoOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  isAmino(o: any): o is ContractInfoOrderByAmino {
    return o && (o.$typeUrl === ContractInfoOrderBy.typeUrl || isSet(o.property) && typeof o.descending === "boolean");
  },
  encode(message: ContractInfoOrderBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.property !== 0) {
      writer.uint32(8).int32(message.property);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ContractInfoOrderBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoOrderBy();
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
  fromJSON(object: any): ContractInfoOrderBy {
    return {
      property: isSet(object.property) ? contractInfoOrderByPropertyFromJSON(object.property) : -1,
      descending: isSet(object.descending) ? Boolean(object.descending) : false
    };
  },
  toJSON(message: ContractInfoOrderBy): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = contractInfoOrderByPropertyToJSON(message.property));
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },
  fromPartial(object: Partial<ContractInfoOrderBy>): ContractInfoOrderBy {
    const message = createBaseContractInfoOrderBy();
    message.property = object.property ?? 0;
    message.descending = object.descending ?? false;
    return message;
  },
  fromAmino(object: ContractInfoOrderByAmino): ContractInfoOrderBy {
    const message = createBaseContractInfoOrderBy();
    if (object.property !== undefined && object.property !== null) {
      message.property = object.property;
    }
    if (object.descending !== undefined && object.descending !== null) {
      message.descending = object.descending;
    }
    return message;
  },
  toAmino(message: ContractInfoOrderBy, useInterfaces: boolean = true): ContractInfoOrderByAmino {
    const obj: any = {};
    obj.property = message.property === 0 ? undefined : message.property;
    obj.descending = message.descending === false ? undefined : message.descending;
    return obj;
  },
  fromAminoMsg(object: ContractInfoOrderByAminoMsg): ContractInfoOrderBy {
    return ContractInfoOrderBy.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractInfoOrderByProtoMsg, useInterfaces: boolean = true): ContractInfoOrderBy {
    return ContractInfoOrderBy.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ContractInfoOrderBy): Uint8Array {
    return ContractInfoOrderBy.encode(message).finish();
  },
  toProtoMsg(message: ContractInfoOrderBy): ContractInfoOrderByProtoMsg {
    return {
      typeUrl: "/pryzmatics.database.wasm.ContractInfoOrderBy",
      value: ContractInfoOrderBy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContractInfoOrderBy.typeUrl, ContractInfoOrderBy);