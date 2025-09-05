import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface Pair {
  tokenIn: string;
  tokenOut: string;
  totalRemainingAmount: string;
  totalReservedAmount: string;
  totalCount: bigint;
  reservableCount: bigint;
  reservableInTheMoneyVolume: string;
  minPrice?: string;
  maxPrice?: string;
  avgPrice?: string;
}
export interface PairProtoMsg {
  typeUrl: "/pryzmatics.seal.Pair";
  value: Uint8Array;
}
export interface PairAmino {
  token_in?: string;
  token_out?: string;
  total_remaining_amount?: string;
  total_reserved_amount?: string;
  total_count?: string;
  reservable_count?: string;
  reservable_in_the_money_volume?: string;
  min_price?: string;
  max_price?: string;
  avg_price?: string;
}
export interface PairAminoMsg {
  type: "/pryzmatics.seal.Pair";
  value: PairAmino;
}
export interface PairSDKType {
  token_in: string;
  token_out: string;
  total_remaining_amount: string;
  total_reserved_amount: string;
  total_count: bigint;
  reservable_count: bigint;
  reservable_in_the_money_volume: string;
  min_price?: string;
  max_price?: string;
  avg_price?: string;
}
export interface PairInfo {
  pair: Pair;
  tokenInPrice?: string;
  tokenInPriceUpdateTime?: Timestamp;
  tokenOutPrice?: string;
  tokenOutPriceUpdateTime?: Timestamp;
}
export interface PairInfoProtoMsg {
  typeUrl: "/pryzmatics.seal.PairInfo";
  value: Uint8Array;
}
export interface PairInfoAmino {
  pair?: PairAmino;
  token_in_price?: string;
  token_in_price_update_time?: string;
  token_out_price?: string;
  token_out_price_update_time?: string;
}
export interface PairInfoAminoMsg {
  type: "/pryzmatics.seal.PairInfo";
  value: PairInfoAmino;
}
export interface PairInfoSDKType {
  pair: PairSDKType;
  token_in_price?: string;
  token_in_price_update_time?: TimestampSDKType;
  token_out_price?: string;
  token_out_price_update_time?: TimestampSDKType;
}
function createBasePair(): Pair {
  return {
    tokenIn: "",
    tokenOut: "",
    totalRemainingAmount: "",
    totalReservedAmount: "",
    totalCount: BigInt(0),
    reservableCount: BigInt(0),
    reservableInTheMoneyVolume: "",
    minPrice: undefined,
    maxPrice: undefined,
    avgPrice: undefined
  };
}
export const Pair = {
  typeUrl: "/pryzmatics.seal.Pair",
  is(o: any): o is Pair {
    return o && (o.$typeUrl === Pair.typeUrl || typeof o.tokenIn === "string" && typeof o.tokenOut === "string" && typeof o.totalRemainingAmount === "string" && typeof o.totalReservedAmount === "string" && typeof o.totalCount === "bigint" && typeof o.reservableCount === "bigint" && typeof o.reservableInTheMoneyVolume === "string");
  },
  isSDK(o: any): o is PairSDKType {
    return o && (o.$typeUrl === Pair.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.total_remaining_amount === "string" && typeof o.total_reserved_amount === "string" && typeof o.total_count === "bigint" && typeof o.reservable_count === "bigint" && typeof o.reservable_in_the_money_volume === "string");
  },
  isAmino(o: any): o is PairAmino {
    return o && (o.$typeUrl === Pair.typeUrl || typeof o.token_in === "string" && typeof o.token_out === "string" && typeof o.total_remaining_amount === "string" && typeof o.total_reserved_amount === "string" && typeof o.total_count === "bigint" && typeof o.reservable_count === "bigint" && typeof o.reservable_in_the_money_volume === "string");
  },
  encode(message: Pair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenIn !== "") {
      writer.uint32(10).string(message.tokenIn);
    }
    if (message.tokenOut !== "") {
      writer.uint32(18).string(message.tokenOut);
    }
    if (message.totalRemainingAmount !== "") {
      writer.uint32(26).string(message.totalRemainingAmount);
    }
    if (message.totalReservedAmount !== "") {
      writer.uint32(34).string(message.totalReservedAmount);
    }
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalCount);
    }
    if (message.reservableCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.reservableCount);
    }
    if (message.reservableInTheMoneyVolume !== "") {
      writer.uint32(58).string(message.reservableInTheMoneyVolume);
    }
    if (message.minPrice !== undefined) {
      writer.uint32(66).string(Decimal.fromUserInput(message.minPrice, 18).atomics);
    }
    if (message.maxPrice !== undefined) {
      writer.uint32(74).string(Decimal.fromUserInput(message.maxPrice, 18).atomics);
    }
    if (message.avgPrice !== undefined) {
      writer.uint32(82).string(Decimal.fromUserInput(message.avgPrice, 18).atomics);
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
          message.totalRemainingAmount = reader.string();
          break;
        case 4:
          message.totalReservedAmount = reader.string();
          break;
        case 5:
          message.totalCount = reader.uint64();
          break;
        case 6:
          message.reservableCount = reader.uint64();
          break;
        case 7:
          message.reservableInTheMoneyVolume = reader.string();
          break;
        case 8:
          message.minPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.maxPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
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
      totalRemainingAmount: isSet(object.totalRemainingAmount) ? String(object.totalRemainingAmount) : "",
      totalReservedAmount: isSet(object.totalReservedAmount) ? String(object.totalReservedAmount) : "",
      totalCount: isSet(object.totalCount) ? BigInt(object.totalCount.toString()) : BigInt(0),
      reservableCount: isSet(object.reservableCount) ? BigInt(object.reservableCount.toString()) : BigInt(0),
      reservableInTheMoneyVolume: isSet(object.reservableInTheMoneyVolume) ? String(object.reservableInTheMoneyVolume) : "",
      minPrice: isSet(object.minPrice) ? String(object.minPrice) : undefined,
      maxPrice: isSet(object.maxPrice) ? String(object.maxPrice) : undefined,
      avgPrice: isSet(object.avgPrice) ? String(object.avgPrice) : undefined
    };
  },
  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
    message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
    message.totalRemainingAmount !== undefined && (obj.totalRemainingAmount = message.totalRemainingAmount);
    message.totalReservedAmount !== undefined && (obj.totalReservedAmount = message.totalReservedAmount);
    message.totalCount !== undefined && (obj.totalCount = (message.totalCount || BigInt(0)).toString());
    message.reservableCount !== undefined && (obj.reservableCount = (message.reservableCount || BigInt(0)).toString());
    message.reservableInTheMoneyVolume !== undefined && (obj.reservableInTheMoneyVolume = message.reservableInTheMoneyVolume);
    message.minPrice !== undefined && (obj.minPrice = message.minPrice);
    message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
    message.avgPrice !== undefined && (obj.avgPrice = message.avgPrice);
    return obj;
  },
  fromPartial(object: Partial<Pair>): Pair {
    const message = createBasePair();
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    message.totalRemainingAmount = object.totalRemainingAmount ?? "";
    message.totalReservedAmount = object.totalReservedAmount ?? "";
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    message.reservableCount = object.reservableCount !== undefined && object.reservableCount !== null ? BigInt(object.reservableCount.toString()) : BigInt(0);
    message.reservableInTheMoneyVolume = object.reservableInTheMoneyVolume ?? "";
    message.minPrice = object.minPrice ?? undefined;
    message.maxPrice = object.maxPrice ?? undefined;
    message.avgPrice = object.avgPrice ?? undefined;
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
    if (object.total_remaining_amount !== undefined && object.total_remaining_amount !== null) {
      message.totalRemainingAmount = object.total_remaining_amount;
    }
    if (object.total_reserved_amount !== undefined && object.total_reserved_amount !== null) {
      message.totalReservedAmount = object.total_reserved_amount;
    }
    if (object.total_count !== undefined && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    if (object.reservable_count !== undefined && object.reservable_count !== null) {
      message.reservableCount = BigInt(object.reservable_count);
    }
    if (object.reservable_in_the_money_volume !== undefined && object.reservable_in_the_money_volume !== null) {
      message.reservableInTheMoneyVolume = object.reservable_in_the_money_volume;
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
    obj.total_remaining_amount = message.totalRemainingAmount === "" ? undefined : message.totalRemainingAmount;
    obj.total_reserved_amount = message.totalReservedAmount === "" ? undefined : message.totalReservedAmount;
    obj.total_count = message.totalCount ? message.totalCount.toString() : undefined;
    obj.reservable_count = message.reservableCount ? message.reservableCount.toString() : undefined;
    obj.reservable_in_the_money_volume = message.reservableInTheMoneyVolume === "" ? undefined : message.reservableInTheMoneyVolume;
    obj.min_price = padDecimal(message.minPrice) === null ? undefined : padDecimal(message.minPrice);
    obj.max_price = padDecimal(message.maxPrice) === null ? undefined : padDecimal(message.maxPrice);
    obj.avg_price = padDecimal(message.avgPrice) === null ? undefined : padDecimal(message.avgPrice);
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
      typeUrl: "/pryzmatics.seal.Pair",
      value: Pair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Pair.typeUrl, Pair);
function createBasePairInfo(): PairInfo {
  return {
    pair: Pair.fromPartial({}),
    tokenInPrice: undefined,
    tokenInPriceUpdateTime: undefined,
    tokenOutPrice: undefined,
    tokenOutPriceUpdateTime: undefined
  };
}
export const PairInfo = {
  typeUrl: "/pryzmatics.seal.PairInfo",
  is(o: any): o is PairInfo {
    return o && (o.$typeUrl === PairInfo.typeUrl || Pair.is(o.pair));
  },
  isSDK(o: any): o is PairInfoSDKType {
    return o && (o.$typeUrl === PairInfo.typeUrl || Pair.isSDK(o.pair));
  },
  isAmino(o: any): o is PairInfoAmino {
    return o && (o.$typeUrl === PairInfo.typeUrl || Pair.isAmino(o.pair));
  },
  encode(message: PairInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PairInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = Pair.decode(reader, reader.uint32(), useInterfaces);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PairInfo {
    return {
      pair: isSet(object.pair) ? Pair.fromJSON(object.pair) : undefined,
      tokenInPrice: isSet(object.tokenInPrice) ? String(object.tokenInPrice) : undefined,
      tokenInPriceUpdateTime: isSet(object.tokenInPriceUpdateTime) ? fromJsonTimestamp(object.tokenInPriceUpdateTime) : undefined,
      tokenOutPrice: isSet(object.tokenOutPrice) ? String(object.tokenOutPrice) : undefined,
      tokenOutPriceUpdateTime: isSet(object.tokenOutPriceUpdateTime) ? fromJsonTimestamp(object.tokenOutPriceUpdateTime) : undefined
    };
  },
  toJSON(message: PairInfo): unknown {
    const obj: any = {};
    message.pair !== undefined && (obj.pair = message.pair ? Pair.toJSON(message.pair) : undefined);
    message.tokenInPrice !== undefined && (obj.tokenInPrice = message.tokenInPrice);
    message.tokenInPriceUpdateTime !== undefined && (obj.tokenInPriceUpdateTime = fromTimestamp(message.tokenInPriceUpdateTime).toISOString());
    message.tokenOutPrice !== undefined && (obj.tokenOutPrice = message.tokenOutPrice);
    message.tokenOutPriceUpdateTime !== undefined && (obj.tokenOutPriceUpdateTime = fromTimestamp(message.tokenOutPriceUpdateTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<PairInfo>): PairInfo {
    const message = createBasePairInfo();
    message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
    message.tokenInPrice = object.tokenInPrice ?? undefined;
    message.tokenInPriceUpdateTime = object.tokenInPriceUpdateTime !== undefined && object.tokenInPriceUpdateTime !== null ? Timestamp.fromPartial(object.tokenInPriceUpdateTime) : undefined;
    message.tokenOutPrice = object.tokenOutPrice ?? undefined;
    message.tokenOutPriceUpdateTime = object.tokenOutPriceUpdateTime !== undefined && object.tokenOutPriceUpdateTime !== null ? Timestamp.fromPartial(object.tokenOutPriceUpdateTime) : undefined;
    return message;
  },
  fromAmino(object: PairInfoAmino): PairInfo {
    const message = createBasePairInfo();
    if (object.pair !== undefined && object.pair !== null) {
      message.pair = Pair.fromAmino(object.pair);
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
    return message;
  },
  toAmino(message: PairInfo, useInterfaces: boolean = true): PairInfoAmino {
    const obj: any = {};
    obj.pair = message.pair ? Pair.toAmino(message.pair, useInterfaces) : undefined;
    obj.token_in_price = padDecimal(message.tokenInPrice) === null ? undefined : padDecimal(message.tokenInPrice);
    obj.token_in_price_update_time = message.tokenInPriceUpdateTime ? Timestamp.toAmino(message.tokenInPriceUpdateTime, useInterfaces) : undefined;
    obj.token_out_price = padDecimal(message.tokenOutPrice) === null ? undefined : padDecimal(message.tokenOutPrice);
    obj.token_out_price_update_time = message.tokenOutPriceUpdateTime ? Timestamp.toAmino(message.tokenOutPriceUpdateTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PairInfoAminoMsg): PairInfo {
    return PairInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: PairInfoProtoMsg, useInterfaces: boolean = true): PairInfo {
    return PairInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PairInfo): Uint8Array {
    return PairInfo.encode(message).finish();
  },
  toProtoMsg(message: PairInfo): PairInfoProtoMsg {
    return {
      typeUrl: "/pryzmatics.seal.PairInfo",
      value: PairInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PairInfo.typeUrl, PairInfo);