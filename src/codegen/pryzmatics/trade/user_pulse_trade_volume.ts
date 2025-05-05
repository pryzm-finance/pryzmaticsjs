import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, padDecimal } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export interface UserPulseTradeVolume {
  address: string;
  icnsName: string;
  totalVolume: string;
  volume24h: string;
  volume7d: string;
  volume30d: string;
  rankTotalVolume: bigint;
  rankVolume24h: bigint;
  rankVolume7d: bigint;
  rankVolume30d: bigint;
  totalVolumeExcludingPryzm: string;
  volume24hExcludingPryzm: string;
  volume7dExcludingPryzm: string;
  volume30dExcludingPryzm: string;
  rankTotalVolumeExcludingPryzm: bigint;
  rankVolume24hExcludingPryzm: bigint;
  rankVolume7dExcludingPryzm: bigint;
  rankVolume30dExcludingPryzm: bigint;
}
export interface UserPulseTradeVolumeProtoMsg {
  typeUrl: "/pryzmatics.trade.UserPulseTradeVolume";
  value: Uint8Array;
}
export interface UserPulseTradeVolumeAmino {
  address?: string;
  icns_name?: string;
  total_volume?: string;
  volume_24h?: string;
  volume_7d?: string;
  volume_30d?: string;
  rank_total_volume?: string;
  rank_volume_24h?: string;
  rank_volume_7d?: string;
  rank_volume_30d?: string;
  total_volume_excluding_pryzm?: string;
  volume_24h_excluding_pryzm?: string;
  volume_7d_excluding_pryzm?: string;
  volume_30d_excluding_pryzm?: string;
  rank_total_volume_excluding_pryzm?: string;
  rank_volume_24h_excluding_pryzm?: string;
  rank_volume_7d_excluding_pryzm?: string;
  rank_volume_30d_excluding_pryzm?: string;
}
export interface UserPulseTradeVolumeAminoMsg {
  type: "/pryzmatics.trade.UserPulseTradeVolume";
  value: UserPulseTradeVolumeAmino;
}
export interface UserPulseTradeVolumeSDKType {
  address: string;
  icns_name: string;
  total_volume: string;
  volume_24h: string;
  volume_7d: string;
  volume_30d: string;
  rank_total_volume: bigint;
  rank_volume_24h: bigint;
  rank_volume_7d: bigint;
  rank_volume_30d: bigint;
  total_volume_excluding_pryzm: string;
  volume_24h_excluding_pryzm: string;
  volume_7d_excluding_pryzm: string;
  volume_30d_excluding_pryzm: string;
  rank_total_volume_excluding_pryzm: bigint;
  rank_volume_24h_excluding_pryzm: bigint;
  rank_volume_7d_excluding_pryzm: bigint;
  rank_volume_30d_excluding_pryzm: bigint;
}
function createBaseUserPulseTradeVolume(): UserPulseTradeVolume {
  return {
    address: "",
    icnsName: "",
    totalVolume: "",
    volume24h: "",
    volume7d: "",
    volume30d: "",
    rankTotalVolume: BigInt(0),
    rankVolume24h: BigInt(0),
    rankVolume7d: BigInt(0),
    rankVolume30d: BigInt(0),
    totalVolumeExcludingPryzm: "",
    volume24hExcludingPryzm: "",
    volume7dExcludingPryzm: "",
    volume30dExcludingPryzm: "",
    rankTotalVolumeExcludingPryzm: BigInt(0),
    rankVolume24hExcludingPryzm: BigInt(0),
    rankVolume7dExcludingPryzm: BigInt(0),
    rankVolume30dExcludingPryzm: BigInt(0)
  };
}
export const UserPulseTradeVolume = {
  typeUrl: "/pryzmatics.trade.UserPulseTradeVolume",
  is(o: any): o is UserPulseTradeVolume {
    return o && (o.$typeUrl === UserPulseTradeVolume.typeUrl || typeof o.address === "string" && typeof o.icnsName === "string" && typeof o.totalVolume === "string" && typeof o.volume24h === "string" && typeof o.volume7d === "string" && typeof o.volume30d === "string" && typeof o.rankTotalVolume === "bigint" && typeof o.rankVolume24h === "bigint" && typeof o.rankVolume7d === "bigint" && typeof o.rankVolume30d === "bigint" && typeof o.totalVolumeExcludingPryzm === "string" && typeof o.volume24hExcludingPryzm === "string" && typeof o.volume7dExcludingPryzm === "string" && typeof o.volume30dExcludingPryzm === "string" && typeof o.rankTotalVolumeExcludingPryzm === "bigint" && typeof o.rankVolume24hExcludingPryzm === "bigint" && typeof o.rankVolume7dExcludingPryzm === "bigint" && typeof o.rankVolume30dExcludingPryzm === "bigint");
  },
  isSDK(o: any): o is UserPulseTradeVolumeSDKType {
    return o && (o.$typeUrl === UserPulseTradeVolume.typeUrl || typeof o.address === "string" && typeof o.icns_name === "string" && typeof o.total_volume === "string" && typeof o.volume_24h === "string" && typeof o.volume_7d === "string" && typeof o.volume_30d === "string" && typeof o.rank_total_volume === "bigint" && typeof o.rank_volume_24h === "bigint" && typeof o.rank_volume_7d === "bigint" && typeof o.rank_volume_30d === "bigint" && typeof o.total_volume_excluding_pryzm === "string" && typeof o.volume_24h_excluding_pryzm === "string" && typeof o.volume_7d_excluding_pryzm === "string" && typeof o.volume_30d_excluding_pryzm === "string" && typeof o.rank_total_volume_excluding_pryzm === "bigint" && typeof o.rank_volume_24h_excluding_pryzm === "bigint" && typeof o.rank_volume_7d_excluding_pryzm === "bigint" && typeof o.rank_volume_30d_excluding_pryzm === "bigint");
  },
  isAmino(o: any): o is UserPulseTradeVolumeAmino {
    return o && (o.$typeUrl === UserPulseTradeVolume.typeUrl || typeof o.address === "string" && typeof o.icns_name === "string" && typeof o.total_volume === "string" && typeof o.volume_24h === "string" && typeof o.volume_7d === "string" && typeof o.volume_30d === "string" && typeof o.rank_total_volume === "bigint" && typeof o.rank_volume_24h === "bigint" && typeof o.rank_volume_7d === "bigint" && typeof o.rank_volume_30d === "bigint" && typeof o.total_volume_excluding_pryzm === "string" && typeof o.volume_24h_excluding_pryzm === "string" && typeof o.volume_7d_excluding_pryzm === "string" && typeof o.volume_30d_excluding_pryzm === "string" && typeof o.rank_total_volume_excluding_pryzm === "bigint" && typeof o.rank_volume_24h_excluding_pryzm === "bigint" && typeof o.rank_volume_7d_excluding_pryzm === "bigint" && typeof o.rank_volume_30d_excluding_pryzm === "bigint");
  },
  encode(message: UserPulseTradeVolume, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.icnsName !== "") {
      writer.uint32(18).string(message.icnsName);
    }
    if (message.totalVolume !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.totalVolume, 18).atomics);
    }
    if (message.volume24h !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.volume24h, 18).atomics);
    }
    if (message.volume7d !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.volume7d, 18).atomics);
    }
    if (message.volume30d !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.volume30d, 18).atomics);
    }
    if (message.rankTotalVolume !== BigInt(0)) {
      writer.uint32(56).uint64(message.rankTotalVolume);
    }
    if (message.rankVolume24h !== BigInt(0)) {
      writer.uint32(64).uint64(message.rankVolume24h);
    }
    if (message.rankVolume7d !== BigInt(0)) {
      writer.uint32(72).uint64(message.rankVolume7d);
    }
    if (message.rankVolume30d !== BigInt(0)) {
      writer.uint32(80).uint64(message.rankVolume30d);
    }
    if (message.totalVolumeExcludingPryzm !== "") {
      writer.uint32(90).string(Decimal.fromUserInput(message.totalVolumeExcludingPryzm, 18).atomics);
    }
    if (message.volume24hExcludingPryzm !== "") {
      writer.uint32(98).string(Decimal.fromUserInput(message.volume24hExcludingPryzm, 18).atomics);
    }
    if (message.volume7dExcludingPryzm !== "") {
      writer.uint32(106).string(Decimal.fromUserInput(message.volume7dExcludingPryzm, 18).atomics);
    }
    if (message.volume30dExcludingPryzm !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.volume30dExcludingPryzm, 18).atomics);
    }
    if (message.rankTotalVolumeExcludingPryzm !== BigInt(0)) {
      writer.uint32(120).uint64(message.rankTotalVolumeExcludingPryzm);
    }
    if (message.rankVolume24hExcludingPryzm !== BigInt(0)) {
      writer.uint32(128).uint64(message.rankVolume24hExcludingPryzm);
    }
    if (message.rankVolume7dExcludingPryzm !== BigInt(0)) {
      writer.uint32(136).uint64(message.rankVolume7dExcludingPryzm);
    }
    if (message.rankVolume30dExcludingPryzm !== BigInt(0)) {
      writer.uint32(144).uint64(message.rankVolume30dExcludingPryzm);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): UserPulseTradeVolume {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserPulseTradeVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.icnsName = reader.string();
          break;
        case 3:
          message.totalVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.volume24h = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.volume7d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.volume30d = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.rankTotalVolume = reader.uint64();
          break;
        case 8:
          message.rankVolume24h = reader.uint64();
          break;
        case 9:
          message.rankVolume7d = reader.uint64();
          break;
        case 10:
          message.rankVolume30d = reader.uint64();
          break;
        case 11:
          message.totalVolumeExcludingPryzm = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 12:
          message.volume24hExcludingPryzm = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 13:
          message.volume7dExcludingPryzm = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 14:
          message.volume30dExcludingPryzm = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 15:
          message.rankTotalVolumeExcludingPryzm = reader.uint64();
          break;
        case 16:
          message.rankVolume24hExcludingPryzm = reader.uint64();
          break;
        case 17:
          message.rankVolume7dExcludingPryzm = reader.uint64();
          break;
        case 18:
          message.rankVolume30dExcludingPryzm = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UserPulseTradeVolume {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      icnsName: isSet(object.icnsName) ? String(object.icnsName) : "",
      totalVolume: isSet(object.totalVolume) ? String(object.totalVolume) : "",
      volume24h: isSet(object.volume24h) ? String(object.volume24h) : "",
      volume7d: isSet(object.volume7d) ? String(object.volume7d) : "",
      volume30d: isSet(object.volume30d) ? String(object.volume30d) : "",
      rankTotalVolume: isSet(object.rankTotalVolume) ? BigInt(object.rankTotalVolume.toString()) : BigInt(0),
      rankVolume24h: isSet(object.rankVolume24h) ? BigInt(object.rankVolume24h.toString()) : BigInt(0),
      rankVolume7d: isSet(object.rankVolume7d) ? BigInt(object.rankVolume7d.toString()) : BigInt(0),
      rankVolume30d: isSet(object.rankVolume30d) ? BigInt(object.rankVolume30d.toString()) : BigInt(0),
      totalVolumeExcludingPryzm: isSet(object.totalVolumeExcludingPryzm) ? String(object.totalVolumeExcludingPryzm) : "",
      volume24hExcludingPryzm: isSet(object.volume24hExcludingPryzm) ? String(object.volume24hExcludingPryzm) : "",
      volume7dExcludingPryzm: isSet(object.volume7dExcludingPryzm) ? String(object.volume7dExcludingPryzm) : "",
      volume30dExcludingPryzm: isSet(object.volume30dExcludingPryzm) ? String(object.volume30dExcludingPryzm) : "",
      rankTotalVolumeExcludingPryzm: isSet(object.rankTotalVolumeExcludingPryzm) ? BigInt(object.rankTotalVolumeExcludingPryzm.toString()) : BigInt(0),
      rankVolume24hExcludingPryzm: isSet(object.rankVolume24hExcludingPryzm) ? BigInt(object.rankVolume24hExcludingPryzm.toString()) : BigInt(0),
      rankVolume7dExcludingPryzm: isSet(object.rankVolume7dExcludingPryzm) ? BigInt(object.rankVolume7dExcludingPryzm.toString()) : BigInt(0),
      rankVolume30dExcludingPryzm: isSet(object.rankVolume30dExcludingPryzm) ? BigInt(object.rankVolume30dExcludingPryzm.toString()) : BigInt(0)
    };
  },
  toJSON(message: UserPulseTradeVolume): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.icnsName !== undefined && (obj.icnsName = message.icnsName);
    message.totalVolume !== undefined && (obj.totalVolume = message.totalVolume);
    message.volume24h !== undefined && (obj.volume24h = message.volume24h);
    message.volume7d !== undefined && (obj.volume7d = message.volume7d);
    message.volume30d !== undefined && (obj.volume30d = message.volume30d);
    message.rankTotalVolume !== undefined && (obj.rankTotalVolume = (message.rankTotalVolume || BigInt(0)).toString());
    message.rankVolume24h !== undefined && (obj.rankVolume24h = (message.rankVolume24h || BigInt(0)).toString());
    message.rankVolume7d !== undefined && (obj.rankVolume7d = (message.rankVolume7d || BigInt(0)).toString());
    message.rankVolume30d !== undefined && (obj.rankVolume30d = (message.rankVolume30d || BigInt(0)).toString());
    message.totalVolumeExcludingPryzm !== undefined && (obj.totalVolumeExcludingPryzm = message.totalVolumeExcludingPryzm);
    message.volume24hExcludingPryzm !== undefined && (obj.volume24hExcludingPryzm = message.volume24hExcludingPryzm);
    message.volume7dExcludingPryzm !== undefined && (obj.volume7dExcludingPryzm = message.volume7dExcludingPryzm);
    message.volume30dExcludingPryzm !== undefined && (obj.volume30dExcludingPryzm = message.volume30dExcludingPryzm);
    message.rankTotalVolumeExcludingPryzm !== undefined && (obj.rankTotalVolumeExcludingPryzm = (message.rankTotalVolumeExcludingPryzm || BigInt(0)).toString());
    message.rankVolume24hExcludingPryzm !== undefined && (obj.rankVolume24hExcludingPryzm = (message.rankVolume24hExcludingPryzm || BigInt(0)).toString());
    message.rankVolume7dExcludingPryzm !== undefined && (obj.rankVolume7dExcludingPryzm = (message.rankVolume7dExcludingPryzm || BigInt(0)).toString());
    message.rankVolume30dExcludingPryzm !== undefined && (obj.rankVolume30dExcludingPryzm = (message.rankVolume30dExcludingPryzm || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<UserPulseTradeVolume>): UserPulseTradeVolume {
    const message = createBaseUserPulseTradeVolume();
    message.address = object.address ?? "";
    message.icnsName = object.icnsName ?? "";
    message.totalVolume = object.totalVolume ?? "";
    message.volume24h = object.volume24h ?? "";
    message.volume7d = object.volume7d ?? "";
    message.volume30d = object.volume30d ?? "";
    message.rankTotalVolume = object.rankTotalVolume !== undefined && object.rankTotalVolume !== null ? BigInt(object.rankTotalVolume.toString()) : BigInt(0);
    message.rankVolume24h = object.rankVolume24h !== undefined && object.rankVolume24h !== null ? BigInt(object.rankVolume24h.toString()) : BigInt(0);
    message.rankVolume7d = object.rankVolume7d !== undefined && object.rankVolume7d !== null ? BigInt(object.rankVolume7d.toString()) : BigInt(0);
    message.rankVolume30d = object.rankVolume30d !== undefined && object.rankVolume30d !== null ? BigInt(object.rankVolume30d.toString()) : BigInt(0);
    message.totalVolumeExcludingPryzm = object.totalVolumeExcludingPryzm ?? "";
    message.volume24hExcludingPryzm = object.volume24hExcludingPryzm ?? "";
    message.volume7dExcludingPryzm = object.volume7dExcludingPryzm ?? "";
    message.volume30dExcludingPryzm = object.volume30dExcludingPryzm ?? "";
    message.rankTotalVolumeExcludingPryzm = object.rankTotalVolumeExcludingPryzm !== undefined && object.rankTotalVolumeExcludingPryzm !== null ? BigInt(object.rankTotalVolumeExcludingPryzm.toString()) : BigInt(0);
    message.rankVolume24hExcludingPryzm = object.rankVolume24hExcludingPryzm !== undefined && object.rankVolume24hExcludingPryzm !== null ? BigInt(object.rankVolume24hExcludingPryzm.toString()) : BigInt(0);
    message.rankVolume7dExcludingPryzm = object.rankVolume7dExcludingPryzm !== undefined && object.rankVolume7dExcludingPryzm !== null ? BigInt(object.rankVolume7dExcludingPryzm.toString()) : BigInt(0);
    message.rankVolume30dExcludingPryzm = object.rankVolume30dExcludingPryzm !== undefined && object.rankVolume30dExcludingPryzm !== null ? BigInt(object.rankVolume30dExcludingPryzm.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: UserPulseTradeVolumeAmino): UserPulseTradeVolume {
    const message = createBaseUserPulseTradeVolume();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.icns_name !== undefined && object.icns_name !== null) {
      message.icnsName = object.icns_name;
    }
    if (object.total_volume !== undefined && object.total_volume !== null) {
      message.totalVolume = object.total_volume;
    }
    if (object.volume_24h !== undefined && object.volume_24h !== null) {
      message.volume24h = object.volume_24h;
    }
    if (object.volume_7d !== undefined && object.volume_7d !== null) {
      message.volume7d = object.volume_7d;
    }
    if (object.volume_30d !== undefined && object.volume_30d !== null) {
      message.volume30d = object.volume_30d;
    }
    if (object.rank_total_volume !== undefined && object.rank_total_volume !== null) {
      message.rankTotalVolume = BigInt(object.rank_total_volume);
    }
    if (object.rank_volume_24h !== undefined && object.rank_volume_24h !== null) {
      message.rankVolume24h = BigInt(object.rank_volume_24h);
    }
    if (object.rank_volume_7d !== undefined && object.rank_volume_7d !== null) {
      message.rankVolume7d = BigInt(object.rank_volume_7d);
    }
    if (object.rank_volume_30d !== undefined && object.rank_volume_30d !== null) {
      message.rankVolume30d = BigInt(object.rank_volume_30d);
    }
    if (object.total_volume_excluding_pryzm !== undefined && object.total_volume_excluding_pryzm !== null) {
      message.totalVolumeExcludingPryzm = object.total_volume_excluding_pryzm;
    }
    if (object.volume_24h_excluding_pryzm !== undefined && object.volume_24h_excluding_pryzm !== null) {
      message.volume24hExcludingPryzm = object.volume_24h_excluding_pryzm;
    }
    if (object.volume_7d_excluding_pryzm !== undefined && object.volume_7d_excluding_pryzm !== null) {
      message.volume7dExcludingPryzm = object.volume_7d_excluding_pryzm;
    }
    if (object.volume_30d_excluding_pryzm !== undefined && object.volume_30d_excluding_pryzm !== null) {
      message.volume30dExcludingPryzm = object.volume_30d_excluding_pryzm;
    }
    if (object.rank_total_volume_excluding_pryzm !== undefined && object.rank_total_volume_excluding_pryzm !== null) {
      message.rankTotalVolumeExcludingPryzm = BigInt(object.rank_total_volume_excluding_pryzm);
    }
    if (object.rank_volume_24h_excluding_pryzm !== undefined && object.rank_volume_24h_excluding_pryzm !== null) {
      message.rankVolume24hExcludingPryzm = BigInt(object.rank_volume_24h_excluding_pryzm);
    }
    if (object.rank_volume_7d_excluding_pryzm !== undefined && object.rank_volume_7d_excluding_pryzm !== null) {
      message.rankVolume7dExcludingPryzm = BigInt(object.rank_volume_7d_excluding_pryzm);
    }
    if (object.rank_volume_30d_excluding_pryzm !== undefined && object.rank_volume_30d_excluding_pryzm !== null) {
      message.rankVolume30dExcludingPryzm = BigInt(object.rank_volume_30d_excluding_pryzm);
    }
    return message;
  },
  toAmino(message: UserPulseTradeVolume, useInterfaces: boolean = true): UserPulseTradeVolumeAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.icns_name = message.icnsName === "" ? undefined : message.icnsName;
    obj.total_volume = padDecimal(message.totalVolume) === "" ? undefined : padDecimal(message.totalVolume);
    obj.volume_24h = padDecimal(message.volume24h) === "" ? undefined : padDecimal(message.volume24h);
    obj.volume_7d = padDecimal(message.volume7d) === "" ? undefined : padDecimal(message.volume7d);
    obj.volume_30d = padDecimal(message.volume30d) === "" ? undefined : padDecimal(message.volume30d);
    obj.rank_total_volume = message.rankTotalVolume ? message.rankTotalVolume.toString() : undefined;
    obj.rank_volume_24h = message.rankVolume24h ? message.rankVolume24h.toString() : undefined;
    obj.rank_volume_7d = message.rankVolume7d ? message.rankVolume7d.toString() : undefined;
    obj.rank_volume_30d = message.rankVolume30d ? message.rankVolume30d.toString() : undefined;
    obj.total_volume_excluding_pryzm = padDecimal(message.totalVolumeExcludingPryzm) === "" ? undefined : padDecimal(message.totalVolumeExcludingPryzm);
    obj.volume_24h_excluding_pryzm = padDecimal(message.volume24hExcludingPryzm) === "" ? undefined : padDecimal(message.volume24hExcludingPryzm);
    obj.volume_7d_excluding_pryzm = padDecimal(message.volume7dExcludingPryzm) === "" ? undefined : padDecimal(message.volume7dExcludingPryzm);
    obj.volume_30d_excluding_pryzm = padDecimal(message.volume30dExcludingPryzm) === "" ? undefined : padDecimal(message.volume30dExcludingPryzm);
    obj.rank_total_volume_excluding_pryzm = message.rankTotalVolumeExcludingPryzm ? message.rankTotalVolumeExcludingPryzm.toString() : undefined;
    obj.rank_volume_24h_excluding_pryzm = message.rankVolume24hExcludingPryzm ? message.rankVolume24hExcludingPryzm.toString() : undefined;
    obj.rank_volume_7d_excluding_pryzm = message.rankVolume7dExcludingPryzm ? message.rankVolume7dExcludingPryzm.toString() : undefined;
    obj.rank_volume_30d_excluding_pryzm = message.rankVolume30dExcludingPryzm ? message.rankVolume30dExcludingPryzm.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: UserPulseTradeVolumeAminoMsg): UserPulseTradeVolume {
    return UserPulseTradeVolume.fromAmino(object.value);
  },
  fromProtoMsg(message: UserPulseTradeVolumeProtoMsg, useInterfaces: boolean = true): UserPulseTradeVolume {
    return UserPulseTradeVolume.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UserPulseTradeVolume): Uint8Array {
    return UserPulseTradeVolume.encode(message).finish();
  },
  toProtoMsg(message: UserPulseTradeVolume): UserPulseTradeVolumeProtoMsg {
    return {
      typeUrl: "/pryzmatics.trade.UserPulseTradeVolume",
      value: UserPulseTradeVolume.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UserPulseTradeVolume.typeUrl, UserPulseTradeVolume);