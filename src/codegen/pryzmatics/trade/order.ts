import { Order as Order1 } from "../../pryzm/amm/v1/order";
import { OrderAmino as Order1Amino } from "../../pryzm/amm/v1/order";
import { OrderSDKType as Order1SDKType } from "../../pryzm/amm/v1/order";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { GlobalDecoderRegistry } from "../../registry";
export enum OrderStatus {
  ORDER_STATUS_UNKNOWN = 0,
  ORDER_STATUS_SCHEDULE_QUEUE = 1,
  ORDER_STATUS_EXECUTION_QUEUE = 2,
  ORDER_STATUS_CANCELED = 3,
  ORDER_STATUS_FINISHED = 4,
  ORDER_STATUS_DEPOSIT_FAILED = 5,
  UNRECOGNIZED = -1,
}
export const OrderStatusSDKType = OrderStatus;
export const OrderStatusAmino = OrderStatus;
export function orderStatusFromJSON(object: any): OrderStatus {
  switch (object) {
    case 0:
    case "ORDER_STATUS_UNKNOWN":
      return OrderStatus.ORDER_STATUS_UNKNOWN;
    case 1:
    case "ORDER_STATUS_SCHEDULE_QUEUE":
      return OrderStatus.ORDER_STATUS_SCHEDULE_QUEUE;
    case 2:
    case "ORDER_STATUS_EXECUTION_QUEUE":
      return OrderStatus.ORDER_STATUS_EXECUTION_QUEUE;
    case 3:
    case "ORDER_STATUS_CANCELED":
      return OrderStatus.ORDER_STATUS_CANCELED;
    case 4:
    case "ORDER_STATUS_FINISHED":
      return OrderStatus.ORDER_STATUS_FINISHED;
    case 5:
    case "ORDER_STATUS_DEPOSIT_FAILED":
      return OrderStatus.ORDER_STATUS_DEPOSIT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStatus.UNRECOGNIZED;
  }
}
export function orderStatusToJSON(object: OrderStatus): string {
  switch (object) {
    case OrderStatus.ORDER_STATUS_UNKNOWN:
      return "ORDER_STATUS_UNKNOWN";
    case OrderStatus.ORDER_STATUS_SCHEDULE_QUEUE:
      return "ORDER_STATUS_SCHEDULE_QUEUE";
    case OrderStatus.ORDER_STATUS_EXECUTION_QUEUE:
      return "ORDER_STATUS_EXECUTION_QUEUE";
    case OrderStatus.ORDER_STATUS_CANCELED:
      return "ORDER_STATUS_CANCELED";
    case OrderStatus.ORDER_STATUS_FINISHED:
      return "ORDER_STATUS_FINISHED";
    case OrderStatus.ORDER_STATUS_DEPOSIT_FAILED:
      return "ORDER_STATUS_DEPOSIT_FAILED";
    case OrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum QueryOrderStatus {
  QUERY_ORDER_STATUS_ANY = 0,
  QUERY_ORDER_STATUS_SCHEDULE_QUEUE = 1,
  QUERY_ORDER_STATUS_EXECUTION_QUEUE = 2,
  QUERY_ORDER_STATUS_CANCELED = 3,
  QUERY_ORDER_STATUS_FINISHED = 4,
  /** QUERY_ORDER_STATUS_LIVE - LIVE is SCHEDULE or EXECUTION */
  QUERY_ORDER_STATUS_LIVE = 5,
  /** QUERY_ORDER_STATUS_NOT_LIVE - NOT_LIVE is CANCELED or FINISHED */
  QUERY_ORDER_STATUS_NOT_LIVE = 6,
  QUERY_ORDER_STATUS_DEPOSIT_FAILED = 7,
  UNRECOGNIZED = -1,
}
export const QueryOrderStatusSDKType = QueryOrderStatus;
export const QueryOrderStatusAmino = QueryOrderStatus;
export function queryOrderStatusFromJSON(object: any): QueryOrderStatus {
  switch (object) {
    case 0:
    case "QUERY_ORDER_STATUS_ANY":
      return QueryOrderStatus.QUERY_ORDER_STATUS_ANY;
    case 1:
    case "QUERY_ORDER_STATUS_SCHEDULE_QUEUE":
      return QueryOrderStatus.QUERY_ORDER_STATUS_SCHEDULE_QUEUE;
    case 2:
    case "QUERY_ORDER_STATUS_EXECUTION_QUEUE":
      return QueryOrderStatus.QUERY_ORDER_STATUS_EXECUTION_QUEUE;
    case 3:
    case "QUERY_ORDER_STATUS_CANCELED":
      return QueryOrderStatus.QUERY_ORDER_STATUS_CANCELED;
    case 4:
    case "QUERY_ORDER_STATUS_FINISHED":
      return QueryOrderStatus.QUERY_ORDER_STATUS_FINISHED;
    case 5:
    case "QUERY_ORDER_STATUS_LIVE":
      return QueryOrderStatus.QUERY_ORDER_STATUS_LIVE;
    case 6:
    case "QUERY_ORDER_STATUS_NOT_LIVE":
      return QueryOrderStatus.QUERY_ORDER_STATUS_NOT_LIVE;
    case 7:
    case "QUERY_ORDER_STATUS_DEPOSIT_FAILED":
      return QueryOrderStatus.QUERY_ORDER_STATUS_DEPOSIT_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QueryOrderStatus.UNRECOGNIZED;
  }
}
export function queryOrderStatusToJSON(object: QueryOrderStatus): string {
  switch (object) {
    case QueryOrderStatus.QUERY_ORDER_STATUS_ANY:
      return "QUERY_ORDER_STATUS_ANY";
    case QueryOrderStatus.QUERY_ORDER_STATUS_SCHEDULE_QUEUE:
      return "QUERY_ORDER_STATUS_SCHEDULE_QUEUE";
    case QueryOrderStatus.QUERY_ORDER_STATUS_EXECUTION_QUEUE:
      return "QUERY_ORDER_STATUS_EXECUTION_QUEUE";
    case QueryOrderStatus.QUERY_ORDER_STATUS_CANCELED:
      return "QUERY_ORDER_STATUS_CANCELED";
    case QueryOrderStatus.QUERY_ORDER_STATUS_FINISHED:
      return "QUERY_ORDER_STATUS_FINISHED";
    case QueryOrderStatus.QUERY_ORDER_STATUS_LIVE:
      return "QUERY_ORDER_STATUS_LIVE";
    case QueryOrderStatus.QUERY_ORDER_STATUS_NOT_LIVE:
      return "QUERY_ORDER_STATUS_NOT_LIVE";
    case QueryOrderStatus.QUERY_ORDER_STATUS_DEPOSIT_FAILED:
      return "QUERY_ORDER_STATUS_DEPOSIT_FAILED";
    case QueryOrderStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Order {
  ammOrder: Order1;
  creationTime: Timestamp;
  totalAmount: string;
  progress: string;
  amountOut: string;
  status: OrderStatus;
  statusTime: Timestamp;
  nextStepTime?: Timestamp;
}
export interface OrderProtoMsg {
  typeUrl: "/pryzmatics.trade.Order";
  value: Uint8Array;
}
export interface OrderAmino {
  amm_order?: Order1Amino;
  creation_time?: string;
  total_amount?: string;
  progress?: string;
  amount_out?: string;
  status?: OrderStatus;
  status_time?: string;
  next_step_time?: string;
}
export interface OrderAminoMsg {
  type: "/pryzmatics.trade.Order";
  value: OrderAmino;
}
export interface OrderSDKType {
  amm_order: Order1SDKType;
  creation_time: TimestampSDKType;
  total_amount: string;
  progress: string;
  amount_out: string;
  status: OrderStatus;
  status_time: TimestampSDKType;
  next_step_time?: TimestampSDKType;
}
export interface MatchableOrderCount {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  buyCount: bigint;
  sellCount: bigint;
}
export interface MatchableOrderCountProtoMsg {
  typeUrl: "/pryzmatics.trade.MatchableOrderCount";
  value: Uint8Array;
}
export interface MatchableOrderCountAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
  buy_count?: string;
  sell_count?: string;
}
export interface MatchableOrderCountAminoMsg {
  type: "/pryzmatics.trade.MatchableOrderCount";
  value: MatchableOrderCountAmino;
}
export interface MatchableOrderCountSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  buy_count: bigint;
  sell_count: bigint;
}
export interface OrderCreatorBalance {
  creator: string;
  denom: string;
  balance?: string;
  /**
   * counts the number of matchable orders selling this token,
   * when this count gets to zero, we remove the data from database
   */
  orderCount: bigint;
}
export interface OrderCreatorBalanceProtoMsg {
  typeUrl: "/pryzmatics.trade.OrderCreatorBalance";
  value: Uint8Array;
}
export interface OrderCreatorBalanceAmino {
  creator?: string;
  denom?: string;
  balance?: string;
  /**
   * counts the number of matchable orders selling this token,
   * when this count gets to zero, we remove the data from database
   */
  order_count?: string;
}
export interface OrderCreatorBalanceAminoMsg {
  type: "/pryzmatics.trade.OrderCreatorBalance";
  value: OrderCreatorBalanceAmino;
}
export interface OrderCreatorBalanceSDKType {
  creator: string;
  denom: string;
  balance?: string;
  order_count: bigint;
}
export interface MatchableOrder {
  id: bigint;
  creator: string;
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  depositedAmount: string;
  remainingAmount: string;
  balance: string;
  maxMatchingSpotPrice?: string;
  status: OrderStatus;
}
export interface MatchableOrderProtoMsg {
  typeUrl: "/pryzmatics.trade.MatchableOrder";
  value: Uint8Array;
}
export interface MatchableOrderAmino {
  id?: string;
  creator?: string;
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
  deposited_amount?: string;
  remaining_amount?: string;
  balance?: string;
  max_matching_spot_price?: string;
  status?: OrderStatus;
}
export interface MatchableOrderAminoMsg {
  type: "/pryzmatics.trade.MatchableOrder";
  value: MatchableOrderAmino;
}
export interface MatchableOrderSDKType {
  id: bigint;
  creator: string;
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  deposited_amount: string;
  remaining_amount: string;
  balance: string;
  max_matching_spot_price?: string;
  status: OrderStatus;
}
export interface OrderPairMetrics {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  totalRemaining: string;
  totalActiveOrderCount: bigint;
  totalRemainingWithoutLimit: string;
  totalActiveOrderWithoutLimitCount: bigint;
  totalInTheMoneyAmount: string;
  totalInTheMoneyCount: bigint;
  totalOutTheMoneyAmount: string;
  totalOutTheMoneyCount: bigint;
  lastPostProcessHeight: bigint;
}
export interface OrderPairMetricsProtoMsg {
  typeUrl: "/pryzmatics.trade.OrderPairMetrics";
  value: Uint8Array;
}
export interface OrderPairMetricsAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
  total_remaining?: string;
  total_active_order_count?: string;
  total_remaining_without_limit?: string;
  total_active_order_without_limit_count?: string;
  total_in_the_money_amount?: string;
  total_in_the_money_count?: string;
  total_out_the_money_amount?: string;
  total_out_the_money_count?: string;
  last_post_process_height?: string;
}
export interface OrderPairMetricsAminoMsg {
  type: "/pryzmatics.trade.OrderPairMetrics";
  value: OrderPairMetricsAmino;
}
export interface OrderPairMetricsSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  total_remaining: string;
  total_active_order_count: bigint;
  total_remaining_without_limit: string;
  total_active_order_without_limit_count: bigint;
  total_in_the_money_amount: string;
  total_in_the_money_count: bigint;
  total_out_the_money_amount: string;
  total_out_the_money_count: bigint;
  last_post_process_height: bigint;
}
export interface OrderMetrics {
  totalRemaining: string;
  totalActiveOrderCount: bigint;
  totalRemainingWithoutLimit: string;
  totalActiveOrderWithoutLimitCount: bigint;
  totalInTheMoneyAmount: string;
  totalInTheMoneyCount: bigint;
  totalOutTheMoneyAmount: string;
  totalOutTheMoneyCount: bigint;
  lastPostProcessHeight: bigint;
}
export interface OrderMetricsProtoMsg {
  typeUrl: "/pryzmatics.trade.OrderMetrics";
  value: Uint8Array;
}
export interface OrderMetricsAmino {
  total_remaining?: string;
  total_active_order_count?: string;
  total_remaining_without_limit?: string;
  total_active_order_without_limit_count?: string;
  total_in_the_money_amount?: string;
  total_in_the_money_count?: string;
  total_out_the_money_amount?: string;
  total_out_the_money_count?: string;
  last_post_process_height?: string;
}
export interface OrderMetricsAminoMsg {
  type: "/pryzmatics.trade.OrderMetrics";
  value: OrderMetricsAmino;
}
export interface OrderMetricsSDKType {
  total_remaining: string;
  total_active_order_count: bigint;
  total_remaining_without_limit: string;
  total_active_order_without_limit_count: bigint;
  total_in_the_money_amount: string;
  total_in_the_money_count: bigint;
  total_out_the_money_amount: string;
  total_out_the_money_count: bigint;
  last_post_process_height: bigint;
}
export interface AggregatedOrderPairPriceBucket {
  start: string;
  end: string;
  amount: string;
  count: bigint;
  accumulativeAmount: string;
  accumulativeCount: bigint;
}
export interface AggregatedOrderPairPriceBucketProtoMsg {
  typeUrl: "/pryzmatics.trade.AggregatedOrderPairPriceBucket";
  value: Uint8Array;
}
export interface AggregatedOrderPairPriceBucketAmino {
  start?: string;
  end?: string;
  amount?: string;
  count?: string;
  accumulative_amount?: string;
  accumulative_count?: string;
}
export interface AggregatedOrderPairPriceBucketAminoMsg {
  type: "/pryzmatics.trade.AggregatedOrderPairPriceBucket";
  value: AggregatedOrderPairPriceBucketAmino;
}
export interface AggregatedOrderPairPriceBucketSDKType {
  start: string;
  end: string;
  amount: string;
  count: bigint;
  accumulative_amount: string;
  accumulative_count: bigint;
}
export interface OrderPairPriceBucket {
  poolId: bigint;
  tokenIn: string;
  tokenOut: string;
  whitelistedRoute: boolean;
  start: string;
  end: string;
  amount: string;
  count: bigint;
}
export interface OrderPairPriceBucketProtoMsg {
  typeUrl: "/pryzmatics.trade.OrderPairPriceBucket";
  value: Uint8Array;
}
export interface OrderPairPriceBucketAmino {
  pool_id?: string;
  token_in?: string;
  token_out?: string;
  whitelisted_route?: boolean;
  start?: string;
  end?: string;
  amount?: string;
  count?: string;
}
export interface OrderPairPriceBucketAminoMsg {
  type: "/pryzmatics.trade.OrderPairPriceBucket";
  value: OrderPairPriceBucketAmino;
}
export interface OrderPairPriceBucketSDKType {
  pool_id: bigint;
  token_in: string;
  token_out: string;
  whitelisted_route: boolean;
  start: string;
  end: string;
  amount: string;
  count: bigint;
}
function createBaseOrder(): Order {
  return {
    ammOrder: Order1.fromPartial({}),
    creationTime: Timestamp.fromPartial({}),
    totalAmount: "",
    progress: "",
    amountOut: "",
    status: 0,
    statusTime: Timestamp.fromPartial({}),
    nextStepTime: undefined
  };
}
export const Order = {
  typeUrl: "/pryzmatics.trade.Order",
  is(o: any): o is Order {
    return o && (o.$typeUrl === Order.typeUrl || Order1.is(o.ammOrder) && Timestamp.is(o.creationTime) && typeof o.totalAmount === "string" && typeof o.progress === "string" && typeof o.amountOut === "string" && isSet(o.status) && Timestamp.is(o.statusTime));
  },
  isSDK(o: any): o is OrderSDKType {
    return o && (o.$typeUrl === Order.typeUrl || Order1.isSDK(o.amm_order) && Timestamp.isSDK(o.creation_time) && typeof o.total_amount === "string" && typeof o.progress === "string" && typeof o.amount_out === "string" && isSet(o.status) && Timestamp.isSDK(o.status_time));
  },
  isAmino(o: any): o is OrderAmino {
    return o && (o.$typeUrl === Order.typeUrl || Order1.isAmino(o.amm_order) && Timestamp.isAmino(o.creation_time) && typeof o.total_amount === "string" && typeof o.progress === "string" && typeof o.amount_out === "string" && isSet(o.status) && Timestamp.isAmino(o.status_time));
  },
  encode(message: Order, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ammOrder !== undefined) {
      Order1.encode(message.ammOrder, writer.uint32(10).fork()).ldelim();
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(message.creationTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalAmount !== "") {
      writer.uint32(26).string(message.totalAmount);
    }
    if (message.progress !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.progress, 18).atomics);
    }
    if (message.amountOut !== "") {
      writer.uint32(114).string(message.amountOut);
    }
    if (message.status !== 0) {
      writer.uint32(120).int32(message.status);
    }
    if (message.statusTime !== undefined) {
      Timestamp.encode(message.statusTime, writer.uint32(130).fork()).ldelim();
    }
    if (message.nextStepTime !== undefined) {
      Timestamp.encode(message.nextStepTime, writer.uint32(138).fork()).ldelim();
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
          message.ammOrder = Order1.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.creationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalAmount = reader.string();
          break;
        case 4:
          message.progress = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.amountOut = reader.string();
          break;
        case 15:
          message.status = (reader.int32() as any);
          break;
        case 16:
          message.statusTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 17:
          message.nextStepTime = Timestamp.decode(reader, reader.uint32());
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
      ammOrder: isSet(object.ammOrder) ? Order1.fromJSON(object.ammOrder) : undefined,
      creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
      totalAmount: isSet(object.totalAmount) ? String(object.totalAmount) : "",
      progress: isSet(object.progress) ? String(object.progress) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : -1,
      statusTime: isSet(object.statusTime) ? fromJsonTimestamp(object.statusTime) : undefined,
      nextStepTime: isSet(object.nextStepTime) ? fromJsonTimestamp(object.nextStepTime) : undefined
    };
  },
  toJSON(message: Order): unknown {
    const obj: any = {};
    message.ammOrder !== undefined && (obj.ammOrder = message.ammOrder ? Order1.toJSON(message.ammOrder) : undefined);
    message.creationTime !== undefined && (obj.creationTime = fromTimestamp(message.creationTime).toISOString());
    message.totalAmount !== undefined && (obj.totalAmount = message.totalAmount);
    message.progress !== undefined && (obj.progress = message.progress);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.status !== undefined && (obj.status = orderStatusToJSON(message.status));
    message.statusTime !== undefined && (obj.statusTime = fromTimestamp(message.statusTime).toISOString());
    message.nextStepTime !== undefined && (obj.nextStepTime = fromTimestamp(message.nextStepTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Order>): Order {
    const message = createBaseOrder();
    message.ammOrder = object.ammOrder !== undefined && object.ammOrder !== null ? Order1.fromPartial(object.ammOrder) : undefined;
    message.creationTime = object.creationTime !== undefined && object.creationTime !== null ? Timestamp.fromPartial(object.creationTime) : undefined;
    message.totalAmount = object.totalAmount ?? "";
    message.progress = object.progress ?? "";
    message.amountOut = object.amountOut ?? "";
    message.status = object.status ?? 0;
    message.statusTime = object.statusTime !== undefined && object.statusTime !== null ? Timestamp.fromPartial(object.statusTime) : undefined;
    message.nextStepTime = object.nextStepTime !== undefined && object.nextStepTime !== null ? Timestamp.fromPartial(object.nextStepTime) : undefined;
    return message;
  },
  fromAmino(object: OrderAmino): Order {
    const message = createBaseOrder();
    if (object.amm_order !== undefined && object.amm_order !== null) {
      message.ammOrder = Order1.fromAmino(object.amm_order);
    }
    if (object.creation_time !== undefined && object.creation_time !== null) {
      message.creationTime = Timestamp.fromAmino(object.creation_time);
    }
    if (object.total_amount !== undefined && object.total_amount !== null) {
      message.totalAmount = object.total_amount;
    }
    if (object.progress !== undefined && object.progress !== null) {
      message.progress = object.progress;
    }
    if (object.amount_out !== undefined && object.amount_out !== null) {
      message.amountOut = object.amount_out;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.status_time !== undefined && object.status_time !== null) {
      message.statusTime = Timestamp.fromAmino(object.status_time);
    }
    if (object.next_step_time !== undefined && object.next_step_time !== null) {
      message.nextStepTime = Timestamp.fromAmino(object.next_step_time);
    }
    return message;
  },
  toAmino(message: Order, useInterfaces: boolean = true): OrderAmino {
    const obj: any = {};
    obj.amm_order = message.ammOrder ? Order1.toAmino(message.ammOrder, useInterfaces) : undefined;
    obj.creation_time = message.creationTime ? Timestamp.toAmino(message.creationTime, useInterfaces) : undefined;
    obj.total_amount = message.totalAmount === "" ? undefined : message.totalAmount;
    obj.progress = padDecimal(message.progress) === "" ? undefined : padDecimal(message.progress);
    obj.amount_out = message.amountOut === "" ? undefined : message.amountOut;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.status_time = message.statusTime ? Timestamp.toAmino(message.statusTime, useInterfaces) : undefined;
    obj.next_step_time = message.nextStepTime ? Timestamp.toAmino(message.nextStepTime, useInterfaces) : undefined;
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
      typeUrl: "/pryzmatics.trade.Order",
      value: Order.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Order.typeUrl, Order);
function createBaseMatchableOrderCount(): MatchableOrderCount {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    buyCount: BigInt(0),
    sellCount: BigInt(0)
  };
}
export const MatchableOrderCount = {
  typeUrl: "/pryzmatics.trade.MatchableOrderCount",
  is(o: any): o is MatchableOrderCount {
    return o && (o.$typeUrl === MatchableOrderCount.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.whitelistedRoute === "boolean" && typeof o.buyCount === "bigint" && typeof o.sellCount === "bigint");
  },
  isSDK(o: any): o is MatchableOrderCountSDKType {
    return o && (o.$typeUrl === MatchableOrderCount.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.buy_count === "bigint" && typeof o.sell_count === "bigint");
  },
  isAmino(o: any): o is MatchableOrderCountAmino {
    return o && (o.$typeUrl === MatchableOrderCount.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.buy_count === "bigint" && typeof o.sell_count === "bigint");
  },
  encode(message: MatchableOrderCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (message.buyCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.buyCount);
    }
    if (message.sellCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.sellCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MatchableOrderCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchableOrderCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.buyCount = reader.uint64();
          break;
        case 6:
          message.sellCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MatchableOrderCount {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      buyCount: isSet(object.buyCount) ? BigInt(object.buyCount.toString()) : BigInt(0),
      sellCount: isSet(object.sellCount) ? BigInt(object.sellCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: MatchableOrderCount): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.buyCount !== undefined && (obj.buyCount = (message.buyCount || BigInt(0)).toString());
    message.sellCount !== undefined && (obj.sellCount = (message.sellCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MatchableOrderCount>): MatchableOrderCount {
    const message = createBaseMatchableOrderCount();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.buyCount = object.buyCount !== undefined && object.buyCount !== null ? BigInt(object.buyCount.toString()) : BigInt(0);
    message.sellCount = object.sellCount !== undefined && object.sellCount !== null ? BigInt(object.sellCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MatchableOrderCountAmino): MatchableOrderCount {
    const message = createBaseMatchableOrderCount();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.buy_count !== undefined && object.buy_count !== null) {
      message.buyCount = BigInt(object.buy_count);
    }
    if (object.sell_count !== undefined && object.sell_count !== null) {
      message.sellCount = BigInt(object.sell_count);
    }
    return message;
  },
  toAmino(message: MatchableOrderCount, useInterfaces: boolean = true): MatchableOrderCountAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.buy_count = message.buyCount ? message.buyCount.toString() : undefined;
    obj.sell_count = message.sellCount ? message.sellCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MatchableOrderCountAminoMsg): MatchableOrderCount {
    return MatchableOrderCount.fromAmino(object.value);
  },
  fromProtoMsg(message: MatchableOrderCountProtoMsg, useInterfaces: boolean = true): MatchableOrderCount {
    return MatchableOrderCount.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MatchableOrderCount): Uint8Array {
    return MatchableOrderCount.encode(message).finish();
  },
  toProtoMsg(message: MatchableOrderCount): MatchableOrderCountProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.MatchableOrderCount",
      value: MatchableOrderCount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MatchableOrderCount.typeUrl, MatchableOrderCount);
function createBaseOrderCreatorBalance(): OrderCreatorBalance {
  return {
    creator: "",
    denom: "",
    balance: undefined,
    orderCount: BigInt(0)
  };
}
export const OrderCreatorBalance = {
  typeUrl: "/pryzmatics.trade.OrderCreatorBalance",
  is(o: any): o is OrderCreatorBalance {
    return o && (o.$typeUrl === OrderCreatorBalance.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.orderCount === "bigint");
  },
  isSDK(o: any): o is OrderCreatorBalanceSDKType {
    return o && (o.$typeUrl === OrderCreatorBalance.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.order_count === "bigint");
  },
  isAmino(o: any): o is OrderCreatorBalanceAmino {
    return o && (o.$typeUrl === OrderCreatorBalance.typeUrl || typeof o.creator === "string" && typeof o.denom === "string" && typeof o.order_count === "bigint");
  },
  encode(message: OrderCreatorBalance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.balance !== undefined) {
      writer.uint32(26).string(message.balance);
    }
    if (message.orderCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.orderCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderCreatorBalance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCreatorBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 4:
          message.orderCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderCreatorBalance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      balance: isSet(object.balance) ? String(object.balance) : undefined,
      orderCount: isSet(object.orderCount) ? BigInt(object.orderCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: OrderCreatorBalance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.balance !== undefined && (obj.balance = message.balance);
    message.orderCount !== undefined && (obj.orderCount = (message.orderCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OrderCreatorBalance>): OrderCreatorBalance {
    const message = createBaseOrderCreatorBalance();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.balance = object.balance ?? undefined;
    message.orderCount = object.orderCount !== undefined && object.orderCount !== null ? BigInt(object.orderCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OrderCreatorBalanceAmino): OrderCreatorBalance {
    const message = createBaseOrderCreatorBalance();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.order_count !== undefined && object.order_count !== null) {
      message.orderCount = BigInt(object.order_count);
    }
    return message;
  },
  toAmino(message: OrderCreatorBalance, useInterfaces: boolean = true): OrderCreatorBalanceAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.balance = message.balance === null ? undefined : message.balance;
    obj.order_count = message.orderCount ? message.orderCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderCreatorBalanceAminoMsg): OrderCreatorBalance {
    return OrderCreatorBalance.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderCreatorBalanceProtoMsg, useInterfaces: boolean = true): OrderCreatorBalance {
    return OrderCreatorBalance.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderCreatorBalance): Uint8Array {
    return OrderCreatorBalance.encode(message).finish();
  },
  toProtoMsg(message: OrderCreatorBalance): OrderCreatorBalanceProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.OrderCreatorBalance",
      value: OrderCreatorBalance.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderCreatorBalance.typeUrl, OrderCreatorBalance);
function createBaseMatchableOrder(): MatchableOrder {
  return {
    id: BigInt(0),
    creator: "",
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    depositedAmount: "",
    remainingAmount: "",
    balance: "",
    maxMatchingSpotPrice: undefined,
    status: 0
  };
}
export const MatchableOrder = {
  typeUrl: "/pryzmatics.trade.MatchableOrder",
  is(o: any): o is MatchableOrder {
    return o && (o.$typeUrl === MatchableOrder.typeUrl || typeof o.id === "bigint" && typeof o.creator === "string" && typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.whitelistedRoute === "boolean" && typeof o.depositedAmount === "string" && typeof o.remainingAmount === "string" && typeof o.balance === "string" && isSet(o.status));
  },
  isSDK(o: any): o is MatchableOrderSDKType {
    return o && (o.$typeUrl === MatchableOrder.typeUrl || typeof o.id === "bigint" && typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.deposited_amount === "string" && typeof o.remaining_amount === "string" && typeof o.balance === "string" && isSet(o.status));
  },
  isAmino(o: any): o is MatchableOrderAmino {
    return o && (o.$typeUrl === MatchableOrder.typeUrl || typeof o.id === "bigint" && typeof o.creator === "string" && typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.deposited_amount === "string" && typeof o.remaining_amount === "string" && typeof o.balance === "string" && isSet(o.status));
  },
  encode(message: MatchableOrder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(24).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(34).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(42).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(48).bool(message.whitelistedRoute);
    }
    if (message.depositedAmount !== "") {
      writer.uint32(58).string(message.depositedAmount);
    }
    if (message.remainingAmount !== "") {
      writer.uint32(66).string(message.remainingAmount);
    }
    if (message.balance !== "") {
      writer.uint32(74).string(message.balance);
    }
    if (message.maxMatchingSpotPrice !== undefined) {
      writer.uint32(82).string(Decimal.fromUserInput(message.maxMatchingSpotPrice, 18).atomics);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): MatchableOrder {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchableOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.poolId = reader.uint64();
          break;
        case 4:
          message.tokenIn = reader.string();
          break;
        case 5:
          message.tokenOut = reader.string();
          break;
        case 6:
          message.whitelistedRoute = reader.bool();
          break;
        case 7:
          message.depositedAmount = reader.string();
          break;
        case 8:
          message.remainingAmount = reader.string();
          break;
        case 9:
          message.balance = reader.string();
          break;
        case 10:
          message.maxMatchingSpotPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.status = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MatchableOrder {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      depositedAmount: isSet(object.depositedAmount) ? String(object.depositedAmount) : "",
      remainingAmount: isSet(object.remainingAmount) ? String(object.remainingAmount) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      maxMatchingSpotPrice: isSet(object.maxMatchingSpotPrice) ? String(object.maxMatchingSpotPrice) : undefined,
      status: isSet(object.status) ? orderStatusFromJSON(object.status) : -1
    };
  },
  toJSON(message: MatchableOrder): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.depositedAmount !== undefined && (obj.depositedAmount = message.depositedAmount);
    message.remainingAmount !== undefined && (obj.remainingAmount = message.remainingAmount);
    message.balance !== undefined && (obj.balance = message.balance);
    message.maxMatchingSpotPrice !== undefined && (obj.maxMatchingSpotPrice = message.maxMatchingSpotPrice);
    message.status !== undefined && (obj.status = orderStatusToJSON(message.status));
    return obj;
  },
  fromPartial(object: Partial<MatchableOrder>): MatchableOrder {
    const message = createBaseMatchableOrder();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.creator = object.creator ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.depositedAmount = object.depositedAmount ?? "";
    message.remainingAmount = object.remainingAmount ?? "";
    message.balance = object.balance ?? "";
    message.maxMatchingSpotPrice = object.maxMatchingSpotPrice ?? undefined;
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MatchableOrderAmino): MatchableOrder {
    const message = createBaseMatchableOrder();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.deposited_amount !== undefined && object.deposited_amount !== null) {
      message.depositedAmount = object.deposited_amount;
    }
    if (object.remaining_amount !== undefined && object.remaining_amount !== null) {
      message.remainingAmount = object.remaining_amount;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.max_matching_spot_price !== undefined && object.max_matching_spot_price !== null) {
      message.maxMatchingSpotPrice = object.max_matching_spot_price;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MatchableOrder, useInterfaces: boolean = true): MatchableOrderAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.deposited_amount = message.depositedAmount === "" ? undefined : message.depositedAmount;
    obj.remaining_amount = message.remainingAmount === "" ? undefined : message.remainingAmount;
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.max_matching_spot_price = padDecimal(message.maxMatchingSpotPrice) === null ? undefined : padDecimal(message.maxMatchingSpotPrice);
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MatchableOrderAminoMsg): MatchableOrder {
    return MatchableOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MatchableOrderProtoMsg, useInterfaces: boolean = true): MatchableOrder {
    return MatchableOrder.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: MatchableOrder): Uint8Array {
    return MatchableOrder.encode(message).finish();
  },
  toProtoMsg(message: MatchableOrder): MatchableOrderProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.MatchableOrder",
      value: MatchableOrder.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MatchableOrder.typeUrl, MatchableOrder);
function createBaseOrderPairMetrics(): OrderPairMetrics {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    totalRemaining: "",
    totalActiveOrderCount: BigInt(0),
    totalRemainingWithoutLimit: "",
    totalActiveOrderWithoutLimitCount: BigInt(0),
    totalInTheMoneyAmount: "",
    totalInTheMoneyCount: BigInt(0),
    totalOutTheMoneyAmount: "",
    totalOutTheMoneyCount: BigInt(0),
    lastPostProcessHeight: BigInt(0)
  };
}
export const OrderPairMetrics = {
  typeUrl: "/pryzmatics.trade.OrderPairMetrics",
  is(o: any): o is OrderPairMetrics {
    return o && (o.$typeUrl === OrderPairMetrics.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.whitelistedRoute === "boolean" && typeof o.totalRemaining === "string" && typeof o.totalActiveOrderCount === "bigint" && typeof o.totalRemainingWithoutLimit === "string" && typeof o.totalActiveOrderWithoutLimitCount === "bigint" && typeof o.totalInTheMoneyAmount === "string" && typeof o.totalInTheMoneyCount === "bigint" && typeof o.totalOutTheMoneyAmount === "string" && typeof o.totalOutTheMoneyCount === "bigint" && typeof o.lastPostProcessHeight === "bigint");
  },
  isSDK(o: any): o is OrderPairMetricsSDKType {
    return o && (o.$typeUrl === OrderPairMetrics.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.total_remaining === "string" && typeof o.total_active_order_count === "bigint" && typeof o.total_remaining_without_limit === "string" && typeof o.total_active_order_without_limit_count === "bigint" && typeof o.total_in_the_money_amount === "string" && typeof o.total_in_the_money_count === "bigint" && typeof o.total_out_the_money_amount === "string" && typeof o.total_out_the_money_count === "bigint" && typeof o.last_post_process_height === "bigint");
  },
  isAmino(o: any): o is OrderPairMetricsAmino {
    return o && (o.$typeUrl === OrderPairMetrics.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.total_remaining === "string" && typeof o.total_active_order_count === "bigint" && typeof o.total_remaining_without_limit === "string" && typeof o.total_active_order_without_limit_count === "bigint" && typeof o.total_in_the_money_amount === "string" && typeof o.total_in_the_money_count === "bigint" && typeof o.total_out_the_money_amount === "string" && typeof o.total_out_the_money_count === "bigint" && typeof o.last_post_process_height === "bigint");
  },
  encode(message: OrderPairMetrics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (message.totalRemaining !== "") {
      writer.uint32(42).string(message.totalRemaining);
    }
    if (message.totalActiveOrderCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.totalActiveOrderCount);
    }
    if (message.totalRemainingWithoutLimit !== "") {
      writer.uint32(58).string(message.totalRemainingWithoutLimit);
    }
    if (message.totalActiveOrderWithoutLimitCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.totalActiveOrderWithoutLimitCount);
    }
    if (message.totalInTheMoneyAmount !== "") {
      writer.uint32(74).string(message.totalInTheMoneyAmount);
    }
    if (message.totalInTheMoneyCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.totalInTheMoneyCount);
    }
    if (message.totalOutTheMoneyAmount !== "") {
      writer.uint32(90).string(message.totalOutTheMoneyAmount);
    }
    if (message.totalOutTheMoneyCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.totalOutTheMoneyCount);
    }
    if (message.lastPostProcessHeight !== BigInt(0)) {
      writer.uint32(104).int64(message.lastPostProcessHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderPairMetrics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderPairMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.totalRemaining = reader.string();
          break;
        case 6:
          message.totalActiveOrderCount = reader.uint64();
          break;
        case 7:
          message.totalRemainingWithoutLimit = reader.string();
          break;
        case 8:
          message.totalActiveOrderWithoutLimitCount = reader.uint64();
          break;
        case 9:
          message.totalInTheMoneyAmount = reader.string();
          break;
        case 10:
          message.totalInTheMoneyCount = reader.uint64();
          break;
        case 11:
          message.totalOutTheMoneyAmount = reader.string();
          break;
        case 12:
          message.totalOutTheMoneyCount = reader.uint64();
          break;
        case 13:
          message.lastPostProcessHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderPairMetrics {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      totalRemaining: isSet(object.totalRemaining) ? String(object.totalRemaining) : "",
      totalActiveOrderCount: isSet(object.totalActiveOrderCount) ? BigInt(object.totalActiveOrderCount.toString()) : BigInt(0),
      totalRemainingWithoutLimit: isSet(object.totalRemainingWithoutLimit) ? String(object.totalRemainingWithoutLimit) : "",
      totalActiveOrderWithoutLimitCount: isSet(object.totalActiveOrderWithoutLimitCount) ? BigInt(object.totalActiveOrderWithoutLimitCount.toString()) : BigInt(0),
      totalInTheMoneyAmount: isSet(object.totalInTheMoneyAmount) ? String(object.totalInTheMoneyAmount) : "",
      totalInTheMoneyCount: isSet(object.totalInTheMoneyCount) ? BigInt(object.totalInTheMoneyCount.toString()) : BigInt(0),
      totalOutTheMoneyAmount: isSet(object.totalOutTheMoneyAmount) ? String(object.totalOutTheMoneyAmount) : "",
      totalOutTheMoneyCount: isSet(object.totalOutTheMoneyCount) ? BigInt(object.totalOutTheMoneyCount.toString()) : BigInt(0),
      lastPostProcessHeight: isSet(object.lastPostProcessHeight) ? BigInt(object.lastPostProcessHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: OrderPairMetrics): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.totalRemaining !== undefined && (obj.totalRemaining = message.totalRemaining);
    message.totalActiveOrderCount !== undefined && (obj.totalActiveOrderCount = (message.totalActiveOrderCount || BigInt(0)).toString());
    message.totalRemainingWithoutLimit !== undefined && (obj.totalRemainingWithoutLimit = message.totalRemainingWithoutLimit);
    message.totalActiveOrderWithoutLimitCount !== undefined && (obj.totalActiveOrderWithoutLimitCount = (message.totalActiveOrderWithoutLimitCount || BigInt(0)).toString());
    message.totalInTheMoneyAmount !== undefined && (obj.totalInTheMoneyAmount = message.totalInTheMoneyAmount);
    message.totalInTheMoneyCount !== undefined && (obj.totalInTheMoneyCount = (message.totalInTheMoneyCount || BigInt(0)).toString());
    message.totalOutTheMoneyAmount !== undefined && (obj.totalOutTheMoneyAmount = message.totalOutTheMoneyAmount);
    message.totalOutTheMoneyCount !== undefined && (obj.totalOutTheMoneyCount = (message.totalOutTheMoneyCount || BigInt(0)).toString());
    message.lastPostProcessHeight !== undefined && (obj.lastPostProcessHeight = (message.lastPostProcessHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OrderPairMetrics>): OrderPairMetrics {
    const message = createBaseOrderPairMetrics();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.totalRemaining = object.totalRemaining ?? "";
    message.totalActiveOrderCount = object.totalActiveOrderCount !== undefined && object.totalActiveOrderCount !== null ? BigInt(object.totalActiveOrderCount.toString()) : BigInt(0);
    message.totalRemainingWithoutLimit = object.totalRemainingWithoutLimit ?? "";
    message.totalActiveOrderWithoutLimitCount = object.totalActiveOrderWithoutLimitCount !== undefined && object.totalActiveOrderWithoutLimitCount !== null ? BigInt(object.totalActiveOrderWithoutLimitCount.toString()) : BigInt(0);
    message.totalInTheMoneyAmount = object.totalInTheMoneyAmount ?? "";
    message.totalInTheMoneyCount = object.totalInTheMoneyCount !== undefined && object.totalInTheMoneyCount !== null ? BigInt(object.totalInTheMoneyCount.toString()) : BigInt(0);
    message.totalOutTheMoneyAmount = object.totalOutTheMoneyAmount ?? "";
    message.totalOutTheMoneyCount = object.totalOutTheMoneyCount !== undefined && object.totalOutTheMoneyCount !== null ? BigInt(object.totalOutTheMoneyCount.toString()) : BigInt(0);
    message.lastPostProcessHeight = object.lastPostProcessHeight !== undefined && object.lastPostProcessHeight !== null ? BigInt(object.lastPostProcessHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OrderPairMetricsAmino): OrderPairMetrics {
    const message = createBaseOrderPairMetrics();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.total_remaining !== undefined && object.total_remaining !== null) {
      message.totalRemaining = object.total_remaining;
    }
    if (object.total_active_order_count !== undefined && object.total_active_order_count !== null) {
      message.totalActiveOrderCount = BigInt(object.total_active_order_count);
    }
    if (object.total_remaining_without_limit !== undefined && object.total_remaining_without_limit !== null) {
      message.totalRemainingWithoutLimit = object.total_remaining_without_limit;
    }
    if (object.total_active_order_without_limit_count !== undefined && object.total_active_order_without_limit_count !== null) {
      message.totalActiveOrderWithoutLimitCount = BigInt(object.total_active_order_without_limit_count);
    }
    if (object.total_in_the_money_amount !== undefined && object.total_in_the_money_amount !== null) {
      message.totalInTheMoneyAmount = object.total_in_the_money_amount;
    }
    if (object.total_in_the_money_count !== undefined && object.total_in_the_money_count !== null) {
      message.totalInTheMoneyCount = BigInt(object.total_in_the_money_count);
    }
    if (object.total_out_the_money_amount !== undefined && object.total_out_the_money_amount !== null) {
      message.totalOutTheMoneyAmount = object.total_out_the_money_amount;
    }
    if (object.total_out_the_money_count !== undefined && object.total_out_the_money_count !== null) {
      message.totalOutTheMoneyCount = BigInt(object.total_out_the_money_count);
    }
    if (object.last_post_process_height !== undefined && object.last_post_process_height !== null) {
      message.lastPostProcessHeight = BigInt(object.last_post_process_height);
    }
    return message;
  },
  toAmino(message: OrderPairMetrics, useInterfaces: boolean = true): OrderPairMetricsAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.total_remaining = message.totalRemaining === "" ? undefined : message.totalRemaining;
    obj.total_active_order_count = message.totalActiveOrderCount ? message.totalActiveOrderCount.toString() : undefined;
    obj.total_remaining_without_limit = message.totalRemainingWithoutLimit === "" ? undefined : message.totalRemainingWithoutLimit;
    obj.total_active_order_without_limit_count = message.totalActiveOrderWithoutLimitCount ? message.totalActiveOrderWithoutLimitCount.toString() : undefined;
    obj.total_in_the_money_amount = message.totalInTheMoneyAmount === "" ? undefined : message.totalInTheMoneyAmount;
    obj.total_in_the_money_count = message.totalInTheMoneyCount ? message.totalInTheMoneyCount.toString() : undefined;
    obj.total_out_the_money_amount = message.totalOutTheMoneyAmount === "" ? undefined : message.totalOutTheMoneyAmount;
    obj.total_out_the_money_count = message.totalOutTheMoneyCount ? message.totalOutTheMoneyCount.toString() : undefined;
    obj.last_post_process_height = message.lastPostProcessHeight ? message.lastPostProcessHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderPairMetricsAminoMsg): OrderPairMetrics {
    return OrderPairMetrics.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderPairMetricsProtoMsg, useInterfaces: boolean = true): OrderPairMetrics {
    return OrderPairMetrics.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderPairMetrics): Uint8Array {
    return OrderPairMetrics.encode(message).finish();
  },
  toProtoMsg(message: OrderPairMetrics): OrderPairMetricsProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.OrderPairMetrics",
      value: OrderPairMetrics.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderPairMetrics.typeUrl, OrderPairMetrics);
function createBaseOrderMetrics(): OrderMetrics {
  return {
    totalRemaining: "",
    totalActiveOrderCount: BigInt(0),
    totalRemainingWithoutLimit: "",
    totalActiveOrderWithoutLimitCount: BigInt(0),
    totalInTheMoneyAmount: "",
    totalInTheMoneyCount: BigInt(0),
    totalOutTheMoneyAmount: "",
    totalOutTheMoneyCount: BigInt(0),
    lastPostProcessHeight: BigInt(0)
  };
}
export const OrderMetrics = {
  typeUrl: "/pryzmatics.trade.OrderMetrics",
  is(o: any): o is OrderMetrics {
    return o && (o.$typeUrl === OrderMetrics.typeUrl || typeof o.totalRemaining === "string" && typeof o.totalActiveOrderCount === "bigint" && typeof o.totalRemainingWithoutLimit === "string" && typeof o.totalActiveOrderWithoutLimitCount === "bigint" && typeof o.totalInTheMoneyAmount === "string" && typeof o.totalInTheMoneyCount === "bigint" && typeof o.totalOutTheMoneyAmount === "string" && typeof o.totalOutTheMoneyCount === "bigint" && typeof o.lastPostProcessHeight === "bigint");
  },
  isSDK(o: any): o is OrderMetricsSDKType {
    return o && (o.$typeUrl === OrderMetrics.typeUrl || typeof o.total_remaining === "string" && typeof o.total_active_order_count === "bigint" && typeof o.total_remaining_without_limit === "string" && typeof o.total_active_order_without_limit_count === "bigint" && typeof o.total_in_the_money_amount === "string" && typeof o.total_in_the_money_count === "bigint" && typeof o.total_out_the_money_amount === "string" && typeof o.total_out_the_money_count === "bigint" && typeof o.last_post_process_height === "bigint");
  },
  isAmino(o: any): o is OrderMetricsAmino {
    return o && (o.$typeUrl === OrderMetrics.typeUrl || typeof o.total_remaining === "string" && typeof o.total_active_order_count === "bigint" && typeof o.total_remaining_without_limit === "string" && typeof o.total_active_order_without_limit_count === "bigint" && typeof o.total_in_the_money_amount === "string" && typeof o.total_in_the_money_count === "bigint" && typeof o.total_out_the_money_amount === "string" && typeof o.total_out_the_money_count === "bigint" && typeof o.last_post_process_height === "bigint");
  },
  encode(message: OrderMetrics, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalRemaining !== "") {
      writer.uint32(42).string(message.totalRemaining);
    }
    if (message.totalActiveOrderCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.totalActiveOrderCount);
    }
    if (message.totalRemainingWithoutLimit !== "") {
      writer.uint32(58).string(message.totalRemainingWithoutLimit);
    }
    if (message.totalActiveOrderWithoutLimitCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.totalActiveOrderWithoutLimitCount);
    }
    if (message.totalInTheMoneyAmount !== "") {
      writer.uint32(74).string(message.totalInTheMoneyAmount);
    }
    if (message.totalInTheMoneyCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.totalInTheMoneyCount);
    }
    if (message.totalOutTheMoneyAmount !== "") {
      writer.uint32(90).string(message.totalOutTheMoneyAmount);
    }
    if (message.totalOutTheMoneyCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.totalOutTheMoneyCount);
    }
    if (message.lastPostProcessHeight !== BigInt(0)) {
      writer.uint32(104).int64(message.lastPostProcessHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderMetrics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.totalRemaining = reader.string();
          break;
        case 6:
          message.totalActiveOrderCount = reader.uint64();
          break;
        case 7:
          message.totalRemainingWithoutLimit = reader.string();
          break;
        case 8:
          message.totalActiveOrderWithoutLimitCount = reader.uint64();
          break;
        case 9:
          message.totalInTheMoneyAmount = reader.string();
          break;
        case 10:
          message.totalInTheMoneyCount = reader.uint64();
          break;
        case 11:
          message.totalOutTheMoneyAmount = reader.string();
          break;
        case 12:
          message.totalOutTheMoneyCount = reader.uint64();
          break;
        case 13:
          message.lastPostProcessHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderMetrics {
    return {
      totalRemaining: isSet(object.totalRemaining) ? String(object.totalRemaining) : "",
      totalActiveOrderCount: isSet(object.totalActiveOrderCount) ? BigInt(object.totalActiveOrderCount.toString()) : BigInt(0),
      totalRemainingWithoutLimit: isSet(object.totalRemainingWithoutLimit) ? String(object.totalRemainingWithoutLimit) : "",
      totalActiveOrderWithoutLimitCount: isSet(object.totalActiveOrderWithoutLimitCount) ? BigInt(object.totalActiveOrderWithoutLimitCount.toString()) : BigInt(0),
      totalInTheMoneyAmount: isSet(object.totalInTheMoneyAmount) ? String(object.totalInTheMoneyAmount) : "",
      totalInTheMoneyCount: isSet(object.totalInTheMoneyCount) ? BigInt(object.totalInTheMoneyCount.toString()) : BigInt(0),
      totalOutTheMoneyAmount: isSet(object.totalOutTheMoneyAmount) ? String(object.totalOutTheMoneyAmount) : "",
      totalOutTheMoneyCount: isSet(object.totalOutTheMoneyCount) ? BigInt(object.totalOutTheMoneyCount.toString()) : BigInt(0),
      lastPostProcessHeight: isSet(object.lastPostProcessHeight) ? BigInt(object.lastPostProcessHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: OrderMetrics): unknown {
    const obj: any = {};
    message.totalRemaining !== undefined && (obj.totalRemaining = message.totalRemaining);
    message.totalActiveOrderCount !== undefined && (obj.totalActiveOrderCount = (message.totalActiveOrderCount || BigInt(0)).toString());
    message.totalRemainingWithoutLimit !== undefined && (obj.totalRemainingWithoutLimit = message.totalRemainingWithoutLimit);
    message.totalActiveOrderWithoutLimitCount !== undefined && (obj.totalActiveOrderWithoutLimitCount = (message.totalActiveOrderWithoutLimitCount || BigInt(0)).toString());
    message.totalInTheMoneyAmount !== undefined && (obj.totalInTheMoneyAmount = message.totalInTheMoneyAmount);
    message.totalInTheMoneyCount !== undefined && (obj.totalInTheMoneyCount = (message.totalInTheMoneyCount || BigInt(0)).toString());
    message.totalOutTheMoneyAmount !== undefined && (obj.totalOutTheMoneyAmount = message.totalOutTheMoneyAmount);
    message.totalOutTheMoneyCount !== undefined && (obj.totalOutTheMoneyCount = (message.totalOutTheMoneyCount || BigInt(0)).toString());
    message.lastPostProcessHeight !== undefined && (obj.lastPostProcessHeight = (message.lastPostProcessHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OrderMetrics>): OrderMetrics {
    const message = createBaseOrderMetrics();
    message.totalRemaining = object.totalRemaining ?? "";
    message.totalActiveOrderCount = object.totalActiveOrderCount !== undefined && object.totalActiveOrderCount !== null ? BigInt(object.totalActiveOrderCount.toString()) : BigInt(0);
    message.totalRemainingWithoutLimit = object.totalRemainingWithoutLimit ?? "";
    message.totalActiveOrderWithoutLimitCount = object.totalActiveOrderWithoutLimitCount !== undefined && object.totalActiveOrderWithoutLimitCount !== null ? BigInt(object.totalActiveOrderWithoutLimitCount.toString()) : BigInt(0);
    message.totalInTheMoneyAmount = object.totalInTheMoneyAmount ?? "";
    message.totalInTheMoneyCount = object.totalInTheMoneyCount !== undefined && object.totalInTheMoneyCount !== null ? BigInt(object.totalInTheMoneyCount.toString()) : BigInt(0);
    message.totalOutTheMoneyAmount = object.totalOutTheMoneyAmount ?? "";
    message.totalOutTheMoneyCount = object.totalOutTheMoneyCount !== undefined && object.totalOutTheMoneyCount !== null ? BigInt(object.totalOutTheMoneyCount.toString()) : BigInt(0);
    message.lastPostProcessHeight = object.lastPostProcessHeight !== undefined && object.lastPostProcessHeight !== null ? BigInt(object.lastPostProcessHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OrderMetricsAmino): OrderMetrics {
    const message = createBaseOrderMetrics();
    if (object.total_remaining !== undefined && object.total_remaining !== null) {
      message.totalRemaining = object.total_remaining;
    }
    if (object.total_active_order_count !== undefined && object.total_active_order_count !== null) {
      message.totalActiveOrderCount = BigInt(object.total_active_order_count);
    }
    if (object.total_remaining_without_limit !== undefined && object.total_remaining_without_limit !== null) {
      message.totalRemainingWithoutLimit = object.total_remaining_without_limit;
    }
    if (object.total_active_order_without_limit_count !== undefined && object.total_active_order_without_limit_count !== null) {
      message.totalActiveOrderWithoutLimitCount = BigInt(object.total_active_order_without_limit_count);
    }
    if (object.total_in_the_money_amount !== undefined && object.total_in_the_money_amount !== null) {
      message.totalInTheMoneyAmount = object.total_in_the_money_amount;
    }
    if (object.total_in_the_money_count !== undefined && object.total_in_the_money_count !== null) {
      message.totalInTheMoneyCount = BigInt(object.total_in_the_money_count);
    }
    if (object.total_out_the_money_amount !== undefined && object.total_out_the_money_amount !== null) {
      message.totalOutTheMoneyAmount = object.total_out_the_money_amount;
    }
    if (object.total_out_the_money_count !== undefined && object.total_out_the_money_count !== null) {
      message.totalOutTheMoneyCount = BigInt(object.total_out_the_money_count);
    }
    if (object.last_post_process_height !== undefined && object.last_post_process_height !== null) {
      message.lastPostProcessHeight = BigInt(object.last_post_process_height);
    }
    return message;
  },
  toAmino(message: OrderMetrics, useInterfaces: boolean = true): OrderMetricsAmino {
    const obj: any = {};
    obj.total_remaining = message.totalRemaining === "" ? undefined : message.totalRemaining;
    obj.total_active_order_count = message.totalActiveOrderCount ? message.totalActiveOrderCount.toString() : undefined;
    obj.total_remaining_without_limit = message.totalRemainingWithoutLimit === "" ? undefined : message.totalRemainingWithoutLimit;
    obj.total_active_order_without_limit_count = message.totalActiveOrderWithoutLimitCount ? message.totalActiveOrderWithoutLimitCount.toString() : undefined;
    obj.total_in_the_money_amount = message.totalInTheMoneyAmount === "" ? undefined : message.totalInTheMoneyAmount;
    obj.total_in_the_money_count = message.totalInTheMoneyCount ? message.totalInTheMoneyCount.toString() : undefined;
    obj.total_out_the_money_amount = message.totalOutTheMoneyAmount === "" ? undefined : message.totalOutTheMoneyAmount;
    obj.total_out_the_money_count = message.totalOutTheMoneyCount ? message.totalOutTheMoneyCount.toString() : undefined;
    obj.last_post_process_height = message.lastPostProcessHeight ? message.lastPostProcessHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderMetricsAminoMsg): OrderMetrics {
    return OrderMetrics.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderMetricsProtoMsg, useInterfaces: boolean = true): OrderMetrics {
    return OrderMetrics.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderMetrics): Uint8Array {
    return OrderMetrics.encode(message).finish();
  },
  toProtoMsg(message: OrderMetrics): OrderMetricsProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.OrderMetrics",
      value: OrderMetrics.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderMetrics.typeUrl, OrderMetrics);
function createBaseAggregatedOrderPairPriceBucket(): AggregatedOrderPairPriceBucket {
  return {
    start: "",
    end: "",
    amount: "",
    count: BigInt(0),
    accumulativeAmount: "",
    accumulativeCount: BigInt(0)
  };
}
export const AggregatedOrderPairPriceBucket = {
  typeUrl: "/pryzmatics.trade.AggregatedOrderPairPriceBucket",
  is(o: any): o is AggregatedOrderPairPriceBucket {
    return o && (o.$typeUrl === AggregatedOrderPairPriceBucket.typeUrl || typeof o.start === "string" && typeof o.end === "string" && typeof o.amount === "string" && typeof o.count === "bigint" && typeof o.accumulativeAmount === "string" && typeof o.accumulativeCount === "bigint");
  },
  isSDK(o: any): o is AggregatedOrderPairPriceBucketSDKType {
    return o && (o.$typeUrl === AggregatedOrderPairPriceBucket.typeUrl || typeof o.start === "string" && typeof o.end === "string" && typeof o.amount === "string" && typeof o.count === "bigint" && typeof o.accumulative_amount === "string" && typeof o.accumulative_count === "bigint");
  },
  isAmino(o: any): o is AggregatedOrderPairPriceBucketAmino {
    return o && (o.$typeUrl === AggregatedOrderPairPriceBucket.typeUrl || typeof o.start === "string" && typeof o.end === "string" && typeof o.amount === "string" && typeof o.count === "bigint" && typeof o.accumulative_amount === "string" && typeof o.accumulative_count === "bigint");
  },
  encode(message: AggregatedOrderPairPriceBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.start !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.start, 18).atomics);
    }
    if (message.end !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.end, 18).atomics);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(32).uint64(message.count);
    }
    if (message.accumulativeAmount !== "") {
      writer.uint32(42).string(message.accumulativeAmount);
    }
    if (message.accumulativeCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.accumulativeCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): AggregatedOrderPairPriceBucket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregatedOrderPairPriceBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.end = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.count = reader.uint64();
          break;
        case 5:
          message.accumulativeAmount = reader.string();
          break;
        case 6:
          message.accumulativeCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AggregatedOrderPairPriceBucket {
    return {
      start: isSet(object.start) ? String(object.start) : "",
      end: isSet(object.end) ? String(object.end) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0),
      accumulativeAmount: isSet(object.accumulativeAmount) ? String(object.accumulativeAmount) : "",
      accumulativeCount: isSet(object.accumulativeCount) ? BigInt(object.accumulativeCount.toString()) : BigInt(0)
    };
  },
  toJSON(message: AggregatedOrderPairPriceBucket): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.amount !== undefined && (obj.amount = message.amount);
    message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
    message.accumulativeAmount !== undefined && (obj.accumulativeAmount = message.accumulativeAmount);
    message.accumulativeCount !== undefined && (obj.accumulativeCount = (message.accumulativeCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<AggregatedOrderPairPriceBucket>): AggregatedOrderPairPriceBucket {
    const message = createBaseAggregatedOrderPairPriceBucket();
    message.start = object.start ?? "";
    message.end = object.end ?? "";
    message.amount = object.amount ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    message.accumulativeAmount = object.accumulativeAmount ?? "";
    message.accumulativeCount = object.accumulativeCount !== undefined && object.accumulativeCount !== null ? BigInt(object.accumulativeCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AggregatedOrderPairPriceBucketAmino): AggregatedOrderPairPriceBucket {
    const message = createBaseAggregatedOrderPairPriceBucket();
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    if (object.accumulative_amount !== undefined && object.accumulative_amount !== null) {
      message.accumulativeAmount = object.accumulative_amount;
    }
    if (object.accumulative_count !== undefined && object.accumulative_count !== null) {
      message.accumulativeCount = BigInt(object.accumulative_count);
    }
    return message;
  },
  toAmino(message: AggregatedOrderPairPriceBucket, useInterfaces: boolean = true): AggregatedOrderPairPriceBucketAmino {
    const obj: any = {};
    obj.start = padDecimal(message.start) === "" ? undefined : padDecimal(message.start);
    obj.end = padDecimal(message.end) === "" ? undefined : padDecimal(message.end);
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.count = message.count ? message.count.toString() : undefined;
    obj.accumulative_amount = message.accumulativeAmount === "" ? undefined : message.accumulativeAmount;
    obj.accumulative_count = message.accumulativeCount ? message.accumulativeCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AggregatedOrderPairPriceBucketAminoMsg): AggregatedOrderPairPriceBucket {
    return AggregatedOrderPairPriceBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: AggregatedOrderPairPriceBucketProtoMsg, useInterfaces: boolean = true): AggregatedOrderPairPriceBucket {
    return AggregatedOrderPairPriceBucket.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: AggregatedOrderPairPriceBucket): Uint8Array {
    return AggregatedOrderPairPriceBucket.encode(message).finish();
  },
  toProtoMsg(message: AggregatedOrderPairPriceBucket): AggregatedOrderPairPriceBucketProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.AggregatedOrderPairPriceBucket",
      value: AggregatedOrderPairPriceBucket.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AggregatedOrderPairPriceBucket.typeUrl, AggregatedOrderPairPriceBucket);
function createBaseOrderPairPriceBucket(): OrderPairPriceBucket {
  return {
    poolId: BigInt(0),
    tokenIn: "",
    tokenOut: "",
    whitelistedRoute: false,
    start: "",
    end: "",
    amount: "",
    count: BigInt(0)
  };
}
export const OrderPairPriceBucket = {
  typeUrl: "/pryzmatics.trade.OrderPairPriceBucket",
  is(o: any): o is OrderPairPriceBucket {
    return o && (o.$typeUrl === OrderPairPriceBucket.typeUrl || typeof o.poolId === "bigint" && typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.whitelistedRoute === "boolean" && typeof o.start === "string" && typeof o.end === "string" && typeof o.amount === "string" && typeof o.count === "bigint");
  },
  isSDK(o: any): o is OrderPairPriceBucketSDKType {
    return o && (o.$typeUrl === OrderPairPriceBucket.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.start === "string" && typeof o.end === "string" && typeof o.amount === "string" && typeof o.count === "bigint");
  },
  isAmino(o: any): o is OrderPairPriceBucketAmino {
    return o && (o.$typeUrl === OrderPairPriceBucket.typeUrl || typeof o.pool_id === "bigint" && typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.whitelisted_route === "boolean" && typeof o.start === "string" && typeof o.end === "string" && typeof o.amount === "string" && typeof o.count === "bigint");
  },
  encode(message: OrderPairPriceBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }
    if (message.whitelistedRoute === true) {
      writer.uint32(32).bool(message.whitelistedRoute);
    }
    if (message.start !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.start, 18).atomics);
    }
    if (message.end !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.end, 18).atomics);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(64).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): OrderPairPriceBucket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderPairPriceBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokenIn = reader.string();
          break;
        case 3:
          message.tokenOut = reader.string();
          break;
        case 4:
          message.whitelistedRoute = reader.bool();
          break;
        case 5:
          message.start = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.end = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderPairPriceBucket {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      tokenIn: isSet(object.tokenIn) ? String(object.tokenIn) : "",
      tokenOut: isSet(object.tokenOut) ? String(object.tokenOut) : "",
      whitelistedRoute: isSet(object.whitelistedRoute) ? Boolean(object.whitelistedRoute) : false,
      start: isSet(object.start) ? String(object.start) : "",
      end: isSet(object.end) ? String(object.end) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0)
    };
  },
  toJSON(message: OrderPairPriceBucket): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.whitelistedRoute !== undefined && (obj.whitelistedRoute = message.whitelistedRoute);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.amount !== undefined && (obj.amount = message.amount);
    message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<OrderPairPriceBucket>): OrderPairPriceBucket {
    const message = createBaseOrderPairPriceBucket();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.whitelistedRoute = object.whitelistedRoute ?? false;
    message.start = object.start ?? "";
    message.end = object.end ?? "";
    message.amount = object.amount ?? "";
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: OrderPairPriceBucketAmino): OrderPairPriceBucket {
    const message = createBaseOrderPairPriceBucket();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.token_in !== undefined && object.token_in !== null) {
      message.tokenIn = object.token_in;
    }
    if (object.token_out !== undefined && object.token_out !== null) {
      message.tokenOut = object.token_out;
    }
    if (object.whitelisted_route !== undefined && object.whitelisted_route !== null) {
      message.whitelistedRoute = object.whitelisted_route;
    }
    if (object.start !== undefined && object.start !== null) {
      message.start = object.start;
    }
    if (object.end !== undefined && object.end !== null) {
      message.end = object.end;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: OrderPairPriceBucket, useInterfaces: boolean = true): OrderPairPriceBucketAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.token_in = message.tokenIn === "" ? undefined : message.tokenIn;
    obj.token_out = message.tokenOut === "" ? undefined : message.tokenOut;
    obj.whitelisted_route = message.whitelistedRoute === false ? undefined : message.whitelistedRoute;
    obj.start = padDecimal(message.start) === "" ? undefined : padDecimal(message.start);
    obj.end = padDecimal(message.end) === "" ? undefined : padDecimal(message.end);
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.count = message.count ? message.count.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderPairPriceBucketAminoMsg): OrderPairPriceBucket {
    return OrderPairPriceBucket.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderPairPriceBucketProtoMsg, useInterfaces: boolean = true): OrderPairPriceBucket {
    return OrderPairPriceBucket.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: OrderPairPriceBucket): Uint8Array {
    return OrderPairPriceBucket.encode(message).finish();
  },
  toProtoMsg(message: OrderPairPriceBucket): OrderPairPriceBucketProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.OrderPairPriceBucket",
      value: OrderPairPriceBucket.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OrderPairPriceBucket.typeUrl, OrderPairPriceBucket);