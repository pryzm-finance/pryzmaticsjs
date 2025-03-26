import { PVaultContractOrderBy, PVaultContractOrderByAmino, PVaultContractOrderBySDKType } from "../../database/pvault/contract";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { PVaultContract, PVaultContractAmino, PVaultContractSDKType } from "../../pvault/contract";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPVaultContractsRequest {
  orderBy?: PVaultContractOrderBy;
  pagination?: PageRequest;
}
export interface QueryPVaultContractsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.pvault.QueryPVaultContractsRequest";
  value: Uint8Array;
}
export interface QueryPVaultContractsRequestAmino {
  order_by?: PVaultContractOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryPVaultContractsRequestAminoMsg {
  type: "/pryzmatics.server.pvault.QueryPVaultContractsRequest";
  value: QueryPVaultContractsRequestAmino;
}
export interface QueryPVaultContractsRequestSDKType {
  order_by?: PVaultContractOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryPVaultContractsResponse {
  contracts: PVaultContract[];
  pagination?: PageResponse;
}
export interface QueryPVaultContractsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.pvault.QueryPVaultContractsResponse";
  value: Uint8Array;
}
export interface QueryPVaultContractsResponseAmino {
  contracts?: PVaultContractAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPVaultContractsResponseAminoMsg {
  type: "/pryzmatics.server.pvault.QueryPVaultContractsResponse";
  value: QueryPVaultContractsResponseAmino;
}
export interface QueryPVaultContractsResponseSDKType {
  contracts: PVaultContractSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryPVaultContractsRequest(): QueryPVaultContractsRequest {
  return {
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryPVaultContractsRequest = {
  typeUrl: "/pryzmatics.server.pvault.QueryPVaultContractsRequest",
  is(o: any): o is QueryPVaultContractsRequest {
    return o && o.$typeUrl === QueryPVaultContractsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryPVaultContractsRequestSDKType {
    return o && o.$typeUrl === QueryPVaultContractsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPVaultContractsRequestAmino {
    return o && o.$typeUrl === QueryPVaultContractsRequest.typeUrl;
  },
  encode(message: QueryPVaultContractsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderBy !== undefined) {
      PVaultContractOrderBy.encode(message.orderBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPVaultContractsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPVaultContractsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderBy = PVaultContractOrderBy.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): QueryPVaultContractsRequest {
    return {
      orderBy: isSet(object.orderBy) ? PVaultContractOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPVaultContractsRequest): unknown {
    const obj: any = {};
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? PVaultContractOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPVaultContractsRequest>): QueryPVaultContractsRequest {
    const message = createBaseQueryPVaultContractsRequest();
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? PVaultContractOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPVaultContractsRequestAmino): QueryPVaultContractsRequest {
    const message = createBaseQueryPVaultContractsRequest();
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = PVaultContractOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPVaultContractsRequest, useInterfaces: boolean = true): QueryPVaultContractsRequestAmino {
    const obj: any = {};
    obj.order_by = message.orderBy ? PVaultContractOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPVaultContractsRequestAminoMsg): QueryPVaultContractsRequest {
    return QueryPVaultContractsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPVaultContractsRequestProtoMsg, useInterfaces: boolean = true): QueryPVaultContractsRequest {
    return QueryPVaultContractsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPVaultContractsRequest): Uint8Array {
    return QueryPVaultContractsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPVaultContractsRequest): QueryPVaultContractsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pvault.QueryPVaultContractsRequest",
      value: QueryPVaultContractsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPVaultContractsRequest.typeUrl, QueryPVaultContractsRequest);
function createBaseQueryPVaultContractsResponse(): QueryPVaultContractsResponse {
  return {
    contracts: [],
    pagination: undefined
  };
}
export const QueryPVaultContractsResponse = {
  typeUrl: "/pryzmatics.server.pvault.QueryPVaultContractsResponse",
  is(o: any): o is QueryPVaultContractsResponse {
    return o && (o.$typeUrl === QueryPVaultContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || PVaultContract.is(o.contracts[0])));
  },
  isSDK(o: any): o is QueryPVaultContractsResponseSDKType {
    return o && (o.$typeUrl === QueryPVaultContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || PVaultContract.isSDK(o.contracts[0])));
  },
  isAmino(o: any): o is QueryPVaultContractsResponseAmino {
    return o && (o.$typeUrl === QueryPVaultContractsResponse.typeUrl || Array.isArray(o.contracts) && (!o.contracts.length || PVaultContract.isAmino(o.contracts[0])));
  },
  encode(message: QueryPVaultContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contracts) {
      PVaultContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryPVaultContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPVaultContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contracts.push(PVaultContract.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryPVaultContractsResponse {
    return {
      contracts: Array.isArray(object?.contracts) ? object.contracts.map((e: any) => PVaultContract.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPVaultContractsResponse): unknown {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? PVaultContract.toJSON(e) : undefined);
    } else {
      obj.contracts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPVaultContractsResponse>): QueryPVaultContractsResponse {
    const message = createBaseQueryPVaultContractsResponse();
    message.contracts = object.contracts?.map(e => PVaultContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPVaultContractsResponseAmino): QueryPVaultContractsResponse {
    const message = createBaseQueryPVaultContractsResponse();
    message.contracts = object.contracts?.map(e => PVaultContract.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPVaultContractsResponse, useInterfaces: boolean = true): QueryPVaultContractsResponseAmino {
    const obj: any = {};
    if (message.contracts) {
      obj.contracts = message.contracts.map(e => e ? PVaultContract.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.contracts = message.contracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPVaultContractsResponseAminoMsg): QueryPVaultContractsResponse {
    return QueryPVaultContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPVaultContractsResponseProtoMsg, useInterfaces: boolean = true): QueryPVaultContractsResponse {
    return QueryPVaultContractsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryPVaultContractsResponse): Uint8Array {
    return QueryPVaultContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPVaultContractsResponse): QueryPVaultContractsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.pvault.QueryPVaultContractsResponse",
      value: QueryPVaultContractsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPVaultContractsResponse.typeUrl, QueryPVaultContractsResponse);