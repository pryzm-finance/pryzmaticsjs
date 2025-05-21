import { OrderBookReservationOrderBy, OrderBookReservationOrderByAmino, OrderBookReservationOrderBySDKType } from "../../database/orderbook/reservation";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Reservation, ReservationAmino, ReservationSDKType } from "../../orderbook/reservation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryOrderBookReservationsRequest {
  orderBy?: OrderBookReservationOrderBy;
  pagination?: PageRequest;
}
export interface QueryOrderBookReservationsRequestProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookReservationsRequest";
  value: Uint8Array;
}
export interface QueryOrderBookReservationsRequestAmino {
  order_by?: OrderBookReservationOrderByAmino;
  pagination?: PageRequestAmino;
}
export interface QueryOrderBookReservationsRequestAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookReservationsRequest";
  value: QueryOrderBookReservationsRequestAmino;
}
export interface QueryOrderBookReservationsRequestSDKType {
  order_by?: OrderBookReservationOrderBySDKType;
  pagination?: PageRequestSDKType;
}
export interface QueryOrderBookReservationsResponse {
  reservations: Reservation[];
  pagination?: PageResponse;
}
export interface QueryOrderBookReservationsResponseProtoMsg {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookReservationsResponse";
  value: Uint8Array;
}
export interface QueryOrderBookReservationsResponseAmino {
  reservations?: ReservationAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryOrderBookReservationsResponseAminoMsg {
  type: "/pryzmatics.server.orderbook.QueryOrderBookReservationsResponse";
  value: QueryOrderBookReservationsResponseAmino;
}
export interface QueryOrderBookReservationsResponseSDKType {
  reservations: ReservationSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryOrderBookReservationsRequest(): QueryOrderBookReservationsRequest {
  return {
    orderBy: undefined,
    pagination: undefined
  };
}
export const QueryOrderBookReservationsRequest = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookReservationsRequest",
  is(o: any): o is QueryOrderBookReservationsRequest {
    return o && o.$typeUrl === QueryOrderBookReservationsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryOrderBookReservationsRequestSDKType {
    return o && o.$typeUrl === QueryOrderBookReservationsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryOrderBookReservationsRequestAmino {
    return o && o.$typeUrl === QueryOrderBookReservationsRequest.typeUrl;
  },
  encode(message: QueryOrderBookReservationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderBy !== undefined) {
      OrderBookReservationOrderBy.encode(message.orderBy, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookReservationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookReservationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderBy = OrderBookReservationOrderBy.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): QueryOrderBookReservationsRequest {
    return {
      orderBy: isSet(object.orderBy) ? OrderBookReservationOrderBy.fromJSON(object.orderBy) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrderBookReservationsRequest): unknown {
    const obj: any = {};
    message.orderBy !== undefined && (obj.orderBy = message.orderBy ? OrderBookReservationOrderBy.toJSON(message.orderBy) : undefined);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookReservationsRequest>): QueryOrderBookReservationsRequest {
    const message = createBaseQueryOrderBookReservationsRequest();
    message.orderBy = object.orderBy !== undefined && object.orderBy !== null ? OrderBookReservationOrderBy.fromPartial(object.orderBy) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderBookReservationsRequestAmino): QueryOrderBookReservationsRequest {
    const message = createBaseQueryOrderBookReservationsRequest();
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = OrderBookReservationOrderBy.fromAmino(object.order_by);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrderBookReservationsRequest, useInterfaces: boolean = true): QueryOrderBookReservationsRequestAmino {
    const obj: any = {};
    obj.order_by = message.orderBy ? OrderBookReservationOrderBy.toAmino(message.orderBy, useInterfaces) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookReservationsRequestAminoMsg): QueryOrderBookReservationsRequest {
    return QueryOrderBookReservationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookReservationsRequestProtoMsg, useInterfaces: boolean = true): QueryOrderBookReservationsRequest {
    return QueryOrderBookReservationsRequest.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookReservationsRequest): Uint8Array {
    return QueryOrderBookReservationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookReservationsRequest): QueryOrderBookReservationsRequestProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookReservationsRequest",
      value: QueryOrderBookReservationsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookReservationsRequest.typeUrl, QueryOrderBookReservationsRequest);
function createBaseQueryOrderBookReservationsResponse(): QueryOrderBookReservationsResponse {
  return {
    reservations: [],
    pagination: undefined
  };
}
export const QueryOrderBookReservationsResponse = {
  typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookReservationsResponse",
  is(o: any): o is QueryOrderBookReservationsResponse {
    return o && (o.$typeUrl === QueryOrderBookReservationsResponse.typeUrl || Array.isArray(o.reservations) && (!o.reservations.length || Reservation.is(o.reservations[0])));
  },
  isSDK(o: any): o is QueryOrderBookReservationsResponseSDKType {
    return o && (o.$typeUrl === QueryOrderBookReservationsResponse.typeUrl || Array.isArray(o.reservations) && (!o.reservations.length || Reservation.isSDK(o.reservations[0])));
  },
  isAmino(o: any): o is QueryOrderBookReservationsResponseAmino {
    return o && (o.$typeUrl === QueryOrderBookReservationsResponse.typeUrl || Array.isArray(o.reservations) && (!o.reservations.length || Reservation.isAmino(o.reservations[0])));
  },
  encode(message: QueryOrderBookReservationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reservations) {
      Reservation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): QueryOrderBookReservationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookReservationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservations.push(Reservation.decode(reader, reader.uint32(), useInterfaces));
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
  fromJSON(object: any): QueryOrderBookReservationsResponse {
    return {
      reservations: Array.isArray(object?.reservations) ? object.reservations.map((e: any) => Reservation.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryOrderBookReservationsResponse): unknown {
    const obj: any = {};
    if (message.reservations) {
      obj.reservations = message.reservations.map(e => e ? Reservation.toJSON(e) : undefined);
    } else {
      obj.reservations = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryOrderBookReservationsResponse>): QueryOrderBookReservationsResponse {
    const message = createBaseQueryOrderBookReservationsResponse();
    message.reservations = object.reservations?.map(e => Reservation.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderBookReservationsResponseAmino): QueryOrderBookReservationsResponse {
    const message = createBaseQueryOrderBookReservationsResponse();
    message.reservations = object.reservations?.map(e => Reservation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryOrderBookReservationsResponse, useInterfaces: boolean = true): QueryOrderBookReservationsResponseAmino {
    const obj: any = {};
    if (message.reservations) {
      obj.reservations = message.reservations.map(e => e ? Reservation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.reservations = message.reservations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderBookReservationsResponseAminoMsg): QueryOrderBookReservationsResponse {
    return QueryOrderBookReservationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderBookReservationsResponseProtoMsg, useInterfaces: boolean = true): QueryOrderBookReservationsResponse {
    return QueryOrderBookReservationsResponse.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: QueryOrderBookReservationsResponse): Uint8Array {
    return QueryOrderBookReservationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderBookReservationsResponse): QueryOrderBookReservationsResponseProtoMsg {
    return {
      typeUrl: "/pryzmatics.server.orderbook.QueryOrderBookReservationsResponse",
      value: QueryOrderBookReservationsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOrderBookReservationsResponse.typeUrl, QueryOrderBookReservationsResponse);