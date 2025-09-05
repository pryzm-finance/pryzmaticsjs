import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Order, OrderAmino, OrderSDKType } from "./order";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export enum OrderActivityType {
  ORDER_ACTIVITY_TYPE_UNSPECIFIED = 0,
  ORDER_ACTIVITY_TYPE_SUBMITTED = 1,
  ORDER_ACTIVITY_TYPE_CANCELED = 2,
  ORDER_ACTIVITY_TYPE_EXPIRED = 3,
  ORDER_ACTIVITY_TYPE_SETTLED = 4,
  ORDER_ACTIVITY_TYPE_BOUGHT = 5,
  ORDER_ACTIVITY_TYPE_RESERVED = 6,
  ORDER_ACTIVITY_TYPE_RESERVATION_SETTLED = 7,
  ORDER_ACTIVITY_TYPE_RESERVATION_EXPIRED = 8,
  ORDER_ACTIVITY_TYPE_EXPIRED_RESERVATION_DEPOSIT_PAID = 9,
  UNRECOGNIZED = -1,
}
export const OrderActivityTypeSDKType = OrderActivityType;
export const OrderActivityTypeAmino = OrderActivityType;
export function orderActivityTypeFromJSON(object: any): OrderActivityType {
  switch (object) {
    case 0:
    case "ORDER_ACTIVITY_TYPE_UNSPECIFIED":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_UNSPECIFIED;
    case 1:
    case "ORDER_ACTIVITY_TYPE_SUBMITTED":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_SUBMITTED;
    case 2:
    case "ORDER_ACTIVITY_TYPE_CANCELED":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_CANCELED;
    case 3:
    case "ORDER_ACTIVITY_TYPE_EXPIRED":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_EXPIRED;
    case 4:
    case "ORDER_ACTIVITY_TYPE_SETTLED":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_SETTLED;
    case 5:
    case "ORDER_ACTIVITY_TYPE_BOUGHT":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_BOUGHT;
    case 6:
    case "ORDER_ACTIVITY_TYPE_RESERVED":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_RESERVED;
    case 7:
    case "ORDER_ACTIVITY_TYPE_RESERVATION_SETTLED":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_RESERVATION_SETTLED;
    case 8:
    case "ORDER_ACTIVITY_TYPE_RESERVATION_EXPIRED":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_RESERVATION_EXPIRED;
    case 9:
    case "ORDER_ACTIVITY_TYPE_EXPIRED_RESERVATION_DEPOSIT_PAID":
      return OrderActivityType.ORDER_ACTIVITY_TYPE_EXPIRED_RESERVATION_DEPOSIT_PAID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderActivityType.UNRECOGNIZED;
  }
}
export function orderActivityTypeToJSON(object: OrderActivityType): string {
  switch (object) {
    case OrderActivityType.ORDER_ACTIVITY_TYPE_UNSPECIFIED:
      return "ORDER_ACTIVITY_TYPE_UNSPECIFIED";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_SUBMITTED:
      return "ORDER_ACTIVITY_TYPE_SUBMITTED";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_CANCELED:
      return "ORDER_ACTIVITY_TYPE_CANCELED";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_EXPIRED:
      return "ORDER_ACTIVITY_TYPE_EXPIRED";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_SETTLED:
      return "ORDER_ACTIVITY_TYPE_SETTLED";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_BOUGHT:
      return "ORDER_ACTIVITY_TYPE_BOUGHT";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_RESERVED:
      return "ORDER_ACTIVITY_TYPE_RESERVED";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_RESERVATION_SETTLED:
      return "ORDER_ACTIVITY_TYPE_RESERVATION_SETTLED";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_RESERVATION_EXPIRED:
      return "ORDER_ACTIVITY_TYPE_RESERVATION_EXPIRED";
    case OrderActivityType.ORDER_ACTIVITY_TYPE_EXPIRED_RESERVATION_DEPOSIT_PAID:
      return "ORDER_ACTIVITY_TYPE_EXPIRED_RESERVATION_DEPOSIT_PAID";
    case OrderActivityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface OrderActivity {
  id: bigint;
  orderId: bigint;
  actor: string;
  time: Timestamp;
  type: OrderActivityType;
  data: string;
  txHash: string;
}
export interface OrderActivityProtoMsg {
  typeUrl: "/pryzmatics.seal.OrderActivity";
  value: Uint8Array;
}
export interface OrderActivityAmino {
  id?: string;
  order_id?: string;
  actor?: string;
  time?: string;
  type?: OrderActivityType;
  data?: string;
  tx_hash?: string;
}
export interface OrderActivityAminoMsg {
  type: "/pryzmatics.seal.OrderActivity";
  value: OrderActivityAmino;
}
export interface OrderActivitySDKType {
  id: bigint;
  order_id: bigint;
  actor: string;
  time: TimestampSDKType;
  type: OrderActivityType;
  data: string;
  tx_hash: string;
}
export interface OrderActivityWithOrder {
  activity: OrderActivity;
  order: Order;
}
export interface OrderActivityWithOrderProtoMsg {
  typeUrl: "/pryzmatics.seal.OrderActivityWithOrder";
  value: Uint8Array;
}
export interface OrderActivityWithOrderAmino {
  activity?: OrderActivityAmino;
  order?: OrderAmino;
}
export interface OrderActivityWithOrderAminoMsg {
  type: "/pryzmatics.seal.OrderActivityWithOrder";
  value: OrderActivityWithOrderAmino;
}
export interface OrderActivityWithOrderSDKType {
  activity: OrderActivitySDKType;
  order: OrderSDKType;
}
export interface OrderCancelledActivityData {
  cancelledAmount: string;
  reservationAllowed: boolean;
}
export interface OrderCancelledActivityDataProtoMsg {
  typeUrl: "/pryzmatics.seal.OrderCancelledActivityData";
  value: Uint8Array;
}
export interface OrderCancelledActivityDataAmino {
  cancelled_amount?: string;
  reservation_allowed?: boolean;
}
export interface OrderCancelledActivityDataAminoMsg {
  type: "/pryzmatics.seal.OrderCancelledActivityData";
  value: OrderCancelledActivityDataAmino;
}
export interface OrderCancelledActivityDataSDKType {
  cancelled_amount: string;
  reservation_allowed: boolean;
}
export interface OrderSettledActivityData {
  settledAmount: string;
  receivedAmount: string;
  fee: Coin;
}
export interface OrderSettledActivityDataProtoMsg {
  typeUrl: "/pryzmatics.seal.OrderSettledActivityData";
  value: Uint8Array;
}
export interface OrderSettledActivityDataAmino {
  settled_amount?: string;
  received_amount?: string;
  fee?: CoinAmino;
}
export interface OrderSettledActivityDataAminoMsg {
  type: "/pryzmatics.seal.OrderSettledActivityData";
  value: OrderSettledActivityDataAmino;
}
export interface OrderSettledActivityDataSDKType {
  settled_amount: string;
  received_amount: string;
  fee: CoinSDKType;
}
export interface OrderBoughtActivityData {
  orderAmount: string;
  paidAmount: string;
  makerReceived: Coin;
  buyerReceived: Coin;
  makerFee: Coin;
  buyerFee: Coin;
}
export interface OrderBoughtActivityDataProtoMsg {
  typeUrl: "/pryzmatics.seal.OrderBoughtActivityData";
  value: Uint8Array;
}
export interface OrderBoughtActivityDataAmino {
  order_amount?: string;
  paid_amount?: string;
  maker_received?: CoinAmino;
  buyer_received?: CoinAmino;
  maker_fee?: CoinAmino;
  buyer_fee?: CoinAmino;
}
export interface OrderBoughtActivityDataAminoMsg {
  type: "/pryzmatics.seal.OrderBoughtActivityData";
  value: OrderBoughtActivityDataAmino;
}
export interface OrderBoughtActivityDataSDKType {
  order_amount: string;
  paid_amount: string;
  maker_received: CoinSDKType;
  buyer_received: CoinSDKType;
  maker_fee: CoinSDKType;
  buyer_fee: CoinSDKType;
}
export interface OrderReservedActivityData {
  reservationId: bigint;
  amount: string;
  expirationTime: Timestamp;
}
export interface OrderReservedActivityDataProtoMsg {
  typeUrl: "/pryzmatics.seal.OrderReservedActivityData";
  value: Uint8Array;
}
export interface OrderReservedActivityDataAmino {
  reservation_id?: string;
  amount?: string;
  expiration_time?: string;
}
export interface OrderReservedActivityDataAminoMsg {
  type: "/pryzmatics.seal.OrderReservedActivityData";
  value: OrderReservedActivityDataAmino;
}
export interface OrderReservedActivityDataSDKType {
  reservation_id: bigint;
  amount: string;
  expiration_time: TimestampSDKType;
}
export interface ReservationSettledActivityData {
  reservationId: bigint;
  orderAmount: string;
  paidAmount: string;
  makerReceived: Coin;
  reserverReceived: Coin;
  makerFee: Coin;
  reserverFee: Coin;
  depositPayback: Coin;
  protocolDepositPayback?: Coin;
}
export interface ReservationSettledActivityDataProtoMsg {
  typeUrl: "/pryzmatics.seal.ReservationSettledActivityData";
  value: Uint8Array;
}
export interface ReservationSettledActivityDataAmino {
  reservation_id?: string;
  order_amount?: string;
  paid_amount?: string;
  maker_received?: CoinAmino;
  reserver_received?: CoinAmino;
  maker_fee?: CoinAmino;
  reserver_fee?: CoinAmino;
  deposit_payback?: CoinAmino;
  protocol_deposit_payback?: CoinAmino;
}
export interface ReservationSettledActivityDataAminoMsg {
  type: "/pryzmatics.seal.ReservationSettledActivityData";
  value: ReservationSettledActivityDataAmino;
}
export interface ReservationSettledActivityDataSDKType {
  reservation_id: bigint;
  order_amount: string;
  paid_amount: string;
  maker_received: CoinSDKType;
  reserver_received: CoinSDKType;
  maker_fee: CoinSDKType;
  reserver_fee: CoinSDKType;
  deposit_payback: CoinSDKType;
  protocol_deposit_payback?: CoinSDKType;
}
export interface ReservationExpiredActivityData {
  reservationId: bigint;
}
export interface ReservationExpiredActivityDataProtoMsg {
  typeUrl: "/pryzmatics.seal.ReservationExpiredActivityData";
  value: Uint8Array;
}
export interface ReservationExpiredActivityDataAmino {
  reservation_id?: string;
}
export interface ReservationExpiredActivityDataAminoMsg {
  type: "/pryzmatics.seal.ReservationExpiredActivityData";
  value: ReservationExpiredActivityDataAmino;
}
export interface ReservationExpiredActivityDataSDKType {
  reservation_id: bigint;
}
export interface ExpiredReservationDepositPaidActivityData {
  reservationId: bigint;
  expiredAmount: string;
  paidDeposit: Coin;
  paidProtocolDeposit?: Coin;
}
export interface ExpiredReservationDepositPaidActivityDataProtoMsg {
  typeUrl: "/pryzmatics.seal.ExpiredReservationDepositPaidActivityData";
  value: Uint8Array;
}
export interface ExpiredReservationDepositPaidActivityDataAmino {
  reservation_id?: string;
  expired_amount?: string;
  paid_deposit?: CoinAmino;
  paid_protocol_deposit?: CoinAmino;
}
export interface ExpiredReservationDepositPaidActivityDataAminoMsg {
  type: "/pryzmatics.seal.ExpiredReservationDepositPaidActivityData";
  value: ExpiredReservationDepositPaidActivityDataAmino;
}
export interface ExpiredReservationDepositPaidActivityDataSDKType {
  reservation_id: bigint;
  expired_amount: string;
  paid_deposit: CoinSDKType;
  paid_protocol_deposit?: CoinSDKType;
}
function createBaseOrderActivity(): OrderActivity {
  return {
    id: BigInt(0),
    orderId: BigInt(0),
    actor: "",
    time: Timestamp.fromPartial({}),
    type: 0,
    data: "",
    txHash: ""
  };
}
export const OrderActivity = {
  typeUrl: "/pryzmatics.seal.OrderActivity",
  is(o: any): o is OrderActivity {
    return o && (o.$typeUrl === OrderActivity.typeUrl || typeof o.id === "bigint" && typeof o.orderId === "bigint" && typeof o.actor === "string" && Timestamp.is(o.time) && isSet(o.type) && typeof o.data === "string" && typeof o.txHash === "string");
  },
  isSDK(o: any): o is OrderActivitySDKType {
    return o && (o.$typeUrl === OrderActivity.typeUrl || typeof o.id === "bigint" && typeof o.order_id === "bigint" && typeof o.actor === "string" && Timestamp.isSDK(o.time) && isSet(o.type) && typeof o.data === "string" && typeof o.tx_hash === "string");
  },
  isAmino(o: any): o is OrderActivityAmino {
    return o && (o.$typeUrl === OrderActivity.typeUrl || typeof o.id === "bigint" && typeof o.order_id === "bigint" && typeof o.actor === "string" && Timestamp.isAmino(o.time) && isSet(o.type) && typeof o.data === "string" && typeof o.tx_hash === "string");
  },
  encode(message: OrderActivity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.orderId !== BigInt(0)) {
      writer.uint32(16).uint64(message.orderId);
    }
    if (message.actor !== "") {
      writer.uint32(26).string(message.actor);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.data !== "") {
      writer.uint32(50).string(message.data);
    }
    if (message.txHash !== "") {
      writer.uint32(58).string(message.txHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderActivity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderActivity();
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
          message.actor = reader.string();
          break;
        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.type = (reader.int32() as any);
          break;
        case 6:
          message.data = reader.string();
          break;
        case 7:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderActivity {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      orderId: isSet(object.orderId) ? BigInt(object.orderId.toString()) : BigInt(0),
      actor: isSet(object.actor) ? String(object.actor) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      type: isSet(object.type) ? orderActivityTypeFromJSON(object.type) : -1,
      data: isSet(object.data) ? String(object.data) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : ""
    };
  },
  toJSON(message: OrderActivity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.orderId !== undefined && (obj.orderId = (message.orderId || BigInt(0)).toString());
    message.actor !== undefined && (obj.actor = message.actor);
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.type !== undefined && (obj.type = orderActivityTypeToJSON(message.type));
    message.data !== undefined && (obj.data = message.data);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },
  fromPartial(object: Partial<OrderActivity>): OrderActivity {
    const message = createBaseOrderActivity();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
    message.actor = object.actor ?? "";
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.type = object.type ?? 0;
    message.data = object.data ?? "";
    message.txHash = object.txHash ?? "";
    return message;
  },
  fromAmino(object: OrderActivityAmino): OrderActivity {
    const message = createBaseOrderActivity();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.order_id !== undefined && object.order_id !== null) {
      message.orderId = BigInt(object.order_id);
    }
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = object.actor;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    return message;
  },
  toAmino(message: OrderActivity, useInterfaces: boolean = true): OrderActivityAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.order_id = message.orderId ? message.orderId.toString() : undefined;
    obj.actor = message.actor === "" ? undefined : message.actor;
    obj.time = message.time ? Timestamp.toAmino(message.time, useInterfaces) : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.data = message.data === "" ? undefined : message.data;
    obj.tx_hash = message.txHash === "" ? undefined : message.txHash;
    return obj;
  },
  fromAminoMsg(object: OrderActivityAminoMsg): OrderActivity {
    return OrderActivity.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderActivityProtoMsg, useInterfaces: boolean = true): OrderActivity {
    return OrderActivity.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderActivity): Uint8Array {
    return OrderActivity.encode(message).finish();
  },
  toProtoMsg(message: OrderActivity): OrderActivityProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.OrderActivity",
      value: OrderActivity.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderActivity.typeUrl, OrderActivity);
function createBaseOrderActivityWithOrder(): OrderActivityWithOrder {
  return {
    activity: OrderActivity.fromPartial({}),
    order: Order.fromPartial({})
  };
}
export const OrderActivityWithOrder = {
  typeUrl: "/pryzmatics.seal.OrderActivityWithOrder",
  is(o: any): o is OrderActivityWithOrder {
    return o && (o.$typeUrl === OrderActivityWithOrder.typeUrl || OrderActivity.is(o.activity) && Order.is(o.order));
  },
  isSDK(o: any): o is OrderActivityWithOrderSDKType {
    return o && (o.$typeUrl === OrderActivityWithOrder.typeUrl || OrderActivity.isSDK(o.activity) && Order.isSDK(o.order));
  },
  isAmino(o: any): o is OrderActivityWithOrderAmino {
    return o && (o.$typeUrl === OrderActivityWithOrder.typeUrl || OrderActivity.isAmino(o.activity) && Order.isAmino(o.order));
  },
  encode(message: OrderActivityWithOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.activity !== undefined) {
      OrderActivity.encode(message.activity, writer.uint32(10).fork()).ldelim();
    }
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderActivityWithOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderActivityWithOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activity = OrderActivity.decode(reader, reader.uint32(), useInterfaces);
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
  fromJSON(object: any): OrderActivityWithOrder {
    return {
      activity: isSet(object.activity) ? OrderActivity.fromJSON(object.activity) : undefined,
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: OrderActivityWithOrder): unknown {
    const obj: any = {};
    message.activity !== undefined && (obj.activity = message.activity ? OrderActivity.toJSON(message.activity) : undefined);
    message.order !== undefined && (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OrderActivityWithOrder>): OrderActivityWithOrder {
    const message = createBaseOrderActivityWithOrder();
    message.activity = object.activity !== undefined && object.activity !== null ? OrderActivity.fromPartial(object.activity) : undefined;
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: OrderActivityWithOrderAmino): OrderActivityWithOrder {
    const message = createBaseOrderActivityWithOrder();
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = OrderActivity.fromAmino(object.activity);
    }
    if (object.order !== undefined && object.order !== null) {
      message.order = Order.fromAmino(object.order);
    }
    return message;
  },
  toAmino(message: OrderActivityWithOrder, useInterfaces: boolean = true): OrderActivityWithOrderAmino {
    const obj: any = {};
    obj.activity = message.activity ? OrderActivity.toAmino(message.activity, useInterfaces) : undefined;
    obj.order = message.order ? Order.toAmino(message.order, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderActivityWithOrderAminoMsg): OrderActivityWithOrder {
    return OrderActivityWithOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderActivityWithOrderProtoMsg, useInterfaces: boolean = true): OrderActivityWithOrder {
    return OrderActivityWithOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderActivityWithOrder): Uint8Array {
    return OrderActivityWithOrder.encode(message).finish();
  },
  toProtoMsg(message: OrderActivityWithOrder): OrderActivityWithOrderProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.OrderActivityWithOrder",
      value: OrderActivityWithOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderActivityWithOrder.typeUrl, OrderActivityWithOrder);
function createBaseOrderCancelledActivityData(): OrderCancelledActivityData {
  return {
    cancelledAmount: "",
    reservationAllowed: false
  };
}
export const OrderCancelledActivityData = {
  typeUrl: "/pryzmatics.seal.OrderCancelledActivityData",
  is(o: any): o is OrderCancelledActivityData {
    return o && (o.$typeUrl === OrderCancelledActivityData.typeUrl || typeof o.cancelledAmount === "string" && typeof o.reservationAllowed === "boolean");
  },
  isSDK(o: any): o is OrderCancelledActivityDataSDKType {
    return o && (o.$typeUrl === OrderCancelledActivityData.typeUrl || typeof o.cancelled_amount === "string" && typeof o.reservation_allowed === "boolean");
  },
  isAmino(o: any): o is OrderCancelledActivityDataAmino {
    return o && (o.$typeUrl === OrderCancelledActivityData.typeUrl || typeof o.cancelled_amount === "string" && typeof o.reservation_allowed === "boolean");
  },
  encode(message: OrderCancelledActivityData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cancelledAmount !== "") {
      writer.uint32(10).string(message.cancelledAmount);
    }
    if (message.reservationAllowed === true) {
      writer.uint32(16).bool(message.reservationAllowed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderCancelledActivityData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCancelledActivityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cancelledAmount = reader.string();
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
  fromJSON(object: any): OrderCancelledActivityData {
    return {
      cancelledAmount: isSet(object.cancelledAmount) ? String(object.cancelledAmount) : "",
      reservationAllowed: isSet(object.reservationAllowed) ? Boolean(object.reservationAllowed) : false
    };
  },
  toJSON(message: OrderCancelledActivityData): unknown {
    const obj: any = {};
    message.cancelledAmount !== undefined && (obj.cancelledAmount = message.cancelledAmount);
    message.reservationAllowed !== undefined && (obj.reservationAllowed = message.reservationAllowed);
    return obj;
  },
  fromPartial(object: Partial<OrderCancelledActivityData>): OrderCancelledActivityData {
    const message = createBaseOrderCancelledActivityData();
    message.cancelledAmount = object.cancelledAmount ?? "";
    message.reservationAllowed = object.reservationAllowed ?? false;
    return message;
  },
  fromAmino(object: OrderCancelledActivityDataAmino): OrderCancelledActivityData {
    const message = createBaseOrderCancelledActivityData();
    if (object.cancelled_amount !== undefined && object.cancelled_amount !== null) {
      message.cancelledAmount = object.cancelled_amount;
    }
    if (object.reservation_allowed !== undefined && object.reservation_allowed !== null) {
      message.reservationAllowed = object.reservation_allowed;
    }
    return message;
  },
  toAmino(message: OrderCancelledActivityData, useInterfaces: boolean = true): OrderCancelledActivityDataAmino {
    const obj: any = {};
    obj.cancelled_amount = message.cancelledAmount === "" ? undefined : message.cancelledAmount;
    obj.reservation_allowed = message.reservationAllowed === false ? undefined : message.reservationAllowed;
    return obj;
  },
  fromAminoMsg(object: OrderCancelledActivityDataAminoMsg): OrderCancelledActivityData {
    return OrderCancelledActivityData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderCancelledActivityDataProtoMsg, useInterfaces: boolean = true): OrderCancelledActivityData {
    return OrderCancelledActivityData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderCancelledActivityData): Uint8Array {
    return OrderCancelledActivityData.encode(message).finish();
  },
  toProtoMsg(message: OrderCancelledActivityData): OrderCancelledActivityDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.OrderCancelledActivityData",
      value: OrderCancelledActivityData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderCancelledActivityData.typeUrl, OrderCancelledActivityData);
function createBaseOrderSettledActivityData(): OrderSettledActivityData {
  return {
    settledAmount: "",
    receivedAmount: "",
    fee: Coin.fromPartial({})
  };
}
export const OrderSettledActivityData = {
  typeUrl: "/pryzmatics.seal.OrderSettledActivityData",
  is(o: any): o is OrderSettledActivityData {
    return o && (o.$typeUrl === OrderSettledActivityData.typeUrl || typeof o.settledAmount === "string" && typeof o.receivedAmount === "string" && Coin.is(o.fee));
  },
  isSDK(o: any): o is OrderSettledActivityDataSDKType {
    return o && (o.$typeUrl === OrderSettledActivityData.typeUrl || typeof o.settled_amount === "string" && typeof o.received_amount === "string" && Coin.isSDK(o.fee));
  },
  isAmino(o: any): o is OrderSettledActivityDataAmino {
    return o && (o.$typeUrl === OrderSettledActivityData.typeUrl || typeof o.settled_amount === "string" && typeof o.received_amount === "string" && Coin.isAmino(o.fee));
  },
  encode(message: OrderSettledActivityData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.settledAmount !== "") {
      writer.uint32(10).string(message.settledAmount);
    }
    if (message.receivedAmount !== "") {
      writer.uint32(18).string(message.receivedAmount);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderSettledActivityData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderSettledActivityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.settledAmount = reader.string();
          break;
        case 2:
          message.receivedAmount = reader.string();
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderSettledActivityData {
    return {
      settledAmount: isSet(object.settledAmount) ? String(object.settledAmount) : "",
      receivedAmount: isSet(object.receivedAmount) ? String(object.receivedAmount) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: OrderSettledActivityData): unknown {
    const obj: any = {};
    message.settledAmount !== undefined && (obj.settledAmount = message.settledAmount);
    message.receivedAmount !== undefined && (obj.receivedAmount = message.receivedAmount);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OrderSettledActivityData>): OrderSettledActivityData {
    const message = createBaseOrderSettledActivityData();
    message.settledAmount = object.settledAmount ?? "";
    message.receivedAmount = object.receivedAmount ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: OrderSettledActivityDataAmino): OrderSettledActivityData {
    const message = createBaseOrderSettledActivityData();
    if (object.settled_amount !== undefined && object.settled_amount !== null) {
      message.settledAmount = object.settled_amount;
    }
    if (object.received_amount !== undefined && object.received_amount !== null) {
      message.receivedAmount = object.received_amount;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: OrderSettledActivityData, useInterfaces: boolean = true): OrderSettledActivityDataAmino {
    const obj: any = {};
    obj.settled_amount = message.settledAmount === "" ? undefined : message.settledAmount;
    obj.received_amount = message.receivedAmount === "" ? undefined : message.receivedAmount;
    obj.fee = message.fee ? Coin.toAmino(message.fee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderSettledActivityDataAminoMsg): OrderSettledActivityData {
    return OrderSettledActivityData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderSettledActivityDataProtoMsg, useInterfaces: boolean = true): OrderSettledActivityData {
    return OrderSettledActivityData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderSettledActivityData): Uint8Array {
    return OrderSettledActivityData.encode(message).finish();
  },
  toProtoMsg(message: OrderSettledActivityData): OrderSettledActivityDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.OrderSettledActivityData",
      value: OrderSettledActivityData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderSettledActivityData.typeUrl, OrderSettledActivityData);
function createBaseOrderBoughtActivityData(): OrderBoughtActivityData {
  return {
    orderAmount: "",
    paidAmount: "",
    makerReceived: Coin.fromPartial({}),
    buyerReceived: Coin.fromPartial({}),
    makerFee: Coin.fromPartial({}),
    buyerFee: Coin.fromPartial({})
  };
}
export const OrderBoughtActivityData = {
  typeUrl: "/pryzmatics.seal.OrderBoughtActivityData",
  is(o: any): o is OrderBoughtActivityData {
    return o && (o.$typeUrl === OrderBoughtActivityData.typeUrl || typeof o.orderAmount === "string" && typeof o.paidAmount === "string" && Coin.is(o.makerReceived) && Coin.is(o.buyerReceived) && Coin.is(o.makerFee) && Coin.is(o.buyerFee));
  },
  isSDK(o: any): o is OrderBoughtActivityDataSDKType {
    return o && (o.$typeUrl === OrderBoughtActivityData.typeUrl || typeof o.order_amount === "string" && typeof o.paid_amount === "string" && Coin.isSDK(o.maker_received) && Coin.isSDK(o.buyer_received) && Coin.isSDK(o.maker_fee) && Coin.isSDK(o.buyer_fee));
  },
  isAmino(o: any): o is OrderBoughtActivityDataAmino {
    return o && (o.$typeUrl === OrderBoughtActivityData.typeUrl || typeof o.order_amount === "string" && typeof o.paid_amount === "string" && Coin.isAmino(o.maker_received) && Coin.isAmino(o.buyer_received) && Coin.isAmino(o.maker_fee) && Coin.isAmino(o.buyer_fee));
  },
  encode(message: OrderBoughtActivityData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderAmount !== "") {
      writer.uint32(10).string(message.orderAmount);
    }
    if (message.paidAmount !== "") {
      writer.uint32(18).string(message.paidAmount);
    }
    if (message.makerReceived !== undefined) {
      Coin.encode(message.makerReceived, writer.uint32(26).fork()).ldelim();
    }
    if (message.buyerReceived !== undefined) {
      Coin.encode(message.buyerReceived, writer.uint32(34).fork()).ldelim();
    }
    if (message.makerFee !== undefined) {
      Coin.encode(message.makerFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.buyerFee !== undefined) {
      Coin.encode(message.buyerFee, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderBoughtActivityData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBoughtActivityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderAmount = reader.string();
          break;
        case 2:
          message.paidAmount = reader.string();
          break;
        case 3:
          message.makerReceived = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.buyerReceived = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.makerFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.buyerFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderBoughtActivityData {
    return {
      orderAmount: isSet(object.orderAmount) ? String(object.orderAmount) : "",
      paidAmount: isSet(object.paidAmount) ? String(object.paidAmount) : "",
      makerReceived: isSet(object.makerReceived) ? Coin.fromJSON(object.makerReceived) : undefined,
      buyerReceived: isSet(object.buyerReceived) ? Coin.fromJSON(object.buyerReceived) : undefined,
      makerFee: isSet(object.makerFee) ? Coin.fromJSON(object.makerFee) : undefined,
      buyerFee: isSet(object.buyerFee) ? Coin.fromJSON(object.buyerFee) : undefined
    };
  },
  toJSON(message: OrderBoughtActivityData): unknown {
    const obj: any = {};
    message.orderAmount !== undefined && (obj.orderAmount = message.orderAmount);
    message.paidAmount !== undefined && (obj.paidAmount = message.paidAmount);
    message.makerReceived !== undefined && (obj.makerReceived = message.makerReceived ? Coin.toJSON(message.makerReceived) : undefined);
    message.buyerReceived !== undefined && (obj.buyerReceived = message.buyerReceived ? Coin.toJSON(message.buyerReceived) : undefined);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee ? Coin.toJSON(message.makerFee) : undefined);
    message.buyerFee !== undefined && (obj.buyerFee = message.buyerFee ? Coin.toJSON(message.buyerFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OrderBoughtActivityData>): OrderBoughtActivityData {
    const message = createBaseOrderBoughtActivityData();
    message.orderAmount = object.orderAmount ?? "";
    message.paidAmount = object.paidAmount ?? "";
    message.makerReceived = object.makerReceived !== undefined && object.makerReceived !== null ? Coin.fromPartial(object.makerReceived) : undefined;
    message.buyerReceived = object.buyerReceived !== undefined && object.buyerReceived !== null ? Coin.fromPartial(object.buyerReceived) : undefined;
    message.makerFee = object.makerFee !== undefined && object.makerFee !== null ? Coin.fromPartial(object.makerFee) : undefined;
    message.buyerFee = object.buyerFee !== undefined && object.buyerFee !== null ? Coin.fromPartial(object.buyerFee) : undefined;
    return message;
  },
  fromAmino(object: OrderBoughtActivityDataAmino): OrderBoughtActivityData {
    const message = createBaseOrderBoughtActivityData();
    if (object.order_amount !== undefined && object.order_amount !== null) {
      message.orderAmount = object.order_amount;
    }
    if (object.paid_amount !== undefined && object.paid_amount !== null) {
      message.paidAmount = object.paid_amount;
    }
    if (object.maker_received !== undefined && object.maker_received !== null) {
      message.makerReceived = Coin.fromAmino(object.maker_received);
    }
    if (object.buyer_received !== undefined && object.buyer_received !== null) {
      message.buyerReceived = Coin.fromAmino(object.buyer_received);
    }
    if (object.maker_fee !== undefined && object.maker_fee !== null) {
      message.makerFee = Coin.fromAmino(object.maker_fee);
    }
    if (object.buyer_fee !== undefined && object.buyer_fee !== null) {
      message.buyerFee = Coin.fromAmino(object.buyer_fee);
    }
    return message;
  },
  toAmino(message: OrderBoughtActivityData, useInterfaces: boolean = true): OrderBoughtActivityDataAmino {
    const obj: any = {};
    obj.order_amount = message.orderAmount === "" ? undefined : message.orderAmount;
    obj.paid_amount = message.paidAmount === "" ? undefined : message.paidAmount;
    obj.maker_received = message.makerReceived ? Coin.toAmino(message.makerReceived, useInterfaces) : undefined;
    obj.buyer_received = message.buyerReceived ? Coin.toAmino(message.buyerReceived, useInterfaces) : undefined;
    obj.maker_fee = message.makerFee ? Coin.toAmino(message.makerFee, useInterfaces) : undefined;
    obj.buyer_fee = message.buyerFee ? Coin.toAmino(message.buyerFee, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderBoughtActivityDataAminoMsg): OrderBoughtActivityData {
    return OrderBoughtActivityData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderBoughtActivityDataProtoMsg, useInterfaces: boolean = true): OrderBoughtActivityData {
    return OrderBoughtActivityData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderBoughtActivityData): Uint8Array {
    return OrderBoughtActivityData.encode(message).finish();
  },
  toProtoMsg(message: OrderBoughtActivityData): OrderBoughtActivityDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.OrderBoughtActivityData",
      value: OrderBoughtActivityData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderBoughtActivityData.typeUrl, OrderBoughtActivityData);
function createBaseOrderReservedActivityData(): OrderReservedActivityData {
  return {
    reservationId: BigInt(0),
    amount: "",
    expirationTime: Timestamp.fromPartial({})
  };
}
export const OrderReservedActivityData = {
  typeUrl: "/pryzmatics.seal.OrderReservedActivityData",
  is(o: any): o is OrderReservedActivityData {
    return o && (o.$typeUrl === OrderReservedActivityData.typeUrl || typeof o.reservationId === "bigint" && typeof o.amount === "string" && Timestamp.is(o.expirationTime));
  },
  isSDK(o: any): o is OrderReservedActivityDataSDKType {
    return o && (o.$typeUrl === OrderReservedActivityData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.amount === "string" && Timestamp.isSDK(o.expiration_time));
  },
  isAmino(o: any): o is OrderReservedActivityDataAmino {
    return o && (o.$typeUrl === OrderReservedActivityData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.amount === "string" && Timestamp.isAmino(o.expiration_time));
  },
  encode(message: OrderReservedActivityData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reservationId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderReservedActivityData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderReservedActivityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationId = reader.uint64();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderReservedActivityData {
    return {
      reservationId: isSet(object.reservationId) ? BigInt(object.reservationId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? String(object.amount) : "",
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined
    };
  },
  toJSON(message: OrderReservedActivityData): unknown {
    const obj: any = {};
    message.reservationId !== undefined && (obj.reservationId = (message.reservationId || BigInt(0)).toString());
    message.amount !== undefined && (obj.amount = message.amount);
    message.expirationTime !== undefined && (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<OrderReservedActivityData>): OrderReservedActivityData {
    const message = createBaseOrderReservedActivityData();
    message.reservationId = object.reservationId !== undefined && object.reservationId !== null ? BigInt(object.reservationId.toString()) : BigInt(0);
    message.amount = object.amount ?? "";
    message.expirationTime = object.expirationTime !== undefined && object.expirationTime !== null ? Timestamp.fromPartial(object.expirationTime) : undefined;
    return message;
  },
  fromAmino(object: OrderReservedActivityDataAmino): OrderReservedActivityData {
    const message = createBaseOrderReservedActivityData();
    if (object.reservation_id !== undefined && object.reservation_id !== null) {
      message.reservationId = BigInt(object.reservation_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.expiration_time !== undefined && object.expiration_time !== null) {
      message.expirationTime = Timestamp.fromAmino(object.expiration_time);
    }
    return message;
  },
  toAmino(message: OrderReservedActivityData, useInterfaces: boolean = true): OrderReservedActivityDataAmino {
    const obj: any = {};
    obj.reservation_id = message.reservationId ? message.reservationId.toString() : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.expiration_time = message.expirationTime ? Timestamp.toAmino(message.expirationTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderReservedActivityDataAminoMsg): OrderReservedActivityData {
    return OrderReservedActivityData.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderReservedActivityDataProtoMsg, useInterfaces: boolean = true): OrderReservedActivityData {
    return OrderReservedActivityData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderReservedActivityData): Uint8Array {
    return OrderReservedActivityData.encode(message).finish();
  },
  toProtoMsg(message: OrderReservedActivityData): OrderReservedActivityDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.OrderReservedActivityData",
      value: OrderReservedActivityData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderReservedActivityData.typeUrl, OrderReservedActivityData);
function createBaseReservationSettledActivityData(): ReservationSettledActivityData {
  return {
    reservationId: BigInt(0),
    orderAmount: "",
    paidAmount: "",
    makerReceived: Coin.fromPartial({}),
    reserverReceived: Coin.fromPartial({}),
    makerFee: Coin.fromPartial({}),
    reserverFee: Coin.fromPartial({}),
    depositPayback: Coin.fromPartial({}),
    protocolDepositPayback: undefined
  };
}
export const ReservationSettledActivityData = {
  typeUrl: "/pryzmatics.seal.ReservationSettledActivityData",
  is(o: any): o is ReservationSettledActivityData {
    return o && (o.$typeUrl === ReservationSettledActivityData.typeUrl || typeof o.reservationId === "bigint" && typeof o.orderAmount === "string" && typeof o.paidAmount === "string" && Coin.is(o.makerReceived) && Coin.is(o.reserverReceived) && Coin.is(o.makerFee) && Coin.is(o.reserverFee) && Coin.is(o.depositPayback));
  },
  isSDK(o: any): o is ReservationSettledActivityDataSDKType {
    return o && (o.$typeUrl === ReservationSettledActivityData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.order_amount === "string" && typeof o.paid_amount === "string" && Coin.isSDK(o.maker_received) && Coin.isSDK(o.reserver_received) && Coin.isSDK(o.maker_fee) && Coin.isSDK(o.reserver_fee) && Coin.isSDK(o.deposit_payback));
  },
  isAmino(o: any): o is ReservationSettledActivityDataAmino {
    return o && (o.$typeUrl === ReservationSettledActivityData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.order_amount === "string" && typeof o.paid_amount === "string" && Coin.isAmino(o.maker_received) && Coin.isAmino(o.reserver_received) && Coin.isAmino(o.maker_fee) && Coin.isAmino(o.reserver_fee) && Coin.isAmino(o.deposit_payback));
  },
  encode(message: ReservationSettledActivityData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reservationId);
    }
    if (message.orderAmount !== "") {
      writer.uint32(18).string(message.orderAmount);
    }
    if (message.paidAmount !== "") {
      writer.uint32(26).string(message.paidAmount);
    }
    if (message.makerReceived !== undefined) {
      Coin.encode(message.makerReceived, writer.uint32(34).fork()).ldelim();
    }
    if (message.reserverReceived !== undefined) {
      Coin.encode(message.reserverReceived, writer.uint32(42).fork()).ldelim();
    }
    if (message.makerFee !== undefined) {
      Coin.encode(message.makerFee, writer.uint32(50).fork()).ldelim();
    }
    if (message.reserverFee !== undefined) {
      Coin.encode(message.reserverFee, writer.uint32(58).fork()).ldelim();
    }
    if (message.depositPayback !== undefined) {
      Coin.encode(message.depositPayback, writer.uint32(66).fork()).ldelim();
    }
    if (message.protocolDepositPayback !== undefined) {
      Coin.encode(message.protocolDepositPayback, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ReservationSettledActivityData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservationSettledActivityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationId = reader.uint64();
          break;
        case 2:
          message.orderAmount = reader.string();
          break;
        case 3:
          message.paidAmount = reader.string();
          break;
        case 4:
          message.makerReceived = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.reserverReceived = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.makerFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.reserverFee = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.depositPayback = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.protocolDepositPayback = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReservationSettledActivityData {
    return {
      reservationId: isSet(object.reservationId) ? BigInt(object.reservationId.toString()) : BigInt(0),
      orderAmount: isSet(object.orderAmount) ? String(object.orderAmount) : "",
      paidAmount: isSet(object.paidAmount) ? String(object.paidAmount) : "",
      makerReceived: isSet(object.makerReceived) ? Coin.fromJSON(object.makerReceived) : undefined,
      reserverReceived: isSet(object.reserverReceived) ? Coin.fromJSON(object.reserverReceived) : undefined,
      makerFee: isSet(object.makerFee) ? Coin.fromJSON(object.makerFee) : undefined,
      reserverFee: isSet(object.reserverFee) ? Coin.fromJSON(object.reserverFee) : undefined,
      depositPayback: isSet(object.depositPayback) ? Coin.fromJSON(object.depositPayback) : undefined,
      protocolDepositPayback: isSet(object.protocolDepositPayback) ? Coin.fromJSON(object.protocolDepositPayback) : undefined
    };
  },
  toJSON(message: ReservationSettledActivityData): unknown {
    const obj: any = {};
    message.reservationId !== undefined && (obj.reservationId = (message.reservationId || BigInt(0)).toString());
    message.orderAmount !== undefined && (obj.orderAmount = message.orderAmount);
    message.paidAmount !== undefined && (obj.paidAmount = message.paidAmount);
    message.makerReceived !== undefined && (obj.makerReceived = message.makerReceived ? Coin.toJSON(message.makerReceived) : undefined);
    message.reserverReceived !== undefined && (obj.reserverReceived = message.reserverReceived ? Coin.toJSON(message.reserverReceived) : undefined);
    message.makerFee !== undefined && (obj.makerFee = message.makerFee ? Coin.toJSON(message.makerFee) : undefined);
    message.reserverFee !== undefined && (obj.reserverFee = message.reserverFee ? Coin.toJSON(message.reserverFee) : undefined);
    message.depositPayback !== undefined && (obj.depositPayback = message.depositPayback ? Coin.toJSON(message.depositPayback) : undefined);
    message.protocolDepositPayback !== undefined && (obj.protocolDepositPayback = message.protocolDepositPayback ? Coin.toJSON(message.protocolDepositPayback) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ReservationSettledActivityData>): ReservationSettledActivityData {
    const message = createBaseReservationSettledActivityData();
    message.reservationId = object.reservationId !== undefined && object.reservationId !== null ? BigInt(object.reservationId.toString()) : BigInt(0);
    message.orderAmount = object.orderAmount ?? "";
    message.paidAmount = object.paidAmount ?? "";
    message.makerReceived = object.makerReceived !== undefined && object.makerReceived !== null ? Coin.fromPartial(object.makerReceived) : undefined;
    message.reserverReceived = object.reserverReceived !== undefined && object.reserverReceived !== null ? Coin.fromPartial(object.reserverReceived) : undefined;
    message.makerFee = object.makerFee !== undefined && object.makerFee !== null ? Coin.fromPartial(object.makerFee) : undefined;
    message.reserverFee = object.reserverFee !== undefined && object.reserverFee !== null ? Coin.fromPartial(object.reserverFee) : undefined;
    message.depositPayback = object.depositPayback !== undefined && object.depositPayback !== null ? Coin.fromPartial(object.depositPayback) : undefined;
    message.protocolDepositPayback = object.protocolDepositPayback !== undefined && object.protocolDepositPayback !== null ? Coin.fromPartial(object.protocolDepositPayback) : undefined;
    return message;
  },
  fromAmino(object: ReservationSettledActivityDataAmino): ReservationSettledActivityData {
    const message = createBaseReservationSettledActivityData();
    if (object.reservation_id !== undefined && object.reservation_id !== null) {
      message.reservationId = BigInt(object.reservation_id);
    }
    if (object.order_amount !== undefined && object.order_amount !== null) {
      message.orderAmount = object.order_amount;
    }
    if (object.paid_amount !== undefined && object.paid_amount !== null) {
      message.paidAmount = object.paid_amount;
    }
    if (object.maker_received !== undefined && object.maker_received !== null) {
      message.makerReceived = Coin.fromAmino(object.maker_received);
    }
    if (object.reserver_received !== undefined && object.reserver_received !== null) {
      message.reserverReceived = Coin.fromAmino(object.reserver_received);
    }
    if (object.maker_fee !== undefined && object.maker_fee !== null) {
      message.makerFee = Coin.fromAmino(object.maker_fee);
    }
    if (object.reserver_fee !== undefined && object.reserver_fee !== null) {
      message.reserverFee = Coin.fromAmino(object.reserver_fee);
    }
    if (object.deposit_payback !== undefined && object.deposit_payback !== null) {
      message.depositPayback = Coin.fromAmino(object.deposit_payback);
    }
    if (object.protocol_deposit_payback !== undefined && object.protocol_deposit_payback !== null) {
      message.protocolDepositPayback = Coin.fromAmino(object.protocol_deposit_payback);
    }
    return message;
  },
  toAmino(message: ReservationSettledActivityData, useInterfaces: boolean = true): ReservationSettledActivityDataAmino {
    const obj: any = {};
    obj.reservation_id = message.reservationId ? message.reservationId.toString() : undefined;
    obj.order_amount = message.orderAmount === "" ? undefined : message.orderAmount;
    obj.paid_amount = message.paidAmount === "" ? undefined : message.paidAmount;
    obj.maker_received = message.makerReceived ? Coin.toAmino(message.makerReceived, useInterfaces) : undefined;
    obj.reserver_received = message.reserverReceived ? Coin.toAmino(message.reserverReceived, useInterfaces) : undefined;
    obj.maker_fee = message.makerFee ? Coin.toAmino(message.makerFee, useInterfaces) : undefined;
    obj.reserver_fee = message.reserverFee ? Coin.toAmino(message.reserverFee, useInterfaces) : undefined;
    obj.deposit_payback = message.depositPayback ? Coin.toAmino(message.depositPayback, useInterfaces) : undefined;
    obj.protocol_deposit_payback = message.protocolDepositPayback ? Coin.toAmino(message.protocolDepositPayback, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ReservationSettledActivityDataAminoMsg): ReservationSettledActivityData {
    return ReservationSettledActivityData.fromAmino(object.value);
  },
  fromProtoMsg(message: ReservationSettledActivityDataProtoMsg, useInterfaces: boolean = true): ReservationSettledActivityData {
    return ReservationSettledActivityData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ReservationSettledActivityData): Uint8Array {
    return ReservationSettledActivityData.encode(message).finish();
  },
  toProtoMsg(message: ReservationSettledActivityData): ReservationSettledActivityDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.ReservationSettledActivityData",
      value: ReservationSettledActivityData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ReservationSettledActivityData.typeUrl, ReservationSettledActivityData);
function createBaseReservationExpiredActivityData(): ReservationExpiredActivityData {
  return {
    reservationId: BigInt(0)
  };
}
export const ReservationExpiredActivityData = {
  typeUrl: "/pryzmatics.seal.ReservationExpiredActivityData",
  is(o: any): o is ReservationExpiredActivityData {
    return o && (o.$typeUrl === ReservationExpiredActivityData.typeUrl || typeof o.reservationId === "bigint");
  },
  isSDK(o: any): o is ReservationExpiredActivityDataSDKType {
    return o && (o.$typeUrl === ReservationExpiredActivityData.typeUrl || typeof o.reservation_id === "bigint");
  },
  isAmino(o: any): o is ReservationExpiredActivityDataAmino {
    return o && (o.$typeUrl === ReservationExpiredActivityData.typeUrl || typeof o.reservation_id === "bigint");
  },
  encode(message: ReservationExpiredActivityData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reservationId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ReservationExpiredActivityData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReservationExpiredActivityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReservationExpiredActivityData {
    return {
      reservationId: isSet(object.reservationId) ? BigInt(object.reservationId.toString()) : BigInt(0)
    };
  },
  toJSON(message: ReservationExpiredActivityData): unknown {
    const obj: any = {};
    message.reservationId !== undefined && (obj.reservationId = (message.reservationId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ReservationExpiredActivityData>): ReservationExpiredActivityData {
    const message = createBaseReservationExpiredActivityData();
    message.reservationId = object.reservationId !== undefined && object.reservationId !== null ? BigInt(object.reservationId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReservationExpiredActivityDataAmino): ReservationExpiredActivityData {
    const message = createBaseReservationExpiredActivityData();
    if (object.reservation_id !== undefined && object.reservation_id !== null) {
      message.reservationId = BigInt(object.reservation_id);
    }
    return message;
  },
  toAmino(message: ReservationExpiredActivityData, useInterfaces: boolean = true): ReservationExpiredActivityDataAmino {
    const obj: any = {};
    obj.reservation_id = message.reservationId ? message.reservationId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReservationExpiredActivityDataAminoMsg): ReservationExpiredActivityData {
    return ReservationExpiredActivityData.fromAmino(object.value);
  },
  fromProtoMsg(message: ReservationExpiredActivityDataProtoMsg, useInterfaces: boolean = true): ReservationExpiredActivityData {
    return ReservationExpiredActivityData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ReservationExpiredActivityData): Uint8Array {
    return ReservationExpiredActivityData.encode(message).finish();
  },
  toProtoMsg(message: ReservationExpiredActivityData): ReservationExpiredActivityDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.ReservationExpiredActivityData",
      value: ReservationExpiredActivityData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ReservationExpiredActivityData.typeUrl, ReservationExpiredActivityData);
function createBaseExpiredReservationDepositPaidActivityData(): ExpiredReservationDepositPaidActivityData {
  return {
    reservationId: BigInt(0),
    expiredAmount: "",
    paidDeposit: Coin.fromPartial({}),
    paidProtocolDeposit: undefined
  };
}
export const ExpiredReservationDepositPaidActivityData = {
  typeUrl: "/pryzmatics.seal.ExpiredReservationDepositPaidActivityData",
  is(o: any): o is ExpiredReservationDepositPaidActivityData {
    return o && (o.$typeUrl === ExpiredReservationDepositPaidActivityData.typeUrl || typeof o.reservationId === "bigint" && typeof o.expiredAmount === "string" && Coin.is(o.paidDeposit));
  },
  isSDK(o: any): o is ExpiredReservationDepositPaidActivityDataSDKType {
    return o && (o.$typeUrl === ExpiredReservationDepositPaidActivityData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.expired_amount === "string" && Coin.isSDK(o.paid_deposit));
  },
  isAmino(o: any): o is ExpiredReservationDepositPaidActivityDataAmino {
    return o && (o.$typeUrl === ExpiredReservationDepositPaidActivityData.typeUrl || typeof o.reservation_id === "bigint" && typeof o.expired_amount === "string" && Coin.isAmino(o.paid_deposit));
  },
  encode(message: ExpiredReservationDepositPaidActivityData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reservationId !== BigInt(0)) {
      writer.uint32(8).uint64(message.reservationId);
    }
    if (message.expiredAmount !== "") {
      writer.uint32(18).string(message.expiredAmount);
    }
    if (message.paidDeposit !== undefined) {
      Coin.encode(message.paidDeposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.paidProtocolDeposit !== undefined) {
      Coin.encode(message.paidProtocolDeposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ExpiredReservationDepositPaidActivityData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpiredReservationDepositPaidActivityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reservationId = reader.uint64();
          break;
        case 2:
          message.expiredAmount = reader.string();
          break;
        case 3:
          message.paidDeposit = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.paidProtocolDeposit = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExpiredReservationDepositPaidActivityData {
    return {
      reservationId: isSet(object.reservationId) ? BigInt(object.reservationId.toString()) : BigInt(0),
      expiredAmount: isSet(object.expiredAmount) ? String(object.expiredAmount) : "",
      paidDeposit: isSet(object.paidDeposit) ? Coin.fromJSON(object.paidDeposit) : undefined,
      paidProtocolDeposit: isSet(object.paidProtocolDeposit) ? Coin.fromJSON(object.paidProtocolDeposit) : undefined
    };
  },
  toJSON(message: ExpiredReservationDepositPaidActivityData): unknown {
    const obj: any = {};
    message.reservationId !== undefined && (obj.reservationId = (message.reservationId || BigInt(0)).toString());
    message.expiredAmount !== undefined && (obj.expiredAmount = message.expiredAmount);
    message.paidDeposit !== undefined && (obj.paidDeposit = message.paidDeposit ? Coin.toJSON(message.paidDeposit) : undefined);
    message.paidProtocolDeposit !== undefined && (obj.paidProtocolDeposit = message.paidProtocolDeposit ? Coin.toJSON(message.paidProtocolDeposit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ExpiredReservationDepositPaidActivityData>): ExpiredReservationDepositPaidActivityData {
    const message = createBaseExpiredReservationDepositPaidActivityData();
    message.reservationId = object.reservationId !== undefined && object.reservationId !== null ? BigInt(object.reservationId.toString()) : BigInt(0);
    message.expiredAmount = object.expiredAmount ?? "";
    message.paidDeposit = object.paidDeposit !== undefined && object.paidDeposit !== null ? Coin.fromPartial(object.paidDeposit) : undefined;
    message.paidProtocolDeposit = object.paidProtocolDeposit !== undefined && object.paidProtocolDeposit !== null ? Coin.fromPartial(object.paidProtocolDeposit) : undefined;
    return message;
  },
  fromAmino(object: ExpiredReservationDepositPaidActivityDataAmino): ExpiredReservationDepositPaidActivityData {
    const message = createBaseExpiredReservationDepositPaidActivityData();
    if (object.reservation_id !== undefined && object.reservation_id !== null) {
      message.reservationId = BigInt(object.reservation_id);
    }
    if (object.expired_amount !== undefined && object.expired_amount !== null) {
      message.expiredAmount = object.expired_amount;
    }
    if (object.paid_deposit !== undefined && object.paid_deposit !== null) {
      message.paidDeposit = Coin.fromAmino(object.paid_deposit);
    }
    if (object.paid_protocol_deposit !== undefined && object.paid_protocol_deposit !== null) {
      message.paidProtocolDeposit = Coin.fromAmino(object.paid_protocol_deposit);
    }
    return message;
  },
  toAmino(message: ExpiredReservationDepositPaidActivityData, useInterfaces: boolean = true): ExpiredReservationDepositPaidActivityDataAmino {
    const obj: any = {};
    obj.reservation_id = message.reservationId ? message.reservationId.toString() : undefined;
    obj.expired_amount = message.expiredAmount === "" ? undefined : message.expiredAmount;
    obj.paid_deposit = message.paidDeposit ? Coin.toAmino(message.paidDeposit, useInterfaces) : undefined;
    obj.paid_protocol_deposit = message.paidProtocolDeposit ? Coin.toAmino(message.paidProtocolDeposit, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExpiredReservationDepositPaidActivityDataAminoMsg): ExpiredReservationDepositPaidActivityData {
    return ExpiredReservationDepositPaidActivityData.fromAmino(object.value);
  },
  fromProtoMsg(message: ExpiredReservationDepositPaidActivityDataProtoMsg, useInterfaces: boolean = true): ExpiredReservationDepositPaidActivityData {
    return ExpiredReservationDepositPaidActivityData.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ExpiredReservationDepositPaidActivityData): Uint8Array {
    return ExpiredReservationDepositPaidActivityData.encode(message).finish();
  },
  toProtoMsg(message: ExpiredReservationDepositPaidActivityData): ExpiredReservationDepositPaidActivityDataProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.ExpiredReservationDepositPaidActivityData",
      value: ExpiredReservationDepositPaidActivityData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExpiredReservationDepositPaidActivityData.typeUrl, ExpiredReservationDepositPaidActivityData);