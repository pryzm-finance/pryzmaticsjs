import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export enum OrderEventType {
  ORDER_EVENT_TYPE_UNSPECIFIED = 0,
  ORDER_EVENT_TYPE_SUBMITTED = 1,
  ORDER_EVENT_TYPE_CANCELED = 2,
  ORDER_EVENT_TYPE_FILLED = 3,
  ORDER_EVENT_TYPE_RESERVED = 4,
  ORDER_EVENT_TYPE_RESERVATION_FULFILLED = 5,
  ORDER_EVENT_TYPE_RESERVATION_EXPIRED = 6,
  ORDER_EVENT_TYPE_RESERVATION_ENABLED = 7,
  ORDER_EVENT_TYPE_RESERVATION_DISABLED = 8,
  UNRECOGNIZED = -1,
}
export const OrderEventTypeSDKType = OrderEventType;
export const OrderEventTypeAmino = OrderEventType;
export function orderEventTypeFromJSON(object: any): OrderEventType {
  switch (object) {
    case 0:
    case "ORDER_EVENT_TYPE_UNSPECIFIED":
      return OrderEventType.ORDER_EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "ORDER_EVENT_TYPE_SUBMITTED":
      return OrderEventType.ORDER_EVENT_TYPE_SUBMITTED;
    case 2:
    case "ORDER_EVENT_TYPE_CANCELED":
      return OrderEventType.ORDER_EVENT_TYPE_CANCELED;
    case 3:
    case "ORDER_EVENT_TYPE_FILLED":
      return OrderEventType.ORDER_EVENT_TYPE_FILLED;
    case 4:
    case "ORDER_EVENT_TYPE_RESERVED":
      return OrderEventType.ORDER_EVENT_TYPE_RESERVED;
    case 5:
    case "ORDER_EVENT_TYPE_RESERVATION_FULFILLED":
      return OrderEventType.ORDER_EVENT_TYPE_RESERVATION_FULFILLED;
    case 6:
    case "ORDER_EVENT_TYPE_RESERVATION_EXPIRED":
      return OrderEventType.ORDER_EVENT_TYPE_RESERVATION_EXPIRED;
    case 7:
    case "ORDER_EVENT_TYPE_RESERVATION_ENABLED":
      return OrderEventType.ORDER_EVENT_TYPE_RESERVATION_ENABLED;
    case 8:
    case "ORDER_EVENT_TYPE_RESERVATION_DISABLED":
      return OrderEventType.ORDER_EVENT_TYPE_RESERVATION_DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderEventType.UNRECOGNIZED;
  }
}
export function orderEventTypeToJSON(object: OrderEventType): string {
  switch (object) {
    case OrderEventType.ORDER_EVENT_TYPE_UNSPECIFIED:
      return "ORDER_EVENT_TYPE_UNSPECIFIED";
    case OrderEventType.ORDER_EVENT_TYPE_SUBMITTED:
      return "ORDER_EVENT_TYPE_SUBMITTED";
    case OrderEventType.ORDER_EVENT_TYPE_CANCELED:
      return "ORDER_EVENT_TYPE_CANCELED";
    case OrderEventType.ORDER_EVENT_TYPE_FILLED:
      return "ORDER_EVENT_TYPE_FILLED";
    case OrderEventType.ORDER_EVENT_TYPE_RESERVED:
      return "ORDER_EVENT_TYPE_RESERVED";
    case OrderEventType.ORDER_EVENT_TYPE_RESERVATION_FULFILLED:
      return "ORDER_EVENT_TYPE_RESERVATION_FULFILLED";
    case OrderEventType.ORDER_EVENT_TYPE_RESERVATION_EXPIRED:
      return "ORDER_EVENT_TYPE_RESERVATION_EXPIRED";
    case OrderEventType.ORDER_EVENT_TYPE_RESERVATION_ENABLED:
      return "ORDER_EVENT_TYPE_RESERVATION_ENABLED";
    case OrderEventType.ORDER_EVENT_TYPE_RESERVATION_DISABLED:
      return "ORDER_EVENT_TYPE_RESERVATION_DISABLED";
    case OrderEventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Pair {
  tokenIn: string;
  tokenOut: string;
  totalAmount: string;
  totalRemainingAmount: string;
  totalReservableRemainingAmount: string;
  totalCount: bigint;
  reservableCount: bigint;
  totalReserved: string;
  inTheMoneyVolume: string;
  minPrice: string;
  maxPrice: string;
  avgPrice: string;
}
export interface PairProtoMsg {
  typeUrl: "/pryzmatics.orderbook.Pair";
  value: Uint8Array;
}
export interface PairAmino {
  token_in?: string;
  token_out?: string;
  total_amount?: string;
  total_remaining_amount?: string;
  total_reservable_remaining_amount?: string;
  total_count?: string;
  reservable_count?: string;
  total_reserved?: string;
  in_the_money_volume?: string;
  min_price?: string;
  max_price?: string;
  avg_price?: string;
}
export interface PairAminoMsg {
  type: "/pryzmatics.orderbook.Pair";
  value: PairAmino;
}
export interface PairSDKType {
  token_in: string;
  token_out: string;
  total_amount: string;
  total_remaining_amount: string;
  total_reservable_remaining_amount: string;
  total_count: bigint;
  reservable_count: bigint;
  total_reserved: string;
  in_the_money_volume: string;
  min_price: string;
  max_price: string;
  avg_price: string;
}
export interface Order {
  id: bigint;
  owner: string;
  tokenIn: string;
  tokenOut: string;
  price: string;
  totalAmount: string;
  remainingAmount: string;
  reservationsAmount: string;
  reservationAllowed: boolean;
  live: boolean;
  creationTime: Timestamp;
  lastUpdateTime: Timestamp;
}
export interface OrderProtoMsg {
  typeUrl: "/pryzmatics.orderbook.Order";
  value: Uint8Array;
}
export interface OrderAmino {
  id?: string;
  owner?: string;
  token_in?: string;
  token_out?: string;
  price?: string;
  total_amount?: string;
  remaining_amount?: string;
  reservations_amount?: string;
  reservation_allowed?: boolean;
  live?: boolean;
  creation_time?: string;
  last_update_time?: string;
}
export interface OrderAminoMsg {
  type: "/pryzmatics.orderbook.Order";
  value: OrderAmino;
}
export interface OrderSDKType {
  id: bigint;
  owner: string;
  token_in: string;
  token_out: string;
  price: string;
  total_amount: string;
  remaining_amount: string;
  reservations_amount: string;
  reservation_allowed: boolean;
  live: boolean;
  creation_time: TimestampSDKType;
  last_update_time: TimestampSDKType;
}
export interface OrderEvent {
  id: bigint;
  orderId: bigint;
  orderOwner: string;
  time: Timestamp;
  eventType: OrderEventType;
  eventData: string;
}
export interface OrderEventProtoMsg {
  typeUrl: "/pryzmatics.orderbook.OrderEvent";
  value: Uint8Array;
}
export interface OrderEventAmino {
  id?: string;
  order_id?: string;
  order_owner?: string;
  time?: string;
  event_type?: OrderEventType;
  event_data?: string;
}
export interface OrderEventAminoMsg {
  type: "/pryzmatics.orderbook.OrderEvent";
  value: OrderEventAmino;
}
export interface OrderEventSDKType {
  id: bigint;
  order_id: bigint;
  order_owner: string;
  time: TimestampSDKType;
  event_type: OrderEventType;
  event_data: string;
}
export interface OrderSubmittedEventData {
  totalAmount: string;
  reservationAllowed: boolean;
}
export interface OrderSubmittedEventDataProtoMsg {
  typeUrl: "/pryzmatics.orderbook.OrderSubmittedEventData";
  value: Uint8Array;
}
export interface OrderSubmittedEventDataAmino {
  total_amount?: string;
  reservation_allowed?: boolean;
}
export interface OrderSubmittedEventDataAminoMsg {
  type: "/pryzmatics.orderbook.OrderSubmittedEventData";
  value: OrderSubmittedEventDataAmino;
}
export interface OrderSubmittedEventDataSDKType {
  total_amount: string;
  reservation_allowed: boolean;
}
export interface OrderCancelledEventData {
  cancelledAmount: string;
}
export interface OrderCancelledEventDataProtoMsg {
  typeUrl: "/pryzmatics.orderbook.OrderCancelledEventData";
  value: Uint8Array;
}
export interface OrderCancelledEventDataAmino {
  cancelled_amount?: string;
}
export interface OrderCancelledEventDataAminoMsg {
  type: "/pryzmatics.orderbook.OrderCancelledEventData";
  value: OrderCancelledEventDataAmino;
}
export interface OrderCancelledEventDataSDKType {
  cancelled_amount: string;
}
export interface OrderFilledEventData {
  filledAmount: string;
  receivedAmount: string;
  matchPrice: string;
  fee: Coin;
}
export interface OrderFilledEventDataProtoMsg {
  typeUrl: "/pryzmatics.orderbook.OrderFilledEventData";
  value: Uint8Array;
}
export interface OrderFilledEventDataAmino {
  filled_amount?: string;
  received_amount?: string;
  match_price?: string;
  fee?: CoinAmino;
}
export interface OrderFilledEventDataAminoMsg {
  type: "/pryzmatics.orderbook.OrderFilledEventData";
  value: OrderFilledEventDataAmino;
}
export interface OrderFilledEventDataSDKType {
  filled_amount: string;
  received_amount: string;
  match_price: string;
  fee: CoinSDKType;
}
export interface OrderReservedEventData {
  amount: string;
  price: string;
}
export interface OrderReservedEventDataProtoMsg {
  typeUrl: "/pryzmatics.orderbook.OrderReservedEventData";
  value: Uint8Array;
}
export interface OrderReservedEventDataAmino {
  amount?: string;
  price?: string;
}
export interface OrderReservedEventDataAminoMsg {
  type: "/pryzmatics.orderbook.OrderReservedEventData";
  value: OrderReservedEventDataAmino;
}
export interface OrderReservedEventDataSDKType {
  amount: string;
  price: string;
}
export interface OrderReservationFulfillEventData {
  reservationId: bigint;
  amount: string;
}
export interface OrderReservationFulfillEventDataProtoMsg {
  typeUrl: "/pryzmatics.orderbook.OrderReservationFulfillEventData";
  value: Uint8Array;
}
export interface OrderReservationFulfillEventDataAmino {
  reservation_id?: string;
  amount?: string;
}
export interface OrderReservationFulfillEventDataAminoMsg {
  type: "/pryzmatics.orderbook.OrderReservationFulfillEventData";
  value: OrderReservationFulfillEventDataAmino;
}
export interface OrderReservationFulfillEventDataSDKType {
  reservation_id: bigint;
  amount: string;
}
export interface OrderReservationExpiredEventData {
  reservationId: bigint;
  amount: string;
}
export interface OrderReservationExpiredEventDataProtoMsg {
  typeUrl: "/pryzmatics.orderbook.OrderReservationExpiredEventData";
  value: Uint8Array;
}
export interface OrderReservationExpiredEventDataAmino {
  reservation_id?: string;
  amount?: string;
}
export interface OrderReservationExpiredEventDataAminoMsg {
  type: "/pryzmatics.orderbook.OrderReservationExpiredEventData";
  value: OrderReservationExpiredEventDataAmino;
}
export interface OrderReservationExpiredEventDataSDKType {
  reservation_id: bigint;
  amount: string;
}
function createBasePair(): Pair {
  return {
    tokenIn: "",
    tokenOut: "",
    totalAmount: "",
    totalRemainingAmount: "",
    totalReservableRemainingAmount: "",
    totalCount: BigInt(0),
    reservableCount: BigInt(0),
    totalReserved: "",
    inTheMoneyVolume: "",
    minPrice: "",
    maxPrice: "",
    avgPrice: ""
  };
}
export const Pair = {
  typeUrl: "/pryzmatics.orderbook.Pair",
  is(o: any): o is Pair {
    return o && (o.$typeUrl === Pair.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.totalAmount === "string" && typeof o.totalRemainingAmount === "string" && typeof o.totalReservableRemainingAmount === "string" && typeof o.totalCount === "bigint" && typeof o.reservableCount === "bigint" && typeof o.totalReserved === "string" && typeof o.inTheMoneyVolume === "string" && typeof o.minPrice === "string" && typeof o.maxPrice === "string" && typeof o.avgPrice === "string");
  },
  isSDK(o: any): o is PairSDKType {
    return o && (o.$typeUrl === Pair.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.total_amount === "string" && typeof o.total_remaining_amount === "string" && typeof o.total_reservable_remaining_amount === "string" && typeof o.total_count === "bigint" && typeof o.reservable_count === "bigint" && typeof o.total_reserved === "string" && typeof o.in_the_money_volume === "string" && typeof o.min_price === "string" && typeof o.max_price === "string" && typeof o.avg_price === "string");
  },
  isAmino(o: any): o is PairAmino {
    return o && (o.$typeUrl === Pair.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.total_amount === "string" && typeof o.total_remaining_amount === "string" && typeof o.total_reservable_remaining_amount === "string" && typeof o.total_count === "bigint" && typeof o.reservable_count === "bigint" && typeof o.total_reserved === "string" && typeof o.in_the_money_volume === "string" && typeof o.min_price === "string" && typeof o.max_price === "string" && typeof o.avg_price === "string");
  },
  encode(message: Pair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.totalAmount !== "") {
      writer.uint32(26).string(message.totalAmount);
    }
    if (message.totalRemainingAmount !== "") {
      writer.uint32(34).string(message.totalRemainingAmount);
    }
    if (message.totalReservableRemainingAmount !== "") {
      writer.uint32(42).string(message.totalReservableRemainingAmount);
    }
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.totalCount);
    }
    if (message.reservableCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.reservableCount);
    }
    if (message.totalReserved !== "") {
      writer.uint32(66).string(message.totalReserved);
    }
    if (message.inTheMoneyVolume !== "") {
      writer.uint32(74).string(message.inTheMoneyVolume);
    }
    if (message.minPrice !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.minPrice, 18).atomics);
    }
    if (message.maxPrice !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.maxPrice, 18).atomics);
    }
    if (message.avgPrice !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.avgPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Pair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();
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
          message.totalAmount = reader.string();
          break;
        case 4:
          message.totalRemainingAmount = reader.string();
          break;
        case 5:
          message.totalReservableRemainingAmount = reader.string();
          break;
        case 6:
          message.totalCount = reader.uint64();
          break;
        case 7:
          message.reservableCount = reader.uint64();
          break;
        case 8:
          message.totalReserved = reader.string();
          break;
        case 9:
          message.inTheMoneyVolume = reader.string();
          break;
        case 10:
          message.minPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.maxPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.avgPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pair {
    return {
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      totalRemainingAmount: isSet(object.totalRemainingAmount) ? String(object.totalRemainingAmount) : "",
      totalReservableRemainingAmount: isSet(object.totalReservableRemainingAmount) ? String(object.totalReservableRemainingAmount) : "",
      totalCount: isSet(object.totalCount) ? BigInt(object.totalCount.toString()) : BigInt(0),
      reservableCount: isSet(object.reservableCount) ? BigInt(object.reservableCount.toString()) : BigInt(0),
      totalReserved: isSet(object.totalReserved) ? String(object.totalReserved) : "",
      inTheMoneyVolume: isSet(object.inTheMoneyVolume) ? String(object.inTheMoneyVolume) : "",
      minPrice: isSet(object.minPrice) ? String(object.minPrice) : "",
      maxPrice: isSet(object.maxPrice) ? String(object.maxPrice) : "",
      avgPrice: isSet(object.avgPrice) ? String(object.avgPrice) : ""
    };
  },
  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.totalRemainingAmount !== undefined && (obj.totalRemainingAmount = message.totalRemainingAmount);
    message.totalReservableRemainingAmount !== undefined && (obj.totalReservableRemainingAmount = message.totalReservableRemainingAmount);
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || BigInt(0)).toString());
    message.reservableCount !== undefined && (obj.reservableCount = (message.reservableCount || BigInt(0)).toString());
    message.totalReserved !== undefined && (obj.totalReserved = message.totalReserved);
    message.inTheMoneyVolume !== undefined && (obj.inTheMoneyVolume = message.inTheMoneyVolume);
    message.minPrice !== undefined && (obj.minPrice = message.minPrice);
    message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
    message.avgPrice !== undefined && (obj.avgPrice = message.avgPrice);
    return obj;
  },
  fromPartial(object: Partial<Pair>): Pair {
    const message = createBasePair();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.totalRemainingAmount = object.totalRemainingAmount ?? "";
    message.totalReservableRemainingAmount = object.totalReservableRemainingAmount ?? "";
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    message.reservableCount = object.reservableCount !== undefined && object.reservableCount !== null ? BigInt(object.reservableCount.toString()) : BigInt(0);
    message.totalReserved = object.totalReserved ?? "";
    message.inTheMoneyVolume = object.inTheMoneyVolume ?? "";
    message.minPrice = object.minPrice ?? "";
    message.maxPrice = object.maxPrice ?? "";
    message.avgPrice = object.avgPrice ?? "";
    return message;
  },
  fromAmino(object: PairAmino): Pair {
    const message = createBasePair();
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.total_remaining_amount !== undefined && object.total_remaining_amount !== null) {
      message.totalRemainingAmount = object.total_remaining_amount;
    }
    if (object.total_reservable_remaining_amount !== undefined && object.total_reservable_remaining_amount !== null) {
      message.totalReservableRemainingAmount = object.total_reservable_remaining_amount;
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    if (object.reservable_count !== undefined && object.reservable_count !== null) {
      message.reservableCount = BigInt(object.reservable_count);
    }
    if (object.total_reserved !== undefined && object.total_reserved !== null) {
      message.totalReserved = object.total_reserved;
    }
    if (object.in_the_money_volume !== undefined && object.in_the_money_volume !== null) {
      message.inTheMoneyVolume = object.in_the_money_volume;
    }
    if (object.min_price !== undefined && object.min_price !== null) {
      message.minPrice = object.min_price;
    }
    if (object.max_price !== undefined && object.max_price !== null) {
      message.maxPrice = object.max_price;
    }
    if (object.avg_price !== undefined && object.avg_price !== null) {
      message.avgPrice = object.avg_price;
    }
    return message;
  },
  toAmino(message: Pair, useInterfaces: boolean = true): PairAmino {
    const obj: any = {};
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.total_remaining_amount = message.totalRemainingAmount === "" ? undefined : message.totalRemainingAmount;
    obj.total_reservable_remaining_amount = message.totalReservableRemainingAmount === "" ? undefined : message.totalReservableRemainingAmount;
    obj.total_count = message.totalCount ? message.totalCount.toString() : undefined;
    obj.reservable_count = message.reservableCount ? message.reservableCount.toString() : undefined;
    obj.total_reserved = message.totalReserved === "" ? undefined : message.totalReserved;
    obj.in_the_money_volume = message.inTheMoneyVolume === "" ? undefined : message.inTheMoneyVolume;
    obj.min_price = padDecimal(message.minPrice) === "" ? undefined : padDecimal(message.minPrice);
    obj.max_price = padDecimal(message.maxPrice) === "" ? undefined : padDecimal(message.maxPrice);
    obj.avg_price = padDecimal(message.avgPrice) === "" ? undefined : padDecimal(message.avgPrice);
    return obj;
  },
  fromAminoMsg(object: PairAminoMsg): Pair {
    return Pair.fromAmino(object.value);
  },
  fromProtoMsg(message: PairProtoMsg, useInterfaces: boolean = true): Pair {
    return Pair.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Pair): Uint8Array {
    return Pair.encode(message).finish();
  },
  toProtoMsg(message: Pair): PairProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.Pair",
      value: Pair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pair.typeUrl, Pair);
function createBaseOrder(): Order {
  return {
    id: BigInt(0),
    owner: "",
    tokenIn: "",
    tokenOut: "",
    price: "",
    totalAmount: "",
    remainingAmount: "",
    reservationsAmount: "",
    reservationAllowed: false,
    live: false,
    creationTime: Timestamp.fromPartial({}),
    lastUpdateTime: Timestamp.fromPartial({})
  };
}
export const Order = {
  typeUrl: "/pryzmatics.orderbook.Order",
  is(o: any): o is Order {
    return o && (o.$typeUrl === Order.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.price === "string" && typeof o.totalAmount === "string" && typeof o.remainingAmount === "string" && typeof o.reservationsAmount === "string" && typeof o.reservationAllowed === "boolean" && typeof o.live === "boolean" && Timestamp.is(o.creationTime) && Timestamp.is(o.lastUpdateTime));
  },
  isSDK(o: any): o is OrderSDKType {
    return o && (o.$typeUrl === Order.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.price === "string" && typeof o.total_amount === "string" && typeof o.remaining_amount === "string" && typeof o.reservations_amount === "string" && typeof o.reservation_allowed === "boolean" && typeof o.live === "boolean" && Timestamp.isSDK(o.creation_time) && Timestamp.isSDK(o.last_update_time));
  },
  isAmino(o: any): o is OrderAmino {
    return o && (o.$typeUrl === Order.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.price === "string" && typeof o.total_amount === "string" && typeof o.remaining_amount === "string" && typeof o.reservations_amount === "string" && typeof o.reservation_allowed === "boolean" && typeof o.live === "boolean" && Timestamp.isAmino(o.creation_time) && Timestamp.isAmino(o.last_update_time));
  },
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.totalAmount !== "") {
      writer.uint32(50).string(message.totalAmount);
    }
    if (message.remainingAmount !== "") {
      writer.uint32(58).string(message.remainingAmount);
    }
    if (message.reservationsAmount !== "") {
      writer.uint32(66).string(message.reservationsAmount);
    }
    if (message.reservationAllowed === true) {
      writer.uint32(72).bool(message.reservationAllowed);
    }
    if (message.live === true) {
      writer.uint32(80).bool(message.live);
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(90).fork()).ldelim();
    }
    if (message.lastUpdateTime !== undefined) {
      Timestamp.encode(message.lastUpdateTime, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Order {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
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
        case 6:
          message.totalAmount = reader.string();
          break;
        case 7:
          message.remainingAmount = reader.string();
          break;
        case 8:
          message.reservationsAmount = reader.string();
          break;
        case 9:
          message.reservationAllowed = reader.bool();
          break;
        case 10:
          message.live = reader.bool();
          break;
        case 11:
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 12:
          message.lastUpdateTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      owner: isSet(object.owner) ? String(object.owner) : "",
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      price: isSet(object.price) ? String(object.price) : "",
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      remainingAmount: isSet(object.remainingAmount) ? String(object.remainingAmount) : "",
      reservationsAmount: isSet(object.reservationsAmount) ? String(object.reservationsAmount) : "",
      reservationAllowed: isSet(object.reservationAllowed) ? Boolean(object.reservationAllowed) : false,
      live: isSet(object.live) ? Boolean(object.live) : false,
      creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
      lastUpdateTime: isSet(object.lastUpdateTime) ? fromJsonTimestamp(object.lastUpdateTime) : undefined
    };
  },
  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.price !== undefined && (obj.price = message.price);
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.remainingAmount !== undefined && (obj.remainingAmount = message.remainingAmount);
    message.reservationsAmount !== undefined && (obj.reservationsAmount = message.reservationsAmount);
    message.reservationAllowed !== undefined && (obj.reservationAllowed = message.reservationAllowed);
    message.live !== undefined && (obj.live = message.live);
    message.creationTime !== undefined && (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    message.lastUpdateTime !== undefined && (obj.lastUpdateTime = fromTimestamp(message.lastUpdateTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.price = object.price ?? "";
    message.totalAmount = object.totalAmount ?? "";
    message.remainingAmount = object.remainingAmount ?? "";
    message.reservationsAmount = object.reservationsAmount ?? "";
    message.reservationAllowed = object.reservationAllowed ?? false;
    message.live = object.live ?? false;
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? Timestamp.fromPartial(object.creationTime) : undefined;
    message.lastUpdateTime = object.lastUpdateTime !== undefined && object.lastUpdateTime !== null ? Timestamp.fromPartial(object.lastUpdateTime) : undefined;
    return message;
  },
  fromAmino(object: OrderAmino): Order {
    const message = createBaseOrder();
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
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.remaining_amount !== undefined && object.remaining_amount !== null) {
      message.remainingAmount = object.remaining_amount;
    }
    if (object.reservations_amount !== undefined && object.reservations_amount !== null) {
      message.reservationsAmount = object.reservations_amount;
    }
    if (object.reservation_allowed !== undefined && object.reservation_allowed !== null) {
      message.reservationAllowed = object.reservation_allowed;
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
  toAmino(message: Order, useInterfaces: boolean = true): OrderAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.price = padDecimal(message.price) === "" ? undefined : padDecimal(message.price);
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.remaining_amount = message.remainingAmount === "" ? undefined : message.remainingAmount;
    obj.reservations_amount = message.reservationsAmount === "" ? undefined : message.reservationsAmount;
    obj.reservation_allowed = message.reservationAllowed === false ? undefined : message.reservationAllowed;
    obj.live = message.live === false ? undefined : message.live;
    obj.creation_time = message.creationTime ? Timestamp.toAmino(message.creationTime, useInterfaces) : undefined;
    obj.last_update_time = message.lastUpdateTime ? Timestamp.toAmino(message.lastUpdateTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderAminoMsg): Order {
    return Order.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderProtoMsg, useInterfaces: boolean = true): Order {
    return Order.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Order): Uint8Array {
    return Order.encode(message).finish();
  },
  toProtoMsg(message: Order): OrderProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.Order",
      value: Order.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Order.typeUrl, Order);
function createBaseOrderEvent(): OrderEvent {
  return {
    id: BigInt(0),
    orderId: BigInt(0),
    orderOwner: "",
    time: Timestamp.fromPartial({}),
    eventType: 0,
    eventData: ""
  };
}
export const OrderEvent = {
  typeUrl: "/pryzmatics.orderbook.OrderEvent",
  is(o: any): o is OrderEvent {
    return o && (o.$typeUrl === OrderEvent.typeUrl || typeof o.id === "bigint" && typeof o.orderId === "bigint" && typeof o.orderOwner === "string" && Timestamp.is(o.time) && isSet(o.eventType) && typeof o.eventData === "string");
  },
  isSDK(o: any): o is OrderEventSDKType {
    return o && (o.$typeUrl === OrderEvent.typeUrl || typeof o.id === "bigint" && typeof o.order_id === "bigint" && typeof o.order_owner === "string" && Timestamp.isSDK(o.time) && isSet(o.event_type) && typeof o.event_data === "string");
  },
  isAmino(o: any): o is OrderEventAmino {
    return o && (o.$typeUrl === OrderEvent.typeUrl || typeof o.id === "bigint" && typeof o.order_id === "bigint" && typeof o.order_owner === "string" && Timestamp.isAmino(o.time) && isSet(o.event_type) && typeof o.event_data === "string");
  },
  encode(message: OrderEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    if (message.orderOwner !== "") {
      writer.uint32(26).string(message.orderOwner);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.eventType !== 0) {
      writer.uint32(40).int32(message.eventType);
    }
    if (message.eventData !== "") {
      writer.uint32(50).string(message.eventData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.orderId = reader.uint64();
          break;
        case 3:
          message.orderOwner = reader.string();
          break;
        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.eventType = (reader.int32() as any);
          break;
        case 6:
          message.eventData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderEvent {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      orderOwner: isSet(object.orderOwner) ? String(object.orderOwner) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      eventType: isSet(object.eventType) ? orderEventTypeFromJSON(object.eventType) : -1,
      eventData: isSet(object.eventData) ? String(object.eventData) : ""
    };
  },
  toJSON(message: OrderEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.orderOwner !== undefined && (obj.orderOwner = message.orderOwner);
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.eventType !== undefined && (obj.eventType = orderEventTypeToJSON(message.eventType));
    message.eventData !== undefined && (obj.eventData = message.eventData);
    return obj;
  },
  fromPartial(object: Partial<OrderEvent>): OrderEvent {
    const message = createBaseOrderEvent();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.orderOwner = object.orderOwner ?? "";
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.eventType = object.eventType ?? 0;
    message.eventData = object.eventData ?? "";
    return message;
  },
  fromAmino(object: OrderEventAmino): OrderEvent {
    const message = createBaseOrderEvent();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.order_owner !== undefined && object.order_owner !== null) {
      message.orderOwner = object.order_owner;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.event_type !== undefined && object.event_type !== null) {
      message.eventType = object.event_type;
    }
    if (object.event_data !== undefined && object.event_data !== null) {
      message.eventData = object.event_data;
    }
    return message;
  },
  toAmino(message: OrderEvent, useInterfaces: boolean = true): OrderEventAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.order_owner = message.orderOwner === "" ? undefined : message.orderOwner;
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.event_type = message.eventType === 0 ? undefined : message.eventType;
    obj.event_data = message.eventData === "" ? undefined : message.eventData;
    return obj;
  },
  fromAminoMsg(object: OrderEventAminoMsg): OrderEvent {
    return OrderEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderEventProtoMsg, useInterfaces: boolean = true): OrderEvent {
    return OrderEvent.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderEvent): Uint8Array {
    return OrderEvent.encode(message).finish();
  },
  toProtoMsg(message: OrderEvent): OrderEventProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.OrderEvent",
      value: OrderEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderEvent.typeUrl, OrderEvent);
function createBaseOrderSubmittedEventData(): OrderSubmittedEventData {
  return {
    totalAmount: "",
    reservationAllowed: false
  };
}
export const OrderSubmittedEventData = {
  typeUrl: "/pryzmatics.orderbook.OrderSubmittedEventData",
  is(o: any): o is OrderSubmittedEventData {
    return o && (o.$typeUrl === OrderSubmittedEventData.typeUrl || typeof o.totalAmount === "string" && typeof o.reservationAllowed === "boolean");
  },
  isSDK(o: any): o is OrderSubmittedEventDataSDKType {
    return o && (o.$typeUrl === OrderSubmittedEventData.typeUrl || typeof o.total_amount === "string" && typeof o.reservation_allowed === "boolean");
  },
  isAmino(o: any): o is OrderSubmittedEventDataAmino {
    return o && (o.$typeUrl === OrderSubmittedEventData.typeUrl || typeof o.total_amount === "string" && typeof o.reservation_allowed === "boolean");
  },
  encode(message: OrderSubmittedEventData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalAmount !== "") {
      writer.uint32(10).string(message.totalAmount);
    }
    if (message.reservationAllowed === true) {
      writer.uint32(16).bool(message.reservationAllowed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderSubmittedEventData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderSubmittedEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAmount = reader.string();
          break;
        case 2:
          message.reservationAllowed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderSubmittedEventData {
    return {
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      reservationAllowed: isSet(object.reservationAllowed) ? Boolean(object.reservationAllowed) : false
    };
  },
  toJSON(message: OrderSubmittedEventData): unknown {
    const obj: any = {};
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.reservationAllowed !== undefined && (obj.reservationAllowed = message.reservationAllowed);
    return obj;
  },
  fromPartial(object: Partial<OrderSubmittedEventData>): OrderSubmittedEventData {
    const message = createBaseOrderSubmittedEventData();
    message.totalAmount = object.totalAmount ?? "";
    message.reservationAllowed = object.reservationAllowed ?? false;
    return message;
  },
  fromAmino(object: OrderSubmittedEventDataAmino): OrderSubmittedEventData {
    const message = createBaseOrderSubmittedEventData();
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.reservation_allowed !== undefined && object.reservation_allowed !== null) {
      message.reservationAllowed = object.reservation_allowed;
    }
    return message;
  },
  toAmino(message: OrderSubmittedEventData, useInterfaces: boolean = true): OrderSubmittedEventDataAmino {
    const obj: any = {};
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.reservation_allowed = message.reservationAllowed === false ? undefined : message.reservationAllowed;
    return obj;
  },
  fromAminoMsg(object: OrderSubmittedEventDataAminoMsg): OrderSubmittedEventData {
    return OrderSubmittedEventData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderSubmittedEventDataProtoMsg, useInterfaces: boolean = true): OrderSubmittedEventData {
    return OrderSubmittedEventData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderSubmittedEventData): Uint8Array {
    return OrderSubmittedEventData.encode(message).finish();
  },
  toProtoMsg(message: OrderSubmittedEventData): OrderSubmittedEventDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.OrderSubmittedEventData",
      value: OrderSubmittedEventData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderSubmittedEventData.typeUrl, OrderSubmittedEventData);
function createBaseOrderCancelledEventData(): OrderCancelledEventData {
  return {
    cancelledAmount: ""
  };
}
export const OrderCancelledEventData = {
  typeUrl: "/pryzmatics.orderbook.OrderCancelledEventData",
  is(o: any): o is OrderCancelledEventData {
    return o && (o.$typeUrl === OrderCancelledEventData.typeUrl || typeof o.cancelledAmount === "string");
  },
  isSDK(o: any): o is OrderCancelledEventDataSDKType {
    return o && (o.$typeUrl === OrderCancelledEventData.typeUrl || typeof o.cancelled_amount === "string");
  },
  isAmino(o: any): o is OrderCancelledEventDataAmino {
    return o && (o.$typeUrl === OrderCancelledEventData.typeUrl || typeof o.cancelled_amount === "string");
  },
  encode(message: OrderCancelledEventData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cancelledAmount !== "") {
      writer.uint32(10).string(message.cancelledAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderCancelledEventData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCancelledEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cancelledAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderCancelledEventData {
    return {
      cancelledAmount: isSet(object.cancelledAmount) ? String(object.cancelledAmount) : ""
    };
  },
  toJSON(message: OrderCancelledEventData): unknown {
    const obj: any = {};
    message.cancelledAmount !== undefined && (obj.cancelledAmount = message.cancelledAmount);
    return obj;
  },
  fromPartial(object: Partial<OrderCancelledEventData>): OrderCancelledEventData {
    const message = createBaseOrderCancelledEventData();
    message.cancelledAmount = object.cancelledAmount ?? "";
    return message;
  },
  fromAmino(object: OrderCancelledEventDataAmino): OrderCancelledEventData {
    const message = createBaseOrderCancelledEventData();
    if (object.cancelled_amount !== undefined && object.cancelled_amount !== null) {
      message.cancelledAmount = object.cancelled_amount;
    }
    return message;
  },
  toAmino(message: OrderCancelledEventData, useInterfaces: boolean = true): OrderCancelledEventDataAmino {
    const obj: any = {};
    obj.cancelled_amount = message.cancelledAmount === "" ? undefined : message.cancelledAmount;
    return obj;
  },
  fromAminoMsg(object: OrderCancelledEventDataAminoMsg): OrderCancelledEventData {
    return OrderCancelledEventData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderCancelledEventDataProtoMsg, useInterfaces: boolean = true): OrderCancelledEventData {
    return OrderCancelledEventData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderCancelledEventData): Uint8Array {
    return OrderCancelledEventData.encode(message).finish();
  },
  toProtoMsg(message: OrderCancelledEventData): OrderCancelledEventDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.OrderCancelledEventData",
      value: OrderCancelledEventData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderCancelledEventData.typeUrl, OrderCancelledEventData);
function createBaseOrderFilledEventData(): OrderFilledEventData {
  return {
    filledAmount: "",
    receivedAmount: "",
    matchPrice: "",
    fee: Coin.fromPartial({})
  };
}
export const OrderFilledEventData = {
  typeUrl: "/pryzmatics.orderbook.OrderFilledEventData",
  is(o: any): o is OrderFilledEventData {
    return o && (o.$typeUrl === OrderFilledEventData.typeUrl || typeof o.filledAmount === "string" && typeof o.receivedAmount === "string" && typeof o.matchPrice === "string" && Coin.is(o.fee));
  },
  isSDK(o: any): o is OrderFilledEventDataSDKType {
    return o && (o.$typeUrl === OrderFilledEventData.typeUrl || typeof o.filled_amount === "string" && typeof o.received_amount === "string" && typeof o.match_price === "string" && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is OrderFilledEventDataAmino {
    return o && (o.$typeUrl === OrderFilledEventData.typeUrl || typeof o.filled_amount === "string" && typeof o.received_amount === "string" && typeof o.match_price === "string" && Coin.isAmino(o.fee));
  },
  encode(message: OrderFilledEventData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filledAmount !== "") {
      writer.uint32(10).string(message.filledAmount);
    }
    if (message.receivedAmount !== "") {
      writer.uint32(18).string(message.receivedAmount);
    }
    if (message.matchPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.matchPrice, 18).atomics);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderFilledEventData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderFilledEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filledAmount = reader.string();
          break;
        case 2:
          message.receivedAmount = reader.string();
          break;
        case 3:
          message.matchPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderFilledEventData {
    return {
      filledAmount: isSet(object.filledAmount) ? String(object.filledAmount) : "",
      receivedAmount: isSet(object.receivedAmount) ? String(object.receivedAmount) : "",
      matchPrice: isSet(object.matchPrice) ? String(object.matchPrice) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: OrderFilledEventData): unknown {
    const obj: any = {};
    message.filledAmount !== undefined && (obj.filledAmount = message.filledAmount);
    message.receivedAmount !== undefined && (obj.receivedAmount = message.receivedAmount);
    message.matchPrice !== undefined && (obj.matchPrice = message.matchPrice);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OrderFilledEventData>): OrderFilledEventData {
    const message = createBaseOrderFilledEventData();
    message.filledAmount = object.filledAmount ?? "";
    message.receivedAmount = object.receivedAmount ?? "";
    message.matchPrice = object.matchPrice ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: OrderFilledEventDataAmino): OrderFilledEventData {
    const message = createBaseOrderFilledEventData();
    if (object.filled_amount !== undefined && object.filled_amount !== null) {
      message.filledAmount = object.filled_amount;
    }
    if (object.received_amount !== undefined && object.received_amount !== null) {
      message.receivedAmount = object.received_amount;
    }
    if (object.match_price !== undefined && object.match_price !== null) {
      message.matchPrice = object.match_price;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: OrderFilledEventData, useInterfaces: boolean = true): OrderFilledEventDataAmino {
    const obj: any = {};
    obj.filled_amount = message.filledAmount === "" ? undefined : message.filledAmount;
    obj.received_amount = message.receivedAmount === "" ? undefined : message.receivedAmount;
    obj.match_price = padDecimal(message.matchPrice) === "" ? undefined : padDecimal(message.matchPrice);
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderFilledEventDataAminoMsg): OrderFilledEventData {
    return OrderFilledEventData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderFilledEventDataProtoMsg, useInterfaces: boolean = true): OrderFilledEventData {
    return OrderFilledEventData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderFilledEventData): Uint8Array {
    return OrderFilledEventData.encode(message).finish();
  },
  toProtoMsg(message: OrderFilledEventData): OrderFilledEventDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.OrderFilledEventData",
      value: OrderFilledEventData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderFilledEventData.typeUrl, OrderFilledEventData);
function createBaseOrderReservedEventData(): OrderReservedEventData {
  return {
    amount: "",
    price: ""
  };
}
export const OrderReservedEventData = {
  typeUrl: "/pryzmatics.orderbook.OrderReservedEventData",
  is(o: any): o is OrderReservedEventData {
    return o && (o.$typeUrl === OrderReservedEventData.typeUrl || typeof o.amount === "string" && typeof o.price === "string");
  },
  isSDK(o: any): o is OrderReservedEventDataSDKType {
    return o && (o.$typeUrl === OrderReservedEventData.typeUrl || typeof o.amount === "string" && typeof o.price === "string");
  },
  isAmino(o: any): o is OrderReservedEventDataAmino {
    return o && (o.$typeUrl === OrderReservedEventData.typeUrl || typeof o.amount === "string" && typeof o.price === "string");
  },
  encode(message: OrderReservedEventData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.price !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderReservedEventData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderReservedEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderReservedEventData {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      price: isSet(object.price) ? String(object.price) : ""
    };
  },
  toJSON(message: OrderReservedEventData): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },
  fromPartial(object: Partial<OrderReservedEventData>): OrderReservedEventData {
    const message = createBaseOrderReservedEventData();
    message.amount = object.amount ?? "";
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: OrderReservedEventDataAmino): OrderReservedEventData {
    const message = createBaseOrderReservedEventData();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: OrderReservedEventData, useInterfaces: boolean = true): OrderReservedEventDataAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.price = padDecimal(message.price) === "" ? undefined : padDecimal(message.price);
    return obj;
  },
  fromAminoMsg(object: OrderReservedEventDataAminoMsg): OrderReservedEventData {
    return OrderReservedEventData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderReservedEventDataProtoMsg, useInterfaces: boolean = true): OrderReservedEventData {
    return OrderReservedEventData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderReservedEventData): Uint8Array {
    return OrderReservedEventData.encode(message).finish();
  },
  toProtoMsg(message: OrderReservedEventData): OrderReservedEventDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.OrderReservedEventData",
      value: OrderReservedEventData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderReservedEventData.typeUrl, OrderReservedEventData);
function createBaseOrderReservationFulfillEventData(): OrderReservationFulfillEventData {
  return {
    reservationId: BigInt(0),
    amount: ""
  };
}
export const OrderReservationFulfillEventData = {
  typeUrl: "/pryzmatics.orderbook.OrderReservationFulfillEventData",
  is(o: any): o is OrderReservationFulfillEventData {
    return o && (o.$typeUrl === OrderReservationFulfillEventData.typeUrl || typeof o.reservationId === "bigint" && typeof o.amount === "string");
  },
  isSDK(o: any): o is OrderReservationFulfillEventDataSDKType {
    return o && (o.$typeUrl === OrderReservationFulfillEventData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.amount === "string");
  },
  isAmino(o: any): o is OrderReservationFulfillEventDataAmino {
    return o && (o.$typeUrl === OrderReservationFulfillEventData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.amount === "string");
  },
  encode(message: OrderReservationFulfillEventData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reservationId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderReservationFulfillEventData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderReservationFulfillEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationId = reader.uint64();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderReservationFulfillEventData {
    return {
      reservationId: isSet(object.reservationId) ? BigInt(object.reservationId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: OrderReservationFulfillEventData): unknown {
    const obj: any = {};
    message.reservationId !== undefined && (obj.reservationId = (message.reservationId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<OrderReservationFulfillEventData>): OrderReservationFulfillEventData {
    const message = createBaseOrderReservationFulfillEventData();
    message.reservationId = object.reservationId !== undefined && object.reservationId !== null ? BigInt(object.reservationId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: OrderReservationFulfillEventDataAmino): OrderReservationFulfillEventData {
    const message = createBaseOrderReservationFulfillEventData();
    if (object.reservation_id !== undefined && object.reservation_id !== null) {
      message.reservationId = BigInt(object.reservation_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: OrderReservationFulfillEventData, useInterfaces: boolean = true): OrderReservationFulfillEventDataAmino {
    const obj: any = {};
    obj.reservation_id = message.reservationId ? message.reservationId.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: OrderReservationFulfillEventDataAminoMsg): OrderReservationFulfillEventData {
    return OrderReservationFulfillEventData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderReservationFulfillEventDataProtoMsg, useInterfaces: boolean = true): OrderReservationFulfillEventData {
    return OrderReservationFulfillEventData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderReservationFulfillEventData): Uint8Array {
    return OrderReservationFulfillEventData.encode(message).finish();
  },
  toProtoMsg(message: OrderReservationFulfillEventData): OrderReservationFulfillEventDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.OrderReservationFulfillEventData",
      value: OrderReservationFulfillEventData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderReservationFulfillEventData.typeUrl, OrderReservationFulfillEventData);
function createBaseOrderReservationExpiredEventData(): OrderReservationExpiredEventData {
  return {
    reservationId: BigInt(0),
    amount: ""
  };
}
export const OrderReservationExpiredEventData = {
  typeUrl: "/pryzmatics.orderbook.OrderReservationExpiredEventData",
  is(o: any): o is OrderReservationExpiredEventData {
    return o && (o.$typeUrl === OrderReservationExpiredEventData.typeUrl || typeof o.reservationId === "bigint" && typeof o.amount === "string");
  },
  isSDK(o: any): o is OrderReservationExpiredEventDataSDKType {
    return o && (o.$typeUrl === OrderReservationExpiredEventData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.amount === "string");
  },
  isAmino(o: any): o is OrderReservationExpiredEventDataAmino {
    return o && (o.$typeUrl === OrderReservationExpiredEventData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.amount === "string");
  },
  encode(message: OrderReservationExpiredEventData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reservationId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderReservationExpiredEventData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderReservationExpiredEventData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationId = reader.uint64();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderReservationExpiredEventData {
    return {
      reservationId: isSet(object.reservationId) ? BigInt(object.reservationId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  toJSON(message: OrderReservationExpiredEventData): unknown {
    const obj: any = {};
    message.reservationId !== undefined && (obj.reservationId = (message.reservationId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial(object: Partial<OrderReservationExpiredEventData>): OrderReservationExpiredEventData {
    const message = createBaseOrderReservationExpiredEventData();
    message.reservationId = object.reservationId !== undefined && object.reservationId !== null ? BigInt(object.reservationId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: OrderReservationExpiredEventDataAmino): OrderReservationExpiredEventData {
    const message = createBaseOrderReservationExpiredEventData();
    if (object.reservation_id !== undefined && object.reservation_id !== null) {
      message.reservationId = BigInt(object.reservation_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: OrderReservationExpiredEventData, useInterfaces: boolean = true): OrderReservationExpiredEventDataAmino {
    const obj: any = {};
    obj.reservation_id = message.reservationId ? message.reservationId.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: OrderReservationExpiredEventDataAminoMsg): OrderReservationExpiredEventData {
    return OrderReservationExpiredEventData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderReservationExpiredEventDataProtoMsg, useInterfaces: boolean = true): OrderReservationExpiredEventData {
    return OrderReservationExpiredEventData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderReservationExpiredEventData): Uint8Array {
    return OrderReservationExpiredEventData.encode(message).finish();
  },
  toProtoMsg(message: OrderReservationExpiredEventData): OrderReservationExpiredEventDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.orderbook.OrderReservationExpiredEventData",
      value: OrderReservationExpiredEventData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderReservationExpiredEventData.typeUrl, OrderReservationExpiredEventData);