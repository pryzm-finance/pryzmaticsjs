import { OrderBookOrderOrderBy, OrderBookOrderOrderByAmino, OrderBookOrderOrderBySDKType, OrderBookOrderEventOrderBy, OrderBookOrderEventOrderByAmino, OrderBookOrderEventOrderBySDKType } from "../../database/orderbook/order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Order, OrderAmino, OrderSDKType, Pair, PairAmino, PairSDKType, OrderEvent, OrderEventAmino, OrderEventSDKType } from "../../orderbook/order";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, padDecimal } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@cosmjs/math";
export interface QueryOrderBookOrdersRequest {
  orderBy?: OrderBookOrderOrderBy;
  pagination?: PageRequest;
  live: boolean;
  owner: string;
  tokenInDenom: string;
  tokenOutDenom: string;
}
export interface QueryOrderBookOrdersRequestProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrdersRequest";
  value: Uint8Array;
}
export interface QueryOrderBookOrdersRequestAmino {
  order_by?: OrderBookOrderOrderByAmino;
  pagination?: PageRequestAmino;
  live?: boolean;
  owner?: string;
  token_in_denom?: string;
  token_out_denom?: string;
}
export interface QueryOrderBookOrdersRequestAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookOrdersRequest";
  value: QueryOrderBookOrdersRequestAmino;
}
export interface QueryOrderBookOrdersRequestSDKType {
  order_by?: OrderBookOrderOrderBySDKType;
  pagination?: PageRequestSDKType;
  live: boolean;
  owner: string;
  token_in_denom: string;
  token_out_denom: string;
}
export interface QueryOrderBookOrdersResponse {
  orders: Order[];
  pagination?: PageResponse;
}
export interface QueryOrderBookOrdersResponseProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrdersResponse";
  value: Uint8Array;
}
export interface QueryOrderBookOrdersResponseAmino {
  orders?: OrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOrderBookOrdersResponseAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookOrdersResponse";
  value: QueryOrderBookOrdersResponseAmino;
}
export interface QueryOrderBookOrdersResponseSDKType {
  orders: OrderSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryOrderBookSummaryRequest {
  tokenIn: string;
  tokenOut: string;
  maxPrice: string;
}
export interface QueryOrderBookSummaryRequestProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookSummaryRequest";
  value: Uint8Array;
}
export interface QueryOrderBookSummaryRequestAmino {
  token_in?: string;
  token_out?: string;
  max_price?: string;
}
export interface QueryOrderBookSummaryRequestAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookSummaryRequest";
  value: QueryOrderBookSummaryRequestAmino;
}
export interface QueryOrderBookSummaryRequestSDKType {
  token_in: string;
  token_out: string;
  max_price: string;
}
export interface QueryOrderBookSummaryResponse {
  volume: string;
}
export interface QueryOrderBookSummaryResponseProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookSummaryResponse";
  value: Uint8Array;
}
export interface QueryOrderBookSummaryResponseAmino {
  volume?: string;
}
export interface QueryOrderBookSummaryResponseAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookSummaryResponse";
  value: QueryOrderBookSummaryResponseAmino;
}
export interface QueryOrderBookSummaryResponseSDKType {
  volume: string;
}
export interface QueryOrderBookPairsRequest {
  pagination?: PageRequest;
}
export interface QueryOrderBookPairsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookPairsRequest";
  value: Uint8Array;
}
export interface QueryOrderBookPairsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryOrderBookPairsRequestAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookPairsRequest";
  value: QueryOrderBookPairsRequestAmino;
}
export interface QueryOrderBookPairsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryOrderBookPairsResponse {
  pairs: Pair[];
  pagination?: PageResponse;
}
export interface QueryOrderBookPairsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookPairsResponse";
  value: Uint8Array;
}
export interface QueryOrderBookPairsResponseAmino {
  pairs?: PairAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOrderBookPairsResponseAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookPairsResponse";
  value: QueryOrderBookPairsResponseAmino;
}
export interface QueryOrderBookPairsResponseSDKType {
  pairs: PairSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryOrderBookOrderFeedRequest {
  orderId: bigint;
  orderBy?: OrderBookOrderEventOrderBy;
  pagination?: PageRequest;
}
export interface QueryOrderBookOrderFeedRequestProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrderFeedRequest";
  value: Uint8Array;
}
export interface QueryOrderBookOrderFeedRequestAmino {
  order_id?: string;
  order_by?: OrderBookOrderEventOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryOrderBookOrderFeedRequestAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookOrderFeedRequest";
  value: QueryOrderBookOrderFeedRequestAmino;
}
export interface QueryOrderBookOrderFeedRequestSDKType {
  order_id: bigint;
  order_by?: OrderBookOrderEventOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryOrderBookOrderFeedResponse {
  events: OrderEvent[];
  pagination?: PageResponse;
}
export interface QueryOrderBookOrderFeedResponseProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrderFeedResponse";
  value: Uint8Array;
}
export interface QueryOrderBookOrderFeedResponseAmino {
  events?: OrderEventAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOrderBookOrderFeedResponseAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookOrderFeedResponse";
  value: QueryOrderBookOrderFeedResponseAmino;
}
export interface QueryOrderBookOrderFeedResponseSDKType {
  events: OrderEventSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryOrderBookOrdersRequest(): QueryOrderBookOrdersRequest {
  return {
    orderBy: undefined,
    pagination: undefined,
    live: false,
    owner: "",
    tokenInDenom: "",
    tokenOutDenom: ""
  };
}
export const QueryOrderBookOrdersRequest = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrdersRequest",
  is(o: any): o is QueryOrderBookOrdersRequest {
    return o && (o.$typeUrl === QueryOrderBookOrdersRequest.typeUrl || typeof o.live === "boolean" && typeof o.owner === "string" && typeof o.tokenInDenom === "string" && typeof o.tokenOutDenom === "string");
  },
  isSDK(o: any): o is QueryOrderBookOrdersRequestSDKType {
    return o && (o.$typeUrl === QueryOrderBookOrdersRequest.typeUrl || typeof o.live === "boolean" && typeof o.owner === "string" && typeof o.token_in_denom === "string" && typeof o.token_out_denom === "string");
  },
  isAmino(o: any): o is QueryOrderBookOrdersRequestAmino {
    return o && (o.$typeUrl === QueryOrderBookOrdersRequest.typeUrl || typeof o.live === "boolean" && typeof o.owner === "string" && typeof o.token_in_denom === "string" && typeof o.token_out_denom === "string");
  },
  encode(message: QueryOrderBookOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderBy !== undefined) {
      OrderBookOrderOrderBy.encode(message.orderBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.live === true) {
      writer.uint32(24).bool(message.live);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.tokenInDenom !== "") {
      writer.uint32(42).string(message.tokenInDenom);
    }
    if (message.tokenOutDenom !== "") {
      writer.uint32(50).string(message.tokenOutDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderBy = OrderBookOrderOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.live = reader.bool();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.tokenInDenom = reader.string();
          break;
        case 6:
          message.tokenOutDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderBookOrdersRequest {
    return {
      orderBy: isSet(object.orderBy) ? OrderBookOrderOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      live: isSet(object.live) ? Boolean(object.live) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokenInDenom: isSet(object.tokenInDenom) ? String(object.tokenInDenom) : "",
      tokenOutDenom: isSet(object.tokenOutDenom) ? String(object.tokenOutDenom) : ""
    };
  },
  toJSON(message: QueryOrderBookOrdersRequest): unknown {
    const obj: any = {};
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? OrderBookOrderOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.live !== undefined && (obj.live = message.live);
    message.owner !== undefined && (obj.owner = message.owner);
    message.tokenInDenom !== undefined && (obj.tokenInDenom = message.tokenInDenom);
    message.tokenOutDenom !== undefined && (obj.tokenOutDenom = message.tokenOutDenom);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookOrdersRequest>): QueryOrderBookOrdersRequest {
    const message = createBaseQueryOrderBookOrdersRequest();
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? OrderBookOrderOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.live = object.live ?? false;
    message.owner = object.owner ?? "";
    message.tokenInDenom = object.tokenInDenom ?? "";
    message.tokenOutDenom = object.tokenOutDenom ?? "";
    return message;
  },
  fromAmino(object: QueryOrderBookOrdersRequestAmino): QueryOrderBookOrdersRequest {
    const message = createBaseQueryOrderBookOrdersRequest();
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = OrderBookOrderOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.live !== undefined && object.live !== null) {
      message.live = object.live;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.token_in_denom !== undefined && object.token_in_denom !== null) {
      message.tokenInDenom = object.token_in_denom;
    }
    if (object.token_out_denom !== undefined && object.token_out_denom !== null) {
      message.tokenOutDenom = object.token_out_denom;
    }
    return message;
  },
  toAmino(message: QueryOrderBookOrdersRequest, useInterfaces: boolean = true): QueryOrderBookOrdersRequestAmino {
    const obj: any = {};
    obj.order_by = message.orderBy ? OrderBookOrderOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.live = message.live === false ? undefined : message.live;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_in_denom = message.tokenInDenom === "" ? undefined : message.tokenInDenom;
    obj.token_out_denom = message.tokenOutDenom === "" ? undefined : message.tokenOutDenom;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookOrdersRequestAminoMsg): QueryOrderBookOrdersRequest {
    return QueryOrderBookOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookOrdersRequestProtoMsg, useInterfaces: boolean = true): QueryOrderBookOrdersRequest {
    return QueryOrderBookOrdersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookOrdersRequest): Uint8Array {
    return QueryOrderBookOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookOrdersRequest): QueryOrderBookOrdersRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrdersRequest",
      value: QueryOrderBookOrdersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookOrdersRequest.typeUrl, QueryOrderBookOrdersRequest);
function createBaseQueryOrderBookOrdersResponse(): QueryOrderBookOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}
export const QueryOrderBookOrdersResponse = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrdersResponse",
  is(o: any): o is QueryOrderBookOrdersResponse {
    return o && (o.$typeUrl === QueryOrderBookOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.is(o.orders[0])));
  },
  isSDK(o: any): o is QueryOrderBookOrdersResponseSDKType {
    return o && (o.$typeUrl === QueryOrderBookOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isSDK(o.orders[0])));
  },
  isAmino(o: any): o is QueryOrderBookOrdersResponseAmino {
    return o && (o.$typeUrl === QueryOrderBookOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || Order.isAmino(o.orders[0])));
  },
  encode(message: QueryOrderBookOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryOrderBookOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrderBookOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookOrdersResponse>): QueryOrderBookOrdersResponse {
    const message = createBaseQueryOrderBookOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderBookOrdersResponseAmino): QueryOrderBookOrdersResponse {
    const message = createBaseQueryOrderBookOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrderBookOrdersResponse, useInterfaces: boolean = true): QueryOrderBookOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.orders = message.orders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookOrdersResponseAminoMsg): QueryOrderBookOrdersResponse {
    return QueryOrderBookOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookOrdersResponseProtoMsg, useInterfaces: boolean = true): QueryOrderBookOrdersResponse {
    return QueryOrderBookOrdersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookOrdersResponse): Uint8Array {
    return QueryOrderBookOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookOrdersResponse): QueryOrderBookOrdersResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrdersResponse",
      value: QueryOrderBookOrdersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookOrdersResponse.typeUrl, QueryOrderBookOrdersResponse);
function createBaseQueryOrderBookSummaryRequest(): QueryOrderBookSummaryRequest {
  return {
    tokenIn: "",
    tokenOut: "",
    maxPrice: ""
  };
}
export const QueryOrderBookSummaryRequest = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookSummaryRequest",
  is(o: any): o is QueryOrderBookSummaryRequest {
    return o && (o.$typeUrl === QueryOrderBookSummaryRequest.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.maxPrice === "string");
  },
  isSDK(o: any): o is QueryOrderBookSummaryRequestSDKType {
    return o && (o.$typeUrl === QueryOrderBookSummaryRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.max_price === "string");
  },
  isAmino(o: any): o is QueryOrderBookSummaryRequestAmino {
    return o && (o.$typeUrl === QueryOrderBookSummaryRequest.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.max_price === "string");
  },
  encode(message: QueryOrderBookSummaryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.maxPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.maxPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookSummaryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenIn = reader.string();
          break;
        case 2:
          message.tokenOut = reader.string();
          break;
        case 3:
          message.maxPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderBookSummaryRequest {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      maxPrice: isSet(object.maxPrice) ? String(object.maxPrice) : ""
    };
  },
  toJSON(message: QueryOrderBookSummaryRequest): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookSummaryRequest>): QueryOrderBookSummaryRequest {
    const message = createBaseQueryOrderBookSummaryRequest();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.maxPrice = object.maxPrice ?? "";
    return message;
  },
  fromAmino(object: QueryOrderBookSummaryRequestAmino): QueryOrderBookSummaryRequest {
    const message = createBaseQueryOrderBookSummaryRequest();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.max_price !== undefined && object.max_price !== null) {
      message.maxPrice = object.max_price;
    }
    return message;
  },
  toAmino(message: QueryOrderBookSummaryRequest, useInterfaces: boolean = true): QueryOrderBookSummaryRequestAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.max_price = padDecimal(message.maxPrice) === "" ? undefined : padDecimal(message.maxPrice);
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookSummaryRequestAminoMsg): QueryOrderBookSummaryRequest {
    return QueryOrderBookSummaryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookSummaryRequestProtoMsg, useInterfaces: boolean = true): QueryOrderBookSummaryRequest {
    return QueryOrderBookSummaryRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookSummaryRequest): Uint8Array {
    return QueryOrderBookSummaryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookSummaryRequest): QueryOrderBookSummaryRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookSummaryRequest",
      value: QueryOrderBookSummaryRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookSummaryRequest.typeUrl, QueryOrderBookSummaryRequest);
function createBaseQueryOrderBookSummaryResponse(): QueryOrderBookSummaryResponse {
  return {
    volume: ""
  };
}
export const QueryOrderBookSummaryResponse = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookSummaryResponse",
  is(o: any): o is QueryOrderBookSummaryResponse {
    return o && (o.$typeUrl === QueryOrderBookSummaryResponse.typeUrl || typeof o.volume === "string");
  },
  isSDK(o: any): o is QueryOrderBookSummaryResponseSDKType {
    return o && (o.$typeUrl === QueryOrderBookSummaryResponse.typeUrl || typeof o.volume === "string");
  },
  isAmino(o: any): o is QueryOrderBookSummaryResponseAmino {
    return o && (o.$typeUrl === QueryOrderBookSummaryResponse.typeUrl || typeof o.volume === "string");
  },
  encode(message: QueryOrderBookSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volume !== "") {
      writer.uint32(10).string(message.volume);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderBookSummaryResponse {
    return {
      volume: isSet(object.volume) ? String(object.volume) : ""
    };
  },
  toJSON(message: QueryOrderBookSummaryResponse): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookSummaryResponse>): QueryOrderBookSummaryResponse {
    const message = createBaseQueryOrderBookSummaryResponse();
    message.volume = object.volume ?? "";
    return message;
  },
  fromAmino(object: QueryOrderBookSummaryResponseAmino): QueryOrderBookSummaryResponse {
    const message = createBaseQueryOrderBookSummaryResponse();
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    }
    return message;
  },
  toAmino(message: QueryOrderBookSummaryResponse, useInterfaces: boolean = true): QueryOrderBookSummaryResponseAmino {
    const obj: any = {};
    obj.volume = message.volume === "" ? undefined : message.volume;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookSummaryResponseAminoMsg): QueryOrderBookSummaryResponse {
    return QueryOrderBookSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookSummaryResponseProtoMsg, useInterfaces: boolean = true): QueryOrderBookSummaryResponse {
    return QueryOrderBookSummaryResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookSummaryResponse): Uint8Array {
    return QueryOrderBookSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookSummaryResponse): QueryOrderBookSummaryResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookSummaryResponse",
      value: QueryOrderBookSummaryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookSummaryResponse.typeUrl, QueryOrderBookSummaryResponse);
function createBaseQueryOrderBookPairsRequest(): QueryOrderBookPairsRequest {
  return {
    pagination: undefined
  };
}
export const QueryOrderBookPairsRequest = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookPairsRequest",
  is(o: any): o is QueryOrderBookPairsRequest {
    return o && o.$typeUrl === QueryOrderBookPairsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryOrderBookPairsRequestSDKType {
    return o && o.$typeUrl === QueryOrderBookPairsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryOrderBookPairsRequestAmino {
    return o && o.$typeUrl === QueryOrderBookPairsRequest.typeUrl;
  },
  encode(message: QueryOrderBookPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookPairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderBookPairsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrderBookPairsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookPairsRequest>): QueryOrderBookPairsRequest {
    const message = createBaseQueryOrderBookPairsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderBookPairsRequestAmino): QueryOrderBookPairsRequest {
    const message = createBaseQueryOrderBookPairsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrderBookPairsRequest, useInterfaces: boolean = true): QueryOrderBookPairsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookPairsRequestAminoMsg): QueryOrderBookPairsRequest {
    return QueryOrderBookPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookPairsRequestProtoMsg, useInterfaces: boolean = true): QueryOrderBookPairsRequest {
    return QueryOrderBookPairsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookPairsRequest): Uint8Array {
    return QueryOrderBookPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookPairsRequest): QueryOrderBookPairsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookPairsRequest",
      value: QueryOrderBookPairsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookPairsRequest.typeUrl, QueryOrderBookPairsRequest);
function createBaseQueryOrderBookPairsResponse(): QueryOrderBookPairsResponse {
  return {
    pairs: [],
    pagination: undefined
  };
}
export const QueryOrderBookPairsResponse = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookPairsResponse",
  is(o: any): o is QueryOrderBookPairsResponse {
    return o && (o.$typeUrl === QueryOrderBookPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || Pair.is(o.pairs[0])));
  },
  isSDK(o: any): o is QueryOrderBookPairsResponseSDKType {
    return o && (o.$typeUrl === QueryOrderBookPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || Pair.isSDK(o.pairs[0])));
  },
  isAmino(o: any): o is QueryOrderBookPairsResponseAmino {
    return o && (o.$typeUrl === QueryOrderBookPairsResponse.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || Pair.isAmino(o.pairs[0])));
  },
  encode(message: QueryOrderBookPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(Pair.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryOrderBookPairsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrderBookPairsResponse): unknown {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toJSON(e) : undefined);
    } else {
      obj.pairs = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookPairsResponse>): QueryOrderBookPairsResponse {
    const message = createBaseQueryOrderBookPairsResponse();
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderBookPairsResponseAmino): QueryOrderBookPairsResponse {
    const message = createBaseQueryOrderBookPairsResponse();
    message.pairs = object.pairs?.map(e => Pair.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrderBookPairsResponse, useInterfaces: boolean = true): QueryOrderBookPairsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.pairs = message.pairs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookPairsResponseAminoMsg): QueryOrderBookPairsResponse {
    return QueryOrderBookPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookPairsResponseProtoMsg, useInterfaces: boolean = true): QueryOrderBookPairsResponse {
    return QueryOrderBookPairsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookPairsResponse): Uint8Array {
    return QueryOrderBookPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookPairsResponse): QueryOrderBookPairsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookPairsResponse",
      value: QueryOrderBookPairsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookPairsResponse.typeUrl, QueryOrderBookPairsResponse);
function createBaseQueryOrderBookOrderFeedRequest(): QueryOrderBookOrderFeedRequest {
  return {
    orderId: BigInt(0),
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryOrderBookOrderFeedRequest = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrderFeedRequest",
  is(o: any): o is QueryOrderBookOrderFeedRequest {
    return o && (o.$typeUrl === QueryOrderBookOrderFeedRequest.typeUrl || typeof o.orderId === "bigint");
  },
  isSDK(o: any): o is QueryOrderBookOrderFeedRequestSDKType {
    return o && (o.$typeUrl === QueryOrderBookOrderFeedRequest.typeUrl || typeof o.order_id === "bigint");
  },
  isAmino(o: any): o is QueryOrderBookOrderFeedRequestAmino {
    return o && (o.$typeUrl === QueryOrderBookOrderFeedRequest.typeUrl || typeof o.order_id === "bigint");
  },
  encode(message: QueryOrderBookOrderFeedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.orderBy !== undefined) {
      OrderBookOrderEventOrderBy.encode(message.orderBy, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookOrderFeedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookOrderFeedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        case 2:
          message.orderBy = OrderBookOrderEventOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOrderBookOrderFeedRequest {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      orderBy: isSet(object.orderBy) ? OrderBookOrderEventOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrderBookOrderFeedRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? OrderBookOrderEventOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookOrderFeedRequest>): QueryOrderBookOrderFeedRequest {
    const message = createBaseQueryOrderBookOrderFeedRequest();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? OrderBookOrderEventOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderBookOrderFeedRequestAmino): QueryOrderBookOrderFeedRequest {
    const message = createBaseQueryOrderBookOrderFeedRequest();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = OrderBookOrderEventOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrderBookOrderFeedRequest, useInterfaces: boolean = true): QueryOrderBookOrderFeedRequestAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.order_by = message.orderBy ? OrderBookOrderEventOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookOrderFeedRequestAminoMsg): QueryOrderBookOrderFeedRequest {
    return QueryOrderBookOrderFeedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookOrderFeedRequestProtoMsg, useInterfaces: boolean = true): QueryOrderBookOrderFeedRequest {
    return QueryOrderBookOrderFeedRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookOrderFeedRequest): Uint8Array {
    return QueryOrderBookOrderFeedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookOrderFeedRequest): QueryOrderBookOrderFeedRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrderFeedRequest",
      value: QueryOrderBookOrderFeedRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookOrderFeedRequest.typeUrl, QueryOrderBookOrderFeedRequest);
function createBaseQueryOrderBookOrderFeedResponse(): QueryOrderBookOrderFeedResponse {
  return {
    events: [],
    pagination: undefined
  };
}
export const QueryOrderBookOrderFeedResponse = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrderFeedResponse",
  is(o: any): o is QueryOrderBookOrderFeedResponse {
    return o && (o.$typeUrl === QueryOrderBookOrderFeedResponse.typeUrl || Array.isArray(o.events) && (!o.events.length || OrderEvent.is(o.events[0])));
  },
  isSDK(o: any): o is QueryOrderBookOrderFeedResponseSDKType {
    return o && (o.$typeUrl === QueryOrderBookOrderFeedResponse.typeUrl || Array.isArray(o.events) && (!o.events.length || OrderEvent.isSDK(o.events[0])));
  },
  isAmino(o: any): o is QueryOrderBookOrderFeedResponseAmino {
    return o && (o.$typeUrl === QueryOrderBookOrderFeedResponse.typeUrl || Array.isArray(o.events) && (!o.events.length || OrderEvent.isAmino(o.events[0])));
  },
  encode(message: QueryOrderBookOrderFeedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      OrderEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookOrderFeedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookOrderFeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(OrderEvent.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryOrderBookOrderFeedResponse {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => OrderEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrderBookOrderFeedResponse): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? OrderEvent.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookOrderFeedResponse>): QueryOrderBookOrderFeedResponse {
    const message = createBaseQueryOrderBookOrderFeedResponse();
    message.events = object.events?.map(e => OrderEvent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderBookOrderFeedResponseAmino): QueryOrderBookOrderFeedResponse {
    const message = createBaseQueryOrderBookOrderFeedResponse();
    message.events = object.events?.map(e => OrderEvent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrderBookOrderFeedResponse, useInterfaces: boolean = true): QueryOrderBookOrderFeedResponseAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? OrderEvent.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.events = message.events;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookOrderFeedResponseAminoMsg): QueryOrderBookOrderFeedResponse {
    return QueryOrderBookOrderFeedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookOrderFeedResponseProtoMsg, useInterfaces: boolean = true): QueryOrderBookOrderFeedResponse {
    return QueryOrderBookOrderFeedResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookOrderFeedResponse): Uint8Array {
    return QueryOrderBookOrderFeedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookOrderFeedResponse): QueryOrderBookOrderFeedResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookOrderFeedResponse",
      value: QueryOrderBookOrderFeedResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookOrderFeedResponse.typeUrl, QueryOrderBookOrderFeedResponse);