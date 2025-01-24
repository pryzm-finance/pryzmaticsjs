import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SwapStep, SwapStepAmino, SwapStepSDKType } from "../../pryzm/amm/v1/operations";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { ExecutedOperation, ExecutedOperationAmino, ExecutedOperationSDKType } from "../pryzmnexus/pryzmnexus";
import { RouteStep, RouteStepAmino, RouteStepSDKType } from "../../pryzm/amm/v1/route_step";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { Decimal } from "@cosmjs/math";
export enum OperationType {
  OPERATION_TYPE_ANY = 0,
  OPERATION_TYPE_SINGLE_SWAP = 1,
  OPERATION_TYPE_BATCH_SWAP = 2,
  OPERATION_TYPE_JOIN_POOL = 3,
  OPERATION_TYPE_EXIT_POOL = 4,
  OPERATION_TYPE_NEXUS_BATCH = 5,
  OPERATION_TYPE_ORDER = 6,
  UNRECOGNIZED = -1,
}
export const OperationTypeSDKType = OperationType;
export const OperationTypeAmino = OperationType;
export function operationTypeFromJSON(object: any): OperationType {
  switch (object) {
    case 0:
    case "OPERATION_TYPE_ANY":
      return OperationType.OPERATION_TYPE_ANY;
    case 1:
    case "OPERATION_TYPE_SINGLE_SWAP":
      return OperationType.OPERATION_TYPE_SINGLE_SWAP;
    case 2:
    case "OPERATION_TYPE_BATCH_SWAP":
      return OperationType.OPERATION_TYPE_BATCH_SWAP;
    case 3:
    case "OPERATION_TYPE_JOIN_POOL":
      return OperationType.OPERATION_TYPE_JOIN_POOL;
    case 4:
    case "OPERATION_TYPE_EXIT_POOL":
      return OperationType.OPERATION_TYPE_EXIT_POOL;
    case 5:
    case "OPERATION_TYPE_NEXUS_BATCH":
      return OperationType.OPERATION_TYPE_NEXUS_BATCH;
    case 6:
    case "OPERATION_TYPE_ORDER":
      return OperationType.OPERATION_TYPE_ORDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationType.UNRECOGNIZED;
  }
}
export function operationTypeToJSON(object: OperationType): string {
  switch (object) {
    case OperationType.OPERATION_TYPE_ANY:
      return "OPERATION_TYPE_ANY";
    case OperationType.OPERATION_TYPE_SINGLE_SWAP:
      return "OPERATION_TYPE_SINGLE_SWAP";
    case OperationType.OPERATION_TYPE_BATCH_SWAP:
      return "OPERATION_TYPE_BATCH_SWAP";
    case OperationType.OPERATION_TYPE_JOIN_POOL:
      return "OPERATION_TYPE_JOIN_POOL";
    case OperationType.OPERATION_TYPE_EXIT_POOL:
      return "OPERATION_TYPE_EXIT_POOL";
    case OperationType.OPERATION_TYPE_NEXUS_BATCH:
      return "OPERATION_TYPE_NEXUS_BATCH";
    case OperationType.OPERATION_TYPE_ORDER:
      return "OPERATION_TYPE_ORDER";
    case OperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface UserTradeHistory {
  id: bigint;
  amountsIn: Coin[];
  amountsOut: Coin[];
  address: string;
  poolId: bigint;
  path: SwapStep[];
  operationType: OperationType;
  swapFee: Coin[];
  joinExitProtocolFee: Coin[];
  swapProtocolFee: Coin[];
  blockTime: Timestamp;
  nexusBatchFee: Coin[];
  nexusPath: ExecutedOperation[];
  orderPath: RouteStep[];
}
export interface UserTradeHistoryProtoMsg {
  typeUrl: "/pryzmatics.trade.UserTradeHistory";
  value: Uint8Array;
}
export interface UserTradeHistoryAmino {
  id?: string;
  amounts_in?: CoinAmino[];
  amounts_out?: CoinAmino[];
  address?: string;
  pool_id?: string;
  path?: SwapStepAmino[];
  operation_type?: OperationType;
  swap_fee?: CoinAmino[];
  join_exit_protocol_fee?: CoinAmino[];
  swap_protocol_fee?: CoinAmino[];
  block_time?: string;
  nexus_batch_fee?: CoinAmino[];
  nexus_path?: ExecutedOperationAmino[];
  order_path?: RouteStepAmino[];
}
export interface UserTradeHistoryAminoMsg {
  type: "/pryzmatics.trade.UserTradeHistory";
  value: UserTradeHistoryAmino;
}
export interface UserTradeHistorySDKType {
  id: bigint;
  amounts_in: CoinSDKType[];
  amounts_out: CoinSDKType[];
  address: string;
  pool_id: bigint;
  path: SwapStepSDKType[];
  operation_type: OperationType;
  swap_fee: CoinSDKType[];
  join_exit_protocol_fee: CoinSDKType[];
  swap_protocol_fee: CoinSDKType[];
  block_time: TimestampSDKType;
  nexus_batch_fee: CoinSDKType[];
  nexus_path: ExecutedOperationSDKType[];
  order_path: RouteStepSDKType[];
}
export interface UserTradeVolume {
  address: string;
  volume: string;
}
export interface UserTradeVolumeProtoMsg {
  typeUrl: "/pryzmatics.trade.UserTradeVolume";
  value: Uint8Array;
}
export interface UserTradeVolumeAmino {
  address?: string;
  volume?: string;
}
export interface UserTradeVolumeAminoMsg {
  type: "/pryzmatics.trade.UserTradeVolume";
  value: UserTradeVolumeAmino;
}
export interface UserTradeVolumeSDKType {
  address: string;
  volume: string;
}
function createBaseUserTradeHistory(): UserTradeHistory {
  return {
    id: BigInt(0),
    amountsIn: [],
    amountsOut: [],
    address: "",
    poolId: BigInt(0),
    path: [],
    operationType: 0,
    swapFee: [],
    joinExitProtocolFee: [],
    swapProtocolFee: [],
    blockTime: Timestamp.fromPartial({}),
    nexusBatchFee: [],
    nexusPath: [],
    orderPath: []
  };
}
export const UserTradeHistory = {
  typeUrl: "/pryzmatics.trade.UserTradeHistory",
  is(o: any): o is UserTradeHistory {
    return o && (o.$typeUrl === UserTradeHistory.typeUrl || typeof o.id === "bigint" && Array.isArray(o.amountsIn) && (!o.amountsIn.length || Coin.is(o.amountsIn[0])) && Array.isArray(o.amountsOut) && (!o.amountsOut.length || Coin.is(o.amountsOut[0])) && typeof o.address === "string" && typeof o.poolId === "bigint" && Array.isArray(o.path) && (!o.path.length || SwapStep.is(o.path[0])) && isSet(o.operationType) && Array.isArray(o.swapFee) && (!o.swapFee.length || Coin.is(o.swapFee[0])) && Array.isArray(o.joinExitProtocolFee) && (!o.joinExitProtocolFee.length || Coin.is(o.joinExitProtocolFee[0])) && Array.isArray(o.swapProtocolFee) && (!o.swapProtocolFee.length || Coin.is(o.swapProtocolFee[0])) && Timestamp.is(o.blockTime) && Array.isArray(o.nexusBatchFee) && (!o.nexusBatchFee.length || Coin.is(o.nexusBatchFee[0])) && Array.isArray(o.nexusPath) && (!o.nexusPath.length || ExecutedOperation.is(o.nexusPath[0])) && Array.isArray(o.orderPath) && (!o.orderPath.length || RouteStep.is(o.orderPath[0])));
  },
  isSDK(o: any): o is UserTradeHistorySDKType {
    return o && (o.$typeUrl === UserTradeHistory.typeUrl || typeof o.id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isSDK(o.amounts_in[0])) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isSDK(o.amounts_out[0])) && typeof o.address === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.path) && (!o.path.length || SwapStep.isSDK(o.path[0])) && isSet(o.operation_type) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isSDK(o.swap_fee[0])) && Array.isArray(o.join_exit_protocol_fee) && (!o.join_exit_protocol_fee.length || Coin.isSDK(o.join_exit_protocol_fee[0])) && Array.isArray(o.swap_protocol_fee) && (!o.swap_protocol_fee.length || Coin.isSDK(o.swap_protocol_fee[0])) && Timestamp.isSDK(o.block_time) && Array.isArray(o.nexus_batch_fee) && (!o.nexus_batch_fee.length || Coin.isSDK(o.nexus_batch_fee[0])) && Array.isArray(o.nexus_path) && (!o.nexus_path.length || ExecutedOperation.isSDK(o.nexus_path[0])) && Array.isArray(o.order_path) && (!o.order_path.length || RouteStep.isSDK(o.order_path[0])));
  },
  isAmino(o: any): o is UserTradeHistoryAmino {
    return o && (o.$typeUrl === UserTradeHistory.typeUrl || typeof o.id === "bigint" && Array.isArray(o.amounts_in) && (!o.amounts_in.length || Coin.isAmino(o.amounts_in[0])) && Array.isArray(o.amounts_out) && (!o.amounts_out.length || Coin.isAmino(o.amounts_out[0])) && typeof o.address === "string" && typeof o.pool_id === "bigint" && Array.isArray(o.path) && (!o.path.length || SwapStep.isAmino(o.path[0])) && isSet(o.operation_type) && Array.isArray(o.swap_fee) && (!o.swap_fee.length || Coin.isAmino(o.swap_fee[0])) && Array.isArray(o.join_exit_protocol_fee) && (!o.join_exit_protocol_fee.length || Coin.isAmino(o.join_exit_protocol_fee[0])) && Array.isArray(o.swap_protocol_fee) && (!o.swap_protocol_fee.length || Coin.isAmino(o.swap_protocol_fee[0])) && Timestamp.isAmino(o.block_time) && Array.isArray(o.nexus_batch_fee) && (!o.nexus_batch_fee.length || Coin.isAmino(o.nexus_batch_fee[0])) && Array.isArray(o.nexus_path) && (!o.nexus_path.length || ExecutedOperation.isAmino(o.nexus_path[0])) && Array.isArray(o.order_path) && (!o.order_path.length || RouteStep.isAmino(o.order_path[0])));
  },
  encode(message: UserTradeHistory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.amountsIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.amountsOut) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(40).uint64(message.poolId);
    }
    for (const v of message.path) {
      SwapStep.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.operationType !== 0) {
      writer.uint32(56).int32(message.operationType);
    }
    for (const v of message.swapFee) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.joinExitProtocolFee) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.swapProtocolFee) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.nexusBatchFee) {
      Coin.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.nexusPath) {
      ExecutedOperation.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.orderPath) {
      RouteStep.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserTradeHistory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserTradeHistory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.amountsIn.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.amountsOut.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.poolId = reader.uint64();
          break;
        case 6:
          message.path.push(SwapStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 7:
          message.operationType = (reader.int32() as any);
          break;
        case 8:
          message.swapFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 9:
          message.joinExitProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 10:
          message.swapProtocolFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 11:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 12:
          message.nexusBatchFee.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 13:
          message.nexusPath.push(ExecutedOperation.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 14:
          message.orderPath.push(RouteStep.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserTradeHistory {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      amountsIn: Array.isArray(object?.amountsIn) ? object.amountsIn.map((e: any) => Coin.fromJSON(e)) : [],
      amountsOut: Array.isArray(object?.amountsOut) ? object.amountsOut.map((e: any) => Coin.fromJSON(e)) : [],
      address: isSet(object.address) ? String(object.address) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      path: Array.isArray(object?.path) ? object.path.map((e: any) => SwapStep.fromJSON(e)) : [],
      operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : -1,
      swapFee: Array.isArray(object?.swapFee) ? object.swapFee.map((e: any) => Coin.fromJSON(e)) : [],
      joinExitProtocolFee: Array.isArray(object?.joinExitProtocolFee) ? object.joinExitProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      swapProtocolFee: Array.isArray(object?.swapProtocolFee) ? object.swapProtocolFee.map((e: any) => Coin.fromJSON(e)) : [],
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined,
      nexusBatchFee: Array.isArray(object?.nexusBatchFee) ? object.nexusBatchFee.map((e: any) => Coin.fromJSON(e)) : [],
      nexusPath: Array.isArray(object?.nexusPath) ? object.nexusPath.map((e: any) => ExecutedOperation.fromJSON(e)) : [],
      orderPath: Array.isArray(object?.orderPath) ? object.orderPath.map((e: any) => RouteStep.fromJSON(e)) : []
    };
  },
  toJSON(message: UserTradeHistory): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    if (message.amountsIn) {
      obj.amountsIn = message.amountsIn.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsIn = [];
    }
    if (message.amountsOut) {
      obj.amountsOut = message.amountsOut.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amountsOut = [];
    }
    message.address !== undefined && (obj.address = message.address);
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    if (message.path) {
      obj.path = message.path.map(e => e ? SwapStep.toJSON(e) : undefined);
    } else {
      obj.path = [];
    }
    message.operationType !== undefined && (obj.operationType = operationTypeToJSON(message.operationType));
    if (message.swapFee) {
      obj.swapFee = message.swapFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapFee = [];
    }
    if (message.joinExitProtocolFee) {
      obj.joinExitProtocolFee = message.joinExitProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.joinExitProtocolFee = [];
    }
    if (message.swapProtocolFee) {
      obj.swapProtocolFee = message.swapProtocolFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.swapProtocolFee = [];
    }
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    if (message.nexusBatchFee) {
      obj.nexusBatchFee = message.nexusBatchFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.nexusBatchFee = [];
    }
    if (message.nexusPath) {
      obj.nexusPath = message.nexusPath.map(e => e ? ExecutedOperation.toJSON(e) : undefined);
    } else {
      obj.nexusPath = [];
    }
    if (message.orderPath) {
      obj.orderPath = message.orderPath.map(e => e ? RouteStep.toJSON(e) : undefined);
    } else {
      obj.orderPath = [];
    }
    return obj;
  },
  fromPartial(object: Partial<UserTradeHistory>): UserTradeHistory {
    const message = createBaseUserTradeHistory();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.amountsIn = object.amountsIn?.map(e => Coin.fromPartial(e)) || [];
    message.amountsOut = object.amountsOut?.map(e => Coin.fromPartial(e)) || [];
    message.address = object.address ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.path = object.path?.map(e => SwapStep.fromPartial(e)) || [];
    message.operationType = object.operationType ?? 0;
    message.swapFee = object.swapFee?.map(e => Coin.fromPartial(e)) || [];
    message.joinExitProtocolFee = object.joinExitProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.swapProtocolFee = object.swapProtocolFee?.map(e => Coin.fromPartial(e)) || [];
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    message.nexusBatchFee = object.nexusBatchFee?.map(e => Coin.fromPartial(e)) || [];
    message.nexusPath = object.nexusPath?.map(e => ExecutedOperation.fromPartial(e)) || [];
    message.orderPath = object.orderPath?.map(e => RouteStep.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UserTradeHistoryAmino): UserTradeHistory {
    const message = createBaseUserTradeHistory();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.amountsIn = object.amounts_in?.map(e => Coin.fromAmino(e)) || [];
    message.amountsOut = object.amounts_out?.map(e => Coin.fromAmino(e)) || [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.path = object.path?.map(e => SwapStep.fromAmino(e)) || [];
    if (object.operation_type !== undefined && object.operation_type !== null) {
      message.operationType = object.operation_type;
    }
    message.swapFee = object.swap_fee?.map(e => Coin.fromAmino(e)) || [];
    message.joinExitProtocolFee = object.join_exit_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    message.swapProtocolFee = object.swap_protocol_fee?.map(e => Coin.fromAmino(e)) || [];
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    message.nexusBatchFee = object.nexus_batch_fee?.map(e => Coin.fromAmino(e)) || [];
    message.nexusPath = object.nexus_path?.map(e => ExecutedOperation.fromAmino(e)) || [];
    message.orderPath = object.order_path?.map(e => RouteStep.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UserTradeHistory, useInterfaces: boolean = true): UserTradeHistoryAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    if (message.amountsIn) {
      obj.amounts_in = message.amountsIn.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_in = message.amountsIn;
    }
    if (message.amountsOut) {
      obj.amounts_out = message.amountsOut.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.amounts_out = message.amountsOut;
    }
    obj.address = message.address === "" ? undefined : message.address;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.path) {
      obj.path = message.path.map(e => e ? SwapStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.path = message.path;
    }
    obj.operation_type = message.operationType === 0 ? undefined : message.operationType;
    if (message.swapFee) {
      obj.swap_fee = message.swapFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_fee = message.swapFee;
    }
    if (message.joinExitProtocolFee) {
      obj.join_exit_protocol_fee = message.joinExitProtocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.join_exit_protocol_fee = message.joinExitProtocolFee;
    }
    if (message.swapProtocolFee) {
      obj.swap_protocol_fee = message.swapProtocolFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.swap_protocol_fee = message.swapProtocolFee;
    }
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    if (message.nexusBatchFee) {
      obj.nexus_batch_fee = message.nexusBatchFee.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.nexus_batch_fee = message.nexusBatchFee;
    }
    if (message.nexusPath) {
      obj.nexus_path = message.nexusPath.map(e => e ? ExecutedOperation.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.nexus_path = message.nexusPath;
    }
    if (message.orderPath) {
      obj.order_path = message.orderPath.map(e => e ? RouteStep.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.order_path = message.orderPath;
    }
    return obj;
  },
  fromAminoMsg(object: UserTradeHistoryAminoMsg): UserTradeHistory {
    return UserTradeHistory.fromAmino(object.value);
  },
  fromProtoMsg(message: UserTradeHistoryProtoMsg, useInterfaces: boolean = true): UserTradeHistory {
    return UserTradeHistory.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserTradeHistory): Uint8Array {
    return UserTradeHistory.encode(message).finish();
  },
  toProtoMsg(message: UserTradeHistory): UserTradeHistoryProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.UserTradeHistory",
      value: UserTradeHistory.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserTradeHistory.typeUrl, UserTradeHistory);
function createBaseUserTradeVolume(): UserTradeVolume {
  return {
    address: "",
    volume: ""
  };
}
export const UserTradeVolume = {
  typeUrl: "/pryzmatics.trade.UserTradeVolume",
  is(o: any): o is UserTradeVolume {
    return o && (o.$typeUrl === UserTradeVolume.typeUrl || typeof o.address === "string" && typeof o.volume === "string");
  },
  isSDK(o: any): o is UserTradeVolumeSDKType {
    return o && (o.$typeUrl === UserTradeVolume.typeUrl || typeof o.address === "string" && typeof o.volume === "string");
  },
  isAmino(o: any): o is UserTradeVolumeAmino {
    return o && (o.$typeUrl === UserTradeVolume.typeUrl || typeof o.address === "string" && typeof o.volume === "string");
  },
  encode(message: UserTradeVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.volume !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.volume, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserTradeVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserTradeVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserTradeVolume {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      volume: isSet(object.volume) ? String(object.volume) : ""
    };
  },
  toJSON(message: UserTradeVolume): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },
  fromPartial(object: Partial<UserTradeVolume>): UserTradeVolume {
    const message = createBaseUserTradeVolume();
    message.address = object.address ?? "";
    message.volume = object.volume ?? "";
    return message;
  },
  fromAmino(object: UserTradeVolumeAmino): UserTradeVolume {
    const message = createBaseUserTradeVolume();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.volume !== undefined && object.volume !== null) {
      message.volume = object.volume;
    }
    return message;
  },
  toAmino(message: UserTradeVolume, useInterfaces: boolean = true): UserTradeVolumeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.volume = padDecimal(message.volume) === "" ? undefined : padDecimal(message.volume);
    return obj;
  },
  fromAminoMsg(object: UserTradeVolumeAminoMsg): UserTradeVolume {
    return UserTradeVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: UserTradeVolumeProtoMsg, useInterfaces: boolean = true): UserTradeVolume {
    return UserTradeVolume.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserTradeVolume): Uint8Array {
    return UserTradeVolume.encode(message).finish();
  },
  toProtoMsg(message: UserTradeVolume): UserTradeVolumeProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.UserTradeVolume",
      value: UserTradeVolume.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserTradeVolume.typeUrl, UserTradeVolume);