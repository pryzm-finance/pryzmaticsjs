import { OperationType, UserTradeHistory, UserTradeHistoryAmino, UserTradeHistorySDKType, UserTradeVolume, UserTradeVolumeAmino, UserTradeVolumeSDKType, operationTypeFromJSON, operationTypeToJSON } from "../../trade/user_trade_history";
import { UserTradeHistoryOrderBy, UserTradeHistoryOrderByAmino, UserTradeHistoryOrderBySDKType, UserTradeVolumeOrderBy, UserTradeVolumeOrderByAmino, UserTradeVolumeOrderBySDKType } from "../../database/trade/user_trade_history";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryUserTradeHistoryRequest {
  firstToken: string;
  secondToken: string;
  address: string;
  operationType: OperationType;
  orderBy?: UserTradeHistoryOrderBy;
  pagination?: PageRequest;
  includeProxyTrades: boolean;
}
export interface QueryUserTradeHistoryRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryRequest";
  value: Uint8Array;
}
export interface QueryUserTradeHistoryRequestAmino {
  first_token?: string;
  second_token?: string;
  address?: string;
  operation_type?: OperationType;
  order_by?: UserTradeHistoryOrderByAmino;
  pagination?: PageRequestAmino;
  include_proxy_trades?: boolean;
}
export interface QueryUserTradeHistoryRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserTradeHistoryRequest";
  value: QueryUserTradeHistoryRequestAmino;
}
export interface QueryUserTradeHistoryRequestSDKType {
  first_token: string;
  second_token: string;
  address: string;
  operation_type: OperationType;
  order_by?: UserTradeHistoryOrderBySDKType;
  pagination?: PageRequestSDKType;
  include_proxy_trades: boolean;
}
export interface QueryUserTradeHistoryResponse {
  userTradeHistoryRecords: UserTradeHistory[];
  pagination?: PageResponse;
}
export interface QueryUserTradeHistoryResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryResponse";
  value: Uint8Array;
}
export interface QueryUserTradeHistoryResponseAmino {
  user_trade_history_records?: UserTradeHistoryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUserTradeHistoryResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserTradeHistoryResponse";
  value: QueryUserTradeHistoryResponseAmino;
}
export interface QueryUserTradeHistoryResponseSDKType {
  user_trade_history_records: UserTradeHistorySDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryUserTradeVolumeRequest {
  operationType: OperationType;
  orderBy?: UserTradeVolumeOrderBy;
  intervalHours: bigint;
  pagination?: PageRequest;
  includeProxyTrades: boolean;
}
export interface QueryUserTradeVolumeRequestProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeVolumeRequest";
  value: Uint8Array;
}
export interface QueryUserTradeVolumeRequestAmino {
  operation_type?: OperationType;
  order_by?: UserTradeVolumeOrderByAmino;
  interval_hours?: string;
  pagination?: PageRequestAmino;
  include_proxy_trades?: boolean;
}
export interface QueryUserTradeVolumeRequestAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserTradeVolumeRequest";
  value: QueryUserTradeVolumeRequestAmino;
}
export interface QueryUserTradeVolumeRequestSDKType {
  operation_type: OperationType;
  order_by?: UserTradeVolumeOrderBySDKType;
  interval_hours: bigint;
  pagination?: PageRequestSDKType;
  include_proxy_trades: boolean;
}
export interface QueryUserTradeVolumeResponse {
  userTradeVolumeRecords: UserTradeVolume[];
  pagination?: PageResponse;
}
export interface QueryUserTradeVolumeResponseProtoMsg {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeVolumeResponse";
  value: Uint8Array;
}
export interface QueryUserTradeVolumeResponseAmino {
  user_trade_volume_records?: UserTradeVolumeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUserTradeVolumeResponseAminoMsg {
  type: "/pryzmatics.server.trade.QueryUserTradeVolumeResponse";
  value: QueryUserTradeVolumeResponseAmino;
}
export interface QueryUserTradeVolumeResponseSDKType {
  user_trade_volume_records: UserTradeVolumeSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryUserTradeHistoryRequest(): QueryUserTradeHistoryRequest {
  return {
    firstToken: "",
    secondToken: "",
    address: "",
    operationType: 0,
    orderBy: undefined,
    pagination: undefined,
    includeProxyTrades: false
  };
}
export const QueryUserTradeHistoryRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryRequest",
  is(o: any): o is QueryUserTradeHistoryRequest {
    return o && (o.$typeUrl === QueryUserTradeHistoryRequest.typeUrl || typeof o.firstToken === "string" && typeof o.secondToken === "string" && typeof o.address === "string" && isSet(o.operationType) && typeof o.includeProxyTrades === "boolean");
  },
  isSDK(o: any): o is QueryUserTradeHistoryRequestSDKType {
    return o && (o.$typeUrl === QueryUserTradeHistoryRequest.typeUrl || typeof o.first_token === "string" && typeof o.second_token === "string" && typeof o.address === "string" && isSet(o.operation_type) && typeof o.include_proxy_trades === "boolean");
  },
  isAmino(o: any): o is QueryUserTradeHistoryRequestAmino {
    return o && (o.$typeUrl === QueryUserTradeHistoryRequest.typeUrl || typeof o.first_token === "string" && typeof o.second_token === "string" && typeof o.address === "string" && isSet(o.operation_type) && typeof o.include_proxy_trades === "boolean");
  },
  encode(message: QueryUserTradeHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.firstToken !== "") {
      writer.uint32(10).string(message.firstToken);
    }
    if (message.secondToken !== "") {
      writer.uint32(18).string(message.secondToken);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.operationType !== 0) {
      writer.uint32(32).int32(message.operationType);
    }
    if (message.orderBy !== undefined) {
      UserTradeHistoryOrderBy.encode(message.orderBy, writer.uint32(42).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
    }
    if (message.includeProxyTrades === true) {
      writer.uint32(56).bool(message.includeProxyTrades);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserTradeHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTradeHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.firstToken = reader.string();
          break;
        case 2:
          message.secondToken = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.operationType = (reader.int32() as any);
          break;
        case 5:
          message.orderBy = UserTradeHistoryOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.includeProxyTrades = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserTradeHistoryRequest {
    return {
      firstToken: isSet(object.firstToken) ? String(object.firstToken) : "",
      secondToken: isSet(object.secondToken) ? String(object.secondToken) : "",
      address: isSet(object.address) ? String(object.address) : "",
      operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : -1,
      orderBy: isSet(object.orderBy) ? UserTradeHistoryOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      includeProxyTrades: isSet(object.includeProxyTrades) ? Boolean(object.includeProxyTrades) : false
    };
  },
  toJSON(message: QueryUserTradeHistoryRequest): unknown {
    const obj: any = {};
    message.firstToken !== undefined && (obj.firstToken = message.firstToken);
    message.secondToken !== undefined && (obj.secondToken = message.secondToken);
    message.address !== undefined && (obj.address = message.address);
    message.operationType !== undefined && (obj.operationType = operationTypeToJSON(message.operationType));
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? UserTradeHistoryOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.includeProxyTrades !== undefined && (obj.includeProxyTrades = message.includeProxyTrades);
    return obj;
  },
  fromPartial(object: Partial<QueryUserTradeHistoryRequest>): QueryUserTradeHistoryRequest {
    const message = createBaseQueryUserTradeHistoryRequest();
    message.firstToken = object.firstToken ?? "";
    message.secondToken = object.secondToken ?? "";
    message.address = object.address ?? "";
    message.operationType = object.operationType ?? 0;
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? UserTradeHistoryOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.includeProxyTrades = object.includeProxyTrades ?? false;
    return message;
  },
  fromAmino(object: QueryUserTradeHistoryRequestAmino): QueryUserTradeHistoryRequest {
    const message = createBaseQueryUserTradeHistoryRequest();
    if (object.first_token !== undefined && object.first_token !== null) {
      message.firstToken = object.first_token;
    }
    if (object.second_token !== undefined && object.second_token !== null) {
      message.secondToken = object.second_token;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.operation_type !== undefined && object.operation_type !== null) {
      message.operationType = object.operation_type;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = UserTradeHistoryOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.include_proxy_trades !== undefined && object.include_proxy_trades !== null) {
      message.includeProxyTrades = object.include_proxy_trades;
    }
    return message;
  },
  toAmino(message: QueryUserTradeHistoryRequest, useInterfaces: boolean = true): QueryUserTradeHistoryRequestAmino {
    const obj: any = {};
    obj.first_token = message.firstToken === "" ? undefined : message.firstToken;
    obj.second_token = message.secondToken === "" ? undefined : message.secondToken;
    obj.address = message.address === "" ? undefined : message.address;
    obj.operation_type = message.operationType === 0 ? undefined : message.operationType;
    obj.order_by = message.orderBy ? UserTradeHistoryOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.include_proxy_trades = message.includeProxyTrades === false ? undefined : message.includeProxyTrades;
    return obj;
  },
  fromAminoMsg(object: QueryUserTradeHistoryRequestAminoMsg): QueryUserTradeHistoryRequest {
    return QueryUserTradeHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTradeHistoryRequestProtoMsg, useInterfaces: boolean = true): QueryUserTradeHistoryRequest {
    return QueryUserTradeHistoryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserTradeHistoryRequest): Uint8Array {
    return QueryUserTradeHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTradeHistoryRequest): QueryUserTradeHistoryRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryRequest",
      value: QueryUserTradeHistoryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTradeHistoryRequest.typeUrl, QueryUserTradeHistoryRequest);
function createBaseQueryUserTradeHistoryResponse(): QueryUserTradeHistoryResponse {
  return {
    userTradeHistoryRecords: [],
    pagination: undefined
  };
}
export const QueryUserTradeHistoryResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryResponse",
  is(o: any): o is QueryUserTradeHistoryResponse {
    return o && (o.$typeUrl === QueryUserTradeHistoryResponse.typeUrl || Array.isArray(o.userTradeHistoryRecords) && (!o.userTradeHistoryRecords.length || UserTradeHistory.is(o.userTradeHistoryRecords[0])));
  },
  isSDK(o: any): o is QueryUserTradeHistoryResponseSDKType {
    return o && (o.$typeUrl === QueryUserTradeHistoryResponse.typeUrl || Array.isArray(o.user_trade_history_records) && (!o.user_trade_history_records.length || UserTradeHistory.isSDK(o.user_trade_history_records[0])));
  },
  isAmino(o: any): o is QueryUserTradeHistoryResponseAmino {
    return o && (o.$typeUrl === QueryUserTradeHistoryResponse.typeUrl || Array.isArray(o.user_trade_history_records) && (!o.user_trade_history_records.length || UserTradeHistory.isAmino(o.user_trade_history_records[0])));
  },
  encode(message: QueryUserTradeHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userTradeHistoryRecords) {
      UserTradeHistory.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserTradeHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTradeHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTradeHistoryRecords.push(UserTradeHistory.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryUserTradeHistoryResponse {
    return {
      userTradeHistoryRecords: Array.isArray(object?.userTradeHistoryRecords) ? object.userTradeHistoryRecords.map((e: any) => UserTradeHistory.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUserTradeHistoryResponse): unknown {
    const obj: any = {};
    if (message.userTradeHistoryRecords) {
      obj.userTradeHistoryRecords = message.userTradeHistoryRecords.map(e => e ? UserTradeHistory.toJSON(e) : undefined);
    } else {
      obj.userTradeHistoryRecords = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUserTradeHistoryResponse>): QueryUserTradeHistoryResponse {
    const message = createBaseQueryUserTradeHistoryResponse();
    message.userTradeHistoryRecords = object.userTradeHistoryRecords?.map(e => UserTradeHistory.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserTradeHistoryResponseAmino): QueryUserTradeHistoryResponse {
    const message = createBaseQueryUserTradeHistoryResponse();
    message.userTradeHistoryRecords = object.user_trade_history_records?.map(e => UserTradeHistory.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserTradeHistoryResponse, useInterfaces: boolean = true): QueryUserTradeHistoryResponseAmino {
    const obj: any = {};
    if (message.userTradeHistoryRecords) {
      obj.user_trade_history_records = message.userTradeHistoryRecords.map(e => e ? UserTradeHistory.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.user_trade_history_records = message.userTradeHistoryRecords;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserTradeHistoryResponseAminoMsg): QueryUserTradeHistoryResponse {
    return QueryUserTradeHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTradeHistoryResponseProtoMsg, useInterfaces: boolean = true): QueryUserTradeHistoryResponse {
    return QueryUserTradeHistoryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserTradeHistoryResponse): Uint8Array {
    return QueryUserTradeHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTradeHistoryResponse): QueryUserTradeHistoryResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserTradeHistoryResponse",
      value: QueryUserTradeHistoryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTradeHistoryResponse.typeUrl, QueryUserTradeHistoryResponse);
function createBaseQueryUserTradeVolumeRequest(): QueryUserTradeVolumeRequest {
  return {
    operationType: 0,
    orderBy: undefined,
    intervalHours: BigInt(0),
    pagination: undefined,
    includeProxyTrades: false
  };
}
export const QueryUserTradeVolumeRequest = {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeVolumeRequest",
  is(o: any): o is QueryUserTradeVolumeRequest {
    return o && (o.$typeUrl === QueryUserTradeVolumeRequest.typeUrl || isSet(o.operationType) && typeof o.intervalHours === "bigint" && typeof o.includeProxyTrades === "boolean");
  },
  isSDK(o: any): o is QueryUserTradeVolumeRequestSDKType {
    return o && (o.$typeUrl === QueryUserTradeVolumeRequest.typeUrl || isSet(o.operation_type) && typeof o.interval_hours === "bigint" && typeof o.include_proxy_trades === "boolean");
  },
  isAmino(o: any): o is QueryUserTradeVolumeRequestAmino {
    return o && (o.$typeUrl === QueryUserTradeVolumeRequest.typeUrl || isSet(o.operation_type) && typeof o.interval_hours === "bigint" && typeof o.include_proxy_trades === "boolean");
  },
  encode(message: QueryUserTradeVolumeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operationType !== 0) {
      writer.uint32(8).int32(message.operationType);
    }
    if (message.orderBy !== undefined) {
      UserTradeVolumeOrderBy.encode(message.orderBy, writer.uint32(18).fork()).ldelim();
    }
    if (message.intervalHours !== BigInt(0)) {
      writer.uint32(24).uint64(message.intervalHours);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    if (message.includeProxyTrades === true) {
      writer.uint32(40).bool(message.includeProxyTrades);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserTradeVolumeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTradeVolumeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operationType = (reader.int32() as any);
          break;
        case 2:
          message.orderBy = UserTradeVolumeOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.intervalHours = reader.uint64();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.includeProxyTrades = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserTradeVolumeRequest {
    return {
      operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : -1,
      orderBy: isSet(object.orderBy) ? UserTradeVolumeOrderBy.fromJSON(object.orderBy) : undefined,
      intervalHours: isSet(object.intervalHours) ? BigInt(object.intervalHours.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      includeProxyTrades: isSet(object.includeProxyTrades) ? Boolean(object.includeProxyTrades) : false
    };
  },
  toJSON(message: QueryUserTradeVolumeRequest): unknown {
    const obj: any = {};
    message.operationType !== undefined && (obj.operationType = operationTypeToJSON(message.operationType));
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? UserTradeVolumeOrderBy.toJSON(message.orderBy) : undefined);
    message.intervalHours !== undefined && (obj.intervalHours = (message.intervalHours || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.includeProxyTrades !== undefined && (obj.includeProxyTrades = message.includeProxyTrades);
    return obj;
  },
  fromPartial(object: Partial<QueryUserTradeVolumeRequest>): QueryUserTradeVolumeRequest {
    const message = createBaseQueryUserTradeVolumeRequest();
    message.operationType = object.operationType ?? 0;
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? UserTradeVolumeOrderBy.fromPartial(object.orderBy) : undefined;
    message.intervalHours = object.intervalHours !== undefined && object.intervalHours !== null ? BigInt(object.intervalHours.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.includeProxyTrades = object.includeProxyTrades ?? false;
    return message;
  },
  fromAmino(object: QueryUserTradeVolumeRequestAmino): QueryUserTradeVolumeRequest {
    const message = createBaseQueryUserTradeVolumeRequest();
    if (object.operation_type !== undefined && object.operation_type !== null) {
      message.operationType = object.operation_type;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = UserTradeVolumeOrderBy.fromAmino(object.order_by);
    }
    if (object.interval_hours !== undefined && object.interval_hours !== null) {
      message.intervalHours = BigInt(object.interval_hours);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.include_proxy_trades !== undefined && object.include_proxy_trades !== null) {
      message.includeProxyTrades = object.include_proxy_trades;
    }
    return message;
  },
  toAmino(message: QueryUserTradeVolumeRequest, useInterfaces: boolean = true): QueryUserTradeVolumeRequestAmino {
    const obj: any = {};
    obj.operation_type = message.operationType === 0 ? undefined : message.operationType;
    obj.order_by = message.orderBy ? UserTradeVolumeOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.interval_hours = message.intervalHours ? message.intervalHours.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.include_proxy_trades = message.includeProxyTrades === false ? undefined : message.includeProxyTrades;
    return obj;
  },
  fromAminoMsg(object: QueryUserTradeVolumeRequestAminoMsg): QueryUserTradeVolumeRequest {
    return QueryUserTradeVolumeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTradeVolumeRequestProtoMsg, useInterfaces: boolean = true): QueryUserTradeVolumeRequest {
    return QueryUserTradeVolumeRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserTradeVolumeRequest): Uint8Array {
    return QueryUserTradeVolumeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTradeVolumeRequest): QueryUserTradeVolumeRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserTradeVolumeRequest",
      value: QueryUserTradeVolumeRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTradeVolumeRequest.typeUrl, QueryUserTradeVolumeRequest);
function createBaseQueryUserTradeVolumeResponse(): QueryUserTradeVolumeResponse {
  return {
    userTradeVolumeRecords: [],
    pagination: undefined
  };
}
export const QueryUserTradeVolumeResponse = {
  typeUrl: "/pryzmatics.server.trade.QueryUserTradeVolumeResponse",
  is(o: any): o is QueryUserTradeVolumeResponse {
    return o && (o.$typeUrl === QueryUserTradeVolumeResponse.typeUrl || Array.isArray(o.userTradeVolumeRecords) && (!o.userTradeVolumeRecords.length || UserTradeVolume.is(o.userTradeVolumeRecords[0])));
  },
  isSDK(o: any): o is QueryUserTradeVolumeResponseSDKType {
    return o && (o.$typeUrl === QueryUserTradeVolumeResponse.typeUrl || Array.isArray(o.user_trade_volume_records) && (!o.user_trade_volume_records.length || UserTradeVolume.isSDK(o.user_trade_volume_records[0])));
  },
  isAmino(o: any): o is QueryUserTradeVolumeResponseAmino {
    return o && (o.$typeUrl === QueryUserTradeVolumeResponse.typeUrl || Array.isArray(o.user_trade_volume_records) && (!o.user_trade_volume_records.length || UserTradeVolume.isAmino(o.user_trade_volume_records[0])));
  },
  encode(message: QueryUserTradeVolumeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.userTradeVolumeRecords) {
      UserTradeVolume.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryUserTradeVolumeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserTradeVolumeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userTradeVolumeRecords.push(UserTradeVolume.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryUserTradeVolumeResponse {
    return {
      userTradeVolumeRecords: Array.isArray(object?.userTradeVolumeRecords) ? object.userTradeVolumeRecords.map((e: any) => UserTradeVolume.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUserTradeVolumeResponse): unknown {
    const obj: any = {};
    if (message.userTradeVolumeRecords) {
      obj.userTradeVolumeRecords = message.userTradeVolumeRecords.map(e => e ? UserTradeVolume.toJSON(e) : undefined);
    } else {
      obj.userTradeVolumeRecords = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUserTradeVolumeResponse>): QueryUserTradeVolumeResponse {
    const message = createBaseQueryUserTradeVolumeResponse();
    message.userTradeVolumeRecords = object.userTradeVolumeRecords?.map(e => UserTradeVolume.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserTradeVolumeResponseAmino): QueryUserTradeVolumeResponse {
    const message = createBaseQueryUserTradeVolumeResponse();
    message.userTradeVolumeRecords = object.user_trade_volume_records?.map(e => UserTradeVolume.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryUserTradeVolumeResponse, useInterfaces: boolean = true): QueryUserTradeVolumeResponseAmino {
    const obj: any = {};
    if (message.userTradeVolumeRecords) {
      obj.user_trade_volume_records = message.userTradeVolumeRecords.map(e => e ? UserTradeVolume.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.user_trade_volume_records = message.userTradeVolumeRecords;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserTradeVolumeResponseAminoMsg): QueryUserTradeVolumeResponse {
    return QueryUserTradeVolumeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserTradeVolumeResponseProtoMsg, useInterfaces: boolean = true): QueryUserTradeVolumeResponse {
    return QueryUserTradeVolumeResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryUserTradeVolumeResponse): Uint8Array {
    return QueryUserTradeVolumeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUserTradeVolumeResponse): QueryUserTradeVolumeResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.trade.QueryUserTradeVolumeResponse",
      value: QueryUserTradeVolumeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUserTradeVolumeResponse.typeUrl, QueryUserTradeVolumeResponse);