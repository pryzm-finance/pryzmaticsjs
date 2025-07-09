import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface PoolIncentive {
  id: bigint;
  bondDenom: string;
  amount: Coin;
  incentivesInStableCoinTerms: string;
  blockHeight: bigint;
  blockTime: Timestamp;
}
export interface PoolIncentiveProtoMsg {
  typeUrl: "/pryzmatics.incentives.PoolIncentive";
  value: Uint8Array;
}
export interface PoolIncentiveAmino {
  id?: string;
  bond_denom?: string;
  amount?: CoinAmino;
  incentives_in_stable_coin_terms?: string;
  block_height?: string;
  block_time?: string;
}
export interface PoolIncentiveAminoMsg {
  type: "/pryzmatics.incentives.PoolIncentive";
  value: PoolIncentiveAmino;
}
export interface PoolIncentiveSDKType {
  id: bigint;
  bond_denom: string;
  amount: CoinSDKType;
  incentives_in_stable_coin_terms: string;
  block_height: bigint;
  block_time: TimestampSDKType;
}
export interface PoolTotalIncentives {
  bondDenom: string;
  incentives: Coin[];
  incentivesInStableCoinTerms: string;
}
export interface PoolTotalIncentivesProtoMsg {
  typeUrl: "/pryzmatics.incentives.PoolTotalIncentives";
  value: Uint8Array;
}
export interface PoolTotalIncentivesAmino {
  bond_denom?: string;
  incentives?: CoinAmino[];
  incentives_in_stable_coin_terms?: string;
}
export interface PoolTotalIncentivesAminoMsg {
  type: "/pryzmatics.incentives.PoolTotalIncentives";
  value: PoolTotalIncentivesAmino;
}
export interface PoolTotalIncentivesSDKType {
  bond_denom: string;
  incentives: CoinSDKType[];
  incentives_in_stable_coin_terms: string;
}
function createBasePoolIncentive(): PoolIncentive {
  return {
    id: BigInt(0),
    bondDenom: "",
    amount: Coin.fromPartial({}),
    incentivesInStableCoinTerms: "",
    blockHeight: BigInt(0),
    blockTime: Timestamp.fromPartial({})
  };
}
export const PoolIncentive = {
  typeUrl: "/pryzmatics.incentives.PoolIncentive",
  is(o: any): o is PoolIncentive {
    return o && (o.$typeUrl === PoolIncentive.typeUrl || typeof o.id === "bigint" && typeof o.bondDenom === "string" && Coin.is(o.amount) && typeof o.incentivesInStableCoinTerms === "string" && typeof o.blockHeight === "bigint" && Timestamp.is(o.blockTime));
  },
  isSDK(o: any): o is PoolIncentiveSDKType {
    return o && (o.$typeUrl === PoolIncentive.typeUrl || typeof o.id === "bigint" && typeof o.bond_denom === "string" && Coin.isSDK(o.amount) && typeof o.incentives_in_stable_coin_terms === "string" && typeof o.block_height === "bigint" && Timestamp.isSDK(o.block_time));
  },
  isAmino(o: any): o is PoolIncentiveAmino {
    return o && (o.$typeUrl === PoolIncentive.typeUrl || typeof o.id === "bigint" && typeof o.bond_denom === "string" && Coin.isAmino(o.amount) && typeof o.incentives_in_stable_coin_terms === "string" && typeof o.block_height === "bigint" && Timestamp.isAmino(o.block_time));
  },
  encode(message: PoolIncentive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.bondDenom !== "") {
      writer.uint32(18).string(message.bondDenom);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.incentivesInStableCoinTerms !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.incentivesInStableCoinTerms, 18).atomics);
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(40).int64(message.blockHeight);
    }
    if (message.blockTime !== undefined) {
      Timestamp.encode(message.blockTime, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolIncentive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolIncentive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.bondDenom = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.incentivesInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.blockHeight = reader.int64();
          break;
        case 6:
          message.blockTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolIncentive {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      incentivesInStableCoinTerms: isSet(object.incentivesInStableCoinTerms) ? String(object.incentivesInStableCoinTerms) : "",
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      blockTime: isSet(object.blockTime) ? fromJsonTimestamp(object.blockTime) : undefined
    };
  },
  toJSON(message: PoolIncentive): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.incentivesInStableCoinTerms !== undefined && (obj.incentivesInStableCoinTerms = message.incentivesInStableCoinTerms);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.blockTime !== undefined && (obj.blockTime = fromTimestamp(message.blockTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<PoolIncentive>): PoolIncentive {
    const message = createBasePoolIncentive();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.bondDenom = object.bondDenom ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.incentivesInStableCoinTerms = object.incentivesInStableCoinTerms ?? "";
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.blockTime = object.blockTime !== undefined && object.blockTime !== null ? Timestamp.fromPartial(object.blockTime) : undefined;
    return message;
  },
  fromAmino(object: PoolIncentiveAmino): PoolIncentive {
    const message = createBasePoolIncentive();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.incentives_in_stable_coin_terms !== undefined && object.incentives_in_stable_coin_terms !== null) {
      message.incentivesInStableCoinTerms = object.incentives_in_stable_coin_terms;
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.block_time !== undefined && object.block_time !== null) {
      message.blockTime = Timestamp.fromAmino(object.block_time);
    }
    return message;
  },
  toAmino(message: PoolIncentive, useInterfaces: boolean = true): PoolIncentiveAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    obj.amount = message.amount ? Coin.toAmino(message.amount, useInterfaces) : undefined;
    obj.incentives_in_stable_coin_terms = padDecimal(message.incentivesInStableCoinTerms) === "" ? undefined : padDecimal(message.incentivesInStableCoinTerms);
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.block_time = message.blockTime ? Timestamp.toAmino(message.blockTime, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolIncentiveAminoMsg): PoolIncentive {
    return PoolIncentive.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolIncentiveProtoMsg, useInterfaces: boolean = true): PoolIncentive {
    return PoolIncentive.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolIncentive): Uint8Array {
    return PoolIncentive.encode(message).finish();
  },
  toProtoMsg(message: PoolIncentive): PoolIncentiveProtoMsg {
    return {
      typeUrl: "/pryzmatics.incentives.PoolIncentive",
      value: PoolIncentive.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolIncentive.typeUrl, PoolIncentive);
function createBasePoolTotalIncentives(): PoolTotalIncentives {
  return {
    bondDenom: "",
    incentives: [],
    incentivesInStableCoinTerms: ""
  };
}
export const PoolTotalIncentives = {
  typeUrl: "/pryzmatics.incentives.PoolTotalIncentives",
  is(o: any): o is PoolTotalIncentives {
    return o && (o.$typeUrl === PoolTotalIncentives.typeUrl || typeof o.bondDenom === "string" && Array.isArray(o.incentives) && (!o.incentives.length || Coin.is(o.incentives[0])) && typeof o.incentivesInStableCoinTerms === "string");
  },
  isSDK(o: any): o is PoolTotalIncentivesSDKType {
    return o && (o.$typeUrl === PoolTotalIncentives.typeUrl || typeof o.bond_denom === "string" && Array.isArray(o.incentives) && (!o.incentives.length || Coin.isSDK(o.incentives[0])) && typeof o.incentives_in_stable_coin_terms === "string");
  },
  isAmino(o: any): o is PoolTotalIncentivesAmino {
    return o && (o.$typeUrl === PoolTotalIncentives.typeUrl || typeof o.bond_denom === "string" && Array.isArray(o.incentives) && (!o.incentives.length || Coin.isAmino(o.incentives[0])) && typeof o.incentives_in_stable_coin_terms === "string");
  },
  encode(message: PoolTotalIncentives, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    for (const v of message.incentives) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.incentivesInStableCoinTerms !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.incentivesInStableCoinTerms, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): PoolTotalIncentives {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolTotalIncentives();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDenom = reader.string();
          break;
        case 2:
          message.incentives.push(Coin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 3:
          message.incentivesInStableCoinTerms = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolTotalIncentives {
    return {
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Coin.fromJSON(e)) : [],
      incentivesInStableCoinTerms: isSet(object.incentivesInStableCoinTerms) ? String(object.incentivesInStableCoinTerms) : ""
    };
  },
  toJSON(message: PoolTotalIncentives): unknown {
    const obj: any = {};
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.incentives = [];
    }
    message.incentivesInStableCoinTerms !== undefined && (obj.incentivesInStableCoinTerms = message.incentivesInStableCoinTerms);
    return obj;
  },
  fromPartial(object: Partial<PoolTotalIncentives>): PoolTotalIncentives {
    const message = createBasePoolTotalIncentives();
    message.bondDenom = object.bondDenom ?? "";
    message.incentives = object.incentives?.map(e => Coin.fromPartial(e)) || [];
    message.incentivesInStableCoinTerms = object.incentivesInStableCoinTerms ?? "";
    return message;
  },
  fromAmino(object: PoolTotalIncentivesAmino): PoolTotalIncentives {
    const message = createBasePoolTotalIncentives();
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    message.incentives = object.incentives?.map(e => Coin.fromAmino(e)) || [];
    if (object.incentives_in_stable_coin_terms !== undefined && object.incentives_in_stable_coin_terms !== null) {
      message.incentivesInStableCoinTerms = object.incentives_in_stable_coin_terms;
    }
    return message;
  },
  toAmino(message: PoolTotalIncentives, useInterfaces: boolean = true): PoolTotalIncentivesAmino {
    const obj: any = {};
    obj.bond_denom = message.bondDenom === "" ? undefined : message.bondDenom;
    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Coin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.incentives = message.incentives;
    }
    obj.incentives_in_stable_coin_terms = padDecimal(message.incentivesInStableCoinTerms) === "" ? undefined : padDecimal(message.incentivesInStableCoinTerms);
    return obj;
  },
  fromAminoMsg(object: PoolTotalIncentivesAminoMsg): PoolTotalIncentives {
    return PoolTotalIncentives.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolTotalIncentivesProtoMsg, useInterfaces: boolean = true): PoolTotalIncentives {
    return PoolTotalIncentives.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: PoolTotalIncentives): Uint8Array {
    return PoolTotalIncentives.encode(message).finish();
  },
  toProtoMsg(message: PoolTotalIncentives): PoolTotalIncentivesProtoMsg {
    return {
      typeUrl: "/pryzmatics.incentives.PoolTotalIncentives",
      value: PoolTotalIncentives.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PoolTotalIncentives.typeUrl, PoolTotalIncentives);