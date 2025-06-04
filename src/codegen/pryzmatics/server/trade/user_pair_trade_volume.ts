import { OperationType, UserTradeVolume, UserTradeVolumeAmino, UserTradeVolumeSDKType, operationTypeFromJSON, operationTypeToJSON } from "../../trade/user_trade_history";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryUserPairTradeVolumeRequest {
  /** partial address match supported */
  address: string;
  /** mandatory */
  tokenIn: string;
  /** mandatory */
  tokenOut: string;
  operationTypes: OperationType[];
  orderByVolumeAsc: boolean;
  from?: string;
  to?: string;
  pagination?: PageRequest;
  includeProxyTrades: boolean;
}
export interface QueryUserPairTradeVolumeRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserPairTradeVolumeRequest";
  value: Uint8Array;
}
export interface QueryUserPairTradeVolumeRequestAmino {
  /** partial address match supported */
  address?: string;
  /** mandatory */
  token_in?: string;
  /** mandatory */
  token_out?: string;
  operation_types?: OperationType[];
  order_by_volume_asc?: boolean;
  from?: string;
  to?: string;
  pagination?: PageRequestAmino;
  include_proxy_trades?: boolean;
}
export interface QueryUserPairTradeVolumeRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserPairTradeVolumeRequest";
  value: QueryUserPairTradeVolumeRequestAmino;
}
export interface QueryUserPairTradeVolumeRequestSDKType {
  address: string;
  token_in: string;
  token_out: string;
  operation_types: OperationType[];
  order_by_volume_asc: boolean;
  from?: string;
  to?: string;
  pagination?: PageRequestSDKType;
  include_proxy_trades: boolean;
}
export interface QueryUserPairTradeVolumeResponse {
  userTradeVolumes: UserTradeVolume[];
  pagination?: PageResponse;
}
export interface QueryUserPairTradeVolumeResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserPairTradeVolumeResponse";
  value: Uint8Array;
}
export interface QueryUserPairTradeVolumeResponseAmino {
  user_trade_volumes?: UserTradeVolumeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUserPairTradeVolumeResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserPairTradeVolumeResponse";
  value: QueryUserPairTradeVolumeResponseAmino;
}
export interface QueryUserPairTradeVolumeResponseSDKType {
  user_trade_volumes: UserTradeVolumeSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryUserPairTradeVolumeRequest(): QueryUserPairTradeVolumeRequest {
  return {
    address: "",
    tokenIn: "",
    tokenOut: "",
    operationTypes: [],
    orderByVolumeAsc: false,
    from: undefined,
    to: undefined,
    pagination: undefined,
    includeProxyTrades: false
  };
}
export const QueryUserPairTradeVolumeRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryUserPairTradeVolumeRequest",
  is(o: any): o is QueryUserPairTradeVolumeRequest {
    return o && (o.$typeUrl === QueryUserPairTradeVolumeRequest.typeUrl || typeof o.address === "string" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && Array.isArray(o.operationTypes) && typeof o.orderByVolumeAsc === "boolean" && typeof o.includeProxyTrades === "boolean");
  },
  isSDK(o: any): o is QueryUserPairTradeVolumeRequestSDKType {
    return o && (o.$typeUrl === QueryUserPairTradeVolumeRequest.typeUrl || typeof o.address === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && Array.isArray(o.operation_types) && typeof o.order_by_volume_asc === "boolean" && typeof o.include_proxy_trades === "boolean");
  },
  isAmino(o: any): o is QueryUserPairTradeVolumeRequestAmino {
    return o && (o.$typeUrl === QueryUserPairTradeVolumeRequest.typeUrl || typeof o.address === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && Array.isArray(o.operation_types) && typeof o.order_by_volume_asc === "boolean" && typeof o.include_proxy_trades === "boolean");
  },
  encode(message: QueryUserPairTradeVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    writer.uint32(34).fork();
    for (const v of message.operationTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.orderByVolumeAsc === true) {
      writer.uint32(40).bool(message.orderByVolumeAsc);
    }
    if (message.from !== undefined) {
      writer.uint32(50).string(message.from);
    }
    if (message.to !== undefined) {
      writer.uint32(58).string(message.to);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(66).fork()).ldelim();
    }
    if (message.includeProxyTrades === true) {
      writer.uint32(72).bool(message.includeProxyTrades);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserPairTradeVolumeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPairTradeVolumeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operationTypes.push((reader.int32() as any));
            }
          } else {
            message.operationTypes.push((reader.int32() as any));
          }
          break;
        case 5:
          message.orderByVolumeAsc = reader.bool();
          break;
        case 6:
          message.from = reader.string();
          break;
        case 7:
          message.to = reader.string();
          break;
        case 8:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.includeProxyTrades = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserPairTradeVolumeRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      operationTypes: Array.isArray(object?.operationTypes) ? object.operationTypes.map((e: any) => operationTypeFromJSON(e)) : [],
      orderByVolumeAsc: isSet(object.orderByVolumeAsc) ? Boolean(object.orderByVolumeAsc) : false,
      from: isSet(object.from) ? String(object.from) : undefined,
      to: isSet(object.to) ? String(object.to) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      includeProxyTrades: isSet(object.includeProxyTrades) ? Boolean(object.includeProxyTrades) : false
    };
  },
  toJSON(message: QueryUserPairTradeVolumeRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    if (message.operationTypes) {
      obj.operationTypes = message.operationTypes.map(e => operationTypeToJSON(e));
    } else {
      obj.operationTypes = [];
    }
    message.orderByVolumeAsc !== undefined && (obj.orderByVolumeAsc = message.orderByVolumeAsc);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.includeProxyTrades !== undefined && (obj.includeProxyTrades = message.includeProxyTrades);
    return obj;
  },
  fromPartial(object: Partial<QueryUserPairTradeVolumeRequest>): QueryUserPairTradeVolumeRequest {
    const message = createBaseQueryUserPairTradeVolumeRequest();
    message.address = object.address ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.operationTypes = object.operationTypes?.map(e => e) || [];
    message.orderByVolumeAsc = object.orderByVolumeAsc ?? false;
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.includeProxyTrades = object.includeProxyTrades ?? false;
    return message;
  },
  fromAmino(object: QueryUserPairTradeVolumeRequestAmino): QueryUserPairTradeVolumeRequest {
    const message = createBaseQueryUserPairTradeVolumeRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    message.operationTypes = object.operation_types?.map(e => e) || [];
    if (object.order_by_volume_asc !== undefined && object.order_by_volume_asc !== null) {
      message.orderByVolumeAsc = object.order_by_volume_asc;
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.include_proxy_trades !== undefined && object.include_proxy_trades !== null) {
      message.includeProxyTrades = object.include_proxy_trades;
    }
    return message;
  },
  toAmino(message: QueryUserPairTradeVolumeRequest, useInterfaces: boolean = true): QueryUserPairTradeVolumeRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    if (message.operationTypes) {
      obj.operation_types = message.operationTypes.map(e => e);
    } else {
      obj.operation_types = message.operationTypes;
    }
    obj.order_by_volume_asc = message.orderByVolumeAsc === false ? undefined : message.orderByVolumeAsc;
    obj.from = message.from === null ? undefined : message.from;
    obj.to = message.to === null ? undefined : message.to;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.include_proxy_trades = message.includeProxyTrades === false ? undefined : message.includeProxyTrades;
    return obj;
  },
  fromAminoMsg(object: QueryUserPairTradeVolumeRequestAminoMsg): QueryUserPairTradeVolumeRequest {
    return QueryUserPairTradeVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPairTradeVolumeRequestProtoMsg, useInterfaces: boolean = true): QueryUserPairTradeVolumeRequest {
    return QueryUserPairTradeVolumeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserPairTradeVolumeRequest): Uint8Array {
    return QueryUserPairTradeVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPairTradeVolumeRequest): QueryUserPairTradeVolumeRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserPairTradeVolumeRequest",
      value: QueryUserPairTradeVolumeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserPairTradeVolumeRequest.typeUrl, QueryUserPairTradeVolumeRequest);
function createBaseQueryUserPairTradeVolumeResponse(): QueryUserPairTradeVolumeResponse {
  return {
    userTradeVolumes: [],
    pagination: undefined
  };
}
export const QueryUserPairTradeVolumeResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryUserPairTradeVolumeResponse",
  is(o: any): o is QueryUserPairTradeVolumeResponse {
    return o && (o.$typeUrl === QueryUserPairTradeVolumeResponse.typeUrl || Array.isArray(o.userTradeVolumes) && (!o.userTradeVolumes.length || UserTradeVolume.is(o.userTradeVolumes[0])));
  },
  isSDK(o: any): o is QueryUserPairTradeVolumeResponseSDKType {
    return o && (o.$typeUrl === QueryUserPairTradeVolumeResponse.typeUrl || Array.isArray(o.user_trade_volumes) && (!o.user_trade_volumes.length || UserTradeVolume.isSDK(o.user_trade_volumes[0])));
  },
  isAmino(o: any): o is QueryUserPairTradeVolumeResponseAmino {
    return o && (o.$typeUrl === QueryUserPairTradeVolumeResponse.typeUrl || Array.isArray(o.user_trade_volumes) && (!o.user_trade_volumes.length || UserTradeVolume.isAmino(o.user_trade_volumes[0])));
  },
  encode(message: QueryUserPairTradeVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userTradeVolumes) {
      UserTradeVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserPairTradeVolumeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserPairTradeVolumeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTradeVolumes.push(UserTradeVolume.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryUserPairTradeVolumeResponse {
    return {
      userTradeVolumes: Array.isArray(object?.userTradeVolumes) ? object.userTradeVolumes.map((e: any) => UserTradeVolume.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUserPairTradeVolumeResponse): unknown {
    const obj: any = {};
    if (message.userTradeVolumes) {
      obj.userTradeVolumes = message.userTradeVolumes.map(e => e ? UserTradeVolume.toJSON(e) : undefined);
    } else {
      obj.userTradeVolumes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUserPairTradeVolumeResponse>): QueryUserPairTradeVolumeResponse {
    const message = createBaseQueryUserPairTradeVolumeResponse();
    message.userTradeVolumes = object.userTradeVolumes?.map(e => UserTradeVolume.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserPairTradeVolumeResponseAmino): QueryUserPairTradeVolumeResponse {
    const message = createBaseQueryUserPairTradeVolumeResponse();
    message.userTradeVolumes = object.user_trade_volumes?.map(e => UserTradeVolume.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserPairTradeVolumeResponse, useInterfaces: boolean = true): QueryUserPairTradeVolumeResponseAmino {
    const obj: any = {};
    if (message.userTradeVolumes) {
      obj.user_trade_volumes = message.userTradeVolumes.map(e => e ? UserTradeVolume.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.user_trade_volumes = message.userTradeVolumes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserPairTradeVolumeResponseAminoMsg): QueryUserPairTradeVolumeResponse {
    return QueryUserPairTradeVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserPairTradeVolumeResponseProtoMsg, useInterfaces: boolean = true): QueryUserPairTradeVolumeResponse {
    return QueryUserPairTradeVolumeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserPairTradeVolumeResponse): Uint8Array {
    return QueryUserPairTradeVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserPairTradeVolumeResponse): QueryUserPairTradeVolumeResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserPairTradeVolumeResponse",
      value: QueryUserPairTradeVolumeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserPairTradeVolumeResponse.typeUrl, QueryUserPairTradeVolumeResponse);