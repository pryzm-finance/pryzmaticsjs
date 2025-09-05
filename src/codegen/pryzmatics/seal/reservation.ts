import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Order, OrderAmino, OrderSDKType } from "./order";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Reservation {
  id: bigint;
  reserver: string;
  orderId: bigint;
  totalAmount: string;
  remainingAmount: string;
  expirationTime: Timestamp;
  reservationDepositDenom: string;
  reservationDepositTotalAmount: string;
  reservationDepositRemainingAmount: string;
  protocolReservationDepositDenom: string;
  protocolReservationDepositTotalAmount?: string;
  protocolReservationDepositRemainingAmount?: string;
  live: boolean;
  creationTime: Timestamp;
  lastUpdateTime: Timestamp;
}
export interface ReservationProtoMsg {
  typeUrl: "/pryzmatics.seal.Reservation";
  value: Uint8Array;
}
export interface ReservationAmino {
  id?: string;
  reserver?: string;
  order_id?: string;
  total_amount?: string;
  remaining_amount?: string;
  expiration_time?: string;
  reservation_deposit_denom?: string;
  reservation_deposit_total_amount?: string;
  reservation_deposit_remaining_amount?: string;
  protocol_reservation_deposit_denom?: string;
  protocol_reservation_deposit_total_amount?: string;
  protocol_reservation_deposit_remaining_amount?: string;
  live?: boolean;
  creation_time?: string;
  last_update_time?: string;
}
export interface ReservationAminoMsg {
  type: "/pryzmatics.seal.Reservation";
  value: ReservationAmino;
}
export interface ReservationSDKType {
  id: bigint;
  reserver: string;
  order_id: bigint;
  total_amount: string;
  remaining_amount: string;
  expiration_time: TimestampSDKType;
  reservation_deposit_denom: string;
  reservation_deposit_total_amount: string;
  reservation_deposit_remaining_amount: string;
  protocol_reservation_deposit_denom: string;
  protocol_reservation_deposit_total_amount?: string;
  protocol_reservation_deposit_remaining_amount?: string;
  live: boolean;
  creation_time: TimestampSDKType;
  last_update_time: TimestampSDKType;
}
export interface ReservationWithOrder {
  reservation: Reservation;
  order: Order;
}
export interface ReservationWithOrderProtoMsg {
  typeUrl: "/pryzmatics.seal.ReservationWithOrder";
  value: Uint8Array;
}
export interface ReservationWithOrderAmino {
  reservation?: ReservationAmino;
  order?: OrderAmino;
}
export interface ReservationWithOrderAminoMsg {
  type: "/pryzmatics.seal.ReservationWithOrder";
  value: ReservationWithOrderAmino;
}
export interface ReservationWithOrderSDKType {
  reservation: ReservationSDKType;
  order: OrderSDKType;
}
function createBaseReservation(): Reservation {
  return {
    id: BigInt(0),
    reserver: "",
    orderId: BigInt(0),
    totalAmount: "",
    remainingAmount: "",
    expirationTime: Timestamp.fromPartial({}),
    reservationDepositDenom: "",
    reservationDepositTotalAmount: "",
    reservationDepositRemainingAmount: "",
    protocolReservationDepositDenom: "",
    protocolReservationDepositTotalAmount: undefined,
    protocolReservationDepositRemainingAmount: undefined,
    live: false,
    creationTime: Timestamp.fromPartial({}),
    lastUpdateTime: Timestamp.fromPartial({})
  };
}
export const Reservation = {
  typeUrl: "/pryzmatics.seal.Reservation",
  is(o: any): o is Reservation {
    return o && (o.$typeUrl === Reservation.typeUrl || typeof o.id === "bigint" && typeof o.reserver === "string" && typeof o.orderId === "bigint" && typeof o.totalAmount === "string" && typeof o.remainingAmount === "string" && Timestamp.is(o.expirationTime) && typeof o.reservationDepositDenom === "string" && typeof o.reservationDepositTotalAmount === "string" && typeof o.reservationDepositRemainingAmount === "string" && typeof o.protocolReservationDepositDenom === "string" && typeof o.live === "boolean" && Timestamp.is(o.creationTime) && Timestamp.is(o.lastUpdateTime));
  },
  isSDK(o: any): o is ReservationSDKType {
    return o && (o.$typeUrl === Reservation.typeUrl || typeof o.id === "bigint" && typeof o.reserver === "string" && typeof o.order_id === "bigint" && typeof o.total_amount === "string" && typeof o.remaining_amount === "string" && Timestamp.isSDK(o.expiration_time) && typeof o.reservation_deposit_denom === "string" && typeof o.reservation_deposit_total_amount === "string" && typeof o.reservation_deposit_remaining_amount === "string" && typeof o.protocol_reservation_deposit_denom === "string" && typeof o.live === "boolean" && Timestamp.isSDK(o.creation_time) && Timestamp.isSDK(o.last_update_time));
  },
  isAmino(o: any): o is ReservationAmino {
    return o && (o.$typeUrl === Reservation.typeUrl || typeof o.id === "bigint" && typeof o.reserver === "string" && typeof o.order_id === "bigint" && typeof o.total_amount === "string" && typeof o.remaining_amount === "string" && Timestamp.isAmino(o.expiration_time) && typeof o.reservation_deposit_denom === "string" && typeof o.reservation_deposit_total_amount === "string" && typeof o.reservation_deposit_remaining_amount === "string" && typeof o.protocol_reservation_deposit_denom === "string" && typeof o.live === "boolean" && Timestamp.isAmino(o.creation_time) && Timestamp.isAmino(o.last_update_time));
  },
  encode(message: Reservation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.reserver !== "") {
      writer.uint32(18).string(message.reserver);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(24).uint64(message.orderId);
    }
    if (message.totalAmount !== "") {
      writer.uint32(34).string(message.totalAmount);
    }
    if (message.remainingAmount !== "") {
      writer.uint32(42).string(message.remainingAmount);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.reservationDepositDenom !== "") {
      writer.uint32(58).string(message.reservationDepositDenom);
    }
    if (message.reservationDepositTotalAmount !== "") {
      writer.uint32(66).string(message.reservationDepositTotalAmount);
    }
    if (message.reservationDepositRemainingAmount !== "") {
      writer.uint32(74).string(message.reservationDepositRemainingAmount);
    }
    if (message.protocolReservationDepositDenom !== "") {
      writer.uint32(82).string(message.protocolReservationDepositDenom);
    }
    if (message.protocolReservationDepositTotalAmount !== undefined) {
      writer.uint32(90).string(message.protocolReservationDepositTotalAmount);
    }
    if (message.protocolReservationDepositRemainingAmount !== undefined) {
      writer.uint32(98).string(message.protocolReservationDepositRemainingAmount);
    }
    if (message.live === true) {
      writer.uint32(104).bool(message.live);
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(114).fork()).ldelim();
    }
    if (message.lastUpdateTime !== undefined) {
      Timestamp.encode(message.lastUpdateTime, writer.uint32(122).fork()).ldelim();
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
          message.reserver = reader.string();
          break;
        case 3:
          message.orderId = reader.uint64();
          break;
        case 4:
          message.totalAmount = reader.string();
          break;
        case 5:
          message.remainingAmount = reader.string();
          break;
        case 6:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.reservationDepositDenom = reader.string();
          break;
        case 8:
          message.reservationDepositTotalAmount = reader.string();
          break;
        case 9:
          message.reservationDepositRemainingAmount = reader.string();
          break;
        case 10:
          message.protocolReservationDepositDenom = reader.string();
          break;
        case 11:
          message.protocolReservationDepositTotalAmount = reader.string();
          break;
        case 12:
          message.protocolReservationDepositRemainingAmount = reader.string();
          break;
        case 13:
          message.live = reader.bool();
          break;
        case 14:
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 15:
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
      reserver: isSet(object.reserver) ? String(object.reserver) : "",
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      remainingAmount: isSet(object.remainingAmount) ? String(object.remainingAmount) : "",
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      reservationDepositDenom: isSet(object.reservationDepositDenom) ? String(object.reservationDepositDenom) : "",
      reservationDepositTotalAmount: isSet(object.reservationDepositTotalAmount) ? String(object.reservationDepositTotalAmount) : "",
      reservationDepositRemainingAmount: isSet(object.reservationDepositRemainingAmount) ? String(object.reservationDepositRemainingAmount) : "",
      protocolReservationDepositDenom: isSet(object.protocolReservationDepositDenom) ? String(object.protocolReservationDepositDenom) : "",
      protocolReservationDepositTotalAmount: isSet(object.protocolReservationDepositTotalAmount) ? String(object.protocolReservationDepositTotalAmount) : undefined,
      protocolReservationDepositRemainingAmount: isSet(object.protocolReservationDepositRemainingAmount) ? String(object.protocolReservationDepositRemainingAmount) : undefined,
      live: isSet(object.live) ? Boolean(object.live) : false,
      creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
      lastUpdateTime: isSet(object.lastUpdateTime) ? fromJsonTimestamp(object.lastUpdateTime) : undefined
    };
  },
  toJSON(message: Reservation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.reserver !== undefined && (obj.reserver = message.reserver);
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.remainingAmount !== undefined && (obj.remainingAmount = message.remainingAmount);
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.reservationDepositDenom !== undefined && (obj.reservationDepositDenom = message.reservationDepositDenom);
    message.reservationDepositTotalAmount !== undefined && (obj.reservationDepositTotalAmount = message.reservationDepositTotalAmount);
    message.reservationDepositRemainingAmount !== undefined && (obj.reservationDepositRemainingAmount = message.reservationDepositRemainingAmount);
    message.protocolReservationDepositDenom !== undefined && (obj.protocolReservationDepositDenom = message.protocolReservationDepositDenom);
    message.protocolReservationDepositTotalAmount !== undefined && (obj.protocolReservationDepositTotalAmount = message.protocolReservationDepositTotalAmount);
    message.protocolReservationDepositRemainingAmount !== undefined && (obj.protocolReservationDepositRemainingAmount = message.protocolReservationDepositRemainingAmount);
    message.live !== undefined && (obj.live = message.live);
    message.creationTime !== undefined && (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    message.lastUpdateTime !== undefined && (obj.lastUpdateTime = fromTimestamp(message.lastUpdateTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Reservation>): Reservation {
    const message = createBaseReservation();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.reserver = object.reserver ?? "";
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.totalAmount = object.totalAmount ?? "";
    message.remainingAmount = object.remainingAmount ?? "";
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.reservationDepositDenom = object.reservationDepositDenom ?? "";
    message.reservationDepositTotalAmount = object.reservationDepositTotalAmount ?? "";
    message.reservationDepositRemainingAmount = object.reservationDepositRemainingAmount ?? "";
    message.protocolReservationDepositDenom = object.protocolReservationDepositDenom ?? "";
    message.protocolReservationDepositTotalAmount = object.protocolReservationDepositTotalAmount ?? undefined;
    message.protocolReservationDepositRemainingAmount = object.protocolReservationDepositRemainingAmount ?? undefined;
    message.live = object.live ?? false;
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? Timestamp.fromPartial(object.creationTime) : undefined;
    message.lastUpdateTime = object.lastUpdateTime !== undefined && object.lastUpdateTime !== null ? Timestamp.fromPartial(object.lastUpdateTime) : undefined;
    return message;
  },
  fromAmino(object: ReservationAmino): Reservation {
    const message = createBaseReservation();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.reserver !== undefined && object.reserver !== null) {
      message.reserver = object.reserver;
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.remaining_amount !== undefined && object.remaining_amount !== null) {
      message.remainingAmount = object.remaining_amount;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.reservation_deposit_denom !== undefined && object.reservation_deposit_denom !== null) {
      message.reservationDepositDenom = object.reservation_deposit_denom;
    }
    if (object.reservation_deposit_total_amount !== undefined && object.reservation_deposit_total_amount !== null) {
      message.reservationDepositTotalAmount = object.reservation_deposit_total_amount;
    }
    if (object.reservation_deposit_remaining_amount !== undefined && object.reservation_deposit_remaining_amount !== null) {
      message.reservationDepositRemainingAmount = object.reservation_deposit_remaining_amount;
    }
    if (object.protocol_reservation_deposit_denom !== undefined && object.protocol_reservation_deposit_denom !== null) {
      message.protocolReservationDepositDenom = object.protocol_reservation_deposit_denom;
    }
    if (object.protocol_reservation_deposit_total_amount !== undefined && object.protocol_reservation_deposit_total_amount !== null) {
      message.protocolReservationDepositTotalAmount = object.protocol_reservation_deposit_total_amount;
    }
    if (object.protocol_reservation_deposit_remaining_amount !== undefined && object.protocol_reservation_deposit_remaining_amount !== null) {
      message.protocolReservationDepositRemainingAmount = object.protocol_reservation_deposit_remaining_amount;
    }
    if (object.live !== undefined && object.live !== null) {
      message.live = object.live;
    }
    if (object.creation_time !== undefined && object.creation_time !== null) {
      message.creationTime = Timestamp.fromAmino(object.creation_time);
    }
    if (object.last_update_time !== undefined && object.last_update_time !== null) {
      message.lastUpdateTime = Timestamp.fromAmino(object.last_update_time);
    }
    return message;
  },
  toAmino(message: Reservation, useInterfaces: boolean = true): ReservationAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.reserver = message.reserver === "" ? undefined : message.reserver;
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.remaining_amount = message.remainingAmount === "" ? undefined : message.remainingAmount;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime, useInterfaces) : undefined;
    obj.reservation_deposit_denom = message.reservationDepositDenom === "" ? undefined : message.reservationDepositDenom;
    obj.reservation_deposit_total_amount = message.reservationDepositTotalAmount === "" ? undefined : message.reservationDepositTotalAmount;
    obj.reservation_deposit_remaining_amount = message.reservationDepositRemainingAmount === "" ? undefined : message.reservationDepositRemainingAmount;
    obj.protocol_reservation_deposit_denom = message.protocolReservationDepositDenom === "" ? undefined : message.protocolReservationDepositDenom;
    obj.protocol_reservation_deposit_total_amount = message.protocolReservationDepositTotalAmount === null ? undefined : message.protocolReservationDepositTotalAmount;
    obj.protocol_reservation_deposit_remaining_amount = message.protocolReservationDepositRemainingAmount === null ? undefined : message.protocolReservationDepositRemainingAmount;
    obj.live = message.live === false ? undefined : message.live;
    obj.creation_time = message.creationTime ? Timestamp.toAmino(message.creationTime, useInterfaces) : undefined;
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
      typeUrl: "/pryzmatics.seal.Reservation",
      value: Reservation.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Reservation.typeUrl, Reservation);
function createBaseReservationWithOrder(): ReservationWithOrder {
  return {
    reservation: Reservation.fromPartial({}),
    order: Order.fromPartial({})
  };
}
export const ReservationWithOrder = {
  typeUrl: "/pryzmatics.seal.ReservationWithOrder",
  is(o: any): o is ReservationWithOrder {
    return o && (o.$typeUrl === ReservationWithOrder.typeUrl || Reservation.is(o.reservation) && Order.is(o.order));
  },
  isSDK(o: any): o is ReservationWithOrderSDKType {
    return o && (o.$typeUrl === ReservationWithOrder.typeUrl || Reservation.isSDK(o.reservation) && Order.isSDK(o.order));
  },
  isAmino(o: any): o is ReservationWithOrderAmino {
    return o && (o.$typeUrl === ReservationWithOrder.typeUrl || Reservation.isAmino(o.reservation) && Order.isAmino(o.order));
  },
  encode(message: ReservationWithOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservation !== undefined) {
      Reservation.encode(message.reservation, writer.uint32(10).fork()).ldelim();
    }
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ReservationWithOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservationWithOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservation = Reservation.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.order = Order.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReservationWithOrder {
    return {
      reservation: isSet(object.reservation) ? Reservation.fromJSON(object.reservation) : undefined,
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: ReservationWithOrder): unknown {
    const obj: any = {};
    message.reservation !== undefined && (obj.reservation = message.reservation ? Reservation.toJSON(message.reservation) : undefined);
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ReservationWithOrder>): ReservationWithOrder {
    const message = createBaseReservationWithOrder();
    message.reservation = object.reservation !== undefined && object.reservation !== null ? Reservation.fromPartial(object.reservation) : undefined;
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: ReservationWithOrderAmino): ReservationWithOrder {
    const message = createBaseReservationWithOrder();
    if (object.reservation !== undefined && object.reservation !== null) {
      message.reservation = Reservation.fromAmino(object.reservation);
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: ReservationWithOrder, useInterfaces: boolean = true): ReservationWithOrderAmino {
    const obj: any = {};
    obj.reservation = message.reservation ? Reservation.toAmino(message.reservation, useInterfaces) : undefined;
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ReservationWithOrderAminoMsg): ReservationWithOrder {
    return ReservationWithOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: ReservationWithOrderProtoMsg, useInterfaces: boolean = true): ReservationWithOrder {
    return ReservationWithOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ReservationWithOrder): Uint8Array {
    return ReservationWithOrder.encode(message).finish();
  },
  toProtoMsg(message: ReservationWithOrder): ReservationWithOrderProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.ReservationWithOrder",
      value: ReservationWithOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ReservationWithOrder.typeUrl, ReservationWithOrder);