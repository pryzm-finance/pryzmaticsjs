import { SealOrderOrderBy, SealOrderOrderByAmino, SealOrderOrderBySDKType } from "../../database/seal/order";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { OrderInfo, OrderInfoAmino, OrderInfoSDKType } from "../../seal/order";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QuerySealOrdersRequest {
  orderBy?: SealOrderOrderBy;
  pagination?: PageRequest;
  /** boolean, string type purpose is handling nullability */
  live: string;
  owner: string;
  tokenIn: string;
  tokenOut: string;
  /** boolean, string type purpose is handling nullability */
  reservationAllowed: string;
}
export interface QuerySealOrdersRequestProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealOrdersRequest";
  value: Uint8Array;
}
export interface QuerySealOrdersRequestAmino {
  order_by?: SealOrderOrderByAmino;
  pagination?: PageRequestAmino;
  /** boolean, string type purpose is handling nullability */
  live?: string;
  owner?: string;
  token_in?: string;
  token_out?: string;
  /** boolean, string type purpose is handling nullability */
  reservation_allowed?: string;
}
export interface QuerySealOrdersRequestAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealOrdersRequest";
  value: QuerySealOrdersRequestAmino;
}
export interface QuerySealOrdersRequestSDKType {
  order_by?: SealOrderOrderBySDKType;
  pagination?: PageRequestSDKType;
  live: string;
  owner: string;
  token_in: string;
  token_out: string;
  reservation_allowed: string;
}
export interface QuerySealOrdersResponse {
  orders: OrderInfo[];
  pagination?: PageResponse;
}
export interface QuerySealOrdersResponseProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealOrdersResponse";
  value: Uint8Array;
}
export interface QuerySealOrdersResponseAmino {
  orders?: OrderInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySealOrdersResponseAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealOrdersResponse";
  value: QuerySealOrdersResponseAmino;
}
export interface QuerySealOrdersResponseSDKType {
  orders: OrderInfoSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQuerySealOrdersRequest(): QuerySealOrdersRequest {
  return {
    orderBy: undefined,
    pagination: undefined,
    live: "",
    owner: "",
    tokenIn: "",
    tokenOut: "",
    reservationAllowed: ""
  };
}
export const QuerySealOrdersRequest = {
  typeUrl: "/pryzmatics.server.seal.QuerySealOrdersRequest",
  is(o: any): o is QuerySealOrdersRequest {
    return o && (o.$typeUrl === QuerySealOrdersRequest.typeUrl || typeof o.live === "string" && typeof o.owner === "string" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.reservationAllowed === "string");
  },
  isSDK(o: any): o is QuerySealOrdersRequestSDKType {
    return o && (o.$typeUrl === QuerySealOrdersRequest.typeUrl || typeof o.live === "string" && typeof o.owner === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.reservation_allowed === "string");
  },
  isAmino(o: any): o is QuerySealOrdersRequestAmino {
    return o && (o.$typeUrl === QuerySealOrdersRequest.typeUrl || typeof o.live === "string" && typeof o.owner === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.reservation_allowed === "string");
  },
  encode(message: QuerySealOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderBy !== undefined) {
      SealOrderOrderBy.encode(message.orderBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.live !== "") {
      writer.uint32(26).string(message.live);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.tokenIn !== "") {
      writer.uint32(42).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(50).string(message.tokenOut);
    }
    if (message.reservationAllowed !== "") {
      writer.uint32(58).string(message.reservationAllowed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderBy = SealOrderOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.live = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.tokenIn = reader.string();
          break;
        case 6:
          message.tokenOut = reader.string();
          break;
        case 7:
          message.reservationAllowed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealOrdersRequest {
    return {
      orderBy: isSet(object.orderBy) ? SealOrderOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      live: isSet(object.live) ? String(object.live) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      reservationAllowed: isSet(object.reservationAllowed) ? String(object.reservationAllowed) : ""
    };
  },
  toJSON(message: QuerySealOrdersRequest): unknown {
    const obj: any = {};
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? SealOrderOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.live !== undefined && (obj.live = message.live);
    message.owner !== undefined && (obj.owner = message.owner);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.reservationAllowed !== undefined && (obj.reservationAllowed = message.reservationAllowed);
    return obj;
  },
  fromPartial(object: Partial<QuerySealOrdersRequest>): QuerySealOrdersRequest {
    const message = createBaseQuerySealOrdersRequest();
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? SealOrderOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.live = object.live ?? "";
    message.owner = object.owner ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.reservationAllowed = object.reservationAllowed ?? "";
    return message;
  },
  fromAmino(object: QuerySealOrdersRequestAmino): QuerySealOrdersRequest {
    const message = createBaseQuerySealOrdersRequest();
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = SealOrderOrderBy.fromAmino(object.order_by);
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
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.reservation_allowed !== undefined && object.reservation_allowed !== null) {
      message.reservationAllowed = object.reservation_allowed;
    }
    return message;
  },
  toAmino(message: QuerySealOrdersRequest, useInterfaces: boolean = true): QuerySealOrdersRequestAmino {
    const obj: any = {};
    obj.order_by = message.orderBy ? SealOrderOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.live = message.live === "" ? undefined : message.live;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.reservation_allowed = message.reservationAllowed === "" ? undefined : message.reservationAllowed;
    return obj;
  },
  fromAminoMsg(object: QuerySealOrdersRequestAminoMsg): QuerySealOrdersRequest {
    return QuerySealOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealOrdersRequestProtoMsg, useInterfaces: boolean = true): QuerySealOrdersRequest {
    return QuerySealOrdersRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealOrdersRequest): Uint8Array {
    return QuerySealOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySealOrdersRequest): QuerySealOrdersRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealOrdersRequest",
      value: QuerySealOrdersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealOrdersRequest.typeUrl, QuerySealOrdersRequest);
function createBaseQuerySealOrdersResponse(): QuerySealOrdersResponse {
  return {
    orders: [],
    pagination: undefined
  };
}
export const QuerySealOrdersResponse = {
  typeUrl: "/pryzmatics.server.seal.QuerySealOrdersResponse",
  is(o: any): o is QuerySealOrdersResponse {
    return o && (o.$typeUrl === QuerySealOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || OrderInfo.is(o.orders[0])));
  },
  isSDK(o: any): o is QuerySealOrdersResponseSDKType {
    return o && (o.$typeUrl === QuerySealOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || OrderInfo.isSDK(o.orders[0])));
  },
  isAmino(o: any): o is QuerySealOrdersResponseAmino {
    return o && (o.$typeUrl === QuerySealOrdersResponse.typeUrl || Array.isArray(o.orders) && (!o.orders.length || OrderInfo.isAmino(o.orders[0])));
  },
  encode(message: QuerySealOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      OrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(OrderInfo.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QuerySealOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => OrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySealOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? OrderInfo.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySealOrdersResponse>): QuerySealOrdersResponse {
    const message = createBaseQuerySealOrdersResponse();
    message.orders = object.orders?.map(e => OrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySealOrdersResponseAmino): QuerySealOrdersResponse {
    const message = createBaseQuerySealOrdersResponse();
    message.orders = object.orders?.map(e => OrderInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySealOrdersResponse, useInterfaces: boolean = true): QuerySealOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? OrderInfo.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.orders = message.orders;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySealOrdersResponseAminoMsg): QuerySealOrdersResponse {
    return QuerySealOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealOrdersResponseProtoMsg, useInterfaces: boolean = true): QuerySealOrdersResponse {
    return QuerySealOrdersResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealOrdersResponse): Uint8Array {
    return QuerySealOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySealOrdersResponse): QuerySealOrdersResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealOrdersResponse",
      value: QuerySealOrdersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealOrdersResponse.typeUrl, QuerySealOrdersResponse);