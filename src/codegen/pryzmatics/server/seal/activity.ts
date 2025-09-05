import { SealOrderActivityOrderBy, SealOrderActivityOrderByAmino, SealOrderActivityOrderBySDKType } from "../../database/seal/activity";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { OrderActivityWithOrder, OrderActivityWithOrderAmino, OrderActivityWithOrderSDKType } from "../../seal/activity";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QuerySealOrderActivitiesRequest {
  orderBy?: SealOrderActivityOrderBy;
  pagination?: PageRequest;
  orderId: bigint;
  /** either the order owner or the actor */
  user: string;
}
export interface QuerySealOrderActivitiesRequestProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealOrderActivitiesRequest";
  value: Uint8Array;
}
export interface QuerySealOrderActivitiesRequestAmino {
  order_by?: SealOrderActivityOrderByAmino;
  pagination?: PageRequestAmino;
  order_id?: string;
  /** either the order owner or the actor */
  user?: string;
}
export interface QuerySealOrderActivitiesRequestAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealOrderActivitiesRequest";
  value: QuerySealOrderActivitiesRequestAmino;
}
export interface QuerySealOrderActivitiesRequestSDKType {
  order_by?: SealOrderActivityOrderBySDKType;
  pagination?: PageRequestSDKType;
  order_id: bigint;
  user: string;
}
export interface QuerySealOrderActivitiesResponse {
  activities: OrderActivityWithOrder[];
  pagination?: PageResponse;
}
export interface QuerySealOrderActivitiesResponseProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealOrderActivitiesResponse";
  value: Uint8Array;
}
export interface QuerySealOrderActivitiesResponseAmino {
  activities?: OrderActivityWithOrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySealOrderActivitiesResponseAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealOrderActivitiesResponse";
  value: QuerySealOrderActivitiesResponseAmino;
}
export interface QuerySealOrderActivitiesResponseSDKType {
  activities: OrderActivityWithOrderSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQuerySealOrderActivitiesRequest(): QuerySealOrderActivitiesRequest {
  return {
    orderBy: undefined,
    pagination: undefined,
    orderId: BigInt(0),
    user: ""
  };
}
export const QuerySealOrderActivitiesRequest = {
  typeUrl: "/pryzmatics.server.seal.QuerySealOrderActivitiesRequest",
  is(o: any): o is QuerySealOrderActivitiesRequest {
    return o && (o.$typeUrl === QuerySealOrderActivitiesRequest.typeUrl || typeof o.orderId === "bigint" && typeof o.user === "string");
  },
  isSDK(o: any): o is QuerySealOrderActivitiesRequestSDKType {
    return o && (o.$typeUrl === QuerySealOrderActivitiesRequest.typeUrl || typeof o.order_id === "bigint" && typeof o.user === "string");
  },
  isAmino(o: any): o is QuerySealOrderActivitiesRequestAmino {
    return o && (o.$typeUrl === QuerySealOrderActivitiesRequest.typeUrl || typeof o.order_id === "bigint" && typeof o.user === "string");
  },
  encode(message: QuerySealOrderActivitiesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderBy !== undefined) {
      SealOrderActivityOrderBy.encode(message.orderBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(24).uint64(message.orderId);
    }
    if (message.user !== "") {
      writer.uint32(34).string(message.user);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealOrderActivitiesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealOrderActivitiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderBy = SealOrderActivityOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.orderId = reader.uint64();
          break;
        case 4:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealOrderActivitiesRequest {
    return {
      orderBy: isSet(object.orderBy) ? SealOrderActivityOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      user: isSet(object.user) ? String(object.user) : ""
    };
  },
  toJSON(message: QuerySealOrderActivitiesRequest): unknown {
    const obj: any = {};
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? SealOrderActivityOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },
  fromPartial(object: Partial<QuerySealOrderActivitiesRequest>): QuerySealOrderActivitiesRequest {
    const message = createBaseQuerySealOrderActivitiesRequest();
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? SealOrderActivityOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: QuerySealOrderActivitiesRequestAmino): QuerySealOrderActivitiesRequest {
    const message = createBaseQuerySealOrderActivitiesRequest();
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = SealOrderActivityOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: QuerySealOrderActivitiesRequest, useInterfaces: boolean = true): QuerySealOrderActivitiesRequestAmino {
    const obj: any = {};
    obj.order_by = message.orderBy ? SealOrderActivityOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: QuerySealOrderActivitiesRequestAminoMsg): QuerySealOrderActivitiesRequest {
    return QuerySealOrderActivitiesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealOrderActivitiesRequestProtoMsg, useInterfaces: boolean = true): QuerySealOrderActivitiesRequest {
    return QuerySealOrderActivitiesRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealOrderActivitiesRequest): Uint8Array {
    return QuerySealOrderActivitiesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySealOrderActivitiesRequest): QuerySealOrderActivitiesRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealOrderActivitiesRequest",
      value: QuerySealOrderActivitiesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealOrderActivitiesRequest.typeUrl, QuerySealOrderActivitiesRequest);
function createBaseQuerySealOrderActivitiesResponse(): QuerySealOrderActivitiesResponse {
  return {
    activities: [],
    pagination: undefined
  };
}
export const QuerySealOrderActivitiesResponse = {
  typeUrl: "/pryzmatics.server.seal.QuerySealOrderActivitiesResponse",
  is(o: any): o is QuerySealOrderActivitiesResponse {
    return o && (o.$typeUrl === QuerySealOrderActivitiesResponse.typeUrl || Array.isArray(o.activities) && (!o.activities.length || OrderActivityWithOrder.is(o.activities[0])));
  },
  isSDK(o: any): o is QuerySealOrderActivitiesResponseSDKType {
    return o && (o.$typeUrl === QuerySealOrderActivitiesResponse.typeUrl || Array.isArray(o.activities) && (!o.activities.length || OrderActivityWithOrder.isSDK(o.activities[0])));
  },
  isAmino(o: any): o is QuerySealOrderActivitiesResponseAmino {
    return o && (o.$typeUrl === QuerySealOrderActivitiesResponse.typeUrl || Array.isArray(o.activities) && (!o.activities.length || OrderActivityWithOrder.isAmino(o.activities[0])));
  },
  encode(message: QuerySealOrderActivitiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.activities) {
      OrderActivityWithOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealOrderActivitiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealOrderActivitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activities.push(OrderActivityWithOrder.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QuerySealOrderActivitiesResponse {
    return {
      activities: Array.isArray(object?.activities) ? object.activities.map((e: any) => OrderActivityWithOrder.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySealOrderActivitiesResponse): unknown {
    const obj: any = {};
    if (message.activities) {
      obj.activities = message.activities.map(e => e ? OrderActivityWithOrder.toJSON(e) : undefined);
    } else {
      obj.activities = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySealOrderActivitiesResponse>): QuerySealOrderActivitiesResponse {
    const message = createBaseQuerySealOrderActivitiesResponse();
    message.activities = object.activities?.map(e => OrderActivityWithOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySealOrderActivitiesResponseAmino): QuerySealOrderActivitiesResponse {
    const message = createBaseQuerySealOrderActivitiesResponse();
    message.activities = object.activities?.map(e => OrderActivityWithOrder.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySealOrderActivitiesResponse, useInterfaces: boolean = true): QuerySealOrderActivitiesResponseAmino {
    const obj: any = {};
    if (message.activities) {
      obj.activities = message.activities.map(e => e ? OrderActivityWithOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.activities = message.activities;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySealOrderActivitiesResponseAminoMsg): QuerySealOrderActivitiesResponse {
    return QuerySealOrderActivitiesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealOrderActivitiesResponseProtoMsg, useInterfaces: boolean = true): QuerySealOrderActivitiesResponse {
    return QuerySealOrderActivitiesResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealOrderActivitiesResponse): Uint8Array {
    return QuerySealOrderActivitiesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySealOrderActivitiesResponse): QuerySealOrderActivitiesResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealOrderActivitiesResponse",
      value: QuerySealOrderActivitiesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealOrderActivitiesResponse.typeUrl, QuerySealOrderActivitiesResponse);