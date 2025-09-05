import { SealReservationOrderBy, SealReservationOrderByAmino, SealReservationOrderBySDKType } from "../../database/seal/reservation";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ReservationWithOrder, ReservationWithOrderAmino, ReservationWithOrderSDKType } from "../../seal/reservation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QuerySealReservationsRequest {
  orderBy?: SealReservationOrderBy;
  pagination?: PageRequest;
  /** boolean, string type purpose is handling nullability */
  live: string;
  orderId: bigint;
  reserver: string;
}
export interface QuerySealReservationsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealReservationsRequest";
  value: Uint8Array;
}
export interface QuerySealReservationsRequestAmino {
  order_by?: SealReservationOrderByAmino;
  pagination?: PageRequestAmino;
  /** boolean, string type purpose is handling nullability */
  live?: string;
  order_id?: string;
  reserver?: string;
}
export interface QuerySealReservationsRequestAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealReservationsRequest";
  value: QuerySealReservationsRequestAmino;
}
export interface QuerySealReservationsRequestSDKType {
  order_by?: SealReservationOrderBySDKType;
  pagination?: PageRequestSDKType;
  live: string;
  order_id: bigint;
  reserver: string;
}
export interface QuerySealReservationsResponse {
  reservations: ReservationWithOrder[];
  pagination?: PageResponse;
}
export interface QuerySealReservationsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.seal.QuerySealReservationsResponse";
  value: Uint8Array;
}
export interface QuerySealReservationsResponseAmino {
  reservations?: ReservationWithOrderAmino[];
  pagination?: PageResponseAmino;
}
export interface QuerySealReservationsResponseAminoMsg {
  type: "/pryzmatics.server.seal.QuerySealReservationsResponse";
  value: QuerySealReservationsResponseAmino;
}
export interface QuerySealReservationsResponseSDKType {
  reservations: ReservationWithOrderSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQuerySealReservationsRequest(): QuerySealReservationsRequest {
  return {
    orderBy: undefined,
    pagination: undefined,
    live: "",
    orderId: BigInt(0),
    reserver: ""
  };
}
export const QuerySealReservationsRequest = {
  typeUrl: "/pryzmatics.server.seal.QuerySealReservationsRequest",
  is(o: any): o is QuerySealReservationsRequest {
    return o && (o.$typeUrl === QuerySealReservationsRequest.typeUrl || typeof o.live === "string" && typeof o.orderId === "bigint" && typeof o.reserver === "string");
  },
  isSDK(o: any): o is QuerySealReservationsRequestSDKType {
    return o && (o.$typeUrl === QuerySealReservationsRequest.typeUrl || typeof o.live === "string" && typeof o.order_id === "bigint" && typeof o.reserver === "string");
  },
  isAmino(o: any): o is QuerySealReservationsRequestAmino {
    return o && (o.$typeUrl === QuerySealReservationsRequest.typeUrl || typeof o.live === "string" && typeof o.order_id === "bigint" && typeof o.reserver === "string");
  },
  encode(message: QuerySealReservationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderBy !== undefined) {
      SealReservationOrderBy.encode(message.orderBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.live !== "") {
      writer.uint32(26).string(message.live);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(32).uint64(message.orderId);
    }
    if (message.reserver !== "") {
      writer.uint32(42).string(message.reserver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealReservationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealReservationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderBy = SealReservationOrderBy.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.live = reader.string();
          break;
        case 4:
          message.orderId = reader.uint64();
          break;
        case 5:
          message.reserver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySealReservationsRequest {
    return {
      orderBy: isSet(object.orderBy) ? SealReservationOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      live: isSet(object.live) ? String(object.live) : "",
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      reserver: isSet(object.reserver) ? String(object.reserver) : ""
    };
  },
  toJSON(message: QuerySealReservationsRequest): unknown {
    const obj: any = {};
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? SealReservationOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.live !== undefined && (obj.live = message.live);
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.reserver !== undefined && (obj.reserver = message.reserver);
    return obj;
  },
  fromPartial(object: Partial<QuerySealReservationsRequest>): QuerySealReservationsRequest {
    const message = createBaseQuerySealReservationsRequest();
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? SealReservationOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.live = object.live ?? "";
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.reserver = object.reserver ?? "";
    return message;
  },
  fromAmino(object: QuerySealReservationsRequestAmino): QuerySealReservationsRequest {
    const message = createBaseQuerySealReservationsRequest();
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = SealReservationOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.live !== undefined && object.live !== null) {
      message.live = object.live;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.reserver !== undefined && object.reserver !== null) {
      message.reserver = object.reserver;
    }
    return message;
  },
  toAmino(message: QuerySealReservationsRequest, useInterfaces: boolean = true): QuerySealReservationsRequestAmino {
    const obj: any = {};
    obj.order_by = message.orderBy ? SealReservationOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    obj.live = message.live === "" ? undefined : message.live;
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.reserver = message.reserver === "" ? undefined : message.reserver;
    return obj;
  },
  fromAminoMsg(object: QuerySealReservationsRequestAminoMsg): QuerySealReservationsRequest {
    return QuerySealReservationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealReservationsRequestProtoMsg, useInterfaces: boolean = true): QuerySealReservationsRequest {
    return QuerySealReservationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealReservationsRequest): Uint8Array {
    return QuerySealReservationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySealReservationsRequest): QuerySealReservationsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealReservationsRequest",
      value: QuerySealReservationsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealReservationsRequest.typeUrl, QuerySealReservationsRequest);
function createBaseQuerySealReservationsResponse(): QuerySealReservationsResponse {
  return {
    reservations: [],
    pagination: undefined
  };
}
export const QuerySealReservationsResponse = {
  typeUrl: "/pryzmatics.server.seal.QuerySealReservationsResponse",
  is(o: any): o is QuerySealReservationsResponse {
    return o && (o.$typeUrl === QuerySealReservationsResponse.typeUrl || Array.isArray(o.reservations) && (!o.reservations.length || ReservationWithOrder.is(o.reservations[0])));
  },
  isSDK(o: any): o is QuerySealReservationsResponseSDKType {
    return o && (o.$typeUrl === QuerySealReservationsResponse.typeUrl || Array.isArray(o.reservations) && (!o.reservations.length || ReservationWithOrder.isSDK(o.reservations[0])));
  },
  isAmino(o: any): o is QuerySealReservationsResponseAmino {
    return o && (o.$typeUrl === QuerySealReservationsResponse.typeUrl || Array.isArray(o.reservations) && (!o.reservations.length || ReservationWithOrder.isAmino(o.reservations[0])));
  },
  encode(message: QuerySealReservationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reservations) {
      ReservationWithOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QuerySealReservationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySealReservationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservations.push(ReservationWithOrder.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QuerySealReservationsResponse {
    return {
      reservations: Array.isArray(object?.reservations) ? object.reservations.map((e: any) => ReservationWithOrder.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySealReservationsResponse): unknown {
    const obj: any = {};
    if (message.reservations) {
      obj.reservations = message.reservations.map(e => e ? ReservationWithOrder.toJSON(e) : undefined);
    } else {
      obj.reservations = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySealReservationsResponse>): QuerySealReservationsResponse {
    const message = createBaseQuerySealReservationsResponse();
    message.reservations = object.reservations?.map(e => ReservationWithOrder.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySealReservationsResponseAmino): QuerySealReservationsResponse {
    const message = createBaseQuerySealReservationsResponse();
    message.reservations = object.reservations?.map(e => ReservationWithOrder.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySealReservationsResponse, useInterfaces: boolean = true): QuerySealReservationsResponseAmino {
    const obj: any = {};
    if (message.reservations) {
      obj.reservations = message.reservations.map(e => e ? ReservationWithOrder.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.reservations = message.reservations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySealReservationsResponseAminoMsg): QuerySealReservationsResponse {
    return QuerySealReservationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySealReservationsResponseProtoMsg, useInterfaces: boolean = true): QuerySealReservationsResponse {
    return QuerySealReservationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QuerySealReservationsResponse): Uint8Array {
    return QuerySealReservationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySealReservationsResponse): QuerySealReservationsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.seal.QuerySealReservationsResponse",
      value: QuerySealReservationsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySealReservationsResponse.typeUrl, QuerySealReservationsResponse);