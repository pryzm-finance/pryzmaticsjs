import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Order {
  id: bigint;
  owner: string;
  tokenIn: string;
  tokenOut: string;
  price: string;
  creationTime: Timestamp;
  expirationTime?: Timestamp;
  totalAmount: string;
  remainingAmount: string;
  reservedAmount: string;
  reservationsCount: bigint;
  minFillRatio: string;
  reservationAllowed: boolean;
  reservationPeriodSeconds: bigint;
  reservationDepositDenom: string;
  reservationDepositAmount: string;
  minReservationDepositAmount: string;
  makerFee: string;
  live: boolean;
  lastUpdateTime: Timestamp;
}
export interface OrderProtoMsg {
  typeUrl: "/pryzmatics.seal.Order";
  value: Uint8Array;
}
export interface OrderAmino {
  id?: string;
  owner?: string;
  token_in?: string;
  token_out?: string;
  price?: string;
  creation_time?: string;
  expiration_time?: string;
  total_amount?: string;
  remaining_amount?: string;
  reserved_amount?: string;
  reservations_count?: string;
  min_fill_ratio?: string;
  reservation_allowed?: boolean;
  reservation_period_seconds?: string;
  reservation_deposit_denom?: string;
  reservation_deposit_amount?: string;
  min_reservation_deposit_amount?: string;
  maker_fee?: string;
  live?: boolean;
  last_update_time?: string;
}
export interface OrderAminoMsg {
  type: "/pryzmatics.seal.Order";
  value: OrderAmino;
}
export interface OrderSDKType {
  id: bigint;
  owner: string;
  token_in: string;
  token_out: string;
  price: string;
  creation_time: TimestampSDKType;
  expiration_time?: TimestampSDKType;
  total_amount: string;
  remaining_amount: string;
  reserved_amount: string;
  reservations_count: bigint;
  min_fill_ratio: string;
  reservation_allowed: boolean;
  reservation_period_seconds: bigint;
  reservation_deposit_denom: string;
  reservation_deposit_amount: string;
  min_reservation_deposit_amount: string;
  maker_fee: string;
  live: boolean;
  last_update_time: TimestampSDKType;
}
export interface OrderInfo {
  order: Order;
  tokenInPrice?: string;
  tokenInPriceUpdateTime?: Timestamp;
  tokenOutPrice?: string;
  tokenOutPriceUpdateTime?: Timestamp;
  priceMargin?: string;
}
export interface OrderInfoProtoMsg {
  typeUrl: "/pryzmatics.seal.OrderInfo";
  value: Uint8Array;
}
export interface OrderInfoAmino {
  order?: OrderAmino;
  token_in_price?: string;
  token_in_price_update_time?: string;
  token_out_price?: string;
  token_out_price_update_time?: string;
  price_margin?: string;
}
export interface OrderInfoAminoMsg {
  type: "/pryzmatics.seal.OrderInfo";
  value: OrderInfoAmino;
}
export interface OrderInfoSDKType {
  order: OrderSDKType;
  token_in_price?: string;
  token_in_price_update_time?: TimestampSDKType;
  token_out_price?: string;
  token_out_price_update_time?: TimestampSDKType;
  price_margin?: string;
}
function createBaseOrder(): Order {
  return {
    id: BigInt(0),
    owner: "",
    tokenIn: "",
    tokenOut: "",
    price: "",
    creationTime: Timestamp.fromPartial({}),
    expirationTime: undefined,
    totalAmount: "",
    remainingAmount: "",
    reservedAmount: "",
    reservationsCount: BigInt(0),
    minFillRatio: "",
    reservationAllowed: false,
    reservationPeriodSeconds: BigInt(0),
    reservationDepositDenom: "",
    reservationDepositAmount: "",
    minReservationDepositAmount: "",
    makerFee: "",
    live: false,
    lastUpdateTime: Timestamp.fromPartial({})
  };
}
export const Order = {
  typeUrl: "/pryzmatics.seal.Order",
  is(o: any): o is Order {
    return o && (o.$typeUrl === Order.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.price === "string" && Timestamp.is(o.creationTime) && typeof o.totalAmount === "string" && typeof o.remainingAmount === "string" && typeof o.reservedAmount === "string" && typeof o.reservationsCount === "bigint" && typeof o.minFillRatio === "string" && typeof o.reservationAllowed === "boolean" && typeof o.reservationPeriodSeconds === "bigint" && typeof o.reservationDepositDenom === "string" && typeof o.reservationDepositAmount === "string" && typeof o.minReservationDepositAmount === "string" && typeof o.makerFee === "string" && typeof o.live === "boolean" && Timestamp.is(o.lastUpdateTime));
  },
  isSDK(o: any): o is OrderSDKType {
    return o && (o.$typeUrl === Order.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.price === "string" && Timestamp.isSDK(o.creation_time) && typeof o.total_amount === "string" && typeof o.remaining_amount === "string" && typeof o.reserved_amount === "string" && typeof o.reservations_count === "bigint" && typeof o.min_fill_ratio === "string" && typeof o.reservation_allowed === "boolean" && typeof o.reservation_period_seconds === "bigint" && typeof o.reservation_deposit_denom === "string" && typeof o.reservation_deposit_amount === "string" && typeof o.min_reservation_deposit_amount === "string" && typeof o.maker_fee === "string" && typeof o.live === "boolean" && Timestamp.isSDK(o.last_update_time));
  },
  isAmino(o: any): o is OrderAmino {
    return o && (o.$typeUrl === Order.typeUrl || typeof o.id === "bigint" && typeof o.owner === "string" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.price === "string" && Timestamp.isAmino(o.creation_time) && typeof o.total_amount === "string" && typeof o.remaining_amount === "string" && typeof o.reserved_amount === "string" && typeof o.reservations_count === "bigint" && typeof o.min_fill_ratio === "string" && typeof o.reservation_allowed === "boolean" && typeof o.reservation_period_seconds === "bigint" && typeof o.reservation_deposit_denom === "string" && typeof o.reservation_deposit_amount === "string" && typeof o.min_reservation_deposit_amount === "string" && typeof o.maker_fee === "string" && typeof o.live === "boolean" && Timestamp.isAmino(o.last_update_time));
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
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.totalAmount !== "") {
      writer.uint32(66).string(message.totalAmount);
    }
    if (message.remainingAmount !== "") {
      writer.uint32(74).string(message.remainingAmount);
    }
    if (message.reservedAmount !== "") {
      writer.uint32(82).string(message.reservedAmount);
    }
    if (message.reservationsCount !== BigInt(0)) {
      writer.uint32(88).uint64(message.reservationsCount);
    }
    if (message.minFillRatio !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.minFillRatio, 18).atomics);
    }
    if (message.reservationAllowed === true) {
      writer.uint32(104).bool(message.reservationAllowed);
    }
    if (message.reservationPeriodSeconds !== BigInt(0)) {
      writer.uint32(112).uint64(message.reservationPeriodSeconds);
    }
    if (message.reservationDepositDenom !== "") {
      writer.uint32(122).string(message.reservationDepositDenom);
    }
    if (message.reservationDepositAmount !== "") {
      writer.uint32(130).string(message.reservationDepositAmount);
    }
    if (message.minReservationDepositAmount !== "") {
      writer.uint32(138).string(message.minReservationDepositAmount);
    }
    if (message.makerFee !== "") {
      writer.uint32(146).string(Decimal.fromUserInput(message.makerFee, 18).atomics);
    }
    if (message.live === true) {
      writer.uint32(152).bool(message.live);
    }
    if (message.lastUpdateTime !== undefined) {
      Timestamp.encode(message.lastUpdateTime, writer.uint32(162).fork()).ldelim();
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
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.totalAmount = reader.string();
          break;
        case 9:
          message.remainingAmount = reader.string();
          break;
        case 10:
          message.reservedAmount = reader.string();
          break;
        case 11:
          message.reservationsCount = reader.uint64();
          break;
        case 12:
          message.minFillRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.reservationAllowed = reader.bool();
          break;
        case 14:
          message.reservationPeriodSeconds = reader.uint64();
          break;
        case 15:
          message.reservationDepositDenom = reader.string();
          break;
        case 16:
          message.reservationDepositAmount = reader.string();
          break;
        case 17:
          message.minReservationDepositAmount = reader.string();
          break;
        case 18:
          message.makerFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 19:
          message.live = reader.bool();
          break;
        case 20:
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
      creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      remainingAmount: isSet(object.remainingAmount) ? String(object.remainingAmount) : "",
      reservedAmount: isSet(object.reservedAmount) ? String(object.reservedAmount) : "",
      reservationsCount: isSet(object.reservationsCount) ? BigInt(object.reservationsCount.toString()) : BigInt(0),
      minFillRatio: isSet(object.minFillRatio) ? String(object.minFillRatio) : "",
      reservationAllowed: isSet(object.reservationAllowed) ? Boolean(object.reservationAllowed) : false,
      reservationPeriodSeconds: isSet(object.reservationPeriodSeconds) ? BigInt(object.reservationPeriodSeconds.toString()) : BigInt(0),
      reservationDepositDenom: isSet(object.reservationDepositDenom) ? String(object.reservationDepositDenom) : "",
      reservationDepositAmount: isSet(object.reservationDepositAmount) ? String(object.reservationDepositAmount) : "",
      minReservationDepositAmount: isSet(object.minReservationDepositAmount) ? String(object.minReservationDepositAmount) : "",
      makerFee: isSet(object.makerFee) ? String(object.makerFee) : "",
      live: isSet(object.live) ? Boolean(object.live) : false,
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
    message.creationTime !== undefined && (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.remainingAmount !== undefined && (obj.remainingAmount = message.remainingAmount);
    message.reservedAmount !== undefined && (obj.reservedAmount = message.reservedAmount);
    message.reservationsCount !== undefined && (obj.reservationsCount = (message.reservationsCount || BigInt(0)).toString());
    message.minFillRatio !== undefined && (obj.minFillRatio = message.minFillRatio);
    message.reservationAllowed !== undefined && (obj.reservationAllowed = message.reservationAllowed);
    message.reservationPeriodSeconds !== undefined && (obj.reservationPeriodSeconds = (message.reservationPeriodSeconds || BigInt(0)).toString());
    message.reservationDepositDenom !== undefined && (obj.reservationDepositDenom = message.reservationDepositDenom);
    message.reservationDepositAmount !== undefined && (obj.reservationDepositAmount = message.reservationDepositAmount);
    message.minReservationDepositAmount !== undefined && (obj.minReservationDepositAmount = message.minReservationDepositAmount);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    message.live !== undefined && (obj.live = message.live);
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
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? Timestamp.fromPartial(object.creationTime) : undefined;
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    message.totalAmount = object.totalAmount ?? "";
    message.remainingAmount = object.remainingAmount ?? "";
    message.reservedAmount = object.reservedAmount ?? "";
    message.reservationsCount = object.reservationsCount !== undefined && object.reservationsCount !== null ? BigInt(object.reservationsCount.toString()) : BigInt(0);
    message.minFillRatio = object.minFillRatio ?? "";
    message.reservationAllowed = object.reservationAllowed ?? false;
    message.reservationPeriodSeconds = object.reservationPeriodSeconds !== undefined && object.reservationPeriodSeconds !== null ? BigInt(object.reservationPeriodSeconds.toString()) : BigInt(0);
    message.reservationDepositDenom = object.reservationDepositDenom ?? "";
    message.reservationDepositAmount = object.reservationDepositAmount ?? "";
    message.minReservationDepositAmount = object.minReservationDepositAmount ?? "";
    message.makerFee = object.makerFee ?? "";
    message.live = object.live ?? false;
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
    if (object.creation_time !== undefined && object.creation_time !== null) {
      message.creationTime = Timestamp.fromAmino(object.creation_time);
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.remaining_amount !== undefined && object.remaining_amount !== null) {
      message.remainingAmount = object.remaining_amount;
    }
    if (object.reserved_amount !== undefined && object.reserved_amount !== null) {
      message.reservedAmount = object.reserved_amount;
    }
    if (object.reservations_count !== undefined && object.reservations_count !== null) {
      message.reservationsCount = BigInt(object.reservations_count);
    }
    if (object.min_fill_ratio !== undefined && object.min_fill_ratio !== null) {
      message.minFillRatio = object.min_fill_ratio;
    }
    if (object.reservation_allowed !== undefined && object.reservation_allowed !== null) {
      message.reservationAllowed = object.reservation_allowed;
    }
    if (object.reservation_period_seconds !== undefined && object.reservation_period_seconds !== null) {
      message.reservationPeriodSeconds = BigInt(object.reservation_period_seconds);
    }
    if (object.reservation_deposit_denom !== undefined && object.reservation_deposit_denom !== null) {
      message.reservationDepositDenom = object.reservation_deposit_denom;
    }
    if (object.reservation_deposit_amount !== undefined && object.reservation_deposit_amount !== null) {
      message.reservationDepositAmount = object.reservation_deposit_amount;
    }
    if (object.min_reservation_deposit_amount !== undefined && object.min_reservation_deposit_amount !== null) {
      message.minReservationDepositAmount = object.min_reservation_deposit_amount;
    }
    if (object.maker_fee !== undefined && object.maker_fee !== null) {
      message.makerFee = object.maker_fee;
    }
    if (object.live !== undefined && object.live !== null) {
      message.live = object.live;
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
    obj.creation_time = message.creationTime ? Timestamp.toAmino(message.creationTime, useInterfaces) : undefined;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime, useInterfaces) : undefined;
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.remaining_amount = message.remainingAmount === "" ? undefined : message.remainingAmount;
    obj.reserved_amount = message.reservedAmount === "" ? undefined : message.reservedAmount;
    obj.reservations_count = message.reservationsCount ? message.reservationsCount.toString() : undefined;
    obj.min_fill_ratio = padDecimal(message.minFillRatio) === "" ? undefined : padDecimal(message.minFillRatio);
    obj.reservation_allowed = message.reservationAllowed === false ? undefined : message.reservationAllowed;
    obj.reservation_period_seconds = message.reservationPeriodSeconds ? message.reservationPeriodSeconds.toString() : undefined;
    obj.reservation_deposit_denom = message.reservationDepositDenom === "" ? undefined : message.reservationDepositDenom;
    obj.reservation_deposit_amount = message.reservationDepositAmount === "" ? undefined : message.reservationDepositAmount;
    obj.min_reservation_deposit_amount = message.minReservationDepositAmount === "" ? undefined : message.minReservationDepositAmount;
    obj.maker_fee = padDecimal(message.makerFee) === "" ? undefined : padDecimal(message.makerFee);
    obj.live = message.live === false ? undefined : message.live;
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
      typeUrl: "/pryzmatics.seal.Order",
      value: Order.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Order.typeUrl, Order);
function createBaseOrderInfo(): OrderInfo {
  return {
    order: Order.fromPartial({}),
    tokenInPrice: undefined,
    tokenInPriceUpdateTime: undefined,
    tokenOutPrice: undefined,
    tokenOutPriceUpdateTime: undefined,
    priceMargin: undefined
  };
}
export const OrderInfo = {
  typeUrl: "/pryzmatics.seal.OrderInfo",
  is(o: any): o is OrderInfo {
    return o && (o.$typeUrl === OrderInfo.typeUrl || Order.is(o.order));
  },
  isSDK(o: any): o is OrderInfoSDKType {
    return o && (o.$typeUrl === OrderInfo.typeUrl || Order.isSDK(o.order));
  },
  isAmino(o: any): o is OrderInfoAmino {
    return o && (o.$typeUrl === OrderInfo.typeUrl || Order.isAmino(o.order));
  },
  encode(message: OrderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.tokenInPrice !== undefined) {
      writer.uint32(18).string(Decimal.fromUserInput(message.tokenInPrice, 18).atomics);
    }
    if (message.tokenInPriceUpdateTime !== undefined) {
      Timestamp.encode(message.tokenInPriceUpdateTime, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOutPrice !== undefined) {
      writer.uint32(34).string(Decimal.fromUserInput(message.tokenOutPrice, 18).atomics);
    }
    if (message.tokenOutPriceUpdateTime !== undefined) {
      Timestamp.encode(message.tokenOutPriceUpdateTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.priceMargin !== undefined) {
      writer.uint32(50).string(Decimal.fromUserInput(message.priceMargin, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.tokenInPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.tokenInPriceUpdateTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenOutPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.tokenOutPriceUpdateTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.priceMargin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderInfo {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
      tokenInPrice: isSet(object.tokenInPrice) ? String(object.tokenInPrice) : undefined,
      tokenInPriceUpdateTime: isSet(object.tokenInPriceUpdateTime) ? fromJsonTimestamp(object.tokenInPriceUpdateTime) : undefined,
      tokenOutPrice: isSet(object.tokenOutPrice) ? String(object.tokenOutPrice) : undefined,
      tokenOutPriceUpdateTime: isSet(object.tokenOutPriceUpdateTime) ? fromJsonTimestamp(object.tokenOutPriceUpdateTime) : undefined,
      priceMargin: isSet(object.priceMargin) ? String(object.priceMargin) : undefined
    };
  },
  toJSON(message: OrderInfo): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.tokenInPrice !== undefined && (obj.tokenInPrice = message.tokenInPrice);
    message.tokenInPriceUpdateTime !== undefined && (obj.tokenInPriceUpdateTime = fromTimestamp(message.tokenInPriceUpdateTime).toISOString());
    message.tokenOutPrice !== undefined && (obj.tokenOutPrice = message.tokenOutPrice);
    message.tokenOutPriceUpdateTime !== undefined && (obj.tokenOutPriceUpdateTime = fromTimestamp(message.tokenOutPriceUpdateTime).toISOString());
    message.priceMargin !== undefined && (obj.priceMargin = message.priceMargin);
    return obj;
  },
  fromPartial(object: Partial<OrderInfo>): OrderInfo {
    const message = createBaseOrderInfo();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    message.tokenInPrice = object.tokenInPrice ?? undefined;
    message.tokenInPriceUpdateTime = object.tokenInPriceUpdateTime !== undefined && object.tokenInPriceUpdateTime !== null ? Timestamp.fromPartial(object.tokenInPriceUpdateTime) : undefined;
    message.tokenOutPrice = object.tokenOutPrice ?? undefined;
    message.tokenOutPriceUpdateTime = object.tokenOutPriceUpdateTime !== undefined && object.tokenOutPriceUpdateTime !== null ? Timestamp.fromPartial(object.tokenOutPriceUpdateTime) : undefined;
    message.priceMargin = object.priceMargin ?? undefined;
    return message;
  },
  fromAmino(object: OrderInfoAmino): OrderInfo {
    const message = createBaseOrderInfo();
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    if (object.token_in_price !== undefined && object.token_in_price !== null) {
      message.tokenInPrice = object.token_in_price;
    }
    if (object.token_in_price_update_time !== undefined && object.token_in_price_update_time !== null) {
      message.tokenInPriceUpdateTime = Timestamp.fromAmino(object.token_in_price_update_time);
    }
    if (object.token_out_price !== undefined && object.token_out_price !== null) {
      message.tokenOutPrice = object.token_out_price;
    }
    if (object.token_out_price_update_time !== undefined && object.token_out_price_update_time !== null) {
      message.tokenOutPriceUpdateTime = Timestamp.fromAmino(object.token_out_price_update_time);
    }
    if (object.price_margin !== undefined && object.price_margin !== null) {
      message.priceMargin = object.price_margin;
    }
    return message;
  },
  toAmino(message: OrderInfo, useInterfaces: boolean = true): OrderInfoAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    obj.token_in_price = padDecimal(message.tokenInPrice) === null ? undefined : padDecimal(message.tokenInPrice);
    obj.token_in_price_update_time = message.tokenInPriceUpdateTime ? Timestamp.toAmino(message.tokenInPriceUpdateTime, useInterfaces) : undefined;
    obj.token_out_price = padDecimal(message.tokenOutPrice) === null ? undefined : padDecimal(message.tokenOutPrice);
    obj.token_out_price_update_time = message.tokenOutPriceUpdateTime ? Timestamp.toAmino(message.tokenOutPriceUpdateTime, useInterfaces) : undefined;
    obj.price_margin = padDecimal(message.priceMargin) === null ? undefined : padDecimal(message.priceMargin);
    return obj;
  },
  fromAminoMsg(object: OrderInfoAminoMsg): OrderInfo {
    return OrderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderInfoProtoMsg, useInterfaces: boolean = true): OrderInfo {
    return OrderInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderInfo): Uint8Array {
    return OrderInfo.encode(message).finish();
  },
  toProtoMsg(message: OrderInfo): OrderInfoProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.OrderInfo",
      value: OrderInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderInfo.typeUrl, OrderInfo);