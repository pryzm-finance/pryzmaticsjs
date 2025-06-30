import { ContractInfoOrderBy, ContractInfoOrderByAmino, ContractInfoOrderBySDKType } from "../../database/wasm/contract_info";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoAmino, ContractInfoSDKType } from "../../wasm/contract_info";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryContractInfoRequest {
  orderBy?: ContractInfoOrderBy;
  pagination?: PageRequest;
}
export interface QueryContractInfoRequestProtoMsg {
  typeUrl: "/pryzmatics.server.wasm.QueryContractInfoRequest";
  value: Uint8Array;
}
export interface QueryContractInfoRequestAmino {
  order_by?: ContractInfoOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryContractInfoRequestAminoMsg {
  type: "/pryzmatics.server.wasm.QueryContractInfoRequest";
  value: QueryContractInfoRequestAmino;
}
export interface QueryContractInfoRequestSDKType {
  order_by?: ContractInfoOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryContractInfoResponse {
  contracts: ContractInfo[];
  pagination?: PageResponse;
}
export interface QueryContractInfoResponseProtoMsg {
  typeUrl: "/pryzmatics.server.wasm.QueryContractInfoResponse";
  value: Uint8Array;
}
export interface QueryContractInfoResponseAmino {
  contracts?: ContractInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryContractInfoResponseAminoMsg {
  type: "/pryzmatics.server.wasm.QueryContractInfoResponse";
  value: QueryContractInfoResponseAmino;
}
export interface QueryContractInfoResponseSDKType {
  contracts: ContractInfoSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryContractInfoRequest(): QueryContractInfoRequest {
  return {
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryContractInfoRequest = {
  typeUrl: "/pryzmatics.server.wasm.QueryContractInfoRequest",
  is(o: any): o is QueryContractInfoRequest {
    return o && o.$typeUrl === QueryContractInfoRequest.typeUrl;
  },
  isSDK(o: any): o is QueryContractInfoRequestSDKType {
    return o && o.$typeUrl === QueryContractInfoRequest.typeUrl;
  },
  isAmino(o: any): o is QueryContractInfoRequestAmino {
    return o && o.$typeUrl === QueryContractInfoRequest.typeUrl;
  },
  encode(message: QueryContractInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderBy !== undefined) {
      ContractInfoOrderBy.encode(message.orderBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryContractInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderBy = ContractInfoOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractInfoRequest {
    return {
      orderBy: isSet(object.orderBy) ? ContractInfoOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryContractInfoRequest): unknown {
    const obj: any = {};
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? ContractInfoOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryContractInfoRequest>): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? ContractInfoOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContractInfoRequestAmino): QueryContractInfoRequest {
    const message = createBaseQueryContractInfoRequest();
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = ContractInfoOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractInfoRequest, useInterfaces: boolean = true): QueryContractInfoRequestAmino {
    const obj: any = {};
    obj.order_by = message.orderBy ? ContractInfoOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractInfoRequestAminoMsg): QueryContractInfoRequest {
    return QueryContractInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractInfoRequestProtoMsg, useInterfaces: boolean = true): QueryContractInfoRequest {
    return QueryContractInfoRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryContractInfoRequest): Uint8Array {
    return QueryContractInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoRequest): QueryContractInfoRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.wasm.QueryContractInfoRequest",
      value: QueryContractInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractInfoRequest.typeUrl, QueryContractInfoRequest);
function createBaseQueryContractInfoResponse(): QueryContractInfoResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}
export const QueryContractInfoResponse = {
  typeUrl: "/pryzmatics.server.wasm.QueryContractInfoResponse",
  is(o: any): o is QueryContractInfoResponse {
    return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || ContractInfo.is(o.contracts[0])));
  },
  isSDK(o: any): o is QueryContractInfoResponseSDKType {
    return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || ContractInfo.isSDK(o.contracts[0])));
  },
  isAmino(o: any): o is QueryContractInfoResponseAmino {
    return o && (o.$typeUrl === QueryContractInfoResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || ContractInfo.isAmino(o.contracts[0])));
  },
  encode(message: QueryContractInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      ContractInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryContractInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(ContractInfo.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryContractInfoResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => ContractInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryContractInfoResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? ContractInfo.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryContractInfoResponse>): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.contracts = object.contracts?.map(e => ContractInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryContractInfoResponseAmino): QueryContractInfoResponse {
    const message = createBaseQueryContractInfoResponse();
    message.contracts = object.contracts?.map(e => ContractInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryContractInfoResponse, useInterfaces: boolean = true): QueryContractInfoResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? ContractInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractInfoResponseAminoMsg): QueryContractInfoResponse {
    return QueryContractInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractInfoResponseProtoMsg, useInterfaces: boolean = true): QueryContractInfoResponse {
    return QueryContractInfoResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryContractInfoResponse): Uint8Array {
    return QueryContractInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractInfoResponse): QueryContractInfoResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.wasm.QueryContractInfoResponse",
      value: QueryContractInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractInfoResponse.typeUrl, QueryContractInfoResponse);