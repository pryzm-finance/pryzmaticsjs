import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface ContractInfo {
  address: string;
  codeId: bigint;
  creator: string;
  admin: string;
  label: string;
}
export interface ContractInfoProtoMsg {
  typeUrl: "/pryzmatics.wasm.ContractInfo";
  value: Uint8Array;
}
export interface ContractInfoAmino {
  address?: string;
  code_id?: string;
  creator?: string;
  admin?: string;
  label?: string;
}
export interface ContractInfoAminoMsg {
  type: "/pryzmatics.wasm.ContractInfo";
  value: ContractInfoAmino;
}
export interface ContractInfoSDKType {
  address: string;
  code_id: bigint;
  creator: string;
  admin: string;
  label: string;
}
function createBaseContractInfo(): ContractInfo {
  return {
    address: "",
    codeId: BigInt(0),
    creator: "",
    admin: "",
    label: ""
  };
}
export const ContractInfo = {
  typeUrl: "/pryzmatics.wasm.ContractInfo",
  is(o: any): o is ContractInfo {
    return o && (o.$typeUrl === ContractInfo.typeUrl || typeof o.address === "string" && typeof o.codeId === "bigint" && typeof o.creator === "string" && typeof o.admin === "string" && typeof o.label === "string");
  },
  isSDK(o: any): o is ContractInfoSDKType {
    return o && (o.$typeUrl === ContractInfo.typeUrl || typeof o.address === "string" && typeof o.code_id === "bigint" && typeof o.creator === "string" && typeof o.admin === "string" && typeof o.label === "string");
  },
  isAmino(o: any): o is ContractInfoAmino {
    return o && (o.$typeUrl === ContractInfo.typeUrl || typeof o.address === "string" && typeof o.code_id === "bigint" && typeof o.creator === "string" && typeof o.admin === "string" && typeof o.label === "string");
  },
  encode(message: ContractInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(42).string(message.label);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ContractInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.admin = reader.string();
          break;
        case 5:
          message.label = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      label: isSet(object.label) ? String(object.label) : ""
    };
  },
  toJSON(message: ContractInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    message.label !== undefined && (obj.label = message.label);
    return obj;
  },
  fromPartial(object: Partial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.address = object.address ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.label = object.label ?? "";
    return message;
  },
  fromAmino(object: ContractInfoAmino): ContractInfo {
    const message = createBaseContractInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    }
    return message;
  },
  toAmino(message: ContractInfo, useInterfaces: boolean = true): ContractInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.label = message.label === "" ? undefined : message.label;
    return obj;
  },
  fromAminoMsg(object: ContractInfoAminoMsg): ContractInfo {
    return ContractInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractInfoProtoMsg, useInterfaces: boolean = true): ContractInfo {
    return ContractInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ContractInfo): Uint8Array {
    return ContractInfo.encode(message).finish();
  },
  toProtoMsg(message: ContractInfo): ContractInfoProtoMsg {
    return {
      typeUrl: "/pryzmatics.wasm.ContractInfo",
      value: ContractInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ContractInfo.typeUrl, ContractInfo);