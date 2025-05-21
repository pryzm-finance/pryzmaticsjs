import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Reservation {
  id: bigint;
  owner: string;
  tokenIn: string;
  tokenOut: string;
  price: string;
  /**
   * string total_amount = 6 [
   *    (cosmos_proto.scalar) = "cosmos.Int",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable) = false
   *  ];
   *  string fulfilled_amount = 7 [
   *    (cosmos_proto.scalar) = "cosmos.Int",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable) = false
   *  ];
   */
  live: boolean;
  expirationTime: Timestamp;
  lastUpdateTime: Timestamp;
}
export interface ReservationProtoMsg {
  typeUrl: "/pryzmatics.orderbook.Reservation";
  value: Uint8Array;
}
export interface ReservationAmino {
  id?: string;
  owner?: string;
  token_in?: string;
  token_out?: string;
  price?: string;
  /**
   * string total_amount = 6 [
   *    (cosmos_proto.scalar) = "cosmos.Int",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable) = false
   *  ];
   *  string fulfilled_amount = 7 [
   *    (cosmos_proto.scalar) = "cosmos.Int",
   *    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
   *    (gogoproto.nullable) = false
   *  ];
   */
  live?: boolean;
  expiration_time?: string;
  last_update_time?: string;
}
export interface ReservationAminoMsg {
  type: "/pryzmatics.orderbook.Reservation";
  value: ReservationAmino;
}
export interface ReservationSDKType {
  id: bigint;
  owner: string;
  token_in: string;
  token_out: string;
  price: string;
  live: boolean;
  expiration_time: TimestampSDKType;
  last_update_time: TimestampSDKType;
}
export interface OrderReservation {
  orderId: bigint;
  reservationId: bigint;
  executionPrice: string;
  orderAmount: string;
  reservationAmount: string;
}
export interface OrderReservationProtoMsg {
  typeUrl: "/pryzmatics.orderbook.OrderReservation";
  value: Uint8Array;
}
export interface OrderReservationAmino {
  order_id?: string;
  reservation_id?: string;
  execution_price?: string;
  order_amount?: string;
  reservation_amount?: string;
}
export interface OrderReservationAminoMsg {
  type: "/pryzmatics.orderbook.OrderReservation";
  value: OrderReservationAmino;
}
export interface OrderReservationSDKType {
  order_id: bigint;
  reservation_id: bigint;
  execution_price: string;
  order_amount: string;
  reservation_amount: string;
}
function createBaseReservation(): Reservation {
  return {
    id: BigInt(0),
    owner: "",
    tokenIn: "",
    tokenOut: "",
    price: "",
    live: false,
    expirationTime: Timestamp.fromPartial({}),
    lastUpdateTime: Timestamp.fromPartial({})
  };
}
export const Reservation = {
  typeUrl: "/pryzmatics.orderbook.Reservation",
  is(o: any): o is Reservation {
    return o && (o.$typeUrl === Reservation.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.price === "string" && typeof o.live === "boolean" && Timestamp.is(o.expirationTime) && Timestamp.is(o.lastUpdateTime));
  },
  isSDK(o: any): o is ReservationSDKType {
    return o && (o.$typeUrl === Reservation.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.price === "string" && typeof o.live === "boolean" && Timestamp.isSDK(o.expiration_time) && Timestamp.isSDK(o.last_update_time));
  },
  isAmino(o: any): o is ReservationAmino {
    return o && (o.$typeUrl === Reservation.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.price === "string" && typeof o.live === "boolean" && Timestamp.isAmino(o.expiration_time) && Timestamp.isAmino(o.last_update_time));
  },
  encode(message: Reservation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    if (message.price !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.live === true) {
      writer.uint32(64).bool(message.live);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.lastUpdateTime !== undefined) {
      Timestamp.encode(message.lastUpdateTime, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Reservation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        case 5:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.live = reader.bool();
          break;
        case 9:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.lastUpdateTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Reservation {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      price: isSet(object.price) ? String(object.price) : "",
      live: isSet(object.live) ? Boolean(object.live) : false,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      lastUpdateTime: isSet(object.lastUpdateTime) ? fromJsonTimestamp(object.lastUpdateTime) : undefined
    };
  },
  toJSON(message: Reservation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.price !== undefined && (obj.price = message.price);
    message.live !== undefined && (obj.live = message.live);
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.lastUpdateTime !== undefined && (obj.lastUpdateTime = fromTimestamp(message.lastUpdateTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Reservation>): Reservation {
    const message = createBaseReservation();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.price = object.price ?? "";
    message.live = object.live ?? false;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.lastUpdateTime = object.lastUpdateTime !== undefined && object.lastUpdateTime !== null ? Timestamp.fromPartial(object.lastUpdateTime) : undefined;
    return message;
  },
  fromAmino(object: ReservationAmino): Reservation {
    const message = createBaseReservation();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
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
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.live !== undefined && object.live !== null) {
      message.live = object.live;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.last_update_time !== undefined && object.last_update_time !== null) {
      message.lastUpdateTime = Timestamp.fromAmino(object.last_update_time);
    }
    return message;
  },
  toAmino(message: Reservation, useInterfaces: boolean = true): ReservationAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.price = padDecimal(message.price) === "" ? undefined : padDecimal(message.price);
    obj.live = message.live === false ? undefined : message.live;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime, useInterfaces) : undefined;
    obj.last_update_time = message.lastUpdateTime ? Timestamp.toAmino(message.lastUpdateTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ReservationAminoMsg): Reservation {
    return Reservation.fromAmino(object.value);
  },
  fromProtoMsg(message: ReservationProtoMsg, useInterfaces: boolean = true): Reservation {
    return Reservation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Reservation): Uint8Array {
    return Reservation.encode(message).finish();
  },
  toProtoMsg(message: Reservation): ReservationProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.Reservation",
      value: Reservation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Reservation.typeUrl, Reservation);
function createBaseOrderReservation(): OrderReservation {
  return {
    orderId: BigInt(0),
    reservationId: BigInt(0),
    executionPrice: "",
    orderAmount: "",
    reservationAmount: ""
  };
}
export const OrderReservation = {
  typeUrl: "/pryzmatics.orderbook.OrderReservation",
  is(o: any): o is OrderReservation {
    return o && (o.$typeUrl === OrderReservation.typeUrl || typeof o.orderId === "bigint" && typeof o.reservationId === "bigint" && typeof o.executionPrice === "string" && typeof o.orderAmount === "string" && typeof o.reservationAmount === "string");
  },
  isSDK(o: any): o is OrderReservationSDKType {
    return o && (o.$typeUrl === OrderReservation.typeUrl || typeof o.order_id === "bigint" && typeof o.reservation_id === "bigint" && typeof o.execution_price === "string" && typeof o.order_amount === "string" && typeof o.reservation_amount === "string");
  },
  isAmino(o: any): o is OrderReservationAmino {
    return o && (o.$typeUrl === OrderReservation.typeUrl || typeof o.order_id === "bigint" && typeof o.reservation_id === "bigint" && typeof o.execution_price === "string" && typeof o.order_amount === "string" && typeof o.reservation_amount === "string");
  },
  encode(message: OrderReservation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderId !== BigInt(0)) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.reservationId !== BigInt(0)) {
      writer.uint32(16).uint64(message.reservationId);
    }
    if (message.executionPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.executionPrice, 18).atomics);
    }
    if (message.orderAmount !== "") {
      writer.uint32(34).string(message.orderAmount);
    }
    if (message.reservationAmount !== "") {
      writer.uint32(42).string(message.reservationAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderReservation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderReservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64();
          break;
        case 2:
          message.reservationId = reader.uint64();
          break;
        case 3:
          message.executionPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.orderAmount = reader.string();
          break;
        case 5:
          message.reservationAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderReservation {
    return {
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      reservationId: isSet(object.reservationId) ? BigInt(object.reservationId.toString()) : BigInt(0),
      executionPrice: isSet(object.executionPrice) ? String(object.executionPrice) : "",
      orderAmount: isSet(object.orderAmount) ? String(object.orderAmount) : "",
      reservationAmount: isSet(object.reservationAmount) ? String(object.reservationAmount) : ""
    };
  },
  toJSON(message: OrderReservation): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.reservationId !== undefined && (obj.reservationId = (message.reservationId || BigInt(0)).toString());
    message.executionPrice !== undefined && (obj.executionPrice = message.executionPrice);
    message.orderAmount !== undefined && (obj.orderAmount = message.orderAmount);
    message.reservationAmount !== undefined && (obj.reservationAmount = message.reservationAmount);
    return obj;
  },
  fromPartial(object: Partial<OrderReservation>): OrderReservation {
    const message = createBaseOrderReservation();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.reservationId = object.reservationId !== undefined && object.reservationId !== null ? BigInt(object.reservationId.toString()) : BigInt(0);
    message.executionPrice = object.executionPrice ?? "";
    message.orderAmount = object.orderAmount ?? "";
    message.reservationAmount = object.reservationAmount ?? "";
    return message;
  },
  fromAmino(object: OrderReservationAmino): OrderReservation {
    const message = createBaseOrderReservation();
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.reservation_id !== undefined && object.reservation_id !== null) {
      message.reservationId = BigInt(object.reservation_id);
    }
    if (object.execution_price !== undefined && object.execution_price !== null) {
      message.executionPrice = object.execution_price;
    }
    if (object.order_amount !== undefined && object.order_amount !== null) {
      message.orderAmount = object.order_amount;
    }
    if (object.reservation_amount !== undefined && object.reservation_amount !== null) {
      message.reservationAmount = object.reservation_amount;
    }
    return message;
  },
  toAmino(message: OrderReservation, useInterfaces: boolean = true): OrderReservationAmino {
    const obj: any = {};
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.reservation_id = message.reservationId ? message.reservationId.toString() : undefined;
    obj.execution_price = padDecimal(message.executionPrice) === "" ? undefined : padDecimal(message.executionPrice);
    obj.order_amount = message.orderAmount === "" ? undefined : message.orderAmount;
    obj.reservation_amount = message.reservationAmount === "" ? undefined : message.reservationAmount;
    return obj;
  },
  fromAminoMsg(object: OrderReservationAminoMsg): OrderReservation {
    return OrderReservation.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderReservationProtoMsg, useInterfaces: boolean = true): OrderReservation {
    return OrderReservation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderReservation): Uint8Array {
    return OrderReservation.encode(message).finish();
  },
  toProtoMsg(message: OrderReservation): OrderReservationProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.OrderReservation",
      value: OrderReservation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderReservation.typeUrl, OrderReservation);