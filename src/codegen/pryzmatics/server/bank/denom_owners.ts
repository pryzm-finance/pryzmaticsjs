import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DenomOwner, DenomOwnerAmino, DenomOwnerSDKType } from "../../../cosmos/bank/v1beta1/query";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export enum DenomOwnersOrderByProperty {
  ORDER_BY_BALANCE = 0,
  UNRECOGNIZED = -1,
}
export const DenomOwnersOrderByPropertySDKType = DenomOwnersOrderByProperty;
export const DenomOwnersOrderByPropertyAmino = DenomOwnersOrderByProperty;
export function denomOwnersOrderByPropertyFromJSON(object: any): DenomOwnersOrderByProperty {
  switch (object) {
    case 0:
    case "ORDER_BY_BALANCE":
      return DenomOwnersOrderByProperty.ORDER_BY_BALANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DenomOwnersOrderByProperty.UNRECOGNIZED;
  }
}
export function denomOwnersOrderByPropertyToJSON(object: DenomOwnersOrderByProperty): string {
  switch (object) {
    case DenomOwnersOrderByProperty.ORDER_BY_BALANCE:
      return "ORDER_BY_BALANCE";
    case DenomOwnersOrderByProperty.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface DenomOwnersRequest {
  pagination?: PageRequest;
  orderByBalanceDesc: boolean;
  denom: string;
}
export interface DenomOwnersRequestProtoMsg {
  typeUrl: "/pryzmatics.server.bank.DenomOwnersRequest";
  value: Uint8Array;
}
export interface DenomOwnersRequestAmino {
  pagination?: PageRequestAmino;
  order_by_balance_desc?: boolean;
  denom?: string;
}
export interface DenomOwnersRequestAminoMsg {
  type: "/pryzmatics.server.bank.DenomOwnersRequest";
  value: DenomOwnersRequestAmino;
}
export interface DenomOwnersRequestSDKType {
  pagination?: PageRequestSDKType;
  order_by_balance_desc: boolean;
  denom: string;
}
export interface DenomOwnersResponse {
  denomOwners: DenomOwner[];
  pagination?: PageResponse;
}
export interface DenomOwnersResponseProtoMsg {
  typeUrl: "/pryzmatics.server.bank.DenomOwnersResponse";
  value: Uint8Array;
}
export interface DenomOwnersResponseAmino {
  denom_owners?: DenomOwnerAmino[];
  pagination?: PageResponseAmino;
}
export interface DenomOwnersResponseAminoMsg {
  type: "/pryzmatics.server.bank.DenomOwnersResponse";
  value: DenomOwnersResponseAmino;
}
export interface DenomOwnersResponseSDKType {
  denom_owners: DenomOwnerSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseDenomOwnersRequest(): DenomOwnersRequest {
  return {
    pagination: undefined,
    orderByBalanceDesc: false,
    denom: ""
  };
}
export const DenomOwnersRequest = {
  typeUrl: "/pryzmatics.server.bank.DenomOwnersRequest",
  is(o: any): o is DenomOwnersRequest {
    return o && (o.$typeUrl === DenomOwnersRequest.typeUrl || typeof o.orderByBalanceDesc === "boolean" && typeof o.denom === "string");
  },
  isSDK(o: any): o is DenomOwnersRequestSDKType {
    return o && (o.$typeUrl === DenomOwnersRequest.typeUrl || typeof o.order_by_balance_desc === "boolean" && typeof o.denom === "string");
  },
  isAmino(o: any): o is DenomOwnersRequestAmino {
    return o && (o.$typeUrl === DenomOwnersRequest.typeUrl || typeof o.order_by_balance_desc === "boolean" && typeof o.denom === "string");
  },
  encode(message: DenomOwnersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderByBalanceDesc === true) {
      writer.uint32(16).bool(message.orderByBalanceDesc);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DenomOwnersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomOwnersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.orderByBalanceDesc = reader.bool();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomOwnersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      orderByBalanceDesc: isSet(object.orderByBalanceDesc) ? Boolean(object.orderByBalanceDesc) : false,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: DenomOwnersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.orderByBalanceDesc !== undefined && (obj.orderByBalanceDesc = message.orderByBalanceDesc);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<DenomOwnersRequest>): DenomOwnersRequest {
    const message = createBaseDenomOwnersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.orderByBalanceDesc = object.orderByBalanceDesc ?? false;
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: DenomOwnersRequestAmino): DenomOwnersRequest {
    const message = createBaseDenomOwnersRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.order_by_balance_desc !== undefined && object.order_by_balance_desc !== null) {
      message.orderByBalanceDesc = object.order_by_balance_desc;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: DenomOwnersRequest, useInterfaces: boolean = true): DenomOwnersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.order_by_balance_desc = message.orderByBalanceDesc === false ? undefined : message.orderByBalanceDesc;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: DenomOwnersRequestAminoMsg): DenomOwnersRequest {
    return DenomOwnersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomOwnersRequestProtoMsg, useInterfaces: boolean = true): DenomOwnersRequest {
    return DenomOwnersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DenomOwnersRequest): Uint8Array {
    return DenomOwnersRequest.encode(message).finish();
  },
  toProtoMsg(message: DenomOwnersRequest): DenomOwnersRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.bank.DenomOwnersRequest",
      value: DenomOwnersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DenomOwnersRequest.typeUrl, DenomOwnersRequest);
function createBaseDenomOwnersResponse(): DenomOwnersResponse {
  return {
    denomOwners: [],
    pagination: undefined
  };
}
export const DenomOwnersResponse = {
  typeUrl: "/pryzmatics.server.bank.DenomOwnersResponse",
  is(o: any): o is DenomOwnersResponse {
    return o && (o.$typeUrl === DenomOwnersResponse.typeUrl || Array.isArray(o.denomOwners) && (!o.denomOwners.length || DenomOwner.is(o.denomOwners[0])));
  },
  isSDK(o: any): o is DenomOwnersResponseSDKType {
    return o && (o.$typeUrl === DenomOwnersResponse.typeUrl || Array.isArray(o.denom_owners) && (!o.denom_owners.length || DenomOwner.isSDK(o.denom_owners[0])));
  },
  isAmino(o: any): o is DenomOwnersResponseAmino {
    return o && (o.$typeUrl === DenomOwnersResponse.typeUrl || Array.isArray(o.denom_owners) && (!o.denom_owners.length || DenomOwner.isAmino(o.denom_owners[0])));
  },
  encode(message: DenomOwnersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomOwners) {
      DenomOwner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): DenomOwnersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomOwnersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOwners.push(DenomOwner.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomOwnersResponse {
    return {
      denomOwners: Array.isArray(object?.denomOwners) ? object.denomOwners.map((e: any) => DenomOwner.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: DenomOwnersResponse): unknown {
    const obj: any = {};
    if (message.denomOwners) {
      obj.denomOwners = message.denomOwners.map(e => e ? DenomOwner.toJSON(e) : undefined);
    } else {
      obj.denomOwners = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DenomOwnersResponse>): DenomOwnersResponse {
    const message = createBaseDenomOwnersResponse();
    message.denomOwners = object.denomOwners?.map(e => DenomOwner.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: DenomOwnersResponseAmino): DenomOwnersResponse {
    const message = createBaseDenomOwnersResponse();
    message.denomOwners = object.denom_owners?.map(e => DenomOwner.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: DenomOwnersResponse, useInterfaces: boolean = true): DenomOwnersResponseAmino {
    const obj: any = {};
    if (message.denomOwners) {
      obj.denom_owners = message.denomOwners.map(e => e ? DenomOwner.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.denom_owners = message.denomOwners;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomOwnersResponseAminoMsg): DenomOwnersResponse {
    return DenomOwnersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomOwnersResponseProtoMsg, useInterfaces: boolean = true): DenomOwnersResponse {
    return DenomOwnersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: DenomOwnersResponse): Uint8Array {
    return DenomOwnersResponse.encode(message).finish();
  },
  toProtoMsg(message: DenomOwnersResponse): DenomOwnersResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.bank.DenomOwnersResponse",
      value: DenomOwnersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DenomOwnersResponse.typeUrl, DenomOwnersResponse);